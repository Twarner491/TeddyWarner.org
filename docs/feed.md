---
hide:
  - navigation
  - toc
  - feedback
template: feed.html
search:
  exclude: true
---

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Teddy Warner</title>
  <script src="https://kit.fontawesome.com/79ff35ecec.js" crossorigin="anonymous"></script>
  <link rel="stylesheet" href="../assets/css/feed.css">
    <!-- Stylesheet not working with current static site implementation, so enjoy the inline styles lol -->
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
    --avatar: url("../../images/index/avatardark.svg");
    --quote: url("../../images/index/quote/");
    --articlebg: hsla(0, 0%, 0%, 0.04);
    }
    [data-md-color-scheme="slate"] {
    /*--md-default-bg-color: hsla(228, 7%, 14%, 1);*/
        --inputicon: white;
        --toggledinputicon: hsla(0, 0%, 0%, 0.87);
        --formhover: hsla(0, 0%, 100%, 0.3);
        --toggledform: hsla(0, 0%, 0%, 0.2);
        --toggledformhover: hsla(0, 0%, 0%, 0.32);
        --avatar: url("../../images/index/avatarlight.svg");
        --quote: url("../../images/index/quote/");
        --articlebg: hsl(234, 76%, 95%, 0.04)
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
    .md-banner {
    position: relative;
    z-index: 3;
    }
    main {
    margin-top: -7em;
    position: relative;
    z-index: 2;
    }
    section {
    height: auto;
    z-index: 2;
    }
    .md-sidebar {
    width: 0px;
    }
    .md-footer {
    display: none;
    } 
    .md-main__inner {
    margin: 0;
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
    .head {
    height: 72em;
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
    }
    @media (max-width: 59.892857142857146em) {
    .toggle .md-search__icon.md-icon:first-of-type {
        color: var(--md-default-fg-color);
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
</head>

<nav class="main-navigation">
    <ul>
      <li><a class="home" href="http://teddywarner.com"><span class="navnum">01</span> Home</a></li>
      <li><a class="about" href="http://teddywarner.com/About-Me/about/"><span class="navnum">02</span> About Me</a></li>
      <li><a class="proj" href="http://teddywarner.com/feed/"><span class="navnum">03</span> Projects</a></li>
      <li><a class="mach" href="http://teddywarner.com/Machine-Profiles/FusionPro48/"><span class="navnum">04</span> Machine Profiles</a></li>
      <li><a style="font-family: 'Fira Sans';" class="fab" href="https://fabacademy.org/2021/labs/charlotte/students/theodore-warner/"><span class="navnum">05</span> Fab Academy</a></li>
    </ul>
</nav>

<!--- Post Template

  <div class="post" id="Title">
    <div class="meta">
      <div class="photo" style="background-image: url('../images/')"></div>
    </div>
    <div class="description">
      <h1>Title</h1>
      <h2>- Date -</h2> <span class="time"><i class="far fa-clock"></i>TIME</span>
      <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
      <div class="con">
       <span class="share" style=" color: inherit;">
        <a class="fb" title="Share on Facebook" href="FACEBOOK-URL"><i class="fab fa-facebook-square"></i></a>
        <a class="twitter" title="Share on Twitter" href="TWITTER-URL"><i class="fab fa-twitter"></i></a>
        <a class="pin" title="Share on Pinterest" href="PINTEREST-URL"><i class="fab fa-pinterest"></i></a>
        <a class="ln" title="Share on LinkedIn" href="LINKEDIN-URL"><i class="fab fa-linkedin"></i></a>
        <a class="email" title="Share via Email" href="EMAIL-URL"><i class="fas fa-paper-plane"></i></a>
       </span>
      </div>
        <p class="read-more">Read More</p>
    </div>
  </div>

  <div class="post alt" id="Title">
    <div class="meta">
      <div class="photo" style="background-image: url('../images/')"></div>
    </div>
    <div class="description">
      <h1>Title</h1>
      <h2>- Date -</h2> <span class="time"><i class="far fa-clock"></i>TIME</span>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
      <div class="con">
       <span class="share" style=" color: inherit;">
        <a class="fb" title="Share on Facebook" href="FACEBOOK-URL"><i class="fab fa-facebook-square"></i></a>
        <a class="twitter" title="Share on Twitter" href="TWITTER-URL"><i class="fab fa-twitter"></i></a>
        <a class="pin" title="Share on Pinterest" href="PINTEREST-URL"><i class="fab fa-pinterest"></i></a>
        <a class="ln" title="Share on LinkedIn" href="LINKEDIN-URL"><i class="fab fa-linkedin"></i></a>
        <a class="email" title="Share via Email" href="EMAIL-URL"><i class="fas fa-paper-plane"></i></a>
       </span>
      </div>
        <p class="read-more">Read More</p>
    </div>
  </div>

-->

<body>
  <main data-scroll-container>
   <section data-scroll-section>
   </br>
   </br>
   </br>
   </br>
   </br>
    <center>
    <div class="title">Project Feed</div>
    </center>
    <div class="post" id="vnp">
        <div class="meta">
        <div class="photo" style="background-image: url('../images/VonNiemannProbe/cover.jpg')"></div>
        </div>
        <div class="description">
        <h1>Von Niemann Probe</h1>
        <h2>- Winter, 2023 -</h2> <span class="time"><i class="far fa-clock"></i> 46–58 minutes</span>
        <p>An AVR-based Bluetooth telegraphing shoe insole that lets you play chess in the way Hans Niemann has been accused! This project is our contribution to the ongoing investigation into the Hans Niemann/Magnus Carlsen cheating scandal and tests the feasibility of creating and using an over-the-board chess cheating aid.</p>
        <div class="con">
        <span class="share" style=" color: inherit;">
            <a class="fb" title="Share on Facebook" href="https://www.facebook.com/sharer/sharer.php?u=https://teddywarner.org/Projects/VonNiemannProbe/"><i class="fab fa-facebook-square"></i></a>
            <a class="twitter" title="Share on Twitter" href="https://twitter.com/intent/tweet?url=https://teddywarner.org/Projects/VonNiemannProbe/&text=Check%20out%20the%20Von%20Niemann%20Probe%20on%20teddywarner.org!"><i class="fab fa-twitter"></i></a>
            <a class="pin" title="Share on Pinterest" href="https://pinterest.com/pin/create/button/?url=https://teddywarner.org/Projects/VonNiemannProbe/&media=&description=Check%20out%20the%20Von%20Niemann%20Probe%20on%20teddywarner.org!"><i class="fab fa-pinterest"></i></a>
            <a class="ln" title="Share on LinkedIn" href="https://www.linkedin.com/shareArticle?mini=true&url=https://teddywarner.org/Projects/VonNiemannProbe/"><i class="fab fa-linkedin"></i></a>
            <a class="email" title="Share via Email" href="mailto:info@example.com?&subject=&cc=&bcc=&body=https://teddywarner.org/Projects/VonNiemannProbe/%0ACheck%20out%20the%20Von%20Niemann%20Probe%20on%20teddywarner.org!"><i class="fas fa-paper-plane"></i></a>
        </span>
        </div>
        <p class="read-more">Read More</p>
        </div>
    </div>
    <div class="post alt" id="cnc">
        <div class="meta">
        <div class="photo" style="background-image: url('../images/MillingWorkflow/cover.jpg')"></div>
        </div>
        <div class="description">
        <h1>CNC Milling Workflows</h1>
        <h2>- 2022-2023 -</h2> <span class="time"><i class="far fa-clock"></i> 12-15 min</span>
        <p>A guide for CNC milling, covering machinist jargon, material standards, feeds and speeds, CAM workflows with Autodesk Fusion 360 & Vetric Aspire, and milling workflows for Shopbot & Bantam Tools machines - all through a collection of milling micro-projects ranging from a 1 to 1.9 Million scale mill of Mars's Gale Crater to brass wax seals.</p>
        <div class="con">
        <span class="share" style=" color: inherit;">
            <a class="fb" title="Share on Facebook" href="https://www.facebook.com/sharer/sharer.php?u=https://teddywarner.org/Projects/MillingWorflow/"><i class="fab fa-facebook-square"></i></a>
            <a class="twitter" title="Share on Twitter" href="https://twitter.com/intent/tweet?url=https://teddywarner.org/Projects/MillingWorflow/&text=Check%20out%20the%20CNC%20Milling%20Workflows%20article%20on%20teddywarner.org!"><i class="fab fa-twitter"></i></a>
            <a class="pin" title="Share on Pinterest" href="https://pinterest.com/pin/create/button/?url=https://teddywarner.org/Projects/MillingWorflow/&media=&description=Check%20out%20the%20CNC%20Milling%20Workflows%20article%20on%20teddywarner.org!"><i class="fab fa-pinterest"></i></a>
            <a class="ln" title="Share on LinkedIn" href="https://www.linkedin.com/shareArticle?mini=true&url=https://teddywarner.org/Projects/MillingWorflow/"><i class="fab fa-linkedin"></i></a>
            <a class="email" title="Share via Email" href="mailto:info@example.com?&subject=&cc=&bcc=&body=https://teddywarner.org/Projects/MillingWorflow/%0ACheck%20out%20the%20CNC%20Milling%20Workflows%20article%20on%20teddywarner.org!"><i class="fas fa-paper-plane"></i></a>
        </span>
        </div>
        <p class="read-more">Read More</p>
        </div>
    </div>
    <div class="post" id="aa">
        <div class="meta">
        <div class="photo" style="background-image: url('../images/AdaptableAquaponics/cover.jpg')"></div>
        </div>
        <div class="description">
        <h1>Adaptable Aquaponics</h1>
        <h2>- Summer, 2022 -</h2> <span class="time"><i class="far fa-clock"></i> 18-23 minutes</span>
        <p>A Theoretical Confrontation to Contemporary Farming Challenges. Adaptive Aquaponics is the scaled successor to my <a href="https://teddywarner.org/Projects/AssistiveAquaponics/">Assistive Aquaponics Fish Tank</a> & my entry into Autodesk Instructable's <a href="https://www.instructables.com/contest/makeitmodular2022/">Make It Modular</a> student design scholarship.</p>
        <div class="con">
        <span class="share" style=" color: inherit;">
            <a class="fb" title="Share on Facebook" href="https://www.facebook.com/sharer/sharer.php?u=https://teddywarner.org/Projects/AdaptableAquaponics/"><i class="fab fa-facebook-square"></i></a>
            <a class="twitter" title="Share on Twitter" href="https://twitter.com/intent/tweet?url=https://teddywarner.org/Projects/AdaptableAquaponics/&text=Check%20out%20Adaptable%20Aquaponics%20on%20teddywarner.org!"><i class="fab fa-twitter"></i></a>
            <a class="pin" title="Share on Pinterest" href="https://pinterest.com/pin/create/button/?url=https://teddywarner.org/Projects/AdaptableAquaponics/&media=&description=Check%20out%20Adaptable%20Aquaponics%20on%20teddywarner.org!"><i class="fab fa-pinterest"></i></a>
            <a class="ln" title="Share on LinkedIn" href="https://www.linkedin.com/shareArticle?mini=true&url=https://teddywarner.org/Projects/AdaptableAquaponics/"><i class="fab fa-linkedin"></i></a>
            <a class="email" title="Share via Email" href="mailto:info@example.com?&subject=&cc=&bcc=&body=https://teddywarner.org/Projects/AdaptableAquaponics/%0ACheck%20out%20Adaptable%20Aquaponics%20on%20teddywarner.org!"><i class="fas fa-paper-plane"></i></a>
        </span>
        </div>
        <p class="read-more">Read More</p>
        </div>
    </div>
    <!--<div class="post" id="bit">
        <div class="meta">
        <div class="photo" style="background-image: url('../images/8-bitComputer/clockmodule.jpg')"></div>
        </div>
        <div class="description">
        <h1>8-Bit Computer</h1> 
        <h2>- 2021-2022 -</h2> <span class="time"><i class="far fa-clock"></i> X-X min</span>
        <p> Build Log and Documentation of my take on <a href="https://eater.net/">Ben Eater's</a> 8-Bit Computer, a 'simple-as-possible' microcontroller built upon breadboards with only simple logic gates. A dive into computer logic, and processor workings.</p>
        <div class="con">
        <span class="share" style=" color: inherit;">
            <a class="fb" title="Share on Facebook" href="https://www.facebook.com/sharer/sharer.php?u=https://teddywarner.org/Projects/8-bit/"><i class="fab fa-facebook-square"></i></a>
            <a class="twitter" title="Share on Twitter" href="https://twitter.com/intent/tweet?url=https://teddywarner.org/Projects/8-bit/&text=Check%20Out%20the%208-bit%20Breadboard%20Computer%20(Ben%20Eater%20Build%20Log)%20on"><i class="fab fa-twitter"></i></a>
            <a class="pin" title="Share on Pinterest" href="https://pinterest.com/pin/create/button/?url=https://teddywarner.org/Projects/8-bit/&media=&description=Check%20Out%20the%208-bit%20Breadboard%20Computer%20(Ben%20Eater%20Build%20Log)%20on%20https://teddywarner.org/Projects/8-bit/%20!"><i class="fab fa-pinterest"></i></a>
            <a class="ln" title="Share on LinkedIn" href="https://www.linkedin.com/shareArticle?mini=true&url=https://teddywarner.org/Projects/8-bit/"><i class="fab fa-linkedin"></i></a>
            <a class="email" title="Share via Email" href="mailto:info@example.com?&subject=&cc=&bcc=&body=Check%20Out%20the%208-bit%20Breadboard%20Computer%20(Ben%20Eater%20Build%20Log)%20on%20https://teddywarner.org/Projects/8-bit/%20!"><i class="fas fa-paper-plane"></i></a>
        </span>
        </div>
        <p class="read-more">Read More</p>
        </div>
    </div>--->
    <div class="post alt" id="updi">
        <div class="meta">
        <div class="photo" style="background-image: url('../images/SerialUPDI/ftdi2updisolderedtop.jpg')"></div>
        </div>
        <div class="description">
        <h1>UPDI Programming</h1>
        <h2>- Summer-Winter, 2021 -</h2> <span class="time"><i class="far fa-clock"></i> 24-31 min</span>
        <p>Programming via the megaTinyCore library, enabling your IDE for serial UPDI programming via a portable python implementation and temporary hardware, or one of two designated serial programmer options. Each UPDI serial programmer enables switching between serial programming and monitoring without any rewiring.</p>
        <div class="con">
        <span class="share" style=" color: inherit;">
            <a class="fb" title="Share on Facebook" href="https://www.facebook.com/sharer/sharer.php?u=https://teddywarner.org/Projects/SerialUPDI/"><i class="fab fa-facebook-square"></i></a>
            <a class="twitter" title="Share on Twitter" href="https://twitter.com/intent/tweet?url=https://teddywarner.org/Projects/SerialUPDI/&text=Check%20Out%20UPDI%20Serial%20Programming%20on"><i class="fab fa-twitter"></i></a>
            <a class="pin" title="Share on Pinterest" href="https://pinterest.com/pin/create/button/?url=https://teddywarner.org/Projects/SerialUPDI/&media=&description=Check%20Out%20UPDI%20Serial%20Programming%20on%20https://teddywarner.org/Projects/SerialUPDI/%20!"><i class="fab fa-pinterest"></i></a>
            <a class="ln" title="Share on LinkedIn" href="https://www.linkedin.com/shareArticle?mini=true&url=https://teddywarner.org/Projects/SerialUPDI/"><i class="fab fa-linkedin"></i></a>
            <a class="email" title="Share via Email" href="mailto:info@example.com?&subject=&cc=&bcc=&body=Check%20Out%20UPDI%20Serial%20Programming%20on%20https://teddywarner.org/Projects/SerialUPDI/%20!"><i class="fas fa-paper-plane"></i></a>
        </span>
        </div>
        <p class="read-more">Read More</p>
        </div>
    </div>
    <div class="post" id="bc">
        <div class="meta">
        <div class="photo" style="background-image: url('../images/ParametricGenerator/beautyshot1.jpg')"></div>
        </div>
        <div class="description">
        <h1>Bottle Cap Generator</h1>
        <h2>- Fall, 2021 -</h2> <span class="time"><i class="far fa-clock"></i> 6-7 min</span>
        <p>Lost a lid or just want a more functional cap? Generate and print your own, compatible with any existing threads! Uses metric thread standards via equasions in fusions parameters, allowing for the generation of a threaded cap with only 3 required measurements.</p>
        <div class="con">
        <span class="share" style=" color: inherit;">
            <a class="fb" title="Share on Facebook" href="https://www.facebook.com/sharer/sharer.php?u=https://teddywarner.org/Projects/ParametricGenerator/"><i class="fab fa-facebook-square"></i></a>
            <a class="twitter" title="Share on Twitter" href="https://twitter.com/intent/tweet?url=https://teddywarner.org/Projects/ParametricGenerator/&text=Check%20Out%20the%20Parametric%20Bottle%20Cap%20Generator%20on"><i class="fab fa-twitter"></i></a>
            <a class="pin" title="Share on Pinterest" href="https://pinterest.com/pin/create/button/?url=https://teddywarner.org/Projects/ParametricGenerator/&media=&description=Check%20Out%20the%20Parametric%20Bottle%20Cap%20Generator%20on%20https://teddywarner.org/Projects/ParametricGenerator/%20!"><i class="fab fa-pinterest"></i></a>
            <a class="ln" title="Share on LinkedIn" href="https://www.linkedin.com/shareArticle?mini=true&url=https://teddywarner.org/Projects/ParametricGenerator/"><i class="fab fa-linkedin"></i></a>
            <a class="email" title="Share via Email" href="mailto:info@example.com?&subject=&cc=&bcc=&body=Check%20Out%20the%20Parametric%20Bottle%20Cap%20Generator%20on%20https://teddywarner.org/Projects/ParametricGenerator/"><i class="fas fa-paper-plane"></i></a>
        </span>
        </div>
        <p class="read-more">Read More</p>
        </div>
    </div>
    <div class="post alt" id="le">
        <div class="meta">
        <div class="photo" style="background-image: url('../images/LithophaneExperiments/friendslithophane.jpg')"></div>
        </div>
        <div class="description">
        <h1>Lithophane Experiments</h1>
        <h2>- 2019-2022 -</h2> <span class="time"><i class="far fa-clock"></i> 1-2 min</span>
        <p>A Lithophane is a piece of art made out of a thin translucent material designed to show an image in a “grisaille” color format when held up to light, an art medium I use to test slicer changes with.</p>
        <div class="con">
        <span class="share" style=" color: inherit;">
            <a class="fb" title="Share on Facebook" href="https://www.facebook.com/sharer/sharer.php?u=https://teddywarner.org/Projects/LithophaneExperiments/"><i class="fab fa-facebook-square"></i></a>
            <a class="twitter" title="Share on Twitter" href="https://twitter.com/intent/tweet?url=https://teddywarner.org/Projects/LithophaneExperiments/&text=Check%20Out%20this%20compilation%20of%20Litophanes%20on"><i class="fab fa-twitter"></i></a>
            <a class="pin" title="Share on Pinterest" href="https://pinterest.com/pin/create/button/?url=https://teddywarner.org/Projects/LithophaneExperiments/&media=&description=Check%20Out%20this%20compilation%20of%20Litophanes%20on%20https://teddywarner.org/Projects/LithophaneExperiments/%20!"><i class="fab fa-pinterest"></i></i></a>
            <a class="ln" title="Share on LinkedIn" href="https://www.linkedin.com/shareArticle?mini=true&url=https://teddywarner.org/Projects/LithophaneExperiments/"><i class="fab fa-linkedin"></i></i></a>
            <a class="email" title="Share via Email" href="mailto:info@example.com?&subject=&cc=&bcc=&body=Check%20Out%20this%20compilation%20of%20Litophanes%20on%20https://teddywarner.org/Projects/LithophaneExperiments/"><i class="fas fa-paper-plane"></i></i></i></a>
        </span>
        </div>
        <p class="read-more">Read More</p>
        </div>
    </div>
    <div class="post" id="os">
        <div class="meta">
        <div class="photo" style="background-image: url('../images/Octoprint/personaloctoprint.jpg')"></div>
        </div>
        <div class="description">
        <h1>Octoprint Setup</h1>
        <h2>- Fall, 2021 -</h2> <span class="time"><i class="far fa-clock"></i> 9-11 min</span>
        <p>Complete Octoprint Setup Documentation, including hardware setup, software installation, machine mounting, and a list of great plugins to expand Octoprint's capabilities.</p>
        <div class="con">
        <span class="share" style=" color: inherit;">
            <a class="fb" title="Share on Facebook" href="https://www.facebook.com/sharer/sharer.php?u=https://teddywarner.org/Projects/Octoprint/"><i class="fab fa-facebook-square"></i></a>
            <a class="twitter" title="Share on Twitter" href="https://twitter.com/intent/tweet?url=https://teddywarner.org/Projects/Octoprint/&text=Setup%20an%20Instance%20of%20Octoprint%20for%20Your%20Machine%20With"><i class="fab fa-twitter"></i></a>
            <a class="pin" title="Share on Pinterest" href="https://pinterest.com/pin/create/button/?url=https://teddywarner.org/Projects/Octoprint/&media=&description=Setup%20an%20Instance%20of%20Octoprint%20for%20Your%20Machine%20With%20https://teddywarner.org/Projects/Octoprint/"><i class="fab fa-pinterest"></i></a>
            <a class="ln" title="Share on LinkedIn" href="https://www.linkedin.com/shareArticle?mini=true&url=https://teddywarner.org/Projects/Octoprint/"><i class="fab fa-linkedin"></i></a>
            <a class="email" title="Share via Email" href="mailto:info@example.com?&subject=&cc=&bcc=&body=Setup%20an%20Instance%20of%20Octoprint%20for%20Your%20Machine%20With%20https://teddywarner.org/Projects/Octoprint/"><i class="fas fa-paper-plane"></i></a>
        </span>
        </div>
        <p class="read-more">Read More</p>
        </div>
    </div>
    <div class="post alt" id="assistivea">
        <div class="meta">
        <div class="photo" style="background-image: url('../images/AssistiveAquaponics/tankhighlight.jpg')"></div>
        </div>
        <div class="description">
        <h1>Assistive Aquaponics</h1>
        <h2>- Winter & Spring, 2021 -</h2> <span class="time"><i class="far fa-clock"></i> 1-2 min</span>
        <p>A monitored aquaponics ecosystem, expanding the accessibility of successful & thriving aquaponics ecosystems. - my Fab Academy final project.</p>
        <div class="con">
        <span class="share" style=" color: inherit;">
            <a class="fb" title="Share on Facebook" href="https://www.facebook.com/sharer/sharer.php?u=https://fabacademy.org/2021/labs/charlotte/students/theodore-warner/Final%2520Project/final-project/"><i class="fab fa-facebook-square"></i></a>
            <a class="twitter" title="Share on Twitter" href="https://twitter.com/intent/tweet?url=https://fabacademy.org/2021/labs/charlotte/students/theodore-warner/Final%2520Project/final-project/&text=Check%20Out%20the%20Assistive%20Aquaponics%20Fish%20Tank%20on"><i class="fab fa-twitter"></i></a>
            <a class="pin" title="Share on Pinterest" href="https://pinterest.com/pin/create/button/?url=https://fabacademy.org/2021/labs/charlotte/students/theodore-warner/Final%2520Project/final-project/&media=&description=Check%20Out%20the%20Assistive%20Aquaponics%20Fish%20Tank%20on%20https://fabacademy.org/2021/labs/charlotte/students/theodore-warner/Final%2520Project/final-project/%20!"><i class="fab fa-pinterest"></i></a>
            <a class="ln" title="Share on LinkedIn" href="https://www.linkedin.com/shareArticle?mini=true&url=https://fabacademy.org/2021/labs/charlotte/students/theodore-warner/Final%2520Project/final-project/"><i class="fab fa-linkedin"></i></a>
            <a class="email" title="Share via Email" href="mailto:info@example.com?&subject=&cc=&bcc=&body=Check%20Out%20the%20Assistive%20Aquaponics%20Fish%20Tank%20on%20https://fabacademy.org/2021/labs/charlotte/students/theodore-warner/Final%2520Project/final-project/"><i class="fas fa-paper-plane"></i></a>
        </span>
        </div>
        <p class="read-more">Read More</p>
        </div>
    </div>
    <div class="post" id="ender">
        <div class="meta">
        <div class="photo" style="background-image: url('../images/KlipperEnder3/directdrive.jpg')"></div>
        </div>
        <div class="description">
        <h1>Klipper Enabled Ender 3</h1>
        <h2>- Spring & Summer, 2021 -</h2> <span class="time"><i class="far fa-clock"></i> 10-12 min</span>
        <p>A modified Ender 3 with printer electronics rehoused, carriage reworked to direct drive, motherboard & screen swapped, and Klipper firmware installed.</p>
        <div class="con">
        <span class="share" style=" color: inherit;">
            <a class="fb" title="Share on Facebook" href="https://www.facebook.com/sharer/sharer.php?u=https://teddywarner.org/Projects/KlipperEnder3/"><i class="fab fa-facebook-square"></i></a>
            <a class="twitter" title="Share on Twitter" href="https://twitter.com/intent/tweet?url=https://teddywarner.org/Projects/KlipperEnder3/&text=Check%20Out%20the%20Klipper%20Enabled%20Ender%203%20on"><i class="fab fa-twitter"></i></a>
            <a class="pin" title="Share on Pinterest" href="https://pinterest.com/pin/create/button/?url=https://teddywarner.org/Projects/KlipperEnder3/&media=&description=Check%20Out%20the%20Klipper%20Enabled%20Ender%203%20on%20https://teddywarner.org/Projects/KlipperEnder3/%20!"><i class="fab fa-pinterest"></i></a>
            <a class="ln" title="Share on LinkedIn" href="https://www.linkedin.com/shareArticle?mini=true&url=https://teddywarner.org/Projects/KlipperEnder3/"><i class="fab fa-linkedin"></i></a>
            <a class="email" title="Share via Email" href="mailto:info@example.com?&subject=&cc=&bcc=&body=Check%20Out%20the%20Klipper%20Enabled%20Ender%203%20on%20https://teddywarner.org/Projects/KlipperEnder3/"><i class="fas fa-paper-plane"></i></a>
        </span>
        </div>
        <p class="read-more">Read More</p>
        </div>
    </div>
    <div class="post alt" id="site">
        <div class="meta">
        <div class="photo" style="background-image: url('../images/PortfolioSite/highlightcode.jpg')"></div>
        </div>
        <div class="description">
        <h1>Project Portfolio Site</h1>
        <h2>- Summer, 2021 -</h2> <span class="time"><i class="far fa-clock"></i> 6-7 min</span>
        <p>The behind the scenes of the site you are on right now - Static site generation with Mkdocs, and hosting via GitHub Pages.</p>
        <div class="con">
        <span class="share" style=" color: inherit;">
            <a class="fb" title="Share on Facebook" href="https://www.facebook.com/sharer/sharer.php?u=https://teddywarner.org/Projects/ProjectPortfolioSite/"><i class="fab fa-facebook-square"></i></a>
            <a class="twitter" title="Share on Twitter" href="https://twitter.com/intent/tweet?url=https://teddywarner.org/Projects/ProjectPortfolioSite/&text=Check%20Out%20the%20Behind%20the%20Scenes%20to%20teddywarner.org%20on"><i class="fab fa-twitter"></i></a>
            <a class="pin" title="Share on Pinterest" href="https://pinterest.com/pin/create/button/?url=https://teddywarner.org/Projects/ProjectPortfolioSite/&media=&description=Check%20Out%20the%20Behind%20the%20Scenes%20to%20teddywarner.org%20on%20https://teddywarner.org/Projects/ProjectPortfolioSite/"><i class="fab fa-pinterest"></i></a>
            <a class="ln" title="Share on LinkedIn" href="https://www.linkedin.com/shareArticle?mini=true&url=https://teddywarner.org/Projects/ProjectPortfolioSite/"><i class="fab fa-linkedin"></i></a>
            <a class="email" title="Share via Email" href="mailto:info@example.com?&subject=&cc=&bcc=&body=Check%20Out%20the%20Behind%20the%20Scenes%20to%20teddywarner.org%20on%20https://teddywarner.org/Projects/ProjectPortfolioSite/"><i class="fas fa-paper-plane"></i></a>
        </span>
        </div>
        <p class="read-more">Read More</p>
        </div>
    </div>
    <div class="post" id="desk">
        <div class="meta">
        <div class="photo" style="background-image: url('../images/CornerDesk/finishedwoodassembly.jpg')"></div>
        </div>
        <div class="description">
        <h1>Corner Desk</h1>
        <h2>- Spring, 2020 -</h2> <span class="time"><i class="far fa-clock"></i> 6-8 min</span>
        <p>A desk for the corner of my bedroom with integrated cable management and laptop mounting, allowing for super-clean cable routing.</p>
        <div class="con">
        <span class="share" style=" color: inherit;">
            <a class="fb" title="Share on Facebook" href="https://www.facebook.com/sharer/sharer.php?u=https://teddywarner.org/Projects/CornerDesk/"><i class="fab fa-facebook-square"></i></a>
            <a class="twitter" title="Share on Twitter" href="https://twitter.com/intent/tweet?url=https://teddywarner.org/Projects/CornerDesk/&text=Check%20Out%20the%20Cable-Managed%20Corner%20Desk%20on"><i class="fab fa-twitter"></i></a>
            <a class="pin" title="Share on Pinterest" href="https://pinterest.com/pin/create/button/?url=https://teddywarner.org/Projects/CornerDesk/&media=&description=Check%20Out%20the%20Cable-Managed%20Corner%20Desk%20on%20https://teddywarner.org/Projects/CornerDesk/%20!"><i class="fab fa-pinterest"></i></a>
            <a class="ln" title="Share on LinkedIn" href="https://www.linkedin.com/shareArticle?mini=true&url=https://teddywarner.org/Projects/CornerDesk/"><i class="fab fa-linkedin"></i></a>
            <a class="email" title="Share via Email" href="mailto:info@example.com?&subject=&cc=&bcc=&body=Check%20Out%20the%20Cable-Managed%20Corner%20Desk%20on%20https://teddywarner.org/Projects/CornerDesk/"><i class="fas fa-paper-plane"></i></a>
        </span>
        </div>
        <p class="read-more">Read More</p>
        </div>
    </div>
   </section>
   <section style="height:3em;">
    <h1></h1>
   </section>
  </main>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/locomotive-scroll@4.1.4/dist/locomotive-scroll.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
  <script src="../assets/js/feed.js"></script>
  <script>
    document.getElementById('vnp').addEventListener('click', function() {
        window.location.href = 'http://teddywarner.com/Projects/VonNiemannProbe/'; 
    });
    document.getElementById('cnc').addEventListener('click', function() {
        window.location.href = 'http://teddywarner.com/Projects/MillingWorflow/'; 
    });
    document.getElementById('aa').addEventListener('click', function() {
        window.location.href = 'http://teddywarner.com/Projects/AdaptableAquaponics/'; 
    });
    document.getElementById('updi').addEventListener('click', function() {
        window.location.href = 'http://teddywarner.com/Projects/SerialUPDI'; 
    });
    document.getElementById('bc').addEventListener('click', function() {
        window.location.href = 'http://teddywarner.com/Projects/ParametricGenerator'; 
    });
    document.getElementById('le').addEventListener('click', function() {
        window.location.href = 'http://teddywarner.com/Projects/LithophaneExperiments'; 
    });
    document.getElementById('os').addEventListener('click', function() {
        window.location.href = 'http://teddywarner.com/Projects/Octoprint'; 
    });
    document.getElementById('assistivea').addEventListener('click', function() {
        window.location.href = 'http://teddywarner.com/Projects/AssistiveAquaponics'; 
    });
    document.getElementById('ender').addEventListener('click', function() {
        window.location.href = 'http://teddywarner.com/Projects/KlipperEnder3'; 
    });
    document.getElementById('site').addEventListener('click', function() {
        window.location.href = 'http://teddywarner.com/Projects/ProjectPortfolioSite'; 
    });
    document.getElementById('desk').addEventListener('click', function() {
        window.location.href = 'http://teddywarner.com/Projects/CornerDesk'; 
    });
    </script>
</body>
</html>
