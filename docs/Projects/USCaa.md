---
hide:
  - navigation
  - toc
---

<link rel="stylesheet" href="../../assets/css/projects/project.css">

<script src="https://kit.fontawesome.com/79ff35ecec.js" crossorigin="anonymous"></script>

# Assistve Aquaponics Fish Tank

<div style="margin-top: -0.8em;">
  <span class="abtlinks"><a href="https://teddywarner.org/About-Me/about/"><img src="https://avatars.githubusercontent.com/u/48384497" alt="Profile Picture" class="profilepic"><span class="abt" style="font-weight: 300; padding-left: 6px;"> Teddy Warner</a><span class="abt" style="font-weight: 300; padding-left: 6px;"><span class="year">| Spring-Summer, 2021 </span>| <i class="far fa-clock"></i> 6-7 minutes</span></span></span>
</div>

---

<center>

![](../images/AssistiveAquaponics/presentation.png)

<video width="100%" height="600" class="video_container" controls loop>
  <source src="http://fabacademy.org/2021/labs/charlotte/students/theodore-warner/presentation.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

</center>

!!! example "Fabrication Tools/Techniques"

    - [ ] 3D Computer-Aided Design - Autodesk Fusion 360
    - [ ] 2D Computer-Aided Design - Inkscape
    - [ ] PCB Design - Autodesk Eagle
    - [ ] 3D Printing
    - [ ] CNC Milling
    - [ ] Laser Cutting/Engraving
    - [ ] PCB Milling
    - [ ] Surface Mount Soldering

