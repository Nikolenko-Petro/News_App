// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"bJun3":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d575b86351038927";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, importScripts */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ("reload" in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                if (asset.type === "js") {
                    if (typeof document !== "undefined") {
                        let script = document.createElement("script");
                        script.src = asset.url;
                        return new Promise((resolve, reject)=>{
                            var _document$head;
                            script.onload = ()=>resolve(script);
                            script.onerror = reject;
                            (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
                        });
                    } else if (typeof importScripts === "function") return new Promise((resolve, reject)=>{
                        try {
                            importScripts(asset.url);
                        } catch (err) {
                            reject(err);
                        }
                    });
                }
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"lFekr":[function(require,module,exports) {
var _savedNews = require("./js/favorit/savedNews");
var _toggleThemeDark = require("./js/header/toggle-theme-dark");
var _burgerMenu = require("./js/header/burger-menu");

},{"./js/favorit/savedNews":"3MO3K","./js/header/toggle-theme-dark":"f9DTm","./js/header/burger-menu":"fz9DP"}],"3MO3K":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _noNewsTab2XPng = require("../../images/no-news/no-news-tab@2x.png");
var _noNewsTab2XPngDefault = parcelHelpers.interopDefault(_noNewsTab2XPng);
const favoretiNewsEl = document.querySelector(".favorite-list");
function createMarkup() {
    if (localStorage.length === 1) return favoretiNewsEl.innerHTML = `<div class="no-news__box"><p class="no-news__text">Nothing to read in this section</p>
  <img class="no-news__image" src="${0, _noNewsTab2XPngDefault.default}" alt="no-news" width="400px"/></div>`;
    if (localStorage.getItem("news-added-to-favorite")) {
        const markup = JSON.parse(localStorage.getItem("news-added-to-favorite")).map((item)=>`
    <li class="news__item-fav" data-id="${item.id}">
    <div class="news__image-box">
    <img class="news__image" src="${item.image}" alt="" />
    <div class="div">
    <button class="btn-width " data-value="4" type="button">Remove from favorite</button>
    <svg class="favorite-btn__icon-remove" width="16" height="14" viewBox="0 0 16 14" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.66659 1C2.82592 1 1.33325 2.47733 1.33325 4.3C1.33325 5.77133 1.91659 9.26333 7.65858 12.7933C7.76144 12.8559 7.87952 12.889 7.99992 12.889C8.12032 12.889 8.2384 12.8559 8.34125 12.7933C14.0833 9.26333 14.6666 5.77133 14.6666 4.3C14.6666 2.47733 13.1739 1 11.3333 1C9.49258 1 7.99992 3 7.99992 3C7.99992 3 6.50725 1 4.66659 1Z" stroke="#4440F7" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    </div>
    <h3 class="news__image-heading">${item.h3}</h3>
    </div>
    <h2 class="news__title">${item.title}</h2>
        <p class="news__text">${item.text}</p>
        <div class="news__lower-box">
        <p class="news__date">${item.date}</p>
        <a class="news__readmore-link" target="_blank"
        rel="noopener noreferrer" href="${item.href}">Read more</a>
        </div>
        </li>
        `).join("");
        favoretiNewsEl.innerHTML = markup;
    }
}
createMarkup();
function deleteItemMarkup(event) {
    if (event.target.nodeName !== "DIV") return;
    if (localStorage.getItem("news-added-to-favorite")) {
        const arrayWithremovedNew = JSON.parse(localStorage.getItem("news-added-to-favorite")).filter((item)=>item.id !== event.target.parentNode.parentNode.dataset.id);
        localStorage.removeItem("news-added-to-favorite");
        localStorage.setItem("news-added-to-favorite", JSON.stringify(arrayWithremovedNew));
    }
    createMarkup();
}
favoretiNewsEl.addEventListener("click", deleteItemMarkup);

},{"../../images/no-news/no-news-tab@2x.png":"3L7yS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3L7yS":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("ikeZg") + "no-news-tab@2x.a87318fd.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"f9DTm":[function(require,module,exports) {
// const toggle = document.getElementById('toggle');
const toggle = document.querySelector(".js-toggle");
const body = document.body;
const toggleT = document.querySelector(".js-toggle-t");
const toggleM = document.querySelector(".js-toggle-m");
if (JSON.parse(window.localStorage.getItem("theme"))) {
    body.classList.add("dark-theme");
    toggle.checked = true;
    toggleT.checked = true;
    toggleM.checked = true;
}
toggleT.addEventListener("input", toggleCallback);
toggle.addEventListener("input", toggleCallback);
toggleM.addEventListener("input", toggleCallback);
function toggleCallback(e) {
    const isChecked = e.target.checked;
    if (isChecked) body.classList.add("dark-theme");
    else body.classList.remove("dark-theme");
    window.localStorage.setItem("theme", isChecked);
}

},{}],"fz9DP":[function(require,module,exports) {
var _bodyScrollLock = require("body-scroll-lock");
const mobileMenu = document.querySelector(".js-menu-container");
const openMenuBtn = document.querySelector(".js-open-menu");
const closeMenuBtn = document.querySelector(".js-close-menu");
// const menuLinks = document.querySelectorAll('.mobile-menu-link');
const toggleMenu = ()=>{
    const isMenuOpen = openMenuBtn.getAttribute("aria-expanded") === "true" || false;
    openMenuBtn.setAttribute("aria-expanded", !isMenuOpen);
    mobileMenu.classList.toggle("is-open");
    const scrollLockMethod = !isMenuOpen ? "disableBodyScroll" : "enableBodyScroll";
    _bodyScrollLock[scrollLockMethod](document.body);
};
openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu); // menuLinks.forEach(menuLink => menuLink.addEventListener('click', toggleMenu));
 // Close the mobile menu on wider screens if the device orientation changes
 // window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
 //   if (!e.matches) return;
 //   mobileMenu.classList.remove('is-open');
 //   openMenuBtn.setAttribute('aria-expanded', false);
 //   bodyScrollLock.enableBodyScroll(document.body);
 // });

},{"body-scroll-lock":"5xKXv"}],"5xKXv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "disableBodyScroll", ()=>disableBodyScroll);
parcelHelpers.export(exports, "clearAllBodyScrollLocks", ()=>clearAllBodyScrollLocks);
parcelHelpers.export(exports, "enableBodyScroll", ()=>enableBodyScroll);
function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
        for(var i = 0, arr2 = Array(arr.length); i < arr.length; i++)arr2[i] = arr[i];
        return arr2;
    } else return Array.from(arr);
}
// Older browsers don't support event options, feature detect it.
// Adopted and modified solution from Bohdan Didukh (2017)
// https://stackoverflow.com/questions/41594997/ios-10-safari-prevent-scrolling-behind-a-fixed-overlay-and-maintain-scroll-posi
var hasPassiveEvents = false;
if (typeof window !== "undefined") {
    var passiveTestOptions = {
        get passive () {
            hasPassiveEvents = true;
            return undefined;
        }
    };
    window.addEventListener("testPassive", null, passiveTestOptions);
    window.removeEventListener("testPassive", null, passiveTestOptions);
}
var isIosDevice = typeof window !== "undefined" && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1);
var locks = [];
var documentListenerAdded = false;
var initialClientY = -1;
var previousBodyOverflowSetting = void 0;
var previousBodyPosition = void 0;
var previousBodyPaddingRight = void 0;
// returns true if `el` should be allowed to receive touchmove events.
var allowTouchMove = function allowTouchMove(el) {
    return locks.some(function(lock) {
        if (lock.options.allowTouchMove && lock.options.allowTouchMove(el)) return true;
        return false;
    });
};
var preventDefault = function preventDefault(rawEvent) {
    var e = rawEvent || window.event;
    // For the case whereby consumers adds a touchmove event listener to document.
    // Recall that we do document.addEventListener('touchmove', preventDefault, { passive: false })
    // in disableBodyScroll - so if we provide this opportunity to allowTouchMove, then
    // the touchmove event on document will break.
    if (allowTouchMove(e.target)) return true;
    // Do not prevent if the event has more than one touch (usually meaning this is a multi touch gesture like pinch to zoom).
    if (e.touches.length > 1) return true;
    if (e.preventDefault) e.preventDefault();
    return false;
};
var setOverflowHidden = function setOverflowHidden(options) {
    // If previousBodyPaddingRight is already set, don't set it again.
    if (previousBodyPaddingRight === undefined) {
        var _reserveScrollBarGap = !!options && options.reserveScrollBarGap === true;
        var scrollBarGap = window.innerWidth - document.documentElement.clientWidth;
        if (_reserveScrollBarGap && scrollBarGap > 0) {
            var computedBodyPaddingRight = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"), 10);
            previousBodyPaddingRight = document.body.style.paddingRight;
            document.body.style.paddingRight = computedBodyPaddingRight + scrollBarGap + "px";
        }
    }
    // If previousBodyOverflowSetting is already set, don't set it again.
    if (previousBodyOverflowSetting === undefined) {
        previousBodyOverflowSetting = document.body.style.overflow;
        document.body.style.overflow = "hidden";
    }
};
var restoreOverflowSetting = function restoreOverflowSetting() {
    if (previousBodyPaddingRight !== undefined) {
        document.body.style.paddingRight = previousBodyPaddingRight;
        // Restore previousBodyPaddingRight to undefined so setOverflowHidden knows it
        // can be set again.
        previousBodyPaddingRight = undefined;
    }
    if (previousBodyOverflowSetting !== undefined) {
        document.body.style.overflow = previousBodyOverflowSetting;
        // Restore previousBodyOverflowSetting to undefined
        // so setOverflowHidden knows it can be set again.
        previousBodyOverflowSetting = undefined;
    }
};
var setPositionFixed = function setPositionFixed() {
    return window.requestAnimationFrame(function() {
        // If previousBodyPosition is already set, don't set it again.
        if (previousBodyPosition === undefined) {
            previousBodyPosition = {
                position: document.body.style.position,
                top: document.body.style.top,
                left: document.body.style.left
            };
            // Update the dom inside an animation frame 
            var _window = window, scrollY = _window.scrollY, scrollX = _window.scrollX, innerHeight = _window.innerHeight;
            document.body.style.position = "fixed";
            document.body.style.top = -scrollY;
            document.body.style.left = -scrollX;
            setTimeout(function() {
                return window.requestAnimationFrame(function() {
                    // Attempt to check if the bottom bar appeared due to the position change
                    var bottomBarHeight = innerHeight - window.innerHeight;
                    if (bottomBarHeight && scrollY >= innerHeight) // Move the content further up so that the bottom bar doesn't hide it
                    document.body.style.top = -(scrollY + bottomBarHeight);
                });
            }, 300);
        }
    });
};
var restorePositionSetting = function restorePositionSetting() {
    if (previousBodyPosition !== undefined) {
        // Convert the position from "px" to Int
        var y = -parseInt(document.body.style.top, 10);
        var x = -parseInt(document.body.style.left, 10);
        // Restore styles
        document.body.style.position = previousBodyPosition.position;
        document.body.style.top = previousBodyPosition.top;
        document.body.style.left = previousBodyPosition.left;
        // Restore scroll
        window.scrollTo(x, y);
        previousBodyPosition = undefined;
    }
};
// https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#Problems_and_solutions
var isTargetElementTotallyScrolled = function isTargetElementTotallyScrolled(targetElement) {
    return targetElement ? targetElement.scrollHeight - targetElement.scrollTop <= targetElement.clientHeight : false;
};
var handleScroll = function handleScroll(event, targetElement) {
    var clientY = event.targetTouches[0].clientY - initialClientY;
    if (allowTouchMove(event.target)) return false;
    if (targetElement && targetElement.scrollTop === 0 && clientY > 0) // element is at the top of its scroll.
    return preventDefault(event);
    if (isTargetElementTotallyScrolled(targetElement) && clientY < 0) // element is at the bottom of its scroll.
    return preventDefault(event);
    event.stopPropagation();
    return true;
};
var disableBodyScroll = function disableBodyScroll(targetElement, options) {
    // targetElement must be provided
    if (!targetElement) {
        // eslint-disable-next-line no-console
        console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");
        return;
    }
    // disableBodyScroll must not have been called on this targetElement before
    if (locks.some(function(lock) {
        return lock.targetElement === targetElement;
    })) return;
    var lock1 = {
        targetElement: targetElement,
        options: options || {}
    };
    locks = [].concat(_toConsumableArray(locks), [
        lock1
    ]);
    if (isIosDevice) setPositionFixed();
    else setOverflowHidden(options);
    if (isIosDevice) {
        targetElement.ontouchstart = function(event) {
            if (event.targetTouches.length === 1) // detect single touch.
            initialClientY = event.targetTouches[0].clientY;
        };
        targetElement.ontouchmove = function(event) {
            if (event.targetTouches.length === 1) // detect single touch.
            handleScroll(event, targetElement);
        };
        if (!documentListenerAdded) {
            document.addEventListener("touchmove", preventDefault, hasPassiveEvents ? {
                passive: false
            } : undefined);
            documentListenerAdded = true;
        }
    }
};
var clearAllBodyScrollLocks = function clearAllBodyScrollLocks() {
    if (isIosDevice) {
        // Clear all locks ontouchstart/ontouchmove handlers, and the references.
        locks.forEach(function(lock) {
            lock.targetElement.ontouchstart = null;
            lock.targetElement.ontouchmove = null;
        });
        if (documentListenerAdded) {
            document.removeEventListener("touchmove", preventDefault, hasPassiveEvents ? {
                passive: false
            } : undefined);
            documentListenerAdded = false;
        }
        // Reset initial clientY.
        initialClientY = -1;
    }
    if (isIosDevice) restorePositionSetting();
    else restoreOverflowSetting();
    locks = [];
};
var enableBodyScroll = function enableBodyScroll(targetElement) {
    if (!targetElement) {
        // eslint-disable-next-line no-console
        console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");
        return;
    }
    locks = locks.filter(function(lock) {
        return lock.targetElement !== targetElement;
    });
    if (isIosDevice) {
        targetElement.ontouchstart = null;
        targetElement.ontouchmove = null;
        if (documentListenerAdded && locks.length === 0) {
            document.removeEventListener("touchmove", preventDefault, hasPassiveEvents ? {
                passive: false
            } : undefined);
            documentListenerAdded = false;
        }
    }
    if (isIosDevice) restorePositionSetting();
    else restoreOverflowSetting();
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["bJun3","lFekr"], "lFekr", "parcelRequired7c6")

//# sourceMappingURL=favorite.51038927.js.map
