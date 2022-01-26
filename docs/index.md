<script src="https://kit.fontawesome.com/79ff35ecec.js" crossorigin="anonymous"></script>

<style>

body {
  color:black;
  background-color: #424242;
  background-image: linear-gradient(
      45deg,
      #2b2b2b 25%,
      transparent 25%,
      transparent 75%,
      #2b2b2b 75%,
      #2b2b2b
    ),
    linear-gradient(
      -45deg,
      #2b2b2b 25%,
      transparent 25%,
      transparent 75%,
      #2b2b2b 75%,
      #2b2b2b
    );
  background-size: 60px 60px;
  background-position: 0 0;
  animation: slide 5s infinite linear;
}

@keyframes slide {
  from {
    background-position: 0 0;
  }

  to {
    background-position: -120px 60px;
  }
}
        /* Application header should be static for the landing page */
    .md-header {
      position: initial;
    }

    /* Remove spacing, as we cannot hide it completely */
    .md-main__inner {
      margin: 0;
    }

    /* Hide table of contents */
    @media screen and (min-width: 60em) {
      .md-sidebar--secondary {
        display: none;
      }
    }

    /* Hide navigation */
    @media screen and (min-width: 76.25em) {
      .md-sidebar--primary {
        display: none;
      }
    }

.modal {
  position: absolute;
  left: 50%;
  top: 55%;
  transform: translate(-50%, -50%);
  width: 370px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  padding: 1.4rem 1rem;
  border: 3px solid black;
  border-radius: 5px;
  background: white;
  box-shadow: 8px 8px 0 rgba(0, 0, 0, 0.2);
}
.message {
  font-size:2em;
  margin: 0px 0px 0px;
  position: relative;
  top: -8px;
}
.btn {
  color:inherit;
    font-family:inherit;
  font-size: inherit;
  background-image: linear-gradient(130deg, #00C0FF 0%, #FFCF00 49%, #FC4F4F 100%);
  padding: 0.3rem 3.4rem;
  border: 3px solid black;
  border-radius: 3px;
  margin-right: 2.6rem;
  box-shadow: 0 0 0 black;
  transition: all 0.2s;
}

.btn:last-child {
  margin: 0;
}

.btn:hover {
  box-shadow: 0.4rem 0.4rem 0 #141414;
  transform: translate(-0.4rem, -0.4rem);
}

.btn:active {
  box-shadow: 0 0 0 black;
  transform: translate(0, 0);
}

.options {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 0.85rem;
}

.container {
  position: relative;
}

.container img {
  width: auto;
  height: auto;
  border-radius: 3px;
  box-shadow: 0 6px 10px 6px rgba(0, 0, 0, 0.1);
}

.container .info {
  position: absolute;
  top: 6.5%;
  left: 6.5%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  background-color: white;
  color: white;
  font-size: 19px;
  padding: 0px 4px;
  border-radius: 10%;
  cursor: pointer;
}

.container .info:hover {
  background-color: #5466ce;
}

.container .tooltip{
      position: absolute;
      display: inline;
      top: 6.5%;
      left: 6.5%;
      transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
    }
.container .tooltip:after{
      display: block;
      visibility: hidden;
      position: absolute;
      bottom: 0;
      left: 20%;
      opacity: 0;
      content: attr(tool-tips); /* might also use attr(title) */
      height: auto;
      min-width: 250px;
      padding: 5px 8px;
      z-index: 999;
      color: #fff;
      text-decoration: none;
      text-align: center;
      background: rgba(0,0,0,0.85);
      -webkit-border-radius: 5px;
      -moz-border-radius: 5px;
      border-radius: 5px;
    }
.container .tooltip:before {
      position: absolute;
      visibility: hidden;
      width: 0;
      height: 0;
      left: 50%;
      bottom: 0px;
      opacity: 0;
      content: "";
      border-style: solid;
      border-width: 6px 6px 0 6px;
      border-color: rgba(0,0,0,0.85) transparent transparent transparent;
    }
.container .tooltip:hover:after{ visibility: visible; opacity: 1; bottom: 20px; }
.container .tooltip:hover:before{ visibility: visible; opacity: 1; bottom: 14px; }

a.tooltip.left:after { left: auto; right: 100%; bottom: -45%; }
a.tooltip.left:hover:after { right: 110%; bottom: -45%; }
a.tooltip.left:before {
  border-width: 5px 0 5px 10px;
  border-color: transparent transparent transparent rgba(0,0,0,0.85);
  left: auto;
  right: 90%;
  bottom: 2%;
}
a.tooltip.left:hover:before { right: 100%; bottom: 2%; }

</style>

<h1></h1>

<div class="modal">
  <p class="message" style="color:black;">Welcome to My Site!</p>
  <div class="container">
   <img src="../images/About/profile.jpg" alt="Profile" > 
       <a href="https://teddywarner.org/Projects/LithophaneExperiments/" class="tooltip left animationTips"  tool-tips="This Picture is a 3D-Printed Lithophane - Click to See More!">
         <button class="info" style="color:black;"><span>&#9432;</span></button>
       </a>
  </div> 
  <div class="options">
    <a href="https://teddywarner.org/About-Me/about/">
      <button class="btn"  style="color:black;">About Me</button>
    </a>
  </div>
</div>