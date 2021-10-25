---
hide:
  - toc
---

<style>
        /* Application header should be static for the landing page */
    .md-header {
      position: initial;
    }

.wrap
{
  margin: 5px auto 0 auto;
  width:100%;
  display:flex;
  align-items:space-around;
}
.tile
{
  width:31.5%;
  height:315px;
  margin:8px;
  background-color:#3a52e0;
  display:inline-block;
  background-size:cover;
  position:relative;
  cursor:pointer;
  transition: all 0.4s ease-out;
  overflow:hidden;
  color:white;
  
}
.tile img
{
  object-fit:cover;
  position:absolute;
  top:0;
  left:0;
  z-index:0;
  transition: all 0.4s ease-out;
}
.tile .text
{
/*   z-index:99; */
  position:absolute;
  padding:30px;
  height: calc(100% - 60px)
}
.tile h1
{
  color: #333333;
  font-weight:350;
  margin:0;
  text-shadow: 2px 2px 10px rgba(0,0,0,0.3);
}
.tile h2
{
  font-weight:100;
  margin:20px 0 0 0;
  font-style:italic;
   transform: translateX(200px);
}
.tile p
{
  font-weight:300;
  margin:20px 0 0 0;
  line-height: 25px;
/*   opacity:0; */
  transform: translateX(-200px);
  transition-delay: 0.2s;
}
.animate-text
{
  opacity:0;
  transition: all 0.6s ease-in-out;
}
.tile:hover
{
  transform:scale(1.05);
}
.tile:hover img
{
  opacity: 0.2;
}
.tile:hover .animate-text
{
  transform:translateX(0);
  opacity:1;
}

.tile:hover span
{
  opacity:1;
  transform:translateY(0px);
}

</style>

   <center>
    <h1>Highlights</h1>
  </center>


<div class="wrap">

 <div class="tile"> 
  <a href="https://teddywarner.org/Projects/LithophaneExperiments/">
  <img src='../images/LithophaneExperiments/friendslithophane.jpg'/>
  <div class="text">
  <center>
  <h1>Lithophane Expements</h1>
  </center>
  <p class="animate-text" style="color:white;">A Lithophane is a piece of art made out of a thin translucent material designed to show an image in a “grisaille” color format when held up to light, an art medium I use to test slicer changes with.</p>
  </div>
  </a>
 </div>

<div class="tile"> 
  <a href="https://teddywarner.org/Projects/AssistiveAquaponics/">
  <img src='../images/AssistiveAquaponics/highlightstank.jpg'/>
  <div class="text">
  <center>
  <h1>Assistive Aquaponics Fish Tank</h1>
  </center>
  <p class="animate-text" style="color:white;">A Monitored Aquaponics Ecosystem, Expanding the Accessibility of Successful & Thriving Aquaponics Ecosystems.</p>
  </div>
  </a>
 </div>

<div class="tile">
  <a href="https://teddywarner.org/Projects/ParametricGenerator/"> 
  <img src='../images/ParametricGenerator/beautyshot.jpg'/>
  <div class="text">
  <center>
  <h1>Parametric Bottle Cap Generator</h1>
  </center>
  <p class="animate-text" style="color:white;"> A Parametric Cap Generator - Using metric Thread standards to generate a cap for any existing threaded connector </p>
  </div>
  </a>
 </div>

</div>
</div>

<!--- 

 <div class="tile"> 
  <a href="PAGEURL">
  <img src='IMAGESOURCE'/>
  <div class="text">
  <center>
  <h1>TITLE</h1>
  </center>
  <p class="animate-text" style="color:white;">TEXT</p>
  </div>
  </a>
 </div>

-->
