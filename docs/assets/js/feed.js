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