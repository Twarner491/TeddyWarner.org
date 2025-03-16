---
title: Octoprint Setup
description: A complete Octoprint setup documentation.
hide:
  - navigation
  - tags
template: comments.html
---

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- Primary Meta Tags -->
  <meta name="title" content="Octoprint Setup - Teddy Warner">
  <meta name="description" content="Comprehensive setup guide for Octoprint on Raspberry Pi, detailing installation, configuration, and optimization for enhanced 3D printing control and monitoring.">
  <meta name="keywords" content="Octoprint, 3D Printing, Raspberry Pi, Print server, Remote printing, Print monitoring, Web interface, Print farm, Printer control, Plugin configuration, Network printing">
  <meta name="author" content="Teddy Warner">
  <meta name="robots" content="index, follow">
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://teddywarner.org/Projects/Octoprint/">
  <meta property="og:title" content="Octoprint Setup - Teddy Warner">
  <meta property="og:description" content="A complete Octoprint setup documentation.">
  <meta property="og:image" content="https://teddywarner.org/assets/images/Octoprint/laboctoprint.jpg">
  <meta property="og:image:type" content="image/png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="https://teddywarner.org/Projects/Octoprint/">
  <meta property="twitter:title" content="Octoprint Setup - Teddy Warner">
  <meta property="twitter:description" content="A complete Octoprint setup documentation.">
  <meta property="twitter:image" content="https://teddywarner.org/assets/images/Octoprint/laboctoprint.jpg">

  <!-- Existing resource links -->
  <script src="https://kit.fontawesome.com/79ff35ecec.js" crossorigin="anonymous"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,200..900;1,200..900&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,200..900;1,200..900&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../../assets/css/projects/project.css">
  <link rel="stylesheet" href="../../assets/css/header.css">
</head>

  <nav class="main-navigation">
    <ul>
      <li><a class="home" href="https://teddywarner.com"><span class="navnum">01</span> Home</a></li>
      <li><a class="proj" href="https://teddywarner.com/proj/"><span class="navnum">02</span> Projects</a></li>
      <li><a class="writ" href="https://teddywarner.com/writ/"><span class="navnum">03</span> Writing</a></li>
    </ul>
  </nav>
  
  <div class="blur-overlay"></div>

<script src="../../assets/js/header.js"></script>
<script>
  document.addEventListener('DOMContentLoaded', function() {
    initializeHeader();
  });
</script>
  
<div class="return2feed"><a href="https://teddywarner.org/proj"><i class="fa-solid fa-arrow-left-long"></i> Project Feed</a></div>

# Octoprint Setup Documentation 

<div style="margin-top: -0.8em;">
  <span class="abtlinks"><a href="https://x.com/WarnerTeddy"><img src="https://avatars.githubusercontent.com/u/48384497" alt="Teddy Warner's GitHub profile picture" class="profilepic"><span class="abt" id="name"> Teddy Warner</a><span class="abt" style="font-weight: 300; padding-left: 6px;"><span class="year">| Fall, 2021 </span>| <span class="readTime"><i class="far fa-clock"></i> 9-11 minutes</span></span></span></span>
  <span class="share" style=" color: inherit;">
  <a class="fb" title="Share on Facebook" href="https://www.facebook.com/sharer/sharer.php?u=https://teddywarner.org/Projects/Octoprint/"><i class="fa-brands fa-facebook"></i></a>
  <a class="twitter" title="Share on Twitter" href="https://twitter.com/intent/tweet?url=https://teddywarner.org/Projects/Octoprint/&text=Setup%20an%20Instance%20of%20Octoprint%20for%20Your%20Machine%20With"><i class="fa-brands fa-x-twitter"></i></a>
  <a class="pin" title="Share on Pinterest" href="https://pinterest.com/pin/create/button/?url=https://teddywarner.org/Projects/Octoprint/&media=&description=Setup%20an%20Instance%20of%20Octoprint%20for%20Your%20Machine%20With%20https://teddywarner.org/Projects/Octoprint/"><i class="fa-brands fa-pinterest"></i></a>
  <a class="ln" title="Share on LinkedIn" href="https://www.linkedin.com/shareArticle?mini=true&url=https://teddywarner.org/Projects/Octoprint/"><i class="fab fa-linkedin"></i></a>
  <a class="email" title="Share via Email" href="mailto:info@example.com?&subject=&cc=&bcc=&body=Setup%20an%20Instance%20of%20Octoprint%20for%20Your%20Machine%20With%20https://teddywarner.org/Projects/Octoprint/"><i class="fa-solid fa-paper-plane"></i></a>
  </span>
