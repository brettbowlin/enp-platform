(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[function(t,i,n){"use strict";function e(t,i){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,i){if(!t)return;if("string"==typeof t)return s(t,i);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(t,i)}(t))||i&&t&&"number"==typeof t.length){n&&(t=n);var e=0,o=function(){};return{s:o,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,r=!0,l=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return r=t.done,t},e:function(t){l=!0,a=t},f:function(){try{r||null==n.return||n.return()}finally{if(l)throw a}}}}function s(t,i){(null==i||i>t.length)&&(i=t.length);for(var n=0,e=new Array(i);n<i;n++)e[n]=t[n];return e}function o(t,i){for(var n=0;n<i.length;n++){var e=i[n];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}n.r(i);var a=function(){function t(i,n){!function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,t),this.button=i,this.els=n,this.onClick=this.click.bind(this),this.init()}var i,n,s;return i=t,(n=[{key:"init",value:function(){this.button.addEventListener("click",this.onClick);var t,i=e(this.els);try{for(i.s();!(t=i.n()).done;){var n=t.value;n.classList.add("is-hidden"),this.ariaHidden(n)}}catch(t){i.e(t)}finally{i.f()}this.button.classList.add("is-closed")}},{key:"destroy",value:function(){var t,i=e(this.els);try{for(i.s();!(t=i.n()).done;){var n=t.value;n.classList.remove("is-hidden"),n.classList.remove("is-open"),n.removeAttribute("aria-hidden")}}catch(t){i.e(t)}finally{i.f()}this.button.classList.remove("is-closed"),this.button.classList.remove("is-open"),this.button.removeEventListener("click",this.onClick)}},{key:"click",value:function(t){window.innerWidth<800&&t.preventDefault(),"A"===this.button.tagName&&this.button.classList.contains("is-open")&&(window.location=this.button.getAttribute("href")),this.toggleButton();var i,n=e(this.els);try{for(n.s();!(i=n.n()).done;){var s=i.value;this.toggle(s)}}catch(t){n.e(t)}finally{n.f()}}},{key:"toggleButton",value:function(){var t,i,n,e,s=this;this.button.classList.contains("is-open")?((t=this.button.classList).remove.apply(t,["is-opening","is-open"]),(i=this.button.classList).add.apply(i,["is-closing","is-closed"]),setTimeout((function(){s.button.classList.remove("is-closing")}),600)):((n=this.button.classList).remove.apply(n,["is-closing","is-closed"]),(e=this.button.classList).add.apply(e,["is-opening","is-open"]),setTimeout((function(){s.button.classList.remove("is-opening")}),600))}},{key:"toggle",value:function(t){t.classList.contains("is-open")?this.hide(t):this.show(t)}},{key:"show",value:function(t){var i;t.classList.add("is-open"),(i=t.classList).remove.apply(i,["is-hidden","is-hiding"]),this.ariaShow(t),t.classList.add("is-opening"),setTimeout((function(){t.classList.remove("is-opening")}),600)}},{key:"hide",value:function(t){var i,n;(i=t.classList).remove.apply(i,["is-open","is-opening"]),(n=t.classList).add.apply(n,["is-hidden","is-hiding"]),this.ariaHidden(t),setTimeout((function(){t.classList.remove("is-hiding")}),600)}},{key:"ariaShow",value:function(t){t.setAttribute("aria-hidden",!1)}},{key:"ariaHidden",value:function(t){t.setAttribute("aria-hidden",!0)}}])&&o(i.prototype,n),s&&o(i,s),t}();i.default=a}]]);