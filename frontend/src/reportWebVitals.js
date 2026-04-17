/**
 * Reports Core Web Vitals to the provided callback function.
 * 
 * @param {Function} onPerfEntry - Callback function to receive metrics.
 *   Can be a custom reporter or console.log.
 * 
 * @example
 * // Log to console in development
 * reportWebVitals(console.log);
 * 
 * @example
 * // Send to Google Analytics 4
 * reportWebVitals(({ name, delta, id }) => {
 *   gtag('event', name, {
 *     event_category: 'Web Vitals',
 *     event_label: id,
 *     value: Math.round(name === 'CLS' ? delta * 1000 : delta),
 *     non_interaction: true,
 *   });
 * });
 */
const reportWebVitals = (onPerfEntry) => {
  // Guard: Ensure callback is provided and is a function
  if (!onPerfEntry || typeof onPerfEntry !== 'function') {
    return;
  }

  // Only load and report metrics in production (optional)
  // Comment out if you want metrics in development too
  if (process.env.NODE_ENV !== 'production') {
    console.debug('[Web Vitals] Skipping reporting in development mode.');
    return;
  }

  // Dynamic import with error handling
  import('web-vitals')
    .then((module) => {
      const { getCLS, getFID, getFCP, getLCP, getTTFB } = module;

      // Report each metric individually
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    })
    .catch((error) => {
      // Fail silently in production; log error in development
      if (process.env.NODE_ENV === 'development') {
        console.error('[Web Vitals] Failed to load web-vitals library:', error);
      }
    });
};

export default reportWebVitals;
