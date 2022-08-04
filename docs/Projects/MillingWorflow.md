---
title: CNC Milling Workflows
hide:
  - navigation
  - tags
template: comments.html
tags:
  - CAD
  - CAM
  - Software
  - Fusion 360
  - Aspire
  - CNC
  - Bantam
---

<link rel="stylesheet" href="../../assets/css/projects/milling.css">

<script src="https://kit.fontawesome.com/79ff35ecec.js" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="../../assets/js/milling.js"></script> 

# CNC Milling Workflows

<div style="margin-top: -0.8em;">
  <span class="abtlinks"><a href="https://teddywarner.org/About-Me/about/"><img src="https://avatars.githubusercontent.com/u/48384497" alt="Profile Picture" class="profilepic"><span class="abt" style="font-weight: 300; padding-left: 6px;"> Teddy Warner</a><span class="abt" style="font-weight: 300; padding-left: 6px;"><span class="year">| Spring & Summer, 2022 </span>| <i class="far fa-clock"></i> X-X minutes</span></span></span>
  <span class="share" style=" color: inherit;">
  <a class="fb" title="Share on Facebook" href="https://www.facebook.com/sharer/sharer.php?u=https://teddywarner.org/Projects/MillingWorflow/"><i class="fab fa-facebook-square"></i></a>
  <a class="twitter" title="Share on Twitter" href="https://twitter.com/intent/tweet?url=https://teddywarner.org/Projects/MillingWorflow/&text=Check%20out%20the%20CNC%20Milling%20Workflows%20article%20on%20teddywarner.org!"><i class="fab fa-twitter"></i></a>
  <a class="pin" title="Share on Pinterest" href="https://pinterest.com/pin/create/button/?url=https://teddywarner.org/Projects/MillingWorflow/&media=&description=Check%20out%20the%20CNC%20Milling%20Workflows%20article%20on%20teddywarner.org!"><i class="fab fa-pinterest"></i></a>
  <a class="ln" title="Share on LinkedIn" href="https://www.linkedin.com/shareArticle?mini=true&url=https://teddywarner.org/Projects/MillingWorflow/"><i class="fab fa-linkedin"></i></a>
  <a class="email" title="Share via Email" href="mailto:info@example.com?&subject=&cc=&bcc=&body=https://teddywarner.org/Projects/MillingWorflow/%0ACheck%20out%20the%20CNC%20Milling%20Workflows%20article%20on%20teddywarner.org!"><i class="fas fa-paper-plane"></i></a>
  </span>
</div>

---

