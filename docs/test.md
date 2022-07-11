---
title: Teddy Warner | Digital Fabricator
template: index.html
---

<script src="https://kit.fontawesome.com/79ff35ecec.js" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
<script nomodule src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.6.0/polyfill.min.js" crossorigin="anonymous"></script>
<script nomodule src="https://polyfill.io/v3/polyfill.min.js?features=Object.assign%2CElement.prototype.append%2CNodeList.prototype.forEach%2CCustomEvent%2Csmoothscroll" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/locomotive-scroll@4.1.4/dist/locomotive-scroll.min.js"></script>

<script>

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

</script>

<style>

    .scrollDown .md-header {
      transform: translate3d(0, -100%, 0);
    }

    .scrollUp .md-header {
      transform: none;
    }

    :root {
      --duration: 1s;
      --nav-duration: calc(var(--duration) / 4);
      --ease: cubic-bezier(0.215, 0.61, 0.355, 1);
      --space: 1rem;
      --font-size: 1.125rem;
      --line-height: 1.5;
      --inputicon: hsla(0, 0%, 0%, 0.87);
      --toggledinputicon: white;
      --formbg: hsla(0, 0%, 0%, 0.25);
      --formhover: hsla(0, 0%, 0%, 0.32);
      --toggledform: hsla(0, 0%, 100%, 0.12);
      --toggledformhover: hsla(0, 0%, 100%, 0.3);
    }

    [data-md-color-scheme="slate"] {
      /*--md-default-bg-color: hsla(228, 7%, 14%, 1);*/
        --inputicon: white;
        --toggledinputicon: hsla(0, 0%, 0%, 0.87);
        --formhover: hsla(0, 0%, 100%, 0.3);
        --toggledform: hsla(0, 0%, 0%, 0.2);
        --toggledformhover: hsla(0, 0%, 0%, 0.32);
    }

    @media screen and (min-width: 60em) {
      .md-sidebar--secondary {
        display: none;
      }
    }

    @media screen and (min-width: 76.25em) {
      .md-sidebar--primary {
        display: none;
      }
    }

    .preloader {
      position: absolute;
      top: 50vh;
      left: 50vw;
      transform: translate(-50%, -50%);
      width: 700px;
      z-index: 99999999 !important;
    }

    .preloaderbg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      z-index: 99999998 !important;
      background-color: white;
      background-position: center;
    }

    .md-main__inner {
      margin: 0;
    }

    .md-footer {
      display: none;
    } 

    .md-source {
      color: var(--md-default-fg-color);  
    }

    .toggle .logo {
      display: none;
    }

    .toggle .socialsparent {
      display: none;
    }

    .close {
      display: none;
    }

    .toggle .close {
      display: flex;
    }

    .toggle .menu {
      display: none;
    }

    .md-header__button.md-icon[for="__search"] {
      color: var(--md-default-fg-color); 
    }

    .toggle .md-header__button.md-icon[for="__search"] {
      color: var(--md-default-bg-color);
    }

    .md-search__input + .md-search__icon {
      color: var(--inputicon);
    }

    .toggle .md-search__input + .md-search__icon {
      color: var(--toggledinputicon);
    }

    .md-search__form {
      background-color: var(--formbg);
    }

    .md-search__form:hover {
      background-color: var(--formhover);
    }

    .toggle .md-search__form {
      background-color: var(--toggledform);
    }

    .toggle .md-search__form:hover {
      background-color: var(--toggledformhover);
    }

    header{
      padding-top: 1.5em;
    }

    .menu {
      color: var(--md-default-fg-color);
    }

    .close {
      color: var(--md-default-bg-color);
    }
  
    .md-header__option {
      color: var(--md-default-fg-color);
    }

    .toggle .md-header__option {
      color: var(--md-default-bg-color);
    }

    .md-header[data-md-state=shadow]{
      box-shadow:0 0 0 rgba(0,0,0,0),0 0 0 rgba(0,0,0,0);
    }

    .md-header {
      background: none;
      box-shadow:0 0 0 transparent,0 0 0 transparent;
    }

    .md-tabs {
     display: none;
    }

    .logo {
      padding-left: 0;
    }

    section {
      height: 100vh;
      z-index: 2;
    }

    .o-layout {
      font-size: 0;
      height: 100vh;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .o-layout_item {
      display: inline-block;
      font-size: 1rem;
      padding-left: 0;
      vertical-align: top;
      width: 100%
    }

    .o-image_wrapper {
      background-color: var(--md-default-bg-color);
      overflow: hidden;
      position: relative
    }

    .o-image_wrapper.-full {
      align-content: center;
      display: flex;
      height: 100%;
      margin: 0 6.25rem
    }

    @media (max-width:699px) {
      .o-image_wrapper.-full {
        margin: 1.875rem 0
      }
    }

    .o-image {
      opacity: .8
    }

    .o-image img {
      opacity: 0;
      transform: scale(1.4);
      transition: opacity 1.2s cubic-bezier(.215, .61, .355, 1), transform 1.2s cubic-bezier(.215, .61, .355, 1);
      width: 100%
    }

    .o-image.is-inview img {
      opacity: 1;
      transform: scale(1);
      transition-delay: .6s
    }

    html.has-scroll-smooth {
      overflow: hidden; }
    
    html.has-scroll-dragging {
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none; }
    
    .has-scroll-smooth body {
      overflow: hidden; }
    
    .has-scroll-smooth [data-scroll-container] {
      min-height: 100vh; }
    
    [data-scroll-direction="horizontal"] [data-scroll-container] {
      height: 100vh;
      display: inline-block;
      white-space: nowrap; }
    
    [data-scroll-direction="horizontal"] [data-scroll-section] {
      display: inline-block;
      vertical-align: top;
      white-space: nowrap;
      height: 100%; }
    
    .c-scrollbar {
      position: absolute;
      right: 0;
      top: 0;
      width: 7px;
      height: 100%;
      transform-origin: center right;
      transition: transform 0.3s, opacity 0.3s;
      opacity: 0; }
      .c-scrollbar:hover {
        transform: scaleX(1.25); }
      .c-scrollbar:hover, .has-scroll-scrolling .c-scrollbar, .has-scroll-dragging .c-scrollbar {
        opacity: 1; }
      [data-scroll-direction="horizontal"] .c-scrollbar {
        width: 100%;
        height: 7px;
        top: auto;
        bottom: 0;
        transform: scaleY(1); }
        [data-scroll-direction="horizontal"] .c-scrollbar:hover {
          transform: scaleY(1.3); }
    
    .c-scrollbar_thumb {
      position: absolute;
      top: 0;
      right: 0;
      background-color: black;
      opacity: 0.5;
      width: 5px;
      border-radius: 3px;
      margin: 2px;
      cursor: -webkit-grab;
      cursor: grab; }
      .has-scroll-dragging .c-scrollbar_thumb {
        cursor: -webkit-grabbing;
        cursor: grabbing; }
      [data-scroll-direction="horizontal"] .c-scrollbar_thumb {
        right: auto;
        bottom: 0; }

    .has-scroll-dragging .c-scrollbar_thumb {
      cursor: -webkit-grabbing;
      cursor: grabbing
    }

    [data-scroll-direction=horizontal] .c-scrollbar_thumb {
      bottom: 0;
      right: auto
    }

    .c-fixed_wrapper {
      background-color: var(--md-default-bg-color);
      overflow: hidden;
      position: relative
    }

    @media (min-width:1000px) {
      .c-fixed_wrapper {
        height: 100vh
      }
    }

    @media (max-width:999px) {
      .c-fixed_wrapper {
        height: 50vh
      }
    }

    .c-fixed_target {
      bottom: -100vh
    }

    .c-fixed,
    .c-fixed_target {
      left: 0;
      position: absolute;
      right: 0;
      top: -100vh
    }

    .c-fixed {
      background-position: 50%;
      background-size: cover;
      height: 100%;
      opacity: .8
    }

    html:not(.has-scroll-smooth) .c-fixed {
      top: 0
    }

    .c-section {
      height: 100vh;
      position: relative;
      z-index: -2;
    }

    .c-direction-block {
      left: 0;
      position: absolute;
      right: 0;
    }

    .c-direction-block_item span {
      background: none;
      display: block;
      padding: 0 20px;
      white-space: nowrap
    }

    .u-2\:1:before {
      padding-bottom: 50%
    }

    .u-4\:3:before {
      padding-bottom: 75%
    }

    .u-16\:9:before {
      padding-bottom: 56.25%
    }

    .u-1\/1 {
      width: 100% !important
    }

    .u-1\/2 {
      width: 50% !important
    }

    .u-2\/2 {
      width: 100% !important
    }

    .u-1\/3 {
      width: 33.33333% !important
    }

    .u-2\/3 {
      width: 66.66667% !important
    }

    .u-3\/3 {
      width: 100% !important
    }

    .u-1\/4 {
      width: 25% !important
    }

    .u-2\/4 {
      width: 50% !important
    }

    .u-3\/4 {
      width: 75% !important
    }

    .u-4\/4 {
      width: 100% !important
    }

    .u-1\/5 {
      width: 20% !important
    }

    .u-2\/5 {
      width: 40% !important
    }

    .u-3\/5 {
      width: 60% !important
    }

    .u-4\/5 {
      width: 80% !important
    }

    .u-5\/5 {
      width: 100% !important
    }

    @media (min-width:700px) {
      .u-1\/2\@from-small {
        width: 50%
      }
    }

    @media (min-width:1000px) {
      .u-1\/3\@from-medium {
        width: 33.33333%
      }

      .u-1\/2\@from-medium {
        width: 50%
      }

      .u-2\/5\@from-medium {
        width: 40%
      }

      .u-3\/5\@from-medium {
        width: 60%
      }
    } 

  #toptitle {
    font-size: 18vw;
  }

  .introabt {
    float: right;
    margin-right: 1.2em;
    width: 48em;
  }

  .introabt h3 {
    margin-left: 0.35em;
    width: 93%;
  }

  #circle { 
    top: -3.5em;
    left: 24.75em;
    position: relative; 
    padding-bottom: 100%; 
    overflow: hidden; 
  }

  .abtbtn {
    width: 92px;
    height: 92px;
  }

  #circle text { 
    font-family: 'Fira Sans', sans-serif; 
    font-size: 17.6px; 
    font-weight: 500;
  }

  .textrev { 
    position: absolute; 
    left: 0; 
    top: 0; 
    overflow: hidden;
    animation: rightrev 5s linear 0s infinite normal;
  }

  .revleft .textrev{ 
    animation: leftrev 5s linear 0s infinite normal;
  }

  @keyframes leftrev {
      from {
          transform: rotate(0deg);
      }
      to {
          transform: rotate(360deg);
      }
  }
  @keyframes rightrev {
      from {
          transform: rotate(360deg);
      }
      to {
          transform: rotate(0deg);
      }
  }

    .main-navigation {
      position: fixed;
      top: 0;
      left: 0;
      display: flex;
      align-items: center;
      width: 100%;
      height: 100%;
      transform: translateX(-100%);
      transition: transform var(--nav-duration);
      background-color: var(--md-default-fg-color);
      z-index: 3;
    }

    .main-navigation:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: inherit;
      transform-origin: 0 50%;
      z-index: 3;
    }
    .main-navigation ul {
      font-size: 9vmin;
      width: 100%;
      z-index: 4;
    }
    .main-navigation li {
      display: flex;
      align-items: center;
      position: relative;
      overflow: hidden;
      z-index: 4;
    }
    .main-navigation li:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1vmin;
      background-color: inherit;
      transform-origin: 0 50%;
      transform: translateX(-100%) skew(15deg);
      z-index: 4;
    }
    .main-navigation a {
      display: inline-block;
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      color: var(--md-default-bg-color);
      line-height: 1.08;
      text-decoration: none;
      user-select: none;
      padding: auto;
      transform: translateY(100%);
      z-index: 4;
    }

    .main-content {
      z-index: 1;
    }

    .home:hover {
      color: #5466CE;
      font-style: italic;
    }

    .about:hover {
      color: #5466CE;
      font-style: italic;
    }

    .proj:hover {
      color: #5466CE;
      font-style: italic;
    }

    .mach:hover {
      color: #5466CE;
      font-style: italic;
    }

    .fab:hover {
      color: #5466CE;
      font-style: italic;
    }

    .navnum {
      font-size:0.35em;
      font-weight: lighter;
      font-style: italic;
    }
 
    .abtparent {
      position: absolute;
      top: 98%;
      -ms-transform: translateY(-35%);
      transform: translateY(-35%);
      right: 7.5em;
      height: 1.3em;
      color: inherit;
    }

    .abtparent a {
      font-weight: 400;
      font-size: 1.3em;
      color: inherit;
      display: inline-block;
      position: relative;
    }

    .abtparent a:hover {
      color: var(--md-default-fg-color); 
    }

    .abtparent a:after {
      font-weight: 400;
      content: "-->";
      margin-left: -10px;
      opacity: 0;
      vertical-align: middle;
      transition: margin 0.3s, opacity 0.3s;
    }

    .abtparent a:hover:after {
      margin-left: 5px;
      opacity: 1;
    }

    .toggle .main-navigation {
      transition-duration: 0.35;
      transform: translateX(0);
    }

    .toggle .main-navigation a {
      animation: link-appear calc(var(--duration) * 1.5) var(--ease) forwards;
    }

    @keyframes link-appear {
      0%, 25% {
        transform: translateY(100%);
      }
      50%, 100% {
        transform: translateY(0);
      }
    }

    
    @media (max-width: 76em) {
      .logo {
        padding-left: 1em;
      }
    }
    
    @media (max-width: 45em) {
      .logo {
        padding-left: 1em;
      }
      header{
        padding-top: 1.25em;
      }
      .preloader {
        width: 300px;
      }
    }

    @media (max-width: 59.892857142857146em) {
      .toggle .md-search__icon.md-icon:first-of-type {
        color: var(--md-default-fg-color);
      }
      .preloader {
        width: 500px;
      }
    }

    @media (max-width: 55.357142857142854em) {
      .introabt {
        float: left;
        margin-left: 2%;
        margin-right: 2%;
        width: 96%;
      }
      .introabt h2 {
        font-size: 1.3em;
      }
      .introabt h3 {
        font-weight: 425;
        font-size: 1em;
      }
    }

     @media (min-width: 59.892857142857146em) {
      .md-grid {
        margin-left: auto;
        margin-right: auto;
        max-width: 100vw;
      }
      .md-header__inner {
        margin-left: 5vw;
        margin-right: 5vw;
      }
    }

