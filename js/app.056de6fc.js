(()=>{"use strict";var e={4594:(e,t,r)=>{var n=r(1957),o=r(1947),a=r(499),i=r(9835);function s(e,t,r,n,o,a){const s=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(s)}const l=(0,i.aZ)({name:"App"});var c=r(1639);const p=(0,c.Z)(l,[["render",s]]),u=p;var d=r(3340),h=r(8339);const f=[{path:"/",component:()=>Promise.all([r.e(736),r.e(969)]).then(r.bind(r,5969)),redirect:"index",children:[{path:"index",component:()=>Promise.all([r.e(736),r.e(990)]).then(r.bind(r,3990))},{path:"papers",component:()=>Promise.all([r.e(736),r.e(64),r.e(681)]).then(r.bind(r,6681))},{path:"member",component:()=>Promise.all([r.e(736),r.e(35)]).then(r.bind(r,6035))},{path:"recruit",component:()=>Promise.all([r.e(736),r.e(224)]).then(r.bind(r,7224))},{path:"project",component:()=>Promise.all([r.e(736),r.e(627)]).then(r.bind(r,627))},{path:"/paper/:id",component:()=>Promise.all([r.e(736),r.e(64),r.e(457)]).then(r.bind(r,9457))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([r.e(736),r.e(862)]).then(r.bind(r,1862))}],m=f;var g=r(1569);const v=(0,d.BC)((function(){const e=h.PO,t=(0,h.p7)({scrollBehavior:()=>({left:0,top:0}),routes:m,history:e("/")});return t.beforeEach(((e,t,r)=>{"space"===e.name||"spaceIndex"===e.name||"spaceFile"===e.name||"spaceBlog"===e.name||"spaceUpload"===e.name?null===localStorage.getItem("access_token")?r("/login"):g.hi.get("/v1/hello").then((e=>{200===e.status?r():r("/login")})):r()})),t}));async function b(e,t){const r=e(u);r.use(o.Z,t);const n=(0,a.Xl)("function"===typeof v?await v({}):v);return{app:r,router:n}}var y=r(4328);const k={config:{},plugins:{Notify:y.Z}};async function P({app:e,router:t}){e.use(t),e.mount("#q-app")}b(n.ri,k).then(P)},1569:(e,t,r)=>{r.d(t,{hi:()=>a});var n=r(3340),o=r(8329);const a=o.ZP.create({baseURL:"https://xwyzsn.site"});a.interceptors.request.use((e=>{localStorage.getItem("access_token");return null!==localStorage.getItem("access_token")&&(e.headers.Authorization="Bearer "+localStorage.getItem("access_token")),e}));(0,n.xr)((({app:e})=>{e.config.globalProperties.$axios=o.ZP,e.config.globalProperties.$api=a}))}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.m=e,(()=>{var e=[];r.O=(t,n,o,a)=>{if(!n){var i=1/0;for(p=0;p<e.length;p++){for(var[n,o,a]=e[p],s=!0,l=0;l<n.length;l++)(!1&a||i>=a)&&Object.keys(r.O).every((e=>r.O[e](n[l])))?n.splice(l--,1):(s=!1,a<i&&(i=a));if(s){e.splice(p--,1);var c=o();void 0!==c&&(t=c)}}return t}a=a||0;for(var p=e.length;p>0&&e[p-1][2]>a;p--)e[p]=e[p-1];e[p]=[n,o,a]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,n)=>(r.f[n](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+(64===e?"chunk-common":e)+"."+{35:"4748675e",64:"115dae49",224:"7ea9ef32",457:"f0f5de92",627:"49e9c2e3",681:"71143519",862:"afe41353",969:"39ed29f5",990:"a8d6f121"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+({143:"app",736:"vendor"}[e]||e)+"."+{35:"e742731f",143:"c0e853c1",224:"6c5d0dfb",627:"bcc6cc0f",681:"b17b0bee",736:"898e9175",969:"d6c95e49",990:"1c24a21a"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="ex-site:";r.l=(n,o,a,i)=>{if(e[n])e[n].push(o);else{var s,l;if(void 0!==a)for(var c=document.getElementsByTagName("script"),p=0;p<c.length;p++){var u=c[p];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==t+a){s=u;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.setAttribute("data-webpack",t+a),s.src=n),e[n]=[o];var d=(t,r)=>{s.onerror=s.onload=null,clearTimeout(h);var o=e[n];if(delete e[n],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((e=>e(r))),t)return t(r)},h=setTimeout(d.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=d.bind(null,s.onerror),s.onload=d.bind(null,s.onload),l&&document.head.appendChild(s)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p="/"})(),(()=>{var e=(e,t,r,n)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=a=>{if(o.onerror=o.onload=null,"load"===a.type)r();else{var i=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=s,o.parentNode.removeChild(o),n(l)}};return o.onerror=o.onload=a,o.href=t,document.head.appendChild(o),o},t=(e,t)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var o=r[n],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){o=i[n],a=o.getAttribute("data-href");if(a===e||a===t)return o}},n=n=>new Promise(((o,a)=>{var i=r.miniCssF(n),s=r.p+i;if(t(i,s))return o();e(n,s,o,a)})),o={143:0};r.f.miniCss=(e,t)=>{var r={35:1,224:1,627:1,681:1,969:1,990:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=n(e).then((()=>{o[e]=0}),(t=>{throw delete o[e],t})))}})(),(()=>{var e={143:0};r.f.j=(t,n)=>{var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var a=new Promise(((r,n)=>o=e[t]=[r,n]));n.push(o[2]=a);var i=r.p+r.u(t),s=new Error,l=n=>{if(r.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,o[1](s)}};r.l(i,l,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,n)=>{var o,a,[i,s,l]=n,c=0;if(i.some((t=>0!==e[t]))){for(o in s)r.o(s,o)&&(r.m[o]=s[o]);if(l)var p=l(r)}for(t&&t(n);c<i.length;c++)a=i[c],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(p)},n=globalThis["webpackChunkex_site"]=globalThis["webpackChunkex_site"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=r.O(void 0,[736],(()=>r(4594)));n=r.O(n)})();