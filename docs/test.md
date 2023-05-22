---
title: TeddyWarner.org
template: index.html
---

<link rel="stylesheet" href="../assets/css/test.css">

<script src="https://kit.fontawesome.com/79ff35ecec.js" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
<script nomodule src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.6.0/polyfill.min.js" crossorigin="anonymous"></script>
<script nomodule src="https://polyfill.io/v3/polyfill.min.js?features=Object.assign%2CElement.prototype.append%2CNodeList.prototype.forEach%2CCustomEvent%2Csmoothscroll" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/locomotive-scroll@4.1.4/dist/locomotive-scroll.min.js"></script>

<script src="../assets/js/test.js"></script> 

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
     <section class="avatarpar" data-scroll-section>
        <div data-scroll data-scroll-speed="-3.5">
           <center>
            <video width="48em" autoplay loop muted playsinline>
              <source class="avatar" src="../images/index/avatardark.mov" type="video/mov" />
            </video>~
           </center>
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
        <section class="funnyquote" data-scroll-section>
            <div data-scroll data-scroll-speed="-3.5">
            <center>
                <img class="quote">
            </center>
            </div>
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