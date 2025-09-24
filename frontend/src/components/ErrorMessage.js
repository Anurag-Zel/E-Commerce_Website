import React from 'react';
import './ErrorMessage.css';

const ErrorMessage = ({ title = 'Oops! Something went wrong', message, onRetry, retryLabel = 'Try Again' }) => {
  return (
    <div className="error-message" role="alert">
      <h2 className="error-title">{title}</h2>
      {message && <p className="error-text">{message}</p>}
      {onRetry && (
        <button className="retry-btn" onClick={onRetry}>
          {retryLabel}
        </button>
      )}
    </div>
  );
};

export default ErrorMessage;
