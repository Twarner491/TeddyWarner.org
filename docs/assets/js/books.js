document.addEventListener("DOMContentLoaded", function() {
  // State management
  let currentSort = 'date-desc'; // 'abc', 'date-asc', 'date-desc'
  let showFavoritesOnly = false;
  let dateDescending = true; // Track date sort direction
  let currentType = 'all'; // 'all', 'book', 'article'
  
  // Get all book items
  const booksGrid = document.querySelector('.books-grid');
  const bookItems = document.querySelectorAll('.book-item');
  
  // Filter buttons
  const btnAbc = document.getElementById('filter-abc');
  const btnDate = document.getElementById('filter-date');
  const btnFavorites = document.getElementById('filter-favorites');
  const btnType = document.getElementById('filter-type');
  
  // Sort functions
  function sortBooks(sortType) {
    const items = Array.from(bookItems);
    
    items.sort((a, b) => {
      if (sortType === 'abc') {
        const titleA = a.dataset.title.toLowerCase();
        const titleB = b.dataset.title.toLowerCase();
        return titleA.localeCompare(titleB);
      } else if (sortType === 'date-asc') {
        const dateA = new Date(a.dataset.date || '1900-01-01');
        const dateB = new Date(b.dataset.date || '1900-01-01');
        return dateA - dateB;
      } else if (sortType === 'date-desc') {
        const dateA = new Date(a.dataset.date || '1900-01-01');
        const dateB = new Date(b.dataset.date || '1900-01-01');
        return dateB - dateA;
      }
      return 0;
    });
    
    // Re-append items in sorted order
    items.forEach(item => booksGrid.appendChild(item));
    
    // Re-trigger staggered animation after layout settles
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        triggerStaggeredAnimation();
      });
    });
  }
  
  // Apply all filters
  function applyFilters() {
    bookItems.forEach(item => {
      let show = true;
      
      // Check favorites filter
      if (showFavoritesOnly && item.dataset.favorite !== 'true') {
        show = false;
      }
      
      // Check type filter
      if (currentType !== 'all') {
        const itemType = item.dataset.type || 'book';
        if (itemType !== currentType) {
          show = false;
        }
      }
      
      item.style.display = show ? 'flex' : 'none';
    });
    
    // Re-trigger staggered animation after layout settles
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        triggerStaggeredAnimation();
      });
    });
  }
  
  // Update active button states
  function updateButtonStates() {
    // Sort buttons - only ABC and Date are mutually exclusive sort options
    [btnAbc, btnDate].forEach(btn => {
      if (btn) btn.classList.remove('active');
    });
    
    if (currentSort === 'abc' && btnAbc) {
      btnAbc.classList.add('active');
    } else if ((currentSort === 'date-asc' || currentSort === 'date-desc') && btnDate) {
      btnDate.classList.add('active');
      // Update arrow direction
      btnDate.textContent = dateDescending ? 'Date Read ↓' : 'Date Read ↑';
    }
    
    // Favorites toggle
    if (btnFavorites) {
      if (showFavoritesOnly) {
        btnFavorites.classList.add('active');
      } else {
        btnFavorites.classList.remove('active');
      }
    }
    
    // Type filter
    if (btnType) {
      const typeLabels = {
        'all': 'Type: All',
        'book': 'Type: Books',
        'article': 'Type: Articles'
      };
      btnType.textContent = typeLabels[currentType];
      if (currentType !== 'all') {
        btnType.classList.add('active');
      } else {
        btnType.classList.remove('active');
      }
    }
  }
  
  // Update URL hash
  function updateUrlHash() {
    let hashParts = [];
    
    if (currentSort === 'abc') {
      hashParts.push('abc');
    } else if (currentSort === 'date-desc') {
      hashParts.push('recent');
    } else if (currentSort === 'date-asc') {
      hashParts.push('oldest');
    }
    
    if (showFavoritesOnly) {
      hashParts.push('favorites');
    }
    
    if (currentType !== 'all') {
      hashParts.push(currentType + 's'); // books, articles, papers
    }
    
    const hash = hashParts.join('+');
    if (hash) {
      history.replaceState(null, '', '#' + hash);
    } else {
      history.replaceState(null, '', window.location.pathname);
    }
  }
  
  // Parse URL hash on load
  function parseUrlHash() {
    const hash = window.location.hash.slice(1);
    if (!hash) {
      // Default to recent (date descending)
      currentSort = 'date-desc';
      dateDescending = true;
      updateButtonStates();
      sortBooks(currentSort);
      updateUrlHash();
      return;
    }
    
    const parts = hash.split('+');
    parts.forEach(part => {
      if (part === 'abc') {
        currentSort = 'abc';
      } else if (part === 'recent') {
        currentSort = 'date-desc';
        dateDescending = true;
      } else if (part === 'oldest') {
        currentSort = 'date-asc';
        dateDescending = false;
      } else if (part === 'favorites') {
        showFavoritesOnly = true;
      } else if (part === 'books') {
        currentType = 'book';
      } else if (part === 'articles') {
        currentType = 'article';
      }
    });
    
    updateButtonStates();
    sortBooks(currentSort);
    applyFilters();
  }
  
  // Get visual position of elements in grid (row-by-row, left-to-right)
  function getVisualOrder(items) {
    const positions = items.map(item => {
      const rect = item.getBoundingClientRect();
      return { item, top: rect.top, left: rect.left };
    });
    
    // Sort by visual position: top first, then left
    positions.sort((a, b) => {
      // Group items in same row (within 10px tolerance)
      if (Math.abs(a.top - b.top) < 10) {
        return a.left - b.left;
      }
      return a.top - b.top;
    });
    
    return positions.map(p => p.item);
  }
  
  // Trigger staggered fade-in animation in visual order
  function triggerStaggeredAnimation() {
    const visibleItems = Array.from(bookItems).filter(item => 
      item.style.display !== 'none'
    );
    
    // Get items in visual order (left-to-right, top-to-bottom)
    const orderedItems = getVisualOrder(visibleItems);
    
    orderedItems.forEach((item, index) => {
      item.classList.remove('visible');
      item.style.animationDelay = `${index * 40}ms`;
      
      // Force reflow then add visible class
      void item.offsetWidth;
      
      requestAnimationFrame(() => {
        item.classList.add('visible');
      });
    });
  }
  
  // Event listeners
  if (btnAbc) {
    btnAbc.addEventListener('click', () => {
      currentSort = 'abc';
      updateButtonStates();
      sortBooks('abc');
      updateUrlHash();
    });
  }
  
  if (btnDate) {
    btnDate.addEventListener('click', () => {
      // Toggle between desc and asc
      if (currentSort === 'date-desc') {
        currentSort = 'date-asc';
        dateDescending = false;
      } else {
        currentSort = 'date-desc';
        dateDescending = true;
      }
      updateButtonStates();
      sortBooks(currentSort);
      updateUrlHash();
    });
  }
  
  if (btnFavorites) {
    btnFavorites.addEventListener('click', () => {
      showFavoritesOnly = !showFavoritesOnly;
      updateButtonStates();
      applyFilters();
      updateUrlHash();
    });
  }
  
  if (btnType) {
    btnType.addEventListener('click', () => {
      // Cycle through: all -> book -> article -> all
      const types = ['all', 'book', 'article'];
      const currentIndex = types.indexOf(currentType);
      currentType = types[(currentIndex + 1) % types.length];
      updateButtonStates();
      applyFilters();
      updateUrlHash();
    });
  }
  
  // Initialize
  parseUrlHash();
  updateButtonStates();
  
  // Height observer for dynamic content sizing
  const elements = ['content1', 'content6'];
  const observer = new ResizeObserver(entries => {
    entries.forEach(entry => {
      const id = entry.target.id;
      const height = entry.contentRect.height;
      document.documentElement.style.setProperty(`--${id}-height`, `${height}px`);
    });
  });
  elements.forEach(id => {
    const element = document.getElementById(id);
    if (element) observer.observe(element);
  });
});

