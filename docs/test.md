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
<script src="../assets/js/gradpath.js"></script> 



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
            <img width="550px" src="../images/index/avatardark.svg">
           </center>
           <center>
            <svg class="svgwave" xmlns="http://www.w3.org/2000/svg" width="301" height="21" viewBox="0 0 301 21">
              <defs>
                <linearGradient id="grad">
                  <stop offset="5%" stop-color="#0f5cbf"/>
                  <stop offset="25%" stop-color="#25d964"/>
                  <stop offset="50%" stop-color="#f2b90f"/>
                  <stop offset="75%" stop-color="#f24f13"/>
                  <stop offset="95%" stop-color="#8080ff"/>
                </linearGradient>
              </defs>
              <path id="wavepath" d="M0,.5c30.0978,0,30.0978,20,60.1956,20S90.2948.5,120.394.5s30.1,20,60.2,20c30.1015,0,30.1015-20,60.203-20s30.1014,20,60.2029,20"></path>
              <text id="wavetext" text-anchor="middle">
                <textPath class="my-text" href="#wavepath" startOffset="50%">
                <animate attributeName="startOffset" from="-50%" to="150%" begin="0s" dur="100s" repeatCount="indefinite"></animate>
                TEDDYWARNER.ORG • TEDDYWARNER.ORG • TEDDYWARNER.ORG • TEDDYWARNER.ORG • TEDDYWARNER.ORG • TEDDYWARNER.ORG • TEDDYWARNER.ORG • TEDDYWARNER.ORG • 
                </textPath>
              </text>
            </svg>
           </center>
        </div>
     </section>
        <section class="introabt" data-scroll-section>
          <div class="o-layout_item">
            <div class="c-speed-block" data-scroll data-scroll-speed="-3.5">

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