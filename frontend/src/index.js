import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// ---------- Strict Root Element Validation ----------
const rootElement = document.getElementById('root');

if (!rootElement) {
  // In development, log a clear error. In production, render a fallback message.
  if (process.env.NODE_ENV === 'development') {
    throw new Error(
      '❌ Root element not found. Ensure <div id="root"></div> exists in public/index.html'
    );
  } else {
    // Graceful degradation for production (prevents white screen)
    document.body.innerHTML = `
      <div style="display:flex;align-items:center;justify-content:center;height:100vh;font-family:sans-serif;">
        <h1>Unable to load application</h1>
      </div>
    `;
  }
}

// ---------- Create Root & Render ----------
const root = ReactDOM.createRoot(rootElement);

function renderApp() {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

renderApp();

// ---------- Web Vitals Reporting (Production‑Ready) ----------
if (process.env.NODE_ENV === 'development') {
  // Log to console during development
  reportWebVitals(console.log);
} else {
  // In production, send metrics to your analytics endpoint
  reportWebVitals(({ name, delta, id, value }) => {
    // Example: Google Analytics 4
    if (window.gtag) {
      window.gtag('event', name, {
        event_category: 'Web Vitals',
        event_label: id,
        value: Math.round(name === 'CLS' ? delta * 1000 : delta),
        non_interaction: true,
      });
    }
    // Example: Custom analytics beacon
    // navigator.sendBeacon('/api/vitals', JSON.stringify({ name, value, delta, id }));
  });
}

// ---------- Hot Module Replacement (Development Only) ----------
if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    root.render(
      <React.StrictMode>
        <NextApp />
      </React.StrictMode>
    );
  });

  // Optional: Preserve component state during HMR updates
  module.hot.accept('./index.css', () => {
    // CSS changes are automatically applied – no action needed
  });
}

// ---------- Optional: Global Error Boundary for React ----------
// If you want to catch rendering errors without crashing the whole app,
// consider wrapping <App /> with an ErrorBoundary component.
// (This would require creating an ErrorBoundary class component or using react-error-boundary)
