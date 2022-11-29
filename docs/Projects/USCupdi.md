---
hide:
  - navigation
  - toc
---

<link rel="stylesheet" href="../../assets/css/projects/project.css">

<script src="https://kit.fontawesome.com/79ff35ecec.js" crossorigin="anonymous"></script>

# FTDI2UPDI: Streamlined Serial UPDI Programmer

<div style="margin-top: -0.8em;">
  <span class="abtlinks"><a href="https://teddywarner.org/About-Me/about/"><img src="https://avatars.githubusercontent.com/u/48384497" alt="Profile Picture" class="profilepic"><span class="abt" style="font-weight: 300; padding-left: 6px;"> Teddy Warner</a><span class="abt" style="font-weight: 300; padding-left: 6px;"><span class="year">| Summer-Winter, 2021 </span>| <i class="far fa-clock"></i> 6-7 minutes</span></span></span>
</div>

---

<center>

![](../images/SerialUPDI/orderedsolderedpcbtop.jpg){width="47%"}
![](../images/SerialUPDI/orderedsolderedpcbbottom.jpg){width="49.4%"}

**FTDI2UPDI: A streamlined UPDI programmer a factor of 22 fastor than JTAG programming standards at a fraction of the cost.**

</center>

!!! example "Fabrication Tools/Techniques"

    - [ ] 2D Computer-Aided Design - Inkscape
    - [ ] PCB Design - Autodesk Eagle
    - [ ] PCB Milling
    - [ ] Surface Mount Soldering
    - [ ] Embedded Programming - Python & C++

Many modern small chipsets rely on the Unified Program and Debug Interface (UPDI), a one-wire interface allowing for the changing of fuzes, burning of bootloaders, or uploading of sketches to any AVR Dx-series parts or any modern [AVR Microcontrollers](https://www.microchip.com/en-us/products/microcontrollers-and-microprocessors/8-bit-mcus/avr-mcus). Due to their reliance on the Unified Program and Debug Interface, these parts cannot be programmed with classic ISP style programmers, and thus a UPDI enabled programmer is required. Although UPDI is the only programming option in the case of these parts, the one-wire interface is superior to the four-wire of a classic ISP programmer and allows for quicker programming setup and less cluttered boards due to fewer programming pins.

Classic JTAG progamming methods cannot monitor serial from the board and program at the same time, hindering prototyping efficency. The *FTDI2UPDI* is devoloped with two "modes" which may be switched between without impratical requring: serial programming and monitoring. It was this elimination of hassle that pushed me to create this piece of hardware, yielding a simple workflow when serial programming. 

<center>

![](../images/SerialUPDI/ftdi2updischem.png){width="100%"}
  <figcaption>First Iteration FTDI2UPDI Programmer Eagle Schematic</figcaption>

</center>

I was compelled to expand on the original shape of an FTDI serial adapter for this board, as it expands on the functionality of the adapter itself. I used Inkscape to create the board shape, allowing for meshing with an FTDI serial adapter, with the board aligning two of the sides of the adapter and then imported this board shape into Eagle and nested the components on both sides of the board, aligning the FTDI connection pins allowing for proper seating of the FTDI serial adapter with the board.

<center>

![](../images/SerialUPDI/ftdi2updiboard.png){width="100%"}
  <figcaption>First Iteration FTDI2UPDI Programmer Eagle Board</figcaption>

</center>

I manufatured the prototypes of my FTDI2UPDI on a Bantam Tools PCB mill with a 0.005" PCB engraving bit for the board's traces, and a 1/32" for its holes and outlines, yielding the milled results below.

<center>

![](../images/SerialUPDI/ftdi2updiirltop.jpg){width="47.4%"}
![](../images/SerialUPDI/ftdi2updiirlbottom.jpg){width="46%"}
![](../images/SerialUPDI/ftdi2updisolderedtop.jpg){width="45.25%"}
![](../images/SerialUPDI/ftdi2updisolderedbottom.jpg){width="48.25%"}
  <figcaption>Soldered FTDI2UPDI Prototype</figcaption>

</center>

[^1]: https://github.com/SpenceKonde/megaTinyCore
[^2]: https://github.com/SpenceKonde/megaTinyCore/blob/master/Installation.md
[^3]: https://drive.google.com/file/d/1sXxm9A5GLxVPGFNDkNBzLakp-TWlVKT2/view