I've always had an interest in having my own home garden capable of growing plants and herbs, as I enjoy the access to fresh foods, however, my past attempts at gardening always seemed to be relatively fruitless. Due to my structured high school student schedule, I am usually not around to look after and take care of a garden, and thus, this want for fresh foods hasn't become a reality. My interest in my Fab Academy final project came from this interest in having a home garden that could morph to my tight high school schedule. I started brainstorming this concept and found many projects and articles that were helpful or influential to my idea, some of them being [Gardening + Arduino](https://www.instructables.com/Garduino-Gardening-Arduino/), [Garduino](https://github.com/gradyh/GradyHillhouseGarduino), [DIY Home Assistant Garden Automation System](https://www.youtube.com/watch?v=Q9fjKeYOyqU), [Raspberry Pi Powered IOT Garden](https://www.instructables.com/Raspberry-Pi-Powered-IOT-Garden/), and the [Advanced Irrigation System](https://create.arduino.cc/projecthub/narangrahulrahul8/advanced-irrigation-system-eeb622?ref=tag&ref_id=irrigation&offset=2). Although looking at projects like these gave me some inspiration, I have many personal design factors that have also helped me form my idea. I started the Fab Academy course with the idea of an Automated Windowsill Garden for my final project, talked about on my [Orginal Project Concept](https://www.youtube.com/watch?v=Q9fjKeYOyqU) page, however as I began work through the class, I expanded on the idea. After talking with [Professor Neil Gershenfeld](https://en.wikipedia.org/wiki/Neil_Gershenfeld) about my Final Project concept in the [Computer-Aided Design week lecture](https://vimeo.com/510901917), I began to alter my idea from this windowsill box garden, into a garden in a different form factor. While discussing my windowsill box concept, Neil suggested some research into the world of ['ponics'](https://organicmattersblog.com/2017/07/06/the-evolution-of-ponics-in-organic/), the techniques of growing plantlife without soil, where plant roots are placed in a water-mineral solution and fed with liquid fertilizers. After some research, I found the practice of Aquaponics especially appealing to me. "Aquaponics is a system of producing food that combines aquaculture (raising fish, snails, or prawns) and hydroponics (growing plants in water). It can be an elegant closed system whereby the fish produce waste which, in turn, circulates to feed the plants which, in turn, purify the water for the next school of aquatic generations" ([The Evolution of “Ponics” in Organic](https://organicmattersblog.com/2017/07/06/the-evolution-of-ponics-in-organic/)). The second thought that also leads me to this change was the form factor of the projects themselves. I attend Fab Academy classes on my Highschool campus after I finished my school day, and carrying in a windowsill box like a coffin to and from our lab every day would be impractical. With this form factor issue comes my third motivation for this change, my family may be moving houses in the upcoming months, and I would not want to build a windowsill box to fit a windowsill on a house that I may not even live in by the end of this course. With all of these thoughts in mind, I was still committed to the idea of a Garden in general, and settled on an aquaponic garden in a fish tank-like form factor, with the plants growing on top of the tank itself. This not only solves my transportation problem, but a fish tank-style aquaponic garden could be placed inside, and then be moved from house to house. 

Before starting work on designing, manufacturing, and running an aquaponics system, I set off to learn about the practice of aquaponics more in-depth. As stated previously, "Aquaponics is a system of producing food that combines aquaculture (raising fish, snails, or prawns) and hydroponics (growing plants in water). It can be an elegant closed system whereby the fish produce waste which, in turn, circulates to feed the plants which, in turn, purify the water for the next school of aquatic generations" ([The Evolution of “Ponics” in Organic](https://organicmattersblog.com/2017/07/06/the-evolution-of-ponics-in-organic/)). An Aquaponics system is thus an ecosystem shaped like a closed circle, where each step leads to the next until returned to where the system started. I jotted down this "Circle" concept in the diagram shown below, listing out each step taken in the system to return to the starting place.

<center>

![](http://fabacademy.org/2021/labs/charlotte/students/theodore-warner/images/FinalProject/AquaponicsCircle.png){width="48.5%"}
![](http://fabacademy.org/2021/labs/charlotte/students/theodore-warner/images/FinalProject/AquaponicsSystemDiagram.png){width="48%"}

</center>

<center>

![](http://fabacademy.org/2021/labs/charlotte/students/theodore-warner/images/week13/fishbowlschematic.png)

![](http://fabacademy.org/2021/labs/charlotte/students/theodore-warner/images/week13/workingboardfile.png)

![](http://fabacademy.org/2021/labs/charlotte/students/theodore-warner/images/FinalProject/allboards.jpg)

</center>


Although I created a model of this wooden structure in Fusion 360 while planning the project, I began the structure creation process by starting to put some thought into the manufacturing processes I would need to take to produce this structure in real life. I settled on milling 6 different pieces to assemble the structure, one back wall, two sides, and 3 stacked pieces to make the base of the structure. I planned on creating these parts based on their corresponding components in my Fusion 360 design. For each of these pieces, I created a new sketch on the face of the profile and used Fusion 360's *Project* tool found under the *Sketch* menu to project all desired lines for each part into one single sketch in the Fusion 360 browser. With all of these lines in one single sketch for each of the 6 different components, I could export each sketch from the Fusion 360 browser onto my computer as a *.dxf* file by right-clicking on the sketch, and then selecting *export as .dxf*.

![](http://fabacademy.org/2021/labs/charlotte/students/theodore-warner/images/week07/ProjectedSketches.jpg)
  <figcaption>Fusion Model with Projected Sketches for Each Component</figcaption>

### Aspire Work & Structure Milling

To generated the toolpaths I would later run on a CNC machine from my altered *.svg* files, I used Vectric CNC's [Aspire](https://www.vectric.com/products/aspire) CAM software. I firstly created a new file in Aspire, where I was prompted to set a workplane size. The workplane of the [ShopBot PRSalpha](https://www.shopbottools.com/products/alpha), the CNC I would be milling on, was 96" x 48", and my material height was 0.776", so I entered these value in the prompt accordingly. I then imported each of my *.svg* files into Aspire, nesting the files as I imported to reduce waste stock material. I spent a little more time with all of my files imported messing with the part orientation to ensure that there would be little stock material waste between my parts. In the assembly of my design, I planned to use milled tabs to align the back piece to the structure's two sidewalls and created this feature in my design. I then switched over to Aspires *3D View* by clicking on the tab labeled *3D View* at the top of the interface's workspace. Here I could start working on generating the different toolpaths for my parts. Throughout this process, I referenced my original Fusion 360 design to determine which sections of each of my files would require different toolpath operations. The first toolpath operation I generated was a Boreing operation that would boreholes for alignment dowels in the base of my structure. This operation was especially needed in my operation as I was not planning on switching to a drill bit anytime throughout the milling process, and this boreing operation allows me to mill these holes with an endmill instead. Nextly I generated Profile toolpaths for all of my parts, outlining each of my files, and cutting them out. I selected all intended profile cuts for each of my files and set the depth of each of these profile cuts to 0.776", the thickness of my stock material. This cut depth would ensure all of my profile cuts would go all the way through the material. Nextly I selected a *.25 Endmill* bit for both my profile and boreing operations, as this was the endmill I was planning on using. To prevent the movement of each of these parts after the profile cut completes, I added tabs to the toolpath under the *Edit Tabs* section of the toolpaths settings. These "Tabs" leave a small bit of stock material connecting the profile to the rest of the stock and holding their position. I found adding 3 to 4 tabs per profile, depending on size and shape, worked best to hold my parts in place. The final tool paths I generated were pocket cuts. These toolpaths remove material to add depth to some of my parts. These pockets were relatively straightforward, as they didn't require any added tabs because they cont cut through the material, however, I used a different, larger, bit size for these pockets to speed up milling time, so I was required to change that. Finally, before exporting any of these toolpaths, I went back through and turned on "Ramping" for each operation. This setting diagonally moves the Endmill bit, as opposed to vertical plunges and then horizontal movement, allowing the side of the endmill to cut material as intended. I saved all of these toolpaths from Aspire through the *Save Toolpath* menu. Each of these toolpaths was saved under the Shopbot format, *.sbp*, and grouped based on the bit used. This left me with 3 different *.sbp* files for each a 1/8", 1/4", and 1/2" bit.

![](http://fabacademy.org/2021/labs/charlotte/students/theodore-warner/images/week07/Aspire.png)

![](http://fabacademy.org/2021/labs/charlotte/students/theodore-warner/images/week07/UsingShopbot.jpg){: align=left }

I began by prepping my machine with the proper bit and mounted my stock to the machine's bed. My classmate [Graham Smith](http://fabacademy.org/2021/labs/charlotte/students/graham-smith/) and I did all of our millings this week together as the operation of a machine on this scale can be unsafe if the right precautions are not taken, or if operated alone. I loaded my first tool path, my 1/2" pocket operation, into the [Shopbot Command Console](https://www.shopbottools.com/support/control-software) through the *Load File* menu under the *File* tab. I selected my *.sbp* toolpath, and under the pop-up menu, selected *3D Offset* as the operations offset, and then proceeded to click enter to start the cut. This "3D Offset" allows for me to complete an "Air Cut" of my file, where the tool doesn't engage with my stock material but just runs above it. I ran this Air Cut to ensure my part placement fit with the side of the machine's workspace limits, and also didn't run into any screws. This test of cutting air was successful, so I was ready to move onto the real milling operation. I loaded the file into [Shopbot Command Console](https://www.shopbottools.com/support/control-software) following the same steps taken previously, but this time I left the offset dropdown set to the default *No Offset* as opposed to *3D offset*, so the machine would run another air cut. Before running this operation, I ensured the dust collection was turned on, and then clicked the *enter* key to start the operation.

The assembly and post-processing work on this wooden tank structure is well documented on my [week 7](http://fabacademy.org/2021/labs/charlotte/students/theodore-warner/assignments/week07/) computer-controlled machining class page, and that work will not be documented in-depth again on this page for space reasons, however, the final assembled and post-processed beauty shots are included below.

<center>

![](../images/week07/Final1.jpg)
![](../images/week07/Final2.jpg)

  <figcaption>Final Shots of Sanded Fish Tank Structure</figcaption>

</center>

## Acrylic Fish Tank

Being the real centerpiece of my Aquaponics Fish Tank project, the fish tank itself was a special piece to work on, that I spent a good bit of time planning out before its creation. The tank, in its simplest form, is 5 acrylic panels cut on a laser cutter, and bonded together to form the tank itself with [WeldOn 16](https://www.amazon.com/IPS-Weld-Acrylic-Plastic-Cement/dp/B0149IFA9O/ref=sr_1_1?dchild=1&keywords=weldon+16&qid=1620182756&sr=8-1). However just a plain acrylic box like this is a little too basic, and taking inspiration from an assignment completed by 7th-grade engineering classes in our lab, I decided to etch something on the back wall of my tank. This assignment I took inspiration from is a pretty simple project completed by our lab's seventh graders as an intro to the laser cutter. The gist of the assignment involves laser-cutting and etching an acrylic sign, and then shining a neopixel strip down on the acrylic, lighting up the etched portion of the assignment. My fish tank will include white neopixel light strips on the inside of the tank as accent lighting, and an etched back wall of my fishtank would complement well with these lights, just like the seventh-grade sign project. Although I didn't know for sure what I would be etched into this back panel yet, I knew I wanted this design to align with the four cutouts on the back wall of my wooden tank structure, so I began this tank design work referencing my physical wooden tank structure. I used Inkscape to create the tank's basic 5 rectangles, so four outer walls would all sit on a larger tank baseplate. From here, referencing the wooden structure again, I projected the cutouts of my structure's back wall to the back panel, giving me a workspace to include my future design. During all this Inkscape work, I remembered a conversation between one of my instructors, [Mr. Tom Ducick](http://archive.fabacademy.org/fabacademy2016/charlottelatin/students/999/about.html) and our Fab group, where Mr. Dubick brought up the inclusion of our Eagle designs outside of circuit boards. For the back panel of my fish tank, I decided on embedding an SVG exported from my first mainboard attempt made all the back in [week 6](http://fabacademy.org/2021/labs/charlotte/students/theodore-warner/assignments/week06/#final-project-board-work). I used Inkscape's *Intercect* tool to crop this SVG down into the back walls four design slots. My final bit of work on this tank design fell on this back panel design again, as after meeting with another one of my instructors [Dr. Terence Fagan](https://mees.uncc.edu/directory/terence-j-fagan), the point was brought up that as sweet as the etched original circuit board would look on the back panel of the tank, my final project is a fish tank, something that is more organic and doesn't make you think of something as modern looking as the sharpe traces of a circuit board. To combat this, I increased the nodes of this back panel design in Inkscape, and then also increased the designs beziers, until left with something still legible as my original circuit board, but less sharp and with more organic curves, leaving me with the finished fish tank design in Inkscape, shown below.

![](http://fabacademy.org/2021/labs/charlotte/students/theodore-warner/images/FinalProject/TankInkscape.jpg)

I exported this Inkscape design as an SVG file, and then opened the file into CorelDRAW, and following the workflow for laser cutting I used in my [week 3](http://fabacademy.org/2021/labs/charlotte/students/theodore-warner/assignments/week03/) class, I ran this tank file on a sheet of 1/4" clear acrylic on our lab's Fusion Pro 48 laser cutter.

This job left me with the 5 panels of my tank, ready to assemble

As mentioned earlier, for the panel assembly of my tank, I'm using [WeldOn 16](https://www.amazon.com/IPS-Weld-Acrylic-Plastic-Cement/dp/B0149IFA9O/ref=sr_1_1?dchild=1&keywords=weldon+16&qid=1620182756&sr=8-1) to bond all of my acrylic panels together. This bonding process was super time-consuming, as each run with Weldon 16 required a 24 hour set time to completely bond. Despite this long total set time, the work time of [WeldOn 16](https://www.amazon.com/IPS-Weld-Acrylic-Plastic-Cement/dp/B0149IFA9O/ref=sr_1_1?dchild=1&keywords=weldon+16&qid=1620182756&sr=8-1) is only a little over a minute, so all of my application had to be clean and quick. I used a set of two 90 degrees angle clamps to hold my tank's panels in place while using [WeldOn 16](https://www.amazon.com/IPS-Weld-Acrylic-Plastic-Cement/dp/B0149IFA9O/ref=sr_1_1?dchild=1&keywords=weldon+16&qid=1620182756&sr=8-1) and left the clamps on through the 24 hours set time for each individual corner to allow for a square tank. 
The longes part of the tank assembly was all 4 of the sidewalls of the tank, and after this 4-day process was complete, I followed the same application process for the bottom of the tank, this time holding the pieces in place with some painters tape along all edges, as well as across both pieces.

I found that although [WeldOn 16](https://www.amazon.com/IPS-Weld-Acrylic-Plastic-Cement/dp/B0149IFA9O/ref=sr_1_1?dchild=1&keywords=weldon+16&qid=1620182756&sr=8-1) worked great for the structure of my tank, and allowed for a secure bond between all of the tanks panels, it didn't leave a watertight seal. This problem was simply fixed, however, with the application of silicon to the interior edges of my tank. During this step finding an Aquarium-Safe Silicone is super important, as to not kill any future fish. I found this article on [Aquarium-Safe Silicones]() to be a super helpful reference while picking one of these, and with the article as a reference, was able to pick a tank safe silicone out from my local hardware store. 

The application process for this silicone was worlds easier than the previous [WeldOn 16](https://www.amazon.com/IPS-Weld-Acrylic-Plastic-Cement/dp/B0149IFA9O/ref=sr_1_1?dchild=1&keywords=weldon+16&qid=1620182756&sr=8-1) work, due to the large working window with the product, and ability to do all of my tanks edges at once. I worked through starting with the four bottom edges of my tank, before tackling the four vertices, and then taking out any high spots on these lines with a popsicle stick.

![](http://fabacademy.org/2021/labs/charlotte/students/theodore-warner/images/FinalProject/successfulfileldtank.jpg)

## Plant Box - 3D Printing

Following the acrylic fish tank, the *aqua* part of the aquaponics system, it was time to move onto my tank's plant box, covering the system *ponics* side. The fabrication of this plant box is one of the additive processes used on my tank, allowing me to incorporate otherwise impossible features, such as embedded water pipes, and nice cable management. Around the time of designing this plant box a nice article from Prusa Research came out on [How to Make Prints Waterproof](https://blog.prusaprinters.org/watertight-3d-printing-pt1-vases-cups-and-other-open-models_48949/), and its contents gave this additive plant box manufacturing some more light. With the contents of that article, as well as this article on [Waterproof Printing](https://all3dp.com/2/waterproof-3d-print-pla/) from All3D as a reference, I settled on some basic goals for this plant box manufacturing, The box itself will be printed from white PETG. PETG is not only one of my favorite filaments to print in, but also considered a watertight material, and when not colored and left white, is also fish tank safe.

With the manufacturing process in mind, I began work on the plant box's CAD in Fusion 360. The CAD for this part is pretty complex, including not just water routing from a connection port on the bottom of the part, but also a water directing reflow system, and cable management with board mounts incorporated in the design. The part is split into four separate sections, to allow for optimal print orientation on my printer's bed. These four pieces align with three mounting alignment holes for embedded M3 nuts and bolts, and these same alignment screws are used to secure the four sections together.

After the completion of all design work for my tank's plant box, the tedious process of manufacturing was ready to begin. In total, all four parts of the plant box took just over 72 hours to print. Each of the printed parts went through a couple of extra steps in the slicing process, where the plant box's water tightness would be ensured. The basic premise of a watertight component relates very closely to the density of that component. With this in mind, each of the four plant box parts are sliced with four perimeters, and with a 10% gyroid infill, an infill type with super high strength along with a low weight (less filament usage). Each of these parts runs at a *0.20mm* layer height, allowing for a relatively high part density while keeping a lower number of layer lines, places where water could seep into the print. After all of this, I used *Prusa SLicer*'s ( my slicer of choice) *Paint on Supports* tool, to add supports to the aspects of my print where they were needed. This step, as opposed to auto-generating the supports allowed me to keep the internal water pipes of my part intact and usable without supports clogging them, shown in the inspected slicing image below.

![](http://fabacademy.org/2021/labs/charlotte/students/theodore-warner/images/FinalProject/4permiterslicing.jpg)

This slicing setup process was used across all four parts of my tank plant box, and after a ton of print time, I was left with the task of assembly. As mentioned above, my CAD design for this part includes alignment pins for all four of the plant box's sections. After cleaning up the supports from each of these sections, I inserted the embedded M3 nuts used in this alignment setup and dry-fit the four parts together with the alignment M3 bolts. After this, I repeated the same assembly process, this time using the same silicone used to seal my tank on all of the inside surfaces on my plant box sections, leaving me with the assembled part.

## System Assembly & Testing

Due to the countless design hours spent planning the assembly of my entire tank, this process had plenty of digital references, making the most time-consuming process of the assembly the one, not digitally planned aspect, cable management. I began the assembly process on this task, beginning with the connection of my power supply to mains via the inlaid AC adapter in my tank structure. Due to the dangerously high voltages in these terminals, I followed best practices for the connecting of these wires, using crimp-on connectors for each wire connected to these terminals, as well as grounding the whole system, and including an AC adapter with a 250v fuze.


As included above, these PSU terminals have a 3d printed terminal cover plate, to provide a little extra protection from any accidental bumps into the terminals. After completing the terminal wiring of the PSU, I installed this terminal cover plate, screwing it down to the wooden plate with M3 screws. I then, with the installed PSU as a reference, found the center of the remaining chunk of the electronics compartment and installed my printed fishbowl main board mount.


Taking a break from cable management for a bit, It was time to begin the incorporation of my tank's subsystems into my plywood tank structure, beginning with my acrylic fish tank. The tank was designed to be an exact fit in this plywood structure, and after real-world fabrication, fit in the structure tight enough to stay put without adhesives of fasteners, even when upsidedown. For the installation of the acrylic tank into the plywood structure, I used four wood clamps long enough to span the width/length of both pieces, and then used the clamps to slowly and evenly press the tank into the structure so it sat flush on all four connecting walls. Following this, I then reattached the structure's laser-cut front panel with some brass furniture screws.

<center>

![](http://fabacademy.org/2021/labs/charlotte/students/theodore-warner/images/FinalProject/installedtankback.jpg)
  <figcaption>Acrylic Fish Tank Installed in Plywood Structure</figcaption>

</center>

Next, I began preparing the next subsystem of my tank, the plant box. Due to the predesigned cable management features, the process of including the necessary components here was pretty straightforward. I first routed the tank light strips along their channel, using the zip tie cable mount and cable passthrough to route the cables out the back grommet hole of the plant box. From here I routed a wire that would later be connected to the tank's water pump and finally moved onto the inlaying of the fishbowl board. Behind this board inlay is a little channel meant for the jumpers to run through while attached to the backside of the board. I connected these jumpers to their pins on my fish board, super glued them in place, and took a picture for reference later, as the wires will next be completely hidden. Then, I pressed the board into its corresponding slot, followed by its press-fit laser cut acrylic cover, and sealed around any gaps with silicon. This left me, as shown below, with a mounted sensor board with only the sensor itself exposed.


I was then ready to press this plant box into place, with all of its mounted electronics. The plant box follows the same tight press fit mounting principle as the previous acrylic tank, however instead of using clamps, I slowly worked the assembled plant box back into position, until aligned with the acrylic fish tank and plywood structure, shown below.


While pressing the plant box into position, I was sure to route and keep the structures grow light wires in their cable passthrough on the side of the plant box, yielding some nice clean cable routing across the components of the whole system.


After the installation of all this, a test of the newly installed lights was in order, and I hooked up both my tank's grow & tank lights to a power supply set to 12v and turned them on.

With the bulk of the structure assembly done, I next began the mounting and integration process, starting with the internal tank components like the pH probe. I attached both printed probe clamps to my pH probe and then used some silicone to stick it in the back left corner of my tank, where the probe cable routed up through the plant box, hidden away.


Following the pH probe, next up in the tank itself was the water pump. I first connected the pump to the plant box via both a bit of silicone tubing cut to length and then hose clamped and siliconed in place, as well as with connection between the pump's cable and the router pump wires installed previously. I then used the pump's two included mounts to stick the pump down to the tank floor with silicone.

Once all contents of the tank/plant box systems were embedded, I could move on routing their cables down to my structure's main electronics compartment. I used the 3D-printed cable clips printed earlier to route these cables down the back of my tank, between the two included wire grommets. I wrapped all of these cables with some cable wrap I had laying around from and Ender 3 mod I had done.

These routed cables run through the cable passthrough grommet on the backside of the tank and then slot through their cable route in the PSU terminal cover plate, until out the other side. From here the bulk of cable management began, starting with the power breakout system. I mounted the power breakout board on its 3D printed mount right below the fishbowl mainboard, and then connected the correct incoming and outgoing wires to their connected headers while referencing my eagle power breakout board file. Each of these cables was screwed into their terminal headers before the board was mounted down to the wooden base. From here I began the mounting of the 3 remaining pH boards, two of which sit to the left of my mainboard, and one just off-centered above. These three boards mount via press-fit mounts & their mounting holes, two boards with 3mm holes, and one with 4mm. I then connected the incoming pH probe cable to its terminal, and wired the three pH boards together, before moving onto the main data wiring. Using all of my testing media as a reference, I made the jumper connections for all of the lines in my electronics enclosure, coming from the pH board, temp/humidity sensor, LCD, and light switch, and with that had an integrated system.

Although I had wired all of my connections with mounted boards in my electronics enclosure, I finished the system integration process with some additional cable management via jumper cable mounts.

<center>

![](http://fabacademy.org/2021/labs/charlotte/students/theodore-warner/images/FinalProject/finalcablerouting.jpg)
  <figcaption>Final Cable Managed Electronics Compartment</figcaption>

</center>

... and, with all this assembly & integration work done, it was time for final testing. Below is a successful demonstration of my tank's electronics system. Just a note, in this video, my tank's pump is disconnected, because it's never good to run a water pump outside of water. Instead of leaving this pump connected during the testing of the electronics system, I tested the voltage and current from the pump cables run under the plant box.

<center>

![](https://content.instructables.com/F9A/5P7G/L3OGGX2A/F9A5P7GL3OGGX2A.jpg?auto=webp&frame=1&width=1024&height=1024&fit=bounds&md=ce684af69ce80aea9ef251592d0606da)

</center>