// Staggered scroll animations - uses visual order
(function() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  
  let itemCounter = 0;
  const staggerDelay = 40;
  const observedItems = new Set();
  
  // Get visual position of elements
  function getVisualIndex(el) {
    const rect = el.getBoundingClientRect();
    const gridItems = document.querySelectorAll('.book-item');
    let index = 0;
    
    gridItems.forEach(item => {
      if (item.style.display === 'none') return;
      const itemRect = item.getBoundingClientRect();
      // Count items that appear before this one visually
      if (itemRect.top < rect.top - 10 || 
          (Math.abs(itemRect.top - rect.top) < 10 && itemRect.left < rect.left)) {
        index++;
      }
    });
    
    return index;
  }
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !observedItems.has(entry.target)) {
        observedItems.add(entry.target);
        const el = entry.target;
        
        if (el.classList.contains('book-item')) {
          const visualIndex = getVisualIndex(el);
          const delay = visualIndex * staggerDelay;
          
          requestAnimationFrame(() => {
            el.style.animationDelay = delay + 'ms';
            el.classList.add('visible');
          });
        } else {
          requestAnimationFrame(() => {
            el.classList.add('visible');
          });
        }
        
        observer.unobserve(el);
      }
    });
  }, { 
    threshold: 0.01,
    rootMargin: '50px'
  });
  
  document.querySelectorAll('.intro-section, .bookshelf, .footer, .book-item').forEach(el => {
    observer.observe(el);
  });
})();

// CSS Variables support check
var supportsCssVars = function() {
  var e, t = document.createElement("style");
  return t.innerHTML = "root: { --tmp-var: bold; }", document.head.appendChild(t), e = !!(window.CSS && window.CSS.supports && window.CSS.supports("font-weight", "var(--tmp-var)")), t.parentNode.removeChild(t), e
};
supportsCssVars() || alert("Please view this page in a modern browser that supports CSS Variables :).");
