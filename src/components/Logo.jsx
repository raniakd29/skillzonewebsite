import React from 'react';
import './Logo.css';

function Logo({ className = '' }) {
  return (
    <div className={`skillzone-logo ${className}`}>
      <span className="logo-text">SKILL</span>
      <span className="logo-text-green">ZONE</span>
    </div>
  );
}

export default Logo;