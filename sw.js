var __wpo = {"assets":{"main":["/react-redux-saga-boilerplate/media/og-image-v1.png","/react-redux-saga-boilerplate/media/favicon.ico","/react-redux-saga-boilerplate/media/apple-touch-icon.png","/react-redux-saga-boilerplate/media/favicon-32x32.png","/react-redux-saga-boilerplate/media/favicon-16x16.png","/react-redux-saga-boilerplate/manifest.json","/react-redux-saga-boilerplate/media/icon-96x96.png","/react-redux-saga-boilerplate/media/icon-144x144.png","/react-redux-saga-boilerplate/media/icon-192x192.png","/react-redux-saga-boilerplate/media/icon-512x512.png","/react-redux-saga-boilerplate/media/safari-pinned-tab.svg","/react-redux-saga-boilerplate/fonts/icon-font-v2.ttf","/react-redux-saga-boilerplate/fonts/icon-font-v2.woff","/react-redux-saga-boilerplate/fonts/icon-font-v2.svg","/react-redux-saga-boilerplate/media/icon.svg","/react-redux-saga-boilerplate/media/icon.png","/react-redux-saga-boilerplate/scripts/app.e1c6df7.js","/react-redux-saga-boilerplate/scripts/modernizr.e1c6df7.js","/react-redux-saga-boilerplate/styles/app.e1c6df7.css","/react-redux-saga-boilerplate/404.html","/react-redux-saga-boilerplate/"],"additional":[],"optional":[]},"externals":[],"hashesMap":{"fc79733ed1d0f687611627574f95a3841c785226":"/react-redux-saga-boilerplate/media/og-image-v1.png","f916312ba28f6fe1714b5ada5d1a7683e385150a":"/react-redux-saga-boilerplate/media/favicon.ico","e86c48974315c33e375a6d8efcf76a64bad6bd64":"/react-redux-saga-boilerplate/media/apple-touch-icon.png","445bfa7070f6282d41d5ed7d99bd5b148ed7cd9e":"/react-redux-saga-boilerplate/media/favicon-32x32.png","cdbb68bddf0827ed337e0d971ea6f1aa00f47bf8":"/react-redux-saga-boilerplate/media/favicon-16x16.png","5de8125b8c0affaf8c856527d876fa9b55e6559f":"/react-redux-saga-boilerplate/manifest.json","b14c7682580c8037933de5d9509c629b3b8c75cc":"/react-redux-saga-boilerplate/media/icon-96x96.png","5ef383e0895e65420780c04a339e0830c520c100":"/react-redux-saga-boilerplate/media/icon-144x144.png","38235be062a2c93d6b9de6ee8cbb144adcbf7358":"/react-redux-saga-boilerplate/media/icon-192x192.png","00185da31f4af09b9c65fd85fab275643c536bdc":"/react-redux-saga-boilerplate/media/icon-512x512.png","3fca754012464b46f61223bbc315907bb2d1b894":"/react-redux-saga-boilerplate/media/safari-pinned-tab.svg","97ed3947c7b0c2e296b2234ef99619fc86695b6c":"/react-redux-saga-boilerplate/fonts/icon-font-v2.ttf","67c46be12ccd6c4f6a4b42202691405a9e214de3":"/react-redux-saga-boilerplate/fonts/icon-font-v2.woff","6a4370553b877cab810fca10d6dda97f4d00d4d1":"/react-redux-saga-boilerplate/fonts/icon-font-v2.svg","42687f2fc30d0926c96ce5237cfc37cfca3d53d2":"/react-redux-saga-boilerplate/media/icon.svg","9bdf837fe992941adffdfcdc6ee034a32dd4bbbe":"/react-redux-saga-boilerplate/media/icon.png","ffdf47e9e645842f3e3ff819088f904f04df76e5":"/react-redux-saga-boilerplate/scripts/app.e1c6df7.js","56b21bc0c50a4e373b5812112855892cd2bd88bb":"/react-redux-saga-boilerplate/scripts/modernizr.e1c6df7.js","56535bf3522a3232377946c79c5e5b2665feaf10":"/react-redux-saga-boilerplate/styles/app.e1c6df7.css","33216757027954fe508cdfd2c8dc8a315c0f3eef":"/react-redux-saga-boilerplate/404.html","867c84a7f4a0d0016e42928a8e22bcb0f9305f62":"/react-redux-saga-boilerplate/"},"strategy":"changed","responseStrategy":"cache-first","version":"11/5/2017, 7:33:49 PM","name":"webpack-offline","pluginVersion":"4.8.4","relativePaths":false};

