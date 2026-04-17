/**
 * Reports Core Web Vitals metrics to the provided callback function.
 * 
 * This function dynamically imports the `web-vitals` library and reports
 * Cumulative Layout Shift (CLS), First Input Delay (FID), First Contentful Paint (FCP),
 * Largest Contentful Paint (LCP), and Time to First Byte (TTFB).
 * 
 * **Usage in Development:**
 * ```js
 * reportWebVitals(console.log);
 * ```
 * 
 * **Usage in Production (Google Analytics 4):**
 * ```js
 * reportWebVitals(({ name, delta, id }) => {
 *   if (window.gtag) {
 *     window.gtag('event', name, {
 *       event_category: 'Web Vitals',
 *       event_label: id,
 *       value: Math.round(name === 'CLS' ? delta * 1000 : delta),
 *       non_interaction: true,
 *     });
 *   }
 * });
 * ```
 * 
 * @param {Function} onPerfEntry - Callback function that receives performance metrics.
 *   The callback is invoked once per metric with an object containing:
 *   - `name` {string} - Metric name ('CLS', 'FID', 'FCP', 'LCP', 'TTFB')
 *   - `value` {number} - Current metric value
 *   - `delta` {number} - Delta between current and previous value
 *   - `id` {string} - Unique identifier for the metric instance
 *   - `entries` {PerformanceEntry[]} - Associated performance entries
 * 
 * @returns {void}
 * 
 * @example
 * // Log all metrics to console (development only)
 * reportWebVitals(console.log);
 * 
 * @example
 * // Send to custom analytics endpoint
 * reportWebVitals((metric) => {
 *   navigator.sendBeacon('/api/vitals', JSON.stringify(metric));
 * });
 * 
 * @see {@link https://web.dev/vitals/|Web Vitals Documentation}
 */
const reportWebVitals = (onPerfEntry) => {
  // Guard: Ensure callback is provided and is a function
  if (!onPerfEntry || typeof onPerfEntry !== 'function') {
    return;
  }

  // Only load and report metrics in production (optional)
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
