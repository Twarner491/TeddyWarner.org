---
template: index.html
---

<script src="https://kit.fontawesome.com/79ff35ecec.js" crossorigin="anonymous"></script>

<script>

var img1 = "";
var img2 = "";
var img3 = "";
var img4 = "";
var img5 = "";
    
document.addEventListener("DOMContentLoaded", () => {
  const log = console.log,
    array = [img1, img2, img3, img4, img5],
    random = Math.floor(Math.random() * array.length),
    target = document.getElementById("target");
  target.src = `${array[random]}`;
  log(target);
});

window.onload = function() {
    if(!window.location.hash) {
        window.location = window.location + '#welcome!';
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

    :root {
      --duration: 1s;
      --nav-duration: calc(var(--duration) / 4);
      --ease: cubic-bezier(0.215, 0.61, 0.355, 1);
      --space: 1rem;
      --font-size: 1.125rem;
      --line-height: 1.5;
      --inputicon: hsla(0, 0%, 0%, 0.87);
      --toggledinputicon: white;
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

    .md-search__input + .md-search__icon {
      color: var(--inputicon);
    }

    .toggle .md-search__input + .md-search__icon {
      color: var(--toggledinputicon);
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
    
    .ppp {
        margin-top: calc(var(--space) * var(--line-height));
        position: absolute;
        top: -2em;
        left: -1.2em;
        transform: rotate(270deg);
        font-size: 3.4em;
        height: 10em;
    }

    .logo {
    padding-left: 8.7em;
    }

    .hero {
      z-index: 0;
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
      max-width: 800px;
      margin: 0 auto;
      color: var(--md-default-bg-color);
      line-height: 1.08;
      text-decoration: none;
      user-select: none;
      padding: auto;
      transform: translateY(100%);
      z-index: 1;
    }

    .about:hover {
      color: #5466CE;
    }

    .proj:hover {
      color: #5466CE;
    }

    .mach:hover {
      color: #5466CE;
    }

    .fab:hover {
      color: #5466CE;
    }

    .main-content {
      max-width: 70ch;
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
      right: 0.15em;
      margin: 0;
      position: absolute;
      top: 50%;
      -ms-transform: translateY(-35%);
      transform: translateY(-35%);
    }
    
    .ln {
      padding-bottom: 0.6em;
    }
    
    .fa-linkedin:hover {
        color: #0e76a8;
    }
    
    .git {
      padding-bottom: 0.6em;
    }
    
    .fa-github:hover {
      background: linear-gradient(155deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    
    .insta {
      padding-bottom: 0.6em;
    }
    
    .fa-instagram:hover {
      background: radial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%), radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%), radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent), linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    
    .twitter {
      padding-bottom: 0.6em;
    }
    
    .fa-twitter:hover {
        color: #00acee;
    }
    
    .discord {
      padding-bottom: 0.6em;
    }
    
    .fa-discord:hover {
        color: #5865F2;
    }
    
    .spotify {
      padding-bottom: 0.6em;
    }
    
    .fa-spotify:hover {
        color: #1DB954;
    }

    .coffee {
      padding-bottom: 0.6em;
    }
    
    .fa-coffee:hover {
        color: #ffdd00; 
    }
    
    .email {
      padding-bottom: 0.6em;
    }
    
    .fa-paper-plane:hover {
        color: #5466ce;
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

    @media (max-height: 48.75em) {
      .logo {
          padding-left: 7.5em;
      }
      .ppp {
          position: absolute;
          top: -2.7em;
          left: -1.2em;
          transform: rotate(270deg);
          font-size: 2.8em;
          height: 10em;
      }
    }

    @media (max-height: 54em) and (min-width: 108.3125em) {
      .logo {
          padding-left: 7.5em;
      }
      .ppp {
          position: absolute;
          top: -2.7em;
          left: -1.2em;
          transform: rotate(270deg);
          font-size: 2.8em;
          height: 10em;
      }
    }

    
    @media (max-width: 76em) {
      .logo {
          padding-left: 7.5em;
      }
      .ppp {
        position: absolute;
        top: -2.7em;
        left: -2.4rem;
        transform: rotate(270deg);
        font-size: 2.8em;
        height: 10em;
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

    @media (max-height: 31.5em) {
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
        right: 0.15em;
        margin: 0;
        position: absolute;
        top: 16em;
      }
    }

</style>

<nav class="main-navigation">
    <ul>
      <li><a class="about" href="../">Home</a></li>
      <li><a class="about" href="http://teddywarner.com/About-Me/about/">About Me</a></li>
      <li><a class="proj" href="http://teddywarner.com/feed/">Projects</a></li>
      <li><a class="mach" href="http://teddywarner.com/Machine-Profiles/FusionPro48/">Machine Profiles</a></li>
      <li><a style="  font-family: 'Fira Sans';" class="fab" href="https://fabacademy.org/2021/labs/charlotte/students/theodore-warner/">Fab Academy</a></li>
    </ul>
</nav>

<body>

  <main class="main-content">
    <h1></h1>
    <span class="ppp">Personal Project Portfolio</span>
  </main>

  <center>
    <img class="hero" id="target" src="a.jpg">
  </center>

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
  </div>

</body>