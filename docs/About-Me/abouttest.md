---
hide:
  - navigation
  - toc
  - feedback
template: feed.html
search:
  exclude: true
---

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Teddy Warner</title>
  <script src="https://kit.fontawesome.com/79ff35ecec.js" crossorigin="anonymous"></script>
  <link rel="stylesheet" href="../../assets/css/about.css">
    <!-- Stylesheet not working with current static site implementation, so enjoy the inline styles lol -->
  <style>
    .scrollDown .md-header {
    transform: translate3d(0, -100%, 0);
    }
    .scrollUp .md-header {
    transform: none;
    }
    :root {
    --duration: 1s;
    --nav-duration: calc(var(--duration) / 4);
    --ease: cubic-bezier(0.215, 0.61, 0.355, 1);
    --space: 1rem;
    --font-size: 1.125rem;
    --line-height: 1.5;
    --inputicon: hsla(0, 0%, 0%, 0.87);
    --toggledinputicon: white;
    --formbg: hsla(0, 0%, 0%, 0.25);
    --formhover: hsla(0, 0%, 0%, 0.32);
    --toggledform: hsla(0, 0%, 100%, 0.12);
    --toggledformhover: hsla(0, 0%, 100%, 0.3);
    --avatar: url("../../images/index/avatardark.svg");
    --quote: url("../../images/index/quote/");
    --articlebg: hsla(0, 0%, 0%, 0.04);
    }
    [data-md-color-scheme="slate"] {
    /*--md-default-bg-color: hsla(228, 7%, 14%, 1);*/
        --inputicon: white;
        --toggledinputicon: hsla(0, 0%, 0%, 0.87);
        --formhover: hsla(0, 0%, 100%, 0.3);
        --toggledform: hsla(0, 0%, 0%, 0.2);
        --toggledformhover: hsla(0, 0%, 0%, 0.32);
        --avatar: url("../../images/index/avatarlight.svg");
        --quote: url("../../images/index/quote/");
        --articlebg: hsl(234, 76%, 95%, 0.04)
    }
    @media screen and (min-width: 60em) {
    .md-sidebar--secondary {
        display: none;
    }
    }
    @media screen and (min-width: 76.25em) {
    .md-sidebar--primary {
        display: none;
    }
    }
    .md-banner {
    z-index: 3;
    }
    main {
    margin-top: -7em;
    z-index: 2;
    overflow-y: hidden;
    }
    section {
    height: auto;
    z-index: 2;
    }
    .md-sidebar {
    width: 0px;
    }
    .md-footer {
    display: hidden;
    } 
    .md-main__inner {
    margin: 0;
    }
    .md-source {
    color: var(--md-default-fg-color);  
    }
    .toggle .logo {
    display: none;
    }
    .toggle .socialsparent {
    display: none;
    }
    .close {
    display: none;
    }
    .toggle .close {
    display: flex;
    }
    .toggle .menu {
    display: none;
    }
    .md-header__button.md-icon[for="__search"] {
    color: var(--md-default-fg-color); 
    }
    .toggle .md-header__button.md-icon[for="__search"] {
    color: var(--md-default-bg-color);
    }
    .md-search__input + .md-search__icon {
    color: var(--inputicon);
    }
    .toggle .md-search__input + .md-search__icon {
    color: var(--toggledinputicon);
    }
    .md-search__form {
    background-color: var(--formbg);
    }
    .md-search__form:hover {
    background-color: var(--formhover);
    }
    .toggle .md-search__form {
    background-color: var(--toggledform);
    }
    .toggle .md-search__form:hover {
    background-color: var(--toggledformhover);
    }
    header{
    padding-top: 1.5em;
    }
    .menu {
    color: var(--md-default-fg-color);
    }
    .close {
    color: var(--md-default-bg-color);
    }
    .md-header__option {
    color: var(--md-default-fg-color);
    }
    .toggle .md-header__option {
    color: var(--md-default-bg-color);
    }
    .md-header[data-md-state=shadow]{
    box-shadow:0 0 0 rgba(0,0,0,0),0 0 0 rgba(0,0,0,0);
    }
    .md-header {
    background: none;
    box-shadow:0 0 0 transparent,0 0 0 transparent;
    }
    .md-tabs {
    display: none;
    }
    .logo {
    padding-left: 0;
    }
    html.has-scroll-smooth {
    overflow: hidden; }
    html.has-scroll-dragging {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none; }
    .has-scroll-smooth body {
    overflow: hidden; }
    .has-scroll-smooth [data-scroll-container] {
    min-height: 100vh; }
    [data-scroll-direction="horizontal"] [data-scroll-container] {
    height: 100vh;
    display: inline-block;
    white-space: nowrap; }
    [data-scroll-direction="horizontal"] [data-scroll-section] {
    display: inline-block;
    vertical-align: top;
    white-space: nowrap;
    height: 100%; }
    .head {
    height: 72em;
    }
    .main-navigation {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    transform: translateX(-100%);
    transition: transform var(--nav-duration);
    background-color: var(--md-default-fg-color);
    z-index: 3;
    }
    .main-navigation:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: inherit;
    transform-origin: 0 50%;
    z-index: 3;
    }
    .main-navigation ul {
    font-size: 9vmin;
    width: 100%;
    z-index: 4;
    }
    .main-navigation li {
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;
    z-index: 4;
    }
    .main-navigation li:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1vmin;
    background-color: inherit;
    transform-origin: 0 50%;
    transform: translateX(-100%) skew(15deg);
    z-index: 4;
    }
    .main-navigation a {
    display: inline-block;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    color: var(--md-default-bg-color);
    line-height: 1.08;
    text-decoration: none;
    user-select: none;
    padding: auto;
    transform: translateY(100%);
    z-index: 4;
    }
    .main-content {
    z-index: 1;
    }
    .home:hover {
    color: #5466CE;
    font-style: italic;
    }
    .about:hover {
    color: #5466CE;
    font-style: italic;
    }
    .proj:hover {
    color: #5466CE;
    font-style: italic;
    }
    .mach:hover {
    color: #5466CE;
    font-style: italic;
    }
    .fab:hover {
    color: #5466CE;
    font-style: italic;
    }
    .navnum {
    font-size:0.35em;
    font-weight: lighter;
    font-style: italic;
    }
    .toggle .main-navigation {
    transition-duration: 0.35;
    transform: translateX(0);
    }
    .toggle .main-navigation a {
    animation: link-appear calc(var(--duration) * 1.5) var(--ease) forwards;
    }
    @keyframes link-appear {
    0%, 25% {
        transform: translateY(100%);
    }
    50%, 100% {
        transform: translateY(0);
    }
    }
    @media (max-width: 76em) {
    .logo {
        padding-left: 1em;
    }
    }
    @media (max-width: 45em) {
    .logo {
        padding-left: 1em;
    }
    header{
        padding-top: 1.25em;
    }
    }
    @media (max-width: 59.892857142857146em) {
    .toggle .md-search__icon.md-icon:first-of-type {
        color: var(--md-default-fg-color);
    }
    }
    @media (min-width: 59.892857142857146em) {
    .md-grid {
        margin-left: auto;
        margin-right: auto;
        max-width: 100vw;
    }
    .md-header__inner {
        margin-left: 5vw;
        margin-right: 5vw;
    }
    }
