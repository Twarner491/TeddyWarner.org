---
hide:
  - navigation
  - toc
---

<script src="https://kit.fontawesome.com/79ff35ecec.js" crossorigin="anonymous"></script>

<style>

[data-md-color-scheme="default"] {
--cover-color: white;
}

[data-md-color-scheme="slate"] {
--cover-color: #2e303d;
}

.post {
  display: flex;
  flex-direction: column;
  margin: 1rem auto;
  box-shadow: 0 5px 9px 2px rgba(0, 0, 0, 0.4);
  margin-bottom: 1.6%;
  background: inherit;
  line-height: 1.4;
  border-radius: 5px;
  overflow: hidden;
  z-index: 0;
}

.post:hover .photo {
  transform: scale(1.08) rotate(1deg);
}

.post .meta {
  position: relative;
  z-index: 0;
  height: 200px;
}

.post .photo {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-size: cover;
  background-position: center;
  transition: transform 0.2s;
}

.post .details a {
  -webkit-text-decoration: dotted underline;
          text-decoration: dotted underline;
}

.post .details .tags li {
  margin-right: 2px;
}

.post .details .tags li:first-child {
  margin-left: -4px;
}

.post .description {
  padding: 1rem;
  background: inherit;
  position: relative;
  z-index: 1;
}

.post .description h1 {
  line-height: 1;
  margin: 0;
  color: inherit;
  font-size: 1.7rem;
}

.post .description h2 {
  font-size: 1rem;
  font-weight: 300;
  color: inherit;
  margin-top: 5px;
}

.post .description .read-more {
  float: right;
  text-align: right;
  margin-top: -1.25em;
  height: 1.45em;
  width: 6.5em;
}

.post .description .con {
  position: relative;
  margin-top: 1em;
  height: 1.45em;
  width: 9em;
}

.post .description .con .share {
  float:left;
  font-size: 1.1em;
}

.post .description .con .share a {
  color: inherit;
}

.post .description .read-more a {
  color: #5466ce;
  display: inline-block;
  position: relative;
}

.post .description .read-more a:after {
  font-weight: 1000;
  content:  "-->";
  margin-left: -10px;
  opacity: 0;
  vertical-align: middle;
  transition: margin 0.3s, opacity 0.3s;
}

.post .description .read-more a:hover:after {
  margin-left: 5px;
  opacity: 1;
}

.twitter {
  padding-left: 0.2em;
  padding-right: 0.2em;
}

.con .share a.twitter:hover {
  color: #00acee;
}

.fb {
  padding-right: 0.2em;
}

.con .share a.fb:hover {
  color: #3b5998;
}

.pin {
  padding-left: 0.2em;
  padding-right: 0.2em;
}

.con .share a.pin:hover {
  color: 	#E60023;
}

.ln {
  padding-left: 0.2em;
  padding-right: 0.2em;
}

.con .share a.ln:hover {
  color: #0e76a8;
}

.email {
  padding-left: 0.2em;
}

.con .share a.email:hover {
  color: #5466ce;
}

.post p {
  position: relative;
  color: inherit;
  margin: 1rem 0 0;
}

.post p:first-of-type {
  margin-top: 1.25rem;
}

.post p:first-of-type:before {
  content: "";
  position: absolute;
  height: 4.5px;
  background-color: #5466ce;
  width: 55px;
  top: -0.75rem;
  border-radius: 5px;
}

.post:hover .details {
  left: 0%;
}

.time {
  position: relative;
  float:right;
  font-size: 0.95em;
  margin-top: -2.41em;
  margin-right: 0.5em;
  color: inherit;
}

.title {
  margin-top: -1.3em;
  font-size: 3.5em;
  font-weight: 500;
  font-style: oblique;
}

@media (min-width: 640px) {
  .post {
    flex-direction: row;
    max-width: 700px;
  }

  .post .meta {
    flex-basis: 40%;
    height: auto;
  }

  .post .description {
    flex-basis: 60%;
  }

  .post .description:before {
    transform: skewX(-3deg);
    background: var(--cover-color); 
    content: "";
    width: 40px;
    position: absolute;
    left: -10px;
    top: 0;
    bottom: 0;
    z-index: -1;
  }

  .post.alt {
    flex-direction: row-reverse;
  }

  .post.alt .description:before {
    left: inherit;
    right: -10px;
    transform: skew(3deg);
  }

  .post.alt .details {
    padding-left: 25px;
  }

}

