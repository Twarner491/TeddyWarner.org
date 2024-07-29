document.addEventListener("DOMContentLoaded", function() {
  var contentSections = document.querySelectorAll('.content-container > section');
  var previousHeight = 0;

  contentSections.forEach(function(section) {
    section.style.top = previousHeight + 'px';
    previousHeight += section.offsetHeight;
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

function leftrevon() {
  var element = document.querySelector('.circleGroup');
  element.style.setProperty('--rotation-direction', 'normal');
}

function leftrevoff() {
  var element = document.querySelector('.circleGroup');
  element.style.setProperty('--rotation-direction', 'reverse');
}

leftrevon();

document.querySelector('.abtbtn').addEventListener('mouseenter', leftrevoff);
document.querySelector('.abtbtn').addEventListener('mouseleave', leftrevon);