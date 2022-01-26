webpackJsonp([0],[,function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=function(){function t(t,i){for(var e=0;e<i.length;e++){var s=i[e];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(i,e,s){return e&&t(i.prototype,e),s&&t(i,s),i}}();var n=function(){function t(i,e){!function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,t),this.button=i,this.els=e,this.onClick=this.click.bind(this),this.init()}return s(t,[{key:"init",value:function(){this.button.addEventListener("click",this.onClick);var t=!0,i=!1,e=void 0;try{for(var s,n=this.els[Symbol.iterator]();!(t=(s=n.next()).done);t=!0){var o=s.value;o.classList.add("is-hidden"),this.ariaHidden(o)}}catch(t){i=!0,e=t}finally{try{!t&&n.return&&n.return()}finally{if(i)throw e}}this.button.classList.add("is-closed")}},{key:"destroy",value:function(){var t=!0,i=!1,e=void 0;try{for(var s,n=this.els[Symbol.iterator]();!(t=(s=n.next()).done);t=!0){var o=s.value;o.classList.remove("is-hidden"),o.classList.remove("is-open"),o.removeAttribute("aria-hidden")}}catch(t){i=!0,e=t}finally{try{!t&&n.return&&n.return()}finally{if(i)throw e}}this.button.classList.remove("is-closed"),this.button.classList.remove("is-open"),this.button.removeEventListener("click",this.onClick)}},{key:"click",value:function(t){window.innerWidth<800&&t.preventDefault(),"A"===this.button.tagName&&this.button.classList.contains("is-open")&&(window.location=this.button.getAttribute("href")),this.toggleButton();var i=!0,e=!1,s=void 0;try{for(var n,o=this.els[Symbol.iterator]();!(i=(n=o.next()).done);i=!0){var a=n.value;this.toggle(a)}}catch(t){e=!0,s=t}finally{try{!i&&o.return&&o.return()}finally{if(e)throw s}}}},{key:"toggleButton",value:function(){var t,i,e,s,n=this;this.button.classList.contains("is-open")?((t=this.button.classList).remove.apply(t,["is-opening","is-open"]),(i=this.button.classList).add.apply(i,["is-closing","is-closed"]),setTimeout(function(){n.button.classList.remove("is-closing")},600)):((e=this.button.classList).remove.apply(e,["is-closing","is-closed"]),(s=this.button.classList).add.apply(s,["is-opening","is-open"]),setTimeout(function(){n.button.classList.remove("is-opening")},600))}},{key:"toggle",value:function(t){t.classList.contains("is-open")?this.hide(t):this.show(t)}},{key:"show",value:function(t){var i;t.classList.add("is-open"),(i=t.classList).remove.apply(i,["is-hidden","is-hiding"]),this.ariaShow(t),t.classList.add("is-opening"),setTimeout(function(){t.classList.remove("is-opening")},600)}},{key:"hide",value:function(t){var i,e;(i=t.classList).remove.apply(i,["is-open","is-opening"]),(e=t.classList).add.apply(e,["is-hidden","is-hiding"]),this.ariaHidden(t),setTimeout(function(){t.classList.remove("is-hiding")},600)}},{key:"ariaShow",value:function(t){t.setAttribute("aria-hidden",!1)}},{key:"ariaHidden",value:function(t){t.setAttribute("aria-hidden",!0)}}]),t}();i.default=n}]);