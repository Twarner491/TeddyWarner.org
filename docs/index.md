---
title: TeddyWarner.org
description: Project Portfolio and Documentation Site for Teddy Warner.
template: index.html
search:
  exclude: true
---

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Teddy Warner</title>
  <script src="https://kit.fontawesome.com/79ff35ecec.js" crossorigin="anonymous"></script>
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

  section {
    height: 100vh;
    z-index: 2;
  }

  .md-sidebar {
    width: 0px;
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

  .md-footer {
    position: absolute;
    top: -200em;
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
 
.avatarpar {
  width: 100%;
  height: 85vh;
  z-index: 2;
}

.avatar {
  content: var(--avatar);
  pointer-events: none;
  margin-bottom: -1em;
  width: 550px;
  opacity: 0.9;
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
  top: -6em;
  left: 35.5em;
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

  .funnyworm {
    position: relative;
    height: 0;
    width: 106vw;
    overflow: visable;
    top: 4em;
    left: 28em;
  }

  .hole1{
    position: absolute;
    top: 4em;
    left: 15em;
  }

  .hole2{
    position: absolute;
    top: 14em;
    left: 57em;
  }

  @font-face {
      font-family: RoughJore;
      src: url(../fonts/Jore-BF648d4888a57c3.ttf);
  }

  svg.svgwave {
      width: 100%;
      height: auto;
      overflow: visible;
  }

  svg.svgwave path {
      fill:transparent;
      transform: translate(248.25 45.416);
  }

  svg.svgwave text {
      font-size:2em;
      font-family: 'RoughJore';
      font-weight: normal;
      font-style: normal;
      fill: url("#grad");
  }

  .featured-projects {
    height: 75em;
    width: 100%;
  }

  @font-face {
    font-family: Romalika;
    src: url(../fonts/ROMALIKA.OTF);
  }

  .featured-projects h2 {    
    position: relative;
    top: -0.5em;
    left: -1em;
    font-family: Romalika;
    font-size: 40px;
    font-weight: 700;
    text-align: center;
  }
  
  .grid {
    position: relative;
    top: -30em;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 30px;
    width: 100%;
    margin: auto;
  }

  .projparent{
    position: relative;
    width: 1380px;
    height: 1669px;
    margin: 0 auto;
  }
  
  .project {
    background-color: #f2f2f2;
    padding: 20px;
    text-align: center;
    border-radius: 8px;
    transition: transform 0.3s;
    display: flex;
    flex-direction: column;
    -webkit-filter: brightness(100%);
    -moz-filter: brightness(100%);
    filter: brightness(100%);
    transition: all 0.3s ease;
  }
  
  .project.shadowbox {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  }
  
  .project:hover {
    transform: translateY(-5px);
    -webkit-filter: brightness(45%);
    -moz-filter: brightness(45%);
    filter: brightness(45%);
  }
  
  .p1 {
    background-image: url("https://teddywarner.org/images/AdaptableAquaponics/cover.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center; 
    position: absolute;
    width: 616px;
    height: 387.2px;
    top: -5%;
    left: 3.75%;
    margin: 15px;
  }
  
  .p2 {
    position: absolute;
    top: -13.5%;
    left: 49.5%;
    width: 560.762px;
    height: 657.25px;
    border-radius: 25px;
    background-color: transparent;
    filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.1));
    -webkit-filter: brightness(100%);
    -moz-filter: brightness(100%);
    filter: brightness(100%);
    transition: all 0.3s ease;
    margin: 15px;
  }

  .p2 svg {
    width: 560.762px;
    height: 657.25px;
  }
  
  .p3 {
    background-image: url("https://teddywarner.org/images/ParametricGenerator/beautyshot1.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center; 
    position: absolute;
    top: 20%;
    left: 15.75%;
    width: 668.8px;
    height: 457.6px;
    border-radius: 35px;
    margin: 15px;
  }

  .p4 {
    background-image: url("https://teddywarner.org/images/SerialUPDI/ftdi2updisolderedtop.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center; 
    position: absolute;
    top: 28%;
    left: 66%;
    width: 316.8px;
    height: 387.2px;
    border-radius: 15px;
    margin: 15px;
  }

  .p5 {
    background-image: url("https://content.instructables.com/F9A/5P7G/L3OGGX2A/F9A5P7GL3OGGX2A.jpg?auto=webp&frame=1&width=1024&height=1024&fit=bounds&md=ce684af69ce80aea9ef251592d0606da");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center; 
    position: absolute;
    top: 2%;
    left: 91%;
    width: 316.8px;
    height: 528px;
    border-radius: 48%;
    margin: 15px;
  }

  .newcheck {
    width: 81px;
    position: relative;
    top: -15.5%;
    left: -24em;
  }

  #circle1 { 
    width: 200px;
    top: 33%;
    left: -85%;
    position: relative; 
    padding-bottom: 100%; 
    overflow: hidden; 
  }
  
  #circle1 text { 
    font-family: 'Fira Sans', sans-serif; 
    font-size: 17.6px; 
    font-weight: 500;
  }

  .featured-articles {
    position: relative;
    top: -21em;
    height: 18em;
    width: 100%;
  }
  
  .featured-articles h2 {
    position: relative;
    top: 1em;
    font-family: Romalika;
    font-size: 40px;
    font-weight: 700;
    text-align: center;
  }
  
  .article-scroller {
    width: 100%;
    height: auto;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    white-space: nowrap;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    -ms-overflow-style: none;
    scrollbar-width: none;
    padding-left: 20px;
  }
  
  .article-scroller::-webkit-scrollbar {
    display: none;
  }
  
  .article-set {
    flex: 0 0 100%;
    height: 300px;
    scroll-snap-align: start;
    overflow-x: hidden;
    white-space: normal;
    vertical-align: top;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .article {
    flex-shrink: 0;
    width: 320px;
    height: 250px;
    padding: 20px;
    margin: 10px;
    text-align: center;
    background-color: var(--articlebg);
    border-radius: 8px;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  
  .article img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 8px;
  }
  
  .article h3 {
    width: 100%;
    margin: 10px 0;
    font-size: 18px;
    font-weight: 700;
    color: var(--md-default-fg-color);
  }

  .navigation-arrows {
    position: relative;
    top: -1em;
    width: 975px;
    margin: auto;
  }
  
  .navigation-arrows button {
    color: var(--md-default-fg-color);
    border: none;
    padding: 10px 10px;
    font-size: 16px;
    font-weight: 700;
    border-radius: 8px;
    cursor: pointer;
  }

  .dots-container {
    position: relative;
    top: -3em;
    left: 24em;
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }

  .dot {
    width: 9px;
    height: 9px;
    background-color: var(--md-default-fg-color--lighter);
    border-radius: 50%;
    margin: 0 5px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
  }

  .dot.active {
    background-color: var(--md-default-fg-color);
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

  @media (min-width: 120.07142857142857em) {
    .content {
      width: 1800px;
      margin: auto;
    }
    .featured-projects h2 {    
      top: -1.2em;
      left: -1em;
    }
    .newcheck {
      left: -22em;
    }
  }
  
  @media (max-width: 100.96428571428571em) {
    .content {
      width: 1413.5px;
      margin: auto;
    }
    .funnyworm {
      width: 106vw;
      top: 4em;
      left: 30em;
    }
    .featured-projects h2 {    
      top: -0.5em;
      left: -1em;
    }
    .p1 {
      width: 431.2px;
      height: 271.04px;
      top: -7.5%;
      left: 1%;
    }
    .p2 {
      top: -13.5%;
      left: 33%;
      width: 392.5334px;
      height: 460.075px;
    }
    .p2 svg {
      width: 392.5334px;
      height: 460.075px;
    }
    .p3 {
      top: 10%;
      left: 9.25%;
      width: 468.16px;
      height: 320.32px;
    }
    .p4 {
      top: 15.5%;
      left: 45%;
      width: 221.76px;
      height: 271.04px;
    }
    .p5 {
      top: -2%;
      left: 62%;
      width: 221.76px;
      height: 369.6px;
    }
    .newcheck {
      top: -16em;
      left: -51.5em;
    }
    #circle1 { 
      top: 19.5%;
      left: -36em;
    }
    .featured-articles {
      top: -30em;
    }
  }
  
  @media (max-width: 86.3125em) {
    .content {
      width: 885px;
      margin: auto;
    }
    .funnyworm {
      width: 115vw;
      top: 34em;
      left: 34em;
      transform: rotate(38deg);
    }
    .article{
      width: 250px;
      height: 240px;
    }
    .article h3 {
      font-size: 14px;
      font-weight: 700;
    }
    .featured-projects h2 {    
      top: -14em;
      left: -8.25em;
    }
    .p1 {
      width: 396.704px;
      height: 249.357px;
      top: -7.5%;
      left: -8%;
    }
    .p2 {
      top: -13%;
      left: 21.5%;
      width: 361.131px;
      height: 423.269px;
    }
    .p2 svg {
      width: 361.131px;
      height: 423.269px;
    }
    .p3 {
      top: 8.5%;
      left: -0.5%;
      width: 430.707px;
      height: 294.6944px;
    }
    .p4 {
      top: 13.5%;
      left: 32.5%;
      width: 204.019px;
      height: 249.357px;
    }
    .p5 {
      top: -3%;
      left: 48.5%;
      width: 204.019px;
      height: 340.032px;
    }
    .newcheck {
      width: 65px;
      top: -15em;
      left: -63em;
    }
    #circle1 { 
      top: 18%;
      left: -47em;
    }
    .featured-articles {
      top: -30em;
    }
  }
  @media (max-width: 70.75em) {
    .funnyworm {
      width: 122vw;
      top: 38em;
      left: 29em;
      transform: rotate(45deg);
    }
    .article{
      width: 250px;
      height: 240px;
    }
    .article h3 {
      font-size: 14px;
      font-weight: 700;
    }
    .featured-projects h2 {    
      top: -14em;
      left: -7.5em;
    }
    .p1 {
      width: 364.968px;
      height: 229.4084px;
      top: -7.5%;
      left: -4%;
    }
    .p2 {
      top: -12.5%;
      left: 22.5%;
      width: 332.2405px;
      height: 389.4075px;
    }
    .p2 svg {
      width: 332.2405px;
      height: 389.4075px;
    }
    .p3 {
      top: 7.25%;
      left: 2.5%;
      width: 396.2504px;
      height: 271.119px;
    }
    .p4 {
      top: 11.75%;
      left: 32.5%;
      width: 187.6975px;
      height: 229.4084px;
    }
    .p5 {
      top: -4%;
      left: 46.75%;
      width: 187.6975px;
      height: 312.8294px;
    }
    .newcheck {
      width: 65px;
      top: -14em;
      left: -64em;
    }
    #circle1 { 
      top: 14%;
      left: -48.5em;
    }
    .featured-articles {
      top: -30em;
    }
  }
  @media (max-width: 68.3125em) {
    .funnyworm {
      width: 125vw;
    }
    .featured-projects h2 {    
      top: -14em;
      left: -6.5em;
    }
    .p1 {
      top: -7.5%;
      left: -1%;
    }
    .p2 {
      top: -12.5%;
      left: 25.5%;
    }
    .p3 {
      top: 7.25%;
      left: 5.5%;
    }
    .p4 {
      top: 11.75%;
      left: 35.5%;
    }
    .p5 {
      top: -4%;
      left: 49.75%;
    }
    .newcheck {
      width: 65px;
      top: -14em;
      left: -61em;
    }
    #circle1 { 
      top: 14%;
      left: -46.5em;
    }
    .featured-articles {
      top: -30em;
    }
  }
  @media (max-width: 65em) {
    .funnyworm {
      width: 132vw;
    }
    .featured-projects h2 {    
      top: -14em;
      left: -7em;
    }
    .p1 {
      width: 328.471px;
      height: 206.4676px;
      top: -7.5%;
      left: -1%;
    }
    .p2 {
      top: -12%;
      left: 23%;
      width: 299.0165px;
      height: 350.467px;
    }
    .p2 svg {
      width: 299.0165px;
      height: 350.467px;
    }
    .p3 {
      top: 6%;
      left: 5%;
      width: 356.6254px;
      height: 244.007px;
    }
    .p4 {
      top: 10%;
      left: 32%;
      width: 168.9278px;
      height: 206.4676px;
    }
    .p5 {
      top: -4%;
      left: 45%;
      width: 168.9278px;
      height: 281.5465px;
    }
    .newcheck {
      width: 65px;
      top: -13.5em;
      left: -66em;
    }
    #circle1 { 
      top: 13%;
      left: -50em;
    }
    .featured-articles {
      top: -35em;
    }
  }
  @media (max-width: 63em) {
    .funnyworm {
      width: 135vw;
      top: 38em;
      left: 25em;
      transform: rotate(45deg);
    }
  }
  @media (max-width: 58em) {
    .funnyworm {
      width: 135vw;
      top: 33em;
      left: 22em;
      transform: rotate(45deg);
    }
  }
  @media (max-width: 50em) {
    main {
      height: 0;
    }
    .head {
      height: 300px;
    }
    .content {
      display: none;
    }
    .funnyworm {
      display: none;
    }
    .avatar {
      margin-bottom: -2em;
    }
    .featured-projects{
      display: none;
    }
    .featured-articles {
      display: none;
    }
    .footer{
      display: none;
    }
  }
  </style>