</style>

 <center>
  <div class="title">Project Feed</div>
 </center >

  <div class="post">
    <div class="meta">
      <div class="photo" style="background-image: url('../images/8-bitComputer/clockmodule.jpg')"></div>
    </div>
    <div class="description">
      <h1>8-Bit Computer</h1> 
      <h2>- Winter, 2021 -</h2> <span class="time"><i class="far fa-clock"></i> X-X min</span>
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
       <p class="read-more">
        <a href="../Projects/8-bit">Read More</a>
       </p> 
    </div>
  </div>


  <div class="post alt">
    <div class="meta">
      <div class="photo" style="background-image: url('../images/SerialUPDI/ftdi2updisolderedtop.jpg')"></div>
    </div>
    <div class="description">
      <h1>UPDI Serial Programming</h1>
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
      <p class="read-more">
        <a href="../Projects/SerialUPDI">Read More</a>
      </p>
    </div>
  </div>

  <div class="post">
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
      <p class="read-more">
        <a href="../Projects/ParametricGenerator">Read More</a>
      </p>
    </div>
  </div>

  <div class="post alt">
    <div class="meta">
      <div class="photo" style="background-image: url('../images/LithophaneExperiments/friendslithophane.jpg')"></div>
    </div>
    <div class="description">
      <h1>Lithophane Experiments</h1>
      <h2>- 2019-Present -</h2> <span class="time"><i class="far fa-clock"></i> 1-2 min</span>
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
      <p class="read-more">
        <a href="../Projects/LithophaneExperiments">Read More</a>
      </p>
    </div>
  </div>

  <div class="post">
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
      <p class="read-more">
        <a href="../Projects/Octoprint">Read More</a>
      </p>
    </div>
  </div>

  <div class="post alt">
    <div class="meta">
      <div class="photo" style="background-image: url('../images/AssistiveAquaponics/tankhighlight.jpg')"></div>
    </div>
    <div class="description">
      <h1>Assistive Aquaponics Tank</h1>
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
      <p class="read-more">
        <a href="../Projects/AssistiveAquaponics">Read More</a>
      </p>
    </div>
  </div>

  <div class="post">
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
      <p class="read-more">
        <a href="../Projects/KlipperEnder3">Read More</a>
      </p>
    </div>
  </div>

  <div class="post alt">
    <div class="meta">
      <div class="photo" style="background-image: url('../images/PortfolioSite/highlightcode.jpg')"></div>
    </div>
    <div class="description">
      <h1>Project Portfolio Site</h1>
      <h2>- Summer, 2021 -</h2> <span class="time"><i class="far fa-clock"></i> 6-7 min</span>
      <p>The behind the scenes of the site you are on right now :) - Static site generation with Mkdocs, and hosting via GitHub Pages.</p>
      <div class="con">
       <span class="share" style=" color: inherit;">
        <a class="fb" title="Share on Facebook" href="https://www.facebook.com/sharer/sharer.php?u=https://teddywarner.org/Projects/ProjectPortfolioSite/"><i class="fab fa-facebook-square"></i></a>
        <a class="twitter" title="Share on Twitter" href="https://twitter.com/intent/tweet?url=https://teddywarner.org/Projects/ProjectPortfolioSite/&text=Check%20Out%20the%20Behind%20the%20Scenes%20to%20teddywarner.org%20on"><i class="fab fa-twitter"></i></a>
        <a class="pin" title="Share on Pinterest" href="https://pinterest.com/pin/create/button/?url=https://teddywarner.org/Projects/ProjectPortfolioSite/&media=&description=Check%20Out%20the%20Behind%20the%20Scenes%20to%20teddywarner.org%20on%20https://teddywarner.org/Projects/ProjectPortfolioSite/"><i class="fab fa-pinterest"></i></a>
        <a class="ln" title="Share on LinkedIn" href="https://www.linkedin.com/shareArticle?mini=true&url=https://teddywarner.org/Projects/ProjectPortfolioSite/"><i class="fab fa-linkedin"></i></a>
        <a class="email" title="Share via Email" href="mailto:info@example.com?&subject=&cc=&bcc=&body=Check%20Out%20the%20Behind%20the%20Scenes%20to%20teddywarner.org%20on%20https://teddywarner.org/Projects/ProjectPortfolioSite/"><i class="fas fa-paper-plane"></i></a>
       </span>
      </div>
      <p class="read-more">
        <a href="../Projects/ProjectPortfolioSite">Read More</a>
      </p>
    </div>
  </div>

  <div class="post">
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
      <p class="read-more">
        <a href="../Projects/CornerDesk">Read More</a>
      </p>
    </div>
  </div>

<!--- Post Template

  <div class="post">
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
      <p class="read-more">
        <a href="../Projects/">Read More</a>
      </p>
    </div>
  </div>

  <div class="post alt">
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
      <p class="read-more">
        <a href="../Projects/">Read More</a>
      </p>
    </div>
  </div>

-->