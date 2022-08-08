/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/hero5.jpg */ "./src/images/hero5.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/hero1.jpg */ "./src/images/hero1.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/hero4.jpg */ "./src/images/hero4.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Allura&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n:root {\n    --logo-font: \"Allura\", cursive;\n    --fancy-font: \"Dancing Script\", cursive;\n    --serif-font: \"Playfair Display\", serif;\n    --nav-height: 60px;\n    --text-color: black;\n    --dark-color: rgb(30, 30, 30);\n    --header-light-color: rgba(255, 255, 255);\n}\n\nh1 {\n    font-size: 4rem;\n    font-family: var(--fancy-font);\n    color: var(--header-light-color);\n    text-shadow: 0 0 1rem var(--dark-color);\n    text-align: center;\n    font-weight: 400;\n}\n\nh2 {\n    font-size: 1.5rem;\n    font-weight: 500;\n}\n\nh3 {\n    font-family: var(--fancy-font);\n    font-size: 1.3rem;\n    font-weight: 400;\n    letter-spacing: 2px;\n    text-shadow: 0 0 1rem var(--dark-color);\n    text-align: center;\n    color: var(--header-light-color);\n}\n\n#content {\n    display: grid;\n    min-height: 100vh;\n    grid-template-rows: auto 1fr;\n}\n\n.hero {\n    display: grid;\n    gap: 0.5rem;\n    justify-content: center;\n    align-content: center;\n    background-size: cover;\n    background-position: center top;\n    padding: 2rem;\n}\n\n/* Navbar section */\n\nnav {\n    height: var(--nav-height);\n    overflow: hidden;\n    padding: 0 15px;\n    display: grid;\n    align-items: center;\n    grid-template-columns: 1fr auto auto;\n}\n\n.logo {\n    font-family: var(--logo-font);\n    font-size: 2rem;\n}\n\n.buttons-container {\n    width: 2.5rem;\n    height: 2.5rem;\n    position: relative;\n}\n\n.open-button,\n.close-button {\n    position: absolute;\n    cursor: pointer;\n    height: 2.5rem;\n    transition: all 0.3s;\n}\n\n.visible {\n    visibility: visible;\n    opacity: 1;\n}\n\n.hidden {\n    visibility: hidden;\n    opacity: 0;\n}\n\n.nav-menu-container {\n    display: grid;\n    transition: opacity 0.3s ease-out;\n    visibility: hidden;\n    opacity: 0;\n}\n\n.nav-fullscreen {\n    visibility: visible;\n    opacity: 1;\n    justify-content: center;\n    align-content: end;\n    grid-template-columns: min-content;\n    background-color: #ffffff;\n    padding: calc(var(--nav-height)*2) 0;\n    position: absolute;\n    top: var(--nav-height);\n    right: 0;\n    bottom: 0;\n    left: 0;\n}\n\n.nav-fullscreen>* {\n    display: grid !important;\n}\n\n.nav-menu {\n    list-style: none;\n    display: none;\n    gap: 30px;\n    font-size: 1.2rem;\n    font-family: var(--serif-font);\n    text-align: center;\n    letter-spacing: 0.5px;\n}\n\n.nav-menu>li {\n    opacity: 0;\n}\n\n.nav-menu-open>li {\n    transform: translateY(-20px);\n    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;\n    opacity: 1;\n}\n\n.nav-menu-open>li:nth-child(2) {\n    transition-delay: 0.2s;\n}\n\n.nav-menu-open>li:nth-child(3) {\n    transition-delay: 0.4s;\n}\n\n.nav-menu-open>li:nth-child(4) {\n    transition-delay: 0.5s;\n}\n\n.tab {\n    cursor: pointer;\n    padding-bottom: 2px;\n    border-bottom: 1px solid transparent;\n}\n\n.active-tab,\n.tab:hover {\n    transition: border-bottom 0.3s;\n    border-bottom: 1px solid var(--text-color);\n}\n\n.tab:hover {\n    transition-delay: 0s !important;\n}\n\n/* Main section */\nmain {\n    display: grid;\n}\n\n/* Home page */\n\n.home-page {\n    display: grid;\n    gap: 2rem;\n}\n\n.home-hero {\n    height: calc(100vh - var(--nav-height));\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n/* Menu page */\n\n.menu-page {\n    display: grid;\n    gap: 2rem;\n}\n\n.menu-hero {\n    height: 50vh;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-position: center bottom;\n}\n\n.menu-list {\n    display: grid;\n    gap: 2rem;\n    justify-content: center;\n    margin: 0 15px;\n    padding: 10px 0;\n    font-family: var(--serif-font);\n}\n\n.menu-list h2 {\n    margin-bottom: 1rem;\n    padding-bottom: 5px;\n    color: var(--dark-color);\n    border-bottom: 1px solid var(--dark-color);\n}\n\n.menu-category {\n    display: grid;\n    gap: 0.5rem;\n}\n\n.menu-item-container {\n    display: grid;\n}\n\n.menu-item-container div:first-child {\n    display: grid;\n    grid-template-columns: 1fr auto;\n}\n\n.menu-item-container p {\n    color: var(--dark-color);\n    font-style: italic;\n    font-size: 0.9rem;\n    letter-spacing: 0.5px;\n    padding-right: 6rem;\n}\n\n/* Contact page */\n\n.contact-page {\n    display: grid;\n    gap: 2rem;\n}\n\n.contact-hero {\n    height: 50vh;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n    background-size: cover;\n    display: grid;\n    justify-content: center;\n    align-content: center;\n    padding: 2rem;\n}\n\n/* Desktops and tablets */\n\n@media only screen and (min-width: 768px) {\n    .open-button {\n        display: none;\n    }\n\n    .nav-menu-container {\n        visibility: visible;\n        opacity: 1;\n    }\n\n    .nav-menu {\n        display: flex;\n        font-size: 1rem;\n    }\n\n    .nav-menu>li {\n        opacity: 1;\n    }\n}\n\n/* Bigger screens */\n@media only screen and (min-width: 1440px) {\n    h1 {\n        font-size: 8rem;\n    }\n\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Allura&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&display=swap');\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n:root {\n    --logo-font: \"Allura\", cursive;\n    --fancy-font: \"Dancing Script\", cursive;\n    --serif-font: \"Playfair Display\", serif;\n    --nav-height: 60px;\n    --text-color: black;\n    --dark-color: rgb(30, 30, 30);\n    --header-light-color: rgba(255, 255, 255);\n}\n\nh1 {\n    font-size: 4rem;\n    font-family: var(--fancy-font);\n    color: var(--header-light-color);\n    text-shadow: 0 0 1rem var(--dark-color);\n    text-align: center;\n    font-weight: 400;\n}\n\nh2 {\n    font-size: 1.5rem;\n    font-weight: 500;\n}\n\nh3 {\n    font-family: var(--fancy-font);\n    font-size: 1.3rem;\n    font-weight: 400;\n    letter-spacing: 2px;\n    text-shadow: 0 0 1rem var(--dark-color);\n    text-align: center;\n    color: var(--header-light-color);\n}\n\n#content {\n    display: grid;\n    min-height: 100vh;\n    grid-template-rows: auto 1fr;\n}\n\n.hero {\n    display: grid;\n    gap: 0.5rem;\n    justify-content: center;\n    align-content: center;\n    background-size: cover;\n    background-position: center top;\n    padding: 2rem;\n}\n\n/* Navbar section */\n\nnav {\n    height: var(--nav-height);\n    overflow: hidden;\n    padding: 0 15px;\n    display: grid;\n    align-items: center;\n    grid-template-columns: 1fr auto auto;\n}\n\n.logo {\n    font-family: var(--logo-font);\n    font-size: 2rem;\n}\n\n.buttons-container {\n    width: 2.5rem;\n    height: 2.5rem;\n    position: relative;\n}\n\n.open-button,\n.close-button {\n    position: absolute;\n    cursor: pointer;\n    height: 2.5rem;\n    transition: all 0.3s;\n}\n\n.visible {\n    visibility: visible;\n    opacity: 1;\n}\n\n.hidden {\n    visibility: hidden;\n    opacity: 0;\n}\n\n.nav-menu-container {\n    display: grid;\n    transition: opacity 0.3s ease-out;\n    visibility: hidden;\n    opacity: 0;\n}\n\n.nav-fullscreen {\n    visibility: visible;\n    opacity: 1;\n    justify-content: center;\n    align-content: end;\n    grid-template-columns: min-content;\n    background-color: #ffffff;\n    padding: calc(var(--nav-height)*2) 0;\n    position: absolute;\n    top: var(--nav-height);\n    right: 0;\n    bottom: 0;\n    left: 0;\n}\n\n.nav-fullscreen>* {\n    display: grid !important;\n}\n\n.nav-menu {\n    list-style: none;\n    display: none;\n    gap: 30px;\n    font-size: 1.2rem;\n    font-family: var(--serif-font);\n    text-align: center;\n    letter-spacing: 0.5px;\n}\n\n.nav-menu>li {\n    opacity: 0;\n}\n\n.nav-menu-open>li {\n    transform: translateY(-20px);\n    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;\n    opacity: 1;\n}\n\n.nav-menu-open>li:nth-child(2) {\n    transition-delay: 0.2s;\n}\n\n.nav-menu-open>li:nth-child(3) {\n    transition-delay: 0.4s;\n}\n\n.nav-menu-open>li:nth-child(4) {\n    transition-delay: 0.5s;\n}\n\n.tab {\n    cursor: pointer;\n    padding-bottom: 2px;\n    border-bottom: 1px solid transparent;\n}\n\n.active-tab,\n.tab:hover {\n    transition: border-bottom 0.3s;\n    border-bottom: 1px solid var(--text-color);\n}\n\n.tab:hover {\n    transition-delay: 0s !important;\n}\n\n/* Main section */\nmain {\n    display: grid;\n}\n\n/* Home page */\n\n.home-page {\n    display: grid;\n    gap: 2rem;\n}\n\n.home-hero {\n    height: calc(100vh - var(--nav-height));\n    background-image: url('./images/hero5.jpg');\n}\n\n/* Menu page */\n\n.menu-page {\n    display: grid;\n    gap: 2rem;\n}\n\n.menu-hero {\n    height: 50vh;\n    background-image: url(\"./images/hero1.jpg\");\n    background-position: center bottom;\n}\n\n.menu-list {\n    display: grid;\n    gap: 2rem;\n    justify-content: center;\n    margin: 0 15px;\n    padding: 10px 0;\n    font-family: var(--serif-font);\n}\n\n.menu-list h2 {\n    margin-bottom: 1rem;\n    padding-bottom: 5px;\n    color: var(--dark-color);\n    border-bottom: 1px solid var(--dark-color);\n}\n\n.menu-category {\n    display: grid;\n    gap: 0.5rem;\n}\n\n.menu-item-container {\n    display: grid;\n}\n\n.menu-item-container div:first-child {\n    display: grid;\n    grid-template-columns: 1fr auto;\n}\n\n.menu-item-container p {\n    color: var(--dark-color);\n    font-style: italic;\n    font-size: 0.9rem;\n    letter-spacing: 0.5px;\n    padding-right: 6rem;\n}\n\n/* Contact page */\n\n.contact-page {\n    display: grid;\n    gap: 2rem;\n}\n\n.contact-hero {\n    height: 50vh;\n    background-image: url(\"./images/hero4.jpg\");\n    background-size: cover;\n    display: grid;\n    justify-content: center;\n    align-content: center;\n    padding: 2rem;\n}\n\n/* Desktops and tablets */\n\n@media only screen and (min-width: 768px) {\n    .open-button {\n        display: none;\n    }\n\n    .nav-menu-container {\n        visibility: visible;\n        opacity: 1;\n    }\n\n    .nav-menu {\n        display: flex;\n        font-size: 1rem;\n    }\n\n    .nav-menu>li {\n        opacity: 1;\n    }\n}\n\n/* Bigger screens */\n@media only screen and (min-width: 1440px) {\n    h1 {\n        font-size: 8rem;\n    }\n\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/changeMainContent.js":
/*!*********************************************!*\
  !*** ./src/components/changeMainContent.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ changeMainContent)
/* harmony export */ });
/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home */ "./src/components/pages/home.js");
/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/menu */ "./src/components/pages/menu.js");
/* harmony import */ var _pages_about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/about */ "./src/components/pages/about.js");
/* harmony import */ var _pages_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/contact */ "./src/components/pages/contact.js");





