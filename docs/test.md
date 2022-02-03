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
  
</script>


<style>

    .md-footer-meta {
    display: none;
    }

    .md-source {
      color: var(--md-default-fg-color);  

    }

    header{
      padding-top: 1.5em;
    }

    svg {
    color: var(--md-default-fg-color);
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
 
    :root {
      --duration: 1s;
      --nav-duration: calc(var(--duration) / 4);
      --ease: cubic-bezier(0.215, 0.61, 0.355, 1);
      --space: 1rem;
      --font-size: 1.125rem;
      --line-height: 1.5;
    }
    
    .ppp {
        margin-top: calc(var(--space) * var(--line-height));
        position: absolute;
        top: -2em;
        left: -5.8em;
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

    .main-content {
      max-width: 70ch;
      height: 100%;
      transform: translateX(0);
      transition: transform calc(var(--nav-duration) * 2) var(--ease);
    }

    .socialsparent {
      height: 15em;
      position: relative;
      border: 3px solid green; 
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
      -ms-transform: translateY(-50%);
      transform: translateY(-50%);
    }
    
    .ln {
      padding-bottom: 0.65em;
    }
    
    .fa-linkedin:hover {
        color: #0e76a8;
    }
    
    .git {
      padding-bottom: 0.65em;
    }
    
    .fa-github:hover {
      background: linear-gradient(155deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    }
    
    .insta {
      padding-bottom: 0.65em;
    }
    
    .fa-instagram:hover {
      background: radial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%), radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%), radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent), linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    
    .twitter {
      padding-bottom: 0.65em;
    }
    
    .fa-twitter:hover {
        color: #00acee;
    }
    
    .discord {
      padding-bottom: 0.65em;
    }
    
    .fa-discord:hover {
        color: #5865F2;
    }
    
    .spotify {
      padding-bottom: 0.75em;
    }
    
    .fa-spotify:hover {
        color: #1DB954;
    }
    
    .email {
      padding-bottom: 0.65em;
    }
    
    .fa-paper-plane:hover {
        color: #5466ce;
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

</style>

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
      <a href="mailto:<Twarner491@gmail.com>" class="email" style=" color: inherit;" title="Email - Twarner491@gmail.com"><i class="fas fa-paper-plane"></i></a>
    </div>
  </div>

</body>