</div>

---

<center>

![](../assets/images/Octoprint/Octoprint.png){width="100%" alt="Octoprint logo and interface overview"}

</center>

[Octoprint](https://octoprint.org/) takes 3D printing to new heights, creating a more concise workflow with more accessible machine control. The opensource [Octoprint project](https://github.com/OctoPrint/OctoPrint) was created and maintained by [Gina Häußge](https://octoprint.org/support-octoprint/). The software enables a machine with a web interface with full machine controls and a world of community plugins - all of which run on a Raspberry Pi made Server with an octoprint image. I use Octoprint on all of my personal printers, and a special CNC-focused fork of the software for my [MPCNC](https://www.v1engineering.com/). As mentioned above, web interfacing a machine creates a more concise workflow and thus is great for personal machines. However, an Octoprint setup shines even more in a print farm instance. During the winter months of my sophomore year (2020) I set up secure Octoprint instances on each of my lab's array of 20 FDM printers. Each of my setup instances can be read seen under the [My Octoprint Instances](https://teddywarner.org/Projects/Octoprint/#my-octoprint-instances) section of this page. 

## Octoprint Installation

!!! abstract "[Octoprint](https://octoprint.org/) Installation Requirements"

    You'll need a Raspberry Pi *(Recommended hardware: Raspberry Pi 3B, 3B+ or 4B)*, a sufficient power source for the Pi, as well as a micro SD card *(4GB or larger)* to flash the Octorpint image to.

<center>

[Download the Latest Octopi Image :fontawesome-solid-download:](https://github.com/guysoft/OctoPi){ .md-button .md-button--primary }

</center>

First, download and flash the latest [Octoprint](https://octoprint.org/) image (linked above). This Pi image can be flashed as you would with any other Raspberry Pi project - I use [balenaEtcher](https://www.balena.io/etcher/) for flashing, its simple 3-step interface makes the process super straightforward. After a successful flash of this image on your Pi's SD card configure your WiFi information in the *octopi-wpa-supplicant.txt* located on the flashed SD card *(If you're using wired internet, you can skip this setup)*. To update the *octopi-wpa-supplicant.txt* file with your network, open the file in a code editor of your choice.

!!! warning "Do not use WordPad (Windows) or TextEdit (MacOS X)"

    These editors will mess with the file layout, and cause problems with your setup.

 Next, locate the type of network you'll be connecting to - for this example, I'll be using the *WPA/WPA2 Secured* standard, 

``` c++
## WPA/WPA2 secured
#network={
#  ssid="put SSID here"
#  psk="put password here"
#}
```

for any type of connection you choose, you can enable it by uncommenting the sections lines with a single hashtag, leaving you with a block like below.

``` c++
## WPA/WPA2 secured
network={
  ssid="put SSID here" // (1)
  psk="put password here" // (2)
}
```

1.  Replace *"put SSID here"* with your network's SSID.
2.  Replace *"put password here"* with your network's password.

Next, scroll down to the bottom of the document to the section starting *"# Uncomment the country your Pi is in..."*. Here, remove the hashtag in front of your network's country, and add a hashtag in front of all other (non-selected) countries.

Then, after saving your file and ejecting your SD, you can install your flashed SD in your Pi and boot.

Next, some basic Pi config. Make sure you are on the same WiFi network you set up your Pi on, and then SSH into your booted Pi at the IP *octopi.local* with the Pi's default credentials (Username - *pi* / Password - *raspberry*). I use [Putty](https://www.putty.org/) as my SSH client as again, it's pretty straightforward to use. Once connected to your Pi, run the command ...

``` py linenums="1"
sudo raspi-config
```

to open the configuration GUI. Here you can change your Pi's credentials (highly recommended), set up your local timezone (to allow for accurate machine ETAs), and change your machine's hostname (thus changing the URL from the default *octopi.local* to *YOURHOSTNAME.local*). After all, changes, be sure to reboot your Pi.

!!! success "Congrats!"

    You have now installed [Octoprint](https://octoprint.org/) on your Raspberry Pi, and can now connect to its web server with the URL *http://octopi.local* ( or if you changed your hostname, with the URL *http://YOURHOSTNAME.local*).

## Octoprint Configuration

With an Octoprint instance up and running, the difficult part of the setup is complete. Access to the web interface allows for easy machine and interface setup, in addition to some more customizations in the form of community plug-ins.

### Interface Config

Beginning with the configuration of the interface itself, basic settings can be found in the web interface by clicking on the wrench icon on the right side of the navigation bar located at the top of the interface. Scrolling through these menus allows for total customization of the interface. A good starting place is under the *Octoprint* section in the *Appearance* menu. Here (as shown below) you can customize the interface title - displayed in the interface's navigation bar, as well as the default interface highlight color.

<center>

![](../assets/images/Octoprint/AppearanceSettings.png){width="95%" alt="Octoprint appearance settings menu"}

</center>

### Printer Setup

To enable Octoprint's main purpose, a machine must be connected to the hardware running Octoprint via serial. This connection can come in the form of a USB cable in the simplest setup, or GPIO pins can be used for communication as well. 

!!! example "Personal Setup"

    In the case of my Prusa I3 MK3S+, I took advantage of this GPIO communication setup, to allow for the mounting of my Raspberry Pi directly under my printer's mainboard (via [this](https://www.prusaprinters.org/prints/24475-remix-of-raspberry-pi-4-case-3030-hanging-mount-fo) Raspberry Pi 4 Case) without a bulky USB cable connecting them ...
    <center>
    ![](../assets/images/Octoprint/mountedelectronics.jpg){width="95%" alt="Raspberry Pi mounted under printer mainboard using 3030 mount"}
    </center>


Your serial connection must be set up software side in the *Serial Connection* menu found under the *Printer* section of the interface settings. Octoprint can automatically detect your *Serial Port* and *Baudrate* when *AUTO* is selected in these dropdowns, however, you may also specify specifics for each field. 

<center>

![](../assets/images/Octoprint/serialconnection.png){width="95%" alt="Serial connection settings for printer configuration"}

</center>

Next, a machine profile must be created for your connected machine to ensure safe machine control with regard to hardware limits. A profile can be created in the *Printer Profiles* menu under the *Printer* section of the interface's settings. Create a new profile by clicking the *Add Profile...* button in the lower right corner of the menu, and fill out the profile with your machine's information.

<center>

![](../assets/images/Octoprint/printerpofiles.png){width="95%" alt="Printer profiles configuration menu"}

</center>

One key feature of Octoprint is its webcam machine stream, allowing for remote supervision of your machine. Anything from USB webcams to Raspberry Pi ribbon cable cameras can be used for this stream & Octoprint will automatically find this attached webcam and will use it to stream your machine (some more exotic cameras or mounting styles may require an additional configuration - discussed below). 

!!! example "Personal Setup"

    On my printer, I've mounted a Raspberry Pi camera to the X-Axis stepper of my machine (via [this](https://www.thingiverse.com/thing:3121052) Raspberry Pi camera mount), yielding a pretty nice side view of prints, shown below.
    <center>
    ![](../assets/images/Octoprint/cameramount.png){width="95%" alt="Raspberry Pi camera mounted to X-axis stepper motor"}
    ![](../assets/images/Octoprint/CameraWindow.png){width="95%" alt="Octoprint webcam feed showing side view of print"}
    </center>

Due to my printers camera mount, my Raspberry Pi camera is heald in an upsidedown orientation and thus needs to be compensated for on the software side. Luckily, in the *Webcam & Timelapse* menu under the *Features* section of the Octorprint interface settings, webcam orientation can be changed. In addition, more advanced webcam options can be found, allowing for the use of almost all cameras connected to the hardware running Octorpint.

<center>

![](../assets/images/Octoprint/webcamsettings.png){width="95%" alt="Webcam and timelapse settings configuration"}

</center>

### Plugins

One of the greatest features of Octorpint stems from its open-source nature ... its community plugins. Under the *Plugin Manager* menu in the *Octoprint* section of the interface's settings, plugins can be added to the octoprint instance, allowing for entire customization of the instance from the interface to machine interaction. There are tons upon tons of plugins that exist in the Octorprint community, and you may even develop your own, however below is a list of plugins I find to be amazing additions to an instance 

!!! note "Note" 

    Some of these shown plugins are machine specific to my Prusa I3 MK3S+

<center>

![](../assets/images/Octoprint/pluginsettings.png){width="95%" alt="Plugin manager showing installed plugins"}

</center>

 - Access Anywhere - The Spaghetti Detective[^1] - AI-powered failure detection & Remote Octoprint Access 

 <center>

  ![](../assets/images/Octoprint/homescreen.jpg){width="46%" alt="The Spaghetti Detective home interface"}
  ![](../assets/images/Octoprint/tsdapp.jpg){width="47.5%" alt="The Spaghetti Detective mobile app interface"}

  ![](../assets/images/Octoprint/tsdcontrol.jpg){width="94%" alt="The Spaghetti Detective printer control interface"}

  </center>

 - Bed Visualizer[^2] - Uses Plotly js library to render a 3D surface of the bed’s reported mesh 
 
 <center>

  ![](../assets/images/Octoprint/bedlevlevisualizer.png){width="95%" alt="Bed visualizer showing mesh leveling data in 3D"}

  </center>

 - Custom Background[^3] - Change the background image on the temperature graph 
 <center>


  ![](../assets/images/Octoprint/custombackground.png){width="95%" alt="Custom background image on temperature graph"}

  </center>

 - Exclude Region[^4] - Adds the ability to prevent printing within rectangular or circular regions of the currently active gcode file 

 <center>

  ![](../assets/images/Octoprint/excluderegions.png){width="95%" alt="Exclude region configuration menu"}

  </center>

 - Floating Navbar[^5] - Make the navbar stick to the top of the page while scrolling
 - GcodeEditor[^6] - Edit gcode that's been uploaded to OctoPrint

 <center>

  ![](../assets/images/Octoprint/edit_gcode.png){width="50%" alt="Gcode editor interface"}
  ![](../assets/images/Octoprint/edit_gcode2.png){width="46%" alt="Gcode editor interface"}

  </center>

 - Heater Timeout[^7] - Automatically shut off heaters if no print has been started
 - Navbar Temp[^8] - Display temperatures on the navbar

 <center>

  ![](../assets/images/Octoprint/navbar.png){width="60%" alt="Navbar temperature display"}

  </center>

 - Octoprint Display ETA[^9] - Show finish time (ETA) for current print

 <center>

  ![](../assets/images/Octoprint/eta.png){width="300" alt="Octoprint display ETA"}
  
  </center>

 - PrettyGCode[^10] - adds a 3D GCode visualizer tab in Octoprint

 <center>

  ![](../assets/images/Octoprint/PrettyGcode-Screen3.jpg){width="75%" alt="PrettyGCode 3D GCode visualizer tab"}

  </center>

 - Themeify[^11] - Beautiful themes for octoprint
 - ipOnConnect[^12] - Display the ip address of the connected OctoPrint instance on the control panel *:warning: MK3S+ specific*

 <center>

  ![](../assets/images/Octoprint/ipdisplay.jpg){width="95%" alt="IP address display on control panel"}

  </center>

## Octoprint Interface Workflow

Although the Octoprint web interface is rather intuitive, the number of stock features (not to mention plugin-enabled ones) can be a bit overwhelming without a bit of exploring. Below is a short PowerPoint I put together walking through the basics of the interface for students using my lab print farm, allowing for a bit of knowledge before exploration.

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vR6_FehCcFtgrH6KYo5DuwZ3WEcFPoPesZBn_naPUVLJ-wylwF8p8eu6KqsSV9Zz71wESnbA-aIAoqa/embed?start=false&loop=false&delayms=5000" frameborder="0" width="100%" height="550" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

## My Octoprint Instances

<center>

![](../assets/images/Octoprint/personaloctoprint.jpg){width="95%" alt="Personal Octoprint enabled Prusa I3 MK3S+"}
  <figcaption>My Personal Octoprint Enabled Prusa I3 MK3S+</figcaption>

![](../assets/images/Octoprint/laboctoprint.jpg){width="95%" alt="Lab's Octoprint enabled printer farm"}
  <figcaption>My Lab's Octoprint Enabled Printer Farm</figcaption>

</center>

[^1]: https://plugins.octoprint.org/plugins/thespaghettidetective/
[^2]: https://plugins.octoprint.org/plugins/bedlevelvisualizer/
[^3]: https://plugins.octoprint.org/plugins/custombackground/
[^4]: https://plugins.octoprint.org/plugins/excluderegion/
[^5]: https://plugins.octoprint.org/plugins/floatingnavbar/
[^6]: https://plugins.octoprint.org/plugins/GcodeEditor/
[^7]: https://plugins.octoprint.org/plugins/HeaterTimeout/
[^8]: https://plugins.octoprint.org/plugins/navbartemp/
[^9]: https://plugins.octoprint.org/plugins/display_eta/
[^10]: https://plugins.octoprint.org/plugins/prettygcode/
[^11]: https://plugins.octoprint.org/plugins/themeify/
[^12]: https://plugins.octoprint.org/plugins/ipOnConnect/

*[FDM]: Fused Deposition Modeling
*[CNC]: Computerized Numerical Control
*[MPCNC]: Mostly Printed Computerized Numerical Control - https://docs.v1engineering.com/mpcnc/intro/
*[SSH]: Secure Shell
*[GPIO]: General-Purpose Input/Output
*[USB]: Universal Serial Bus
*[ETA]: Estimated Time of Arrival
*[ISO]: International Organization for Standardization
*[UPDI]: Unified Program and Debug Interface
*[AVR]: A Family of microcontrollers developed since 1996 by Atmel
*[JTAG]: Joint Test Action Group
*[IDE]: Integrated Development Environment
*[Rx]: Receiving Signal
*[Tx]: Transmitting Signal
*[VCC]: Voltage Common Collector (+)
*[GND]: Ground / Common Drain (-)
*[IC]: Integrated Circuit
*[LED]: Light-Emitting Diode
*[Cap]: Capacitor
*[SPST]: Single Pole Single Throw Switch
*[SPDT]: Single Pole Double Throw Switch
*[DPST]: Double Pole Single Throw Switch
*[DPDT]: Double Pole Double Throw Switch
*[EEPROM]: Electrically Erasable Programmable Read-Only Memory
*[PCB]: Printed Circuit Board
*[PWM]: Pulse Width Modulation
*[SPI]: Serial Peripheral Interface
*[I2C]: Inter-Integrated Circuit
*[UART]: Universal Asynchronous Receiver/Transmitter
*[ADC]: Analog-to-Digital Converter
*[DAC]: Digital-to-Analog Converter
*[MCU]: Microcontroller Unit
*[FPGA]: Field-Programmable Gate Array
*[SLA]: Stereolithography
*[DLP]: Digital Light Processing 
*[SLS]: Selective Laser Sintering
*[PLA]: Polylactic Acid 
*[ABS]: Acrylonitrile Butadiene Styrene 
*[PETG]: Polyethylene Terephthalate Glycol 
*[CAD]: Computer-Aided Design
*[CAM]: Computer-Aided Manufacturing
*[G-code]: A language for controlling CNC machines
*[PID]: Proportional-Integral-Derivative (control loop feedback mechanism)
*[MOSFET]: Metal-Oxide-Semiconductor Field-Effect Transistor
*[BJT]: Bipolar Junction Transistor
*[SMD]: Surface-Mount Device
*[THT]: Through-Hole Technology
*[DIP]: Dual In-line Package
*[ESC]: Electronic Speed Controller
*[BEC]: Battery Eliminator Circuit
*[LiPo]: Lithium Polymer 
*[NiMH]: Nickel-Metal Hydride 
*[EMI]: Electromagnetic Interference
*[ESD]: Electrostatic Discharge