function changeMainContent(page) {
    switch (page) {
        case "home":
            page = _pages_home__WEBPACK_IMPORTED_MODULE_0__["default"]
            break
        case "menu":
            page = _pages_menu__WEBPACK_IMPORTED_MODULE_1__["default"]
            break
        case "about":
            page = _pages_about__WEBPACK_IMPORTED_MODULE_2__["default"]
            break
        case "contact":
            page = _pages_contact__WEBPACK_IMPORTED_MODULE_3__["default"]
            break
    }
    const main = document.querySelector("main")
    main.innerHTML = ""
    main.appendChild(page())
}

/***/ }),

/***/ "./src/components/data/companyData.js":
/*!********************************************!*\
  !*** ./src/components/data/companyData.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    name: "La Fourchette",
    street: "255 Pacman St.",
    zip: "89001",
    city: "Alamo, NV",
    phone: "+1 (702) 000 0000",
    email: "contact@laforuchette.com",
});

/***/ }),

/***/ "./src/components/data/dishes.js":
/*!***************************************!*\
  !*** ./src/components/data/dishes.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    starters: [
        {
            category: "Starters",
        },
        {
            name: "Snails",
            descritpion: "served with garlic butter and baguette",
            price: "10.00",
        },
        {
            name: "Fois gras",
            descritpion: "served with brioche, chokeberry and pickled pumpkin",
            price: "12.00",
        },
        {
            name: "Quiche",
            descritpion: "tarte with goat cheese, pear and wallnuts",
            price: "8.00",
        },
    ],
    mainCourses: [
        {
            category: "Main courses",
        },
        {
            name: "Ratatouille",
            descritpion: "vegetables with tomato sauce",
            price: "8.50",
        },
        {
            name: "Onion soup",
            descritpion: "traditional french onion soup served with baguette",
            price: "11.00",
        },
        {
            name: "Filet Mignon",
            descritpion: "served with potatos, pepper sauce and vegetables",
            price: "28.00",
        },
    ],
    desserts: [
        {
            category: "Desserts",
        },
        {
            name: "Crème brûlée",
            descritpion: "vanilla cream with carmelised sugar",
            price: "5.00",
        },
        {
            name: "Crepes",
            descritpion: "with raspberry jam",
            price: "6.00",
        },
    ],
    softDrinks: [
        {
            category: "Soft drinks",
        },
        {
            name: "Hydrogen monoxide",
            descritpion: "with carbon dioxide / without carbon dioxide",
            price: "2.00",
        },
        {
            name: "Perrier",
            descritpion: "a sparkling water but way more expensive",
            price: "5.00",
        },
        {
            name: "Coffee",
            descritpion: "ristretto / espresso / doppio / tripplo",
            price: "3.00",
        },

    ],
    wine: [
        {
            category: "Wines",
        },
        {
            name: "Sémillon (1 glass)",
            descritpion: "Château Graville-Lacoste / Bordeaux / 2019",
            price: "4.40",
        },
        {
            name: "Gewürztraminer (1 glass)",
            descritpion: "Domaines Schlumberger / Alsace / 2018",
            price: "4.60",
        },
        {
            name: "Pinot noir (1 glass)",
            descritpion: "Jean-Claude Boisset/ Burgundy / 2017",
            price: "5.80",
        },
    ],
});

/***/ }),

/***/ "./src/components/loadApp.js":
/*!***********************************!*\
  !*** ./src/components/loadApp.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadApp)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ "./src/style.css");
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav */ "./src/components/nav.js");
/* harmony import */ var _switchTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./switchTab */ "./src/components/switchTab.js");




function loadApp() {
    const content = document.querySelector("#content")
    const main = document.createElement("main")
    content.appendChild((0,_nav__WEBPACK_IMPORTED_MODULE_1__["default"])())
    content.appendChild(main)
    ;(0,_switchTab__WEBPACK_IMPORTED_MODULE_2__["default"])("contact")
}

/***/ }),

/***/ "./src/components/nav.js":
/*!*******************************!*\
  !*** ./src/components/nav.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "handleClick": () => (/* binding */ handleClick)
