(self.webpackChunkengage=self.webpackChunkengage||[]).push([[677],{677:(t,i,e)=>{"use strict";function n(t,i){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=function(t,i){if(!t)return;if("string"==typeof t)return s(t,i);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return s(t,i)}(t))||i&&t&&"number"==typeof t.length){e&&(t=e);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,r=!0,l=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return r=t.done,t},e:function(t){l=!0,a=t},f:function(){try{r||null==e.return||e.return()}finally{if(l)throw a}}}}function s(t,i){(null==i||i>t.length)&&(i=t.length);for(var e=0,n=new Array(i);e<i;e++)n[e]=t[e];return n}function o(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}e.r(i),e.d(i,{default:()=>a});const a=function(){function t(i,e){!function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,t),this.button=i,this.els=e,this.onClick=this.click.bind(this),this.init()}var i,e,s;return i=t,(e=[{key:"init",value:function(){this.button.addEventListener("click",this.onClick);var t,i=n(this.els);try{for(i.s();!(t=i.n()).done;){var e=t.value;e.classList.add("is-hidden"),this.ariaHidden(e)}}catch(t){i.e(t)}finally{i.f()}this.button.classList.add("is-closed")}},{key:"destroy",value:function(){var t,i=n(this.els);try{for(i.s();!(t=i.n()).done;){var e=t.value;e.classList.remove("is-hidden"),e.classList.remove("is-open"),e.removeAttribute("aria-hidden")}}catch(t){i.e(t)}finally{i.f()}this.button.classList.remove("is-closed"),this.button.classList.remove("is-open"),this.button.removeEventListener("click",this.onClick)}},{key:"click",value:function(t){window.innerWidth<800&&t.preventDefault(),"A"===this.button.tagName&&this.button.classList.contains("is-open")&&(window.location=this.button.getAttribute("href")),this.toggleButton();var i,e=n(this.els);try{for(e.s();!(i=e.n()).done;){var s=i.value;this.toggle(s)}}catch(t){e.e(t)}finally{e.f()}}},{key:"toggleButton",value:function(){var t,i,e,n,s=this;this.button.classList.contains("is-open")?((t=this.button.classList).remove.apply(t,["is-opening","is-open"]),(i=this.button.classList).add.apply(i,["is-closing","is-closed"]),setTimeout((function(){s.button.classList.remove("is-closing")}),600)):((e=this.button.classList).remove.apply(e,["is-closing","is-closed"]),(n=this.button.classList).add.apply(n,["is-opening","is-open"]),setTimeout((function(){s.button.classList.remove("is-opening")}),600))}},{key:"toggle",value:function(t){t.classList.contains("is-open")?this.hide(t):this.show(t)}},{key:"show",value:function(t){var i;t.classList.add("is-open"),(i=t.classList).remove.apply(i,["is-hidden","is-hiding"]),this.ariaShow(t),t.classList.add("is-opening"),setTimeout((function(){t.classList.remove("is-opening")}),600)}},{key:"hide",value:function(t){var i,e;(i=t.classList).remove.apply(i,["is-open","is-opening"]),(e=t.classList).add.apply(e,["is-hidden","is-hiding"]),this.ariaHidden(t),setTimeout((function(){t.classList.remove("is-hiding")}),600)}},{key:"ariaShow",value:function(t){t.setAttribute("aria-hidden",!1)}},{key:"ariaHidden",value:function(t){t.setAttribute("aria-hidden",!0)}}])&&o(i.prototype,e),s&&o(i,s),t}()}}]);