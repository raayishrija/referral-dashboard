import React from "react";
import "./StatsCards.css";

const icons = {
  wallet: (
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
      <rect x="2" y="7" width="20" height="14" rx="3" stroke="currentColor" strokeWidth="1.8"/>
      <path d="M16 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" fill="currentColor"/>
      <path d="M2 10h20M6 7V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  ),
  percent: (
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
      <circle cx="7" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.8"/>
      <circle cx="17" cy="17" r="2.5" stroke="currentColor" strokeWidth="1.8"/>
      <path d="M5 19L19 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  ),
  users: (
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.8"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  ),
  tag: (
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="7" cy="7" r="1.5" fill="currentColor"/>
    </svg>
  ),
  coins: (
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.8"/>
      <path d="M18.09 10.37A6 6 0 1 1 10.34 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M7 6h2.5M7 10h2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  trending: (
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
      <polyline points="23,6 13.5,15.5 8.5,10.5 1,18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <polyline points="17,6 23,6 23,12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  badge: (
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
      <circle cx="12" cy="8" r="6" stroke="currentColor" strokeWidth="1.8"/>
      <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  bank: (
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
      <rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.8"/>
      <path d="M16 11v6M12 11v6M8 11v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M2 11h20M12 3L2 7h20L12 3z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
};

export default function StatsCards({ stats }) {
  return (
    <section className="stats-section">
      <h2 className="section-title">Overview</h2>
      <div className="stats-grid">
        {stats.map((stat) => (
          <div className="stat-card" key={stat.id}>
            <div className="stat-icon" style={{ background: stat.bg, color: stat.color }}>
              {icons[stat.icon]}
            </div>
            <div className="stat-content">
              <span className="stat-label">{stat.label}</span>
              <span className="stat-value">{stat.value}</span>
              <span className="stat-trend" style={{ color: "#10b981" }}>
                <svg width="12" height="12" fill="none" viewBox="0 0 24 24">
                  <polyline points="23,6 13.5,15.5 8.5,10.5 1,18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {stat.trend} this month
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
