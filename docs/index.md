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
  <link rel="stylesheet" href="assets/css/index.css">
</head>

<nav class="main-navigation">
    <ul>
      <li><a class="home" href="http://teddywarner.com"><span class="navnum">01</span> Home</a></li>
      <li><a class="proj" href="http://teddywarner.com/time/"><span class="navnum">02</span> Timeline</a></li>
      <li><a class="mach" href="http://teddywarner.com/proj/"><span class="navnum">03</span> Projects</a></li>
      <li><a class="fab" href="http://teddywarner.com/writ/" style="font-family: 'Fira Sans';"><span class="navnum">04</span> Writing</a></li>
    </ul>
</nav>

<body>
  <main data-scroll-container>
  <section>
  <div class="content">
     <div class="introabt">
      <h2>Hey! I’m Teddy, <span id="typed"></span></h2>
      <h3>I use digital fabrication techniques to</br> accelerate human centric design.</h3> 
    </section>
    <section class="featured-projects">
    <div class="projcontent">
      <div class="grid">
      <div class="projparent">
        <a href="http://teddywarner.com/Projects/AdaptableAquaponics/">
          <div class="project shadowbox p1">
          </div>
        </a>
        <a href="http://teddywarner.com/Projects/VonNiemannProbe/">
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
        <a href="http://teddywarner.com/Projects/ParametricGenerator">
          <div class="project shadowbox p3">
           </div>
        </a>
        <a href="http://teddywarner.com/Projects/SerialUPDI">
          <div class="project shadowbox p4">
           </div>
        </a>
        <a href="http://teddywarner.com/Projects/AssistiveAquaponics">
          <div class="project shadowbox p5">
           </div>
        </a>
      </div>
        <div class="circle1">
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
    </div>
    </div>
    </section>
   <section style="height:1em;">
    <h1></h1>
   </section>
  </div>
  </main>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js"></script>
  <script>
    var typed = new Typed('#typed', {
      strings: [
        'a maker.',
        'an engineer.',
        'a designer.',
        'a student.',
      ],
      stringsElement: null,
      startDelay: 700,
      typeSpeed: 80,
      backSpeed: 80,
      backDelay: 1200,
      loop: true
    });
  </script>
  <script src="../assets/js/index.js"></script>
</body>
</html>
