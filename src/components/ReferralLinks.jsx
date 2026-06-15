import React, { useState } from "react";
import "./ReferralLinks.css";

function CopyIcon() {
  return (
    <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
      <rect x="9" y="9" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="2"/>
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
      <polyline points="20,6 9,17 4,12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
      <circle cx="18" cy="5" r="3" stroke="currentColor" strokeWidth="2"/>
      <circle cx="6" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
      <circle cx="18" cy="19" r="3" stroke="currentColor" strokeWidth="2"/>
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" stroke="currentColor" strokeWidth="2"/>
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );
}

function GiftIcon() {
  return (
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
      <polyline points="20,12 20,22 4,22 4,12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="2" y="7" width="20" height="5" rx="1" stroke="currentColor" strokeWidth="2"/>
      <line x1="12" y1="22" x2="12" y2="7" stroke="currentColor" strokeWidth="2"/>
      <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function ReferralLinks({ link, code }) {
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  const copy = (text, setter) => {
    navigator.clipboard.writeText(text).catch(() => {});
    setter(true);
    setTimeout(() => setter(false), 2000);
  };

  return (
    <section className="referral-section">
      <div className="referral-header">
        <div className="referral-title-wrap">
          <span className="referral-icon"><GiftIcon /></span>
          <div>
            <h2 className="section-title" style={{ marginBottom: 2 }}>Your Referral Details</h2>
            <p className="referral-sub">Share your link or code to earn rewards</p>
          </div>
        </div>
        <div className="referral-badge">
          <ShareIcon />
          Share & Earn
        </div>
      </div>

      <div className="referral-cards">
        {/* Link card */}
        <div className="ref-card">
          <div className="ref-card-label">
            <span className="ref-dot link-dot" />
            Your Referral Link
          </div>
          <div className="ref-input-row">
            <div className="ref-value link-value">{link}</div>
            <button
              className={`copy-btn ${copiedLink ? "copied" : ""}`}
              onClick={() => copy(link, setCopiedLink)}
            >
              {copiedLink ? <><CheckIcon /> Copied!</> : <><CopyIcon /> Copy Link</>}
            </button>
          </div>
        </div>

        {/* Code card */}
        <div className="ref-card code-card">
          <div className="ref-card-label">
            <span className="ref-dot code-dot" />
            Your Referral Code
          </div>
          <div className="ref-input-row">
            <div className="ref-value code-value">{code}</div>
            <button
              className={`copy-btn code-copy ${copiedCode ? "copied" : ""}`}
              onClick={() => copy(code, setCopiedCode)}
            >
              {copiedCode ? <><CheckIcon /> Copied!</> : <><CopyIcon /> Copy Code</>}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
