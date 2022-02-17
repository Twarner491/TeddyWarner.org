---
hide:
  - navigation
  - toc
title: About Me
---

<script src="https://kit.fontawesome.com/79ff35ecec.js" crossorigin="anonymous"></script>

<style>

.stuff {
  height: 100%;
  width: 100%;
}

.stuff__container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2em;
  overflow-y: auto;
}

.stuff__content {
  padding: 2em 0;
}

.stuff__header {
  overflow: hidden;
}

.stuff__content h2 {
  margin-top: 0px;
}

.sidebarparent {
  height: 100vh;
  width: 100%;
}

.sidebar {
  width: 100%;
  position: sticky;
  top: 112px;
  left: -22em;
  height: auto;
}

.sidebar h1 {
  margin-bottom: -37px;
}

.sidebar h2 {
  margin-bottom: -14px;
}

.profilepic {
  margin-bottom: -12px;
  width: 255px;
  height: 255px;
  border-radius: 50%;
}

.socials {
  margin-top: -25px;
}

.ln {
  padding-left: 0.3em;
  padding-right: 0.3em;
}

.fa-linkedin:hover {
    color: #0e76a8;
}

.git {
  padding-left: 0.3em;
  padding-right: 0.3em;
}

.fa-github:hover {
background: linear-gradient(155deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;

}

.insta {
  padding-left: 0.3em;
  padding-right: 0.3em;
}

.fa-instagram:hover {
  background: radial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%), radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%), radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent), linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}

.twitter {
  padding-left: 0.3em;
  padding-right: 0.3em;
}

.fa-twitter:hover {
    color: #00acee;
}

.discord {
  padding-left: 0.3em;
  padding-right: 0.3em;
}

.fa-discord:hover {
    color: #5865F2;
}

.spotify {
  padding-left: 0.3em;
  padding-right: 0.3em;
}

.fa-spotify:hover {
    color: #1DB954;
}

.email {
  padding-left: 0.3em;
  padding-right: 0.3em;
}

.fa-paper-plane:hover {
    color: #5466ce;
}

.logo {
  float:left;
  height: 42px;
  margin-right: 7px;
}

.resume {
  float:right;
  margin-top: 9px;
}

.resume a {
  color: inherit;
}

.date{
  float:right;
  height: 50px;
  width: 100px;
  margin-top: 0px;
  margin-bottom: -45px;
  text-align: right;
}

.underline{
  height: 4.5px;
  width: 55px;
  background-color: #5466ce;
  margin-top: -35px;
  border-radius: 5px;
}

.music {
   margin-bottom: -50px;
}

