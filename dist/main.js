!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){const n=[];let o=0;function r(e,t){const n=t;console.log(`${n}displayporject`);const o=document.createElement("div");o.setAttribute("class","divProj"),o.setAttribute("id",n);const r=document.createTextNode(e);o.appendChild(r),document.getElementById("projectDiv").appendChild(o),function(e){const t=e;console.log(`${t}dPF`);const n=document.createElement("form");n.setAttribute("id",t);const o=document.createElement("input");o.setAttribute("type","text"),o.setAttribute("name","title");const r=document.createElement("input");r.setAttribute("type","submit"),r.setAttribute("value","Submit"),n.appendChild(o),n.appendChild(r),document.getElementById(e).appendChild(n),function(e){const t=document.getElementById(e);t.addEventListener("submit",n=>{console.log("eventL"),n.preventDefault(),function(e,t){console.log("HEJ");const n=document.createElement("li");var o;n.setAttribute("class","newItem"),(o=n).onclick=function(){"line-through"!=o.style.textDecoration?(o.style.textDecoration="line-through",o.style.background="grey",o.style.color="white"):(o.style.textDecoration="none",o.style.background="#eee",o.style.color="black")},o.style.cursor="pointer";const r=document.createTextNode(e);n.appendChild(r),document.getElementById(t).appendChild(n)}(`${t.querySelector('input[name="title"]').value}`,e)})}(t)}(n)}!function(){const e=document.forms.projectformId;e.addEventListener("submit",t=>{console.log("hej"),t.preventDefault();const c=e.querySelector('input[name="project"]');c.value,((e,t)=>{const o={title:e,projectId:t};n.push(o),r(e,t)})(`${c.value}`,function(){for(let e=0;e<n.length;e++)o<=n[e].projectId&&(o=n[e].projectId+1);return o}())})}()}]);