/* harmony export */ });
/* harmony import */ var _hamburger_icon_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hamburger-icon.svg */ "./src/hamburger-icon.svg");
/* harmony import */ var _close_icon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../close-icon.svg */ "./src/close-icon.svg");



function nav() {
    const menuElements = ["Home", "Menu", "About", "Contact"]
    const nav = document.createElement("nav")

    const logo = createLogo("La Fourchette")
    const menu = createMenu(menuElements)
    const controlls = createControlls()

    nav.appendChild(logo)
    nav.appendChild(menu)
    nav.appendChild(controlls)

    return nav
}

function createLogo(text) {
    const logo = document.createElement("div")
    logo.classList.add("logo")
    logo.textContent = text
    return logo
}

function createMenu(elements) {
    const menu = document.createElement("div")
    menu.classList.add("nav-menu-container")

    const list = document.createElement("ul")
    list.classList.add("nav-menu")

    elements.forEach(element => {
        const li = document.createElement("li")
        li.classList.add("tab", `${element}`.toLowerCase())
        li.textContent = element
        list.appendChild(li)
    })

    menu.appendChild(list)

    return menu
}

function createControlls() {
    const container = document.createElement("div")
    container.classList.add("buttons-container")

    const openButton = createOpenButton()
    const closeButton = createCloseButton()

    container.appendChild(openButton)
    container.appendChild(closeButton)

    return container
}

function createOpenButton() {
    const openButton = new Image()
    openButton.src = _hamburger_icon_svg__WEBPACK_IMPORTED_MODULE_0__
    openButton.classList.add("open-button", "visible")

    openButton.addEventListener("click", () => handleClick("open"))

    return openButton
}

function createCloseButton() {
    const closeButton = new Image()
    closeButton.src = _close_icon_svg__WEBPACK_IMPORTED_MODULE_1__
    closeButton.classList.add("close-button", "hidden")

    closeButton.addEventListener("click", () => handleClick("close"))
    return closeButton
}

function handleClick(action) {
    if (action === "close") {
        toggleFullScreen("remove")
        showButton("open")
    }
    if (action === "open") {
        toggleFullScreen("add")
        showButton("close")
    }
}

function toggleFullScreen(action) {
    document.querySelector(".nav-menu-container").classList[action]("nav-fullscreen")
    setTimeout(() => {
        document.querySelector(".nav-menu").classList[action]("nav-menu-open")
    }, 0);
}

function showButton(button) {
    const active = document.querySelector(`.${button}-button`)
    const inactive = document.querySelector(`.${button === "open" ? "close" : "open"}-button`)
    active.classList.remove("hidden")
    active.classList.add("visible")
    inactive.classList.remove("visible")
    inactive.classList.add("hidden")
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nav);


/***/ }),

/***/ "./src/components/pages/about.js":
/*!***************************************!*\
  !*** ./src/components/pages/about.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ about)
/* harmony export */ });
function about() {
    const element = document.createElement("div")
    element.classList.add("about")

    return element
}

/***/ }),

/***/ "./src/components/pages/contact.js":
/*!*****************************************!*\
  !*** ./src/components/pages/contact.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contact)
/* harmony export */ });
/* harmony import */ var _data_companyData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/companyData */ "./src/components/data/companyData.js");


function contact() {
    const element = document.createElement("div")
    element.classList.add("contact")

    element.appendChild(createHero())
    element.appendChild(createCompanyData())
    return element
}

function createHero() {
    const container = document.createElement("section")
    container.classList.add("contact-hero", "hero")

    const title = document.createElement("h1")
    title.innerHTML = "Contact"

    container.appendChild(title)

    return container
}

function createCompanyData() {
    const container = document.createElement("section")

    const textContainer = document.createElement("div")
    Object.entries(_data_companyData__WEBPACK_IMPORTED_MODULE_0__["default"]).forEach(([key, value]) => {
        console.log(key, value)
        const keyContainer = document.createElement("div")
        keyContainer.classList.add("contact-info-title")
        key = key.toString()
        keyContainer.textContent = key[0].toUpperCase() + key.slice(1)
        textContainer.appendChild(keyContainer)

        const valueContainer = document.createElement("div")
        valueContainer.classList.add("contact-info")
        valueContainer.textContent = value
        textContainer.appendChild(valueContainer)
    })


    const mapContainer = document.createElement("div")

    container.appendChild(textContainer)

    return container
}

/***/ }),

/***/ "./src/components/pages/home.js":
/*!**************************************!*\
  !*** ./src/components/pages/home.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ home)
/* harmony export */ });
function home() {
    const element = document.createElement("div")
    element.classList.add("home-page")

    element.appendChild(createHero())

    return element
}

function createHero() {
    const container = document.createElement("section")
    container.classList.add("home-hero", "hero")

    const title = document.createElement("h1")
    title.innerHTML = "Bienvenue<br>à La Fourchette"
    const subtitle = document.createElement("h3")
    subtitle.textContent = "Traditional French Couisine Restaurant"

    container.appendChild(title)
    container.appendChild(subtitle)

    return container
}

/***/ }),

/***/ "./src/components/pages/menu.js":
/*!**************************************!*\
  !*** ./src/components/pages/menu.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menu)
/* harmony export */ });
/* harmony import */ var _data_dishes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/dishes */ "./src/components/data/dishes.js");


function menu() {
    const element = document.createElement("div")
    element.classList.add("menu-page")

    element.appendChild(createHero())
    element.appendChild(createMenu())

    return element
}

function createHero() {
    const menuHero = document.createElement("section")
    menuHero.classList.add("menu-hero", "hero")

    const title = document.createElement("h1")
    title.textContent = "Menu"

    menuHero.appendChild(title)

    return menuHero
}

function createMenu() {
    const dishList = document.createElement("section")
    dishList.classList.add("menu-list")

    Object.entries(_data_dishes__WEBPACK_IMPORTED_MODULE_0__["default"]).forEach(([category, dishes]) => {
        const categoryWrapper = document.createElement("div")
        categoryWrapper.classList.add("menu-category")

        // create category title
        const categoryTitle = document.createElement("h2")
        categoryWrapper.appendChild(categoryTitle)

        dishes.forEach((item, index) => {
            if (index === 0) {
                categoryTitle.textContent = item.category
            }
            if (index !== 0) {
                const container = document.createElement("div")
                container.classList.add("menu-item-container")

                // create dish title and price line
                const mainLine = document.createElement("div")

                const dishName = document.createElement("div")
                dishName.textContent = item.name

                const price = document.createElement("div")
                price.textContent = `${item.price} EUR`

                mainLine.appendChild(dishName)
                mainLine.appendChild(price)

                // create dish description line
                const descritpion = document.createElement("p")
                descritpion.textContent = item.descritpion

                container.appendChild(mainLine)
                container.appendChild(descritpion)

                categoryWrapper.appendChild(container)
            }

        })
        dishList.appendChild(categoryWrapper)
    })

    return dishList
}

/***/ }),

/***/ "./src/components/switchTab.js":
/*!*************************************!*\
  !*** ./src/components/switchTab.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ switchTab)
/* harmony export */ });
/* harmony import */ var _changeMainContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./changeMainContent */ "./src/components/changeMainContent.js");
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav */ "./src/components/nav.js");



function switchTab(tab) {
    const tabs = document.querySelectorAll(".tab")
    setEventListeners(tabs)
    setActive(document.querySelector(`.${tab}`))
}

function setEventListeners(elements) {
    elements.forEach(element => {
        element.addEventListener("click", () => handleClick(elements, element))
    })
}

function handleClick(elements, element) {
    elements.forEach(tab => {
        setInactive(tab)
    })
    setActive(element)
    ;(0,_nav__WEBPACK_IMPORTED_MODULE_1__.handleClick)("close")
}

function setActive(element) {
    element.classList.add("active-tab")
    ;(0,_changeMainContent__WEBPACK_IMPORTED_MODULE_0__["default"])(element.textContent.toLowerCase())
}

function setInactive(element) {
    element.classList.remove("active-tab")
}

/***/ }),

/***/ "./src/close-icon.svg":
/*!****************************!*\
  !*** ./src/close-icon.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f4dca38a93887fe84be9.svg";

/***/ }),

/***/ "./src/hamburger-icon.svg":
/*!********************************!*\
  !*** ./src/hamburger-icon.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0bc16672bbf7eb23ec8b.svg";

/***/ }),

