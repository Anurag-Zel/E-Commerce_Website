import React from 'react';
import './Spinner.css';

const Spinner = ({ label = 'Loading...' }) => {
  return (
    <div className="spinner-wrapper" role="status" aria-live="polite" aria-busy="true">
      <div className="spinner" />
      {label && <span className="spinner-label">{label}</span>}
    </div>
  );
};

export default Spinner;
