function unit() {
    var element = document.body;
    element.classList.toggle("metric");
  }
  
  function initMillingPage() {
    var unitCheckbox = document.getElementById('units');
    if (unitCheckbox && unitCheckbox.checked) {
      var element = document.body;
      if (!element.classList.contains("metric")) {
        element.classList.add("metric");
      }
    }
  }
  
  // Support instant navigation (MkDocs Material)
  if (typeof document$ !== 'undefined') {
    document$.subscribe(initMillingPage);
  } else {
    window.onload = initMillingPage;
  }

  // New calculator functions for updated UI
  function calculateNew() {
    var unit = document.getElementById('units');
    var pi = Math.PI;
    var d = parseFloat(document.getElementById('diameter').value);
    var f = parseFloat(document.getElementById('flutes').value);
    var s = parseFloat(document.getElementById('surface').value);
    var c = parseFloat(document.getElementById('chips').value);

    if (isNaN(d) || isNaN(f) || isNaN(s) || isNaN(c) || d === 0) {
      return; // Don't calculate with invalid inputs
    }

    var SpindalSpeed, FeedRate, PlungeRate, Stepdown, Stepover;

    if (unit && unit.checked) {
      // Metric mode
      var dimp = d / 25.4;
      var simp = s / 0.3048;
      var cimp = c / 25.4;
      SpindalSpeed = simp / (pi * (1/12) * dimp);
      
      var FeedRateimp = SpindalSpeed * f * cimp;
      FeedRate = FeedRateimp * 25.4;
      
      var PlungeRateimp = FeedRateimp * (1/2);
      PlungeRate = PlungeRateimp * 25.4;
      
      var Stepdownimp = (1/2) * dimp;
      Stepdown = Stepdownimp * 25.4;
      
      var Stepoverimp = (9.2/20) * dimp;
      Stepover = Stepoverimp * 25.4;
    } else {
      // Imperial mode
      SpindalSpeed = s / (pi * (1/12) * d);
      FeedRate = SpindalSpeed * f * c;
      PlungeRate = FeedRate * (1/2);
      Stepdown = (1/2) * d;
      Stepover = (9.2/20) * d;
    }

    // Show output section
    var outputVal = document.getElementById('outputval');
    if (outputVal) outputVal.classList.remove('hidden');

    // Update display spans
    var speedDisplay = document.getElementById('speed-display');
    var feedDisplay = document.getElementById('feed-display');
    var plungeDisplay = document.getElementById('plunge-display');
    var downDisplay = document.getElementById('down-display');
    var overDisplay = document.getElementById('over-display');

    if (speedDisplay) speedDisplay.textContent = parseFloat(SpindalSpeed.toFixed(0)).toLocaleString() + ' RPM';
    if (feedDisplay) feedDisplay.textContent = parseFloat(FeedRate.toFixed(2));
    if (plungeDisplay) plungeDisplay.textContent = parseFloat(PlungeRate.toFixed(2));
    if (downDisplay) downDisplay.textContent = parseFloat(Stepdown.toFixed(4));
    if (overDisplay) overDisplay.textContent = parseFloat(Stepover.toFixed(4));
  }

  function clearCalc() {
    // Clear inputs
    var diameter = document.getElementById('diameter');
    var flutes = document.getElementById('flutes');
    var surface = document.getElementById('surface');
    var chips = document.getElementById('chips');
    var matlib = document.getElementById('matlib');

    if (diameter) diameter.value = "";
    if (flutes) flutes.value = "1";
    if (surface) surface.value = "";
    if (chips) chips.value = "";
    if (matlib) matlib.value = "Mlib";

    // Hide output section
    var outputVal = document.getElementById('outputval');
    if (outputVal) outputVal.classList.add('hidden');

    // Clear display spans
    var speedDisplay = document.getElementById('speed-display');
    var feedDisplay = document.getElementById('feed-display');
    var plungeDisplay = document.getElementById('plunge-display');
    var downDisplay = document.getElementById('down-display');
    var overDisplay = document.getElementById('over-display');

    if (speedDisplay) speedDisplay.textContent = '';
    if (feedDisplay) feedDisplay.textContent = '';
    if (plungeDisplay) plungeDisplay.textContent = '';
    if (downDisplay) downDisplay.textContent = '';
    if (overDisplay) overDisplay.textContent = '';
  }
  
  function calculate() {
  
    var element = document.body;
    document.getElementById("outputval").style.display = "inline";
    document.getElementById("cock").style.cssText = "margin-top: -16.5em;";
  
    var unit = document.getElementById('units');
  
    if (unit.checked) {
      var pi = Math.PI
      var d = document.getElementById('diameter').value;
      var f = document.getElementById('flutes').value;
      var s = document.getElementById('surface').value;
      var c = document.getElementById('chips').value;
      var dimp = d / 25.4;
      var simp = s / 0.3048;
      var cimp = c / 25.4;
      var SpindalSpeed = simp / (pi * (1/12) * dimp);
      document.getElementById('speed').value = parseFloat(SpindalSpeed.toFixed(2));
  
      var FeedRateimp = SpindalSpeed * f * cimp;
      var FeedRatemet = FeedRateimp * 25.4;
      document.getElementById('feed').value = parseFloat(FeedRatemet.toFixed(2));
  
      var PlungeRateimp = FeedRateimp * (1/2);
      var PlungeRatemet = PlungeRateimp * 25.4;
      document.getElementById('plunge').value = parseFloat(PlungeRatemet.toFixed(2));
  
      var Stepdownimp = (1/2) * dimp;
      var Stepdownmet = Stepdownimp * 25.4;
      document.getElementById('down').value = parseFloat(Stepdownmet.toFixed(3));
  
      var Stepoverimp = (9.2/20) * dimp;
      var Stepovermet = Stepoverimp * 25.4;
      document.getElementById('over').value = parseFloat(Stepovermet.toFixed(3));
  
    } 
    else {
        var pi = Math.PI
        var d = document.getElementById('diameter').value;
        var f = document.getElementById('flutes').value;
        var s = document.getElementById('surface').value;
        var c = document.getElementById('chips').value;
        var SpindalSpeed = s / (pi * (1/12) * d);
        document.getElementById('speed').value = parseFloat(SpindalSpeed.toFixed(2));
  
        var FeedRate = SpindalSpeed * f * c;
        document.getElementById('feed').value = parseFloat(FeedRate.toFixed(2));
  
        var PlungeRate = FeedRate * (1/2);
        document.getElementById('plunge').value = parseFloat(PlungeRate.toFixed(2));
  
        var Stepdown = (1/2) * d;
        document.getElementById('down').value = parseFloat(Stepdown.toFixed(3));
  
        var Stepover = (9.2/20) * d;
        document.getElementById('over').value = parseFloat(Stepover.toFixed(3));
    }
  
  } 
  
  function myFunction() {
  
      document.getElementById("outputval").style.display = "none"; 
      document.getElementById("cock").style.cssText = "margin-top: 0em;";
  
      document.getElementById('diameter').value = "";
      document.getElementById('flutes').value = "1";
      document.getElementById('surface').value = "";
      document.getElementById('chips').value = "";
      document.getElementById('speed').value = "";
      document.getElementById('feed').value = "";
      document.getElementById('plunge').value = "";
      document.getElementById('down').value = "";
      document.getElementById('over').value = "";
      document.getElementById('matlib').value = "Mlib";
  }
  
  function showHideRow(row) {
    var element = document.body;
      element.classList.toggle(row);
      $("#" + row).toggle();
  }
  
  function initQuantitySpinners() {
    if (typeof jQuery === 'undefined') return;
    
    // Only initialize if not already initialized
    if (jQuery('.quantity .quantity-nav').length > 0) return;
    
    jQuery('<div class="quantity-nav"><button class="quantity-button quantity-up">&#xf106;</button><button class="quantity-button quantity-down">&#xf107</button></div>').insertAfter('.quantity input');
    jQuery('.quantity').each(function () {
      var spinner = jQuery(this),
          input = spinner.find('input[type="number"]'),
          btnUp = spinner.find('.quantity-up'),
          btnDown = spinner.find('.quantity-down'),
          min = input.attr('min'),
          max = input.attr('max');
  
      btnUp.click(function () {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });
  
      btnDown.click(function () {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });
  
    });
  }
  
  // Support instant navigation for jQuery initialization
  if (typeof document$ !== 'undefined') {
    document$.subscribe(initQuantitySpinners);
  } else {
    $(document).ready(initQuantitySpinners);
  }

  function matChange() {
    var mat = document.getElementById('matlib');
    var value = mat.options[mat.selectedIndex].value;
    var unit = document.getElementById('units');
    var d = parseFloat(document.getElementById('diameter').value);

    const cool = document.querySelector('#coolant');

    if (cool && cool.checked) {
      var Acr = 500;
      var Alu = 600;
      var Ste = 200;
    } else {
      var Acr = 130;
      var Alu = 200;
      var Ste = 50;
    }

    // Chip load values based on diameter ranges
    var WaxC, SWoodC, HWoodC, MDFC, OSBC, HDPEC, PEEKC, PEIC, PVCC, POMC;
    var ABSC, PCC, NylonC, AcyrlicC, CFiberC, AluminiumC, BrassC, CopperC, SteelC, IFoamC;

    // Imperial mode - use ranges instead of exact values
    if (!unit || !unit.checked) {
      if (d > 0 && d < 0.1875) {
        // 1/8" and smaller
        WaxC = 0.007; SWoodC = 0.005; HWoodC = 0.004; MDFC = 0.0055; OSBC = 0.005;
        HDPEC = 0.0045; PEEKC = 0.003; PEIC = 0.003; PVCC = 0.003; POMC = 0.003;
        ABSC = 0.003; PCC = 0.003; NylonC = 0.003; AcyrlicC = 0.004; CFiberC = 0.0045;
        AluminiumC = 0.0035; BrassC = 0.0007; CopperC = 0.0007; SteelC = 0.0006; IFoamC = 0.005;
      } else if (d >= 0.1875 && d < 0.3125) {
        // 1/4" range (0.1875 to 0.3125)
        WaxC = 0.0125; SWoodC = 0.012; HWoodC = 0.01; MDFC = 0.0145; OSBC = 0.012;
        HDPEC = 0.0085; PEEKC = 0.0075; PEIC = 0.0075; PVCC = 0.0075; POMC = 0.0075;
        ABSC = 0.0075; PCC = 0.0075; NylonC = 0.0075; AcyrlicC = 0.009; CFiberC = 0.0105;
        AluminiumC = 0.006; BrassC = 0.00125; CopperC = 0.00125; SteelC = 0.0009; IFoamC = 0.012;
      } else if (d >= 0.3125 && d < 0.4375) {
        // 3/8" range (0.3125 to 0.4375)
        WaxC = 0.0175; SWoodC = 0.0185; HWoodC = 0.017; MDFC = 0.0215; OSBC = 0.0185;
        HDPEC = 0.011; PEEKC = 0.009; PEIC = 0.009; PVCC = 0.009; POMC = 0.009;
        ABSC = 0.009; PCC = 0.009; NylonC = 0.009; AcyrlicC = 0.011; CFiberC = 0.017;
        AluminiumC = 0.007; BrassC = 0.002; CopperC = 0.002; SteelC = 0.00135; IFoamC = 0.0185;
      } else if (d >= 0.4375) {
        // 1/2" and larger
        WaxC = 0.029; SWoodC = 0.022; HWoodC = 0.02; MDFC = 0.026; OSBC = 0.022;
        HDPEC = 0.014; PEEKC = 0.011; PEIC = 0.011; PVCC = 0.011; POMC = 0.011;
        ABSC = 0.011; PCC = 0.011; NylonC = 0.011; AcyrlicC = 0.0135; CFiberC = 0.022;
        AluminiumC = 0.009; BrassC = 0.0035; CopperC = 0.0035; SteelC = 0.002; IFoamC = 0.022;
      }
    } else {
      // Metric mode - use ranges
      if (d > 0 && d < 4.76) {
        // 3.175mm and smaller
        WaxC = 0.17653; SWoodC = 0.127; HWoodC = 0.1016; MDFC = 0.1905; OSBC = 0.127;
        HDPEC = 0.1143; PEEKC = 0.0762; PEIC = 0.0762; PVCC = 0.0762; POMC = 0.0762;
        ABSC = 0.0762; PCC = 0.0762; NylonC = 0.0762; AcyrlicC = 0.1016; CFiberC = 0.1143;
        AluminiumC = 0.0889; BrassC = 0.01778; CopperC = 0.01778; SteelC = 0.01524; IFoamC = 0.127;
      } else if (d >= 4.76 && d < 7.94) {
        // 6.35mm range
        WaxC = 0.3175; SWoodC = 0.3048; HWoodC = 0.254; MDFC = 0.3683; OSBC = 0.3048;
        HDPEC = 0.2159; PEEKC = 0.1905; PEIC = 0.1905; PVCC = 0.1905; POMC = 0.1905;
        ABSC = 0.1905; PCC = 0.1905; NylonC = 0.1905; AcyrlicC = 0.2286; CFiberC = 0.2667;
        AluminiumC = 0.1524; BrassC = 0.03175; CopperC = 0.03175; SteelC = 0.02286; IFoamC = 0.3048;
      } else if (d >= 7.94 && d < 11.11) {
        // 9.525mm range
        WaxC = 0.4445; SWoodC = 0.4699; HWoodC = 0.4318; MDFC = 0.5461; OSBC = 0.4699;
        HDPEC = 0.2794; PEEKC = 0.2286; PEIC = 0.2286; PVCC = 0.2286; POMC = 0.2286;
        ABSC = 0.2286; PCC = 0.2286; NylonC = 0.2286; AcyrlicC = 0.2794; CFiberC = 0.4318;
        AluminiumC = 0.1178; BrassC = 0.04445; CopperC = 0.04445; SteelC = 0.03429; IFoamC = 0.4699;
      } else if (d >= 11.11) {
        // 12.7mm and larger
        WaxC = 0.7366; SWoodC = 0.5588; HWoodC = 0.508; MDFC = 0.6604; OSBC = 0.5588;
        HDPEC = 0.2794; PEEKC = 0.2286; PEIC = 0.2286; PVCC = 0.2286; POMC = 0.2286;
        ABSC = 0.2286; PCC = 0.2286; NylonC = 0.2286; AcyrlicC = 0.3429; CFiberC = 0.6096;
        AluminiumC = 0.2286; BrassC = 0.0889; CopperC = 0.0889; SteelC = 0.0508; IFoamC = 0.5588;
      }
    }

    if (value == "Mlib") {
      document.getElementById('surface').value = "";
      document.getElementById('chips').value = "";
    }
    if (value == "Wax") {
      document.getElementById('surface').value = "200";
      document.getElementById('chips').value = WaxC;
    }
    if (value == "SWood") {
      document.getElementById('surface').value = "650";
      document.getElementById('chips').value = SWoodC;
    }
    if (value == "HWood") {
      document.getElementById('surface').value = "650";
      document.getElementById('chips').value = HWoodC;
    }
    if (value == "MDF") {
      document.getElementById('surface').value = "650";
      document.getElementById('chips').value = MDFC;
    }
    if (value == "OSB") {
      document.getElementById('surface').value = "650";
      document.getElementById('chips').value = OSBC;
    }
    if (value == "HDPE") {
      document.getElementById('surface').value = "450";
      document.getElementById('chips').value = HDPEC;
    }
    if (value == "PEEK") {
      document.getElementById('surface').value = "500";
      document.getElementById('chips').value = PEEKC;
    }
    if (value == "PEI") {
      document.getElementById('surface').value = "360";
      document.getElementById('chips').value = PEIC;
    }
    if (value == "PVC") {
      document.getElementById('surface').value = "250";
      document.getElementById('chips').value = PVCC;
    }
    if (value == "POM") {
      document.getElementById('surface').value = "375";
      document.getElementById('chips').value = POMC;
    }
    if (value == "ABS") {
      document.getElementById('surface').value = "300";
      document.getElementById('chips').value = ABSC;
    }
    if (value == "PC") {
      document.getElementById('surface').value = "360";
      document.getElementById('chips').value = PCC;
    }
    if (value == "Nylon") {
      document.getElementById('surface').value = "400";
      document.getElementById('chips').value = NylonC;
    }
    if (value == "Acrylic") {
      document.getElementById('surface').value = Acr;
      document.getElementById('chips').value = AcyrlicC;
    }
    if (value == "CFiber") {
      document.getElementById('surface').value = "5.45";
      document.getElementById('chips').value = CFiberC;
    }
    if (value == "Aluminium") {
      document.getElementById('surface').value = Alu;
      document.getElementById('chips').value = AluminiumC;
    }
    if (value == "Brass") {
      document.getElementById('surface').value = "600";
      document.getElementById('chips').value = BrassC;
    }
    if (value == "Copper") {
      document.getElementById('surface').value = "550";
      document.getElementById('chips').value = CopperC;
    }
    if (value == "Steel") {
      document.getElementById('surface').value = Ste;
      document.getElementById('chips').value = SteelC;
    }
    if (value == "IFoam") {
      document.getElementById('surface').value = "1000";
      document.getElementById('chips').value = IFoamC;
    }
  }
