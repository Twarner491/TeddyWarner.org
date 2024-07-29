---
hide:
  - navigation
  - toc
  - feedback
template: index.html
search:
  exclude: true
---

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://kit.fontawesome.com/79ff35ecec.js" crossorigin="anonymous"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,200..900;1,200..900&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,200..900;1,200..900&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../assets/css/proj.css">
</head>

  <nav class="main-navigation">
    <ul>
      <li><a class="home" href="http://teddywarner.com"><span class="navnum">01</span> Home</a></li>
      <li><a class="proj" href="http://teddywarner.com/proj/"><span class="navnum">02</span> Projects</a></li>
      <li><a class="writ" href="http://teddywarner.com/writ/"><span class="navnum">03</span> Writing</a></li>
    </ul>
  </nav>

<body>
  <main data-scroll-container>
  <div class="content-container">
    <section class="intro-section">
      <div class="content1">
        <div class="introabt">
          <h2>My Writings</h2>
          <h3>A conglomerate of thoughts and essays.</h3>
        </div>
      </div>
    </section>
    <section class="writing">
      <div class="content6" id="content6">
        <div class="writparent">
          <a target=”_blank” href="http://teddywarner.com/writings/a-mutual-meaning">
            <div class="imgparent"><img class="writeimg" src="../assets/images/index/orange.png"></div>
            <p class="projtitle">A Mutual Meaning</p>
            <p class="writeyear">2023</p>
            <span class="mobileyear">
            <p class="readtime">7-11 mins</p>
            </span>
            <p class="projdescription">Discovering Eastern philosophy.</p>
          </a>
        </div>
        <hr/>
        <div class="writparent">
          <a href="http://teddywarner.com/writings/chiastic-change">
            <div class="imgparent"><img class="writeimg" src="../assets/images/index/greek.png"></div>
            <p class="projtitle">Chiastic Change</p>
            <p class="writeyear">2023</p>
            <span class="mobileyear">
            <p class="readtime">5-8 mins</p>
            </span>
            <p class="projdescription">Sing, goddess, the change of Achilleus.</p>
          </a>
        </div>
        <hr/>
        <div class="writparent">
          <a href="https://teddywarner.org/Projects/MillingWorflow/">
            <div class="imgparent"><img class="writeimg" src="../assets/images/index/snake.png"></div>
            <p class="projtitle">Torpediniformes</p>
            <p class="writeyear">2022</p>
            <span class="mobileyear">
            <p class="readtime">3-5 mins</p>
            </span>
            <p class="projdescription">An analysis of The Meno.</p>
          </a>
        </div>
      </div>
    </section>
    <section class="footer">
      <div class="content8">
        <div class="socialpar">
          <a target=”_blank” href="https://github.com/Twarner491">
            <i class="fa-brands fa-github"></i>
          </a>
        </div>
        <div class="socialpar">
          <a target=”_blank” href="https://x.com/WarnerTeddy">
            <i class="fa-brands fa-twitter"></i>
          </a>
        </div>
        <div class="socialpar">
          <a target=”_blank” href="mailto:tawarner@usc.edu">
            <i class="fa-solid fa-paper-plane"></i>
          </a>
        </div>
        <a target=”_blank” href="https://github.com/Twarner491/TeddyWarner.org/blob/main/LICENSE">
          <p class="copyright">Copyright © 2021 Teddy Warner</p>
        </a>
    </section>
    <h1></h1>
  </div>
  </main>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/locomotive-scroll@4.1.4/dist/locomotive-scroll.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
  <script>
    document.addEventListener("DOMContentLoaded", function() {
      var content6 = document.getElementById('content6');
      var observer = new ResizeObserver(entries => {
        for (let entry of entries) {
          var content6Height = entry.contentRect.height;
          document.documentElement.style.setProperty('--content6-height', content6Height + 'px');
        }
      });
      observer.observe(content6);
    });
  </script>
  <script>
    document.addEventListener("DOMContentLoaded", function() {
      var content1 = document.getElementById('content1');
      var observer = new ResizeObserver(entries => {
        for (let entry of entries) {
          var content1Height = entry.contentRect.height;
          document.documentElement.style.setProperty('--content1-height', content1Height + 'px');
        }
      });
      observer.observe(content1);
    });
  </script>
  <script src="../../assets/js/proj.js"></script>
</body>
</html>