.coffeelarge {
    width: 175px;
    height: 35px;
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
    margin-top: 12px;
    text-align:center;
    border: none;
    background-size: 300% 100%;
    background-image: linear-gradient(315deg, #7183f0, #5466ce, #000000, #000000);
    border-radius: 50px;
    moz-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
}

.coffeesmall {
    width: 35px;
    height: 35px;
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
    margin-top: 12px;
    text-align:center;
    border: none;
    background-size: 300% 100%;
    background-image: linear-gradient(315deg, #7183f0, #5466ce, #000000, #000000);
    border-radius: 50px;
    moz-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
}

.coffeelarge:hover {
    background-position: 100% 0;
    moz-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
}

.coffeesmall:hover {
    background-position: 100% 0;
    moz-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
}

@media (min-width: 68em) {
  .stuff {
    display: flex;
    height: 100%;
    min-height: 40em;
  }
}
.stuff > *:first-child {
  position: relative;
  height: 23.5em;
}
@media (min-width: 30em) {
  .stuff > *:first-child {
    height: 23.5em;
  }
}
@media (min-width: 68em) {
  .stuff > *:first-child {
    flex-basis: 50%;
    max-width: 50%;
    height: auto;
  }
}
@media (min-width: 35em) {
  .stuff > *:last-child {
    flex-basis: 100%;
    max-width: 100%;
  }
}
@media (min-width: 76.5em) {
  .stuff > *:last-child {
    flex-basis: 85%;
    max-width: 85%;
  }
}

@media (min-width: 68em) {
  .coffeesmall {
    display: none;
  }
}

@media (max-height: 40em) {
  .sidebar {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  height: auto;
  }
}

@media (max-width: 68em) {
  .sidebar {
    position: absolute;
    top: -25px;
    left: 0;
  }
  .coffeesmall {
    position: absolute;
    top: -16px;
    right: 0;
  }
  .coffeelarge {
    display: none;
  }
}

</style>

<div class="stuff">
  <div class="sidebarparent">
    <div class="sidebar">
     <center>
     <p><img src="https://avatars.githubusercontent.com/u/48384497" alt="Profile Picture" class="profilepic"></p>
      <h1>Teddy Warner</h1>
      <h2>Charlotte,NC</h2>
      <h3>Student/Maker<h3>
      <div class="socials">
       <a href="https://www.linkedin.com/in/teddy-warner-880974200/" class="ln" style=" color: inherit;" title="Linked In - Teddy Warner"><i class="fab fa-linkedin"></i></a>
       <a href="https://github.com/Twarner491" class="git" style=" color: inherit;" title="Github - Twarner491"><i class="fab fa-github"></i></a>
       <a href="https://www.instagram.com/teddymakesstuff/" class="insta" style=" color: inherit;" title="Instagram - @teddymakesstuff"><i class="fa fa-instagram"></i></a>
       <a href="https://twitter.com/WarnerTeddy" class="twitter" style=" color: inherit;" title="Twitter - @WarnerTeddy"><i class="fa fa-twitter"></i></a>
       <a href="https://discordapp.com/users/534164566649733120/" class="ln" style=" color: inherit;" title="Discord - Twarner#2592"><i class="fab fa-discord"></i></a>
       <a href="https://open.spotify.com/user/mskz5e4dyzv4cb4kkn73iipq0?si=58a503e3c7a54eeb" class="spotify" style=" color: inherit;" title="Spotify - Teddy Warner"><i class="fab fa-spotify"></i></a>
       <a href="mailto:<Twarner491@gmail.com>" class="email" style=" color: inherit;" title="Email - Twarner491@gmail.com"><i class="fas fa-paper-plane"></i></a>
      </div>
      <a href="https://www.buymeacoffee.com/teddywarner" style=" color: inherit;">
        <button class="coffeelarge" title="Venmo - @Teddy-Warner"><i class="fas fa-coffee"></i> Buy Me a Coffee</button>
        <button class="coffeesmall" title="Buy Me a Coffee :)"><i class="fas fa-coffee"></i></button>
      </a>
     </center>
    </div>
  </div>
  <div class="stuff__container">
    <div class="stuff__content">
     <span class="resume" style=" color: inherit;"><a href="https://docs.google.com/document/d/1jV6DjJ6Y5BZHakTcLHbSO4ZxNAdQNouvXiMn1IuTLG0/edit?usp=sharing">Export Resume <i class="far fa-file-alt"></i></a></span><h1>About Me</h1>
      <div class="underline"></div>
      <p><strong>Hey! I’m Teddy Warner,</strong> a junior in high school enrolled at Charlotte Latin School in Charlotte, North Carolina. I have a great interest in modern fabrication technologies such as 3d printing & CNC machines. I love using these interests to benefit my community through volunteering. </p>
     <h2><i class="fas fa-briefcase"></i> Experience -</h2>
      <p><a href="https://www.youngengineersoftoday.com/"><img src="https://teddywarner.org/images/About/yeot.png" alt="YEOT Logo" class="logo" style="width:70px;margin-top: 7px;"></a><strong>YOUNG ENGINEERS OF TODAY</strong><span class="date" style=" color: inherit;">2020-Present</span><br>Teaching Assistant</p>
      <ul>
        <li>Co-Instructing a fabrication course for middle & high school students.
        <li>Facilitating STEAM summer classes for children ages 4 to 16.
        </li>
      </ul>
      <p><a href="https://www.charlottelatin.org/academics/steam"><img src="https://teddywarner.org/images/About/fablogo.png" alt="Fab Logo" class="logo" style="width:42px;margin-top: -2px;"></a><strong>CHARLOTTE LATIN FAB LAB</strong><span class="date" style=" color: inherit;">2020-Present</span><br>Freelance Research and Development</p>
      <ul>
      <li>General Lab Maintenance and Development
      <li><a href="https://teddywarner.org/images/Octoprint/laboctoprint.jpg">Print farm</a> setup and maintenance
      <li>PC Building, Setup, and installation
      <li>Machine workflow writing
      <li><a href="https://teddywarner.org/Machine-Profiles/FusionPro48/">Epilog Laser</a> Setup and Maintenance
      </li>
      </ul>
     <h2><i class="fas fa-graduation-cap"></i> Education -</h2>
      <p><a href="https://www.charlottelatin.org"><img src="https://teddywarner.org/images/About/latin.png" alt="CLS Logo" class="logo" style="margin-top: 2px;width:70px;"></a><strong>CHARLOTTE LATIN SCHOOL</strong><span class="date" style=" color: inherit;">2018-Present</span><br>High School Diploma, Class of 2023</p>
      <p><a href="https://fabacademy.org/"><img src="https://teddywarner.org/images/About/fablogo.png" alt="Fab Logo" class="logo" style="width:42px;margin-top: -2px;"></a><strong>Fab Academy</strong><span class="date" style=" color: inherit;">2020-2021</span><br>Principles and Applications of Digital Fabrication Diploma</p>
      <p><a href="https://www.outwardbound.org/about-us/schools/north-carolina-outward-bound-school/"><img src="https://teddywarner.org/images/About/ob.png" alt="Outward Bound Logo" class="logo" style="width:42px;margin-top: 0px;"></a><strong>OUTWARD BOUND SCHOOL</strong><span class="date" style=" color: inherit;">Fall 2019</span><br>4 Day Course in the North Carolina Mountains</p>
      <p><a href="https://www.ecybermission.com/"><img src="https://teddywarner.org/images/About/AEOP.png" alt="AEOP Logo" class="logo" style="margin-top: 0px;"></a><strong>ARMY EDUCATION OUTREACH PROGRAM</strong><span class="date" style=" color: inherit;">2018-2019</span><br>2nd Place, eCYBERMISSION STEM competition for 6th through 9th grade students</p>
     <h2><i class="fas fa-award"></i> Honors & Awards -</h2>
      <p>
        <strong><a href="https://www.instagram.com/p/CYboI6zrTs8/?utm_medium=copy_link">CLS Fab Lab Student Spotlight</a></strong> (Jan 2022)
      </p>
      <p>
        <strong><a href="https://www.ecybermission.com/">eCYBERMISSION</a></strong>, regional finalist. (Oct 2018 - Feb 2019)
      </p>
      <p>
        <strong><a href="http://www.appstate.edu/~marlandes/sumo/sumosumo.html">Appalachian SumoBot Competition,</a></strong> 1st Place. (Oct 2018 - Dec 2018)
      </p>
     <h2><i class="fas fa-map-marker-alt"></i> Where I'm Located -</h2>
      <center>
        <iframe width="100%" height="350" style="margin-bottom: 12px; border:0 " loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJgRo4_MQfVIgRZNFDv-ZQRog&key=AIzaSyAvEiiuu4x7x8z9fQz31hkuRNY1yCJzRq0"></iframe> 
      </center>
     <h2><i class="fas fa-city"></i> Community Involvement -</h2>
      <p>
        <strong>Charlotte Latin School Engineering Club Leader</strong>, Planning and facilitating club meetings (Aug 2020 - Present)
      </p>
      <p>
        <strong><a href="https://fabacademy.org/2021/labs/charlotte/">Charlotte Latin Fab Lab</a></strong> Community member, student & volunteer. (Aug 2018 - Present / 70.5 Volunteer Hours)
      </p>
      <p>
        <strong><a href="https://sites.google.com/charlottelatin.net/toe-hawking/home">Toe Hawks</a></strong>, Custom shoe insole aiming towards helping out youth affected by idiopathic toe walking. (Oct 2018 - Feb 2019)
      </p>
      <p>
        <strong>YEOT Summer Camp Counselor</strong>, Volunteer summer camp counselor for Young Engineers of Today's Racing Drones & Starwars Camps. (July 2020 / 57 Volunteer Hours) 
      </p>
      <p>
        <strong><a href="https://www.instagram.com/p/COdXD7fJ5Zl/?">Covid-19 Shields</a></strong>, Designing, manufacturing, and delivering of shields and barriers to prevent the spread of Covid-19 through the school year in our FabLab. (Jul 2020 – Aug 2020 / 72 Volunteer Hours)
      </p>
      <p>
        <strong><a href="https://photos.app.goo.gl/kWnrCmx1bZPvqDK29">D is for Desk</a></strong>, A friend of mine's Eagle Scout Project, we built Toe Hawks for the D is for Desk charity. (Nov 2020 / 17 Volunteer Hours) 
      </p>
      <center>
       <p>--- Total Service - <strong>216.5 Hours</strong> ---</p>
      </center>
      <p>
     <h2><i class="fas fa-headphones-alt"></i> What I'm Listening To -</h2>
      <p class="music">
       <a href="https://open.spotify.com/user/mskz5e4dyzv4cb4kkn73iipq0?si=5eba25ddc4f74313">
        <img src="https://novatorem-oqoqm52ci-twarner491.vercel.app/api/spotify" alt="Spotify">
       </a>
    </div>
  </div>
</div>