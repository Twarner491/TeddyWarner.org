var supportsCssVars = function() {
    var e, t = document.createElement("style");
    return t.innerHTML = "root: { --tmp-var: bold; }", document.head.appendChild(t), e = !!(window.CSS && window.CSS.supports && window.CSS.supports("font-weight", "var(--tmp-var)")), t.parentNode.removeChild(t), e};
supportsCssVars() || alert("Please view this page in a modern browser that supports CSS Variables :).");

let currentSet = 0;

function updateDots() {
    const dotsContainer = document.querySelector('.dots-container');
    dotsContainer.innerHTML = ''; // Clear existing dots

    const articleScroller = document.querySelector('.article-scroller');
    const totalSets = articleScroller.childElementCount;

    for (let i = 0; i < totalSets; i++) { // Exclude the last dot
        const dot = document.createElement('span');
        dot.className = 'dot';
        dot.setAttribute('data-set', i);
        if (i === currentSet) {
            dot.classList.add('active');
        }
        dot.addEventListener('click', () => {
            scrollToSet(i);
        });
        dotsContainer.appendChild(dot);
    }
}

function scrollToSet(setIndex) {
    const articleScroller = document.querySelector('.article-scroller');
    const articleContainer = document.querySelector('.article-container');
    const scrollAmount = articleContainer.clientWidth;

    currentSet = setIndex;
    const scrollTo = scrollAmount * currentSet;

    articleScroller.scrollTo({
        left: scrollTo,
        behavior: 'smooth',
    });

    updateDots();
}

function scrollNext() {
    const articleScroller = document.querySelector('.article-scroller');
    const articleContainer = document.querySelector('.article-container');
    const scrollAmount = articleContainer.clientWidth;

    currentSet = (currentSet + 1) % articleScroller.childElementCount;
    const scrollTo = scrollAmount * currentSet;

    articleScroller.scrollTo({
        left: scrollTo,
        behavior: 'smooth',
    });
    updateDots();
}

function scrollPrev() {
    const articleScroller = document.querySelector('.article-scroller');
    const articleContainer = document.querySelector('.article-container');
    const scrollAmount = articleContainer.clientWidth;

    currentSet = (currentSet - 1 + articleScroller.childElementCount) % articleScroller.childElementCount;
    const scrollTo = scrollAmount * currentSet;

    articleScroller.scrollTo({
        left: scrollTo,
        behavior: 'smooth',
    });
    updateDots();
}

updateDots();

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    smoothMobile: true,
    inertia: 0.75,
    touchMultiplier: 2.5,
  });

  window.addEventListener('load', () => {
    scroll.update();
  });

  var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    startDelay: 1000,
    loop: true
  });

  var typed2 = new Typed('#typed2', {
    stringsElement: '#typed-strings2',
    startDelay: 1000,
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