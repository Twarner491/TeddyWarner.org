---
template: index.html
---

<script src="https://kit.fontawesome.com/79ff35ecec.js" crossorigin="anonymous"></script>

<script>

  window.onload = function() {
      if(!window.location.hash) {
          window.location = window.location + '#home';
          window.location.reload();
      }
  }

  window.addEventListener( "pageshow", function ( event ) {
    var historyTraversal = event.persisted || 
                          ( typeof window.performance != "undefined" && 
                                window.performance.navigation.type === 2 );
    if ( historyTraversal ) {
      window.location.reload();
    }
  });

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

    .toggle .ppp {
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
    }
    .main-navigation ul {
      font-size: 9vmin;
      width: 100%;
    }
    .main-navigation li {
      display: flex;
      align-items: center;
      position: relative;
      overflow: hidden;
      z-index: 1;
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
      z-index: 1;
    }
    .main-navigation a {
      display: inline-block;
      width: 100%;
      max-width: 900px;
      margin: 0 auto;
      color: var(--md-default-bg-color);
      line-height: 1.08;
      text-decoration: none;
      user-select: none;
      padding: auto;
      transform: translateY(100%);
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

    .main-content {
      max-width: 90ch;
      transform: translateX(0);
      transition: transform calc(var(--nav-duration) * 2) var(--ease);
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
      padding-left: 95vw;
      margin-right: 0;
      position: absolute;
      top: 50%;
      -ms-transform: translateY(-35%);
      transform: translateY(-35%);
    }
    
    .ln {
      padding-bottom: 0.6em;
      font-style: normal;
    }
    
    .fa-linkedin:hover {
        color: #0e76a8;
        font-style: normal;
    }
    
    .git {
      padding-bottom: 0.6em;
      font-style: normal;
    }
    
    .fa-github:hover {
      background: linear-gradient(155deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-style: normal;
    }
    
    .insta {
      padding-bottom: 0.6em;
      font-style: normal;
    }
    
    .fa-instagram:hover {
      background: radial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%), radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%), radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent), linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      font-style: normal;
    }
    
    .twitter {
      padding-bottom: 0.6em;
      font-style: normal;
    }
    
    .fa-twitter:hover {
        color: #00acee;
        font-style: normal;
    }
    
    .discord {
      padding-bottom: 0.6em;
      font-style: normal;
    }
    
    .fa-discord:hover {
        color: #5865F2;
        font-style: normal;
    }
    
    .spotify {
      padding-bottom: 0.6em;
      font-style: normal;
    }
    
    .fa-spotify:hover {
        color: #1DB954;
        font-style: normal;
    }

    .coffee {
      padding-bottom: 0.6em;
      font-style: normal;
    }
    
    .fa-coffee:hover {
        color: #ffdd00;
        font-style: normal;
    }
    
    .email {
      padding-bottom: 0.6em;
      font-style: normal;
    }
    
    .fa-paper-plane:hover {
        color: #5466ce;
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
      .ppp {
        display: none;
      }
      header{
        padding-top: 0;
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
        -ms-transform: translateY(-35%);
        transform: translateY(-35%);
      }
    }

    @media (max-height: 41.2em) {
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
        top: 18em;
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

  <main class="main-content">
    <h1></h1>
  </main>

  <div class="socialsparent">
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
    <!--<div class="abtparent">
      <a href="http://teddywarner.com/About-Me/about/">About Me</a>
    </div>-->
  </div>

</body>