!function(e){function __webpack_require__(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,__webpack_require__),r.l=!0,r.exports}var n={};__webpack_require__.m=e,__webpack_require__.c=n,__webpack_require__.d=function(e,n,t){__webpack_require__.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:t})},__webpack_require__.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return __webpack_require__.d(n,"a",n),n},__webpack_require__.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},__webpack_require__.p="/react-redux-saga-boilerplate/",__webpack_require__(__webpack_require__.s=0)}([function(e,n,t){"use strict";function cachesMatch(e,n){return caches.match(e,{cacheName:n}).then(function(t){return isNotRedirectedResponse()?t:fixRedirectedResponse(t).then(function(t){return caches.open(n).then(function(n){return n.put(e,t)}).then(function(){return t})})}).catch(function(){})}function applyCacheBust(e,n){return e+(-1!==e.indexOf("?")?"&":"?")+"__uncache="+encodeURIComponent(n)}function isNavigateRequest(e){return"navigate"===e.mode||e.headers.get("Upgrade-Insecure-Requests")||-1!==(e.headers.get("Accept")||"").indexOf("text/html")}function isNotRedirectedResponse(e){return!e||!e.redirected||!e.ok||"opaqueredirect"===e.type}function fixRedirectedResponse(e){return isNotRedirectedResponse(e)?Promise.resolve(e):("body"in e?Promise.resolve(e.body):e.blob()).then(function(n){return new Response(n,{headers:e.headers,status:e.status})})}function copyObject(e){return Object.keys(e).reduce(function(n,t){return n[t]=e[t],n},{})}function logGroup(e,n){console.groupCollapsed("[SW]:",e),n.forEach(function(e){console.log("Asset:",e)}),console.groupEnd()}if(function(){var e=ExtendableEvent.prototype.waitUntil,n=FetchEvent.prototype.respondWith,t=new WeakMap;ExtendableEvent.prototype.waitUntil=function(n){var r=this,o=t.get(r);return o?void o.push(Promise.resolve(n)):(o=[Promise.resolve(n)],t.set(r,o),e.call(r,Promise.resolve().then(function processPromises(){var e=o.length;return Promise.all(o.map(function(e){return e.catch(function(){})})).then(function(){return o.length!=e?processPromises():(t.delete(r),Promise.all(o))})})))},FetchEvent.prototype.respondWith=function(e){return this.waitUntil(e),n.call(this,e)}}(),void 0===r)var r=!1;!function(e,n){function cacheAdditional(){if(!c.additional.length)return Promise.resolve();r&&console.log("[SW]:","Caching additional");var e=void 0;return e="changed"===a?cacheChanged("additional"):cacheAssets("additional"),e.catch(function(e){console.error("[SW]:","Cache section `additional` failed to load")})}function cacheAssets(n){var t=c[n];return caches.open(d).then(function(n){return addAllNormalized(n,t,{bust:e.version,request:e.prefetchRequest})}).then(function(){logGroup("Cached assets: "+n,t)}).catch(function(e){throw console.error(e),e})}function cacheChanged(n){return getLastCache().then(function(t){if(!t)return cacheAssets(n);var r=t[0],o=t[1],a=t[2],i=a.hashmap,s=a.version;if(!a.hashmap||s===e.version)return cacheAssets(n);var l=Object.keys(i).map(function(e){return i[e]}),f=o.map(function(e){var n=new URL(e.url);return n.search="",n.hash="",n.toString()}),h=c[n],p=[],v=h.filter(function(e){return-1===f.indexOf(e)||-1===l.indexOf(e)});Object.keys(u).forEach(function(e){var n=u[e];if(-1!==h.indexOf(n)&&-1===v.indexOf(n)&&-1===p.indexOf(n)){var t=i[e];t&&-1!==f.indexOf(t)?p.push([t,n]):v.push(n)}}),logGroup("Changed assets: "+n,v),logGroup("Moved assets: "+n,p);var g=Promise.all(p.map(function(e){return r.match(e[0]).then(function(n){return[e[1],n]})}));return caches.open(d).then(function(n){var t=g.then(function(e){return Promise.all(e.map(function(e){return n.put(e[0],e[1])}))});return Promise.all([t,addAllNormalized(n,v,{bust:e.version,request:e.prefetchRequest})])})})}function deleteObsolete(){return caches.keys().then(function(e){var n=e.map(function(e){if(0===e.indexOf(f)&&0!==e.indexOf(d))return console.log("[SW]:","Delete cache:",e),caches.delete(e)});return Promise.all(n)})}function getLastCache(){return caches.keys().then(function(e){for(var n=e.length,t=void 0;n--&&(t=e[n],0!==t.indexOf(f)););if(t){var r=void 0;return caches.open(t).then(function(e){return r=e,e.match(new URL(p,location).toString())}).then(function(e){if(e)return Promise.all([r,r.keys(),e.json()])})}})}function storeCacheData(){return caches.open(d).then(function(n){var t=new Response(JSON.stringify({version:e.version,hashmap:u}));return n.put(new URL(p,location).toString(),t)})}function cacheFirstResponse(e,n,t){return cachesMatch(t,d).then(function(o){return o?(r&&console.log("[SW]:","URL ["+t+"]("+n+") from cache"),o):fetch(e.request).then(function(o){return o.ok?(r&&console.log("[SW]:","URL ["+n+"] from network"),t===n&&function(){var t=o.clone(),r=caches.open(d).then(function(e){return e.put(n,t)}).then(function(){console.log("[SW]:","Cache asset: "+n)});e.waitUntil(r)}(),o):(r&&console.log("[SW]:","URL ["+n+"] wrong response: ["+o.status+"] "+o.type),o)})})}function networkFirstResponse(e,n,t){return fetch(e.request).then(function(e){if(e.ok)return r&&console.log("[SW]:","URL ["+n+"] from network"),e;throw new Error("Response is not ok")}).catch(function(){return r&&console.log("[SW]:","URL ["+n+"] from cache if possible"),cachesMatch(t,d)})}function handleNavigateFallback(e){return e.catch(function(){}).then(function(e){var n=e&&e.ok,t=e&&"opaqueredirect"===e.type;return n||t&&!m?e:(r&&console.log("[SW]:","Loading navigation fallback ["+g+"] from cache"),cachesMatch(g,d))})}function addAllNormalized(e,n,t){var r=!1!==t.allowLoaders,o=t&&t.bust,a=t.request||{credentials:"omit",mode:"cors"};return Promise.all(n.map(function(e){return o&&(e=applyCacheBust(e,o)),fetch(e,a).then(fixRedirectedResponse)})).then(function(o){if(o.some(function(e){return!e.ok}))return Promise.reject(new Error("Wrong response status"));var a=[],i=o.map(function(t,o){return r&&a.push(extractAssetsWithLoaders(n[o],t)),e.put(n[o],t)});return a.length?function(){var r=copyObject(t);r.allowLoaders=!1;var o=i;i=Promise.all(a).then(function(t){var a=[].concat.apply([],t);return n.length&&(o=o.concat(addAllNormalized(e,a,r))),Promise.all(o)})}():i=Promise.all(i),i})}function extractAssetsWithLoaders(e,n){var r=Object.keys(s).map(function(r){if(-1!==s[r].indexOf(e)&&t[r])return t[r](n.clone())}).filter(function(e){return!!e});return Promise.all(r).then(function(e){return[].concat.apply([],e)})}function matchCacheMap(e){var n=e.url,t=new URL(n),r=void 0;r="navigate"===e.mode?"navigate":t.origin===location.origin?"same-origin":"cross-origin";for(var a=0;a<o.length;a++){var i=o[a];if(i&&(!i.requestTypes||-1!==i.requestTypes.indexOf(r))){var c=void 0;if((c="function"==typeof i.match?i.match(t,e):n.replace(i.match,i.to))&&c!==n)return c}}}var t=n.loaders,o=n.cacheMaps,a=e.strategy,i=e.responseStrategy,c=e.assets,s=e.loaders||{},u=e.hashesMap,l=e.externals,f=e.name,h=e.version,d=f+":"+h,p="__offline_webpack__data";!function(){Object.keys(c).forEach(function(e){c[e]=c[e].map(function(e){var n=new URL(e,location);return n.hash="",-1===l.indexOf(e)&&(n.search=""),n.toString()})}),Object.keys(s).forEach(function(e){s[e]=s[e].map(function(e){var n=new URL(e,location);return n.hash="",-1===l.indexOf(e)&&(n.search=""),n.toString()})}),u=Object.keys(u).reduce(function(e,n){var t=new URL(u[n],location);return t.search="",t.hash="",e[n]=t.toString(),e},{}),l=l.map(function(e){var n=new URL(e,location);return n.hash="",n.toString()})}();var v=[].concat(c.main,c.additional,c.optional),g=e.navigateFallbackURL,m=e.navigateFallbackForRedirects;self.addEventListener("install",function(e){console.log("[SW]:","Install event");var n=void 0;n="changed"===a?cacheChanged("main"):cacheAssets("main"),e.waitUntil(n)}),self.addEventListener("activate",function(e){console.log("[SW]:","Activate event");var n=cacheAdditional();n=n.then(storeCacheData),n=n.then(deleteObsolete),n=n.then(function(){if(self.clients&&self.clients.claim)return self.clients.claim()}),e.waitUntil(n)}),self.addEventListener("fetch",function(e){var n=new URL(e.request.url);n.hash="";var t=n.toString();-1===l.indexOf(t)&&(n.search="",t=n.toString());var r="GET"===e.request.method,o=-1!==v.indexOf(t),a=t;if(!o){var c=matchCacheMap(e.request);c&&(a=c,o=!0)}if(!o&&r&&g&&isNavigateRequest(e.request))return void e.respondWith(handleNavigateFallback(fetch(e.request)));if(!o||!r)return void(n.origin!==location.origin&&-1!==navigator.userAgent.indexOf("Firefox/44.")&&e.respondWith(fetch(e.request)));var s=void 0;s="network-first"===i?networkFirstResponse(e,t,a):cacheFirstResponse(e,t,a),g&&isNavigateRequest(e.request)&&(s=handleNavigateFallback(s)),e.respondWith(s)}),self.addEventListener("message",function(e){var n=e.data;if(n)switch(n.action){case"skipWaiting":self.skipWaiting&&self.skipWaiting()}})}(__wpo,{loaders:{},cacheMaps:[{match:function(){return new URL("/",location)},to:null,requestTypes:["navigate"]}]}),e.exports=t(1)},function(e,n){}]);