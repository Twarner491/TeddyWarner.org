document.addEventListener("DOMContentLoaded", function() {
  var contentSections = document.querySelectorAll('.content-container > section');
  var previousHeight = 0;

  contentSections.forEach(function(section) {
    section.style.top = previousHeight + 'px';
    previousHeight += section.offsetHeight;
  });
});

var supportsCssVars = function() {
  var e, t = document.createElement("style");
  return t.innerHTML = "root: { --tmp-var: bold; }", document.head.appendChild(t), e = !!(window.CSS && window.CSS.supports && window.CSS.supports("font-weight", "var(--tmp-var)")), t.parentNode.removeChild(t), e
};
supportsCssVars() || alert("Please view this page in a modern browser that supports CSS Variables :).");

function togglemenu() {
  var element = document.body;
  element.classList.toggle("toggle");
  element.classList.add("scrollUp");
}

document.addEventListener("DOMContentLoaded", function() {
  const toneImage = document.querySelector('.project .toneimg');
  const root = document.documentElement;

  function colortheme() {
    const selectedOption = document.querySelector('input[name="__palette"]:checked');
    const currentTheme = selectedOption ? selectedOption.getAttribute('data-md-color-scheme') : 'light';
    let toneUrl;
    if (currentTheme === 'slate') {
      toneUrl = getComputedStyle(root).getPropertyValue('--tone-url-slate').trim().replace(/^"(.*)"$/, '$1');
    } else {
      toneUrl = getComputedStyle(root).getPropertyValue('--tone-url-light').trim().replace(/^"(.*)"$/, '$1');
    }
    toneImage.setAttribute('href', toneUrl);
  }

  function saveTheme() {
    const selectedOption = document.querySelector('input[name="__palette"]:checked');
    if (selectedOption) {
      const currentTheme = selectedOption.getAttribute('data-md-color-scheme');
      localStorage.setItem('theme', currentTheme);
    }
  }

  function applySavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      const themeOption = document.querySelector(`input[name="__palette"][data-md-color-scheme="${savedTheme}"]`);
      if (themeOption) {
        themeOption.checked = true;
        root.setAttribute('data-md-color-scheme', savedTheme);
        colortheme();
      }
    }
  }

  applySavedTheme();
  document.querySelectorAll('input[name="__palette"]').forEach((input) => {
    input.addEventListener('change', () => {
      colortheme();
      saveTheme();
    });
  });
  window.colortheme = colortheme;
});

function leftrevon() {
  var element = document.querySelector('.circleGroup');
  element.style.setProperty('--rotation-direction', 'normal');
}

function leftrevoff() {
  var element = document.querySelector('.circleGroup');
  element.style.setProperty('--rotation-direction', 'reverse');
}

leftrevon();

document.querySelector('.abtbtn').addEventListener('mouseenter', leftrevoff);
document.querySelector('.abtbtn').addEventListener('mouseleave', leftrevon);