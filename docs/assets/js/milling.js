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