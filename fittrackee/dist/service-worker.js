if(!self.define){let s,i={};const e=(e,t)=>(e=new URL(e+".js",t).href,i[e]||new Promise((i=>{if("document"in self){const s=document.createElement("script");s.src=e,s.onload=i,document.head.appendChild(s)}else s=e,importScripts(e),i()})).then((()=>{let s=i[e];if(!s)throw new Error(`Module ${e} didn’t register its module`);return s})));self.define=(t,r)=>{const a=s||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let l={};const n=s=>e(s,a),o={module:{uri:a},exports:l,require:n};i[a]=Promise.all(t.map((s=>o[s]||n(s)))).then((s=>(r(...s),l)))}}define(["./workbox-db5fc017"],(function(s){"use strict";s.setCacheNameDetails({prefix:"fittrackee_client"}),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"/img/bike.svg",revision:"ab4faed007625b209af72b9b8dce84db"},{url:"/img/weather/breeze.svg",revision:"428c6ccb838f8e91dc4826c5b650a98b"},{url:"/img/weather/clear-day.svg",revision:"f3e8628de2e5089f508f03944f8be951"},{url:"/img/weather/clear-night.svg",revision:"6a0d6579a93e89fdf1a2a95b398e0935"},{url:"/img/weather/cloudy.svg",revision:"c52fe62c9d9fea2cdf5ae2813b3df366"},{url:"/img/weather/fog.svg",revision:"9f4d74289594eb83f9c175d13167a0eb"},{url:"/img/weather/partly-cloudy-day.svg",revision:"f730c2e4f4c014e8b49c9d4a0a141b90"},{url:"/img/weather/partly-cloudy-night.svg",revision:"0d9270901c4dffbc05f3998d835171c8"},{url:"/img/weather/pour-rain.svg",revision:"91eb3159ba8781d258d8c384a8ef987c"},{url:"/img/weather/rain.svg",revision:"c52ca88ce0ddf4de0fc29167e578b2be"},{url:"/img/weather/sleet.svg",revision:"97d61d89332f912c1ec27bcbe077b7bd"},{url:"/img/weather/snow.svg",revision:"9e88c89c0d6d14174e9665e98932dd80"},{url:"/img/weather/temperature.svg",revision:"d42b62d0b57d5d326506277d87b70435"},{url:"/img/weather/wind.svg",revision:"d75fbe559220d7b2b9577a98a91f38d0"},{url:"/img/workouts/finish.svg",revision:"375196b7ade7c07c3b64ac4cb8b850a8"},{url:"/img/workouts/mountains.svg",revision:"0b94f1d4a050a86ca5ac89ab3ed60f9c"},{url:"/img/workouts/start.svg",revision:"97f6a197b6c2869e0cb2ff0e7697af86"},{url:"/index.html",revision:"edb34c7c9b22c22401e9a04231acec6d"},{url:"/manifest.json",revision:"c61028ca6e9f81bf958e6b66238e2d7c"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"},{url:"/static/css/admin.73df498d.css",revision:null},{url:"/static/css/app.38b148d9.css",revision:null},{url:"/static/css/fork-awesome.min.css",revision:"82c1118c918377daaa71a320ab8eea42"},{url:"/static/css/leaflet.css",revision:"5c761a156eea82263d8bacf1718fe04d"},{url:"/static/css/profile.9f83730d.css",revision:null},{url:"/static/css/reset.e2527ec6.css",revision:null},{url:"/static/css/statistics.40e24e75.css",revision:null},{url:"/static/css/workouts.c2966dd5.css",revision:null},{url:"/static/fonts/forkawesome-webfont.eot",revision:"e719f9244c69e28e7d00e725ca1e280e"},{url:"/static/fonts/forkawesome-webfont.svg",revision:"d58987a18774d859d98af95281c1dee5"},{url:"/static/fonts/forkawesome-webfont.ttf",revision:"fe45770c6c277da3921355d971045ea5"},{url:"/static/fonts/forkawesome-webfont.woff",revision:"92cd4d8328b2ae614386a01ff935a9f3"},{url:"/static/fonts/forkawesome-webfont.woff2",revision:"12ee76445f0383c58529169d700b6650"},{url:"/static/fonts/pt-sans-v9-latin-700.01a58da9.eot",revision:null},{url:"/static/fonts/pt-sans-v9-latin-700.51b1613b.woff2",revision:null},{url:"/static/fonts/pt-sans-v9-latin-700.5ff2a2d7.woff",revision:null},{url:"/static/fonts/pt-sans-v9-latin-700.6514157e.ttf",revision:null},{url:"/static/fonts/pt-sans-v9-latin-italic.10011d51.woff2",revision:null},{url:"/static/fonts/pt-sans-v9-latin-italic.6206408d.ttf",revision:null},{url:"/static/fonts/pt-sans-v9-latin-italic.8293436e.eot",revision:null},{url:"/static/fonts/pt-sans-v9-latin-italic.fe36f54f.woff",revision:null},{url:"/static/fonts/pt-sans-v9-latin-regular.b5b74f16.woff",revision:null},{url:"/static/fonts/pt-sans-v9-latin-regular.c43bc0a2.ttf",revision:null},{url:"/static/fonts/pt-sans-v9-latin-regular.c5a514ae.eot",revision:null},{url:"/static/fonts/pt-sans-v9-latin-regular.e7867499.woff2",revision:null},{url:"/static/img/map.5b26d82b.svg",revision:null},{url:"/static/img/pt-sans-v9-latin-700.b8a7047e.svg",revision:null},{url:"/static/img/pt-sans-v9-latin-italic.0b285c83.svg",revision:null},{url:"/static/img/pt-sans-v9-latin-regular.59a385b4.svg",revision:null},{url:"/static/js/243.d72fe9e5.js",revision:null},{url:"/static/js/431.386df171.js",revision:null},{url:"/static/js/633.23ee7aff.js",revision:null},{url:"/static/js/858.922b6a43.js",revision:null},{url:"/static/js/93.37abd50d.js",revision:null},{url:"/static/js/admin.4313b7d9.js",revision:null},{url:"/static/js/app.6df97be4.js",revision:null},{url:"/static/js/chunk-vendors.f7305cd3.js",revision:null},{url:"/static/js/password.c0f2f8e4.js",revision:null},{url:"/static/js/password.de.b81f881f.js",revision:null},{url:"/static/js/password.en.b4ea7085.js",revision:null},{url:"/static/js/password.es.0258a734.js",revision:null},{url:"/static/js/password.fr.1d179591.js",revision:null},{url:"/static/js/password.it.be465eec.js",revision:null},{url:"/static/js/profile.98e985f4.js",revision:null},{url:"/static/js/reset.5b99fa0f.js",revision:null},{url:"/static/js/statistics.5228e1ba.js",revision:null},{url:"/static/js/workouts.2996c656.js",revision:null}],{})}));
//# sourceMappingURL=service-worker.js.map
