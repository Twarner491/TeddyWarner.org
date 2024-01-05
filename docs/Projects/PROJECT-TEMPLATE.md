---
title: PROJECT-TITLE
description: This is a template for my project pages!
hide:
  - navigation
  - tags
template: project.html
search:
  exclude: true
---

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://kit.fontawesome.com/79ff35ecec.js" crossorigin="anonymous"></script>
  <link rel="stylesheet" href="../assets/css/project.css">
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
    .main-navigation a.home:hover {
    color: #5466CE;
    font-style: italic;
    }
    .main-navigation a.about:hover {
    color: #5466CE;
    font-style: italic;
    }
    .main-navigation a.proj:hover {
    color: #5466CE;
    font-style: italic;
    }
    .main-navigation a.mach:hover {
    color: #5466CE;
    font-style: italic;
    }
    .main-navigation a.fab:hover {
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
<script src="https://kit.fontawesome.com/79ff35ecec.js" crossorigin="anonymous"></script>

# PROJECT-TITLE

<!--- Social Links

HTML Link Generator - https://www.websiteplanet.com/webtools/sharelink/

<span class="share" style=" color: inherit;">
<a class="fb" title="Share on Facebook" href="FACEBOOK-URL"><i class="fab fa-facebook-square"></i></a>
<a class="twitter" title="Share on Twitter" href="TWITTER-URL"><i class="fa-brands fa-square-x-twitter"></i></a>
<a class="pin" title="Share on Pinterest" href="PINTEREST-URL"><i class="fa-brands fa-square-pinterest"></i></a>
<a class="ln" title="Share on LinkedIn" href="LINKEDIN-URL"><i class="fab fa-linkedin"></i></a>
<a class="email" title="Share via Email" href="EMAIL-URL"><i class="fa-solid fa-square-envelope"></i></a>
</span>

-->

<div style="margin-top: -0.8em;">
  <span class="abtlinks"><a href="https://teddywarner.org/About-Me/about/"><img src="https://avatars.githubusercontent.com/u/48384497" alt="Profile Picture" class="profilepic"><span class="abt" style="font-weight: 300; padding-left: 6px;"> Teddy Warner</a><span class="abt" style="font-weight: 300; padding-left: 6px;"><span class="year">| MONTH, YEAR </span>| <i class="far fa-clock"></i> X-X minutes</span></span></span>
  <span class="share" style=" color: inherit;">
  <a class="fb" title="Share on Facebook" href="FACEBOOK-URL"><i class="fab fa-facebook-square"></i></a>
  <a class="twitter" title="Share on Twitter" href="TWITTER-URL"><i class="fa-brands fa-square-x-twitter"></i></a>
  <a class="pin" title="Share on Pinterest" href="PINTEREST-URL"><i class="fa-brands fa-square-pinterest"></i></a>
  <a class="ln" title="Share on LinkedIn" href="LINKEDIN-URL"><i class="fab fa-linkedin"></i></a>
  <a class="email" title="Share via Email" href="EMAIL-URL"><i class="fa-solid fa-square-envelope"></i></a>
  </span>
</div>

---

## H2
### H3
#### H4
##### H5
###### H6

[Hyperlink](URl)



![alt-text](../images/https://picsum.photos/500){: align=RIGHT/LEFT width="100%"}
  <figcaption>Caption</figcaption>



[Solid Button :fontawesome-solid-download:](URL){ .md-button .md-button--primary}
[Outline Button](URL){ .md-button}

Lorem ipsum[^1] dolor sit amet, consectetur adipiscing elit.[^2]

[^1]: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
[^2]: Lorem ipsum dolor sit amet, consectetur adipiscing elit.



 - Duis mollis est eget nibh volutpat, fermentum aliquet dui mollis.
 - Nam vulputate tincidunt fringilla.
 - Nullam dignissim ultrices urna non auctor.


- [x] Lorem ipsum dolor sit amet, consectetur adipiscing elit
- [ ] Vestibulum convallis sit amet nisi a tincidunt
    * [x] In hac habitasse platea dictumst
    * [x] In scelerisque nibh non dolor mollis congue sed et metus
    * [ ] Praesent sed risus massa
- [ ] Aenean pretium efficitur erat, donec pharetra, ligula non scelerisque



| Method      | Description                          |
| ----------- | ------------------------------------ |
| `GET`       | :material-check:     Fetch resource  |
| `PUT`       | :material-check-all: Update resource |
| `DELETE`    | :material-close:     Delete resource |


$$
\operatorname{ker} f=\{g\in G:f(g)=e_{H}\}{\mbox{.}}
$$


``` py linenums="1" title="PYTHON EXAMPLE"
import tensorflow as tf
```

``` c++ linenums="1" title="C++ EXAMPLE"
void setup() {
  pinMode(0, OUTPUT);
}

void loop() {
  digitalWrite(0, HIGH); 
  delay(500);
  digitalWrite(0, LOW); 
  delay(500); 
}
```

``` yaml linenums="1" title="YAML EXAMPLE"
theme:
  features:
    - content.code.annotate # (1)
```

1.  :man_raising_hand: I'm a code annotation! I can contain `code`, __formatted
    text__, images, ... basically anything that can be expressed in Markdown.



!!! note inline "NOTE EXAMPLE" 

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.

!!! info inline end "INFO EXAMPLE"

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.

!!! abstract "ABSTRACT EXAMPLE"

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.

??? tip "TIP EXAMPLE"

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.

??? success "SUCCESS EXAMPLE"

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.

??? question "QUESTION EXAMPLE"

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.

??? warning "WARNING EXAMPLE"

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.

??? failure "FAILURE EXAMPLE"

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.

??? danger "DANGER EXAMPLE"

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.

??? bug "BUG EXAMPLE"

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.

??? example "EXAMPLE"

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.

??? quote "QUOTE EXAMPLE"

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.

*[FDM]: Fused Deposition Modeling
*[CNC]: Computerized Numerical Control
*[MPCNC]: Mostly Printed Computerized Numerical Control - https://docs.v1engineering.com/mpcnc/intro/
*[SSH]: Secure Shell
*[GPIO]: General-Purpose Input/Output
*[USB]: Universal Serial Bus
*[Baudrate]: Measurement of Symbol Rate
*[ETA]: Estimated Time of Arrival
*[GCode]: A software programming language used to control a CNC machine
*[Git]: Software for tracking changes in any set of files
*[GUI]: Graphical User Interface
*[Parametric]: Parametric design is a process based on algorithmic thinking that enables the expression of parameters and rules that, together, define, encode and clarify the relationship between design intent and design response.
*[ISO]: International Organization for Standardization
*[Kreg-Jig]: A Pocket-Hole Jig
*[UPDI]: Unified Program and Debug Interface
*[AVR]: A Family of microcontrollers developed since 1996 by Atmel
*[programmer]: A piece of electronic equipment that arranges written software to configure programmable non-volatile integrated circuits
*[jtag]: Joint Test Action Group
*[IDE]: Integrated Development Environment
*[Rx]: Receiving Signal
*[Tx]: Transmitting Signal
*[VCC]: Voltage Common Collector (+)
*[GND]: Ground / Common Drain (-)
*[IC]: Integrated Circuit
*[LED]: Light-Emitting Diode
*[Cap]: Capacitor
*[SPST]: Single Pole Single Throw Switch
*[SPDT]: Single Pole Double Throw Switch
*[DPST]: Double Pole Single Throw Switch
*[DPDT]: Double Pole Double Throw Switch
*[EEPROM]: Electrically Erasable Programmable Read-Only Memory

  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="../assets/js/tineline.js"></script>