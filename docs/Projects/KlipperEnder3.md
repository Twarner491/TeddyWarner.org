---
title: Klipper Enabled Ender 3
---

# Klipper Enabled Ender 3 (Sophmore Year - 2021)

<!-- Compleation Badge

![progress]()

Done - https://img.shields.io/badge/progress-done!-success?style=flat-square
Pending - https://img.shields.io/badge/progress-pending%20compleation-yellow?style=flat-square
Halted - https://img.shields.io/badge/progress-halted-critical?style=flat-square
Constantly Updating - https://img.shields.io/badge/progress-constantly%20updating-informational?style=flat-square
-->

![Progress](https://img.shields.io/badge/progress-constantly%20updating-informational?style=flat-square)
![GitHub](https://img.shields.io/github/license/Twarner491/Project-Documentation-Site?color=%234051b5&style=flat-square)

**10-12 minutes :octicons-book-16:**

Due to uncertainty surrounding lab access during the Covid-19 pandemic, I received an Ender 3 3D-printer at the start of my cycle in [Fab Academy](https://fabacademy.org/). During my [second week](http://fabacademy.org/2021/labs/charlotte/students/theodore-warner/Assignments/week02/) in the course, I built and began to mod this machine as a little side project to the course work. However as the cycle progressed, I quickly ran out of time to keep working on this machine's mods and moved the machine to my closet, where it sat up until the [Klipper](https://www.klipper3d.org/) firmware piqued my interest. After modding the printer during Fab Academy, I was running the machine on Marlin linked to Octoprint, a setup I use on my other machines. This setup worked great with my machine mods, allowing me to print over a network through Octoprint as I would on any of my other Octoprint enabled machines. In this configuration, a Raspberry Pi running Octorpint hosts a local server that *.gcode* flies can be uploaded to and ran from. The Pi sends this uploaded *.gcode* to the machine's mainboard, where the code is processed, and movements/operations are determined. [Klipper](https://www.klipper3d.org/) on the other hand operates on a different principle. The firmware runs across both the mainboard and the Raspberry Pi, allowing for the same type of hosted server to exist (I used [FluiddPi](https://github.com/cadriel/FluiddPI) as my servers GUI), but instead of relying on the machines mainboard to compute *.gcode*, the code parsing is done by the Raspberry Pi - the more powerful computer- leaving the machine mainboard to only worry about stepper movements and operations. This setup uses the given hardware of a setup more optimally, allowing for faster calculations and more precise movements. After learning about the benefits of [Klipper](https://www.klipper3d.org/) I knew I had to try it out and thus, the Ender 3 modding project was revied and pulled from the closet.

## Ender 3 Modding

 Before the installation of Klipper, here are all the hardware mods done to the machine. I upgraded the main bored from the original factory board to a [SKR Mini E3 V2](https://www.biqu.equipment/products/bigtreetech-skr-mini-e3-v2-0-32-bit-control-board-integrated-tmc2209-uart-for-ender-3), and the original factory screen I switched out to a [TFT35 Touchscreen](https://www.biqu.equipment/products/btt-tft35-e3-v3-0-display-touch-screen-two-working-modes?variant=31955093815394). Following that I added a [Bltouch](https://www.antclabs.com/bltouch) for auto bed leveling, and switched the machine from Bowen to direct drive, with this Thingiverse [design](https://www.thingiverse.com/thing:3856703). I spent some time adding some customization to the machine as well, giving the direct drive system a little nameplate.

<center>

![](../images/KlipperEnder3/directdrive.jpg){width="70%"}

</center>

Finally, I moved all of the electronics of the machine to the rear of the machine using this Thingiverse [design](https://www.thingiverse.com/thing:3688967). This mod gave the space to add a raspberry pi and a means of power for it in addition to the mainboard, a perfect case for a Klipper-enabled machine.

<center>

![](../images/KlipperEnder3/electronicsenclouser.jpg){width="80%"}
![](../images/KlipperEnder3/installedelebox.jpg){width="80%"}

</center>

I used this Thingiverse [design](https://www.thingiverse.com/thing:2886101) to mount a raspberry pi camera to my printer's x-axis as shown in one of the pictures below. All of these modifications were done with parts printed on my [Prusa I3 Mk3S+](https://shop.prusa3d.com/en/3d-printers/181-original-prusa-i3-mk3s-3d-printer.html), and electronics I had laying around, making these printer modifications only take around three days to complete, including the time it took to print the parts.

<center>

![](../images/KlipperEnder3/ender3cam.jpg){width="80%"}

</center>

![](../images/KlipperEnder3/wholeprinter.jpg){: align=right width="30%"}

## Klipper Installation

As mentioned in the introduction paragraph of this page, I settled on using [FluiddPi](https://github.com/cadriel/FluiddPI) as the GUI for this Klipper setup. As opposed to a more broadly know GUI like Octoprint, FluiddPi offers some features that work directly with Klipper that make the entire experience pretty seamless. [FluiddPi](https://github.com/cadriel/FluiddPI) in addition to containing the servers GUI also packages Klipper & Moonraker into the software image, making the install of Klipper super straightforward. 

<center>

[Download the Latest FluiddPi Image](https://github.com/cadriel/FluiddPI/releases/tag/v1.16.2){ .md-button .md-button--primary }

</center>

Beginning the installation of Klipper, the first step is to download and flash the latest [FluiddPi](https://github.com/cadriel/FluiddPI) image (linked above). This Pi image can be flashed as you would with any other Raspberry Pi project - I use [balenaEtcher](https://www.balena.io/etcher/) for flashing, its simple 3-step interface makes the process super straightforward. After a successful flash of this image on your Pi's SD card configure your WiFi information in the *fluiddpi-wpa-supplicant.txt* located on the flashed SD card *(If you're using wired internet, you can skip this setup)*. Then, you can install your flashed SD in your Pi and boot. 

Next, some basic Pi config. Make sure you are on the same WiFi network you set up your Pi on, and then SSH into your booted Pi at the IP *fluiddpi.local* with the Pi's default credentials (Username - *pi* / Password - *raspberry*). I use [Putty](https://www.putty.org/) as my SSH client as again, it's pretty straightforward to use. Once connected to your Pi, run the command ...

```
sudo raspi-config
```

to open the configuration GUI. Here you can change your Pi's credentials (highly recommended), set up your local timezone (to allow for accurate machine ETAs), and change your machine's hostname (thus changing the URL from the default *fluiddpi.local* to *YOURHOSTNAME.local*). After all, changes, reboot your Pi and then confirm all software is up to date with the lines

```
sudo apt-get update
sudo apt-get upgrade
```

Congrats! you have now successfully set up [FluiddPi](https://github.com/cadriel/FluiddPI) on your Raspberry Pi, and can now connect to its web server with the URL *http://fluiddpi.local* ( or if you changed your hostname, with the URL *http://YOURHOSTNAME.local*).

<center>

![](../images/KlipperEnder3/fluiddinterface.png){width="95%"}
  <figcaption>The FluiddPi Web Server Interface</figcaption>

</center>


Upon connection, the webserver will throw an error with a lack of a *printer.cfg* file. This file is your machine config file. Notably different from Marlin, Klipper does not require a machine to be specified before the flash but instead looks to this *printer.cfg* file for machine configuration. One of the benefits of using [FluiddPi](https://github.com/cadriel/FluiddPI) for Klipper is the ability to alter this *printer.cfg* file and reboot the firmware right from the server's GUI. The machine configuration for my Klipper Enabled Ender 3 is covered later on this page under the [Klipper Configuration](https://teddywarner.org/Projects/KlipperEnder3/#klipper-configuration) section, but for any other machines, preconfigured *printer.cfg* files can be found online.

Next up, building Klipper to for machines mainboard. SSH back into your Raspberry Pi (making sure to change your IP to match your altered hostname if you changed it) and run the commands ...

```
cd ~/klipper/
make menuconfig
```

to open the mainboard configuration GUI. Work through this interface with your mainboards information before running the command ...

```
make
```

to build your set configurations. Now, connect your Pi and machine mainboard via USB and determine the connected serial port with the line

```
ls /dev/serial/by-id/*
```

the report this line will yield provides the serial port that connects your mainboard to your Pi, take note of this.

Now, to begin the flashing, run the lines...

```
sudo service klipper stop
make flash FLASH_DEVICE=YOUR-SERIAL-PORT-INFORMATION-HERE
sudo service klipper start
```

making sure to paste in the reported serial port where it says *YOUR-SERIAL-PORT-INFORMATION-HERE*. This will flash the built Klipper instance to your machine's mainboard, and then begin communication between the two parallel boards. **Good Job! Klipper is now installed.**

## Klipper Configuration

As mentioned prior, unlike the Marlin firmware, Klipper is not compiled for a specific machine. Instead, the firmware looks to a machine configuration file - *printer.cfg*. This file can be altered without the reflashing of the firmware, just a simple reboot, thus making machine tinkering and hardware swapping significantly simpler. This *printer.cfg* file can be altered in the [FluiddPi](https://github.com/cadriel/FluiddPI) web server interface, simplifying the configuration process even more. 

<center>

![](../images/KlipperEnder3/fluiddconfig.png){width="95%"}
  <figcaption>FluiddPi's Configuration Menu in Web Server Interface</figcaption>

</center>

As shown above, your *printer.cfg* file can be accessed in FluiddPi's configuration menu. Due to Klipper's ability to experiment with your machine config, my printer's configuration is always subject to change, but included below is the latest machine config running on my Klipper Enabled Ender 3.

<center>

### *printer.cfg*

</center>

```
# See docs/Config_Reference.md for a description of parameters.

[stepper_x]
step_pin: PB13
dir_pin: !PB12
enable_pin: !PB14
microsteps: 16
rotation_distance: 40
endstop_pin: ^PC0
position_endstop: 0
position_max: 235
homing_speed: 50

[tmc2209 stepper_x]
uart_pin: PC11
tx_pin: PC10
uart_address: 0
run_current: 0.580
hold_current: 0.500
stealthchop_threshold: 999999

[stepper_y]
step_pin: PB10
dir_pin: !PB2
enable_pin: !PB11
microsteps: 16
rotation_distance: 40
endstop_pin: ^PC1
position_endstop: 0
position_max: 235
homing_speed: 50

[tmc2209 stepper_y]
uart_pin: PC11
tx_pin: PC10
uart_address: 2
run_current: 0.580
hold_current: 0.500
stealthchop_threshold: 999999

[stepper_z]
step_pin: PB0
dir_pin: PC5
enable_pin: !PB1
microsteps: 16
rotation_distance: 8
endstop_pin: probe:z_virtual_endstop
#position_endstop: 0.0
position_min: -5
position_max: 250

[tmc2209 stepper_z]
uart_pin: PC11
tx_pin: PC10
uart_address: 1
run_current: 0.580
hold_current: 0.500
stealthchop_threshold: 999999

[extruder]
step_pin: PB3
dir_pin: !PB4
enable_pin: !PD2
microsteps: 16
rotation_distance: 33.500
nozzle_diameter: 0.400
filament_diameter: 1.750
heater_pin: PC8
sensor_type: EPCOS 100K B57560G104F
sensor_pin: PA0
control: pid
pid_Kp: 21.527
pid_Ki: 1.063
pid_Kd: 108.982
min_temp: 0
max_temp: 250

[tmc2209 extruder]
uart_pin: PC11
tx_pin: PC10
uart_address: 3
run_current: 0.650
hold_current: 0.500
stealthchop_threshold: 999999

[heater_bed]
heater_pin: PC9
sensor_type: ATC Semitec 104GT-2
sensor_pin: PC3
control: pid
pid_Kp: 54.027
pid_Ki: 0.770
pid_Kd: 948.182
min_temp: 0
max_temp: 130

[heater_fan nozzle_cooling_fan]
pin: PC7

[fan]
pin: PC6

[mcu]
serial: /dev/serial/by-id/usb-Klipper_stm32f103xe_36FFDB05424E313841781457-if00

[printer]
kinematics: cartesian
max_velocity: 300
max_accel: 3000
max_z_velocity: 5
max_z_accel: 100

[static_digital_output usb_pullup_enable]
pins: !PA14

[board_pins]
aliases:
    # EXP1 header
    EXP1_1=PB5,  EXP1_3=PA9,   EXP1_5=PA10, EXP1_7=PB8,  EXP1_9=<GND>,
    EXP1_2=PA15, EXP1_4=<RST>, EXP1_6=PB9,  EXP1_8=PB15, EXP1_10=<5V>

# See the sample-lcd.cfg file for definitions of common LCD displays.

[bltouch]
sensor_pin: ^PC2
control_pin: PA1
x_offset: 32
y_offset: -2
z_offset: 1.5

[safe_z_home]
home_xy_position: 85.5,119.5
speed: 75
z_hop: 10                 
z_hop_speed: 5

```