---
title: UPDI Serial Programming
hide:
  - navigation
  - tags
template: comments.html
tags:
  - Software
  - CAD
  - Autodesk Eagle
  - PCB
  - AVR
  - Microcontroller
---

<script src="https://kit.fontawesome.com/79ff35ecec.js" crossorigin="anonymous"></script>

<style>

.profilepic {
  display: inline;
  float: left; 
  margin-top: -7px;
  width: 35px;
  height: 34px;
  border-radius: 50%;
}

.abtlinks a {
  color: var(--md-default-fg-color);
}

.share {
  float:right;
  margin-top: 0px;
  font-size: 1.1em;
}

.share a {
  color: inherit;
}

.twitter {
  padding-left: 0.2em;
  padding-right: 0.2em;
}

.share a.twitter:hover {
  color: #00acee;
}

.fb {
  padding-left: 0.2em;
  padding-right: 0.2em;
}

.share a.fb:hover {
  color: #3b5998;
}

.pin {
  padding-left: 0.2em;
  padding-right: 0.2em;
}

.share a.pin:hover {
  color: 	#E60023;
}

.ln {
  padding-left: 0.2em;
  padding-right: 0.2em;
}

.share a.ln:hover {
  color: #0e76a8;
}

.email {
  padding-left: 0.2em;
  padding-right: 1.5em;
}

@media (max-width: 40.55384615384616em) {
  .share {
    margin-top: -3.5em;
    margin-right: -1.4em;
  } 
}

@media (max-width: 37.4em) {
  .share {
    margin-top: -4.8em;
    margin-right: -1.4em;
  } 
}

 @media (max-width: 35em) {
  .year {
    display: none;
  }
  .share {
    font-size: 1em;
    margin-top: 0.05em;
    margin-right: -1.5em;
  } 
}
 
 @media (max-width: 28em) {
   .profilepic {
    margin-top: -4.5px;
    width: 30px;
    height: 30px;
  }
  .abtlinks {
    font-size: 0.9em;
   }
  .year {
    display: none;
  }
  .share {
    font-size: 0.9em;
    margin-top: 0.05em;
    margin-right: -1.5em;
  } 
}

</style>

# UPDI Serial Programming

<!--- Social Links

HTML Link Generator - https://www.websiteplanet.com/webtools/sharelink/

<span class="share" style=" color: inherit;">
<a class="fb" title="Share on Facebook" href="FACEBOOK-URL"><i class="fab fa-facebook-square"></i></a>
<a class="twitter" title="Share on Twitter" href="TWITTER-URL"><i class="fab fa-twitter"></i></a>
<a class="pin" title="Share on Pinterest" href="PINTEREST-URL"><i class="fab fa-pinterest"></i></a>
<a class="ln" title="Share on LinkedIn" href="LINKEDIN-URL"><i class="fab fa-linkedin"></i></a>
<a class="email" title="Share via Email" href="EMAIL-URL"><i class="fas fa-paper-plane"></i></a>
</span>

-->

<div style="margin-top: -0.8em;">
  <span class="abtlinks"><a href="https://teddywarner.org/About-Me/about/"><img src="https://avatars.githubusercontent.com/u/48384497" alt="Profile Picture" class="profilepic"><span class="abt" style="font-weight: 300; padding-left: 6px;"> Teddy Warner</a><span class="abt" style="font-weight: 300; padding-left: 6px;"><span class="year">| Junior Year - 2021 </span>| <i class="far fa-clock"></i> 24-31 minutes</span></span></span>
  <span class="share" style=" color: inherit;">
  <a class="fb" title="Share on Facebook" href="https://www.facebook.com/sharer/sharer.php?u=https://teddywarner.org/Projects/SerialUPDI/"><i class="fab fa-facebook-square"></i></a>
  <a class="twitter" title="Share on Twitter" href="https://twitter.com/intent/tweet?url=https://teddywarner.org/Projects/SerialUPDI/&text=Check%20Out%20UPDI%20Serial%20Programming%20on"><i class="fab fa-twitter"></i></a>
  <a class="pin" title="Share on Pinterest" href="https://pinterest.com/pin/create/button/?url=https://teddywarner.org/Projects/SerialUPDI/&media=&description=Check%20Out%20UPDI%20Serial%20Programming%20on%20https://teddywarner.org/Projects/SerialUPDI/%20!"><i class="fab fa-pinterest"></i></a>
  <a class="ln" title="Share on LinkedIn" href="https://www.linkedin.com/shareArticle?mini=true&url=https://teddywarner.org/Projects/SerialUPDI/"><i class="fab fa-linkedin"></i></a>
  <a class="email" title="Share via Email" href="mailto:info@example.com?&subject=&cc=&bcc=&body=Check%20Out%20UPDI%20Serial%20Programming%20on%20https://teddywarner.org/Projects/SerialUPDI/%20!"><i class="fas fa-paper-plane"></i></a>
  </span>
</div>

---

