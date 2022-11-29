---
hide:
  - navigation
  - toc
---

<link rel="stylesheet" href="../../assets/css/projects/project.css">

<script src="https://kit.fontawesome.com/79ff35ecec.js" crossorigin="anonymous"></script>

# Parametric Bottle Cap Generator

<div style="margin-top: -0.8em;">
  <span class="abtlinks"><a href="https://teddywarner.org/About-Me/about/"><img src="https://avatars.githubusercontent.com/u/48384497" alt="Profile Picture" class="profilepic"><span class="abt" style="font-weight: 300; padding-left: 6px;"> Teddy Warner</a><span class="abt" style="font-weight: 300; padding-left: 6px;"><span class="year">| Fall, 2021 </span>| <i class="far fa-clock"></i> 6-7 minutes</span></span></span>
</div>

---

<center>

![](../images/ParametricGenerator/beautyshot1.jpg){width="100%"}

**Lost a lid or just want a more functional cap? Generate and print your own, compatible with any existing threads!**

</center>

!!! example "Fabrication Tools/Techniques"

    - [ ] Computer-Aided Design - Autodesk Fusion 360
    - [ ] 3D Printing

I designed the Parametric Bottle Cap Generator in the fall of my junior year to address my need for a low-profile cap the isopropyl alcohol bottle I keep next to my 3D printer. The model was designed in Autodesk Fusion 360 and uses 3 required input parameters and [standard Metric thread profile](https://amesweb.info/Screws/metric-thread-profile-form-formula.aspx) equations to generate a cap with Fusion 360's parametric engine that will perfectly fit any of your threaded containers. Input Parameters can be found from an existing threaded connector following the documentation below and their values can be written in their corresponding Expression boxes in the Parameters spreadsheet of the attached Parametric Bottle Cap Fusion 360 file.

<center>

![](../images/ParametricGenerator/capparameters.png){width="95%"}

</center>

Following the standard Metric thread profile[^1] the generator derives all necessary values from three required input parameters, all of which are fed into Fusion 360's coil tool, creating entirely parametrically generated threads. The calculations for user parameters derived from the three required input parameters are as followed ...

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

Following the Generation of the caps thread, an inner contour is added defined by the ISO 965-1 standard[^2], which calls for a radius value *ThreadPitch / 4*, and thus the following values are used in the inner contour ...

 - Radius - *ThreadPitch / 4*
 - Radius Type - *Constant*

The contour is created with Fusion's Fillet tool and the prior mentioned values, shown below.

<center>

![](../images/ParametricGenerator/threadfillet.png){width="95%"}

</center>

*What fun would a custom cap generator be without a little customization?* The generator includes four different body styles,

1. Plain -
<center>
![](../images/ParametricGenerator/plain.png){width="95%"}
</center>
2. Single Hole -
<center>
![](../images/ParametricGenerator/singlehole.png){width="95%"}
</center>
3. Salt Shaker -
<center>
![](../images/ParametricGenerator/saltshaker.png){width="95%"}
</center>
4. Lanyard -
<center>
![](../images/ParametricGenerator/lanyard.png){width="95%"}
</center>

... allowing for total cap customization.

[^1]: https://amesweb.info/Screws/metric-thread-profile-form-formula.aspx
[^2]: https://www.iso.org/standard/57778.html