</style>

<img class="preloader" src="../images/index/loader.gif">
<div class="preloaderbg"></div>

<nav class="main-navigation">
    <ul>
      <li><a class="home" href="../"><span class="navnum">01</span> Home</a></li>
      <li><a class="about" href="http://teddywarner.com/About-Me/about/"><span class="navnum">02</span> About Me</a></li>
      <li><a class="proj" href="http://teddywarner.com/feed/"><span class="navnum">03</span> Projects</a></li>
      <li><a class="mach" href="http://teddywarner.com/Machine-Profiles/FusionPro48/"><span class="navnum">04</span> Machine Profiles</a></li>
      <li><a style="font-family: 'Fira Sans';" class="fab" href="https://fabacademy.org/2021/labs/charlotte/students/theodore-warner/"><span class="navnum">05</span> Fab Academy</a></li>
    </ul>
</nav>

<body>
 <span class="main-content">
      <div data-scroll-container>
        <section data-scroll-section>
          <div class="c-section" data-scroll-section>
              <div id="scroll-direction">
                  <div class="c-direction-block_wrapper">
                      <div class="c-direction-block" id="direction">
                          <div class="c-direction-block_item -two">
                              <span id="toptitle" class="c-direction-block_item_inner" data-scroll data-scroll-direction="horizontal" data-scroll-speed="3" data-scroll-target="#direction">
                                  Digital
                              </span>
                          </div>
                          <div class="c-direction-block_item -two">
                              <span id="toptitle" class="c-direction-block_item_inner" data-scroll data-scroll-direction="horizontal" data-scroll-speed="-3" data-scroll-target="#direction">
                                  Fabricator
                              </span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </section>
        <section class="introabt" data-scroll-section>
          <div class="o-layout_item">
            <div class="c-speed-block" data-scroll data-scroll-speed="-3">
              <div id="typed-strings">
                <h2>a student.</h2>
                <h2>a maker.</h2>
                <h2>a developer.</h2>
                <h2>an <em>award winning</em> designer.</h2>
                <h2>a graduate of the <a href="https://fabacademy.org/">Fab Academy</a>.</h2>
              </div>
              <h2><b>Hey! I’m Teddy Warner,</b> <span id="typed"></span></h2>
              <h3>I'm a senior in highschool, currently located in <span style="margin:auto;">🇺🇸 </span> <em>Charlotte, NC</em>. As a graduate of the <a href="https://fabacademy.org/">Fab Academy</a>, I have a great interest in contemporary fabrication technologies & a passion to spread the reaches of digital fabrication.
              </h3> 
              <h3>I'm a 'Full-Stack' Digital Fabricator, utilizing plethoras of fabrication processes to produce mixed-media projects equipped with additive & subtractive parts, custom electronics & software integration. My personal work encompasses my hope to inspire & showcase the vast potential of digital fabrication.
              </h3>
              <h3>When I'm not studying, I love to lose myself in the internet or pick up a new book, hit a mountain bike trail with my friends, and foremost, continue work on a project. Regardless of the activity, you'll always find me listing to some music.
              </h3>
              <div id="abtmebttncontainer">
                <div id="circle">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="200px" height="200px" viewBox="0 0 300 300" xml:space="preserve" class="textrev">
                        <defs>
                            <path id="circlePath" d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "/>
                        </defs>
                        <g>
                            <use xlink:href="#circlePath" fill="none"/>
                            <text>
                                <textPath fill="var(--md-default-fg-color)" xlink:href="#circlePath">- More About Me - More About Me - More About Me </textPath>
                            </text>
                        </g>
                        <a href="http://teddywarner.com/About-Me/about/" class="abtbtn" onmouseenter="leftrevon()" onmouseleave="leftrevoff()">
                          <circle fill="none" cx="150" cy="150" r="75"/>
                      </a>
                    </svg>
                </div>
              </div>
            </div>
          </div>
        </section>
          <section class="c-section" data-scroll-section>
                      <div class="o-layout_item u-2/5@from-medium">
                          <div class="c-section_infos -padding" data-scroll data-scroll-speed="-3" data-scroll-call="test">
                              <div class="c-section_infos_inner" data-scroll data-scroll-offset="200">
                                  <h3>
                                      01. <br>
                                      Speed control
                                  </h3>
                                  <div class="c-sections_infos_text u-text">
                                      <p>
                                          Each element can be animated at a different speed. You get to choo-choo-choose!
                                      </p>
                                  </div>
                              </div>
                          </div>
                      <div class="o-layout_item u-3/5@from-medium">
                          <div class="c-speed-block" data-scroll data-scroll-speed="-1">
                              <div class="o-image_wrapper" data-scroll data-scroll-call="dynamicBackground" data-scroll-repeat>
                                  <div class="o-image" data-scroll>
                                      <img class="c-speed-block_image" src="https://avatars.githubusercontent.com/u/48384497" alt="Locomotive image from unsplash">
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                      <div class="o-layout_item u-2/5@from-medium">
                          <div class="c-speed-block" data-scroll data-scroll-speed="2">
                              <div class="o-image_wrapper" data-scroll data-scroll-call="dynamicBackground" data-scroll-repeat>
                                  <div class="o-image" data-scroll data-scroll-speed="-1.5">
                                      <img class="c-speed-block_image" src="https://avatars.githubusercontent.com/u/48384497" alt="Locomotive image from unsplash">
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="o-layout_item u-3/5@from-medium">
                          <div class="o-layout u-text-right">
                              <div class="o-layout_item u-1/2@from-medium">
                                  <div class="c-speed-block -margin" data-scroll data-scroll-speed="6">
                                      <div class="o-image_wrapper" data-scroll data-scroll-call="dynamicBackground" data-scroll-repeat>
                                          <div class="o-image" data-scroll data-scroll-delay="0.1" data-scroll-speed="-2">
                                              <img class="c-speed-block_image" src="https://avatars.githubusercontent.com/u/48384497" alt="Locomotive image from unsplash">
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
          </section>
          <section class="c-section -fixed" data-scroll-section data-persistent>
              <div id="fixed-elements">
                  <div class="o-layout">
                      <div class="o-layout_item u-2/5@from-medium">
                          <div class="c-section_infos -padding" data-scroll data-scroll-sticky data-scroll-target="#fixed-elements">
                              <div class="c-section_infos_inner" data-scroll data-scroll-offset="200">
                                  <h3>
                                      04. <br>
                                      Fixed elements
                                  </h3>
                                  <div class="c-sections_infos_text u-text">
                                      <p>
                                          Create slides that stick and untick to the viewport while scrolling through.
                                      </p>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="o-layout_item u-3/5@from-medium">
                          <div class="c-fixed_wrapper" data-scroll data-scroll-call="dynamicBackground" data-scroll-repeat>
                              <div class="c-fixed_target" id="fixed-target"></div>
                              <div class="c-fixed" data-scroll data-scroll-sticky data-scroll-target="#fixed-target" style="background-image:url('https://avatars.githubusercontent.com/u/48384497')"></div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          <section>
           </br>
            <p>test</p>
          </section>
      </div>
  </span> 
 <h1></h1>
</body>

<script>
  const scroller = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
  });

	var typed = new Typed('#typed', {
	  stringsElement: '#typed-strings',
	  startDelay: 1000,
	  loop: true
	});
	var typed = new Typed('#typed2', {
	  stringsElement: '#typed-strings2',
	  startDelay: 1000,
	});
</script>