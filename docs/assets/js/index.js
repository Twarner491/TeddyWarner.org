var supportsCssVars = function() {
    var e, t = document.createElement("style");
    return t.innerHTML = "root: { --tmp-var: bold; }", document.head.appendChild(t), e = !!(window.CSS && window.CSS.supports && window.CSS.supports("font-weight", "var(--tmp-var)")), t.parentNode.removeChild(t), e};
supportsCssVars() || alert("Please view this page in a modern browser that supports CSS Variables :).");

function togglemenu() {
  var element = document.body;
    element.classList.toggle("toggle");
    element.classList.add("scrollUp");
} 

function leftrevon() {
  var element = document.body;
    element.classList.add("revleft");
} 

function leftrevoff() {
  var element = document.body;
    element.classList.remove("revleft");
} 