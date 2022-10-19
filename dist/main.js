!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=9)}([function(t,e,n){n(1);t.exports={isDate:function(t){return"[object Date]"===Object.prototype.toString.call(t)||(isNaN(t),!1)}}},function(t,e,n){(function(t){!function(t){"use strict";t.exports.is_uri=n,t.exports.is_http_uri=r,t.exports.is_https_uri=o,t.exports.is_web_uri=i,t.exports.isUri=n,t.exports.isHttpUri=r,t.exports.isHttpsUri=o,t.exports.isWebUri=i;var e=function(t){return t.match(/(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/)};function n(t){if(t&&!/[^a-z0-9\:\/\?\#\[\]\@\!\$\&\'\(\)\*\+\,\;\=\.\-\_\~\%]/i.test(t)&&!/%[^0-9a-f]/i.test(t)&&!/%[0-9a-f](:?[^0-9a-f]|$)/i.test(t)){var n,r,o,i,a,c="",s="";if(c=(n=e(t))[1],r=n[2],o=n[3],i=n[4],a=n[5],c&&c.length&&o.length>=0){if(r&&r.length){if(0!==o.length&&!/^\//.test(o))return}else if(/^\/\//.test(o))return;if(/^[a-z][a-z0-9\+\-\.]*$/.test(c.toLowerCase()))return s+=c+":",r&&r.length&&(s+="//"+r),s+=o,i&&i.length&&(s+="?"+i),a&&a.length&&(s+="#"+a),s}}}function r(t,r){if(n(t)){var o,i,a,c,s="",l="",u="",d="";if(s=(o=e(t))[1],l=o[2],i=o[3],a=o[4],c=o[5],s){if(r){if("https"!=s.toLowerCase())return}else if("http"!=s.toLowerCase())return;if(l)return/:(\d+)$/.test(l)&&(u=l.match(/:(\d+)$/)[0],l=l.replace(/:\d+$/,"")),d+=s+":",d+="//"+l,u&&(d+=u),d+=i,a&&a.length&&(d+="?"+a),c&&c.length&&(d+="#"+c),d}}}function o(t){return r(t,!0)}function i(t){return r(t)||o(t)}}(t)}).call(this,n(2)(t))},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e){t.exports={fetchData:async(t="",e={postcode:""})=>{try{const n=await fetch(t,{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});return await n.json()}catch(t){return t}}}},function(t,e){t.exports={fetchWeatherData:async(t="",e={lat:"",lon:""})=>{try{const n=await fetch(t,{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});return await n.json()}catch(t){return alert("Sorry, something went wrong!"),t}}}},function(t,e){t.exports={showResult:({locationData:t},e,n,r,o)=>{const i=t.postalCodes[0].placeName,a=t.postalCodes[0].countryCode,c=e,s=n.app_max_temp,l=n.app_min_temp,u=n.weather.description;if(document.getElementById("city-img")){document.getElementById("city-img").src=o}else{const t=document.getElementById("imgplacehoder"),e=document.createElement("img");e.src=o,e.id="city-img",t.appendChild(e)}document.getElementById("location").innerHTML=`${i}, ${a} is ${c} days away<br> You will stay there for ${r} days`,document.getElementById("weather").innerHTML=`Typical weather for then is : <br> High - ${s}, Low = ${l}<br> ${u}`}}},function(t,e){t.exports={dateDiff:(t,e)=>{const n=e-t;return Math.round(n/864e5)}}},function(t,e){t.exports={fetchCityWeatherImg:async(t="",e={city:"",lang:""})=>{try{const n=await fetch(t,{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),r=await n.json(),o=r.totalHits;if(0!=o){let t=0,e="";for(let n=0;n<o;n++)r.hits[n].views>t&&(t=r.hits[n].views,e=r.hits[n].webformatURL);return e}return r}catch(t){return alert("Sorry, something went wrong!"),t}}}},function(t,e,n){},function(t,e,n){"use strict";n.r(e);const{isDate:r}=n(0),{fetchData:o}=n(3),{fetchWeatherData:i}=n(4),{showResult:a}=n(5),{dateDiff:c}=n(6),{fetchCityWeatherImg:s}=n(7),l=async t=>{t.preventDefault();let e=document.getElementById("city").value,n=new Date(document.getElementById("flight-date").value),l=new Date(document.getElementById("flight-end-date").value);e?document.getElementById("flight-date").value&&document.getElementById("flight-end-date").value?r(n)?r(l)||alert("Your input is not a date format"):alert("Your input is not a date forma"):alert("Your input is not a date format"):alert("Your input is empty"),l<n&&alert("Your return day should not be earlier than departure date"),console.log(l>=n);let u=new Date;console.log("::: Form Submitted :::");const d=await o("http://localhost:8081/check",{city:e}),f=c(u,n),p=c(n,l),h=d.postalCodes[0].lat,y=d.postalCodes[0].lng,m=d.postalCodes[0].countryCode,g=await i("http://localhost:8081/check/weather",{lat:h,lon:y}),w=await s("http://localhost:8081/check/cityimg",{city:e,lang:m}),b=g.data[Math.min(f,15)];a({locationData:d},f,b,p,w)};n(8);window.addEventListener("DOMContentLoaded",()=>{document.getElementById("submitButton").addEventListener("click",l)})}]);