// Receipt Carousel with Minimal Physics
class ReceiptCarousel {
  constructor(container) {
    this.container = container;
    this.carousel = container.querySelector('.receipt-carousel');
    this.items = container.querySelectorAll('.receipt-item');
    
    // Physics properties
    this.isDragging = false;
    this.startX = 0;
    this.scrollLeft = 0;
    this.velocity = 0;
    this.momentum = 0.92;
    this.lastTime = 0;
    this.lastX = 0;
    
    // Animation frame
    this.animationFrame = null;
    
    this.init();
  }
  
  init() {
    this.setupEventListeners();
  }
  
  setupEventListeners() {
    // Mouse events
    this.carousel.addEventListener('mousedown', this.handleMouseDown.bind(this));
    this.carousel.addEventListener('mousemove', this.handleMouseMove.bind(this));
    this.carousel.addEventListener('mouseup', this.handleMouseUp.bind(this));
    this.carousel.addEventListener('mouseleave', this.handleMouseUp.bind(this));
    
    // Touch events
    this.carousel.addEventListener('touchstart', this.handleTouchStart.bind(this), { passive: false });
    this.carousel.addEventListener('touchmove', this.handleTouchMove.bind(this), { passive: false });
    this.carousel.addEventListener('touchend', this.handleTouchEnd.bind(this));
    
    // Scroll events for physics
    this.carousel.addEventListener('scroll', this.handleScroll.bind(this));
    
    // Wheel events for horizontal scrolling - attach to both carousel and container
    const wheelHandler = this.handleWheel.bind(this);
    this.carousel.addEventListener('wheel', wheelHandler, { passive: false });
    this.container.addEventListener('wheel', wheelHandler, { passive: false });
  }
  
  handleMouseDown(e) {
    // Don't start dragging if clicking on an image
    if (e.target.tagName === 'IMG') {
      this.carousel.style.cursor = 'grab';
    }
    
    this.isDragging = true;
    this.carousel.classList.add('dragging');
    this.startX = e.pageX - this.carousel.offsetLeft;
    this.scrollLeft = this.carousel.scrollLeft;
    this.velocity = 0;
    this.lastTime = performance.now();
    this.lastX = e.pageX;
    
    // Cancel any ongoing momentum animation
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
    }
    
    // Prevent default to avoid image dragging
    e.preventDefault();
  }
  
  handleMouseMove(e) {
    if (!this.isDragging) return;
    
    e.preventDefault();
    
    const currentTime = performance.now();
    const deltaTime = currentTime - this.lastTime;
    const deltaX = e.pageX - this.lastX;
    
    // Calculate velocity
    if (deltaTime > 0) {
      this.velocity = deltaX / deltaTime;
    }
    
    const x = e.pageX - this.carousel.offsetLeft;
    const walk = (x - this.startX) * 2.5;
    this.carousel.scrollLeft = this.scrollLeft - walk;
    
    this.lastTime = currentTime;
    this.lastX = e.pageX;
  }
  
  handleMouseUp(e) {
    if (!this.isDragging) return;
    
    this.isDragging = false;
    this.carousel.classList.remove('dragging');
    
    // Apply subtle momentum physics
    this.applyMomentum();
  }
  
  handleTouchStart(e) {
    const touch = e.touches[0];
    this.handleMouseDown({ 
      pageX: touch.pageX, 
      preventDefault: () => e.preventDefault() 
    });
  }
  
  handleTouchMove(e) {
    if (!this.isDragging) return;
    const touch = e.touches[0];
    this.handleMouseMove({ 
      pageX: touch.pageX, 
      preventDefault: () => e.preventDefault() 
    });
  }
  
  handleTouchEnd(e) {
    this.handleMouseUp(e);
  }
  
  handleScroll() {
    // Apply subtle physics effect during scroll
    this.applyScrollPhysics();
  }
  
  handleWheel(e) {
    // Check if we're hovering over the carousel area
    const rect = this.container.getBoundingClientRect();
    const isHovering = e.clientX >= rect.left && e.clientX <= rect.right &&
                       e.clientY >= rect.top && e.clientY <= rect.bottom;
    
    if (!isHovering) return;
    
    e.preventDefault();
    e.stopPropagation();
    
    // Enable horizontal scrolling with mouse wheel - prioritize vertical wheel movement
    const delta = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
    this.carousel.scrollLeft += delta * 3.5;
    
    // Apply scroll physics
    this.applyScrollPhysics();
  }
  
  applyMomentum() {
    if (Math.abs(this.velocity) < 0.1) return;
    
    const animate = () => {
      this.velocity *= this.momentum;
      this.carousel.scrollLeft -= this.velocity * 8;
      
      if (Math.abs(this.velocity) > 0.1) {
        this.animationFrame = requestAnimationFrame(animate);
      }
    };
    
    this.animationFrame = requestAnimationFrame(animate);
  }
  
  applyScrollPhysics() {
    // Clear any existing physics classes
    this.items.forEach(item => {
      item.classList.remove('scroll-left', 'scroll-right', 'scroll-physics');
    });
    
    // Get visible items and apply subtle physics
    const visibleItems = this.getVisibleItems();
    const scrollDirection = this.getScrollDirection();
    
    visibleItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('scroll-physics');
        if (scrollDirection === 'left') {
          item.classList.add('scroll-left');
        } else if (scrollDirection === 'right') {
          item.classList.add('scroll-right');
        }
        
        // Remove physics classes after a brief moment
        setTimeout(() => {
          item.classList.remove('scroll-left', 'scroll-right', 'scroll-physics');
        }, 300);
      }, index * 20);
    });
  }
  
  getVisibleItems() {
    const containerRect = this.carousel.getBoundingClientRect();
    return Array.from(this.items).filter(item => {
      const itemRect = item.getBoundingClientRect();
      return itemRect.right > containerRect.left && itemRect.left < containerRect.right;
    });
  }
  
  getScrollDirection() {
    const currentScroll = this.carousel.scrollLeft;
    const direction = currentScroll > (this.lastScrollLeft || 0) ? 'right' : 'left';
    this.lastScrollLeft = currentScroll;
    return direction;
  }
}

// Initialize carousel - supports instant navigation
function initReceiptCarousel() {
  const carouselContainer = document.querySelector('.receipt-carousel-container');
  if (carouselContainer && !carouselContainer.dataset.initialized) {
    carouselContainer.dataset.initialized = 'true';
    new ReceiptCarousel(carouselContainer);
  }
}

// Support instant navigation (MkDocs Material)
if (typeof document$ !== 'undefined') {
  document$.subscribe(initReceiptCarousel);
} else {
  document.addEventListener('DOMContentLoaded', initReceiptCarousel);
}

// Export for potential external use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ReceiptCarousel;
}
