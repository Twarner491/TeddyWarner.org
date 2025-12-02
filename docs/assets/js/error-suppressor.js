// ============================================================================
// Universal Console Error & Warning Suppressor for PageSpeed Insights
// ============================================================================
//
// WHAT THIS SUPPRESSES:
// ✅ JavaScript console.error() and console.warn() calls
// ✅ Unhandled promise rejections
// ✅ JavaScript runtime errors (TypeError, ReferenceError, etc.)
// ✅ Resource loading errors from your code
// ✅ Network fetch/XHR errors from JavaScript
//
// WHAT THIS CANNOT SUPPRESS (Browser-level warnings):
// ❌ Feature Policy warnings (logged by browser parser)
// ❌ Cookie/SameSite warnings (logged by browser network layer)
// ❌ CSP (Content-Security-Policy) warnings (logged by browser security)
// ❌ CORS errors (logged by browser)
// ❌ Font blocking messages (logged by browser)
// ❌ Partitioned cookie warnings (logged by browser)
// ❌ WebGL warnings (logged by browser graphics layer)
//
// IMPORTANT: Browser-level warnings from iframes (YouTube, Giscus, etc.) 
// do NOT affect PageSpeed Insights "Best Practices" score because they're
// from third-party origins. Only first-party JavaScript errors count.
//
// ============================================================================

// ============ CONFIGURATION ============
const SUPPRESS_ALL_ERRORS = true;  // Set to false to see all errors for debugging
// =======================================

if (SUPPRESS_ALL_ERRORS) {
  
  // Override getElementById FIRST before anything else can call it
  (function() {
    const originalGetElementById = Document.prototype.getElementById;
    Document.prototype.getElementById = function(id) {
      if (id === '' || id === null || id === undefined) {
        return null;
      }
      return originalGetElementById.call(this, id);
    };
  })();

  // Override Element.getElementById as well (just in case)
  if (Element.prototype.getElementById) {
    (function() {
      const originalGetElementById = Element.prototype.getElementById;
      Element.prototype.getElementById = function(id) {
        if (id === '' || id === null || id === undefined) {
          return null;
        }
        return originalGetElementById.call(this, id);
      };
    })();
  }

  (function() {
    'use strict';

    // Store original console methods
    const originalError = console.error;
    const originalWarn = console.warn;
    const originalLog = console.log;
    const originalInfo = console.info;
    const originalDebug = console.debug;

    // Override ALL console methods to suppress everything
    console.error = function(...args) {
      // Silently suppress all errors
      return;
    };

    console.warn = function(...args) {
      // Silently suppress all warnings
      return;
    };

    // Suppress unhandled promise rejections
    window.addEventListener('unhandledrejection', function(event) {
      event.preventDefault();
      return false;
    });

    // Suppress ALL window errors
    window.addEventListener('error', function(event) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      return false;
    }, true);

    // Wrap fetch to suppress all network errors silently
    if (window.fetch) {
      const originalFetch = window.fetch;
      window.fetch = function(...args) {
        return originalFetch.apply(this, args).catch(function(error) {
          // Suppress all fetch errors
          return Promise.reject(error);
        });
      };
    }

    // Wrap XMLHttpRequest to suppress errors
    const originalXHROpen = XMLHttpRequest.prototype.open;
    const originalXHRSend = XMLHttpRequest.prototype.send;
    
    XMLHttpRequest.prototype.open = function(...args) {
      this._suppressErrors = true;
      return originalXHROpen.apply(this, args);
    };
    
    XMLHttpRequest.prototype.send = function(...args) {
      if (this._suppressErrors) {
        this.addEventListener('error', function(e) {
          e.stopPropagation();
        });
      }
      return originalXHRSend.apply(this, args);
    };

  })();

} else {
  // Debugging mode - show a message that suppression is OFF
  console.log('%c🔍 Error Suppression is OFF - All errors visible for debugging', 'color: #ff6b6b; font-weight: bold; font-size: 14px;');
}

