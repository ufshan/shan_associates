import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Get the root element with type safety
const rootElement = document.getElementById('root');

// Ensure the root element exists before rendering
if (!rootElement) {
  throw new Error('Failed to find the root element. Please ensure a <div id="root"></div> exists in your HTML.');
}

// Create root and render app
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Performance measuring with environment check
if (process.env.NODE_ENV === 'development') {
  reportWebVitals(console.log);
} else {
  // In production, send to analytics endpoint (example)
  reportWebVitals((metric) => {
    // Example: Send to Google Analytics, Mixpanel, etc.
    // gtag('event', metric.name, { value: metric.value });
    console.debug(`[Performance] ${metric.name}: ${metric.value}`);
  });
}

// Optional: Add cleanup for hot module replacement (if using webpack dev server)
if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    root.render(
      <React.StrictMode>
        <NextApp />
      </React.StrictMode>
    );
  });
}
