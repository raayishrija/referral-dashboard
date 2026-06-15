import React, { useState, useEffect, useMemo } from "react";
import "./ReferralTable.css";

const API_URL = "https://nxtwave-assessments-backend-nxtwave-media-static.s3-ap-south-1.amazonaws.com/topin_beta/media/content_loading/uploads/d4457a9c-6134-46a5-b31c-60ad13a3e2f6_userData.json";
const ROWS_PER_PAGE = 10;

const NAMES = [
  "Aarav Shah", "Priya Nair", "Rahul Mehta", "Sneha Reddy", "Kiran Joshi",
  "Ananya Singh", "Vikram Rao", "Divya Patel", "Arjun Kumar", "Meera Iyer",
  "Rohan Gupta", "Pooja Sharma", "Aditya Bose", "Kavya Menon", "Nikhil Das",
  "Tanvi Verma", "Siddharth Nair", "Ishaan Chopra", "Riya Bajaj", "Yash Malhotra",
  "Kritika Sinha", "Manish Tiwari", "Diya Agarwal", "Ayaan Khan", "Nisha Kapoor",
  "Soham Desai", "Pallavi Jain", "Dhruv Saxena", "Ankita Roy", "Varun Pillai",
  "Shruti Ghosh",
];

const SearchIcon = () => (
  <svg width="15" height="15" fill="none" viewBox="0 0 24 24">
    <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2"/>
    <path d="M16.5 16.5L21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const ChevronL = () => (
  <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
    <polyline points="15,18 9,12 15,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ChevronR = () => (
  <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
    <polyline points="9,18 15,12 9,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

function normalizeRow(row) {
  return {
    id: row.user_id,
    name: NAMES[row.user_id - 1] || `User #${row.user_id}`,
    serviceName: row.service_name || "—",
    date: row.date || "—",
    profit: row.profit ? `₹${Number(row.profit).toLocaleString("en-IN")}` : "—",
  };
}

export default function ReferralTable() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    const ctrl = new AbortController();
    fetch(API_URL, { signal: ctrl.signal })
      .then(r => { if (!r.ok) throw new Error(); return r.json(); })
      .then(json => {
        const arr = Array.isArray(json) ? json : json.data || json.users || [];
        setData(arr.map(normalizeRow));
        setLoading(false);
      })
      .catch(e => { if (e.name !== "AbortError") setLoading(false); });
    return () => ctrl.abort();
  }, []);

  const filtered = useMemo(() => {
    if (!search.trim()) return data;
    const q = search.trim().toLowerCase();
    return data.filter(r => r.name.toLowerCase().includes(q));
  }, [data, search]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / ROWS_PER_PAGE));
  const curPage = Math.min(page, totalPages);
  const pageData = filtered.slice((curPage - 1) * ROWS_PER_PAGE, curPage * ROWS_PER_PAGE);

  const handleSearch = e => { setSearch(e.target.value); setPage(1); };

  const getPages = () => {
    if (totalPages <= 7) return Array.from({length: totalPages}, (_, i) => i + 1);
    const p = [];
    p.push(1);
    if (curPage > 3) p.push("...");
    for (let i = Math.max(2, curPage - 1); i <= Math.min(totalPages - 1, curPage + 1); i++) p.push(i);
    if (curPage < totalPages - 2) p.push("...");
    p.push(totalPages);
    return p;
  };

  return (
    <section className="table-section">
      <div className="table-header">
        <div>
          <div className="table-title">Referral Transactions</div>
          <div className="table-sub">
            {loading ? "Loading data..." : `${filtered.length} record${filtered.length !== 1 ? "s" : ""} found`}
          </div>
        </div>
        <div className="table-search">
          <span className="search-ico"><SearchIcon /></span>
          <input
            className="table-search-input"
            placeholder="Search by name..."
            value={search}
            onChange={handleSearch}
          />
          {search && (
            <button className="clear-x" onClick={() => { setSearch(""); setPage(1); }}>×</button>
          )}
        </div>
      </div>

      <div className="table-wrap">
        {loading ? (
          <div className="tbl-state">
            <div className="spinner" />
            <p>Loading referral data...</p>
          </div>
        ) : (
          <table className="ref-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Service Name</th>
                <th>Date</th>
                <th>Profit</th>
              </tr>
            </thead>
            <tbody>
              {pageData.length === 0 ? (
                <tr>
                  <td colSpan={5}>
                    <div className="no-rows">
                      <svg width="44" height="44" fill="none" viewBox="0 0 24 24" style={{opacity:0.25}}>
                        <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.5"/>
                        <path d="m21 21-4.35-4.35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                      <p>No matching data</p>
                      <span>Try searching a different name</span>
                    </div>
                  </td>
                </tr>
              ) : (
                pageData.map((row, idx) => (
                  <tr key={row.id}>
                    <td className="row-num">{(curPage - 1) * ROWS_PER_PAGE + idx + 1}</td>
                    <td>
                      <span className="row-name">{row.name}</span>
                    </td>
                    <td><span className="svc-chip">{row.serviceName}</span></td>
                    <td className="date-cell">{row.date}</td>
                    <td><span className="profit-val">{row.profit}</span></td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        )}
      </div>

      {!loading && filtered.length > 0 && (
        <div className="pagination">
          <span className="page-info">Page {curPage} of {totalPages} · {filtered.length} records</span>
          <div className="page-controls">
            <button className="page-btn" disabled={curPage === 1} onClick={() => setPage(curPage - 1)}>
              <ChevronL />
            </button>
            {getPages().map((p, i) =>
              p === "..." ? (
                <span key={`e${i}`} className="ellipsis">…</span>
              ) : (
                <button
                  key={p}
                  className={`page-btn${curPage === p ? " active" : ""}`}
                  onClick={() => setPage(p)}
                >
                  {p}
                </button>
              )
            )}
            <button className="page-btn" disabled={curPage === totalPages} onClick={() => setPage(curPage + 1)}>
              <ChevronR />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}