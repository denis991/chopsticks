
/*  chopsticks v 1.0.01 | by Clake
* Copyright (c) 2023 Clake,
* Tue Jun 27 2023 17:07:23 GMT+0300 (Москва, стандартное время)
*/
!function(){"use strict";function e(){var e=window.innerWidth||document.documentElement.clientWidth,t=document.documentElement;e<600?(t.classList.add("mobile"),t.classList.remove("desktop")):(t.classList.add("desktop"),t.classList.remove("mobile"))}function t(){const e=window.innerWidth||document.documentElement.clientWidth,t=50+50*(e-390)/1530;document.documentElement.style.setProperty("--border-radius",`${t}px`),document.documentElement.style.setProperty("--viewport-width",`${e}px`)}function n(){const e=document.getElementById("nam"),t=document.getElementById("phone");console.log("Name:",e.value),console.log("Phone:",t.value),document.querySelector(".modal-container").classList.add("active"),e.value="",t.value=""}function o(){document.querySelector(".modal-container").classList.remove("active")}window.addEventListener("DOMContentLoaded",t),window.addEventListener("resize",t),function(e){let t=new Image;t.onload=t.onerror=function(){!function(e){let t=!0===e?"webp":"no-webp";document.documentElement.classList.add(t)}(2==t.height)},t.src="data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"}(),window.addEventListener("load",(function(){var n=document.documentElement;let o=navigator.userAgent.toLowerCase().match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i),d=o[1],i=o.input.split(" ");d?n.classList.add(d):n.classList.add("other-browser"),e(),window.addEventListener("load",(function(){e(),t()})),window.addEventListener("resize",(function(){e(),t()}));var c=/(iPad|iPhone|iPod)/.test(i),s=/(Android)/.test(i),a=/(iPhone)/.test(i),l=/(iPad)/.test(i);n.classList.add("js"),c&&n.classList.add("ios"),s&&n.classList.add("android"),a&&n.classList.add("iphone"),l&&n.classList.add("ipad")})),t(),(()=>{const e=document.querySelector(".container-button_open"),t=document.querySelector(".header__mobile-modal");e?.addEventListener("click",(e=>{setTimeout((function(){t?.classList.toggle("active")}),100)}))})(),(()=>{const e=document.querySelector(".button-close"),t=document.querySelector(".header__mobile-modal");e?.addEventListener("click",(e=>{t?.classList.toggle("active")}))})(),setTimeout((()=>{document.getElementById("request").addEventListener("click",n),document.querySelector(".modal-close-button").addEventListener("click",o);const e=document.querySelector(".modal-container");e.addEventListener("click",(function(t){t.target===e&&o()}))}),500)}();