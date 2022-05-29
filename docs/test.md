---
template: index.html
---

<script src="https://kit.fontawesome.com/79ff35ecec.js" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/simple-parallax-js@5.6.1/dist/simpleParallax.min.js"></script>
<link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
<script src="https://unpkg.com/aos@next/dist/aos.js"></script>
<script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>

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

  function togglemenu() {
    var element = document.body;
      element.classList.toggle("toggle");
  } 

</script>

<style>

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
      z-index: 2;
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
      z-index: 2;
    }
    .main-navigation ul {
      font-size: 9vmin;
      width: 100%;
      z-index: 3;
    }
    .main-navigation li {
      display: flex;
      align-items: center;
      position: relative;
      overflow: hidden;
      z-index: 3;
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
      z-index: 3;
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
      z-index: 3;
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

    .socialsparent {  
      margin-top: -14.27em;
      height: 95vh;
      position: relative;
    }

    .socials {
      align-self: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      float: right;
      padding-left: 91vw;
      margin-right: 0;
      position: absolute;
      top: 50%;
      -ms-transform: translateY(-15%);
      transform: translateY(-15%);
    }
    
    .ln {
      padding-bottom: 0.6em;
      font-style: normal;
    }
    
    .fa-linkedin:hover {
        color: var(--md-default-fg-color);
        opacity: 0.65;
        font-style: normal;
    }
    
    .git {
      padding-bottom: 0.6em;
      font-style: normal;
    }
    
    .fa-github:hover {
        color: var(--md-default-fg-color);
        opacity: 0.65;
        font-style: normal;
    }
    
    .insta {
      padding-bottom: 0.6em;
      font-style: normal;
    }
    
    .fa-instagram:hover {
        color: var(--md-default-fg-color);
        opacity: 0.65;
        font-style: normal;
    }
    
    .twitter {
      padding-bottom: 0.6em;
      font-style: normal;
    }
    
    .fa-twitter:hover {
        color: var(--md-default-fg-color);
        opacity: 0.65;
        font-style: normal;
    }
    
    .discord {
      padding-bottom: 0.6em;
      font-style: normal;
    }
    
    .fa-discord:hover {
        color: var(--md-default-fg-color);
        opacity: 0.65;
        font-style: normal;
    }
    
    .spotify {
      padding-bottom: 0.6em;
      font-style: normal;
    }
    
    .fa-spotify:hover {
        color: var(--md-default-fg-color);
        opacity: 0.65;
        font-style: normal;
    }

    .coffee {
      padding-bottom: 0.6em;
      font-style: normal;
    }
    
    .fa-coffee:hover {
        color: var(--md-default-fg-color);
        opacity: 0.65;
        font-style: normal;
    }
    
    .email {
      padding-bottom: 0.6em;
      font-style: normal;
    }
    
    .fa-paper-plane:hover {
        color: var(--md-default-fg-color);
        opacity: 0.65;
        font-style: normal;
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
      .socials {
        align-self: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        float: right;
        right: 0.15em;
        margin: 0;
        position: absolute;
        top: 50%;
        -ms-transform: translateY(-15%);
        transform: translateY(-15%);
      }
      .preloader {
        width: 500px;
      }
    }

    @media (max-height: 33em) {
      .socialsparent {
        overflow-y: hidden;  
        margin-top: -14.27em;
        height: 100vh;
        position: relative;
      }
      
      .socials {
        align-self: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        float: right;
        padding-left: 95vw;
        margin: 0;
        position: absolute;
        top: 14em;
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
  <h1></h1>
  <div data-aos="fade-in">
    <img src="https://avatars.githubusercontent.com/u/48384497" alt="Profile Picture" class="profilepic">
  </div>
  <div id="typed-strings">
    <p>Typed.js is a <strong>JavaScript</strong> library.</p>
    <p>It <em>types</em> out sentences.</p>
    <p>Your Mom.</p>
  </div>
  <span id="typed"></span>
    <!-- <div class="socialsparent">
      <div class="socials">
        <a href="https://www.linkedin.com/in/teddy-warner-880974200/" class="ln" style=" color: inherit;" title="Linked In - Teddy Warner"><i class="fab fa-linkedin"></i></a>
        <a href="https://github.com/Twarner491" class="git" style=" color: inherit;" title="Github - Twarner491"><i class="fab fa-github"></i></a>
        <a href="https://www.instagram.com/teddymakesstuff/" class="insta" style=" color: inherit;" title="Instagram - @teddymakesstuff"><i class="fa fa-instagram"></i></a>
        <a href="https://twitter.com/WarnerTeddy" class="twitter" style=" color: inherit;" title="Twitter - @WarnerTeddy"><i class="fa fa-twitter"></i></a>
        <a href="https://discordapp.com/users/534164566649733120/" class="ln" style=" color: inherit;" title="Discord - Twarner#2592"><i class="fab fa-discord"></i></a>
        <a href="https://open.spotify.com/user/mskz5e4dyzv4cb4kkn73iipq0?si=58a503e3c7a54eeb" class="spotify" style=" color: inherit;" title="Spotify - Teddy Warner"><i class="fab fa-spotify"></i></a>
        <a href="https://www.buymeacoffee.com/teddywarner" class="coffee" style=" color: inherit;" title="Buy Me A Coffee! :)"><i class="fas fa-coffee"></i></a>
        <a href="mailto:<Twarner491@gmail.com>" class="email" style=" color: inherit;" title="Email - Twarner491@gmail.com"><i class="fas fa-paper-plane"></i></a>
      </div>
    </div>
  </div> -->
 </span> 
</body>

<script>
	AOS.init();
	var image = document.getElementsByClassName('profilepic');
	new simpleParallax(image, {
		scale: 1.5,
		delay: 0.6,
		transition: 'cubic-bezier(0,0,0,1)'
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