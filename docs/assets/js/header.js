function initializeHeader() {
  let lastScrollTop = 0;
  const scrollThreshold = 100;
  const minScrollForMobile = 50;
  let scrollTimer = null;
  
  function isMobileView() {
    // Check both window.innerWidth and document.documentElement.clientWidth
    // Some markdown pages might report different widths
    return window.innerWidth <= 695 || document.documentElement.clientWidth <= 695;
  }
  
  function handleScroll() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    const isMobile = isMobileView();
    
    if (isMobile) {
      const scrollDelta = currentScroll - lastScrollTop;
      
      // Clear existing timer
      if (scrollTimer !== null) {
        clearTimeout(scrollTimer);
      }
      
      if (Math.abs(scrollDelta) > 5) {
        if (scrollDelta > 0 && currentScroll > minScrollForMobile) {
          document.body.classList.remove('scrollUp');
          document.body.classList.add('scrollDown');
        } else if (scrollDelta < 0) {
          document.body.classList.remove('scrollDown');
          document.body.classList.add('scrollUp');
          
          // Set timer to keep header visible for a moment after scrolling up
          scrollTimer = setTimeout(() => {
            if (currentScroll <= minScrollForMobile) {
              document.body.classList.remove('scrollDown');
              document.body.classList.add('scrollUp');
            }
          }, 150);
        }
      }
    } else {
      if (currentScroll > scrollThreshold) {
        document.body.classList.add('scrolled');
      } else {
        document.body.classList.remove('scrolled');
      }
    }
    
    lastScrollTop = currentScroll;
  }

  // Remove any existing scroll listeners
  window.removeEventListener('scroll', handleScroll);
  
  // Add the scroll listener
  window.addEventListener('scroll', handleScroll, { passive: true });
}

// Initialize on DOMContentLoaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeHeader);
} else {
  initializeHeader();
}

// Global toggle menu function
window.togglemenu = function() {
  var element = document.body;
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  
  if (currentScroll > 100) {
    element.classList.add('scrolled');
  }
  
  element.classList.toggle("toggle");
  element.classList.add("scrollUp");
} 