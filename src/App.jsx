import React from "react";
import "./App.css";
import Header from "./components/Header";
import StatsCards from "./components/StatsCards";
import ReferralLinks from "./components/ReferralLinks";
import ReferralTable from "./components/ReferralTable";
import { statsData, referralLink, referralCode } from "./mockData";

export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <div className="page-container">
          {/* Page heading */}
          <div className="page-heading">
            <div>
              <h1 className="page-title">Referral Dashboard</h1>
              <p className="page-desc">Track your referrals, earnings and commission in real time.</p>
            </div>
            <div className="heading-badge">
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Active Member
            </div>
          </div>

          <StatsCards stats={statsData} />
          <ReferralLinks link={referralLink} code={referralCode} />
          <ReferralTable />
        </div>
      </main>
    </div>
  );
}
