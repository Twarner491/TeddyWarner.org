var supportsCssVars = function() {
    var e, t = document.createElement("style");
    return t.innerHTML = "root: { --tmp-var: bold; }", document.head.appendChild(t), e = !!(window.CSS && window.CSS.supports && window.CSS.supports("font-weight", "var(--tmp-var)")), t.parentNode.removeChild(t), e};

supportsCssVars() || alert("Please view this page in a modern browser that supports CSS Variables :)."); 

window.onload = function() {
    if(!window.location.hash) {
        window.location = window.location + '#/';
        window.location.reload();
    }
}

window.addEventListener( "pageshow", function ( event ) {
  var historyTraversal = event.persisted || 
                        ( typeof window.performance != "undefined" && 
                              window.performance.navigation.type === 2 );
  if ( historyTraversal ) {
    window.location.reload();
    (function ($) {
       preloaderFadeOutInit();
    })(jQuery);
  }
});

function preloaderFadeOutInit(){  
  $('.preloader').delay(1800).fadeOut(525);
  $('.main-content').hide().delay(2500).fadeIn(160);
  $('.preloaderbg').delay(2500).fadeOut(160);
  $('body').attr('id','');
}

jQuery(window).on('load', function () {
  (function ($) {
  preloaderFadeOutInit();
  })(jQuery);
});

const element = document.body;
let lastScroll = 0;

scroll.on('scroll', (instance) => {
  document.documentElement.setAttribute('data-direction', instance.direction);
  document.documentElement.setAttribute('data-speed', instance.speed);
  document.documentElement.setAttribute('data-scrollY', instance.scroll.y);

  const currentScroll = instance.scroll.y;
  if (currentScroll <= 0) {
    element.classList.remove("scrollUp");
    return;
  }

  if (currentScroll > lastScroll && !element.classList.contains("scrollDown")) {
    element.classList.remove("scrollUp");
    element.classList.add("scrollDown");
  } else if (
    currentScroll < lastScroll &&
    element.classList.contains("scrollDown")
  ) {
    element.classList.remove("scrollDown");
    element.classList.add("scrollUp");
  }
  lastScroll = currentScroll;
});

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