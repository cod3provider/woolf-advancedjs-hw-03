import{a as d,S as m,i as g}from"./assets/vendor-fbb7f6e7.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const v="live_TPrcb81nEhbpChqH04IgSnjHpAA3iFbZ94HJ0KBZ5c8W8cRyAEVVHoOGtOTgjuw2",L="https://api.thecatapi.com/v1/breeds",y="https://api.thecatapi.com/v1/images/search?breed_ids";d.defaults.headers.common["x-api-key"]=v;function b(){return d(L).then(e=>e.data).catch(e=>console.log(e))}function S(e){return d(`${y}=${e}`).then(n=>n.data[0]).catch(n=>console.log(n))}const s=document.querySelector(".breed-select"),i=document.querySelector(".cat-info"),l=document.querySelector(".loader");let u;const w=()=>{g.error({title:"Oops!",message:"Something went wrong! Try reloading the page!",position:"topRight"})};function T(){S(u).then(e=>{f(),i.innerHTML=$(e)}).catch(()=>{i.innerHTML="",h()})}b().then(e=>{p(),f(),s.insertAdjacentHTML("afterbegin",A(e)),new m({select:s}),u=s.value}).catch(()=>{i.innerHTML="",h()});function $(e){const{description:n,name:o,temperament:c}=e.breeds[0];return`
    <div>
      <h1 class='title'>${o}</h1>
      <div class='content_wrapper'>
        <div class='img_wrapper'>
        <img
          class='img'
          src='${e.url}'
          alt='${n}'
          width='500'
        />
        </div>
        <div class='text_wrapper'>
          <p class='description'>${n}</p>
          <p class='temperament'>${c}</p>
        </div>
      </div>
    </div>
  `}function A(e){return e.map(({id:n,name:o})=>`
    <option value='${n}'>${o}</option>
  `)}function h(){l.classList.add("hidden"),w()}function p(){l.classList.remove("hidden"),i.classList.add("hidden")}function f(){s.classList.remove("hidden"),l.classList.add("hidden"),i.classList.remove("hidden")}function E(){u=this.value,p(),T()}s.addEventListener("change",E);
//# sourceMappingURL=commonHelpers.js.map
