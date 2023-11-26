import{a as d,S as g,i as v}from"./assets/vendor-f93c747e.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function r(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(t){if(t.ep)return;t.ep=!0;const n=r(t);fetch(t.href,n)}})();const y="live_TPrcb81nEhbpChqH04IgSnjHpAA3iFbZ94HJ0KBZ5c8W8cRyAEVVHoOGtOTgjuw2",L="https://api.thecatapi.com/v1/breeds",b="https://api.thecatapi.com/v1/images/search?breed_ids";d.defaults.headers.common["x-api-key"]=y;function S(){return d(L).then(e=>(console.log(e),e.data)).catch(e=>console.log(e.message))}function w(e){return d(`${b}=${e}`).then(o=>(console.log(o.data[0]),o.data[0])).catch(o=>console.log(o))}const i=document.querySelector(".breed-select"),a=document.querySelector(".cat-info"),u=document.querySelector(".loader");let s,$=!0;console.log($);const A=()=>{v.error({title:"Oops!",message:"Something went wrong! Try reloading the page!",position:"topRight"})};function p(){w(s).then(e=>{m(),a.innerHTML=E(e)}).catch(e=>{console.log(e),h()})}S().then(e=>{f(),m(),i.insertAdjacentHTML("afterbegin",O(e)),new g({select:i}),s=i.value,console.log(s),a.length||p()}).catch(e=>{console.log(e),h()});function E(e){const{description:o,name:r,temperament:c}=e.breeds[0];return`
    <div>
      <h1 class='title'>${r}</h1>
      <div class='content_wrapper'>
        <div class='img_wrapper'>
        <img
          class='img'
          src='${e.url}'
          alt='${o}'
          width='500'
        />
      </div>
      <div class='text_wrapper'>
        <p class='description'>${o}</p>
        <p class='temperament'>${c}</p>
      </div>
      </div>
    </div>
  `}function O(e){return e.map(({id:o,name:r})=>`
    <option value='${o}'>${r}</option>
  `)}function h(){u.classList.add("hidden"),A()}function f(){u.classList.remove("hidden"),a.classList.add("hidden")}function m(){u.classList.add("hidden"),a.classList.remove("hidden")}i.addEventListener("change",function(){s=this.value,f(),p(),console.log(s)});
//# sourceMappingURL=commonHelpers.js.map
