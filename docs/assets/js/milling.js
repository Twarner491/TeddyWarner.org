function unit() {
    var element = document.body;
    element.classList.toggle("metric");
  }
  
  window.onload = function() {
    document.getElementById("outputval").style.display = "none"; 
    var unit = document.getElementById('units');
      if (unit.checked) {
        var element = document.body;
        element.classList.toggle("metric");
      }
  }
  
  function calculate() {
  
    var element = document.body;
    document.getElementById("outputval").style.display = "inline"; 
  
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
  
      document.getElementById('diameter').value = "";
      document.getElementById('flutes').value = "1";
      document.getElementById('surface').value = "";
      document.getElementById('chips').value = "";
      document.getElementById('speed').value = "";
      document.getElementById('feed').value = "";
      document.getElementById('plunge').value = "";
      document.getElementById('down').value = "";
      document.getElementById('over').value = "";
  }
  
  function showHideRow(row) {
    var element = document.body;
      element.classList.toggle(row);
      $("#" + row).toggle();
  }
  
  $(document).ready(function () {
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
  });

  function matChange() {
    var mat = document.getElementById('matlib');
    var value = mat.options[mat.selectedIndex].value;
    var unit = document.getElementById('units');
    var d = document.getElementById('diameter').value;

    const cool = document.querySelector('#coolant');

    if (cool.checked) {
      var Acr = 500;
      var Alu = 600;
      var Ste = 200;
    } else {
      var Acr = 130;
      var Alu = 200;
      var Ste = 50;
    }

    if (d == 0.125 && unit.checked == false) {
      var WaxC = 0.007;
      var SWoodC = 0.005;
      var HWoodC = 0.004;
      var MDFC = 0.0055;
      var OSBC = 0.005;
      var HDPEC = 0.0045;
      var PEEKC = 0.003;
      var PEIC = 0.003;
      var PVCC = 0.003;
      var POMC = 0.003;
      var ABSC = 0.003;
      var PCC = 0.003;
      var NylonC = 0.003;
      var AcyrlicC = 0.004;
      var CFiberC = 0.0045;
      var AluminiumC = 0.0035;
      var BrassC = 0.0007;
      var CopperC = 0.0007;
      var SteelC = 0.0006;
      var IFoamC = 0.005;
    }

    if (d == 0.25 && unit.checked == false) {
      var WaxC = 0.0125;
      var SWoodC = 0.012;
      var HWoodC = 0.01;
      var MDFC = 0.0145;
      var OSBC = 0.012;
      var HDPEC = 0.0085;
      var PEEKC = 0.0075;
      var PEIC = 0.0075;
      var PVCC = 0.0075;
      var POMC = 0.0075;
      var ABSC = 0.0075;
      var PCC = 0.0075;
      var NylonC = 0.0075;
      var AcyrlicC = 0.009;
      var CFiberC = 0.0105;
      var AluminiumC = 0.006;
      var BrassC = 0.00125;
      var CopperC = 0.00125;
      var SteelC = 0.0009;
      var IFoamC = 0.012;
    }

    if (d == 0.375 && unit.checked == false) {
      var WaxC = 0.0175;
      var SWoodC = 0.0185;
      var HWoodC = 0.017;
      var MDFC = 0.0215;
      var OSBC = 0.0185;
      var HDPEC = 0.011;
      var PEEKC = 0.009;
      var PEIC = 0.009;
      var PVCC = 0.009;
      var POMC = 0.009;
      var ABSC = 0.009;
      var PCC = 0.009;
      var NylonC = 0.009;
      var AcyrlicC = 0.011;
      var CFiberC = 0.017;
      var AluminiumC = 0.007;
      var BrassC = 0.002;
      var CopperC = 0.002;
      var SteelC = 0.00135;
      var IFoamC = 0.0185;
    }

    if (d >= 0.5 && unit.checked == false) {
      var WaxC = 0.029;
      var SWoodC = 0.022;
      var HWoodC = 0.02;
      var MDFC = 0.026;
      var OSBC = 0.022;
      var HDPEC = 0.014;
      var PEEKC = 0.011;
      var PEIC = 0.011;
      var PVCC = 0.011;
      var POMC = 0.011;
      var ABSC = 0.011;
      var PCC = 0.011;
      var NylonC = 0.011;
      var AcyrlicC = 0.0135;
      var CFiberC = 0.022;
      var AluminiumC = 0.009;
      var BrassC = 0.0035;
      var CopperC = 0.0035;
      var SteelC = 0.002;
      var IFoamC = 0.022;
    }

    if (d == 3.175 && unit.checked == true) {
      var WaxC = 0.17653;
      var SWoodC = 0.127;
      var HWoodC = 0.1016;
      var MDFC = 0.1905;
      var OSBC = 0.127;
      var HDPEC = 0.1143;
      var PEEKC = 0.0762;
      var PEIC = 0.0762;
      var PVCC = 0.0762;
      var POMC = 0.0762;
      var ABSC = 0.0762;
      var PCC = 0.0762;
      var NylonC = 0.0762;
      var AcyrlicC = 0.1016;
      var CFiberC = 0.1143;
      var AluminiumC = 0.0889;
      var BrassC = 0.01778;
      var CopperC = 0.01778;
      var SteelC = 0.01524;
      var IFoamC = 0.127;
    }

    if (d == 6.35 && unit.checked == true) {
      var WaxC = 0.3175;
      var SWoodC = 0.3048;
      var HWoodC = 0.254;
      var MDFC = 0.3683;
      var OSBC = 0.3048;
      var HDPEC = 0.2159;
      var PEEKC = 0.1905;
      var PEIC = 0.1905;
      var PVCC = 0.1905;
      var POMC = 0.1905;
      var ABSC = 0.1905;
      var PCC = 0.1905;
      var NylonC = 0.1905;
      var AcyrlicC = 0.2286;
      var CFiberC = 0.2667;
      var AluminiumC = 0.1524;
      var BrassC = 0.03175;
      var CopperC = 0.03175;
      var SteelC = 0.02286;
      var IFoamC =0.3048;
    }

    if (d == 9.525 && unit.checked == true) {
      var WaxC = 0.4445;
      var SWoodC = 0.4699;
      var HWoodC = 0.4318;
      var MDFC = 0.5461;
      var OSBC = 0.4699;
      var HDPEC = 0.2794;
      var PEEKC = 0.2286;
      var PEIC = 0.2286;
      var PVCC = 0.2286;
      var POMC = 0.2286;
      var ABSC = 0.2286;
      var PCC = 0.2286;
      var NylonC = 0.2286;
      var AcyrlicC = 0.2794;
      var CFiberC = 0.4318;
      var AluminiumC = 0.1178;
      var BrassC = 0.04445;
      var CopperC = 0.04445;
      var SteelC = 0.03429;
      var IFoamC = 0.4699;
    }

    if (d >= 12.7 && unit.checked == true) {
      var WaxC = 0.7366;
      var SWoodC = 0.5588;
      var HWoodC = 0.508;
      var MDFC = 0.6604;
      var OSBC = 0.5588;
      var HDPEC = 0.2794;
      var PEEKC = 0.2286;
      var PEIC = 0.2286;
      var PVCC = 0.2286;
      var POMC = 0.2286;
      var ABSC = 0.2286;
      var PCC = 0.2286;
      var NylonC = 0.2286;
      var AcyrlicC = 0.3429;
      var CFiberC = 0.6096;
      var AluminiumC = 0.2286;
      var BrassC = 0.0889;
      var CopperC = 0.0889;
      var SteelC = 0.0508;
      var IFoamC = 0.5588;
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
