---
template: index.html
---

<script src="https://kit.fontawesome.com/79ff35ecec.js" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>document.documentElement.className="js";var supportsCssVars=function(){var e,t=document.createElement("style");return t.innerHTML="root: { --tmp-var: bold; }",document.head.appendChild(t),e=!!(window.CSS&&window.CSS.supports&&window.CSS.supports("font-weight","var(--tmp-var)")),t.parentNode.removeChild(t),e};supportsCssVars()||alert("Please view this page in a modern browser that supports CSS Variables.");</script>

<script>

    var img1 = "https://teddywarner.org/images/index/aquaduinos.jpg";
    var img2 = "https://teddywarner.org/images/index/aquaponic.jpg";
    var img3 = "https://teddywarner.org/images/index/aquaponicelectronic.jpg";
    var img4 = "https://teddywarner.org/images/index/bitscope.jpg";
    var img5 = "https://teddywarner.org/images/index/cookie!.jpg";
    var img6 = "https://teddywarner.org/images/index/customprint.jpg";
    var img7 = "https://teddywarner.org/images/index/desk.jpg";
    var img8 = "https://teddywarner.org/images/index/desksanding.jpg";
    var img9 = "https://teddywarner.org/images/index/firstcrown.jpg";
    var img10 = "https://teddywarner.org/images/index/icp.jpg";
    var img11 = "https://teddywarner.org/images/index/installedmpcnc.jpg";
    var img12 = "https://teddywarner.org/images/index/lion.jpg";
    var img13 = "https://teddywarner.org/images/index/newmpcnc.jpg";
    var img14 = "https://teddywarner.org/images/index/printersetup.jpg";
    var img15 = "https://teddywarner.org/images/index/tank.jpg";
        
    document.addEventListener("DOMContentLoaded", () => {
      const log = console.log,
        array = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15],
        random = Math.floor(Math.random() * array.length),
        target = document.getElementById("target");
      target.src = `${array[random]}`;
      log(target);
    });

  window.onload = function() {
      if(!window.location.hash) {
          window.location = window.location + '#/';
          window.location.reload();
      }
  }

  window.addEventListener( "pageshow", function ( event ) {
    var historyTraversal = event.persisted || 
                          ( typeof window.performance != "undefined" && 
                                window.performance.navigation.type === 2 );
    if ( historyTraversal ) {
      window.location.reload();
    }
  });

  function preloaderFadeOutInit(){
    $('.preloader').delay(1800).fadeOut(525);
    $('.preloaderbg').delay(2500).fadeOut(160);
    $('body').attr('id','');
    }
    jQuery(window).on('load', function () {
    (function ($) {
    preloaderFadeOutInit();
    })(jQuery);
    });

    !function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return-1==n.indexOf(e)&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{},n=i[t]=i[t]||{};return n[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return-1!=n&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=0,o=i[n];e=e||[];for(var r=this._onceEvents&&this._onceEvents[t];o;){var s=r&&r[o];s&&(this.off(t,o),delete r[o]),o.apply(this,e),n+=s?0:1,o=i[n]}return this}},t}),function(t,e){"use strict";"function"==typeof define&&define.amd?define(["ev-emitter/ev-emitter"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter")):t.imagesLoaded=e(t,t.EvEmitter)}(window,function(t,e){function i(t,e){for(var i in e)t[i]=e[i];return t}function n(t){var e=[];if(Array.isArray(t))e=t;else if("number"==typeof t.length)for(var i=0;i<t.length;i++)e.push(t[i]);else e.push(t);return e}function o(t,e,r){return this instanceof o?("string"==typeof t&&(t=document.querySelectorAll(t)),this.elements=n(t),this.options=i({},this.options),"function"==typeof e?r=e:i(this.options,e),r&&this.on("always",r),this.getImages(),h&&(this.jqDeferred=new h.Deferred),void setTimeout(function(){this.check()}.bind(this))):new o(t,e,r)}function r(t){this.img=t}function s(t,e){this.url=t,this.element=e,this.img=new Image}var h=t.jQuery,a=t.console;o.prototype=Object.create(e.prototype),o.prototype.options={},o.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},o.prototype.addElementImages=function(t){"IMG"==t.nodeName&&this.addImage(t),this.options.background===!0&&this.addElementBackgroundImages(t);var e=t.nodeType;if(e&&d[e]){for(var i=t.querySelectorAll("img"),n=0;n<i.length;n++){var o=i[n];this.addImage(o)}if("string"==typeof this.options.background){var r=t.querySelectorAll(this.options.background);for(n=0;n<r.length;n++){var s=r[n];this.addElementBackgroundImages(s)}}}};var d={1:!0,9:!0,11:!0};return o.prototype.addElementBackgroundImages=function(t){var e=getComputedStyle(t);if(e)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(e.backgroundImage);null!==n;){var o=n&&n[2];o&&this.addBackground(o,t),n=i.exec(e.backgroundImage)}},o.prototype.addImage=function(t){var e=new r(t);this.images.push(e)},o.prototype.addBackground=function(t,e){var i=new s(t,e);this.images.push(i)},o.prototype.check=function(){function t(t,i,n){setTimeout(function(){e.progress(t,i,n)})}var e=this;return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(e){e.once("progress",t),e.check()}):void this.complete()},o.prototype.progress=function(t,e,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!t.isLoaded,this.emitEvent("progress",[this,t,e]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,t),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&a&&a.log("progress: "+i,t,e)},o.prototype.complete=function(){var t=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(t,[this]),this.emitEvent("always",[this]),this.jqDeferred){var e=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[e](this)}},r.prototype=Object.create(e.prototype),r.prototype.check=function(){var t=this.getIsImageComplete();return t?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void(this.proxyImage.src=this.img.src))},r.prototype.getIsImageComplete=function(){return this.img.complete&&void 0!==this.img.naturalWidth},r.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.img,e])},r.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},r.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},r.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},r.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype=Object.create(r.prototype),s.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url;var t=this.getIsImageComplete();t&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},s.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.element,e])},o.makeJQueryPlugin=function(e){e=e||t.jQuery,e&&(h=e,h.fn.imagesLoaded=function(t,e){var i=new o(this,t,e);return i.jqDeferred.promise(h(this))})},o.makeJQueryPlugin(),o});
  
  {
      const MathUtils = {
          map: (x, a, b, c, d) => (x - a) * (d - c) / (b - a) + c,
          lerp: (a, b, n) => (1 - n) * a + n * b
      };

      const body = document.body;
      
      let winsize;
      const calcWinsize = () => winsize = {width: window.innerWidth, height: window.innerHeight};
      calcWinsize();
      window.addEventListener('resize', calcWinsize);

      let docScroll;
      const getPageYScroll = () => docScroll = window.pageYOffset || document.documentElement.scrollTop;
      window.addEventListener('scroll', getPageYScroll);

      class Item {
          constructor(el) {
              this.DOM = {el: el};
              this.DOM.image = this.DOM.el.querySelector('.item__img');
              this.renderedStyles = {
                  innerTranslationY: {
                      previous: 0, 
                      current: 0, 
                      ease: 0.1,
                      maxValue: parseInt(getComputedStyle(this.DOM.image).getPropertyValue('--overflow'), 10),
                      setValue: () => {
                          const maxValue = this.renderedStyles.innerTranslationY.maxValue;
                          const minValue = -1 * maxValue;
                          return Math.max(Math.min(MathUtils.map(this.props.top - docScroll, winsize.height, -1 * this.props.height, minValue, maxValue), maxValue), minValue)
                      }
                  }
              };
              this.update();
              this.observer = new IntersectionObserver((entries) => {
                  entries.forEach(entry => this.isVisible = entry.intersectionRatio > 0);
              });
              this.observer.observe(this.DOM.el);
              this.initEvents();
          }
          update() {
              this.getSize();
              for (const key in this.renderedStyles ) {
                  this.renderedStyles[key].current = this.renderedStyles[key].previous = this.renderedStyles[key].setValue();
              }
              this.layout();
          }
          getSize() {
              const rect = this.DOM.el.getBoundingClientRect();
              this.props = {
                  height: rect.height,
                  top: docScroll + rect.top 
              }
          }
          initEvents() {
              window.addEventListener('resize', () => this.resize());
          }
          resize() {
              this.update();
          }
          render() {
              for (const key in this.renderedStyles ) {
                  this.renderedStyles[key].current = this.renderedStyles[key].setValue();
                  this.renderedStyles[key].previous = MathUtils.lerp(this.renderedStyles[key].previous, this.renderedStyles[key].current, this.renderedStyles[key].ease);
              }
              this.layout();
          }
          layout() {
              this.DOM.image.style.transform = `translate3d(0,${this.renderedStyles.innerTranslationY.previous}px,0)`;
          }
      }

      class SmoothScroll {
          constructor() {
              this.DOM = {main: document.querySelector('main')};
              this.DOM.scrollable = this.DOM.main.querySelector('div[data-scroll]');
              this.items = [];
              [...this.DOM.main.querySelectorAll('.content > .item')].forEach(item => this.items.push(new Item(item)));
              this.renderedStyles = {
                  translationY: {
                      previous: 0, 
                      current: 0, 
                      ease: 0.1,
                      setValue: () => docScroll
                  }
              };
              this.setSize();
              this.update();
              this.style();
              this.initEvents();
              requestAnimationFrame(() => this.render());
          }
          update() {
              for (const key in this.renderedStyles ) {
                  this.renderedStyles[key].current = this.renderedStyles[key].previous = this.renderedStyles[key].setValue();
              }   
              this.layout();
          }
          layout() {
              this.DOM.scrollable.style.transform = `translate3d(0,${-1*this.renderedStyles.translationY.previous}px,0)`;
          }
          setSize() {
              body.style.height = `${this.DOM.scrollable.scrollHeight}px`;
          }
          style() {
              this.DOM.main.style.position = 'fixed';
              this.DOM.main.style.width = this.DOM.main.style.height = '100%';
              this.DOM.main.style.top = this.DOM.main.style.left = 0;
              this.DOM.main.style.overflow = 'hidden';
          }
          initEvents() {
              window.addEventListener('resize', () => this.setSize());
          }
          render() {
              for (const key in this.renderedStyles ) {
                  this.renderedStyles[key].current = this.renderedStyles[key].setValue();
                  this.renderedStyles[key].previous = MathUtils.lerp(this.renderedStyles[key].previous, this.renderedStyles[key].current, this.renderedStyles[key].ease);
              }
              this.layout();
              
              for (const item of this.items) {
                  if ( item.isVisible ) {
                      item.render();
                  }
              }
              
              requestAnimationFrame(() => this.render());
          }
      }

      const preloadImages = () => {
          return new Promise((resolve, reject) => {
              imagesLoaded(document.querySelectorAll('.item__img'), {background: true}, resolve);
          });
      };
      
      preloadImages().then(() => {
          getPageYScroll();
          new SmoothScroll();
      });
  }

</script>

<style>

    :root {
      --duration: 1s;
      --nav-duration: calc(var(--duration) / 4);
      --ease: cubic-bezier(0.215, 0.61, 0.355, 1);
      --space: 1rem;
      --font-size: 1.125rem;
      --line-height: 1.5;
      --inputicon: hsla(0, 0%, 0%, 0.87);
      --toggledinputicon: white;
      --formbg: hsla(0, 0%, 0%, 0.25);
      --formhover: hsla(0, 0%, 0%, 0.32);
      --toggledform: hsla(0, 0%, 100%, 0.12);
      --toggledformhover: hsla(0, 0%, 100%, 0.3);
    }

    [data-md-color-scheme="slate"] {
        --inputicon: white;
        --toggledinputicon: hsla(0, 0%, 0%, 0.87);
        --formhover: hsla(0, 0%, 100%, 0.3);
        --toggledform: hsla(0, 0%, 0%, 0.2);
        --toggledformhover: hsla(0, 0%, 0%, 0.32);
    }

    @media screen and (min-width: 60em) {
      .md-sidebar--secondary {
        display: none;
      }
    }

    @media screen and (min-width: 76.25em) {
      .md-sidebar--primary {
        display: none;
      }
    }

    .preloader {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 700px;
      z-index: 99999999;
    }

    .preloaderbg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      z-index: 99999998;
      background-color: white;
      background-position: center;
    }

    .md-main__inner {
      margin: 0;
    }

    .md-footer {
      display: none;
    } 

    .md-source {
      color: var(--md-default-fg-color);  
    }

    .toggle .logo {
      display: none;
    }

    .toggle .socialsparent {
      display: none;
    }

    .close {
      display: none;
    }

    .toggle .close {
      display: flex;
    }

    .toggle .menu {
      display: none;
    }

    .md-header__button.md-icon[for="__search"] {
      color: var(--md-default-fg-color); 
    }

    .toggle .md-header__button.md-icon[for="__search"] {
      color: var(--md-default-bg-color);
    }

    .md-search__input + .md-search__icon {
      color: var(--inputicon);
    }

    .toggle .md-search__input + .md-search__icon {
      color: var(--toggledinputicon);
    }

    .md-search__form {
      background-color: var(--formbg);
    }

    .md-search__form:hover {
      background-color: var(--formhover);
    }

    .toggle .md-search__form {
      background-color: var(--toggledform);
    }

    .toggle .md-search__form:hover {
      background-color: var(--toggledformhover);
    }

    header{
      padding-top: 1.5em;
    }

    .menu {
      color: var(--md-default-fg-color);
    }

    .close {
      color: var(--md-default-bg-color);
    }
  
    .md-header__option {
      color: var(--md-default-fg-color);
    }

    .toggle .md-header__option {
      color: var(--md-default-bg-color);
    }

    .md-header[data-md-state=shadow]{
      box-shadow:0 0 0 rgba(0,0,0,0),0 0 0 rgba(0,0,0,0);
    }

    .md-header {
      background: none;
      box-shadow:0 0 0 transparent,0 0 0 transparent;
    }

    .md-tabs {
     display: none;
    }

    .logo {
      padding-left: 0;
    }

    .main-navigation {
      position: fixed;
      top: 0;
      left: 0;
      display: flex;
      align-items: center;
      width: 100%;
      height: 100%;
      transform: translateX(-100%);
      transition: transform var(--nav-duration);
      background-color: var(--md-default-fg-color);
    }

    .main-navigation:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: inherit;
      transform-origin: 0 50%;
    }
    .main-navigation ul {
      font-size: 9vmin;
      width: 100%;
    }
    .main-navigation li {
      display: flex;
      align-items: center;
      position: relative;
      overflow: hidden;
      z-index: 1;
    }
    .main-navigation li:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1vmin;
      background-color: inherit;
      transform-origin: 0 50%;
      transform: translateX(-100%) skew(15deg);
      z-index: 1;
    }
    .main-navigation a {
      display: inline-block;
      width: 100%;
      max-width: 900px;
      margin: 0 auto;
      color: var(--md-default-bg-color);
      line-height: 1.08;
      text-decoration: none;
      user-select: none;
      padding: auto;
      transform: translateY(100%);
      z-index: 1;
    }

    .home:hover {
      color: #5466CE;
      font-style: italic;
    }

    .about:hover {
      color: #5466CE;
      font-style: italic;
    }

    .proj:hover {
      color: #5466CE;
      font-style: italic;
    }

    .mach:hover {
      color: #5466CE;
      font-style: italic;
    }

    .fab:hover {
      color: #5466CE;
      font-style: italic;
    }

    .navnum {
      font-size:0.35em;
      font-weight: lighter;
      font-style: italic;
    }

    [data-scroll] {
      will-change: transform;
    }

    .content {
      display: flex;
      flex-direction: column;
      position: relative;
      align-items: center;
      padding: 12rem 0;
      counter-reset: figure; 
    }

    .toggle .content {
      display: none;
    }

    .item {
      margin: 10vh auto;
      max-width: 100%;
      position: relative;
      will-change: transform;
    }

    .item__img-wrap {
      --aspect-ratio: 1/1.5;
      overflow: hidden;
      width: 500px;
      margin: 0 auto;
      padding-bottom: calc(100% / (var(--aspect-ratio)));
      max-width: calc(100% - 2rem);
      will-change: transform;
    }

    .item:first-child .item__img-wrap {
      --aspect-ratio: 120/76;
      --image: url(https://tympanus.net/Tutorials/SmoothScrollAnimations/img/1.jpg);
     }

    .item:nth-child(2) .item__img-wrap {
      width: 1000px;
      --aspect-ratio: 120/76;
      --image: url(https://tympanus.net/Tutorials/SmoothScrollAnimations/img/2.jpg);
    }

    .item:nth-child(3) .item__img-wrap {
       --aspect-ratio: 60/75;
       --image: url(https://tympanus.net/Tutorials/SmoothScrollAnimations/img/3.jpg);
      }

    .item:nth-child(4) .item__img-wrap {
      width: 800px;
      --aspect-ratio: 900/505;
      --image: url(https://tympanus.net/Tutorials/SmoothScrollAnimations/img/4.jpg);
    }

    .item__img {
      --overflow: 40px;
      height: calc(100% + (2 * var(--overflow)));
      top: calc( -1 * var(--overflow));
      width: 100%;
      position: absolute;
      background-image: var(--image);
      background-size: cover;
      background-position: 50% 0%;
      will-change: transform;
    }

    .item__img--t1 {
      --overflow: 60px;
    }

    .item__img--t2 {
      --overflow: 80px;
    }

    .item__img--t3 {
      --overflow: 120px;
    }

    .main-content {
      max-width: 90ch;
      transform: translateX(0);
      transition: transform calc(var(--nav-duration) * 2) var(--ease);
    }

    .socialsparent {  
      margin-top: -14.27em;
      height: 95vh;
      position: relative;
    }

    .socials {
      align-self: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      float: right;
      padding-left: 91vw;
      margin-right: 0;
      position: absolute;
      top: 50%;
      -ms-transform: translateY(-15%);
      transform: translateY(-15%);
    }
    
    .ln {
      padding-bottom: 0.6em;
      font-style: normal;
    }
    
    .fa-linkedin:hover {
        color: var(--md-default-fg-color);
        opacity: 0.65;
        font-style: normal;
    }
    
    .git {
      padding-bottom: 0.6em;
      font-style: normal;
    }
    
    .fa-github:hover {
        color: var(--md-default-fg-color);
        opacity: 0.65;
        font-style: normal;
    }
    
    .insta {
      padding-bottom: 0.6em;
      font-style: normal;
    }
    
    .fa-instagram:hover {
        color: var(--md-default-fg-color);
        opacity: 0.65;
        font-style: normal;
    }
    
    .twitter {
      padding-bottom: 0.6em;
      font-style: normal;
    }
    
    .fa-twitter:hover {
        color: var(--md-default-fg-color);
        opacity: 0.65;
        font-style: normal;
    }
    
    .discord {
      padding-bottom: 0.6em;
      font-style: normal;
    }
    
    .fa-discord:hover {
        color: var(--md-default-fg-color);
        opacity: 0.65;
        font-style: normal;
    }
    
    .spotify {
      padding-bottom: 0.6em;
      font-style: normal;
    }
    
    .fa-spotify:hover {
        color: var(--md-default-fg-color);
        opacity: 0.65;
        font-style: normal;
    }

    .coffee {
      padding-bottom: 0.6em;
      font-style: normal;
    }
    
    .fa-coffee:hover {
        color: var(--md-default-fg-color);
        opacity: 0.65;
        font-style: normal;
    }
    
    .email {
      padding-bottom: 0.6em;
      font-style: normal;
    }
    
    .fa-paper-plane:hover {
        color: var(--md-default-fg-color);
        opacity: 0.65;
        font-style: normal;
    }

    .abtparent {
      position: absolute;
      top: 98%;
      -ms-transform: translateY(-35%);
      transform: translateY(-35%);
      right: 7.5em;
      height: 1.3em;
      color: inherit;
    }

    .abtparent a {
      font-weight: 400;
      font-size: 1.3em;
      color: inherit;
      display: inline-block;
      position: relative;
    }

    .abtparent a:hover {
      color: var(--md-default-fg-color); 
    }

    .abtparent a:after {
      font-weight: 400;
      content: "-->";
      margin-left: -10px;
      opacity: 0;
      vertical-align: middle;
      transition: margin 0.3s, opacity 0.3s;
    }

    .abtparent a:hover:after {
      margin-left: 5px;
      opacity: 1;
    }

    .toggle .main-navigation {
      transition-duration: 0.35;
      transform: translateX(0);
    }

    .toggle .main-navigation a {
      animation: link-appear calc(var(--duration) * 1.5) var(--ease) forwards;
    }

    @keyframes link-appear {
      0%, 25% {
        transform: translateY(100%);
      }
      50%, 100% {
        transform: translateY(0);
      }
    }

    
    @media (max-width: 76em) {
      .logo {
          padding-left: 1em;
      }
    }
    
    @media (max-width: 45em) {
      .logo {
        padding-left: 1em;
      }
      header{
        padding-top: 1.25em;
      }
      .preloader {
        width: 300px;
      }
    }

    @media (max-width: 59.892857142857146em) {
      .toggle .md-search__icon.md-icon:first-of-type {
        color: var(--md-default-fg-color);
      }
      .socials {
        align-self: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        float: right;
        right: 0.15em;
        margin: 0;
        position: absolute;
        top: 50%;
        -ms-transform: translateY(-15%);
        transform: translateY(-15%);
      }
      .preloader {
        width: 500px;
      }
    }

    @media (max-height: 33em) {
      .socialsparent {
        overflow-y: hidden;  
        margin-top: -14.27em;
        height: 100vh;
        position: relative;
      }
      
      .socials {
        align-self: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        float: right;
        padding-left: 95vw;
        margin: 0;
        position: absolute;
        top: 14em;
      }
    }

     @media (min-width: 59.892857142857146em) {
      .md-grid {
        margin-left: auto;
        margin-right: auto;
        max-width: 100vw;
      }
      .md-header__inner {
        margin-left: 5vw;
        margin-right: 5vw;
      }
    }

</style>

<img class="preloader" src="../images/index/loader.gif">
<div class="preloaderbg"></div>

<nav class="main-navigation">
    <ul>
      <li><a class="home" href="../"><span class="navnum">01</span> Home</a></li>
      <li><a class="about" href="http://teddywarner.com/About-Me/about/"><span class="navnum">02</span> About Me</a></li>
      <li><a class="proj" href="http://teddywarner.com/feed/"><span class="navnum">03</span> Projects</a></li>
      <li><a class="mach" href="http://teddywarner.com/Machine-Profiles/FusionPro48/"><span class="navnum">04</span> Machine Profiles</a></li>
      <li><a style="font-family: 'Fira Sans';" class="fab" href="https://fabacademy.org/2021/labs/charlotte/students/theodore-warner/"><span class="navnum">05</span> Fab Academy</a></li>
    </ul>
</nav>

<body>
	<main>
    <h1></h1>
    <div data-scroll>
      <div class="content">
        <div class="item">
          <div class="item__img-wrap"><div class="item__img item__img--t2"></div></div>
        </div>
        <div class="item">
          <div class="item__img-wrap"><div class="item__img item__img--t3"></div></div>
        </div>
        <div class="item">
          <div class="item__img-wrap"><div class="item__img item__img--t1"></div></div>
        </div>
        <div class="item">
          <div class="item__img-wrap"><div class="item__img item__img--t3"></div></div>
        </div>
      </div>
    </div>
  </main>

  <div class="socialsparent">
    <div class="socials">
      <a href="https://www.linkedin.com/in/teddy-warner-880974200/" class="ln" style=" color: inherit;" title="Linked In - Teddy Warner"><i class="fab fa-linkedin"></i></a>
      <a href="https://github.com/Twarner491" class="git" style=" color: inherit;" title="Github - Twarner491"><i class="fab fa-github"></i></a>
      <a href="https://www.instagram.com/teddymakesstuff/" class="insta" style=" color: inherit;" title="Instagram - @teddymakesstuff"><i class="fa fa-instagram"></i></a>
      <a href="https://twitter.com/WarnerTeddy" class="twitter" style=" color: inherit;" title="Twitter - @WarnerTeddy"><i class="fa fa-twitter"></i></a>
      <a href="https://discordapp.com/users/534164566649733120/" class="ln" style=" color: inherit;" title="Discord - Twarner#2592"><i class="fab fa-discord"></i></a>
      <a href="https://open.spotify.com/user/mskz5e4dyzv4cb4kkn73iipq0?si=58a503e3c7a54eeb" class="spotify" style=" color: inherit;" title="Spotify - Teddy Warner"><i class="fab fa-spotify"></i></a>
      <a href="https://www.buymeacoffee.com/teddywarner" class="coffee" style=" color: inherit;" title="Buy Me A Coffee! :)"><i class="fas fa-coffee"></i></a>
      <a href="mailto:<Twarner491@gmail.com>" class="email" style=" color: inherit;" title="Email - Twarner491@gmail.com"><i class="fas fa-paper-plane"></i></a>
    </div>
  </div>
</body>