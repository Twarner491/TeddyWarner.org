---
hide:
  - navigation
  - toc
---

<link rel="stylesheet" href="../../assets/css/projects/project.css">

<script src="https://kit.fontawesome.com/79ff35ecec.js" crossorigin="anonymous"></script>

# Klipper Enabled Ender 3

<div style="margin-top: -0.8em;">
  <span class="abtlinks"><a href="https://teddywarner.org/About-Me/about/"><img src="https://avatars.githubusercontent.com/u/48384497" alt="Profile Picture" class="profilepic"><span class="abt" style="font-weight: 300; padding-left: 6px;"> Teddy Warner</a><span class="abt" style="font-weight: 300; padding-left: 6px;"><span class="year">| Fall, 2021 </span>| <i class="far fa-clock"></i> 3-4 minutes</span></span></span>
</div>

---

![](../images/KlipperEnder3/wholeprinter.jpg){: align=left width="30%"}

Due to uncertainty surrounding lab access during the Covid-19 pandemic, I received an Ender 3 3D-printer at the start of my cycle in [Fab Academy](https://fabacademy.org/). During my [second week](http://fabacademy.org/2021/labs/charlotte/students/theodore-warner/Assignments/week02/) in the course, I built and began to mod this machine as a little side project to the course work. However as the cycle progressed, I quickly ran out of time to keep working on this machine's mods and moved the machine to my closet, where it sat up until the [Klipper](https://www.klipper3d.org/) firmware piqued my interest. After modding the printer during Fab Academy[^1], I was running the machine on Marlin linked to Octoprint[^2], a setup I use on my other machines. This setup worked great with my machine mods, allowing me to print over a network through Octoprint as I would on any of my other Octoprint enabled machines. In this configuration, a Raspberry Pi running Octorpint hosts a local server that *.gcode* flies can be uploaded to and ran from. The Pi sends this uploaded *.gcode* to the machine's mainboard, where the code is processed, and movements/operations are determined.

!!! abstract "Klipper Opperation Principal"

    [Klipper](https://www.klipper3d.org/) on the other hand operates on a different principle. The firmware runs across both the mainboard and the Raspberry Pi, allowing for the same type of hosted server to exist (I used [FluiddPi](https://github.com/cadriel/FluiddPI) as my servers GUI), but instead of relying on the machines mainboard to compute *.gcode*, the code parsing is done by the Raspberry Pi - the more powerful computer- leaving the machine mainboard to only worry about stepper movements and operations. This setup uses the given hardware of a setup more optimally, allowing for faster calculations and more precise movements.

  After learning about the benefits of [Klipper](https://www.klipper3d.org/) I knew I had to try it out and thus, the Ender 3 modding project was revied and pulled from the closet.

!!! example "Fabrication Tools/Techniques"

    - [ ] Computer-Aided Design - Autodesk Fusion 360
    - [ ] Embedded Programming - Python & C/C++
    - [ ] Networking & Communication
    - [ ] 3D Printing
    - [ ] Soldering

<center>

I began my Ender 3 overhaul with 3D Printed hardware modifications, both custom designs, and proven mods from the Ender 3 community ...

![](../images/KlipperEnder3/directdrive.jpg){width="30.5%"}
![](../images/KlipperEnder3/ender3cam.jpg){width="67.7%"}
  <figcaption>Direct Drive Extruder Modification & Printer-Mounted Webcam</figcaption>

![](../images/KlipperEnder3/electronicsenclouser.jpg){width="80%"}
![](../images/KlipperEnder3/installedelebox.jpg){width="80%"}
  <figcaption>Rear-Mounted Electronics Enclosure</figcaption>

</center>

... before moving onto the instalation of Klipper itself. The firmware must be flashed to both the printer's mainboard and Raspberry Pi to enable communication between the printer and its webserver. After firmware flashing, I established network connection on the Raspberry Pi, and connected to the printers web interface via IP, seen below!

<center>

![](../images/KlipperEnder3/fluiddinterface.png){width="95%"}
  <figcaption>The FluiddPi Web Server Interface</figcaption>

</center>

[^1]: http://fabacademy.org/2021/labs/charlotte/students/theodore-warner/Assignments/week02/
[^2]: https://teddywarner.org/Projects/Octoprint/