document.addEventListener("DOMContentLoaded", function() {
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
});

var supportsCssVars = function() {
  var e, t = document.createElement("style");
  return t.innerHTML = "root: { --tmp-var: bold; }", document.head.appendChild(t), e = !!(window.CSS && window.CSS.supports && window.CSS.supports("font-weight", "var(--tmp-var)")), t.parentNode.removeChild(t), e
};
supportsCssVars() || alert("Please view this page in a modern browser that supports CSS Variables :).");