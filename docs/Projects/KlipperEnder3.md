---
title: Klipper Enabled Ender 3
---

# Klipper Enabled Ender 3

**X-X minutes :octicons-book-16:**

PROJECT INTRODUCTION

## Ender 3 Modding

After recieving this Ender 3 my [second week](http://fabacademy.org/2021/labs/charlotte/students/theodore-warner/Assignments/week02/) of Fab Academy, I took some time to further modify the printer with a mixture of modifications. I upgraded the main bored from the original factory board to a [SKR Mini E3 V2](https://www.biqu.equipment/products/bigtreetech-skr-mini-e3-v2-0-32-bit-control-board-integrated-tmc2209-uart-for-ender-3), and the original factory screen I switched out to a [TFT35 Touchscreen](https://www.biqu.equipment/products/btt-tft35-e3-v3-0-display-touch-screen-two-working-modes?variant=31955093815394). Following that I added a [Bltouch](https://www.antclabs.com/bltouch) for auto bed leveling, and switched the machine from Bowen to direct drive, with this Thingiverse [design](https://www.thingiverse.com/thing:3856703). I spent some time adding some customization to the machine as well, giving the direct drive system a little nameplate.

<center>

![](../images/KlipperEnder3/directdrive.jpg){width="70%"}

</center>

Finally, I moved all of the electronics of the machine to the rear of the machine using this Thingiverse [design](https://www.thingiverse.com/thing:3688967). This mod gave the space to add a raspberry pi and a means of power for it in addation to the main board, a perfect case for a Klipper enabled machine.

<center>

![](../images/KlipperEnder3/electronicsenclouser.jpg){width="80%"}
![](../images/KlipperEnder3/installedelebox.jpg){width="80%"}

</center>

I used this Thingiverse [design](https://www.thingiverse.com/thing:2886101) to mount a raspberry pi camera to my printer's x-axis as shown in one of the pictures below. All of these modifications were done with parts printed on my [Prusa I3 Mk3S+](https://shop.prusa3d.com/en/3d-printers/181-original-prusa-i3-mk3s-3d-printer.html), and electronics I had laying around, making these printer modifications only take around three days to complete, including the time it took to print the parts.

<center>

![](../images/KlipperEnder3/ender3cam.jpg){width="80%"}

</center>

![](../images/KlipperEnder3/wholeprinter.jpg){: align=right width="30%"}

## Klipper Setup 

## Klipper Configuration