</head>

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
  <main data-scroll-container>
   <section class="head" data-scroll-section>
    <div class="funnyworm" style="z-index:-1;">
      <svg class="svgwave" xmlns="http://www.w3.org/2000/svg" width="651.13959" height="458.78751" viewBox="0 0 651.13959 458.78751">
        <defs>
          <linearGradient id="grad">
            <stop offset="5%" stop-color="#0f5cbf"/>
            <stop offset="25%" stop-color="#25d964"/>
            <stop offset="50%" stop-color="#f2b90f"/>
            <stop offset="75%" stop-color="#f24f13"/>
            <stop offset="95%" stop-color="#8080ff"/>
          </linearGradient>
        </defs>
         <path id="wavepath" d="m -248.17361,246.93888 c 24.96004,16.36036 49.9193,32.72021 73.62105,44.88566 23.70175,12.16546 46.14365,20.13548 67.53808,21.91827 21.394432,1.7828 41.73896,-2.62169 55.68722,-9.75315 13.948261,-7.13146 21.498958,-16.98931 26.847468,-29.99346 5.348511,-13.00415 8.494635,-29.15425 8.389798,-50.54871 -0.104836,-21.39446 -3.460633,-48.0311 -20.555114,-66.90869 -17.09448,-18.87758 -47.925876,-29.99366 -69.320482,-53.80018 -21.3946,-23.806515 -33.34963,-60.300818 -23.3865,-85.995374 9.96313,-25.694556 41.843213,-40.58591 77.291019,-49.395388 35.447805,-8.809479 74.459737,-11.536119 110.116538,-12.375089 35.656801,-0.83897 67.957003,0.209738 95.539133,5.768177 27.58214,5.558439 50.4435,15.625828 69.32095,30.518161 18.87746,14.8923329 33.7688,34.607632 51.59759,53.065601 17.82878,18.457969 38.59279,35.656435 67.22366,46.563331 28.63086,10.906891 65.1259,15.521211 101.62137,20.135581"></path>
         <text id="wavetext" text-anchor="middle">
          <textPath class="my-text" href="#wavepath" startOffset="50%">
          <animate attributeName="startOffset" from="-50%" to="150%" begin="0s" dur="100s" repeatCount="indefinite"></animate>
            TEDDYWARNER.ORG • TEDDYWARNER.ORG • TEDDYWARNER.ORG • TEDDYWARNER.ORG • TEDDYWARNER.ORG • TEDDYWARNER.ORG • TEDDYWARNER.ORG • TEDDYWARNER.ORG • TEDDYWARNER.ORG • TEDDYWARNER.ORG • TEDDYWARNER.ORG • TEDDYWARNER.ORG • TEDDYWARNER.ORG • TEDDYWARNER.ORG • TEDDYWARNER.ORG • 
          </textPath>
        </text>
      </svg>
    </div>
    <div class="avatar-container">
      <center>
        <img class="avatar">
      </center>
    </div>
   <div class="content">
    <div class="hole1" style="z-index:-1;">
      <svg class="svgspin1" xmlns="http://www.w3.org/2000/svg" width="109.01334mm" height="108.60135mm" viewBox="0 0 109.01334 108.60135">
        <defs>
          <clipPath id="myClip1">
              <path transform="scale(2.38)" d="M 24.714666,11.296318 C 13.323524,16.938343 5.1073711,23.065641 1.9044893,31.699804 -1.2983925,40.333967 0.51190865,51.474289 7.2957899,60.658898 14.079671,69.843507 25.836173,77.071843 36.337524,84.555813 c 10.50135,7.48397 19.746332,15.222649 29.77514,19.820247 10.028808,4.59759 20.840247,6.05374 27.921117,-1.09297 7.080869,-7.146718 10.430629,-22.895579 12.531879,-35.774947 2.10125,-12.879367 2.95373,-22.887717 0.92183,-31.987606 C 105.45558,26.420648 100.53937,18.230297 93.016916,11.685032 85.494457,5.1397676 75.366562,0.24052821 63.019063,0.36909154 50.671564,0.49765486 36.105807,5.6542924 24.714666,11.296318 Z"></path>
          </clipPath>
        </defs>
      </svg>
    </div>
    <div class="hole2" style="z-index:-1;">
      <svg class="svgspin2" xmlns="http://www.w3.org/2000/svg" width="139.41669mm" height="105.1701mm" viewBox="0 0 139.41669 105.1701">
        <defs>
          <clipPath id="myClip2">
            <path transform="scale(2.86)" d="m 62.849321,26.23857 c 6.914581,7.091318 16.376711,12.516217 29.18273,16.968074 12.806019,4.451858 28.954879,7.930418 37.909179,13.975608 8.95431,6.04519 10.67558,14.469968 8.06447,22.760979 -2.61111,8.29101 -9.33294,15.745074 -16.53733,19.979824 -7.20439,4.234755 -14.74191,5.084795 -24.609565,4.919735 -9.867656,-0.16505 -22.064076,-1.34522 -32.768676,-4.2537 C 53.385529,97.680613 44.174053,93.043994 35.51008,87.412892 26.846108,81.78179 18.730079,75.156459 12.24633,66.532136 5.7625818,57.907812 0.79925286,47.039032 0.34379623,37.56573 -0.1116604,28.092428 3.8848046,19.892876 8.7613652,13.546875 13.637926,7.2008746 19.394051,2.7091682 25.947569,1.0323236 32.501088,-0.64452108 39.851209,0.4935627 45.709704,5.4416481 51.568199,10.389733 55.93474,19.147253 62.849321,26.23857 Z"></path>
          </clipPath>
        </defs>
      </svg>
    </div>
    <div class="introabt">
      <div id="typed-strings">
        <h2>a student.</h2>
        <h2>a maker.</h2>
        <h2>a developer.</h2>
        <h2>an <em>award winning</em> designer.</h2>
        <h2>a graduate of the <a href="https://fabacademy.org/">Fab Academy</a>.</h2>
      </div>
      <h2><b>Hey! I’m Teddy Warner✌️,</b> <span id="typed"></span></h2>
      <h3>I'm a student at the University of Southern California's <a href="https://iovine-young.usc.edu/">Iovine and Young Academy</a> from <em>Charlotte, NC</em> 🇺🇸. As a graduate of the <a href="https://fabacademy.org/">Fab Academy</a>, I have a great interest in contemporary fabrication technologies, and a passion to spread the reaches of digital fabrication.
      </h3> 
      <h3> I utlize plethoras of fabrication processes to produce mixed-media projects equipped with additive and subtractive parts, custom electronics, and software integration. My personal work encompasses my hope to inspire & showcase the vast potential of digital fabrication.
      </h3>
      <h3 style="width:31em;">When I'm not studying, I love to lose myself in the internet or pick up a new book, hit a mountain bike trail with my friends, and foremost, continue work on a project. Regardless of the activity, you'll always find me listing to some music.
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
   </section>
    <section class="featured-projects" data-scroll-section>
    <div class="content">
    <h2>Featured Projects</h2>
      <div class="grid">
      <div class="projparent">
        <a href="https://teddywarner.org/Projects/AdaptableAquaponics/">
          <div class="project shadowbox p1"></div>
        </a>
        <a href="https://teddywarner.org/Projects/VonNiemannProbe/">
          <div class="project p2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-846.979 63.885 447.7 559.7" style="transform: scale(1.1);">
              <defs>
                <clipPath id="funnypath">
                  <path d="m-424.23 623.55h-218.67a24.985 24.985 0 0 1-24.985-24.985v-49.171a34.979 34.979 0 0 0-34.979-34.979h-119.13a24.985 24.985 0 0 1-24.985-24.985v-400.56a24.985 24.985 0 0 1 24.985-24.985h397.77a24.985 24.985 0 0 1 24.985 24.985v509.7a24.985 24.985 0 0 1-24.985 24.985z" />
                </clipPath>
              </defs>
              <g clip-path="url(#funnypath)">
                <image width="504px" x="-846.979" y="63.885" xlink:href="https://teddywarner.org/images/VonNiemannProbe/cover.jpg" />
              </g>
            </svg>
          </div>
        </a>
        <a href="https://teddywarner.org/Projects/ParametricGenerator">
          <div class="project shadowbox p3"></div>
        </a>
        <a href="https://teddywarner.org/Projects/SerialUPDI">
          <div class="project shadowbox p4"></div>
        </a>
        <a href="https://teddywarner.org/Projects/AssistiveAquaponics">
          <div class="project shadowbox p5"></div>
        </a>
      </div>
        <div id="circle1">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="200px" height="200px" viewBox="0 0 300 300" xml:space="preserve" class="textrev">
            <defs>
              <path id="circlePath" d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "/>
            </defs>
            <g>
              <use xlink:href="#circlePath" fill="none"/>
                <text>
                  <textPath fill="var(--md-default-fg-color)" xlink:href="#circlePath">- More Projects - More Projects - More Projects </textPath>
                </text>
            </g>
            <a href="http://teddywarner.com/feed/" class="abtbtn" onmouseenter="leftrevon()" onmouseleave="leftrevoff()">
              <circle fill="none" cx="150" cy="150" r="75"/>
            </a>
          </svg>
        </div>
      <div class="newcheck">
        <svg xmlns="http://www.w3.org/2000/svg" height="100" width="100" viewBox="0 0 24 24"><title>New Project!</title><path d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M13,17H11V15H13V17M13,13H11V7H13V13Z" fill="#26a7de"/></svg>
      </div>
    </div>
    </div>
    </section>    
    <section class="featured-articles" data-scroll-section>
    <div class="content">
      <h2>Featured Articles</h2>
      <div class="article-container">
       <div class="article-scroller">
        <div class="article-set">
          <div class="article">
           <a href="https://hackaday.com/2023/02/01/electronic-shoe-explores-alleged-chess-misbehavior/">
            <img src="https://hackaday.com/wp-content/uploads/2023/01/chess-shoe-main.png?w=800" alt="Article 1">
            <h3>Electronic Shoe Explores Alleged Chess Misbehavior </h3>
           </a> 
          </div>
          <div class="article">
           <a href="https://blog.adafruit.com/2023/02/01/the-von-niemann-probe-aims-to-investigate-the-accusations-of-chess-cheating-wearablewednesday/">
            <img src="https://img.youtube.com/vi/ygy8M-QhbSo/maxresdefault.jpg" alt="Article 2">
            <h3>Adafruit - This Project Aims to Investigate the Accusations ...</h3>
           </a> 
          </div>
          <div class="article">
           <a href="https://www.hackster.io/news/this-chess-cheating-wearable-aims-to-investigate-the-accusations-against-grandmaster-hans-neimann-90b63403b5d0">
            <img src="https://hackster.imgix.net/uploads/attachments/1550803/image_bMAvYsmMhu.png?auto=compress%2Cformat&w=830&h=466.875&fit=min&dpr=2" alt="Article 3">
            <h3>Hackster.io - This Chess-Cheating Wearable Aims to Investigate ...</h3>
           </a> 
          </div>
        </div>
        <div class="article-set">
          <div class="article">
           <a href="https://hackaday.com/2023/01/25/pizza-making-cnc-machine-is-the-only-tool-weve-ever-dreamed-of/">
            <img src="https://hackaday.com/wp-content/uploads/2023/01/Pizza-Making-1-52-screenshot.png?w=800" alt="Article 4">
            <h3>Pizza-Making CNC Machine Is The Only Tool We’ve Ever Dreamed Of</h3>
           </a> 
          </div>
          <div class="article">
           <a href="https://hackaday.com/2022/12/26/turning-a-microchip-mplab-snap-into-a-udpi-avr-programmer/">
            <img src="https://hackaday.com/wp-content/uploads/2022/12/mplab-snap_etn_36_udpi_mod.jpg?w=800" alt="Article 5">
            <h3>Turning A Microchip MPLAB Snap Into A UDPI AVR Programmer</h3>
           </a> 
          </div>
          <div class="article">
           <a href="https://www.hackster.io/news/pizza-pizza-cnc-machine-makes-pizzas-so-you-don-t-have-to-2abc96e2c411">
            <img src="https://hackaday.com/wp-content/uploads/2023/01/Pizza-Making-1-52-screenshot.png?w=800" alt="Article 6">
            <h3>Pizza-Pizza CNC Machine Makes Pizzas So You Don’t Have To</h3>
           </a> 
          </div>
        </div>
        <div class="article-set">
          <div class="article">
           <a href="https://blogs.autodesk.com/learn-lab/2022/07/20/upskilling-for-the-future-with-instructables-student-design-challenges/">
            <img src="https://blogs.autodesk.com/learn-lab/wp-content/uploads/sites/156/Warner_bottle_cap_multiple.jpg" alt="Article 7">
            <h3>Autodesk Learn Lab - Upskilling for the Future </h3>
           </a> 
          </div>
          <div class="article">
           <a href="https://vimeo.com/563923609">
            <img src="https://i.vimeocdn.com/video/1165780963-031763527679aed085ad9c54196879eacf928d680f33bc1048a17fe438cb12b9-d_640" alt="Article 8">
            <h3>Fab Academy 2021 Final Project Presentation</h3>
           </a> 
          </div>
          <div class="article">
           <a href="https://www.chicagotribune.com/suburbs/wilmette/ct-wml-st-francis-underwater-robotics-tl-0107-20160104-story.html">
            <img src="https://www.chicagotribune.com/resizer/9jpk85aAIZ9E7sHCula9d2MS584=/1024x0/filters:format(jpg):quality(70)/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/EI3WDETQOFF7DKTWBWVW5YOMQY.jpg" alt="Article 9">
            <h3>St. Francis students gain skills while creating underwater robot</h3>
           </a> 
          </div>
        </div>
        <div class="article-set">
          <div class="article">
           <a href="https://www.instagram.com/p/CgyCMWkr7Wc/">
            <img src="../images/index/fusionfeature.jpg" alt="Article 4">
            <h3>Fusion 360 Students - Student Spotlight</h3>
           </a> 
          </div>
          <div class="article">
           <a href="https://www.instagram.com/p/CYboI6zrTs8/">
            <img src="../images/index/studentfeature.jpg" alt="Article 5">
            <h3>Charlotte Latin School Fab Lab - Student Spotlight</h3>
           </a> 
          </div>
        </div>
      </div>
     </div>
      <div class="navigation-arrows">
        <button onclick="scrollPrev()"><i class="fas fa-chevron-left"></i></button>
        <button onclick="scrollNext()"><i class="fas fa-chevron-right"></i></button>
      </div>
      <div class="dots-container"></div>
     </div>
    </section>
    <h1></h1>
   </div>
  </main>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/locomotive-scroll@4.1.4/dist/locomotive-scroll.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
  <script src="../assets/js/index.js"></script>
  <script>
    window.onload = function() {
        if (!window.location.hash) {
            window.location = window.location + '#/';
            window.location.reload();
        }
    }
    window.addEventListener('pageshow', function(event) {
        var historyTraversal = event.persisted ||
            (typeof window.performance != 'undefined' &&
                window.performance.navigation.type === 2);
        if (historyTraversal) {
            window.location.reload();
            (function($) {
                preloaderFadeOutInit();
            })(jQuery);
        }
    });
    function preloaderFadeOutInit() {
        $('.preloader').delay(1800).fadeOut(525);
        $('.main-content').hide().delay(2500).fadeIn(160);
        $('.preloaderbg').delay(2500).fadeOut(160);
        $('body').attr('id', '');
    }
    jQuery(window).on('load', function() {
        (function($) {
            preloaderFadeOutInit();
        })(jQuery);
    });
  </script>
</body>
</html>
