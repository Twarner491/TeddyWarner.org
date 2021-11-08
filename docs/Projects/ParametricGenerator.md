---
title: Parametric Bottle Cap Generator
hide:
  - navigation
---

# Parametric Bottle Cap Generator (Junior Year - 2021)

<!-- Compleation Badge

![progress]()

Done - https://img.shields.io/badge/progress-done!-success?style=flat-square
Pending - https://img.shields.io/badge/progress-pending%20completion-yellow?style=flat-square
Halted - https://img.shields.io/badge/progress-halted-critical?style=flat-square
Constantly Updating - https://img.shields.io/badge/progress-constantly%20updating-informational?style=flat-square
-->

![Progress](https://img.shields.io/badge/progress-done!-success?style=flat-square)
![GitHub](https://img.shields.io/github/license/Twarner491/Project-Documentation-Site?color=%234051b5&style=flat-square)

**6-7 minutes :octicons-book-16:**

Lost a lid or just want a more functional cap? Generate and print your own, compatible with any existing threads!

<center>

![](../images/ParametricGenerator/beautyshot1.jpg){width="100%"}

[Check Out the Project on PrusaPrinters](https://www.prusaprinters.org/prints/76271-parametric-bottle-cap-generator){ .md-button .md-button--primary }
[Parametric Bottle Cap Generator Files :fontawesome-brands-github:](https://github.com/Twarner491/project-files/blob/main/Parametric%20Generators/Parametric%20Bottle%20Cap%20Generator.f3d){ .md-button .md-button--primary }

</center>

## CAD & Testing

This model was designed in Fusion 360 and uses 3 required input parameters and [standard Metric thread profile](https://amesweb.info/Screws/metric-thread-profile-form-formula.aspx) equations to generate a cap that will perfectly fit any of your threaded containers. Input Parameters can be found from an existing threaded connector following the documentation below and their values can be written in their corresponding Expression boxes in the Parameters spreadsheet of the attached Parametric Bottle Cap Fusion 360 file (shown below)

<center>

![](../images/ParametricGenerator/capparameters.png){width="95%"}

</center>

I originally set out to make this generator due to a need for a lower profile cap for the isopropyl alcohol bottle I keep next to my printer. The thread profile of this bottle is rather abnormal, and thus I found myself finding thread component values with [standard Metric thread profile](https://amesweb.info/Screws/metric-thread-profile-form-formula.aspx) equations, the same used by the generator. 

Following the standard Metric thread profile (displayed in the diagram below)...

<center>

![](../images/ParametricGenerator/ISOThreadForm1.jpg){width="75%"}

</center>

The model derives all necessary values from three required input parameters, all of which are fed into Fusion 360's coil tool, creating entirely parametrically generated threads. The calculations for user parameters derived from the three required input parameters are as followed ...

 - Thread Height - 0.8660254037844386 * ThreadPitch
 - Hole Size - ConnectDiamater + ThreadHight
 - ThreadDmax - ConnectDiamater
 - ThreadDmin - ThreadDmax - 2 * 5 / 8 * ThreadHight
 - Cap Diamater - *HoleSize + ThreadHight*
 - Cap Height - *ConnectLegnth + ThreadPitch / 2 + 1.5 mm*

The implementation of these [standard Metric thread profile](https://amesweb.info/Screws/metric-thread-profile-form-formula.aspx) equations in a Fusion model parametrically was the real kicker of this design. Unfortunately, Fusion's native thread tool is incompatible with user parameters and thus was unusable in the case of this generator. In its place, I utilized Fusion's coil tool, manipulating the values found in the generator's user parameters to create the caps inner threads. The final working coil tool calculations are as followed ...

 - Diameter - *ThreadDmax + ThreadHight / 4 * 2*
 - Height - *ConnectLegnth + ThreadPitch / 2*
 - Pitch - *ThreadPitch*
 - Angle - *0.0 deg*
 - Selection Size - *ThreadHeight*

all of which are included, shown below, to generate the cap's threads.

<center>

![](../images/ParametricGenerator/ThreadCap.png){width="95%"}

</center>

Following the Generation of the caps thread, an inner contour is added defined by the ISO 965-1 standard - shw=owin in the diagram below.

<center>

![](../images/ParametricGenerator/ISOExternalThreadRootContour.jpg){width="50%"}

</center>

This standard calls for radius value *ThreadPitch / 4*, and thus the following values are used in the inner contour ...

 - Radius - *ThreadPitch / 4*
 - Radius Type - *Constant*

The contour is created with Fusion's Fillet tool and the prior mentioned values, shown below.

<center>

![](../images/ParametricGenerator/threadfillet.png){width="95%"}

</center>

All this yields the successful basic generator, embedded below ...

<center>

<iframe src="https://myhub.autodesk360.com/ue2cecd93/shares/public/SH9285eQTcf875d3c539495c089187ac95b8?mode=embed" width="95%" height="500" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"  frameborder="0"></iframe>

</center>

... however, what fun would a custom cap generator be without a little customization. The generator includes four different body styles,

 1. Plain
 2. Single-Hole
 3. Salt-Shaker
 4. Lanyard

... allowing for total cap customization. These styles can be changed, along with two other customization factors, discussed in the *Cap Generation* section below.

## Cap Generation -

For documentation purposes, I created a new cap for my Nalgene water bottle …

### Required Measurements 

There are three measurements required to generate your cap, all of which can be taken from the existing threaded connector … 

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

### Optional Customization

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

**Congrats!** You've successfully generated your own bottle cap!

<!-- begin wwww.htmlcommentbox.com -->
 <div id="HCB_comment_box"><a href="http://www.htmlcommentbox.com">Comment Form</a> is loading comments...</div>
 <link rel="stylesheet" type="text/css" href="https://www.htmlcommentbox.com/static/skins/bootstrap/twitter-bootstrap.css?v=0" />
 <script type="text/javascript" id="hcb"> /*<!--*/ if(!window.hcb_user){hcb_user={};} (function(){var s=document.createElement("script"), l=hcb_user.PAGE || (""+window.location).replace(/'/g,"%27"), h="https://www.htmlcommentbox.com";s.setAttribute("type","text/javascript");s.setAttribute("src", h+"/jread?page="+encodeURIComponent(l).replace("+","%2B")+"&mod=%241%24wq1rdBcg%24rC8CBT1V7ZoWek7B.CC5x."+"&opts=16798&num=10&ts=1634155475586");if (typeof s!="undefined") document.getElementsByTagName("head")[0].appendChild(s);})(); /*-->*/ </script>
<!-- end www.htmlcommentbox.com -->