Many modern small chipsets rely on the Unified Program and Debug Interface (UPDI), a one-wire interface allowing for the changing of fuzes, burning of bootloaders, or uploading of sketches to any AVR Dx-series parts or any modern [AVR Microcontrollers](https://www.microchip.com/en-us/products/microcontrollers-and-microprocessors/8-bit-mcus/avr-mcus). Due to their reliance on the Unified Program and Debug Interface, these parts cannot be programmed with classic ISP style programmers, and thus a UPDI enabled programmer is required. Although UPDI is the only programming option in the case of these parts, the one-wire interface is superior to the four-wire of a classic ISP programmer and allows for quicker programming setup and less cluttered boards due to fewer programming pins. This USB-C UPDI programmer is built with a [Ft232rl](https://ftdichip.com/products/ft232rl/) chip allowing for serial interfacing, and runs alongside the [megaTinyCore](https://github.com/SpenceKonde/megaTinyCore) library witch equips your IDE for serial UPDI programming via a portable python implementation.

## [megaTinyCore](https://github.com/SpenceKonde/megaTinyCore) Documentation

In short, the [megaTinyCore](https://github.com/SpenceKonde/megaTinyCore) library is "An Arduino core for the tinyAVR 0-series, 1-series, and now the 2-series"[^1]. The [megaTinyCore](https://github.com/SpenceKonde/megaTinyCore) project was created and maintained by [SpenceKonde](https://github.com/SpenceKonde). As mentioned above, the library equips your IDE for UPDI programming via a portable python installation and can be used alongside a handful of different programmer types. The USB-C UPDI Serial programmer documented alter on this page is currently the optimal choice out of these options due to its low component requirement and faster speeds than other programmers. In addition to serial programmers, One can use a 328p based board as a programmer (i.e. an Arduino or any of its clones) via [megaTinyCore's](https://github.com/SpenceKonde/megaTinyCore) *jtag2updi* sketch, or a designated microchip programming board or and UPDI programming tool that mimicks any listed above. [Dr. Adam Harris](http://sheekgeek.org/), a mentor of mine during my cycle of [Fab Academy](https://fabacademy.org/) has a [Simple Fab-jtag2UPDI Board](http://sheekgeek.org/2020/adamsheekgeek/simple-fab-jtag2updi-board) project where a 328p based board is used alongside the jtag2UPDI sketch and is a great option when creating an In-Circuit programmer though the library. I manufactured this board during my [Electronics Production](https://fabacademy.org/2021/labs/charlotte/students/theodore-warner/Assignments/week04/) and continued to use it for the next 16 weeks of the course.

### Package Installation

!!! abstract "Software Requirement"

    **Arduino 1.8.13 is recommended** for use with the [megaTinyCore](https://github.com/SpenceKonde/megaTinyCore) library

Recent updates to the [megaTinyCore](https://github.com/SpenceKonde/megaTinyCore) library have simplified the installation process significantly. The library relies upon a board package that can be installed via the board manager witch can be installed with 3 simple steps included below[^2].

```

http://drazzy.com/package_drazzy.com_index.json

```

 1. File -> Preferences, enter the above URL in *Additional Boards Manager URLs*
 2. Tools -> Boards -> Boards Manager...
 3. Select *megaTinyCore by Spence Konde* and click "Install". For best results, choose the most recent version.

### jtag2UPDI Programming

![Promotion](https://img.shields.io/badge/-No%20Longer%20Recommended-critical?style=flat-square)

As mentioned prior, *jtag2updi* is a sketch from the [megaTinyCore](https://github.com/SpenceKonde/megaTinyCore) library, allowing for the use of a 328p-based board (i.e. Arduino or a clone) as an In-Circuit programmer. To begin with, this programming approach, download the latest version of the *jtag2udpi* sketch via the button below (Code -> *Download Zip*).

<center>

[Download the Latest jtag2udpi Sketch :fontawesome-solid-download:](https://github.com/SpenceKonde/jtag2updi){ .md-button .md-button--primary }

</center>

Extract the contents of this downloaded sketch folder by first unzipping the downloaded folder and next moving the contained sketch folder in the unzipped folder to a separate location. Finally, **Rename this sketch folder to *jtag2updi***, leaving you with a folder similar to the one circled in red in the image below.

<center>

![](../images/SerialUPDI/foldernaming.png){width="95%"}

</center>

Inside of this *jtag2updi* folder, navigate to the *jtag2UPDI.ino* project - circled and highlighted below - and open it in your IDE. 

<center>

![](../images/SerialUPDI/projectopen.png){width="95%"}

</center>

This will open the *jtag2updi* project file system, leaving you with a blank *jtag2updi* sketch followed by multiple file tabs in your IDE (like shown in the picture below).

<center>

![](../images/SerialUPDI/blankjtagsketch.png){width="95%"}

</center>

You can next upload this sketch to your 328p-based board of choice as you would any other sketch. 

!!! tip "Tip"

    As a first test to confirm the successful upload of this sketch to your board, hook up an LED to pin 6 of the board. If the board is successfully programmed, the LED will be dimly lit as shown below. **This simple test eliminates a potential error while troubleshooting a project, and confirms the programmer's working condition.**
    <center>
    ![](../images/SerialUPDI/jtagtest.jpg){width="95%"}
    </center>

Once a board is programmed with the *jtag2updi* project, it will act as a programmer until the next sketch is uploaded, unless the board's reset line is cut.

#### jtag2UPDI Usage

To make use of a *jtag2updi* enabled In-Circuit programmer board, prepare a sketch in your IDE to upload to your desired board. For documentation purposes, I'll be uploading the simple blink sketch included below to a super simple ATtiny 412 based LED board I made in [week 4](https://fabacademy.org/2021/labs/charlotte/students/theodore-warner/Assignments/week04/#blinky-test-board) of my Fab Academy cycle and documenting it for use with the Arduino IDE.

``` c++ linenums="1"
void setup() {
  pinMode(0, OUTPUT);
}

void loop() {
  digitalWrite(0, HIGH); 
  delay(500);
  digitalWrite(0, LOW); 
  delay(500); 
}
```

To upload code to your board via your *jtag2updi* enabled In-Circuit programmer board ...

 1. Wire your board to your *jtag2updi* In-Circuit Programmer board - UPDI pin of the board to pin 6 of *jtag2updi* In-Circuit Programmer board with an inline 100-470 ohm resistor running between the UPDI pin and the In-Circuit Programmer, VCC to VCC, and GND to GND
 2. Under the *Tools* menu in the Arduino IDE, change your board to your board's chipset by navigating to the *megaTinyCore* board menu via *Tools -> Board -> megaTinyCore* and then selecting your chip group from the list. 
 3. Next, specify your chip type under the *Chip* menu via *Tools -> Chip*. 
 4. For use with you *jtag2updi* In-Circuit Programmer board, change the programmer option to *Tools–>Programmer –> jtag2updi*
 5. Change your COM port to connect via serial to your In-Circuit Programmer board if not already connected
 6. Finally, upload your sketch via the ***Upload Using Programmer*** button found under the IDE's *Sketch* menu - Not with the normal upload button (this will override your programmers *jtag2updi* sketch if done).

!!! example "Example"
    Following these steps on my simple ATtiny 412 board yielded the 1/2 second blink example below. 
    <center>
    <iframe width="100%" height="500" src="https://www.youtube.com/embed/vvL9G3BIThU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </center>

!!! success "Congrats!"

    You can now program any modern [AVR Microcontrollers](https://www.microchip.com/en-us/products/microcontrollers-and-microprocessors/8-bit-mcus/avr-mcus) via UPDI and a *jtag2updi* enabled 328p-based board. 

### Serial Programming

![Promotion](https://img.shields.io/badge/-Recommended-success?style=flat-square)

!!! info "Serial UPDI Programming with megaTinyCore"

    Version 2.2.0 of the [megaTinyCore](https://github.com/SpenceKonde/megaTinyCore) library brings the implementation of a portable python implementation. This installation, based on [pymcuprog](https://pypi.org/project/pymcuprog/), **allows for a programming speed increase by a factor of 20** when compared to the prior *jtag2udpi* programming style. With this performance increase in addition to a smaller & cheaper hardware list, Serial UDPI programming with the [megaTinyCore](https://github.com/SpenceKonde/megaTinyCore) library is the most optimal form of programming I've used on my boards to date.


The serial programming style relies on this prior mentioned portable python installation alongside a USB-Serial adapter acting as the programmer in this case. Though this section of the page will document this programming style via a pre-made USB-Serial adapter (in this case an FTDI chip) and some other hardware bits, please note the [USB-C UPDI Serial Programmer](https://teddywarner.org/Projects/SerialUPDI/#usb-c-updi-programmer-manufacturing) board documented later on this page - this board is a set hardware piece for this Serial UPDI programming style, and provides a permanent hardware programming board. To engage the Serial UPDI programming method without a board like this you'll need the required hardware...

 1. A USB-Serial Adapter - I'll be using an FTDI FT232 for this documentation, but boards based on the CH340G or the CP210 chips work great as well
 2. Some Jumper Wires
 3. A Schottky Diode - I tacked some leads to an SMD package (as shown below), but if you can get your hands on a through-hole package, that works great as well.
 <center>
![](../images/SerialUPDI/diodeleads.jpg){width="95%"}
</center>
 4. A 470-ohm Resistor - If creating a UPDI programmable board, incorporate this resistor into your schematic using the pinout below, running the 470-ohm resistor inline to the UPDI pin. Any value between 100 and 1k ohms will do here, but 470 is the optimal value.

``` title="Target Board Programming Headers"
      __________________
-----| UPDI---\/\/------>
-----| Gnd    470 ohms (100 ~ 1k)
-----| Vcc
     |__________________
```

If not creating your own board, and there's no inline UPDI resistor, you'll need to include this resistor externally. With that said, wiring between your serial adapter and the target device is diagrammed in the schematics below.

 - VCC of Adapter to VCC of Target
 - GND of Adapter to GND of Target
 - Schottky Diode between the Rx & Tx of Serial Adapter (Cathode to Tx)
 - Rx of Adapter to UPDI of Target - Here include the 470 ohms resistor as needed 

``` title="Ideal - internal resistor in the adapter - not more than 1k"
--------------------                                 To Target device
                DTR|                                  __________________
    internal    Rx |--------------,------------------| UPDI---\/\/------>
  Tx---/\/\/\---Tx |-------|<|---'          .--------| Gnd    470 ohms (100 ~ 1k)
    resistor    Vcc|---------------------------------| Vcc
  typ. 1k       CTS|                     .`          |__________________
                Gnd|--------------------'             If you make a 3-pin connector, use this pinout
--------------------

or

--------------------                                 To Target device
                DTR|     External 470 ohms (100 ~ 1k) __________________
    internal    Rx |--------------,--\/\/------------| UPDI------------->
  Tx---/\/\/\---Tx |-------|<|---'          .--------| Gnd
    resistor    Vcc|---------------------------------| Vcc
  typ 1k        CTS|                     .`          |__________________
                Gnd|--------------------'
--------------------
```

``` title="Or with no internal resistor on the adapter - as long as the target has one"
--------------------                                 To Target device
                DTR|                                  __________________
       no       Rx |--------------,------------------| UPDI---\/\/------>
    internal    Tx |-------|<|---'          .--------| Gnd    470 ohms (100 ~ 1k)
    resistor    Vcc|---------------------------------| Vcc
                CTS|                     .`          |__________________
                Gnd|--------------------'
--------------------
```

I rigged up the second included schematic on a breadboard as unfortunately the blinky board I'm programming doesn't have a valid inline resistor I can use. 

<center>

![](../images/SerialUPDI/SerialBreadboardWired.jpg){width="95%"}
  <figcaption>Serial Programmer Setup on a Breadboard</figcaption>

</center>

#### Serial Programmer Usage

To program via your USB-Serial setup ...

 1. Navigate to the *Tools -> Programmer* menu and select an iteration of the *Serial-UPDI* options (Based on upload speeds, the tinyAVR core offers 57600 baud, 230400 baud, and 460800 baud options - thus the different speed settings)
 2. Then, under *Tools -> Port* select the port connected to your USB-Serial adapter, if not already selected
 3. Finally, upload your sketch via the *Upload* button and watch as your board is programmed at lightning speeds!

!!! warning "Note - this serial programmer setup does not give you a serial monitor"

    You'll need to connect a serial adapter the normal way for that. **The later documented [USB-C UPDI Serial Programmer](https://teddywarner.org/Projects/SerialUPDI/#usb-c-updi-programmer-manufacturing) & [ftdi2updi](https://teddywarner.org/Projects/SerialUPDI/#ftdi2updi) boards provide a switching feature between a serial programming and serial monitoring mode, allowing for all programming and monitoring work to be done without rework of connections.** Be sure to check out the specific [USB-C UPDI Serial Programmer usage](https://teddywarner.org/Projects/SerialUPDI/#programmer-usage) section for use of this feature.


!!! example "Example"

    For this example, I modified my prior used blink sketch to run a 5-second delay as opposed to the prior 0.5 seconds...

    ```c++ linenums="1"
    void setup() {
      pinMode(0, OUTPUT);
    }

    void loop() {
      digitalWrite(0, HIGH); 
      delay(5000);
      digitalWrite(0, LOW); 
      delay(5000); 
    }
    ```

    I uploaded this via the three-step process listed above, yielding the successful results below.

    <center>
    <iframe width="100%" height="500" src="https://www.youtube.com/embed/kzWAhotTQuY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </center>

!!! success "Congrats!"

    You can now program any modern [AVR Microcontrollers](https://www.microchip.com/en-us/products/microcontrollers-and-microprocessors/8-bit-mcus/avr-mcus) via UPDI with a simple USB-Serial adapter with a speed increase by a factor of twenty when compared with the prior *jtag2updi* method.

## UPDI Serial Programmer Manufacturing

I made countless PCBs during my cycle of the [Fab Academy](https://fabacademy.org/), one of the first being a tool to program the rest, an [In-Circuit Programmer](http://fabacademy.org/2021/labs/charlotte/students/theodore-warner/Assignments/week04/#in-circuit-programmer). Being one of the first boards I fabricated myself, from the PCB milling to soldering & stuffing, I hadn't yet taken up the practice of designing my boards, and for this assignment, fabricated the [In-Circuit Programmer](http://fabacademy.org/2021/labs/charlotte/students/theodore-warner/Assignments/week04/#in-circuit-programmer) design of one of my mentors, [Dr. Adam Harris](http://sheekgeek.org/). This board is a specialized Arduino-like board, running on an ATMega 328p with a programmer sketch provided by the [megaTinyCore](https://github.com/SpenceKonde/megaTinyCore) library. 

!!! abstract "Project Origins"

    The [In-Circuit Programmer](http://fabacademy.org/2021/labs/charlotte/students/theodore-warner/Assignments/week04/#in-circuit-programmer) I fabricated in Fab Academy's operation is great, but due to new updates in the [megaTinyCore](https://github.com/SpenceKonde/megaTinyCore) library, the process can be optimized for faster speeds, and the board size and component requirements can be reduced. This board marks my first steps into the world of multi-layered PCB design and fabrication, a process I'm super pumped to pick up and apply to future projects.

The USB-C UPDI Programmer is a specialized piece of hardware for use with the prior discussed [serial programming](https://teddywarner.org/Projects/SerialUPDI/#serial-programming) method and has a couple of advantages over rigging a programmer up on a breadboard. A permanent piece of the hardware enables the serial programming method to require a bit less setup, once the board has been made. Following that, this board includes "modes", allowing switching between serial programming and monitoring functions. When rigging a serial programmer up via a USB-serial adapter as documented prior, you cannot monitor serial from the board at the same time, but instead are required to require the board to the USB-serial adapter. The switching of "modes" on this programmer eliminates this extra hassle, handling all the required connections at the flip of a switch located on the board's underside.

### USB-C UPDI Design

It was this elimination of hassle that pushed me to create this piece of hardware, yielding a simple workflow when serial programming. The USB-C UPDI Serial Programmer is based on the *FT232RL*[^3] IC, handling the USB protocol and USB to serial data transfer on the programmer. 

<iframe src="https://drive.google.com/file/d/1sXxm9A5GLxVPGFNDkNBzLakp-TWlVKT2/preview" width="100%" height="500" allow="autoplay"></iframe>

The *FT232RL* is broken out following the same wiring principals diagrammed in the prior [serial programming](https://teddywarner.org/Projects/SerialUPDI/#serial-programming) documentation, converting the IC's *Rx* and *Tx* lines to a UPDI line, routed to a programming pin. Just before this *Rx* and *Tx* junction, a Double-Pole Double-Through switch allows for the switching of this conversion to UPDI to straightforward *Rx* and *Tx* lines, routed each to their corresponding pin. Thus, the programmer board includes a UPDI, *Rx*, and *Tx* output pin, in addition to a VCC and GND line. This 5 pin programming pinout can be mimicked on any board containing a [AVR Microcontroller](https://www.microchip.com/en-us/products/microcontrollers-and-microprocessors/8-bit-mcus/avr-mcus), allowing for programming and monitoring functions to be switched without reworking connections between the programmer and board.

<center>

![](../images/SerialUPDI/ICPSchem1.png){width="100%"}
  <figcaption>USB-C UPDI Programmer Eagle Schematic</figcaption>

</center>

Then came the nesting process. Being my first double-sided board in Eagle, it took some work to get used to the use of vias between sides, but eventually, I worked out the process of changing Via's drill class through Eagle's *Change -> Drill* tool. I ended up using 0.6mm rivets for this board's vias, using 8 on the board in total. I nested bards on the board, including both the *FT232RL* and the USB-C female adapter on the top side, along with some smoothing capacitors, and on the bottom, the UPDI programming component array, as well as the DPDT switch.

<center>

![](../images/SerialUPDI/ICPTop1.png){width="100%"}
![](../images/SerialUPDI/ICPBottom1.png){width="100%"}
![](../images/SerialUPDI/ICPLayered1.png){width="100%"}
  <figcaption>USB-C UPDI Programmer Eagle Board</figcaption>

</center>

The nesting of the two highest pinout parts on the board's topside inspired my next experiment with this board, [Solder Paste Stencil](https://www.sparkfun.com/tutorials/383) making. Although I feel pretty confident in my SMD soldering skills, soldering pads this small wouldn't only be a hassle, it would also be tedious time waste, and thus I settled on a solder paste stencil approach for the boards topside, while hand soldering the bottom half. I exported the *Tcream* layer of my programmer board from Eagle as a *.pdf* for cutting of the stencil from cardstock on a [Epliog Fusion Pro 48](https://teddywarner.org/Machine-Profiles/FusionPro48/) laser.

<center>

![](../images/SerialUPDI/topstencil.png){width="100%"}
  <figcaption>Tcream board layer in Eagle</figcaption>

**Bill of Matierals - USB-C UPDI**

|Qty.| Part | Cost | URL |
|--|----|---|---|
|x1|SMD DPDT Switch|$1.50|[link](https://www.sparkfun.com/products/597)|
|x1|CDBM1100-G|$0.39|[link](https://www.digikey.com/en/products/detail/CDBM1100-G/641-1331-1-ND/2021252?utm_campaign=buynow&utm_medium=aggregator&curr=usd&utm_source=octopart)|
|x1|470 ohm SMD Resistor|$0.10|[link](https://www.digikey.com/en/products/detail/CRCW1206470RFKEA/541-470FCT-ND/1181722?utm_campaign=buynow&utm_medium=aggregator&curr=usd&utm_source=octopart)|
|x1|1.5k ohm SMD Resistor|$0.10|[link](https://www.digikey.com/en/products/detail/RC1206JR-071K5L/311-1.5KERCT-ND/732145?utm_campaign=buynow&utm_medium=aggregator&curr=usd&utm_source=octopart)|
|x1|100nf SMD Cap|$0.18|[link](https://www.digikey.com/en/products/detail/12061C104KAT2A/478-1529-1-ND/564561?utm_campaign=buynow&utm_medium=aggregator&curr=usd&utm_source=octopart)|
|x1|1uf SMD Cap|$0.10	|[link](https://www.digikey.com/en/products/detail/12063C105KAT2A/478-1567-1-ND/564599?utm_campaign=buynow&utm_medium=aggregator&curr=usd&utm_source=octopart)|
|x1|DX07S016JA1R1500|$1.59|[link](https://www.digikey.com/en/products/detail/DX07S016JA1R1500/670-DX07S016JA1R1500CT-ND/11586676?utm_campaign=buynow&utm_medium=aggregator&curr=usd&utm_source=octopart)|
|x1|FT232RL|$4.19|[link](https://uk.rs-online.com/web/p/multiprotocol-transceivers/0406580?cm_mmc=aff2-_-uk-_-octopart-_-Instock406580)|
|x11|Header Pins|$0.14|[link](https://www.amazon.com/MCIGICM-Header-2-45mm-Arduino-Connector/dp/B07PKKY8BX/ref=sr_1_5?keywords=male+headers&qid=1639060454&sr=8-5)|
|x1|Copper PCB Blank|$0.70|[link](https://www.amazon.com/MCIGICM-Copper-Laminate-Circuit-Single/dp/B01MCVLDDZ/ref=sr_1_1?keywords=copper+pcb+blank&qid=1639060805&sr=8-1)|

Total Cost- **$8.99**

</center>

### ftdi2updi Design

In addition to the prior USB-C UPDI Serial Programmer board, I created an alternative hardware programmer that makes use of a pre-existing FTDI chip, enabling it with the same switching functions feature as the prior board. This provided a workaround to 2021's silicone shortage, as due to backed-up supply chains, I wasn't able to get my hands on the FT232RL right away.

The board's schematic is a cloned iteration of the prior programmer, but with the USB-C & FT232RL components removed, and replaced with headers for connection to an FTDI adapter, yielding the schematic below.

<center>

![](../images/SerialUPDI/ftdi2updischem.png){width="100%"}
  <figcaption>First Iteration ftdi2updi Programmer Eagle Schematic</figcaption>

</center>

I was compelled to expand on the original shape of an FTDI serial adapter for this board, as it expands on the functionality of the adapter itself. I used Inkscape to create the board shape, allowing for meshing with an FTDI serial adapter, with the board aligning two of the sides of the adapter and then imported this board shape into Eagle via an *ulp* as documented on my [Fab Academy Final Project](https://fabacademy.org/2021/labs/charlotte/students/theodore-warner/Final%20Project/final-project/#main-board-eagle-prototyping-and-design) page. I then nested the components on both sides of the board, aligning the FTDI connection pins allowing for proper seating of the FTDI serial adapter with the board.

<center>

![](../images/SerialUPDI/ftdi2upditop.png){width="100%"}
![](../images/SerialUPDI/ftdi2updibottom.png){width="100%"}
![](../images/SerialUPDI/ftdi2updiboard.png){width="100%"}
  <figcaption>First Iteration ftdi2updi Programmer Eagle Board</figcaption>

**Bill of Matierals - ftdi2updi**

|Qty.| Part | Cost | URL |
|--|----|---|---|
|x1|SMD DPDT Switch|$1.50|[link](https://www.sparkfun.com/products/597)|
|x1|CDBM1100-G|$0.39|[link](https://www.digikey.com/en/products/detail/CDBM1100-G/641-1331-1-ND/2021252?utm_campaign=buynow&utm_medium=aggregator&curr=usd&utm_source=octopart)|
|x1|470 ohm SMD Resistor|$0.10|[link](https://www.digikey.com/en/products/detail/CRCW1206470RFKEA/541-470FCT-ND/1181722?utm_campaign=buynow&utm_medium=aggregator&curr=usd&utm_source=octopart)|
|x11|Header Pins|$0.14|[link](https://www.amazon.com/MCIGICM-Header-2-45mm-Arduino-Connector/dp/B07PKKY8BX/ref=sr_1_5?keywords=male+headers&qid=1639060454&sr=8-5)|
|x1|Copper PCB Blank|$0.70|[link](https://www.amazon.com/MCIGICM-Copper-Laminate-Circuit-Single/dp/B01MCVLDDZ/ref=sr_1_1?keywords=copper+pcb+blank&qid=1639060805&sr=8-1)|
|x1|FTDI Serial Adapter|$14.95|[link](https://www.sparkfun.com/products/9716)|

Total Cost (W/out FTDI)- **$2.83** 
</br>
Final Cost- **$17.78**

</center>

### Fabrication & Testing

#### ftdi2updi

I milled my boards with a Bantam PCB mill and its [Bantam Tools Desktop Milling Machine Software](https://www.bantamtools.com/software-download). The software handles all toolpath generation from my Eagle board file, and conveniently, when paired with Bantam's PCB placement bracket, also handles the double-sided board milling process via a toggle switch in the interface. I followed the same milling process I have documented on my [week 4](http://fabacademy.org/2021/labs/charlotte/students/theodore-warner/assignments/week04/#blinky-test-board) Fab Academy page, however after the top-side traces and holes were milled, I flipped the copper stock, aligning to the right-hand corner of the PCB alignment bracket as opposed to the left, and toggled the board to its bottom side in the [Bantam Tools Desktop Milling Machine Software](https://www.bantamtools.com/software-download). With the stock realigned, I repeated the same milling process for the bottom side of the board. This whole process is showcased in [this view](https://www.youtube.com/watch?v=DCGLEa2UUaY) from Bantam.

I used a 0.005" PCB engraving bit for the ftdi2updi's traces, and a 1/32" for its holes and outlines, yielding the milled results below.

<center>

![](../images/SerialUPDI/ftdi2updiirltop.jpg){width="47.4%"}
![](../images/SerialUPDI/ftdi2updiirlbottom.jpg){width="46%"}

</center>

After the milling, I washed off my board with some soap and water. The [Bantam Tools Desktop Milling Machine Software](https://www.bantamtools.com/software-download) makes the milling of double-sided boards super straightforward, not much harder than a single-sided PCB, however, the boards require the extra step of riveting vias between both sides of the board before soldering. This article on [PCB Rivets](http://fab.cba.mit.edu/classes/863.16/doc/tutorials/PCB_Rivets/) from the Fab Docs walks through the process down into a couple of steps.

First the via has to be inserted into its corresponding hole, I used 0.6mm vias here. Then I used a V-Shaped nail to chamfer the top of the via and finally pressed it flush with a flat press, each step shown in the three images below.

<center>

![](../images/SerialUPDI/viasstep1.jpg){width="31.5%"}
![](../images/SerialUPDI/viasstep2.jpg){width="31.5%"}
![](../images/SerialUPDI/viasstep3.jpg){width="31.5%"}

</center>

Finally, to ensure a proper connection, I soldered over each side of the via and repeated this process for all four of the board's vias.

<center>

![](../images/SerialUPDI/solderedviasbottom.jpg){width="49.3%"}
![](../images/SerialUPDI/solderedviastop.jpg){width="47%"}
  <figcaption>Boards with Vias</figcaption>

</center>

I finished the stuffing and soldering of this board, a simple enough process due to the small component size. 

!!! warning "Note"

    The board that is being documented here is an early iteration of the ftdi2updi and contains an extra resistor, and thus your final board may not look exactly like the ones on this page until the *Programmer Usage* section.

<center>

![](../images/SerialUPDI/ftdi2updisolderedtop.jpg){width="47%"}
![](../images/SerialUPDI/ftdi2updisolderedbottom.jpg){width="50%"}

</center>

I ran two tests on the ftdi2updi, one proving each of the board's functions. 

!!! example "Programming Test"

    Beginning with its programming function, I uploaded a modified version of the same blink test sketch used above to my simple LED board ...

    ``` c++ linenums="1"
    void setup() {
      pinMode(0, OUTPUT);
    }

    void loop() {
      digitalWrite(0, HIGH); 
      Serial.println('ON')
      delay(5000);
      digitalWrite(0, LOW); 
      Serial.println('OFF')
      delay(5000); 
    }
    ```

    I uploaded this via the *Programmer Usage* process documented in the corresponding section below. The first upload was successful at a medium (230400) baudrate. Then I uploaded the test, and repeated it at the highest (TURBO 4.5v + 460800) baudrate, yielding the successful results below. 

    <center>
    <iframe width="100%" height="500" src="https://www.youtube.com/embed/eTtsF79EW4c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </center>

!!! warning "Note"

    The ftdi2updi serial adapter meshing headers were reversed in this iteration, and thus I attached the serial adapter upsidedown for this test, the proper orientation as outlined in the following *Programmer Usage* section.

!!! example "Serial Monitoring Test"

    Next, I switched the programmer to its monitoring mode and hooked it up to Arduino *RX* & *TX* pins, shown below. Unfortunately, my simple LED board doesn't have serial communication pins, and thus this Arduino was my next best testing option.

    <center>

    ![](../images/SerialUPDI/serialtestwireing.jpg){width="95%"}

    </center>

    I uploaded this super simple serial print sketch to the Arduino ...

    ``` c++ linenums="1"
    void setup(){
      Serial.begin(9600);
    }

    void loop(){
      Serial.println("Hello World");
      delay(5000);
    }
    ```

    and then opened the Arduino IDE's serial monitor on my ftdi2updi port, which successfully read the serial output printed, shown below - and also was able to transmit via serial, shown by the Arduinos receiving LED. 

    <center>
    <iframe width="100%" height="500" src="https://www.youtube.com/embed/MHLoW-Os5n0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </center>

Although this first iteration of the ftdi2updi worked, there were a couple of design flaws (Noted above) I've flatted out in later versions including - a reversed FTDI header, oversized vias, an unnecessary 1k resistor, and improper meshing with an existing FTDI serial adapter. **The final version of this programmer (and its CAM files) can be accessed in the repo linked by the download button at the bottom of the *Fabrication & Testing* section.** Use this version as refrence whilst fabricating your own board.

I ordered a couple of these final iteration boards from a PCB fab ...

<center>

![](../images/SerialUPDI/orderedpcbtop.jpg){width="47%"}
![](../images/SerialUPDI/orderedpcbback.jpg){width="45.4%"}

</center>

Which turned out incredible. The Gerber files for these boards are included in the Repo linked via the download button at the bottom of the *Fabrication & Testing* section, along with an Eagle board file with silkscreen decals instead of milled ones. I soldered the components to this board, a process made even easier by the already plated vias, and lack of need to insert my own.

<center>

![](../images/SerialUPDI/orderedsolderedpcbtop.jpg){width="47%"}
![](../images/SerialUPDI/orderedsolderedpcbbottom.jpg){width="49.4%"}
  <figcaption>ftdi2updi Front and Back</figcaption>

</center>

#### USB-C UPDI

!!! warning "Pending Compleation"

    As mentioned prior, due to 2021's supply chain limitations, I cannot currently get my hands on an FT232RL, and thus, for now, the *fabrication & testing* sections will only include my *ftdi2upid* board. **This section will be updated by future me once I can get an FT232RL.**

!!! danger "This USB-C UPDI Programmer Board is not yet complete"

    Although you can download its files, the board is still in development and may not function properly. Again, this section will be updated upon its completion.

<center>

![](../images/SerialUPDI/2ndgenmileldtop.jpg){width="48%"}
![](../images/SerialUPDI/2ndgenmilledbottom.jpg){width="45.95%"}

</center>

 - Process Type - Vector
 - Speed - 100.0%
 - Power - 19.0%
 - Frequency - 6.0%

<center>

![](../images/SerialUPDI/pastestencil.jpg){width="95%"}

</center>

<center>

![](../images/SerialUPDI/pasteapplication.jpg){width="95%"}

</center>

<center>

![](../images/SerialUPDI/2ndgensolderdtop.jpg){width="48%"}
![](../images/SerialUPDI/2ndgensolderedbottom.jpg){width="48%"}

</center>

<center>

![](../images/SerialUPDI/3genmilledtop.jpg){width="48%"}
![](../images/SerialUPDI/3rdgenmilledback.jpg){width="47.35%"}

</center>

<center>

![](../images/SerialUPDI/3rdgensolderedtop.jpg){width="48%"}
![](../images/SerialUPDI/3rdgensolderedback.jpg){width="48.4%"}

</center>



<center>

[Download the UPDI Serial Programmers Project Files :fontawesome-solid-download:](https://github.com/Twarner491/project-files/tree/main/USB-C%20UPDI){ .md-button .md-button--primary }

</center>

## Programmer Usage

Serial programming with the megaTinyCore library is incredibly straightforward, and when pair with the switching functionality of both of my hardware programmers, the process is streamlined. I'll be using a final iteration ftdi2updi board for this *Programmer Usage* documentation, however, **these steps will work for either programmer style included on this page, regardless of fabrication technique.**

Both Serial UPDI programmers rely on the prior documented [megaTinyCore](https://github.com/SpenceKonde/megaTinyCore) library, which must be installed for programmer usage. This process is outlined in the [Package Installation](https://teddywarner.org/Projects/SerialUPDI/#package-installation) section of this page.

### Programming

To use the UPDI programming function, toggle the programmers switch to *UPDI* as shown below, and then connect UPDI and GND lines to their corresponding pins. Here you can also run a VCC line to your target board, which provides 5v, shown in the wiring below. 

!!! note "Note" 

    Connecting serial data lines here is totally ok, as the switch disconnects them from communication when in programming mode. The wiring shown here is just the required connections for UPDI programming.

<center>

![](../images/SerialUPDI/updiswitch.jpg){width="85%"}
  <figcaption>Switched to Progamming Mode</figcaption>
![](../images/SerialUPDI/updiwireing.jpg){width="85%"}
  <figcaption>Minimum Wiring for UPDI Programming</figcaption>

</center>

Once connections are made between the programmer and the target board, you must configure your target board in your IDE. For this documentation, I'll continue using the Arduino IDE, however other IDEs with the megaTinyCore installed can be used for this (I may do some tests with PlatformIO in the future, and will update this page accordingly). 

First, you must select your target board's microcontroller by navigating to ...

```
Tools > Board > megaTinyCore
```

and then selecting your microcontroller from the list, shown in the image below.

<center>

![](../images/SerialUPDI/boardselection.jpg){width="95%"}

</center>

Next, connect your programmer to your computer via a serial cable and, select your serial port by navigating to ...

```
Tools > Port
```

and then select the serial port your programmer board is connected to (In my case this port was *COM11* - shown below). If you're on windows, you can find this connection on *Device Manager* before your selection in the IDE.

<center>

![](../images/SerialUPDI/portselection.jpg){width="95%"}

</center>

Finally, select your programming style. For all programmers documented on this page, the *Serial UPDI w/ 4.7k resistor or diode* series of styles are used, and you can select between three baudrate/speed options (highlighted in the image below) ...

 - SLOW (57600 baud)
 - (230400 baud)
 - (TURBO 4.5v + 460800 baud)

<center>

![](../images/SerialUPDI/programmerselection.jpg){width="95%"}

</center>

### Monitoring

To use the serial monitoring function, toggle the programmers switch to *Serial* as shown below, and then connect Transmitting and Receiving Data lines as well as GND to their corresponding pins. ***Keep in Mind RX and TX lines must be switched between the programmer board and the target,*** with Transmitting of one going to Receiving of the other and vise versa. Here, as prior, you can also run a VCC line to your target board, which provides 5v. 

!!! note "Note"

    Connecting the UPDI line here is totally ok, as the switch disconnects it from communication when in monitoring mode. The wiring shown here is just the required connections for Serial monitoring.

<center>

![](../images/SerialUPDI/serialswitch.jpg){width="85%"}
  <figcaption>Switched to Monitoring Mode</figcaption>
![](../images/SerialUPDI/serialwireing.jpg){width="85%"}
  <figcaption>Minimum Wiring for Serial Monitoring</figcaption>

</center>

To begin serial monitoring through the programmer in the Arduino IDE, first, ensure your programmer is connected to your computer via a serial cable, and the proper boart is selected in the IDE (as done in the prior programming section - and highlighted below). Then navigate to ...

```
Tools > Serial Monitor 
```

as selected in the picture below

<center>

![](../images/SerialUPDI/serialmonitroselection.jpg){width="95%"}

</center>

This will open the IDE's serial terminal, where incoming serial data is printed, and outgoing data can be transmitted via the input at the top of the window. I wired a programmer to a simple *"Hello World"* printing Arduino, yielding the received results below.

<center>

![](../images/SerialUPDI/serialmonitor.jpg){width="95%"}

</center>

!!! success "Congrats!"

    You now know the methods to UPDI programming with the [megaTinyCore](https://github.com/SpenceKonde/megaTinyCore) library, and may have a cool hardware programmer to show for it :grin:.

[^1]: https://github.com/SpenceKonde/megaTinyCore
[^2]: https://github.com/SpenceKonde/megaTinyCore/blob/master/Installation.md
[^3]: https://drive.google.com/file/d/1sXxm9A5GLxVPGFNDkNBzLakp-TWlVKT2/view

*[FDM]: Fused Deposition Modeling
*[CNC]: Computerized Numerical Control
*[MPCNC]: Mostly Printed Computerized Numerical Control - https://docs.v1engineering.com/mpcnc/intro/
*[SSH]: Secure Shell
*[GPIO]: General-Purpose Input/Output
*[USB]: Universal Serial Bus
*[Baudrate]: Measurement of Symbol Rate
*[ETA]: Estimated Time of Arrival
*[GCode]: A software programming language used to control a CNC machine
*[Git]: Software for tracking changes in any set of files
*[GUI]: Graphical User Interface
*[Parametric]: Parametric design is a process based on algorithmic thinking that enables the expression of parameters and rules that, together, define, encode and clarify the relationship between design intent and design response.
*[ISO]: International Organization for Standardization
*[Kreg-Jig]: A Pocket-Hole Jig
*[UPDI]: Unified Program and Debug Interface
*[AVR]: A Family of microcontrollers developed since 1996 by Atmel
*[programmer]: A piece of electronic equipment that arranges written software to configure programmable non-volatile integrated circuits
*[jtag]: Joint Test Action Group
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