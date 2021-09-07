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
  width: auto;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  padding: 1.4rem 2.2rem;
  border: 3px solid black;
  border-radius: 5px;
  background: white;
  box-shadow: 8px 8px 0 rgba(0, 0, 0, 0.2);
}
.message {
  font-size:2em;
  margin: 0px 0px 4px;
}
.btn {
  color:inherit;
    font-family:inherit;
  font-size: inherit;
  background-image: linear-gradient(80deg, #00C0FF 0%, #FFCF00 49%, #FC4F4F 100%);
  padding: 0.3rem 3.4rem;
  border: 3px solid black;
  margin-right: 2.6rem;
  box-shadow: 0 0 0 black;
  transition: all 0.2s;
}

.btn:last-child {
  margin: 0;
}

.btn:hover {
  box-shadow: 0.4rem 0.4rem 0 black;
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

</style>

<h1></h1>

<div class="modal">
  <p class="message" style="color:black;">Welcome to My Site!</p>
   <img src="../images/About/profile.jpg" alt="Profile" > 
  <div class="options">
    <a href="https://teddywarner.org/About-Me/about/">
     <button class="btn"  style="color:black;">About Me</button>
     </a>
  </div>
</div>