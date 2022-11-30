---
hide:
  - navigation
  - toc
---

<link rel="stylesheet" href="../../assets/css/projects/project.css">

<script src="https://kit.fontawesome.com/79ff35ecec.js" crossorigin="anonymous"></script>

# Pizza-Pizza CNC Machine

<div style="margin-top: -0.8em;">
  <span class="abtlinks"><a href="https://teddywarner.org/About-Me/about/"><img src="https://avatars.githubusercontent.com/u/48384497" alt="Profile Picture" class="profilepic"><span class="abt" style="font-weight: 300; padding-left: 6px;"> Teddy Warner</a><span class="abt" style="font-weight: 300; padding-left: 6px;"><span class="year">| Spring, 2021 </span>| <i class="far fa-clock"></i> 6-7 minutes</span></span></span>
</div>

---

<center>

<iframe width="100%" height="650" src="https://www.youtube.com/embed/MYHNym9zk10" title="Toolchange Testing" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

**A pizza-preparing, tool-changing, three-axis CNC machine fabricated in under three weeks!**

</center>

!!! example "Fabrication Tools/Techniques"

    - [ ] 3D Computer-Aided Design - Autodesk Fusion 360
    - [ ] Embedded Programming - C/C++ 
    - [ ] 3D Printing
    - [ ] Laser Cutting/Engraving
    - [ ] Soldering

The *Pizza-Pizza CNC* is a project I took on with three classmates for our machine building assignment in [weeks 9 and 10](http://fabacademy.org/2021/labs/charlotte/Group%20Assignments/week07%20%28Pizza-Pizza%29/) of the [Fab Academy](https://fabacademy.org/). The machine is a Marlin-based, 3 axis CNC, with tool-changing functionality to switch between a sauce and cheese dispensing toolend. My work on the project included the machine's electronics, wiring, firmware, and electronic housing, as well as the machine's Z-carriage and axis, and the frames endstop and belt tensioner mounts.

<center>

![](http://fabacademy.org/2021/labs/charlotte/students/theodore-warner/images/week09/FullRenderWBase.png)
  <figcaption>Pizza Pizza CNC Render with Electronics Box and Base Platform</figcaption>

![](http://fabacademy.org/2021/labs/charlotte/students/theodore-warner/images/week09/BeltTensioner.png)
  <figcaption>Pizza Pizza CNC Frame Corner with Belt Tensioner Feature</figcaption>

</center>

The *Pizza-Pizza CNC* is built from mostly aluminum rails and PETG 3D printed parts, and is based upon a mini RAMBo - or RepRap Arduino-Mega-compatible Mother Board. After post processing the machines 3D prints, I began to install the electronics inside the case, first screwing the LCD panel to its mounting place, then installing the Mini RAMBo on its mounting pins, aligning the board's USB port with its corresponding cutout, and finially screwing in the enclosers fan with some M3 screws and bolts. The CNC runs a version of the Marlin firmware, an open-source firmware project with a great community of makers behind it, and thus was an easy choice for our machine due to the great documentation. 

<center>

![](http://fabacademy.org/2021/labs/charlotte/students/theodore-warner/images/week09/StatusScreen.jpg)
  <figcaption>Pizza-Pizza CNC LCD Status Display Screen</figcaption>

![](http://fabacademy.org/2021/labs/charlotte/students/theodore-warner/images/week09/electronicboxlights.jpg)
  <figcaption>Electronics Enclosure Before Motor Wireing</figcaption>

![](http://fabacademy.org/2021/labs/charlotte/students/theodore-warner/images/week09/powersupplysystem.jpg)
  <figcaption>Electronics System Running off of Power Supply</figcaption>

</center>

The final pieces to the CNC involved routing wires from the machines motors and limit switches into the electronics enclosure and to the Mini RAMBo.

<center>

![](http://fabacademy.org/2021/labs/charlotte/students/theodore-warner/images/week09/machineassembled.jpg)
  <figcaption>Assembled Machine Before Cable Managment and Toolends</figcaption>

</center>

Of course, after all this work on a pizza preparing machine, the only logical test for the machine would be preparing a pizza. We set up our CNC by covering the entire work area and all parts that could be covered with a plastic trash bag, as I didn't want to get sauce on our newly working machine. From here, we loaded the two hoppers with tomato sauce and some shredded cheese, confirmed everything looked right, and then ran the final pizza preparing gcode, and ...

<center>

<iframe width="100%" height="650" src="https://www.youtube.com/embed/Tk6OREM7gic" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</center>

it worked!! The pizza preparing gcode worked through both of its tool changes, creating spirals of sauce and cheese on our pizza crust. Unfortunately, there were a couple of small issues in the run-through, one being not enough sauce put in our sauce hopper, so upon its tool docking, the hopper wasn't heavy enough to stay in the holder, and the other being a sticky cheese. We had left our cheese and sauce out in our lab for almost two days before the test, and not only did this cause the cheese to smell, but also left us with a cheese that would not stop sticking to itself, proving an issue when trying to get the cheese to fall from the hopper, however, the cheese fell through the hopper hole with a little convincing, and finally we had prepared a pizza. :smile:
