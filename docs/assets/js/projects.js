// Initialize layout on both initial load and instant navigation
function initProjLayout() {
  var contentSections = document.querySelectorAll('.content-container > section');
  var previousHeight = 0;

  contentSections.forEach(function(section) {
    section.style.top = previousHeight + 'px';
    previousHeight += section.offsetHeight;
  });

  // Animate project cards with stagger
  const projects = document.querySelectorAll('.writparent');
  projects.forEach((project, index) => {
    project.style.animationDelay = `${index * 0.15}s`;
  });

  // Animate social icons with stagger
  const socials = document.querySelectorAll('.socialpar');
  socials.forEach((social, index) => {
    social.style.animationDelay = `${(projects.length * 0.15) + (index * 0.1)}s`;
  });

  // Animate copyright with delay
  const copyright = document.querySelector('.copyright');
  if (copyright) {
    copyright.style.animationDelay = `${(projects.length * 0.15) + 0.3}s`;
  }
  
  // Re-setup ResizeObserver for dynamic height calculation
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
}

// Support instant navigation (MkDocs Material)
if (typeof document$ !== 'undefined') {
  document$.subscribe(function() {
    initProjLayout();
  });
} else {
  document.addEventListener("DOMContentLoaded", initProjLayout);
}

var supportsCssVars = function() {
  var e, t = document.createElement("style");
  return t.innerHTML = "root: { --tmp-var: bold; }", document.head.appendChild(t), e = !!(window.CSS && window.CSS.supports && window.CSS.supports("font-weight", "var(--tmp-var)")), t.parentNode.removeChild(t), e
};
supportsCssVars() || alert("Please view this page in a modern browser that supports CSS Variables :).");