</style>
</head>

<nav class="main-navigation">
    <ul>
      <li><a class="home" href="http://teddywarner.com"><span class="navnum">01</span> Home</a></li>
      <li><a class="about" href="http://teddywarner.com/About-Me/about/"><span class="navnum">02</span> About Me</a></li>
      <li><a class="proj" href="http://teddywarner.com/feed/"><span class="navnum">03</span> Projects</a></li>
      <li><a class="mach" href="http://teddywarner.com/Machine-Profiles/FusionPro48/"><span class="navnum">04</span> Machine Profiles</a></li>
      <li><a style="font-family: 'Fira Sans';" class="fab" href="https://fabacademy.org/2021/labs/charlotte/students/theodore-warner/"><span class="navnum">05</span> Fab Academy</a></li>
    </ul>
</nav>

<body>
  <main data-scroll-container>
   <section data-scroll-section>
   </br>
   </br>
   </br>
    <div class="stuff">
    <div class="sidebarparent">
        <div class="sidebar">
        <center>
        <p><img src="https://avatars.githubusercontent.com/u/48384497" alt="Profile Picture" class="profilepic"></p>
        <h1>Teddy Warner</h1>
        <h2>Los Angeles, CA</h2>
        <h3>Student/Maker<h3>
        <div class="socials">
        <a href="https://www.linkedin.com/in/teddy-warner-880974200/" class="ln" style=" color: inherit;" title="Linked In - Teddy Warner"><i class="fab fa-linkedin"></i></a>
        <a href="https://github.com/Twarner491" class="git" style=" color: inherit;" title="Github - Twarner491"><i class="fab fa-github"></i></a>
        <a href="https://www.youtube.com/@teddywarner" class="yt" style=" color: inherit;" title="YouTube - @teddywarner"><i class="fa fa-youtube"></i></a>
        <a href="https://www.instagram.com/teddymakesstuff/" class="insta" style=" color: inherit;" title="Instagram - @teddymakesstuff"><i class="fa fa-instagram"></i></a>
        <a href="https://twitter.com/WarnerTeddy" class="twitter" style=" color: inherit;" title="Twitter - @WarnerTeddy"><i class="fa fa-twitter"></i></a>
        <a href="https://discordapp.com/users/534164566649733120/" class="ln" style=" color: inherit;" title="Discord - Twarner#2592"><i class="fab fa-discord"></i></a>
        <a href="https://open.spotify.com/user/mskz5e4dyzv4cb4kkn73iipq0?si=58a503e3c7a54eeb" class="spotify" style=" color: inherit;" title="Spotify - Teddy Warner"><i class="fab fa-spotify"></i></a>
        <a href="mailto:<Twarner491@gmail.com>" class="email" style=" color: inherit;" title="Email - Twarner491@gmail.com"><i class="fas fa-paper-plane"></i></a>
        </div>
        <a href="https://www.buymeacoffee.com/teddywarner" style=" color: inherit;">
            <button class="coffeelarge" title="Buy Me a Coffee :)"><i class="fas fa-coffee"></i> Buy Me a Coffee</button>
            <button class="coffeesmall" title="Buy Me a Coffee :)"><i class="fas fa-coffee"></i></button>
        </a>
        </center>
        </div>
    </div>
    <div class="stuff__container">
        <div class="stuff__content">
        <span class="resume" style=" color: inherit;"><a href="https://docs.google.com/document/d/1PYGzcMTuvcSjJsXomp-win3_tvn-WFpQ/edit?usp=sharing&ouid=117910198967406819470&rtpof=true&sd=true">Export Resume <i class="far fa-file-alt"></i></a></span><h1>About Me</h1>
        <div class="underline"></div>
        <p><strong>Hey! I'm Teddy Warner✌️</strong>, an enthusiastic and detail-oriented student and maker at the University of Southern California's <a href="https://iovine-young.usc.edu/">Iovine and Young Academy</a>. I bring a strong foundation in conceptualizing and executing innovative designs through rapid prototyping and digital fabrication. I’m enthralled by any opportunity to use these skills to aid and influence others' lives. Visit my <a href="http://teddywarner.com/feed/">projects</a> page to explore some of my work!</p>
        <h2><i class="fas fa-briefcase"></i> Professional Experience -</h2>
        <p><a href="https://www.youngengineersoftoday.com/"><img src="https://teddywarner.org/images/About/yeot.png" alt="YEOT Logo" class="logo" style="width:80px;margin-top: 8px;"></a><strong>YOUNG ENGINEERS OF TODAY</strong><span class="date" style=" color: inherit;">Jun 2019-Aug 2023</span><br>Instructor and Curriculum Developer</p>
        <ul>
            <li>Instructed fabrication courses for elementary, middle & high school students
            <li>Facilitated STEAM summer classes for children ages 4 to 16
            </li>
        </ul>
        <p><a href="https://www.charlottelatin.org/academics/steam"><img src="https://teddywarner.org/images/About/fablogo.png" alt="Fab Logo" class="logo" style="width:38px;margin-top: 6px;"></a><strong>CHARLOTTE LATIN FAB LAB</strong><span class="date" style=" color: inherit;">Oct 2020-Jul 2023</span><br>Research and Development</p>
        <ul>
            <li>Orchestrated general lab maintenance and advised middle and high school students
            <li>Built and installed custom PCs utilized in Innovation and Design classes
            <li>Networked and maintained the lab's <a href="https://teddywarner.org/images/Octoprint/laboctoprint.jpg">3D Printer farm</a>
            <li>Deployed and diagnosed issues with 21st-century fabrication tools
            <li>Wrote machine workflows for the lab’s <a href="https://teddywarner.org/Machine-Profiles/FusionPro48/">Epilog Fusion Pro laser engraver</a>, 3D printers, and CNC machines
            </li>
        </ul>
        <p><a href="https://escapetactic.com/"><img src="https://teddywarner.org/images/About/escapetactic.png" alt="ET Logo" class="logo" style="width:36px;margin-top: 5px;"></a><strong>ESCAPE TACTIC</strong><span class="date" style=" color: inherit;">Jan 2022-Jun 2023</span><br>Freelance R&D</p>
        <ul>
            <li>Engineered, fabricated, and installed escape room puzzles
            <li>Developed and produced custom mechatronic products for use within escape room puzzles
            </li>
        </ul>
        <p><a href="https://rhythmlink.com/"><img src="https://teddywarner.org/images/About/rythemlink.png" alt="RLI Logo" class="logo" style="width:55px;margin-top: 6px;"></a><strong>RHYTHMLINK INTERNATIONAL</strong><span class="date" style=" color: inherit;">Oct 2022-May 2023</span><br>Research and Development Engineering Intern</p>
        <ul>
            <li>Architected and programmed custom electronic systems to catalyze the testing of 44 million EMG, IONM, and cEEG probes annually
            <li>Expedited mechanical prototyping of an electrode testing rig with digital fabrication
            </li>
        </ul>
        <h2><i class="fas fa-graduation-cap"></i> Education -</h2>
        <p><a href="https://iovine-young.usc.edu/"><img src="https://teddywarner.org/images/About/USC.png" alt="USC Logo" class="logo" style="margin-top: 6px;width:40px;"></a><strong>UNIVERSITY OF SOUTHERN CALIFORNIA</strong><span class="date" style=" color: inherit;">2023-2027</span><br>B.S. Arts, Technology, and the Business of Innovation, Class of 2027</p>
        <p><a href="https://fabacademy.org/"><img src="https://teddywarner.org/images/About/fablogo.png" alt="Fab Logo" class="logo" style="width:38px;margin-top: 6px;"></a><strong>Fab Academy</strong><span class="date" style=" color: inherit;">2020-2021</span><br>Principles and Applications of Digital Fabrication Diploma</p>
        <p><a href="https://www.charlottelatin.org"><img src="https://teddywarner.org/images/About/latin.png" alt="CLS Logo" class="logo" style="margin-top: 7px;width:70px;"></a><strong>CHARLOTTE LATIN SCHOOL</strong><span class="date" style=" color: inherit;">2018-2023</span><br>High School Diploma, Class of 2023</p>
        <h2><i class="fas fa-award"></i> Honors & Awards -</h2>
        <p>
            <strong><a href="https://issuu.com/charlottelatinschool/docs/service_society_2023">Charlotte Latin School Service Society</a></strong>,  219.5 hours. (May 2023)
        </p>
        <p>
            <strong><a href="https://www.instructables.com/contest/anythinggoes/">Instructables Anything Goes Contest</a></strong>, prize winner. (Feb 2023)
        </p>
        <p>
            <strong><a href="https://www.instructables.com/contest/makeitmodular2022/">Autodesk Construction Solutions Scholarship Award</a></strong>, 1st Place. (July 2022)
        </p>
        <p>
            <strong><a href="https://www.instructables.com/contest/digifab2022/">Instructables Digital Fabrication Student Design Challenge</a></strong>, 1st Place. (July 2022)
        </p>
        <p>
            <strong><a href="https://engagement.virginia.edu/clubs/signature-initiatives/jefferson-book-awards">The University of Virginia’s Jefferson Book Award</a></strong> (May 2022)
        </p>
        <p>
            <strong><a href="https://www.instructables.com/contest/SDnewyear/">Instructables New Year, New Skill Student Design Challenge</a></strong>, 2nd Place. (Feb 2022)
        </p>
        <p>
            <strong><a href="https://www.instagram.com/p/CYboI6zrTs8/?utm_medium=copy_link">CLS Fab Lab Student Spotlight</a></strong> (Jan 2022)
        </p>
        <p>
            <strong><a href="https://www.ecybermission.com/">eCYBERMISSION</a></strong>, regional finalist. (Oct 2018 - Feb 2019)
        </p>
        <p>
            <strong><a href="http://www.appstate.edu/~marlandes/sumo/sumosumo.html">Appalachian SumoBot Competition,</a></strong> 1st Place. (Oct 2018 - Dec 2018)
        </p>
        <h2><i class="fas fa-address-card"></i> Featured -</h2>
        <p>
            <strong><a href="https://blog.adafruit.com/2023/02/01/the-von-niemann-probe-aims-to-investigate-the-accusations-of-chess-cheating-wearablewednesday/">Adafruit - This Project Aims to Investigate the Accusations of Chess Cheating</a></strong> (Feb 2023)
        </p>
        <p>
            <strong><a href="https://hackaday.com/2023/02/01/electronic-shoe-explores-alleged-chess-misbehavior/">Hackaday - Electronic Shoe Explores Alleged Chess Misbehavior</a></strong> (Feb 2023)
        </p>
        <p>
            <strong><a href="https://www.hackster.io/news/this-chess-cheating-wearable-aims-to-investigate-the-accusations-against-grandmaster-hans-neimann-90b63403b5d0">Hackster.io - This Chess-Cheating Wearable  ...</a></strong> (Feb 2023)
        </p>
        <p>
            <strong><a href="https://hackaday.com/2023/01/25/pizza-making-cnc-machine-is-the-only-tool-weve-ever-dreamed-of/">Hackaday - The Only Tool We’ve Ever Dreamed Of ...</a></strong> (Jan 2023)
        </p>
        <p>
            <strong><a href="https://hackaday.com/2022/12/26/turning-a-microchip-mplab-snap-into-a-udpi-avr-programmer/">Hackaday - Turning A Microchip MPLAB Snap ...</a></strong> (Dec 2022)
        </p>
        <p>
            <strong><a href="https://www.hackster.io/news/pizza-pizza-cnc-machine-makes-pizzas-so-you-don-t-have-to-2abc96e2c411">Hackster.io - Makes Pizzas So You Don’t Have To ...</a></strong> (Dec 2022)
        </p>
        <p>
            <strong><a href="https://blogs.autodesk.com/learn-lab/2022/07/20/upskilling-for-the-future-with-instructables-student-design-challenges/">Autodesk Learn Lab - Upskilling for the Future ...</a></strong> (July 2022)
        </p>
        <p>
            <strong><a href="https://vimeo.com/563923609#t=4233s">Fab Academy - Final Project Presentation</a></strong>, 1:10:33 through 1:13:45. (June 2021)
        </p>
        <p>
            <strong><a href="https://www.instagram.com/p/COdXD7fJ5Zl/?">Charlotte Latin School -  Fab Lab Covid Response</a></strong> (May 2021)
        </p>
        <p>
            <strong><a href="https://vimeo.com/510901917">Fab Academy - Introduction & Idea</a></strong>, 00:00 through 17:52. (Jan 2021)
        </p>
        <p>
            <strong><a href="https://www.chicagotribune.com/suburbs/wilmette/ct-wml-st-francis-underwater-robotics-tl-0107-20160104-story.html">Chicago Tribune - St. Francis students gain skills...</a></strong> (Jan 2016)
        </p>
        <h2><i class="fas fa-map-marker-alt"></i> Where I'm Located -</h2>
        <center>
            <iframe width="100%" height="350" style="margin-bottom: 12px; border:0 " loading="lazy" allowfullscreen src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423284.0440627345!2d-118.74136525966654!3d34.020608476662154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1698637611473!5m2!1sen!2sus"></iframe> 
        </center>
        <h2><i class="fas fa-city"></i> Community Involvement -</h2>
        <p>
            <strong><a href="https://www.hacksc.com/">HackSC Product Engineer</a></strong>, organizing one of the largest student-run hackathons in Southern California, seeking to inspire and empower the next generation of tech leaders. (Sep 2023-Present)
        </p>
        <p>
            <strong>USC Concerts Committee</strong>, bringing concerts and special events to USC students. (Sep 2023 - Present)
        </p>
        <p>
            <strong><a href="https://fabacademy.org/2021/labs/charlotte/">Charlotte Latin Fab Lab</a></strong> community member, student & volunteer. (Aug 2018-July 2023 / 70.5 Volunteer Hours)
        </p>
        <p>
            <strong>Charlotte Latin SET Club Founder</strong>, increasing interest and curiosity in science, engineering & technology through hands-on learning and effective community engagement. (Aug 2022-May2023)
        </p>
        <p>
            <strong>Charlotte Latin Outdoors Club Member</strong>, participated in monthly student-led hikes. (Aug 2021-May2023)
        </p>
        <p>
            <strong>Health 4 PINE</strong>, health for people in need everywhere. (Jan 2022-May2023)
        </p>
        <p>
            <strong>Charlotte Latin School Engineering Club Leader</strong>, planning and facilitating club meetings (Sep 2019-Aug 2022)
        </p>
        <p>
            <strong><a href="https://photos.app.goo.gl/kWnrCmx1bZPvqDK29">D is for Desk</a></strong>, a friend of mine's Eagle Scout Project, we built hardwood desks for the D is for Desk charity. (Nov 2020 / 17 Volunteer Hours) 
        </p>
        <p>
            <strong>Outward Bound School</strong>, a weeklong leadership retreat in the Appalachian Valley. (Oct 2020) 
        </p>
        <p>
            <strong>YEOT Summer Camp Counselor</strong>, Volunteer summer camp counselor for Young Engineers of Today's Racing Drones & Starwars Camps. (July 2020 / 57 Volunteer Hours) 
        </p>
        <p>
            <strong><a href="https://www.instagram.com/p/COdXD7fJ5Zl/?">Covid-19 Shields</a></strong>, designing, manufacturing, and delivering of shields and barriers to prevent the spread of Covid-19 through the school year in our FabLab. (Jul 2020–Aug 2020 / 72 Volunteer Hours)
        </p>
        <p>
            <strong><a href="https://sites.google.com/charlottelatin.net/toe-hawking/home">Toe Hawks</a></strong>, custom shoe insole aiming towards helping out youth affected by idiopathic toe walking. (Oct 2018-Feb 2019)
        </p>
        <h2><i class="fas fa-headphones-alt"></i> What I'm Listening To -</h2>
        <center>
        <p class="music">
        <a href="https://open.spotify.com/user/mskz5e4dyzv4cb4kkn73iipq0?si=5eba25ddc4f74313">
            <img src="https://novatorem-oqoqm52ci-twarner491.vercel.app/api/spotify" alt="Spotify">
        </a>
        </p>
        </center>
        </div>
    </div>
    </div>
   </section>
   <section style="height:3em;">
    <h1></h1>
   </section>
  </main>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/locomotive-scroll@4.1.4/dist/locomotive-scroll.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
  <script src="../../assets/js/feed.js"></script>
</body>
</html>
