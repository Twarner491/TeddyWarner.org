document.addEventListener("DOMContentLoaded", function() {
  let lastScrollTop = 0;
  let ticking = false;

  // Batch all DOM measurements together to avoid forced reflows
  var contentSections = document.querySelectorAll('.content-container > section');
  var heights = [];
  
  // Read all heights first (batched reads)
  contentSections.forEach(function(section) {
    heights.push(section.offsetHeight);
  });
  
  // Then apply all position changes (batched writes)
  var previousHeight = 0;
  contentSections.forEach(function(section, index) {
    section.style.top = previousHeight + 'px';
    previousHeight += heights[index];
  });

  // Add staggered animations for experience items
  const experienceItems = document.querySelectorAll('.content3 .company, .content3 .role, .content3 .year');
  experienceItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.06}s`;
  });

  // Add staggered animations for project grid items
  const projectItems = document.querySelectorAll('.content5 .grid-item');
  projectItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.1}s`;
  });

  // Add staggered animations for writing items
  const writingItems = document.querySelectorAll('.content6 .writparent');
  writingItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.15}s`;
  });

  // Add intersection observer for scroll animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
      }
    });
  }, {
    threshold: 0.05,
    rootMargin: '50px'
  });

  // Observe elements
  document.querySelectorAll('.introabt, .featured-projects, .content3 hr, .company, .role, .year, .grid-item, .writparent').forEach(el => {
    el.style.animationPlayState = 'paused';
    observer.observe(el);
  });

  const scrollThreshold = 100; // Adjust this value to control when the header shrinks

  // Use requestAnimationFrame to batch scroll updates
  window.addEventListener('scroll', function() {
    if (!ticking) {
      window.requestAnimationFrame(function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > scrollThreshold) {
          document.body.classList.add('scrolled');
        } else {
          document.body.classList.remove('scrolled');
        }
        
        lastScrollTop = scrollTop;
        ticking = false;
      });
      
      ticking = true;
    }
  });

  // Combine scroll handlers and use requestAnimationFrame
  document.addEventListener('scroll', function() {
    if (!ticking) {
      window.requestAnimationFrame(function() {
        const scrollPosition = window.scrollY;
        const blurOverlay = document.querySelector('.blur-overlay');
        
        if (blurOverlay) {
          const opacity = Math.min(scrollPosition / 100, 1);
          blurOverlay.style.opacity = opacity;
        }
        ticking = false;
      });
      
      ticking = true;
    }
  });
});

var supportsCssVars = function() {
  var e, t = document.createElement("style");
  return t.innerHTML = "root: { --tmp-var: bold; }", document.head.appendChild(t), e = !!(window.CSS && window.CSS.supports && window.CSS.supports("font-weight", "var(--tmp-var)")), t.parentNode.removeChild(t), e
};
supportsCssVars() || alert("Please view this page in a modern browser that supports CSS Variables :).");

function togglemenu() {
  var element = document.body;
  element.classList.toggle("toggle");
  element.classList.add("scrollUp");
}

// Circle text rotation - smooth reverse on hover
(function() {
  var circleGroup = document.querySelector('.circleGroup');
  if (!circleGroup) return;

  var currentAngle = 0;
  var animationSpeed = 360 / 7; // degrees per second (matches 7s full rotation)
  var direction = 1; // 1 = normal, -1 = reverse
  var lastTime = null;
  var animationId = null;

  function animate(timestamp) {
    if (lastTime === null) lastTime = timestamp;
    var delta = (timestamp - lastTime) / 1000; // seconds
    lastTime = timestamp;

    currentAngle += animationSpeed * delta * direction;
    // Keep angle within 0-360 for cleanliness
    currentAngle = ((currentAngle % 360) + 360) % 360;

    circleGroup.style.transform = 'rotate(' + currentAngle + 'deg)';
    animationId = requestAnimationFrame(animate);
  }

  // Start animation
  animationId = requestAnimationFrame(animate);

  window.leftrevoff = function() {
    direction = -1;
  };

  window.leftrevon = function() {
    direction = 1;
  };
})();
