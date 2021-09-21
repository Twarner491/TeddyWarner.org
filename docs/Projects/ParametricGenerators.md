---
title: Parametric Generators
---

# Parametric Generators with Fusion 360 (Junior Year - 2021)

<!-- Compleation Badge

![progress]()

Done - https://img.shields.io/badge/progress-done!-success?style=flat-square
Pending - https://img.shields.io/badge/progress-pending%20compleation-yellow?style=flat-square
Halted - https://img.shields.io/badge/progress-halted-critical?style=flat-square
Constantly Updating - https://img.shields.io/badge/progress-constantly%20updating-informational?style=flat-square
-->

![Progress](https://img.shields.io/badge/progress-pending%20compleation-yellow?style=flat-square)
![GitHub](https://img.shields.io/github/license/Twarner491/Project-Documentation-Site?color=%234051b5&style=flat-square)

## Bottle Cap Generator

**A Parametric Bottle Cap Generator -** Lost a lid or just want a more functional cap? Generate and print your own, compatible with any existing threads!

<center>

[Check Out the Project on PrusaPrinters](URL){ .md-button .md-button--primary }
[:fontawesome-brands-github: Parametric Bottle Cap Generator Files](https://github.com/Twarner491/project-files/blob/main/Parametric%20Generators/Parametric%20Bottle%20Cap%20Generator.f3d){ .md-button .md-button--primary }

</center>

### CAD & Testing

This model was designed in Fusion 360 and uses 3 required input parameters and [standard Metric thread profile](https://amesweb.info/Screws/metric-thread-profile-form-formula.aspx) equations to generate a cap that will perfectly fit any of your threaded containers. Input Parameters can be found from an existing threaded connector following the documentation below and their values can be written in their corresponding Expression boxes in the Parameters spreadsheet of the attached Parametric Bottle Cap Fusion 360 file (shown below)

<center>

![](../images/ParametricGenerator/capparameters.png){width="95%"}

</center>

The three required input parameters provide the data for the thread component equations, all fed into Fusion 360's coil tool, thus creating entirely parametrically generated threads. Following these required inputs, there are a number of customization included in the generator, discussed later in the documentation.

<center>

<iframe src="https://myhub.autodesk360.com/ue2cecd93/shares/public/SH9285eQTcf875d3c539495c089187ac95b8?mode=embed" width="95%" height="500" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"  frameborder="0"></iframe>

</center>

I originally set out to make this generator due to a need for a lower profile cap for the isopropyl alcohol bottle I keep next to my printer. The thread profile of this bottle is rather abnormal, and thus I found myself finding thread component values with [standard Metric thread profile](https://amesweb.info/Screws/metric-thread-profile-form-formula.aspx) equations, the same used by the generator. 

### Cap Generation -

For documentation purposes, I created a new cap for my Nalgene water bottle …

#### Required Measurements 

There are three measurements required to generate your own cap, all of which can be taken from the existing threaded connector … 

1. **Connector Diameter -**
Measure the diameter (in MM) of your existing connector, from the very farthest point (i.e. the point of the thread) on either side. 
<center>
![](../images/ParametricGenerator/diametermeasurment.jpg){width="95%"}
</center>
Then, update the Expression value in the ConnectDiameter row (the box highlighted yellow below) with this found value.
<center>
![](../images/ParametricGenerator/connectdiameter.png){width="95%"}
</center>

2. **Connector Length -**
Measure the height (in MM) of your existing connector, from the top lip to underneath the threads.
<center>
![](../images/ParametricGenerator/legnthmeasurement.jpg){width="95%"}
</center>
Then, update the Expression value in the ConnectLegnth row (the box highlighted yellow below) with this found value.
<center>
![](../images/ParametricGenerator/connectlegnth.png){width="95%"}
</center>
 
3. **Thread Pitch -**
Measure the thread pitch of your existing connector, the distance in MM between the points of two sequential threads. 
<center>
![](../images/ParametricGenerator/pitchmeasurment.jpg){width="95%"}
</center>
Then, update the Expression value in the ThreadPitch row (the box highlighted yellow below) with this found value.
<center>
![](../images/ParametricGenerator/threadpitch.png){width="95%"}
</center>

#### Optional Customization

To offer a bit more customization to each generated cap, there are a couple of different preferences allowing for different functions.

1. **Number of Grips -**
The number of grips lining the edge of the cap can be changed in the Expression value of the NumofGrips row. I find values between 40 through 55 work best, but if your experimenting, going below 11 will stop the generation of grip chamfered.
<center>
![](../images/ParametricGenerator/numofgrips.png){width="95%"}
</center>

2. **Grip Depth -**
The depths of these grips can be altered, determining how grippy your grips are. I've found a value around 0.3 or 0.4 offers a good texture around the edge.
<center>
![](../images/ParametricGenerator/gripdepth.png){width="95%"}
</center>

3. **Lid Style -**
The lid style of your cap can be toggled between 4 presets in the Fusion Parametric Bottle Cap file by navigating to

```
Parametric-Bottle_Cap > Bodies > Styles
```

in the Fusion browser. The lid styles can be toggled between via the eye icon to the left of each style. The four styles are included below, with each of the toggles highlighted.

* Plain -

<center>

![](../images/ParametricGenerator/plain.png){width="95%"}

</center>

* Single Hole -

<center>

![](../images/ParametricGenerator/singlehole.png){width="95%"}

</center>

* Salt Shaker -

<center>

![](../images/ParametricGenerator/saltshaker.png){width="95%"}

</center>

* Lanyard -

<center>

![](../images/ParametricGenerator/lanyard.png){width="95%"}

</center>
