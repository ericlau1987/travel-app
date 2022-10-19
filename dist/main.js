!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=8)}([function(t,e,n){n(1);t.exports={isValidURL:function(t){return!0}}},function(t,e,n){(function(t){!function(t){"use strict";t.exports.is_uri=n,t.exports.is_http_uri=r,t.exports.is_https_uri=o,t.exports.is_web_uri=i,t.exports.isUri=n,t.exports.isHttpUri=r,t.exports.isHttpsUri=o,t.exports.isWebUri=i;var e=function(t){return t.match(/(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/)};function n(t){if(t&&!/[^a-z0-9\:\/\?\#\[\]\@\!\$\&\'\(\)\*\+\,\;\=\.\-\_\~\%]/i.test(t)&&!/%[^0-9a-f]/i.test(t)&&!/%[0-9a-f](:?[^0-9a-f]|$)/i.test(t)){var n,r,o,i,a,c="",s="";if(c=(n=e(t))[1],r=n[2],o=n[3],i=n[4],a=n[5],c&&c.length&&o.length>=0){if(r&&r.length){if(0!==o.length&&!/^\//.test(o))return}else if(/^\/\//.test(o))return;if(/^[a-z][a-z0-9\+\-\.]*$/.test(c.toLowerCase()))return s+=c+":",r&&r.length&&(s+="//"+r),s+=o,i&&i.length&&(s+="?"+i),a&&a.length&&(s+="#"+a),s}}}function r(t,r){if(n(t)){var o,i,a,c,s="",u="",l="",f="";if(s=(o=e(t))[1],u=o[2],i=o[3],a=o[4],c=o[5],s){if(r){if("https"!=s.toLowerCase())return}else if("http"!=s.toLowerCase())return;if(u)return/:(\d+)$/.test(u)&&(l=u.match(/:(\d+)$/)[0],u=u.replace(/:\d+$/,"")),f+=s+":",f+="//"+u,l&&(f+=l),f+=i,a&&a.length&&(f+="?"+a),c&&c.length&&(f+="#"+c),f}}}function o(t){return r(t,!0)}function i(t){return r(t)||o(t)}}(t)}).call(this,n(2)(t))},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e){t.exports={fetchData:async(t="",e={postcode:""})=>{try{const n=await fetch(t,{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});return await n.json()}catch(t){return t}}}},function(t,e){t.exports={fetchWeatherData:async(t="",e={lat:"",lon:""})=>{try{const n=await fetch(t,{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});return await n.json()}catch(t){return alert("Sorry, something went wrong!"),t}}}},function(t,e){t.exports={showResult:({locationData:t},e,n,r)=>{const o=t.postalCodes[0].placeName,i=t.postalCodes[0].countryCode,a=e,c=n.app_max_temp,s=n.app_min_temp,u=n.weather.description;document.getElementById("location").innerHTML=`${o}, ${i} is ${a} days away<br> You will stay there for ${r} days`,document.getElementById("weather").innerHTML=`Typical weather for then is : <br> High - ${c}, Low = ${s}<br> ${u}`}}},function(t,e){t.exports={dateDiff:(t,e)=>{const n=e-t;return Math.round(n/864e5)}}},function(t,e,n){},function(t,e,n){"use strict";n.r(e);const{isValidURL:r}=n(0),{fetchData:o}=n(3),{fetchWeatherData:i}=n(4),{showResult:a}=n(5),{dateDiff:c}=n(6),s=async t=>{t.preventDefault();let e=document.getElementById("city").value,n=new Date(document.getElementById("flight-date").value),r=new Date(document.getElementById("flight-end-date").value),s=new Date;console.log("::: Form Submitted :::");const u=await o("http://localhost:8081/check",{city:e}),l=c(s,n),f=c(n,r),d=u.postalCodes[0].lat,p=u.postalCodes[0].lng,h=(await i("http://localhost:8081/check/weather",{lat:d,lon:p})).data[Math.min(l,15)];a({locationData:u},l,h,f)};n(7);window.addEventListener("DOMContentLoaded",()=>{document.getElementById("submitButton").addEventListener("click",s)})}]);