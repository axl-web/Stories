!function(e){var t={};function i(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p=".",i(i.s=3)}([function(e,t,i){},function(e,t){!function(){const e={lat:-38.01682,lng:-57.529451};let t=new google.maps.Map(document.getElementById("maps"),{center:e,zoom:17});new google.maps.Marker({position:e,map:t,title:"Axelios Space"})}()},function(e,t){document.querySelector(".menu").addEventListener("click",(function(){document.querySelector(".menu-screen").classList.add("active")})),document.querySelector(".close").addEventListener("click",(function(){document.querySelector(".menu-screen").classList.remove("active")})),document.querySelectorAll(".menu-screen a").forEach(e=>{e.addEventListener("click",(function(e){document.querySelector(".menu-screen").classList.remove("active");let t=this.href.split("/");const i=t[t.length-1];var n;return window.scrollTo&&e.preventDefault(),n=document.querySelector(i),window.scrollTo({behavior:"smooth",top:n.offsetTop}),!!window.scrollTo}))})},function(e,t,i){"use strict";i.r(t);i(0);var n=[{title:"Lorem Ipsum",subtitle:"Frente",image:"./public/img/slider1.jpg",text:"1 Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC"},{title:"Lorem Ipsum 2",subtitle:"Habitciones",image:"./public/img/slider2.jpg",text:"2 Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC"},{title:"Lorem Ipsum 3",subtitle:"Instalaciones",image:"./public/img/slider3.jpg",text:" 3 Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC"},{title:"Lorem Ipsum 4",subtitle:"Desayuno",image:"./public/img/slider4.jpg",text:" 4 Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC"},{title:"Lorem Ipsum 5",subtitle:"Playas",image:"./public/img/slider5.jpg",text:" 5 Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC"}];class r{static preloaderImages({images:e,completed:t}){const i=e.map(e=>r.preloaderImage({imagePath:e}));Promise.all(i).then(t)}static preloaderImage({imagePath:e}){return new Promise((t,i)=>{let n=new Image;n.src=e,n.onload=t})}}let s=document.querySelector("#slider-title"),o=document.querySelector("#slider-subtitle"),l=document.querySelector("#slider-image"),a=document.querySelector("#slider-text"),c=document.querySelector("#slider-text-content"),u=document.querySelector(".left-arrow"),m=document.querySelector(".right-arrow"),d=new class{constructor({elements:e,speed:t,animationFunc:i}){this.elements=e,this.speed=t,this.animationFunc=i,this.index=0,this.size=e.length,this.innerNext=this.innerNext.bind(this),this.innerPrev=this.innerPrev.bind(this),this.next=this.next.bind(this),this.prev=this.prev.bind(this)}innerNext(){this.index++,this.index>=this.size&&(this.index=0),this.animationFunc(this.elements[this.index])}innerPrev(){this.index--,this.index<0&&(this.index=this.size-1),this.animationFunc(this.elements[this.index])}next(){this.innerNext(),this.interval&&(this.stop(),this.play())}prev(){this.innerPrev(),this.interval&&(this.stop(),this.play())}play(){this.interval=setInterval(this.innerNext,this.speed)}stop(){clearInterval(this.interval)}}({elements:n,animationFunc:function(e){c.classList.add("hide"),l.classList.add("hide"),setTimeout((function(){s.innerHTML=e.title,o.innerHTML=e.subtitle,l.src=e.image,a.innerHTML=e.text,c.classList.remove("hide"),l.classList.remove("hide")}),600)},speed:5e3});d.play(),u.addEventListener("click",d.prev),m.addEventListener("click",d.next);const p=n.map(e=>e.image);r.preloaderImages({images:p,completed:function(){document.querySelector(".controls").style.display="block"}});i(1),i(2);navigator.serviceWorker&&navigator.serviceWorker.register("../sw.js")}]);