<style>
        /* Application header should be static for the landing page */
    .md-header {
      position: initial;
    }

    /* Remove spacing, as we cannot hide it completely */
    .md-main__inner {
      margin: 0;
    }

    /* Hide main content for now */
    .md-content {
      display: none;
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

body {
  background-image: url(./images/wallpaper.jpg); 
  background-repeat: no-repeat; 
    background-attachment: fixed;
  background-size: cover;
}
  </style>