/***/ "./src/images/hero1.jpg":
/*!******************************!*\
  !*** ./src/images/hero1.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5a06f68da88da636fe70.jpg";

/***/ }),

/***/ "./src/images/hero4.jpg":
/*!******************************!*\
  !*** ./src/images/hero4.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a5dfb2903917d5fab3d7.jpg";

/***/ }),

/***/ "./src/images/hero5.jpg":
/*!******************************!*\
  !*** ./src/images/hero5.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f46c2d545f776cdf3bfa.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_loadApp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/loadApp */ "./src/components/loadApp.js");


window.addEventListener("DOMContentLoaded", _components_loadApp__WEBPACK_IMPORTED_MODULE_0__["default"])
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGdGQUFnRixVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxhQUFhLE1BQU0sWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxPQUFPLFdBQVcsS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLFdBQVcsS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtB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Q0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7QUNBMEM7O0FBRTFDLDRDQUE0QywyREFBTyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbXBvbmVudHMvY2hhbmdlTWFpbkNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbXBvbmVudHMvZGF0YS9jb21wYW55RGF0YS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29tcG9uZW50cy9kYXRhL2Rpc2hlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29tcG9uZW50cy9sb2FkQXBwLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb21wb25lbnRzL25hdi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29tcG9uZW50cy9wYWdlcy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29tcG9uZW50cy9wYWdlcy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb21wb25lbnRzL3BhZ2VzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbXBvbmVudHMvcGFnZXMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29tcG9uZW50cy9zd2l0Y2hUYWIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL2hlcm81LmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL2hlcm8xLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL2hlcm80LmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QWxsdXJhJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBsYXlmYWlyK0Rpc3BsYXk6aXRhbCx3Z2h0QDAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzEsNDAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURhbmNpbmcrU2NyaXB0OndnaHRANDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1sb2dvLWZvbnQ6IFxcXCJBbGx1cmFcXFwiLCBjdXJzaXZlO1xcbiAgICAtLWZhbmN5LWZvbnQ6IFxcXCJEYW5jaW5nIFNjcmlwdFxcXCIsIGN1cnNpdmU7XFxuICAgIC0tc2VyaWYtZm9udDogXFxcIlBsYXlmYWlyIERpc3BsYXlcXFwiLCBzZXJpZjtcXG4gICAgLS1uYXYtaGVpZ2h0OiA2MHB4O1xcbiAgICAtLXRleHQtY29sb3I6IGJsYWNrO1xcbiAgICAtLWRhcmstY29sb3I6IHJnYigzMCwgMzAsIDMwKTtcXG4gICAgLS1oZWFkZXItbGlnaHQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSk7XFxufVxcblxcbmgxIHtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZmFuY3ktZm9udCk7XFxuICAgIGNvbG9yOiB2YXIoLS1oZWFkZXItbGlnaHQtY29sb3IpO1xcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDFyZW0gdmFyKC0tZGFyay1jb2xvcik7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuaDIge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuaDMge1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZmFuY3ktZm9udCk7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDFyZW0gdmFyKC0tZGFyay1jb2xvcik7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6IHZhcigtLWhlYWRlci1saWdodC1jb2xvcik7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XFxufVxcblxcbi5oZXJvIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAwLjVyZW07XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciB0b3A7XFxuICAgIHBhZGRpbmc6IDJyZW07XFxufVxcblxcbi8qIE5hdmJhciBzZWN0aW9uICovXFxuXFxubmF2IHtcXG4gICAgaGVpZ2h0OiB2YXIoLS1uYXYtaGVpZ2h0KTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgcGFkZGluZzogMCAxNXB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvIGF1dG87XFxufVxcblxcbi5sb2dvIHtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWxvZ28tZm9udCk7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLmJ1dHRvbnMtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDIuNXJlbTtcXG4gICAgaGVpZ2h0OiAyLjVyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLm9wZW4tYnV0dG9uLFxcbi5jbG9zZS1idXR0b24ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgaGVpZ2h0OiAyLjVyZW07XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcbn1cXG5cXG4udmlzaWJsZSB7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcblxcbi5uYXYtbWVudS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZS1vdXQ7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuXFxuLm5hdi1mdWxsc2NyZWVuIHtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGVuZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gICAgcGFkZGluZzogY2FsYyh2YXIoLS1uYXYtaGVpZ2h0KSoyKSAwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogdmFyKC0tbmF2LWhlaWdodCk7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxufVxcblxcbi5uYXYtZnVsbHNjcmVlbj4qIHtcXG4gICAgZGlzcGxheTogZ3JpZCAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubmF2LW1lbnUge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBnYXA6IDMwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tc2VyaWYtZm9udCk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xcbn1cXG5cXG4ubmF2LW1lbnU+bGkge1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4ubmF2LW1lbnUtb3Blbj5saSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlLWluLW91dCwgdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5uYXYtbWVudS1vcGVuPmxpOm50aC1jaGlsZCgyKSB7XFxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMnM7XFxufVxcblxcbi5uYXYtbWVudS1vcGVuPmxpOm50aC1jaGlsZCgzKSB7XFxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuNHM7XFxufVxcblxcbi5uYXYtbWVudS1vcGVuPmxpOm50aC1jaGlsZCg0KSB7XFxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuNXM7XFxufVxcblxcbi50YWIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBhZGRpbmctYm90dG9tOiAycHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmFjdGl2ZS10YWIsXFxuLnRhYjpob3ZlciB7XFxuICAgIHRyYW5zaXRpb246IGJvcmRlci1ib3R0b20gMC4zcztcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXRleHQtY29sb3IpO1xcbn1cXG5cXG4udGFiOmhvdmVyIHtcXG4gICAgdHJhbnNpdGlvbi1kZWxheTogMHMgIWltcG9ydGFudDtcXG59XFxuXFxuLyogTWFpbiBzZWN0aW9uICovXFxubWFpbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi8qIEhvbWUgcGFnZSAqL1xcblxcbi5ob21lLXBhZ2Uge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDJyZW07XFxufVxcblxcbi5ob21lLWhlcm8ge1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS1uYXYtaGVpZ2h0KSk7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcblxcbi8qIE1lbnUgcGFnZSAqL1xcblxcbi5tZW51LXBhZ2Uge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDJyZW07XFxufVxcblxcbi5tZW51LWhlcm8ge1xcbiAgICBoZWlnaHQ6IDUwdmg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBib3R0b207XFxufVxcblxcbi5tZW51LWxpc3Qge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDJyZW07XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW46IDAgMTVweDtcXG4gICAgcGFkZGluZzogMTBweCAwO1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tc2VyaWYtZm9udCk7XFxufVxcblxcbi5tZW51LWxpc3QgaDIge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbiAgICBjb2xvcjogdmFyKC0tZGFyay1jb2xvcik7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1kYXJrLWNvbG9yKTtcXG59XFxuXFxuLm1lbnUtY2F0ZWdvcnkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLm1lbnUtaXRlbS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4ubWVudS1pdGVtLWNvbnRhaW5lciBkaXY6Zmlyc3QtY2hpbGQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvO1xcbn1cXG5cXG4ubWVudS1pdGVtLWNvbnRhaW5lciBwIHtcXG4gICAgY29sb3I6IHZhcigtLWRhcmstY29sb3IpO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDZyZW07XFxufVxcblxcbi8qIENvbnRhY3QgcGFnZSAqL1xcblxcbi5jb250YWN0LXBhZ2Uge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDJyZW07XFxufVxcblxcbi5jb250YWN0LWhlcm8ge1xcbiAgICBoZWlnaHQ6IDUwdmg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDJyZW07XFxufVxcblxcbi8qIERlc2t0b3BzIGFuZCB0YWJsZXRzICovXFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgICAub3Blbi1idXR0b24ge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcblxcbiAgICAubmF2LW1lbnUtY29udGFpbmVyIHtcXG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxuXFxuICAgIC5uYXYtbWVudSB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICB9XFxuXFxuICAgIC5uYXYtbWVudT5saSB7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxufVxcblxcbi8qIEJpZ2dlciBzY3JlZW5zICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpIHtcXG4gICAgaDEge1xcbiAgICAgICAgZm9udC1zaXplOiA4cmVtO1xcbiAgICB9XFxuXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBSUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5Qix1Q0FBdUM7SUFDdkMsdUNBQXVDO0lBQ3ZDLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLGVBQWU7SUFDZiw4QkFBOEI7SUFDOUIsZ0NBQWdDO0lBQ2hDLHVDQUF1QztJQUN2QyxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQix1Q0FBdUM7SUFDdkMsa0JBQWtCO0lBQ2xCLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QiwrQkFBK0I7SUFDL0IsYUFBYTtBQUNqQjs7QUFFQSxtQkFBbUI7O0FBRW5CO0lBQ0kseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsY0FBYztJQUNkLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlDQUFpQztJQUNqQyxrQkFBa0I7SUFDbEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFVBQVU7SUFDVix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGtDQUFrQztJQUNsQyx5QkFBeUI7SUFDekIsb0NBQW9DO0lBQ3BDLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxPQUFPO0FBQ1g7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsOEJBQThCO0lBQzlCLGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsZ0VBQWdFO0lBQ2hFLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsb0NBQW9DO0FBQ3hDOztBQUVBOztJQUVJLDhCQUE4QjtJQUM5QiwwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSwrQkFBK0I7QUFDbkM7O0FBRUEsaUJBQWlCO0FBQ2pCO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQSxjQUFjOztBQUVkO0lBQ0ksYUFBYTtJQUNiLFNBQVM7QUFDYjs7QUFFQTtJQUNJLHVDQUF1QztJQUN2Qyx5REFBMkM7QUFDL0M7O0FBRUEsY0FBYzs7QUFFZDtJQUNJLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0lBQ1oseURBQTJDO0lBQzNDLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0lBQ1QsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQix3QkFBd0I7SUFDeEIsMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLG1CQUFtQjtBQUN2Qjs7QUFFQSxpQkFBaUI7O0FBRWpCO0lBQ0ksYUFBYTtJQUNiLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFlBQVk7SUFDWix5REFBMkM7SUFDM0Msc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLGFBQWE7QUFDakI7O0FBRUEseUJBQXlCOztBQUV6QjtJQUNJO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLG1CQUFtQjtRQUNuQixVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxhQUFhO1FBQ2IsZUFBZTtJQUNuQjs7SUFFQTtRQUNJLFVBQVU7SUFDZDtBQUNKOztBQUVBLG1CQUFtQjtBQUNuQjtJQUNJO1FBQ0ksZUFBZTtJQUNuQjs7QUFFSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BbGx1cmEmZGlzcGxheT1zd2FwJyk7XFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UGxheWZhaXIrRGlzcGxheTppdGFsLHdnaHRAMCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MSw0MDAmZGlzcGxheT1zd2FwJyk7XFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RGFuY2luZytTY3JpcHQ6d2dodEA0MDA7NTAwOzYwMDs3MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLWxvZ28tZm9udDogXFxcIkFsbHVyYVxcXCIsIGN1cnNpdmU7XFxuICAgIC0tZmFuY3ktZm9udDogXFxcIkRhbmNpbmcgU2NyaXB0XFxcIiwgY3Vyc2l2ZTtcXG4gICAgLS1zZXJpZi1mb250OiBcXFwiUGxheWZhaXIgRGlzcGxheVxcXCIsIHNlcmlmO1xcbiAgICAtLW5hdi1oZWlnaHQ6IDYwcHg7XFxuICAgIC0tdGV4dC1jb2xvcjogYmxhY2s7XFxuICAgIC0tZGFyay1jb2xvcjogcmdiKDMwLCAzMCwgMzApO1xcbiAgICAtLWhlYWRlci1saWdodC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1KTtcXG59XFxuXFxuaDEge1xcbiAgICBmb250LXNpemU6IDRyZW07XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mYW5jeS1mb250KTtcXG4gICAgY29sb3I6IHZhcigtLWhlYWRlci1saWdodC1jb2xvcik7XFxuICAgIHRleHQtc2hhZG93OiAwIDAgMXJlbSB2YXIoLS1kYXJrLWNvbG9yKTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG5oMiB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG5oMyB7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mYW5jeS1mb250KTtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XFxuICAgIHRleHQtc2hhZG93OiAwIDAgMXJlbSB2YXIoLS1kYXJrLWNvbG9yKTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogdmFyKC0taGVhZGVyLWxpZ2h0LWNvbG9yKTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcXG59XFxuXFxuLmhlcm8ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDAuNXJlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIHRvcDtcXG4gICAgcGFkZGluZzogMnJlbTtcXG59XFxuXFxuLyogTmF2YmFyIHNlY3Rpb24gKi9cXG5cXG5uYXYge1xcbiAgICBoZWlnaHQ6IHZhcigtLW5hdi1oZWlnaHQpO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBwYWRkaW5nOiAwIDE1cHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG8gYXV0bztcXG59XFxuXFxuLmxvZ28ge1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tbG9nby1mb250KTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4uYnV0dG9ucy1jb250YWluZXIge1xcbiAgICB3aWR0aDogMi41cmVtO1xcbiAgICBoZWlnaHQ6IDIuNXJlbTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ub3Blbi1idXR0b24sXFxuLmNsb3NlLWJ1dHRvbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBoZWlnaHQ6IDIuNXJlbTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxufVxcblxcbi52aXNpYmxlIHtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuXFxuLm5hdi1tZW51LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlLW91dDtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4ubmF2LWZ1bGxzY3JlZW4ge1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogZW5kO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgICBwYWRkaW5nOiBjYWxjKHZhcigtLW5hdi1oZWlnaHQpKjIpIDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiB2YXIoLS1uYXYtaGVpZ2h0KTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG59XFxuXFxuLm5hdi1mdWxsc2NyZWVuPioge1xcbiAgICBkaXNwbGF5OiBncmlkICFpbXBvcnRhbnQ7XFxufVxcblxcbi5uYXYtbWVudSB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGdhcDogMzBweDtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1zZXJpZi1mb250KTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XFxufVxcblxcbi5uYXYtbWVudT5saSB7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcblxcbi5uYXYtbWVudS1vcGVuPmxpIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2UtaW4tb3V0LCB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLm5hdi1tZW51LW9wZW4+bGk6bnRoLWNoaWxkKDIpIHtcXG4gICAgdHJhbnNpdGlvbi1kZWxheTogMC4ycztcXG59XFxuXFxuLm5hdi1tZW51LW9wZW4+bGk6bnRoLWNoaWxkKDMpIHtcXG4gICAgdHJhbnNpdGlvbi1kZWxheTogMC40cztcXG59XFxuXFxuLm5hdi1tZW51LW9wZW4+bGk6bnRoLWNoaWxkKDQpIHtcXG4gICAgdHJhbnNpdGlvbi1kZWxheTogMC41cztcXG59XFxuXFxuLnRhYiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZy1ib3R0b206IDJweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uYWN0aXZlLXRhYixcXG4udGFiOmhvdmVyIHtcXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWJvdHRvbSAwLjNzO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tdGV4dC1jb2xvcik7XFxufVxcblxcbi50YWI6aG92ZXIge1xcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcyAhaW1wb3J0YW50O1xcbn1cXG5cXG4vKiBNYWluIHNlY3Rpb24gKi9cXG5tYWluIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLyogSG9tZSBwYWdlICovXFxuXFxuLmhvbWUtcGFnZSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMnJlbTtcXG59XFxuXFxuLmhvbWUtaGVybyB7XFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIHZhcigtLW5hdi1oZWlnaHQpKTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ltYWdlcy9oZXJvNS5qcGcnKTtcXG59XFxuXFxuLyogTWVudSBwYWdlICovXFxuXFxuLm1lbnUtcGFnZSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMnJlbTtcXG59XFxuXFxuLm1lbnUtaGVybyB7XFxuICAgIGhlaWdodDogNTB2aDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2ltYWdlcy9oZXJvMS5qcGdcXFwiKTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGJvdHRvbTtcXG59XFxuXFxuLm1lbnUtbGlzdCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMnJlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMCAxNXB4O1xcbiAgICBwYWRkaW5nOiAxMHB4IDA7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1zZXJpZi1mb250KTtcXG59XFxuXFxuLm1lbnUtbGlzdCBoMiB7XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrLWNvbG9yKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWRhcmstY29sb3IpO1xcbn1cXG5cXG4ubWVudS1jYXRlZ29yeSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMC41cmVtO1xcbn1cXG5cXG4ubWVudS1pdGVtLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5tZW51LWl0ZW0tY29udGFpbmVyIGRpdjpmaXJzdC1jaGlsZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG87XFxufVxcblxcbi5tZW51LWl0ZW0tY29udGFpbmVyIHAge1xcbiAgICBjb2xvcjogdmFyKC0tZGFyay1jb2xvcik7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcXG4gICAgcGFkZGluZy1yaWdodDogNnJlbTtcXG59XFxuXFxuLyogQ29udGFjdCBwYWdlICovXFxuXFxuLmNvbnRhY3QtcGFnZSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMnJlbTtcXG59XFxuXFxuLmNvbnRhY3QtaGVybyB7XFxuICAgIGhlaWdodDogNTB2aDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2ltYWdlcy9oZXJvNC5qcGdcXFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMnJlbTtcXG59XFxuXFxuLyogRGVza3RvcHMgYW5kIHRhYmxldHMgKi9cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAgIC5vcGVuLWJ1dHRvbiB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuXFxuICAgIC5uYXYtbWVudS1jb250YWluZXIge1xcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG5cXG4gICAgLm5hdi1tZW51IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxuICAgIH1cXG5cXG4gICAgLm5hdi1tZW51PmxpIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG59XFxuXFxuLyogQmlnZ2VyIHNjcmVlbnMgKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NDBweCkge1xcbiAgICBoMSB7XFxuICAgICAgICBmb250LXNpemU6IDhyZW07XFxuICAgIH1cXG5cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBob21lIGZyb20gXCIuL3BhZ2VzL2hvbWVcIlxuaW1wb3J0IG1lbnUgZnJvbSBcIi4vcGFnZXMvbWVudVwiXG5pbXBvcnQgYWJvdXQgZnJvbSBcIi4vcGFnZXMvYWJvdXRcIlxuaW1wb3J0IGNvbnRhY3QgZnJvbSBcIi4vcGFnZXMvY29udGFjdFwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNoYW5nZU1haW5Db250ZW50KHBhZ2UpIHtcbiAgICBzd2l0Y2ggKHBhZ2UpIHtcbiAgICAgICAgY2FzZSBcImhvbWVcIjpcbiAgICAgICAgICAgIHBhZ2UgPSBob21lXG4gICAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIFwibWVudVwiOlxuICAgICAgICAgICAgcGFnZSA9IG1lbnVcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgXCJhYm91dFwiOlxuICAgICAgICAgICAgcGFnZSA9IGFib3V0XG4gICAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIFwiY29udGFjdFwiOlxuICAgICAgICAgICAgcGFnZSA9IGNvbnRhY3RcbiAgICAgICAgICAgIGJyZWFrXG4gICAgfVxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKVxuICAgIG1haW4uaW5uZXJIVE1MID0gXCJcIlxuICAgIG1haW4uYXBwZW5kQ2hpbGQocGFnZSgpKVxufSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiBcIkxhIEZvdXJjaGV0dGVcIixcbiAgICBzdHJlZXQ6IFwiMjU1IFBhY21hbiBTdC5cIixcbiAgICB6aXA6IFwiODkwMDFcIixcbiAgICBjaXR5OiBcIkFsYW1vLCBOVlwiLFxuICAgIHBob25lOiBcIisxICg3MDIpIDAwMCAwMDAwXCIsXG4gICAgZW1haWw6IFwiY29udGFjdEBsYWZvcnVjaGV0dGUuY29tXCIsXG59IiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHN0YXJ0ZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhdGVnb3J5OiBcIlN0YXJ0ZXJzXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiU25haWxzXCIsXG4gICAgICAgICAgICBkZXNjcml0cGlvbjogXCJzZXJ2ZWQgd2l0aCBnYXJsaWMgYnV0dGVyIGFuZCBiYWd1ZXR0ZVwiLFxuICAgICAgICAgICAgcHJpY2U6IFwiMTAuMDBcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJGb2lzIGdyYXNcIixcbiAgICAgICAgICAgIGRlc2NyaXRwaW9uOiBcInNlcnZlZCB3aXRoIGJyaW9jaGUsIGNob2tlYmVycnkgYW5kIHBpY2tsZWQgcHVtcGtpblwiLFxuICAgICAgICAgICAgcHJpY2U6IFwiMTIuMDBcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJRdWljaGVcIixcbiAgICAgICAgICAgIGRlc2NyaXRwaW9uOiBcInRhcnRlIHdpdGggZ29hdCBjaGVlc2UsIHBlYXIgYW5kIHdhbGxudXRzXCIsXG4gICAgICAgICAgICBwcmljZTogXCI4LjAwXCIsXG4gICAgICAgIH0sXG4gICAgXSxcbiAgICBtYWluQ291cnNlczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBjYXRlZ29yeTogXCJNYWluIGNvdXJzZXNcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJSYXRhdG91aWxsZVwiLFxuICAgICAgICAgICAgZGVzY3JpdHBpb246IFwidmVnZXRhYmxlcyB3aXRoIHRvbWF0byBzYXVjZVwiLFxuICAgICAgICAgICAgcHJpY2U6IFwiOC41MFwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIk9uaW9uIHNvdXBcIixcbiAgICAgICAgICAgIGRlc2NyaXRwaW9uOiBcInRyYWRpdGlvbmFsIGZyZW5jaCBvbmlvbiBzb3VwIHNlcnZlZCB3aXRoIGJhZ3VldHRlXCIsXG4gICAgICAgICAgICBwcmljZTogXCIxMS4wMFwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIkZpbGV0IE1pZ25vblwiLFxuICAgICAgICAgICAgZGVzY3JpdHBpb246IFwic2VydmVkIHdpdGggcG90YXRvcywgcGVwcGVyIHNhdWNlIGFuZCB2ZWdldGFibGVzXCIsXG4gICAgICAgICAgICBwcmljZTogXCIyOC4wMFwiLFxuICAgICAgICB9LFxuICAgIF0sXG4gICAgZGVzc2VydHM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgY2F0ZWdvcnk6IFwiRGVzc2VydHNcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJDcsOobWUgYnLDu2zDqWVcIixcbiAgICAgICAgICAgIGRlc2NyaXRwaW9uOiBcInZhbmlsbGEgY3JlYW0gd2l0aCBjYXJtZWxpc2VkIHN1Z2FyXCIsXG4gICAgICAgICAgICBwcmljZTogXCI1LjAwXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiQ3JlcGVzXCIsXG4gICAgICAgICAgICBkZXNjcml0cGlvbjogXCJ3aXRoIHJhc3BiZXJyeSBqYW1cIixcbiAgICAgICAgICAgIHByaWNlOiBcIjYuMDBcIixcbiAgICAgICAgfSxcbiAgICBdLFxuICAgIHNvZnREcmlua3M6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgY2F0ZWdvcnk6IFwiU29mdCBkcmlua3NcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJIeWRyb2dlbiBtb25veGlkZVwiLFxuICAgICAgICAgICAgZGVzY3JpdHBpb246IFwid2l0aCBjYXJib24gZGlveGlkZSAvIHdpdGhvdXQgY2FyYm9uIGRpb3hpZGVcIixcbiAgICAgICAgICAgIHByaWNlOiBcIjIuMDBcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJQZXJyaWVyXCIsXG4gICAgICAgICAgICBkZXNjcml0cGlvbjogXCJhIHNwYXJrbGluZyB3YXRlciBidXQgd2F5IG1vcmUgZXhwZW5zaXZlXCIsXG4gICAgICAgICAgICBwcmljZTogXCI1LjAwXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiQ29mZmVlXCIsXG4gICAgICAgICAgICBkZXNjcml0cGlvbjogXCJyaXN0cmV0dG8gLyBlc3ByZXNzbyAvIGRvcHBpbyAvIHRyaXBwbG9cIixcbiAgICAgICAgICAgIHByaWNlOiBcIjMuMDBcIixcbiAgICAgICAgfSxcblxuICAgIF0sXG4gICAgd2luZTogW1xuICAgICAgICB7XG4gICAgICAgICAgICBjYXRlZ29yeTogXCJXaW5lc1wiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIlPDqW1pbGxvbiAoMSBnbGFzcylcIixcbiAgICAgICAgICAgIGRlc2NyaXRwaW9uOiBcIkNow6J0ZWF1IEdyYXZpbGxlLUxhY29zdGUgLyBCb3JkZWF1eCAvIDIwMTlcIixcbiAgICAgICAgICAgIHByaWNlOiBcIjQuNDBcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJHZXfDvHJ6dHJhbWluZXIgKDEgZ2xhc3MpXCIsXG4gICAgICAgICAgICBkZXNjcml0cGlvbjogXCJEb21haW5lcyBTY2hsdW1iZXJnZXIgLyBBbHNhY2UgLyAyMDE4XCIsXG4gICAgICAgICAgICBwcmljZTogXCI0LjYwXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiUGlub3Qgbm9pciAoMSBnbGFzcylcIixcbiAgICAgICAgICAgIGRlc2NyaXRwaW9uOiBcIkplYW4tQ2xhdWRlIEJvaXNzZXQvIEJ1cmd1bmR5IC8gMjAxN1wiLFxuICAgICAgICAgICAgcHJpY2U6IFwiNS44MFwiLFxuICAgICAgICB9LFxuICAgIF0sXG59IiwiaW1wb3J0IFwiLi4vc3R5bGUuY3NzXCJcbmltcG9ydCBuYXYgZnJvbSBcIi4vbmF2XCJcbmltcG9ydCBzd2l0Y2hUYWIgZnJvbSBcIi4vc3dpdGNoVGFiXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZEFwcCgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChuYXYoKSlcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW4pXG4gICAgc3dpdGNoVGFiKFwiY29udGFjdFwiKVxufSIsImltcG9ydCBPcGVuSWNvbiBmcm9tIFwiLi4vaGFtYnVyZ2VyLWljb24uc3ZnXCJcbmltcG9ydCBDbG9zZUljb24gZnJvbSBcIi4uL2Nsb3NlLWljb24uc3ZnXCJcblxuZnVuY3Rpb24gbmF2KCkge1xuICAgIGNvbnN0IG1lbnVFbGVtZW50cyA9IFtcIkhvbWVcIiwgXCJNZW51XCIsIFwiQWJvdXRcIiwgXCJDb250YWN0XCJdXG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKVxuXG4gICAgY29uc3QgbG9nbyA9IGNyZWF0ZUxvZ28oXCJMYSBGb3VyY2hldHRlXCIpXG4gICAgY29uc3QgbWVudSA9IGNyZWF0ZU1lbnUobWVudUVsZW1lbnRzKVxuICAgIGNvbnN0IGNvbnRyb2xscyA9IGNyZWF0ZUNvbnRyb2xscygpXG5cbiAgICBuYXYuYXBwZW5kQ2hpbGQobG9nbylcbiAgICBuYXYuYXBwZW5kQ2hpbGQobWVudSlcbiAgICBuYXYuYXBwZW5kQ2hpbGQoY29udHJvbGxzKVxuXG4gICAgcmV0dXJuIG5hdlxufVxuXG5mdW5jdGlvbiBjcmVhdGVMb2dvKHRleHQpIHtcbiAgICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGxvZ28uY2xhc3NMaXN0LmFkZChcImxvZ29cIilcbiAgICBsb2dvLnRleHRDb250ZW50ID0gdGV4dFxuICAgIHJldHVybiBsb2dvXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnUoZWxlbWVudHMpIHtcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIG1lbnUuY2xhc3NMaXN0LmFkZChcIm5hdi1tZW51LWNvbnRhaW5lclwiKVxuXG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKVxuICAgIGxpc3QuY2xhc3NMaXN0LmFkZChcIm5hdi1tZW51XCIpXG5cbiAgICBlbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKVxuICAgICAgICBsaS5jbGFzc0xpc3QuYWRkKFwidGFiXCIsIGAke2VsZW1lbnR9YC50b0xvd2VyQ2FzZSgpKVxuICAgICAgICBsaS50ZXh0Q29udGVudCA9IGVsZW1lbnRcbiAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChsaSlcbiAgICB9KVxuXG4gICAgbWVudS5hcHBlbmRDaGlsZChsaXN0KVxuXG4gICAgcmV0dXJuIG1lbnVcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29udHJvbGxzKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImJ1dHRvbnMtY29udGFpbmVyXCIpXG5cbiAgICBjb25zdCBvcGVuQnV0dG9uID0gY3JlYXRlT3BlbkJ1dHRvbigpXG4gICAgY29uc3QgY2xvc2VCdXR0b24gPSBjcmVhdGVDbG9zZUJ1dHRvbigpXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQob3BlbkJ1dHRvbilcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b24pXG5cbiAgICByZXR1cm4gY29udGFpbmVyXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU9wZW5CdXR0b24oKSB7XG4gICAgY29uc3Qgb3BlbkJ1dHRvbiA9IG5ldyBJbWFnZSgpXG4gICAgb3BlbkJ1dHRvbi5zcmMgPSBPcGVuSWNvblxuICAgIG9wZW5CdXR0b24uY2xhc3NMaXN0LmFkZChcIm9wZW4tYnV0dG9uXCIsIFwidmlzaWJsZVwiKVxuXG4gICAgb3BlbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gaGFuZGxlQ2xpY2soXCJvcGVuXCIpKVxuXG4gICAgcmV0dXJuIG9wZW5CdXR0b25cbn1cblxuZnVuY3Rpb24gY3JlYXRlQ2xvc2VCdXR0b24oKSB7XG4gICAgY29uc3QgY2xvc2VCdXR0b24gPSBuZXcgSW1hZ2UoKVxuICAgIGNsb3NlQnV0dG9uLnNyYyA9IENsb3NlSWNvblxuICAgIGNsb3NlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjbG9zZS1idXR0b25cIiwgXCJoaWRkZW5cIilcblxuICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBoYW5kbGVDbGljayhcImNsb3NlXCIpKVxuICAgIHJldHVybiBjbG9zZUJ1dHRvblxufVxuXG5mdW5jdGlvbiBoYW5kbGVDbGljayhhY3Rpb24pIHtcbiAgICBpZiAoYWN0aW9uID09PSBcImNsb3NlXCIpIHtcbiAgICAgICAgdG9nZ2xlRnVsbFNjcmVlbihcInJlbW92ZVwiKVxuICAgICAgICBzaG93QnV0dG9uKFwib3BlblwiKVxuICAgIH1cbiAgICBpZiAoYWN0aW9uID09PSBcIm9wZW5cIikge1xuICAgICAgICB0b2dnbGVGdWxsU2NyZWVuKFwiYWRkXCIpXG4gICAgICAgIHNob3dCdXR0b24oXCJjbG9zZVwiKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gdG9nZ2xlRnVsbFNjcmVlbihhY3Rpb24pIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdi1tZW51LWNvbnRhaW5lclwiKS5jbGFzc0xpc3RbYWN0aW9uXShcIm5hdi1mdWxsc2NyZWVuXCIpXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2LW1lbnVcIikuY2xhc3NMaXN0W2FjdGlvbl0oXCJuYXYtbWVudS1vcGVuXCIpXG4gICAgfSwgMCk7XG59XG5cbmZ1bmN0aW9uIHNob3dCdXR0b24oYnV0dG9uKSB7XG4gICAgY29uc3QgYWN0aXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7YnV0dG9ufS1idXR0b25gKVxuICAgIGNvbnN0IGluYWN0aXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7YnV0dG9uID09PSBcIm9wZW5cIiA/IFwiY2xvc2VcIiA6IFwib3BlblwifS1idXR0b25gKVxuICAgIGFjdGl2ZS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpXG4gICAgYWN0aXZlLmNsYXNzTGlzdC5hZGQoXCJ2aXNpYmxlXCIpXG4gICAgaW5hY3RpdmUuY2xhc3NMaXN0LnJlbW92ZShcInZpc2libGVcIilcbiAgICBpbmFjdGl2ZS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpXG59XG5cbmV4cG9ydCBkZWZhdWx0IG5hdlxuZXhwb3J0IHsgaGFuZGxlQ2xpY2sgfSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFib3V0KCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYWJvdXRcIilcblxuICAgIHJldHVybiBlbGVtZW50XG59IiwiaW1wb3J0IGNvbXBhbnlEYXRhIGZyb20gXCIuLi9kYXRhL2NvbXBhbnlEYXRhXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29udGFjdCgpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RcIilcblxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY3JlYXRlSGVybygpKVxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY3JlYXRlQ29tcGFueURhdGEoKSlcbiAgICByZXR1cm4gZWxlbWVudFxufVxuXG5mdW5jdGlvbiBjcmVhdGVIZXJvKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LWhlcm9cIiwgXCJoZXJvXCIpXG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKVxuICAgIHRpdGxlLmlubmVySFRNTCA9IFwiQ29udGFjdFwiXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpXG5cbiAgICByZXR1cm4gY29udGFpbmVyXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbXBhbnlEYXRhKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpXG5cbiAgICBjb25zdCB0ZXh0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIE9iamVjdC5lbnRyaWVzKGNvbXBhbnlEYXRhKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coa2V5LCB2YWx1ZSlcbiAgICAgICAgY29uc3Qga2V5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBrZXlDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtaW5mby10aXRsZVwiKVxuICAgICAgICBrZXkgPSBrZXkudG9TdHJpbmcoKVxuICAgICAgICBrZXlDb250YWluZXIudGV4dENvbnRlbnQgPSBrZXlbMF0udG9VcHBlckNhc2UoKSArIGtleS5zbGljZSgxKVxuICAgICAgICB0ZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKGtleUNvbnRhaW5lcilcblxuICAgICAgICBjb25zdCB2YWx1ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgdmFsdWVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtaW5mb1wiKVxuICAgICAgICB2YWx1ZUNvbnRhaW5lci50ZXh0Q29udGVudCA9IHZhbHVlXG4gICAgICAgIHRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQodmFsdWVDb250YWluZXIpXG4gICAgfSlcblxuXG4gICAgY29uc3QgbWFwQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRleHRDb250YWluZXIpXG5cbiAgICByZXR1cm4gY29udGFpbmVyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaG9tZSgpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImhvbWUtcGFnZVwiKVxuXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChjcmVhdGVIZXJvKCkpXG5cbiAgICByZXR1cm4gZWxlbWVudFxufVxuXG5mdW5jdGlvbiBjcmVhdGVIZXJvKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJob21lLWhlcm9cIiwgXCJoZXJvXCIpXG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKVxuICAgIHRpdGxlLmlubmVySFRNTCA9IFwiQmllbnZlbnVlPGJyPsOgIExhIEZvdXJjaGV0dGVcIlxuICAgIGNvbnN0IHN1YnRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpXG4gICAgc3VidGl0bGUudGV4dENvbnRlbnQgPSBcIlRyYWRpdGlvbmFsIEZyZW5jaCBDb3Vpc2luZSBSZXN0YXVyYW50XCJcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSlcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc3VidGl0bGUpXG5cbiAgICByZXR1cm4gY29udGFpbmVyXG59IiwiaW1wb3J0IERpc2hlcyBmcm9tIFwiLi4vZGF0YS9kaXNoZXNcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW51KCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibWVudS1wYWdlXCIpXG5cbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNyZWF0ZUhlcm8oKSlcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnUoKSlcblxuICAgIHJldHVybiBlbGVtZW50XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlcm8oKSB7XG4gICAgY29uc3QgbWVudUhlcm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKVxuICAgIG1lbnVIZXJvLmNsYXNzTGlzdC5hZGQoXCJtZW51LWhlcm9cIiwgXCJoZXJvXCIpXG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKVxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJNZW51XCJcblxuICAgIG1lbnVIZXJvLmFwcGVuZENoaWxkKHRpdGxlKVxuXG4gICAgcmV0dXJuIG1lbnVIZXJvXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnUoKSB7XG4gICAgY29uc3QgZGlzaExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKVxuICAgIGRpc2hMaXN0LmNsYXNzTGlzdC5hZGQoXCJtZW51LWxpc3RcIilcblxuICAgIE9iamVjdC5lbnRyaWVzKERpc2hlcykuZm9yRWFjaCgoW2NhdGVnb3J5LCBkaXNoZXNdKSA9PiB7XG4gICAgICAgIGNvbnN0IGNhdGVnb3J5V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgY2F0ZWdvcnlXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJtZW51LWNhdGVnb3J5XCIpXG5cbiAgICAgICAgLy8gY3JlYXRlIGNhdGVnb3J5IHRpdGxlXG4gICAgICAgIGNvbnN0IGNhdGVnb3J5VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIilcbiAgICAgICAgY2F0ZWdvcnlXcmFwcGVyLmFwcGVuZENoaWxkKGNhdGVnb3J5VGl0bGUpXG5cbiAgICAgICAgZGlzaGVzLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgICAgICBjYXRlZ29yeVRpdGxlLnRleHRDb250ZW50ID0gaXRlbS5jYXRlZ29yeVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtLWNvbnRhaW5lclwiKVxuXG4gICAgICAgICAgICAgICAgLy8gY3JlYXRlIGRpc2ggdGl0bGUgYW5kIHByaWNlIGxpbmVcbiAgICAgICAgICAgICAgICBjb25zdCBtYWluTGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcblxuICAgICAgICAgICAgICAgIGNvbnN0IGRpc2hOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICAgICAgICAgIGRpc2hOYW1lLnRleHRDb250ZW50ID0gaXRlbS5uYW1lXG5cbiAgICAgICAgICAgICAgICBjb25zdCBwcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgICAgICAgICBwcmljZS50ZXh0Q29udGVudCA9IGAke2l0ZW0ucHJpY2V9IEVVUmBcblxuICAgICAgICAgICAgICAgIG1haW5MaW5lLmFwcGVuZENoaWxkKGRpc2hOYW1lKVxuICAgICAgICAgICAgICAgIG1haW5MaW5lLmFwcGVuZENoaWxkKHByaWNlKVxuXG4gICAgICAgICAgICAgICAgLy8gY3JlYXRlIGRpc2ggZGVzY3JpcHRpb24gbGluZVxuICAgICAgICAgICAgICAgIGNvbnN0IGRlc2NyaXRwaW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICAgICAgICAgICAgICBkZXNjcml0cGlvbi50ZXh0Q29udGVudCA9IGl0ZW0uZGVzY3JpdHBpb25cblxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluTGluZSlcbiAgICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpdHBpb24pXG5cbiAgICAgICAgICAgICAgICBjYXRlZ29yeVdyYXBwZXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pXG4gICAgICAgIGRpc2hMaXN0LmFwcGVuZENoaWxkKGNhdGVnb3J5V3JhcHBlcilcbiAgICB9KVxuXG4gICAgcmV0dXJuIGRpc2hMaXN0XG59IiwiaW1wb3J0IGNoYW5nZUNvbnRlbnQgZnJvbSBcIi4vY2hhbmdlTWFpbkNvbnRlbnRcIlxuaW1wb3J0IHsgaGFuZGxlQ2xpY2sgYXMgY2xvc2VNZW51IH0gZnJvbSBcIi4vbmF2XCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3dpdGNoVGFiKHRhYikge1xuICAgIGNvbnN0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhYlwiKVxuICAgIHNldEV2ZW50TGlzdGVuZXJzKHRhYnMpXG4gICAgc2V0QWN0aXZlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RhYn1gKSlcbn1cblxuZnVuY3Rpb24gc2V0RXZlbnRMaXN0ZW5lcnMoZWxlbWVudHMpIHtcbiAgICBlbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBoYW5kbGVDbGljayhlbGVtZW50cywgZWxlbWVudCkpXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gaGFuZGxlQ2xpY2soZWxlbWVudHMsIGVsZW1lbnQpIHtcbiAgICBlbGVtZW50cy5mb3JFYWNoKHRhYiA9PiB7XG4gICAgICAgIHNldEluYWN0aXZlKHRhYilcbiAgICB9KVxuICAgIHNldEFjdGl2ZShlbGVtZW50KVxuICAgIGNsb3NlTWVudShcImNsb3NlXCIpXG59XG5cbmZ1bmN0aW9uIHNldEFjdGl2ZShlbGVtZW50KSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLXRhYlwiKVxuICAgIGNoYW5nZUNvbnRlbnQoZWxlbWVudC50ZXh0Q29udGVudC50b0xvd2VyQ2FzZSgpKVxufVxuXG5mdW5jdGlvbiBzZXRJbmFjdGl2ZShlbGVtZW50KSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlLXRhYlwiKVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgbG9hZEFwcCBmcm9tIFwiLi9jb21wb25lbnRzL2xvYWRBcHBcIlxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgbG9hZEFwcCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=