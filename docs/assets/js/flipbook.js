// JavaScript for 2D Book Viewer
class FlipbookViewer {
  constructor(containerId, pdfUrl, totalPages = 10) {
    this.container = document.getElementById(containerId);
    this.pdfUrl = pdfUrl;
    this.totalPages = totalPages;
    this.currentPage = 0; // 0 = closed book, 1 = first spread, etc.
    this.isBookOpened = false;
    this.bookPages = [];
    
    this.init();
  }
  
  init() {
    this.generatePages();
    this.render();
    this.attachEventListeners();
  }
  
  generatePages() {
    this.bookPages = [];
    
    // First page is cover (PDF page 1 on front, page 2 on back)
    this.bookPages.push({
      id: 0,
      frontPageNum: 1,
      backPageNum: 2
    });
    
    // Generate spreads for remaining pages
    for (let i = 3; i <= this.totalPages; i += 2) {
      this.bookPages.push({
        id: this.bookPages.length,
        frontPageNum: i,
        backPageNum: i + 1 <= this.totalPages ? i + 1 : null
      });
    }
  }
  
  render() {
    if (!this.container) {
      console.error('Flipbook container not found');
      return;
    }
    
    this.container.innerHTML = `
      <div class="flipbook-container">
        <div class="book-viewer-wrapper" id="bookWrapper">
          <div class="book" id="book">
            <!-- Book spine/binding -->
            <div class="book-spine"></div>
            
            <!-- Pages will be inserted here -->
            ${this.renderPages()}
            
            <!-- Book back cover - last page of PDF -->
            <div class="book-back-cover" style="z-index: 0;">
              ${this.renderPDFPage(this.totalPages)}
            </div>
          </div>
        </div>
        
      </div>
    `;
    
    this.updateControls();
  }
  
  renderPages() {
    return this.bookPages.map((page, index) => {
      const isFlipped = this.currentPage > page.id;
      const zIndex = isFlipped ? index + 1 : this.bookPages.length - index;
      
      return `
        <div class="page ${isFlipped ? 'flipped' : ''}" 
             style="z-index: ${zIndex};" 
             data-page-id="${page.id}"
             onclick="handleFlipbookPageClick(${page.id}, event)">
          <!-- Front of page -->
          <div class="page-front">
            ${this.renderPDFPage(page.frontPageNum)}
          </div>
          
          <!-- Back of page -->
          <div class="page-back">
            ${this.renderPDFPage(page.backPageNum)}
          </div>
        </div>
      `;
    }).join('');
  }
  
  renderPDFPage(pageNum) {
    if (!pageNum) {
      return `
        <div class="empty-page">
          <!-- Empty page -->
        </div>
      `;
    }
    
      return `
        <div class="pdf-page-container">
          <iframe 
            src="${this.pdfUrl}#page=${pageNum}&zoom=100&toolbar=0&navpanes=0&scrollbar=0"
            class="pdf-page-iframe"
            title="PDF Page ${pageNum}">
          </iframe>
        </div>
      `;
  }
  
  handlePageClick(pageId, event) {
    event.preventDefault();
    
    const rect = event.currentTarget.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const pageWidth = rect.width;
    const isRightSide = clickX > pageWidth / 2;
    
    if (isRightSide && this.currentPage < this.bookPages.length) {
      // Clicking right side - go to next page
      this.nextPage();
    } else if (!isRightSide && this.currentPage > 0) {
      // Clicking left side - go to previous page
      this.previousPage();
    }
  }
  
  nextPage() {
    if (this.currentPage < this.bookPages.length) {
      this.currentPage++;
      if (this.currentPage === 1) {
        this.isBookOpened = true;
      }
      this.updateView();
    }
  }
  
  previousPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      if (this.currentPage === 0) {
        this.isBookOpened = false;
      }
      this.updateView();
    }
  }
  
  updateView() {
    const bookWrapper = document.getElementById('bookWrapper');
    
    // Update book wrapper position
    if (this.isBookOpened) {
      bookWrapper.classList.add('opened');
    } else {
      bookWrapper.classList.remove('opened');
    }
    
    // Update page flips
    this.bookPages.forEach((page, index) => {
      const pageElement = document.querySelector(`[data-page-id="${page.id}"]`);
      if (pageElement) {
        const isFlipped = this.currentPage > page.id;
        const zIndex = isFlipped ? index + 1 : this.bookPages.length - index;
        
        if (isFlipped) {
          pageElement.classList.add('flipped');
        } else {
          pageElement.classList.remove('flipped');
        }
        
        pageElement.style.zIndex = zIndex;
      }
    });
    
    this.updateControls();
  }
  
  attachEventListeners() {
    // Event listeners are now handled via onclick attributes in the HTML
    // This method exists to satisfy the init() call
  }
  
  updateControls() {
    // No controls to update since we removed the buttons
  }
}

// Initialize flipbook when DOM is loaded
let flipbook;

function initializeFlipbook() {
  // Check if the flipbook container exists on the page
  const container = document.getElementById('flipbook-viewer');
  if (container) {
    console.log('Flipbook container found, initializing...');
    // Path to the PDF file - adjust based on current page location
    // For pages in /writings/ subdirectory, we need to go up one level
    const pdfUrl = '../../assets/misc/flipbook.pdf';
    flipbook = new FlipbookViewer('flipbook-viewer', pdfUrl, 28); // Set to actual PDF length
    
    // Make flipbook globally accessible for onclick handlers
    window.flipbook = flipbook;
    console.log('Flipbook initialized successfully');
  } else {
    console.log('Flipbook container not found on this page');
  }
}

// Auto-initialize if DOM is already loaded, otherwise wait for DOMContentLoaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeFlipbook);
} else {
  initializeFlipbook();
}

// Add defensive code to prevent errors from other scripts - run immediately
(function() {
  // Override problematic functions from index.js with safe versions immediately
  window.leftrevon = function() {
    const element = document.querySelector('.circleGroup');
    if (element) {
      element.style.setProperty('--rotation-direction', 'normal');
    }
  };
  
  window.leftrevoff = function() {
    const element = document.querySelector('.circleGroup');
    if (element) {
      element.style.setProperty('--rotation-direction', 'reverse');
    }
  };
  
  window.togglemenu = function() {
    const element = document.body;
    if (element) {
      element.classList.toggle("toggle");
      element.classList.add("scrollUp");
    }
  };
})();

// Additional defensive code to run after DOM loads
function addMoreDefensiveCode() {
  // Safely add event listeners if elements exist
  const abtBtn = document.querySelector('.abtbtn');
  if (abtBtn) {
    abtBtn.addEventListener('mouseenter', window.leftrevoff);
    abtBtn.addEventListener('mouseleave', window.leftrevon);
  }
}

// Run additional defensive code after DOM loads
document.addEventListener('DOMContentLoaded', addMoreDefensiveCode);

// Global handler functions for onclick events
function handleFlipbookPageClick(pageId, event) {
  if (window.flipbook) {
    window.flipbook.handlePageClick(pageId, event);
  }
}

// Removed previous/next button handlers since buttons were removed