![Progress](https://img.shields.io/badge/progress-pending%20completion-yellow?style=flat-square)

Subtractive manufacturing is a process I've always found mesmerizing. Although additive processes such as 3D printing allow for the creation of something from seemingly nothing, I believe it's even cooler to watch the morphing of existing stock into a different object. Despite this interest, I feel as though I've barely scratched the surface of CNC - primarily focusing on PCB milling in my subtractive manufacturing projects. I made a first attempt to dive into more subtractive manufacturing work a couple of years ago now when I built [V1 Engineering's](https://www.v1engineering.com/) original [MPCNC](https://docs.v1engineering.com/mpcnc/burly/).

<center>

![](../images/MillingWorkflow/MPCNC1.jpg){width="49%"}
![](../images/MillingWorkflow/MPCNC2.jpg){width="49%"}

  <figcaption>My Mostly Printed CNC Machine</figcaption>

</center>

I absolutely loved building this machine and recommend it to all interested in understanding the workings of CNC, yet I don't mill on mine all that often, I find more use in using the machine as a GCode dev platform for some of my other projects. 

Since my initial attempted steps with the [MPCNC](https://docs.v1engineering.com/mpcnc/burly/), I've become more versed with CNC milling due to exposure during my Fab Academy [Week 7: Computer Controlled Machining](https://fabacademy.org/2021/labs/charlotte/students/theodore-warner/Assignments/week07/) assignment. For this assignment, I used the [CLS Fab Lab's](https://www.charlottelatin.org/academics/steam) [ShopBot PRSalpha](https://www.shopbottools.com/products/alpha) to mill the plywood fish tank housing for my Fab Academy [Final Project](https://fabacademy.org/2021/labs/charlotte/students/theodore-warner/Final%20Project/final-project/). I continued my milling work over the summer, running the ShopBot almost daily over July for [Young Engineers of Today's](https://www.youngengineersoftoday.com/) Summer Camps. Last fall, our lab picked up a [Bantam Tools Desktop CNC Milling Machine](https://store.bantamtools.com/collections/machines), Bantam's flagship machine, capable of super-rapid prototyping when partnered with their [Milling Machine Software](https://www.bantamtools.com/software-download). 

<center>

[![](../images/MillingWorkflow/BantamBanner.png){width="54%"}](https://www.bantamtools.com/)
[![](../images/MillingWorkflow/ShopbotBanner.png){width="43%"}](https://www.shopbottools.com/)

</center>

This machine was the needed spark for this CNC milling documentation article and will be the machine most of this page's projects are completed on. This article attempts to serve as a compleate guide for CNC milling, covering machinist jargon, material standards, feeds and speeds, CAM workflows with [Autodesk Fusion 360](https://www.autodesk.com/products/fusion-360/overview) & [Vectric Aspire](https://www.vectric.com/products/aspire), and milling workflows for [Shopbot](https://www.shopbottools.com/) & [Bantam Tools](https://www.bantamtools.com/) machines - all through a collection of milling micro-projects ranging from a 1 to 1.9 Million scale mill of Mars's Gale Crater to brass wax seals :smile:.

!!! example "Milling Micro-Projects"

    This page starys from my normal single-project documentation style, opting to cover different CAM & milling workflows via a collection of micro-projects. In a simmilar approach to the "Constantly Updating" status of my [Lithophane Experiments](https://teddywarner.org/Projects/LithophaneExperiments/) article, I plan to continually expand the content of this article with any addational milling micro-project I compleate. That being said, be sure to stay tuned for future updates!

## Feeds & Speeds

<div class="toggleswitch">
  <label class="cl-switch">
    <span class="label">Imperial</span>
    <input type="checkbox" id="units" onclick="unit()">
    <span class="switcher"></span>
    <span class="label">Metric</span>
  </label>
</div>

Creating a successfuly subtractive manufcaturing toolpath can be a bit more intimidating than sliceing for an additive manufactuing. Not only can you jepordize your stock material, incrorect feeds and speeds can yeild a hazeround enviornment & portential machine damage. **There is no streamlined answer to find the right feeds and speeds**, ideal values depend on numerous variables & feeds and speeds may not remain constant from job to job. This secontion provides a starting place for feeds and speeds, with general values provided as well as a calcuator for the required inputs in your toolpath. **This is by no means a universal key** and necisary precaution & alterations should be made to provided values to mesh with your manufactuing workflow. Often times the manufacture of your tool & your machine will provide generic feeds and speeds for your specfic equipment. Opperator input is required to achieve successful & safe cuts, often times you'll be able to hear machine strain - a telltail sign of poor cutting. Trial and error adjusting is neccicary to achieve the sweet spot for your feeds and speeds.  

???+ abstract "Feeds & Speeds Terminology"

    `Tool Diameter`

    :   The diameter of the endmill. When Profile milling or Through Cutting stock, it is best to keep the ***Tool Diameter ≥ 1/6 Stock Thickness***, preserving the integrity of the endmill while allowing for full passes. Larger tool diameters yield shorter cut times when removing a lot of material, while smaller diameters allow for higher detail to be reached. It is typically best to utilize both larger and smaller diameter endmills, using the larger to clear the bulk of stock material, while finishing the mill with a smaller diameter tool to achieve the best detail. 

        <center>

          ![](../images/MillingWorkflow/darkdiameter.png#only-light){width="50%"}
          ![](../images/MillingWorkflow/lightdiameter.png#only-dark){width="50%"}

        </center>

    `Flute Count`

    :   The number of individual flutes an endmill has. Flutes are the upward running cutting edges on an endmill. Lower flute counts allow for better chip & heat clearance from the cutting edge, while higher flute counts provided a smoother finish to a part. Stock materials that require a high surface speed also require higher flute bits, and vice versa with lower surface speed requirements. One to Two flute bits will suffice for prototyping with soft plastics & waxes. Two or more flutes will typically be needed for harder plastics (such as HDPE), woods, and metals.

        <center>

          ![](../images/MillingWorkflow/darkflute.png#only-light){width="50%"}
          ![](../images/MillingWorkflow/lightflute.png#only-dark){width="50%"}

        </center>

    `Surface Speed`

    :   The speed at which the tool's cutting edge travels through the stock. Surface Speed is dependent on both the stock & endmill materials. Maximum surface speeds are typically published by your endmill's manufacturer and do not need to be derived experimentally. ***Staring jobs at ≤ 50% of the maximum provided value is the best practice to allow for ample time to ensure the successful operation of your machine***.

        <center>

          ![](../images/MillingWorkflow/darksurface.png#only-light){width="40%"}
          ![](../images/MillingWorkflow/lightsurface.png#only-dark){width="40%"}

        </center>

    `Chip Load`

    :  The thickness of offcut 'chips' removed with each flute per revolution of the endmill. Maximum chip load is typically provided by the endmill's manufacturer, based upon the tool's characteristics. Finding a balance between chip load extremes is crucial for the safety of you and your machine. While larger chip loads yield shorter machine time, they also put greater forces on your endmill, potentially pushing the bit towards its point of rupture. On the other hand, smaller chip loads increase machine time, while expelling waste and heat from the tool at a slower pace, thus risking overheating and potential fire. Safe chip load values usually fall between <span class="in">*0.001"* & *0.010"*</span><span class="mm"><i>0.0254mm</i> & <i>0.254mm</i></span>.

        <center>

          ![](../images/MillingWorkflow/darkchip.png#only-light){width="32%"}
          ![](../images/MillingWorkflow/lightchip.png#only-dark){width="32%"}

        </center>

    `Spindle Speed`

    :   The number of revolutions made by the endmill in a unit of time (RPM is standard). A Lower RPM yields a higher quality surface finish & more cutting power, while a higher RPM decreases machine time. For optimal milling operations, use a higher RPM for roughing passes & a lower for finishing.

        <center>

          ![](../images/MillingWorkflow/darkspindal.png#only-light){width="30%"}
          ![](../images/MillingWorkflow/lightspindal.png#only-dark){width="30%"}

        </center>

        <div class="ftmin">

        $$
        Spindle Speed (RPM) = {Surface Speed (ft/min) \over π ∗ {1 \over 12} ∗ Tool Diameter (in)}
        $$

        </div>
        <div class="mmin">
        
        $$
        Spindle Speed (RPM) = {Surface Speed (M/min) \over π ∗ {1 \over 1000} ∗ Tool Diameter (mm)}
        $$

        </div>

    `Feed Rate`

    :   The speed at which the machine moves the tool through the stock. Finding the right feed rate is crucial for the safety of you and your machine. Excessively high feed rates cause excessive load on the cutter, leading to cataclysmic failure of the endmill, spindle, and machine. Feed rates that are too low produce unnecessary vibration on the machine, leading to poor surface finishes & potential cutter failure.

        <center>

          ![](../images/MillingWorkflow/darkfeed.png#only-light){width="30%"}
          ![](../images/MillingWorkflow/lightfeed.png#only-dark){width="30%"}

        </center>

        <div class="ftmin">

        $$
        Feed Rate (in/min) = Spindle Speed (RPM) ∗ Flute Count ∗ Chip Load (in)
        $$

        </div>
        <div class="mmin">
        
        $$
        Feed Rate (mm/min) = Spindle Speed (RPM) ∗ Flute Count ∗ Chip Load (mm)
        $$

        </div>

    `Plunge Rate`

    :   The speed at which the endmill is driven down into the stock. The vertically running flutes on an endmill allow the tool to cut horizontally, while vertical plunges are more demanding on the tool. Lower plunge rates prevent tool damage & maintain lower temperatures while boring holes. ***All plunging cuts should be ramped***, as gradual plunging while traveling across the stock will reduce tool stress.
        
        <center>

          ![](../images/MillingWorkflow/darkplunge.png#only-light){width="45%"}
          ![](../images/MillingWorkflow/lightplunge.png#only-dark){width="45%"}

        </center>

        <div class="ftmin">

        $$
        Plunge Rate(in/min) = Feed Rate (in/min) * {1 \over 2}
        $$

        </div>
        <div class="mmin">
        
        $$
        Plunge Rate(mm/min) = Feed Rate (mm/min) * {1 \over 2}
        $$

        </div>

    `Stepdown`

    :   The vertical depth of each pass of the tool into the stock. ***Best practice is to maintain a step down of ≤ 50% of the tool diameter***, however, may be increased while milling softer materials. The step down should **always** remain less than the tool diameter.

        <center>

          ![](../images/MillingWorkflow/darkstepdown.png#only-light){width="30%"}
          ![](../images/MillingWorkflow/lightstepdown.png#only-dark){width="30%"}

        </center>

        <div class="ftmin">

        $$
        Stepover(in) = Tool Diameter (in) * {3 \over 5}
        $$

        </div>
        <div class="mmin">
        
        $$
        Stepover(mm) = Tool Diameter (mm) * {3 \over 5}
        $$

        </div>

    `Stepover`

    :   The space between passes of the tool into the stock. While pocketing, a maximum stepover of 50% can be used, however lower stepover values will leave a better surface finish.

        <center>

          ![](../images/MillingWorkflow/darkstepover.png#only-light){width="30%"}
          ![](../images/MillingWorkflow/lightstepover.png#only-dark){width="30%"}

        </center> 

        <div class="ftmin">

        $$
        Stepover(in) = Tool Diameter (in) * {9 \over 20}
        $$

        </div>
        <div class="mmin">
        
        $$
        Stepover(mm) = Tool Diameter (mm) * {9 \over 20}
        $$

        </div>

### Material Reference

Feeds and speeds are equally dependent on material proterities and the specfic of your machoine & tool. Below I've compiled a table of commonly milled stock amterials, ranging from woods to plastics to metals. Each material offers a breif description of the stock, as well as avrage surface speed & chip loads. Chiploads are tool dependent just as much as they are material dependent, so be sure to select an adequate load for your tools diameter. More conserative chip loads are given on the left, while agressive loads are given on the right. Consertive values will extend the life of your tool, while the higher loads will catalize your job time - select a chipload withen the provided range based on your needs. As meantioned above, **This is by no means a universal key** and necisary precaution & alterations should be made to provided values to mesh with your manufactuing workflow. Often times the manufacture of your tool & your machine will provide generic feeds and speeds for your specfic equipment. Opperator input is required to achieve successful & safe cuts, often times you'll be able to hear machine strain - a telltail sign of poor cutting.

<center>

<table>
    <tr>
        <td><b>Material</b></td>
        <td><b>Description</b></td>
    </tr>
    <tr class="tablehover" onclick="showHideRow('hidden_row1');">
        <td><i id="right1" class="fas fa-angle-right"></i><i id="down1" class="fas fa-angle-down"></i> Wax</td>
        <td>A easily milled medium, commonly used for casting cores, molds, and CNC program proofs.</td>
    </tr>
    <tr id="hidden_row1" style="display: none;">
			<td>
        <img width="200px" src="https://teddywarner.org/images/MillingWorkflow/materials/wax.png">
			</td>
      <td>
        <ul>
        <li>Cost Efficient, offcut may be saved, melted & reused</li>
        <li>Environmentally Friendly</li>
        <li>Safe, no hazardous waste or fumes</li>
        <li>High Dimensional Accuracy</li>
        <li>Self-lubricating</li>
        <li>Easy on Tooling</li>
        </ul>
        <p><strong>Surface Speed</strong> <em>(<span class="ftmin">ft/min</span><span class="mmin">M/min</span>)</em> = <span class="ftmin"><code> 200 </code></span><span class="mmin"><code> 60.96 </code></span></p>
        <p><strong>Chip Load</strong> <em>(<span class="in">in</span><span class="mm">mm</span>)</em> -
        <div style="margin-left: 0.75em; margin-top:-2.5em;">
          </br><span class="in">1/8" Tool Diameter</span><span class="mm">3.175mm Tool Diameter</span> - <span class="in"><code>0.0089</code> - <code>0.005</code></span><span class="mm"><code>0.22606</code> - <code>0.127</code></span>
          </br><span class="in">1/4" Tool Diameter</span><span class="mm">6.35mm Tool Diameter</span> - <span class="in"><code>0.010</code> - <code>0.015</code></span><span class="mm"><code>0.254</code> - <code>0.381</code></span>
          </br><span class="in">3/8" Tool Diameter</span><span class="mm">9.525mm Tool Diameter</span> - <span class="in"><code>0.015</code> - <code>0.020</code></span><span class="mm"><code>0.381</code> - <code>0.508</code></span>
          </br><span class="in">≥ 1/2" Tool Diameter</span><span class="mm">≥ 12.7mm Tool Diameter</span> - <span class="in"><code>0.025</code> - <code>0.033</code></span><span class="mm"><code>0.635</code> - <code>0.8382</code></span>
          </p>
        </div>
			</td>
		</tr>
    <tr class="tablehover" onclick="showHideRow('hidden_row20');">
        <td><i id="right20" class="fas fa-angle-right"></i><i id="down20" class="fas fa-angle-down"></i> Soft Wood</td>
        <td>A accessible & stylish medium, not to tricky to mill, often used for large scale parts - Pine, Spruce, Cedar, etc.</td>
    </tr>
    <tr id="hidden_row20" style="display: none;">
			<td>
        <img width="200px" src="https://teddywarner.org/images/MillingWorkflow/materials/softwood.png">
			</td>
      <td>
        <ul>
        <li>Light weight, low density</li>
        <li>Sustainable resource, softwoods grow at a rapid rate</li>
        <li>Cheap & readily available</li>
        <li>Easily milled</li>
        </ul>
        <p><strong>Surface Speed</strong> <em>(<span class="ftmin">ft/min</span><span class="mmin">M/min</span>)</em> = <span class="ftmin"><code>650</code></span><span class="mmin"><code> 198.12 </code></span></p>
        <p><strong>Chip Load</strong> <em>(<span class="in">in</span><span class="mm">mm</span>)</em> -
        <div style="margin-left: 0.75em; margin-top:-2.5em;">
          </br><span class="in">1/8" Tool Diameter</span><span class="mm">3.175mm Tool Diameter</span> - <span class="in"><code>0.004</code> - <code>0.006</code></span><span class="mm"><code>0.1016</code> - <code>0.1524</code></span>
          </br><span class="in">1/4" Tool Diameter</span><span class="mm">6.35mm Tool Diameter</span> - <span class="in"><code>0.011</code> - <code>0.013</code></span><span class="mm"><code>0.2794</code> - <code>0.3302</code></span>
          </br><span class="in">3/8" Tool Diameter</span><span class="mm">9.525mm Tool Diameter</span> - <span class="in"><code>0.017</code> - <code>0.020</code></span><span class="mm"><code>0.4318</code> - <code>0.508</code></span>
          </br><span class="in">≥ 1/2" Tool Diameter</span><span class="mm">≥ 12.7mm Tool Diameter</span> - <span class="in"><code>0.021</code> - <code>0.023</code></span><span class="mm"><code>0.5334</code> - <code>0.5842</code></span>
          </p>
			</td>
		</tr>
    <tr class="tablehover" onclick="showHideRow('hidden_row2');">
        <td><i id="right2" class="fas fa-angle-right"></i><i id="down2" class="fas fa-angle-down"></i> Hard Wood</td>
        <td>Similar benefits to soft wood, can be a bit more costly - Maple, Walnut, Cherry, Ash, etc.</td>
    </tr>
    <tr id="hidden_row2" style="display: none;">
			<td>
        <img width="200px" src="https://teddywarner.org/images/MillingWorkflow/materials/wood.png">
			</td>
      <td>
        <ul>
        <li>Extremely Durable</li>
        <li>Enhanced strength when compared to softwoods, higher density</li>
        <li>Naturally more fire resistance than softwoods</li>
        </ul>
        <p><strong>Surface Speed</strong> <em>(<span class="ftmin">ft/min</span><span class="mmin">M/min</span>)</em> = <span class="ftmin"><code>650</code></span><span class="mmin"><code> 198.12 </code></span></p>
        <p><strong>Chip Load</strong> <em>(<span class="in">in</span><span class="mm">mm</span>)</em> -
        <div style="margin-left: 0.75em; margin-top:-2.5em;">
          </br><span class="in">1/8" Tool Diameter</span><span class="mm">3.175mm Tool Diameter</span> - <span class="in"><code>0.003</code> - <code>0.005</code></span><span class="mm"><code>0.0762</code> - <code>0.127</code></span>
          </br><span class="in">1/4" Tool Diameter</span><span class="mm">6.35mm Tool Diameter</span> - <span class="in"><code>0.009</code> - <code>0.011</code></span><span class="mm"><code>0.2286</code> - <code>0.2794</code></span>
          </br><span class="in">3/8" Tool Diameter</span><span class="mm">9.525mm Tool Diameter</span> - <span class="in"><code>0.016</code> - <code>0.018</code></span><span class="mm"><code>0.4064</code> - <code>0.4572</code></span>
          </br><span class="in">≥ 1/2" Tool Diameter</span><span class="mm">≥ 12.7mm Tool Diameter</span> - <span class="in"><code>0.019</code> - <code>0.021</code></span><span class="mm"><code>0.4826</code> - <code>0.5334</code></span>
          </p>
			</td>
		</tr>
    <tr class="tablehover" onclick="showHideRow('hidden_row3');">
        <td><i id="right3" class="fas fa-angle-right"></i><i id="down3" class="fas fa-angle-down"></i> Medium Density Fiberboard <code>MDF</code></td>
        <td>An easily machined & finished material, relatively cheap, commonly used for jigs, fixtures, vacuum molds & engraving.</td>
    </tr>
    <tr id="hidden_row3" style="display: none;">
			<td>
        <img width="200px" src="https://teddywarner.org/images/MillingWorkflow/materials/mdf.png">
			</td>
      <td>
        <p>⚠️ <b>Strong Dust Collection Required</b>, as the fused nature of the material creates extremely fine dust.</p>
        <ul>
        <li>Affordable & readily available</li>
        <li>Consistent, dense, heavy, flat & stiff</li>
        <li>Flex & crack resistant</li>
        <li>Easily machined</li>
        <li>Easy to post-process, paint & seal</li>
        </ul>
        <p><strong>Surface Speed</strong> <em>(<span class="ftmin">ft/min</span><span class="mmin">M/min</span>)</em> = <span class="ftmin"><code>650</code></span><span class="mmin"><code> 198.12 </code></span></p>
        <p><strong>Chip Load</strong> <em>(<span class="in">in</span><span class="mm">mm</span>)</em> -
        <div style="margin-left: 0.75em; margin-top:-2.5em;">
          </br><span class="in">1/8" Tool Diameter</span><span class="mm">3.175mm Tool Diameter</span> - <span class="in"><code>0.004</code> - <code>0.007</code></span><span class="mm"><code>0.1016</code> - <code>0.1778</code></span>
          </br><span class="in">1/4" Tool Diameter</span><span class="mm">6.35mm Tool Diameter</span> - <span class="in"><code>0.013</code> - <code>0.016</code></span><span class="mm"><code>0.3302</code> - <code>0.4064</code></span>
          </br><span class="in">3/8" Tool Diameter</span><span class="mm">9.525mm Tool Diameter</span> - <span class="in"><code>0.020</code> - <code>0.023</code></span><span class="mm"><code>0.508</code> - <code>0.5842</code></span>
          </br><span class="in">≥ 1/2" Tool Diameter</span><span class="mm">≥ 12.7mm Tool Diameter</span> - <span class="in"><code>0.025</code> - <code>0.027</code></span><span class="mm"><code>0.635</code> - <code>0.6858</code></span>
          </p>
			</td>
		</tr>
    <tr class="tablehover" onclick="showHideRow('hidden_row4');">
        <td><i id="right4" class="fas fa-angle-right"></i><i id="down4" class="fas fa-angle-down"></i> Oriented Strand Board <code>OBS</code></td>
        <td>A strong, light weight, cost-efficient material, a great choice for large scale stiff parts.</td>
    </tr>
    <tr id="hidden_row4" style="display: none;">
      <td>
        <ul>
        <li>Similar to plywood but contains no natural defects, knot free and consistent density</li>
        <li>Environmentally friendly, often produced from sustainable rapid growing trees</li>
        <li>Recyclable into new OBS</li>
        <li>Stiff & lightweight</li>
        </ul>
        <p><strong>Surface Speed</strong> <em>(<span class="ftmin">ft/min</span><span class="mmin">M/min</span>)</em> = <span class="ftmin"><code>650</code></span><span class="mmin"><code> 198.12 </code></span></p>
        <p><strong>Chip Load</strong> <em>(<span class="in">in</span><span class="mm">mm</span>)</em> -
        <div style="margin-left: 0.75em; margin-top:-2.5em;">
          </br><span class="in">1/8" Tool Diameter</span><span class="mm">3.175mm Tool Diameter</span> - <span class="in"><code>0.004</code> - <code>0.006</code></span><span class="mm"><code>0.1016</code> - <code>0.1524</code></span>
          </br><span class="in">1/4" Tool Diameter</span><span class="mm">6.35mm Tool Diameter</span> - <span class="in"><code>0.011</code> - <code>0.013</code></span><span class="mm"><code>0.2794</code> - <code>0.3302</code></span>
          </br><span class="in">3/8" Tool Diameter</span><span class="mm">9.525mm Tool Diameter</span> - <span class="in"><code>0.017</code> - <code>0.020</code></span><span class="mm"><code>0.4318</code> - <code>0.508</code></span>
          </br><span class="in">≥ 1/2" Tool Diameter</span><span class="mm">≥ 12.7mm Tool Diameter</span> - <span class="in"><code>0.021</code> - <code>0.023</code></span><span class="mm"><code>0.5334</code> - <code>0.5842</code></span>
          </p>
			</td>
			<td>
        <img width="200px" src="https://teddywarner.org/images/MillingWorkflow/materials/obs.png">
			</td>
		</tr>
    <tr class="tablehover" onclick="showHideRow('hidden_row5');">
        <td><i id="right5" class="fas fa-angle-right"></i><i id="down5" class="fas fa-angle-down"></i> High-density Polyethylene <code>HDPE</code></td>
        <td>A soft-ish plastic, great for prototyping but a tricky material to mill.</td>
    </tr>
    <tr id="hidden_row5" style="display: none;">
			<td>
        <img width="200px" src="https://teddywarner.org/images/MillingWorkflow/materials/hdpe.png">
			</td>
      <td>
        <ul>
        <li>Impact resistant at low temperatures</li>
        <li>Great Chemical resistance</li>
        <li>UV Resistant</li>
        <li>Moisture Resistant</li>
        <li>Stiff & strong</li>
        <li>Emits not hazardous odors or waste</li>
        </ul>
        <p><strong>Surface Speed</strong> <em>(<span class="ftmin">ft/min</span><span class="mmin">M/min</span>)</em> = <span class="ftmin"><code>450</code></span><span class="mmin"><code> 137.16 </code></span></p>
        <p><strong>Chip Load</strong> <em>(<span class="in">in</span><span class="mm">mm</span>)</em> -
        <div style="margin-left: 0.75em; margin-top:-2.5em;">
          </br><span class="in">1/8" Tool Diameter</span><span class="mm">3.175mm Tool Diameter</span> - <span class="in"><code>0.003</code> - <code>0.006</code></span><span class="mm"><code>0.0762</code> - <code>0.1524</code></span>
          </br><span class="in">1/4" Tool Diameter</span><span class="mm">6.35mm Tool Diameter</span> - <span class="in"><code>0.007</code> - <code>0.010</code></span><span class="mm"><code>0.1778</code> - <code>0.254</code></span>
          </br><span class="in">3/8" Tool Diameter</span><span class="mm">9.525mm Tool Diameter</span> - <span class="in"><code>0.010</code> - <code>0.012</code></span><span class="mm"><code>0.254</code> - <code>0.3048</code></span>
          </br><span class="in">≥ 1/2" Tool Diameter</span><span class="mm">≥ 12.7mm Tool Diameter</span> - <span class="in"><code>0.012</code> - <code>0.016</code></span><span class="mm"><code>0.3048</code> - <code>0.4064</code></span>
          </p>
			</td>
		</tr>
    <tr class="tablehover" onclick="showHideRow('hidden_row6');">
        <td><i id="right6" class="fas fa-angle-right"></i><i id="down6" class="fas fa-angle-down"></i> Polyetheretherketone <code>PEEK</code></td>
        <td>A high-performance thermoplastic, great for structural applications with resistance to fatigue and stress-cracking.</td>
    </tr>
    <tr id="hidden_row6" style="display: none;">
      <td>
        <p>⚠️ PEEK is rather abrasive on tooling, <b>Carbide or Polycrystalline (PCD) tooling should be used</b>.</p>
        <ul>
        <li>Comparable performance to Human bone tissue</li>
        <li>Resistant to chemicals and radiation</li>
        <li>Great strength to weight ratio</li>
        <li>Creep-resistant & long-wearing</li>
        <li>Great strength to weight ratio</li>
        <li>Temperature resistant, can operate up to 480° F</li>
        <li>Easy to machine</li>
        </ul>
        <p><strong>Surface Speed</strong> <em>(<span class="ftmin">ft/min</span><span class="mmin">M/min</span>)</em> = <span class="ftmin"><code>500</code></span><span class="mmin"><code> 152.4 </code></span></p>
        <p><strong>Chip Load</strong> <em>(<span class="in">in</span><span class="mm">mm</span>)</em> -
        <div style="margin-left: 0.75em; margin-top:-2.5em;">
          </br><span class="in">1/8" Tool Diameter</span><span class="mm">3.175mm Tool Diameter</span> - <span class="in"><code>0.002</code> - <code>0.004</code></span><span class="mm"><code>0.0508</code> - <code>0.1016</code></span>
          </br><span class="in">1/4" Tool Diameter</span><span class="mm">6.35mm Tool Diameter</span> - <span class="in"><code>0.006</code> - <code>0.009</code></span><span class="mm"><code>0.1524</code> - <code>0.2286</code></span>
          </br><span class="in">3/8" Tool Diameter</span><span class="mm">9.525mm Tool Diameter</span> - <span class="in"><code>0.008</code> - <code>0.010</code></span><span class="mm"><code>0.2032</code> - <code>0.254</code></span>
          </br><span class="in">≥ 1/2" Tool Diameter</span><span class="mm">≥ 12.7mm Tool Diameter</span> - <span class="in"><code>0.010</code> - <code>0.012</code></span><span class="mm"><code>0.254</code> - <code>0.3048</code></span>
          </p>
			</td>
			<td>
        <img width="200px" src="https://teddywarner.org/images/MillingWorkflow/materials/peek.png" align="left">
			</td>
		</tr>
    <tr class="tablehover" onclick="showHideRow('hidden_row7');">
        <td><i id="right7" class="fas fa-angle-right"></i><i id="down7" class="fas fa-angle-down"></i> Polyetherimide <code>PEI</code></td>
        <td>A high-performance thermoplastic, with great heat, solvent & flame resistant. Often used in applications with long term steam exposure.</td>
    </tr>
    <tr id="hidden_row7" style="display: none;">
      <td>
        <ul>
        <li>High deflection temperature at 400° F</li>
        <li>Resistant to chemicals and radiation</li>
        <li>Creep-resistant, strong & rigid</li>
        <li>Heat & flame resistant</li>
        </ul>
        <p><strong>Surface Speed</strong> <em>(<span class="ftmin">ft/min</span><span class="mmin">M/min</span>)</em> = <span class="ftmin"><code>360</code></span><span class="mmin"><code> 109.728 </code></span></p>
        <p><strong>Chip Load</strong> <em>(<span class="in">in</span><span class="mm">mm</span>)</em> -
        <div style="margin-left: 0.75em; margin-top:-2.5em;">
          </br><span class="in">1/8" Tool Diameter</span><span class="mm">3.175mm Tool Diameter</span> - <span class="in"><code>0.002</code> - <code>0.004</code></span><span class="mm"><code>0.0508</code> - <code>0.1016</code></span>
          </br><span class="in">1/4" Tool Diameter</span><span class="mm">6.35mm Tool Diameter</span> - <span class="in"><code>0.006</code> - <code>0.009</code></span><span class="mm"><code>0.1524</code> - <code>0.2286</code></span>
          </br><span class="in">3/8" Tool Diameter</span><span class="mm">9.525mm Tool Diameter</span> - <span class="in"><code>0.008</code> - <code>0.010</code></span><span class="mm"><code>0.2032</code> - <code>0.254</code></span>
          </br><span class="in">≥ 1/2" Tool Diameter</span><span class="mm">≥ 12.7mm Tool Diameter</span> - <span class="in"><code>0.010</code> - <code>0.012</code></span><span class="mm"><code>0.254</code> - <code>0.3048</code></span>
          </p>
			</td>
			<td>
        <img width="200px" src="https://teddywarner.org/images/MillingWorkflow/materials/pei.png">
			</td>
		</tr>
    <tr class="tablehover" onclick="showHideRow('hidden_row8');">
        <td><i id="right8" class="fas fa-angle-right"></i><i id="down8" class="fas fa-angle-down"></i> Polyvinyl Chloride <code>PVC</code></td>
        <td>An cost efficient & accessible plastic, typically used across industry but offers a cheap & lightweight medium.</td>
    </tr>
    <tr id="hidden_row8" style="display: none;">
			<td>
        <img width="200px" src="https://teddywarner.org/images/MillingWorkflow/materials/pvc.png">
			</td>
      <td>
        <ul>
        <li>Lightweight & durable</li>
        <li>Easy to process</li>
        <li>Low cost & accessible</li>
        <li>Waterproof</li>
        <li>Easy to machine</li>
        </ul>
        <p><strong>Surface Speed</strong> <em>(<span class="ftmin">ft/min</span><span class="mmin">M/min</span>)</em> = <span class="ftmin"><code>250</code></span><span class="mmin"><code> 76.2 </code></span></p>
        <p><strong>Chip Load</strong> <em>(<span class="in">in</span><span class="mm">mm</span>)</em> -
        <div style="margin-left: 0.75em; margin-top:-2.5em;">
          </br><span class="in">1/8" Tool Diameter</span><span class="mm">3.175mm Tool Diameter</span> - <span class="in"><code>0.002</code> - <code>0.004</code></span><span class="mm"><code>0.0508</code> - <code>0.1016</code></span>
          </br><span class="in">1/4" Tool Diameter</span><span class="mm">6.35mm Tool Diameter</span> - <span class="in"><code>0.006</code> - <code>0.009</code></span><span class="mm"><code>0.1524</code> - <code>0.2286</code></span>
          </br><span class="in">3/8" Tool Diameter</span><span class="mm">9.525mm Tool Diameter</span> - <span class="in"><code>0.008</code> - <code>0.010</code></span><span class="mm"><code>0.2032</code> - <code>0.254</code></span>
          </br><span class="in">≥ 1/2" Tool Diameter</span><span class="mm">≥ 12.7mm Tool Diameter</span> - <span class="in"><code>0.010</code> - <code>0.012</code></span><span class="mm"><code>0.254</code> - <code>0.3048</code></span>
          </p>
			</td>
		</tr>
    <tr class="tablehover" onclick="showHideRow('hidden_row9');">
        <td><i id="right9" class="fas fa-angle-right"></i><i id="down9" class="fas fa-angle-down"></i> Polyoxymethylene <code>POM</code></td>
        <td>A general purpose, good all around thermoplastic - also know as <i>Acetal</i> or <i>Delrin</i>.</td>
    </tr>
    <tr id="hidden_row9" style="display: none;">
			<td>
        <img width="200px" src="https://teddywarner.org/images/MillingWorkflow/materials/pom.png">
			</td>
      <td>
        <ul>
        <li>Strong, tough & ridged</li>
        <li>Great impact strength</li>
        <li>Easy to machine</li>
        <li>High dimensional accuracy</li>
        <li>Wear resistant</li>
        </ul>
        <p><strong>Surface Speed</strong> <em>(<span class="ftmin">ft/min</span><span class="mmin">M/min</span>)</em> = <span class="ftmin"><code>375</code></span><span class="mmin"><code> 114.3 </code></span></p>
        <p><strong>Chip Load</strong> <em>(<span class="in">in</span><span class="mm">mm</span>)</em> -
        <div style="margin-left: 0.75em; margin-top:-2.5em;">
          </br><span class="in">1/8" Tool Diameter</span><span class="mm">3.175mm Tool Diameter</span> - <span class="in"><code>0.002</code> - <code>0.004</code></span><span class="mm"><code>0.0508</code> - <code>0.1016</code></span>
          </br><span class="in">1/4" Tool Diameter</span><span class="mm">6.35mm Tool Diameter</span> - <span class="in"><code>0.006</code> - <code>0.009</code></span><span class="mm"><code>0.1524</code> - <code>0.2286</code></span>
          </br><span class="in">3/8" Tool Diameter</span><span class="mm">9.525mm Tool Diameter</span> - <span class="in"><code>0.008</code> - <code>0.010</code></span><span class="mm"><code>0.2032</code> - <code>0.254</code></span>
          </br><span class="in">≥ 1/2" Tool Diameter</span><span class="mm">≥ 12.7mm Tool Diameter</span> - <span class="in"><code>0.010</code> - <code>0.012</code></span><span class="mm"><code>0.254</code> - <code>0.3048</code></span>
          </p>
			</td>
		</tr>
    <tr class="tablehover" onclick="showHideRow('hidden_row10');">
        <td><i id="right10" class="fas fa-angle-right"></i><i id="down10" class="fas fa-angle-down"></i> Acrylonitrile Butadiene Styrene <code>ABS</code></td>
        <td>Easily accessed & low cost thermoplastic, commonly used for molding applications.</td>
    </tr>
    <tr id="hidden_row10" style="display: none;">
			<td>
        <img width="200px" src="https://teddywarner.org/images/MillingWorkflow/materials/abs.png">
			</td>
      <td>
        <ul>
        <li>Ridged, good abrasion and strain resistance</li>
        <li>High dimensional accuracy</li>
        <li>Good impact resistance</li>
        <li>Can be chemically welded</li>
        <li>Good insulating properties</li>
        <li>Easy to machine</li>
        </ul>
        <p><strong>Surface Speed</strong> <em>(<span class="ftmin">ft/min</span><span class="mmin">M/min</span>)</em> = <span class="ftmin"><code>300</code></span><span class="mmin"><code> 91.44 </code></span></p>
        <p><strong>Chip Load</strong> <em>(<span class="in">in</span><span class="mm">mm</span>)</em> -
        <div style="margin-left: 0.75em; margin-top:-2.5em;">
          </br><span class="in">1/8" Tool Diameter</span><span class="mm">3.175mm Tool Diameter</span> - <span class="in"><code>0.002</code> - <code>0.004</code></span><span class="mm"><code>0.0508</code> - <code>0.1016</code></span>
          </br><span class="in">1/4" Tool Diameter</span><span class="mm">6.35mm Tool Diameter</span> - <span class="in"><code>0.006</code> - <code>0.009</code></span><span class="mm"><code>0.1524</code> - <code>0.2286</code></span>
          </br><span class="in">3/8" Tool Diameter</span><span class="mm">9.525mm Tool Diameter</span> - <span class="in"><code>0.008</code> - <code>0.010</code></span><span class="mm"><code>0.2032</code> - <code>0.254</code></span>
          </br><span class="in">≥ 1/2" Tool Diameter</span><span class="mm">≥ 12.7mm Tool Diameter</span> - <span class="in"><code>0.010</code> - <code>0.012</code></span><span class="mm"><code>0.254</code> - <code>0.3048</code></span>
          </p>
			</td>
		</tr>
    <tr class="tablehover" onclick="showHideRow('hidden_row11');">
        <td><i id="right11" class="fas fa-angle-right"></i><i id="down11" class="fas fa-angle-down"></i> Polycarbonate <code>PC</code></td>
        <td>An incredibly strong and possibly transparent thermoplastic, known for maintained temperature resistance.</td>
    </tr>
    <tr id="hidden_row11" style="display: none;">
      <td>
        <ul>
        <li>Outstanding strength, stiffness & impact resistance</li>
        <li>Resists cracking, chips, dents & scratches</li>
        <li>Easy to paint</li>
        <li>Chemically weldable</li>
        </ul>
        <p><strong>Surface Speed</strong> <em>(<span class="ftmin">ft/min</span><span class="mmin">M/min</span>)</em> = <span class="ftmin"><code>360</code></span><span class="mmin"><code> 109.728 </code></span></p>
        <p><strong>Chip Load</strong> <em>(<span class="in">in</span><span class="mm">mm</span>)</em> -
        <div style="margin-left: 0.75em; margin-top:-2.5em;">
          </br><span class="in">1/8" Tool Diameter</span><span class="mm">3.175mm Tool Diameter</span> - <span class="in"><code>0.002</code> - <code>0.004</code></span><span class="mm"><code>0.0508</code> - <code>0.1016</code></span>
          </br><span class="in">1/4" Tool Diameter</span><span class="mm">6.35mm Tool Diameter</span> - <span class="in"><code>0.006</code> - <code>0.009</code></span><span class="mm"><code>0.1524</code> - <code>0.2286</code></span>
          </br><span class="in">3/8" Tool Diameter</span><span class="mm">9.525mm Tool Diameter</span> - <span class="in"><code>0.008</code> - <code>0.010</code></span><span class="mm"><code>0.2032</code> - <code>0.254</code></span>
          </br><span class="in">≥ 1/2" Tool Diameter</span><span class="mm">≥ 12.7mm Tool Diameter</span> - <span class="in"><code>0.010</code> - <code>0.012</code></span><span class="mm"><code>0.254</code> - <code>0.3048</code></span>
          </p>
			</td>
			<td>
        <img width="200px" src="https://teddywarner.org/images/MillingWorkflow/materials/pc.png">
			</td>
		</tr>
    <tr class="tablehover" onclick="showHideRow('hidden_row12');">
        <td><i id="right12" class="fas fa-angle-right"></i><i id="down12" class="fas fa-angle-down"></i> Nylon</td>
        <td>A cost-effective & long-lasting thermoplastic, used in cases of required mechanical dampening or electrical insulation.</td>
    </tr>
    <tr id="hidden_row12" style="display: none;">
			<td>
        <img width="200px" src="https://teddywarner.org/images/MillingWorkflow/materials/nylon.png">
			</td>
      <td>
        <ul>
        <li>Strong & durable</li>
        <li>Lightweight & elastic</li>
        <li>Low friction</li>
        <li>Corrosion & abrasion resistant</li>
        <li>Great insulating prosperities</li>
        </ul>
        <p><strong>Surface Speed</strong> <em>(<span class="ftmin">ft/min</span><span class="mmin">M/min</span>)</em> = <span class="ftmin"><code>400</code></span><span class="mmin"><code> 121.92 </code></span></p>
        <p><strong>Chip Load</strong> <em>(<span class="in">in</span><span class="mm">mm</span>)</em> -
        <div style="margin-left: 0.75em; margin-top:-2.5em;">
          </br><span class="in">1/8" Tool Diameter</span><span class="mm">3.175mm Tool Diameter</span> - <span class="in"><code>0.002</code> - <code>0.004</code></span><span class="mm"><code>0.0508</code> - <code>0.1016</code></span>
          </br><span class="in">1/4" Tool Diameter</span><span class="mm">6.35mm Tool Diameter</span> - <span class="in"><code>0.006</code> - <code>0.009</code></span><span class="mm"><code>0.1524</code> - <code>0.2286</code></span>
          </br><span class="in">3/8" Tool Diameter</span><span class="mm">9.525mm Tool Diameter</span> - <span class="in"><code>0.008</code> - <code>0.010</code></span><span class="mm"><code>0.2032</code> - <code>0.254</code></span>
          </br><span class="in">≥ 1/2" Tool Diameter</span><span class="mm">≥ 12.7mm Tool Diameter</span> - <span class="in"><code>0.010</code> - <code>0.012</code></span><span class="mm"><code>0.254</code> - <code>0.3048</code></span>
          </p>
			</td>
		</tr>
    <tr class="tablehover" onclick="showHideRow('hidden_row13');">
        <td><i id="right13" class="fas fa-angle-right"></i><i id="down13" class="fas fa-angle-down"></i> Acrylic</td>
        <td>A lightweight insulating  thermoplastic, serves as an effective replacement for glass.</td>
    </tr>
    <tr id="hidden_row13" style="display: none;">
			<td>
        <img width="200px" src="https://teddywarner.org/images/MillingWorkflow/materials/acrylic.png">
			</td>
      <td>
      <p>⚠️ Acrylic is prone to stress cracks & fractures during milling & post-processing.</p>
        <ul>
        <li>Transparent & UV resistant</li>
        <li>Good impact resistance</li>
        <li>Great thermal insulation</li>
        </ul>
        <p><strong>Surface Speed</strong> <em>(<span class="ftmin">ft/min</span><span class="mmin">M/min</span>)</em> = <span class="ftmin"><code>500</code>, <code>130</code></span><span class="mmin"><code>152.4</code>, <code>39.624</code></span> without coolant</p>
        <p><strong>Chip Load</strong> <em>(<span class="in">in</span><span class="mm">mm</span>)</em> -
        <div style="margin-left: 0.75em; margin-top:-2.5em;">
          </br><span class="in">1/8" Tool Diameter</span><span class="mm">3.175mm Tool Diameter</span> - <span class="in"><code>0.003</code> - <code>0.005</code></span><span class="mm"><code>0.0762</code> - <code>0.127</code></span>
          </br><span class="in">1/4" Tool Diameter</span><span class="mm">6.35mm Tool Diameter</span> - <span class="in"><code>0.008</code> - <code>0.010</code></span><span class="mm"><code>0.2032</code> - <code>0.254</code></span>
          </br><span class="in">3/8" Tool Diameter</span><span class="mm">9.525mm Tool Diameter</span> - <span class="in"><code>0.010</code> - <code>0.012</code></span><span class="mm"><code>0.254</code> - <code>0.3048</code></span>
          </br><span class="in">≥ 1/2" Tool Diameter</span><span class="mm">≥ 12.7mm Tool Diameter</span> - <span class="in"><code>0.012</code> - <code>0.015</code></span><span class="mm"><code>0.3048</code> - <code>0.381</code></span>
          </p>
			</td>
		</tr>
    <tr class="tablehover" onclick="showHideRow('hidden_row21');">
        <td><i id="right21" class="fas fa-angle-right"></i><i id="down21" class="fas fa-angle-down"></i> Carbon Fiber</td>
        <td>A strong & lightweight composite of carbon based fibers, desirable for various industrial applications due to its heat & chemical resistance.</td>
    </tr>
    <tr id="hidden_row21" style="display: none;">
      <td>
        <p>⚠️ Carbon fiber is incredibly abrasive and will wear down tooling & dull bits will pull fibers from the composite  instead of cutting through them. <b>The use of Carbide and Polycrystalline Diamond (PCD) bits are optimal while milling carbon fiber</b>, as they offer a superior wear resistance.</p>
        <ul>
        <li>Lightweight</li>
        <li>Stiff & Strong</li>
        <li>High temperature tolerance with low thermal expansion</li>
        <li>Resistant to chemical abrasion</li>
        </ul>
        <p><strong>Surface Speed</strong> <em>(<span class="ftmin">ft/min</span><span class="mmin">M/min</span>)</em> = <span class="ftmin"><code>5.45</code></span><span class="mmin"><code> 1.66116 </code></span></p>
        <p><strong>Chip Load</strong> <em>(<span class="in">in</span><span class="mm">mm</span>)</em> -
        <div style="margin-left: 0.75em; margin-top:-2.5em;">
          </br><span class="in">1/8" Tool Diameter</span><span class="mm">3.175mm Tool Diameter</span> - <span class="in"><code>0.003</code> - <code>0.006</code></span><span class="mm"><code>0.0762</code> - <code>0.1524</code></span>
          </br><span class="in">1/4" Tool Diameter</span><span class="mm">6.35mm Tool Diameter</span> - <span class="in"><code>0.009</code> - <code>0.012</code></span><span class="mm"><code>0.2286</code> - <code>0.3048</code></span>
          </br><span class="in">3/8" Tool Diameter</span><span class="mm">9.525mm Tool Diameter</span> - <span class="in"><code>0.016</code> - <code>0.018</code></span><span class="mm"><code>0.4064</code> - <code>0.4572</code></span>
          </br><span class="in">≥ 1/2" Tool Diameter</span><span class="mm">≥ 12.7mm Tool Diameter</span> - <span class="in"><code>0.023</code> - <code>0.025</code></span><span class="mm"><code>0.5842</code> - <code>0.635</code></span>
          </p>
			</td>
			<td>
        <img width="200px" src="https://teddywarner.org/images/MillingWorkflow/materials/cf.png">
			</td>
		</tr>
    <tr class="tablehover" onclick="showHideRow('hidden_row14');">
        <td><i id="right14" class="fas fa-angle-right"></i><i id="down14" class="fas fa-angle-down"></i> Aluminium</td>
        <td>An accessible, easy to mill metal, seen across thermal & electrical conducting components.</td>
    </tr>
    <tr id="hidden_row14" style="display: none;">
			<td>
        <img width="200px" src="https://teddywarner.org/images/MillingWorkflow/materials/aluminum.png">
			</td>
      <td>
        <ul>
        <li>Easy to machine</li>
        <li>Non-magnetic</li>
        <li>Lightweight & durable metal</li>
        <li>Good electrical & heat conductor</li>
        </ul>
        <p><strong>Surface Speed</strong> <em>(<span class="ftmin">ft/min</span><span class="mmin">M/min</span>)</em> = <span class="ftmin"><code>600</code>, <code>200</code></span><span class="mmin"><code>182.88</code>, <code>60.96</code></span> without coolant</p>
        <p><strong>Chip Load</strong> <em>(<span class="in">in</span><span class="mm">mm</span>)</em> -
        <div style="margin-left: 0.75em; margin-top:-2.5em;">
          </br><span class="in">1/8" Tool Diameter</span><span class="mm">3.175mm Tool Diameter</span> - <span class="in"><code>0.003</code> - <code>0.004</code></span><span class="mm"><code>0.0762</code> - <code>0.1016</code></span>
          </br><span class="in">1/4" Tool Diameter</span><span class="mm">6.35mm Tool Diameter</span> - <span class="in"><code>0.005</code> - <code>0.007</code></span><span class="mm"><code>0.127</code> - <code>0.1778</code></span>
          </br><span class="in">3/8" Tool Diameter</span><span class="mm">9.525mm Tool Diameter</span> - <span class="in"><code>0.006</code> - <code>0.008</code></span><span class="mm"><code>0.1524</code> - <code>0.2032</code></span>
          </br><span class="in">≥ 1/2" Tool Diameter</span><span class="mm">≥ 12.7mm Tool Diameter</span> - <span class="in"><code>0.008</code> - <code>0.010</code></span><span class="mm"><code>0.2032</code> - <code>0.254</code></span>
          </p>
			</td>
		</tr>
    <tr class="tablehover" onclick="showHideRow('hidden_row15');">
        <td><i id="right15" class="fas fa-angle-right"></i><i id="down15" class="fas fa-angle-down"></i> Brass</td>
        <td>A easy to machine & highly conductive metal, ideal for low friction & intricate parts.</td>
    </tr>
    <tr id="hidden_row15" style="display: none;">
      <td>
        <ul>
        <li>Easy to machine</li>
        <li>Non-magnetic</li>
        <li>Highly electrical & thermal conductive</li>
        <li>Wear & corrosion resistant</li>
        <li>High malleability</li>
        <li>Antibacterial</li>
        </ul>
        <p><strong>Surface Speed</strong> <em>(<span class="ftmin">ft/min</span><span class="mmin">M/min</span>)</em> = <span class="ftmin"><code>600</code></span><span class="mmin"><code> 182.88 </code></span></p>
        <p><strong>Chip Load</strong> <em>(<span class="in">in</span><span class="mm">mm</span>)</em> -
        <div style="margin-left: 0.75em; margin-top:-2.5em;">
          </br><span class="in">1/8" Tool Diameter</span><span class="mm">3.175mm Tool Diameter</span> - <span class="in"><code>0.0004</code> - <code>0.0010</code></span><span class="mm"><code>0.01016</code> - <code>0.0254</code></span>
          </br><span class="in">1/4" Tool Diameter</span><span class="mm">6.35mm Tool Diameter</span> - <span class="in"><code>0.0005</code> - <code>0.0020</code></span><span class="mm"><code>0.0127</code> - <code>0.0508</code></span>
          </br><span class="in">3/8" Tool Diameter</span><span class="mm">9.525mm Tool Diameter</span> - <span class="in"><code>0.0005</code> - <code>0.0030</code></span><span class="mm"><code>0.0127</code> - <code>0.0762</code></span>
          </br><span class="in">≥ 1/2" Tool Diameter</span><span class="mm">≥ 12.7mm Tool Diameter</span> - <span class="in"><code>0.0010</code> - <code>0.0060</code></span><span class="mm"><code>0.0254</code> - <code>0.1524</code></span>
          </p>
			</td>
			<td>
        <img width="200px" src="https://teddywarner.org/images/MillingWorkflow/materials/brass.png">
			</td>
		</tr>
    <tr class="tablehover" onclick="showHideRow('hidden_row16');">
        <td><i id="right16" class="fas fa-angle-right"></i><i id="down16" class="fas fa-angle-down"></i> Copper</td>
        <td>A malleable metal, typically used for its high electrical & thermal conductivity.</td>
    </tr>
    <tr id="hidden_row16" style="display: none;">
			<td>
        <img width="200px" src="https://teddywarner.org/images/MillingWorkflow/materials/copper.png">
			</td>
      <td>
        <ul>
        <li>Non-magnetic</li>
        <li>High electrical & thermal conductivity</li>
        <li>Wear & corrosion resistant</li>
        <li>High malleability</li>
        <li>Antibacterial</li>
        </ul>
        <p><strong>Surface Speed</strong> <em>(<span class="ftmin">ft/min</span><span class="mmin">M/min</span>)</em> = <span class="ftmin"><code>550</code></span><span class="mmin"><code> 167.64 </code></span></p>
        <p><strong>Chip Load</strong> <em>(<span class="in">in</span><span class="mm">mm</span>)</em> -
        <div style="margin-left: 0.75em; margin-top:-2.5em;">
          </br><span class="in">1/8" Tool Diameter</span><span class="mm">3.175mm Tool Diameter</span> - <span class="in"><code>0.0004</code> - <code>0.0010</code></span><span class="mm"><code>0.01016</code> - <code>0.0254</code></span>
          </br><span class="in">1/4" Tool Diameter</span><span class="mm">6.35mm Tool Diameter</span> - <span class="in"><code>0.0005</code> - <code>0.0020</code></span><span class="mm"><code>0.0127</code> - <code>0.0508</code></span>
          </br><span class="in">3/8" Tool Diameter</span><span class="mm">9.525mm Tool Diameter</span> - <span class="in"><code>0.0005</code> - <code>0.0030</code></span><span class="mm"><code>0.0127</code> - <code>0.0762</code></span>
          </br><span class="in">≥ 1/2" Tool Diameter</span><span class="mm">≥ 12.7mm Tool Diameter</span> - <span class="in"><code>0.0010</code> - <code>0.0060</code></span><span class="mm"><code>0.0254</code> - <code>0.1524</code></span>
          </p>
			</td>
		</tr>
    <tr class="tablehover" onclick="showHideRow('hidden_row17');">
        <td><i id="right17" class="fas fa-angle-right"></i><i id="down17" class="fas fa-angle-down"></i> Steel</td>
        <td>An iron alloy with high strength & fracture resistance, typically used in situations requiring its high tensile strength, such as tools & machines.</td>
    </tr>
    <tr id="hidden_row17" style="display: none;">
      <td>
        <ul>
        <li>High strength & durable</li>
        <li>High fracture resistance</li>
        <li>Wear & corrosion resistant</li>
        </ul>
        <p><strong>Surface Speed</strong> <em>(<span class="ftmin">ft/min</span><span class="mmin">M/min</span>)</em> = <span class="ftmin"><code>200</code>, <code>50</code></span><span class="mmin"><code>60.96</code>, <code>15.24</code></span> without coolant</p>
        <p><strong>Chip Load</strong> <em>(<span class="in">in</span><span class="mm">mm</span>)</em> -
        <div style="margin-left: 0.75em; margin-top:-2.5em;">
          </br><span class="in">1/8" Tool Diameter</span><span class="mm">3.175mm Tool Diameter</span> - <span class="in"><code>0.0004</code> - <code>0.0008</code></span><span class="mm"><code>0.01016</code> - <code>0.02032</code></span>
          </br><span class="in">1/4" Tool Diameter</span><span class="mm">6.35mm Tool Diameter</span> - <span class="in"><code>0.0008</code> - <code>0.0010</code></span><span class="mm"><code>0.02032</code> - <code>0.0254</code></span>
          </br><span class="in">3/8" Tool Diameter</span><span class="mm">9.525mm Tool Diameter</span> - <span class="in"><code>0.0012</code> - <code>0.0015</code></span><span class="mm"><code>0.03048</code> - <code>0.0381</code></span>
          </br><span class="in">≥ 1/2" Tool Diameter</span><span class="mm">≥ 12.7mm Tool Diameter</span> - <span class="in"><code>0.0015</code> - <code>0.0025</code></span><span class="mm"><code>0.0381</code> - <code>0.0635</code></span>
          </p>
			</td>
			<td>
        <img width="200px" src="https://teddywarner.org/images/MillingWorkflow/materials/steel.png">
			</td>
		</tr>
    <tr class="tablehover" onclick="showHideRow('hidden_row18');">
        <td><i id="right18" class="fas fa-angle-right"></i><i id="down18" class="fas fa-angle-down"></i> Insulation Foam</td>
        <td>A low cost, accessible & easy to mill material, commonly used for large molds & as cores for lightweight parts. </td>
    </tr>
    <tr id="hidden_row18" style="display: none;">
			<td>
        <img width="200px" src="https://teddywarner.org/images/MillingWorkflow/materials/foam.png">
			</td>
      <td>
        <ul>
        <li>Easy to machine</li>
        <li>High mechanical strength with very low density</li>
        <li>Thermal insulating properties</li>
        <li>Cheap & accessible</li>
        <li>Resistance to water absorption</li>
        </ul>
        <p><strong>Surface Speed</strong> <em>(<span class="ftmin">ft/min</span><span class="mmin">M/min</span>)</em> = <span class="ftmin"><code>1000</code></span><span class="mmin"><code> 304.8 </code></span></p>
        <p><strong>Chip Load</strong> <em>(<span class="in">in</span><span class="mm">mm</span>)</em> -
        <div style="margin-left: 0.75em; margin-top:-2.5em;">
          </br><span class="in">1/8" Tool Diameter</span><span class="mm">3.175mm Tool Diameter</span> - <span class="in"><code>0.004</code> - <code>0.006</code></span><span class="mm"><code>0.1016</code> - <code>0.1524</code></span>
          </br><span class="in">1/4" Tool Diameter</span><span class="mm">6.35mm Tool Diameter</span> - <span class="in"><code>0.011</code> - <code>0.013</code></span><span class="mm"><code>0.2794</code> - <code>0.3302</code></span>
          </br><span class="in">3/8" Tool Diameter</span><span class="mm">9.525mm Tool Diameter</span> - <span class="in"><code>0.017</code> - <code>0.020</code></span><span class="mm"><code>0.4318</code> - <code>0.508</code></span>
          </br><span class="in">≥ 1/2" Tool Diameter</span><span class="mm">≥ 12.7mm Tool Diameter</span> - <span class="in"><code>0.021</code> - <code>0.023</code></span><span class="mm"><code>0.5334</code> - <code>0.5842</code></span>
          </p>
			</td>
		</tr>
</table>

</center>

### Feeds & Speeds Calculator

Plug in your tool and material settings to derive *Spindle Speed (RPM), Feed Rate, Plunge Rate, Stepdown, Stepover*. On the of chance you'd like these values in Metric units, toggle the *Metric?* checkbox above.

!!! warning ""

    <div class="FluteCountParent"><div class="quantity"><label for="flutes">Flute Count:</label><input type="number" class="calcinput" id="flutes" min="1" max="12" step="1" value="1"></div></div>
        <br><br>
    <div class="outlined-input"><input type="text" class="calcinput" id="diameter" name="diameter" placeholder=" "><label for="diameter">Tool Diameter (<span class="in">in</span><span class="mm">mm</span>)</label></div>
        <br><br>
    <div class="outlined-input"><input type="text" class="calcinput" id="surface" name="surface" placeholder=" "><label for="surface">Surface Speed (<span class="ftmin">ft/min</span><span class="mmin">M/min</span>)</label></div>
        <br><br>
    <div class="outlined-input"><input type="text" class="calcinput" id="chips" name="chips" placeholder=" "><label for="chips">Chip Load (<span class="in">in</span><span class="mm">mm</span>)</label></div>
      
    <hr></hr>

    <div id="outputval">
    <div class="outlined-input"><input type="text" class="calcinput" id="speed" name="speed" placeholder=" " disabled><label for="speed">Spindle Speed (RPM)</label></div>
        <br><br>
    <div class="outlined-input"><input type="text" class="calcinput" id="feed" name="feed" placeholder=" " disabled><label for="feed">Feed Rate (<span class="inmin">in/min</span><span class="mmmin">mm/min</span>)</label></div>
        <br><br>
    <div class="outlined-input"><input type="text" class="calcinput" id="plunge" name="plunge" placeholder=" " disabled><label for="plunge">Plunge Rate (<span class="inmin">in/min</span><span class="mmmin">mm/min</span>)</label></div>
        <br><br>
    <div class="outlined-input"><input type="text" class="calcinput" id="down" name="down" placeholder=" " disabled><label for="down">Stepdown (<span class="in">in</span><span class="mm">mm</span>)</label></div>
        <br><br>
    <div class="outlined-input"><input type="text" class="calcinput" id="over" name="over" placeholder=" " disabled><label for="diameter">Stepover (<span class="in">in</span><span class="mm">mm</span>)</label></div>
    </div>
        
    <button class="calcbutton" onclick="calculate()"> Calculate </button>
    <button class="calcbutton" onclick="myFunction()"> Clear </button>

## Fusion 360 CAM

<center>

![](../images/MillingWorkflow/FusionBanner.jpg){width="100%"}

</center>

[Fusion 360 Manufacturing Overview](https://help.autodesk.com/view/fusion360/ENU/?guid=GUID-BEC5DEA9-AC3E-4FA8-998E-4AE8CD0D0B1E)

[Fusion 360 & Bantam Milling](https://support.bantamtools.com/hc/en-us/articles/115001671574-Fusion-360)

[Fusion 360 Bantam Tool Library](https://support.bantamtools.com/hc/article_attachments/115002419813/Bantam%20Tools%20Tool%20Library%200.3.zip)

### Gale Crater Mill

### Wax Seal Stamp

### Chocolate Molding


## Vectric Aspire

<center>

![](../images/MillingWorkflow/AspireBanner.png){width="55%"}

</center>

[VCarve & Bantam Milling](https://support.bantamtools.com/hc/en-us/articles/115001668333-VCarve)

[Bantam Post-processer for Vectric Aspire](https://support.bantamtools.com/hc/en-us/article_attachments/115002242053/Othermill_tinyG_mm.pp.zip )

### Topography Paper Weight

<center>

[Terrain2STL :fontawesome-solid-earth-americas:](https://jthatch.com/Terrain2STL/){ .md-button .md-button--primary}

</center>

<center>

![](../images/MillingWorkflow/topographylocation.jpg){width="55%"}
  <figcaption>Caption</figcaption>

</center>

<center>

![](../images/MillingWorkflow/Topographyselection.jpg){width="100%"}
  <figcaption>Caption</figcaption>

</center>

<center>

![](../images/MillingWorkflow/topographywaterbase.jpg){width="55%"}
  <figcaption>Caption</figcaption>

</center>

### Flat-Pack Stools


## Bantam Tools CNC Software

<center>

![](../images/MillingWorkflow/EagleBanner.png){width="100%"}

</center>

### PCB Badge

Inkscape to Eagle



[^1]: https://www.cnccookbook.com/machining-carbon-fiber-composites-drilling-cnc-tools/
[^2]: https://dragonplate.com/how-to-cut-carbon-fiber
[^3]: https://www.gutenberg.org/files/12299/12299-h/12299-h.htm
[^4]: https://www.practicalmachinist.com/vb/general-archive/face-milling-pvc-152424/
[^5]: https://www.precisebits.com/tutorials/spindle-rpm
[^6]: https://pub.pages.cba.mit.edu/feed_speeds/
[^7]: https://www.protolabs.com/resources/design-tips/cnc-machining-materials/
[^8]: https://www.3erp.com/blog/cnc-milling-materials-choose-application/
[^9]: https://www.hubs.com/knowledge-base/selecting-right-cnc-material/

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