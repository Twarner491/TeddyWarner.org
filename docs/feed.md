---
hide:
  - navigation
  - toc
---

<link href="https://fonts.googleapis.com/css2?family=Niconne&display=swap" rel="stylesheet"> 

<style>

.blog-card {
  display: flex;
  flex-direction: column;
  margin: 1rem auto;
  box-shadow: 0 5px 9px 2px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.6%;
  background: #fff;
  line-height: 1.4;
  border-radius: 5px;
  overflow: hidden;
  z-index: 0;
}

.blog-card:hover .photo {
  transform: scale(1.08) rotate(1deg);
}
.blog-card .meta {
  position: relative;
  z-index: 0;
  height: 200px;
}
.blog-card .photo {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-size: cover;
  background-position: center;
  transition: transform 0.2s;
}

.blog-card .details a {
  -webkit-text-decoration: dotted underline;
          text-decoration: dotted underline;
}

.blog-card .details .tags li {
  margin-right: 2px;
}
.blog-card .details .tags li:first-child {
  margin-left: -4px;
}
.blog-card .description {
  padding: 1rem;
  background: #fff;
  position: relative;
  z-index: 1;
}

.blog-card .description h1 {
  line-height: 1;
  margin: 0;
  color: #525252;
  font-size: 1.7rem;
}
.blog-card .description h2 {
  font-size: 1rem;
  font-weight: 300;
  color: #a2a2a2;
  margin-top: 5px;
}
.blog-card .description .read-more {
  text-align: right;
}
.blog-card .description .read-more a {
  color: #5466ce;
  display: inline-block;
  position: relative;
}
.blog-card .description .read-more a:after {
  font-weight: 1000;
  content:  "\1F826";
  margin-left: -10px;
  opacity: 0;
  vertical-align: middle;
  transition: margin 0.3s, opacity 0.3s;
}
.blog-card .description .read-more a:hover:after {
  margin-left: 5px;
  opacity: 1;
}
.blog-card p {
  position: relative;
  color: #4f4f4f;
  margin: 1rem 0 0;
}
.blog-card p:first-of-type {
  margin-top: 1.25rem;
}
.blog-card p:first-of-type:before {
  content: "";
  position: absolute;
  height: 5px;
  background: linear-gradient(140deg, #00C0FF 0%, #FFCF00 49%, #FC4F4F 100%);
  width: 55px;
  top: -0.75rem;
  border-radius: 3px;
}
.blog-card:hover .details {
  left: 0%;
}
@media (min-width: 640px) {
  .blog-card {
    flex-direction: row;
    max-width: 700px;
  }
  .blog-card .meta {
    flex-basis: 40%;
    height: auto;
  }
  .blog-card .description {
    flex-basis: 60%;
  }
  .blog-card .description:before {
    transform: skewX(-3deg);
    content: "";
    background: #fff;
    width: 30px;
    position: absolute;
    left: -10px;
    top: 0;
    bottom: 0;
    z-index: -1;
  }
  .blog-card.alt {
    flex-direction: row-reverse;
  }
  .blog-card.alt .description:before {
    left: inherit;
    right: -10px;
    transform: skew(3deg);
  }
  .blog-card.alt .details {
    padding-left: 25px;
  }
}

.t{
      font-size: calc(70px + 16 * ((100vw - 600px) / 600));
      height:10vh;
      line-height:13vh;
      position: relative;
      top: -40px;
	    color: #fcedd8;
	   	font-family: 'Niconne', cursive;
	    font-weight: 700;
      text-shadow: 5px 4px 0px #eb452b, 
                  10px 7.5px 0px #efa032, 
                  15px 11px 0px #46b59b, 
                  20px 14.5px 0px #017e7f, 
                  25px 18px 0px #052939, 
                  30px 21.5px 0px #c11a2b;
}

</style>

<center>
<div class="t">Project Feed</div>
</center>

  <div class="blog-card alt">
    <div class="meta">
      <div class="photo" style="background-image: url('../images/SerialUPDI/ftdi2updisolderedtop.jpg')"></div>
    </div>
    <div class="description">
      <h1>UPDI Serial Programming</h1>
      <h2>- Junior Year, 2021 -</h2>
      <p>Programming via the megaTinyCore library, enabling your IDE for serial UPDI programming via a portable python implementation and temporary hardware, or one of two designated serial programmer options. Each UPDI serial programmer enables switching between serial programming and monitoring without any rewiring.</p>
      <p class="read-more">
        <a href="../Projects/SerialUPDI">Read More</a>
      </p>
    </div>
  </div>

  <div class="blog-card">
    <div class="meta">
      <div class="photo" style="background-image: url('../images/ParametricGenerator/beautyshot1.jpg')"></div>
    </div>
    <div class="description">
      <h1>Bottle Cap Generator</h1>
      <h2>- Junior Year, 2021 -</h2>
      <p>Lost a lid or just want a more functional cap? Generate and print your own, compatible with any existing threads! Uses metric thread standards via equasions in fusions parameters, allowing for the generation of a threaded cap with only 3 required measurements.</p>
      <p class="read-more">
        <a href="../Projects/ParametricGenerator">Read More</a>
      </p>
    </div>
  </div>

  <div class="blog-card alt">
    <div class="meta">
      <div class="photo" style="background-image: url('../images/LithophaneExperiments/friendslithophane.jpg')"></div>
    </div>
    <div class="description">
      <h1>Lithophane Experiments</h1>
      <h2>- Junior Year, 2021 -</h2>
      <p>A Lithophane is a piece of art made out of a thin translucent material designed to show an image in a “grisaille” color format when held up to light, an art medium I use to test slicer changes with.</p>
      <p class="read-more">
        <a href="../Projects/LithophaneExperiments">Read More</a>
      </p>
    </div>
  </div>

  <div class="blog-card">
    <div class="meta">
      <div class="photo" style="background-image: url('../images/AssistiveAquaponics/tankhighlight.jpg')"></div>
    </div>
    <div class="description">
      <h1>Assistive Aquaponics Tank</h1>
      <h2>- Sophmore Year, 2021 -</h2>
      <p>A monitored aquaponics ecosystem, expanding the accessibility of successful & thriving aquaponics ecosystems. - my Fab Academy final project.</p>
      <p class="read-more">
        <a href="../Projects/AssistiveAquaponics">Read More</a>
      </p>
    </div>
  </div>

  <div class="blog-card alt">
    <div class="meta">
      <div class="photo" style="background-image: url('../images/KlipperEnder3/directdrive.jpg')"></div>
    </div>
    <div class="description">
      <h1>Klipper Enabled Ender 3</h1>
      <h2>- Sophmore Year, 2021 -</h2>
      <p>A modified Ender 3 with printer electronics rehoused, carriage reworked to direct drive, motherboard & screen swapped, and Klipper firmware installed.</p>
      <p class="read-more">
        <a href="../Projects/KlipperEnder3">Read More</a>
      </p>
    </div>
  </div>

  <div class="blog-card">
    <div class="meta">
      <div class="photo" style="background-image: url('../images/Octoprint/personaloctoprint.jpg')"></div>
    </div>
    <div class="description">
      <h1>Octoprint Setup</h1>
      <h2>- Sophmore Year, 2021 -</h2>
      <p>Complete Octoprint Setup Documentation, including hardware setup, software installation, machine mounting, and a list of great plugins to expand Octoprint's capabilities.</p>
      <p class="read-more">
        <a href="../Projects/Octoprint">Read More</a>
      </p>
    </div>
  </div>

  <div class="blog-card alt">
    <div class="meta">
      <div class="photo" style="background-image: url('../images/CornerDesk/finishedwoodassembly.jpg')"></div>
    </div>
    <div class="description">
      <h1>Corner Desk</h1>
      <h2>- Freshman Year, 2020 -</h2>
      <p>A desk for the corner of my bedroom with integrated cable management and laptop mounting, allowing for super-clean cable routing.</p>
      <p class="read-more">
        <a href="../Projects/CornerDesk">Read More</a>
      </p>
    </div>
  </div>

  <div class="blog-card">
    <div class="meta">
      <div class="photo" style="background-image: url('../images/PortfolioSite/highlightcode.jpg')"></div>
    </div>
    <div class="description">
      <h1>Project Portfolio Site</h1>
      <h2>- Sophmore Year, 2021 -</h2>
      <p>The behind the scenes of the site you are on right now :) - Static site generation with Mkdocs, and hosting via GitHub Pages.</p>
      <p class="read-more">
        <a href="../Projects/ProjectPortfolioSite">Read More</a>
      </p>
    </div>
  </div>

<!--- Post Template

  <div class="blog-card">
    <div class="meta">
      <div class="photo" style="background-image: url('../images/')"></div>
    </div>
    <div class="description">
      <h1>Title</h1>
      <h2>- Date -</h2>
      <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
      <p class="read-more">
        <a href="../Projects/">Read More</a>
      </p>
    </div>
  </div>

  <div class="blog-card alt">
    <div class="meta">
      <div class="photo" style="background-image: url('../images/')"></div>
    </div>
    <div class="description">
      <h1>Title</h1>
      <h2>- Date -</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
      <p class="read-more">
        <a href="../Projects/">Read More</a>
      </p>
    </div>
  </div>

-->