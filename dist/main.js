/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: #151623;
}

p {
  color: white;
}

h1 {
  color: white;
}

.main-content-div {
  background-color: #1d213a;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 20px 20px 20px;
}
.main-content-div .min-max-div {
  display: flex;
  gap: 1.5em;
}
.main-content-div .location-div {
  display: flex;
  justify-content: center;
  align-items: center;
}
.main-content-div .location-div .map-marker {
  max-width: 30%;
}
.main-content-div .degrees {
  font-size: 2.5rem;
}
.main-content-div .my-location {
  font-size: 1.5em;
}
.main-content-div .weather-condition-image {
  max-width: 20%;
}

.weather-prognose {
  background-color: #1d213a;
  margin: 20px 20px 20px 20px;
}
.weather-prognose .day-prognose {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.weather-prognose .weather-condition-image {
  max-width: 10%;
}
.weather-prognose .day-prognose p {
  margin: 0;
  padding: 0 10px;
}

.todays-highlights {
  margin: 20px 20px 20px 20px;
  text-align: center;
}
.todays-highlights .highlights-headline {
  margin: 10px;
}
.todays-highlights .highlights-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}
.todays-highlights .wind {
  background-color: #1d213a;
}
.todays-highlights .humidity {
  background-color: #1d213a;
}
.todays-highlights .feels-like {
  background-color: #1d213a;
}
.todays-highlights .precipitation {
  background-color: #1d213a;
}
.todays-highlights .sunrise {
  background-color: #1d213a;
}
.todays-highlights .sunset {
  background-color: #1d213a;
}
.todays-highlights .moon-illumination {
  background-color: #1d213a;
  grid-column-start: 1;
  grid-column-end: 3;
}`, "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAIA;EACI,sBAAA;EACA,SAAA;EACA,UAAA;AAHJ;;AAMA;EACI,yBAVM;AAOV;;AAMA;EACE,YAbU;AAUZ;;AAMA;EACE,YAjBU;AAcZ;;AAQA;EAEE,yBA1Bc;EA2Bd,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,2BAAA;AANF;AAQE;EACE,aAAA;EACA,UAAA;AANJ;AASE;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;AAPJ;AAQI;EACE,cAAA;AANN;AAUE;EACE,iBAAA;AARJ;AAWE;EACE,gBAAA;AATJ;AAYE;EACE,cAAA;AAVJ;;AAcA;EACE,yBA7Dc;EA8Dd,2BAAA;AAXF;AAaE;EACE,aAAA;EACA,8BAAA;EACA,mBAAA;AAXJ;AAcE;EACE,cAAA;AAZJ;AAeE;EACE,SAAA;EACA,eAAA;AAbJ;;AAiBA;EACE,2BAAA;EACA,kBAAA;AAdF;AAgBE;EACE,YAAA;AAdJ;AAiBE;EAEA,aAAA;EACA,qCAAA;EACA,SAAA;AAhBF;AAqBA;EACE,yBAlGc;AA+EhB;AAqBA;EACE,yBArGc;AAkFhB;AAsBA;EACE,yBAzGc;AAqFhB;AAuBA;EACE,yBA7Gc;AAwFhB;AAwBA;EACE,yBAjHc;AA2FhB;AAyBA;EACE,yBArHc;AA8FhB;AA0BA;EACE,yBAzHc;EA0Hd,oBAAA;EACA,kBAAA;AAxBF","sourcesContent":["$section-color: #1d213a;\n$bgcolor: #151623;\n$fontcolor: white;\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n\nbody{\n    background-color: $bgcolor;\n}\n\np{\n  color: $fontcolor;\n}\n\nh1{\n  color: $fontcolor;\n}\n\n\n\n.main-content-div{\n\n  background-color: $section-color;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 20px 20px 20px 20px;\n\n  .min-max-div{\n    display: flex;\n    gap: 1.5em;\n  }\n\n  .location-div{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    .map-marker{\n      max-width: 30%;\n    }\n  }\n\n  .degrees{\n    font-size: 2.5rem;\n  }\n\n  .my-location{\n    font-size: 1.5em;\n  }\n  \n  .weather-condition-image{\n    max-width: 20%;\n  }\n}\n\n.weather-prognose{\n  background-color: $section-color;\n  margin: 20px 20px 20px 20px;\n\n  .day-prognose{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n\n  .weather-condition-image{\n    max-width: 10%;\n  }\n\n  .day-prognose p {\n    margin: 0;\n    padding: 0 10px;\n  }\n}\n\n.todays-highlights{\n  margin: 20px 20px 20px 20px;\n  text-align: center;\n  \n  .highlights-headline{\n    margin: 10px;\n  }\n\n  .highlights-grid{\n\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 10px;\n    \n  }\n\n  \n.wind{\n  background-color: $section-color;\n}\n.humidity{\n  background-color: $section-color;\n}\n\n.feels-like{\n  background-color: $section-color;\n}\n\n.precipitation{\n  background-color: $section-color;\n}\n\n.sunrise{\n  background-color: $section-color;\n}\n\n.sunset{\n  background-color: $section-color;\n}\n\n.moon-illumination{\n  background-color: $section-color;\n  grid-column-start: 1;\n  grid-column-end: 3;\n}\n\n}\n"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/components/highlightSection.js":
/*!********************************************!*\
  !*** ./src/components/highlightSection.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createTodaysHighlightsSection(apiData) {
  const contentDiv = document.getElementById('content');

  const todaysHighlightsDiv = document.createElement('div');
  todaysHighlightsDiv.classList.add('todays-highlights');

  const gridDiv = document.createElement('div');
  gridDiv.classList.add('highlights-grid');

  const headline = document.createElement('h1');
  headline.classList.add('highlights-headline');
  headline.textContent = 'Todays Highlights';

  todaysHighlightsDiv.appendChild(headline);

  const windDiv = document.createElement('div');
  windDiv.classList.add('wind');

  const windHeadline = document.createElement('p');
  windHeadline.textContent = 'Wind Status in km/h';

  windDiv.appendChild(windHeadline);

  const windParagraph = document.createElement('h1');
  windParagraph.textContent = `${apiData.forecast.forecastday[0].day.maxwind_kph} km/h`;

  windDiv.appendChild(windParagraph);

  gridDiv.appendChild(windDiv);

  const humidityDiv = document.createElement('div');
  humidityDiv.classList.add('humidity');

  const humidityHeadline = document.createElement('p');
  humidityHeadline.textContent = 'Humidity in %';

  humidityDiv.appendChild(humidityHeadline);

  const humidityParagraph = document.createElement('h1');
  humidityParagraph.textContent = `${apiData.forecast.forecastday[0].day.avghumidity} %`;

  humidityDiv.appendChild(humidityParagraph);

  gridDiv.appendChild(humidityDiv);

  const feelsLikeDiv = document.createElement('div');
  feelsLikeDiv.classList.add('feels-like');

  const feelsLikeHeadline = document.createElement('p');
  feelsLikeHeadline.textContent = 'Currently Feels Like';

  feelsLikeDiv.appendChild(feelsLikeHeadline);

  const feelsLikeParagraph = document.createElement('h1');
  feelsLikeParagraph.textContent = `${apiData.current.feelslike_c} °C`;

  feelsLikeDiv.appendChild(feelsLikeParagraph);

  gridDiv.appendChild(feelsLikeDiv);

  const precipitationDiv = document.createElement('div');
  precipitationDiv.classList.add('precipitation');

  const precipitationHeadline = document.createElement('p');
  precipitationHeadline.textContent = 'Chance of Rain in %';

  precipitationDiv.appendChild(precipitationHeadline);

  const precipitationParagraph = document.createElement('h1');
  precipitationParagraph.textContent = `${apiData.forecast.forecastday[0].day.daily_chance_of_rain} %`;

  precipitationDiv.appendChild(precipitationParagraph);

  gridDiv.appendChild(precipitationDiv);

  const sunriseDiv = document.createElement('div');
  sunriseDiv.classList.add('sunrise');

  const sunriseHeadline = document.createElement('p');
  sunriseHeadline.textContent = 'Sunrise';

  sunriseDiv.appendChild(sunriseHeadline);

  const sunriseParagraph = document.createElement('h1');
  sunriseParagraph.textContent = apiData.forecast.forecastday[0].astro.sunrise;

  sunriseDiv.appendChild(sunriseParagraph);

  gridDiv.appendChild(sunriseDiv);

  const sunsetDiv = document.createElement('div');
  sunsetDiv.classList.add('sunset');

  const sunsetHeadline = document.createElement('p');
  sunsetHeadline.textContent = 'Sunset';

  sunsetDiv.appendChild(sunsetHeadline);

  const sunsetParagraph = document.createElement('h1');
  sunsetParagraph.textContent = apiData.forecast.forecastday[0].astro.sunset;

  sunsetDiv.appendChild(sunsetParagraph);

  gridDiv.appendChild(sunsetDiv);

  const moonIlluminationDiv = document.createElement('div');
  moonIlluminationDiv.classList.add('moon-illumination');

  const moonIlluminationHeadline = document.createElement('p');
  moonIlluminationHeadline.textContent = 'Moon Illumination in %';

  moonIlluminationDiv.appendChild(moonIlluminationHeadline);

  const moonIlluminationParagraph = document.createElement('h1');
  moonIlluminationParagraph.textContent = `${apiData.forecast.forecastday[0].astro.moon_illumination} %`;

  moonIlluminationDiv.appendChild(moonIlluminationParagraph);

  gridDiv.appendChild(moonIlluminationDiv);

  todaysHighlightsDiv.appendChild(gridDiv);

  contentDiv.appendChild(todaysHighlightsDiv);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTodaysHighlightsSection);


/***/ }),

/***/ "./src/components/mainSection.js":
/*!***************************************!*\
  !*** ./src/components/mainSection.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_map_marker_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/map-marker.svg */ "./src/assets/map-marker.svg");


function createMainSection(apiData, forecastApiData) {
  const contentDiv = document.getElementById('content');

  const mainContentDiv = document.createElement('div');
  mainContentDiv.classList.add('main-content-div');

  const myLocationTitle = document.createElement('h1');
  myLocationTitle.classList.add('my-location');
  myLocationTitle.textContent = 'My Location';

  mainContentDiv.appendChild(myLocationTitle);

  const weatherImage = new Image();
  weatherImage.src = apiData.current.condition.icon;
  weatherImage.classList.add('weather-condition-image');

  mainContentDiv.appendChild(weatherImage);

  const locationDiv = document.createElement('div');
  locationDiv.classList.add('location-div');

  const mapMarkerImage = new Image();
  mapMarkerImage.src = _assets_map_marker_svg__WEBPACK_IMPORTED_MODULE_0__;
  mapMarkerImage.classList.add('map-marker');

  locationDiv.appendChild(mapMarkerImage);

  const locationParagraph = document.createElement('p');
  locationParagraph.classList.add('location');
  locationParagraph.textContent = apiData.location.name;

  locationDiv.appendChild(locationParagraph);

  mainContentDiv.appendChild(locationDiv);

  const degreeParagraph = document.createElement('p');
  degreeParagraph.classList.add('degrees');
  degreeParagraph.textContent = `${apiData.current.temp_c}°C`;

  mainContentDiv.appendChild(degreeParagraph);

  const weatherConditionsParagraph = document.createElement('p');
  weatherConditionsParagraph.classList.add('weather-conditions');
  weatherConditionsParagraph.textContent = apiData.current.condition.text;

  mainContentDiv.appendChild(weatherConditionsParagraph);

  const minMaxDiv = document.createElement('div');
  minMaxDiv.classList.add('min-max-div');

  const minimumParagraph = document.createElement('p');
  minimumParagraph.classList.add('min-degrees');
  minimumParagraph.textContent = `Min: ${forecastApiData.forecast.forecastday[0].day.mintemp_c}°C`;

  minMaxDiv.appendChild(minimumParagraph);

  const maximumParagraph = document.createElement('p');
  maximumParagraph.classList.add('max-degrees');
  maximumParagraph.textContent = `Max: ${forecastApiData.forecast.forecastday[0].day.maxtemp_c}°C`;

  minMaxDiv.appendChild(maximumParagraph);

  mainContentDiv.appendChild(minMaxDiv);

  contentDiv.appendChild(mainContentDiv);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMainSection);


/***/ }),

/***/ "./src/components/prognoseSection.js":
/*!*******************************************!*\
  !*** ./src/components/prognoseSection.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createWeatherPrognoseSection(forecastApiData) {
  const contentDiv = document.getElementById('content');

  const weatherPrognoseDiv = document.createElement('div');
  weatherPrognoseDiv.classList.add('weather-prognose');

  const day1PrognoseDiv = document.createElement('div');
  day1PrognoseDiv.classList.add('day-prognose');

  const day1Paragraph = document.createElement('p');
  day1Paragraph.textContent = 'Day 1';

  day1PrognoseDiv.appendChild(day1Paragraph);

  const weatherImage = new Image();
  weatherImage.src = forecastApiData.forecast.forecastday[0].day.condition.icon;
  weatherImage.classList.add('weather-condition-image');

  day1PrognoseDiv.appendChild(weatherImage);

  const day1MaxTemp = document.createElement('p');
  day1MaxTemp.textContent = `${forecastApiData.forecast.forecastday[0].day.maxtemp_c}°C`;

  day1PrognoseDiv.appendChild(day1MaxTemp);

  const day1MinTemp = document.createElement('p');
  day1MinTemp.textContent = `${forecastApiData.forecast.forecastday[0].day.mintemp_c}°C`;

  day1PrognoseDiv.appendChild(day1MinTemp);

  weatherPrognoseDiv.appendChild(day1PrognoseDiv);

  const day2PrognoseDiv = document.createElement('div');
  day2PrognoseDiv.classList.add('day-prognose');

  const day2Paragraph = document.createElement('p');
  day2Paragraph.textContent = 'Day 2';

  day2PrognoseDiv.appendChild(day2Paragraph);

  const weatherImage2 = new Image();
  weatherImage2.src = forecastApiData.forecast.forecastday[1].day.condition.icon;
  weatherImage2.classList.add('weather-condition-image');

  day2PrognoseDiv.appendChild(weatherImage2);

  const day2MaxTemp = document.createElement('p');
  day2MaxTemp.textContent = `${forecastApiData.forecast.forecastday[1].day.maxtemp_c}°C`;

  day2PrognoseDiv.appendChild(day2MaxTemp);

  const day2MinTemp = document.createElement('p');
  day2MinTemp.textContent = `${forecastApiData.forecast.forecastday[1].day.mintemp_c}°C`;

  day2PrognoseDiv.appendChild(day2MinTemp);

  weatherPrognoseDiv.appendChild(day2PrognoseDiv);

  const day3PrognoseDiv = document.createElement('div');
  day3PrognoseDiv.classList.add('day-prognose');

  const day3Paragraph = document.createElement('p');
  day3Paragraph.textContent = 'Day 3';

  day3PrognoseDiv.appendChild(day3Paragraph);

  const weatherImage3 = new Image();
  weatherImage3.src = forecastApiData.forecast.forecastday[2].day.condition.icon;
  weatherImage3.classList.add('weather-condition-image');

  day3PrognoseDiv.appendChild(weatherImage3);

  const day3MaxTemp = document.createElement('p');
  day3MaxTemp.textContent = `${forecastApiData.forecast.forecastday[2].day.maxtemp_c}°C`;

  day3PrognoseDiv.appendChild(day3MaxTemp);

  const day3MinTemp = document.createElement('p');
  day3MinTemp.textContent = `${forecastApiData.forecast.forecastday[2].day.mintemp_c}°C`;

  day3PrognoseDiv.appendChild(day3MinTemp);

  weatherPrognoseDiv.appendChild(day3PrognoseDiv);

  contentDiv.appendChild(weatherPrognoseDiv);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createWeatherPrognoseSection);


/***/ }),

/***/ "./src/functions/fetchCurrentWeather.js":
/*!**********************************************!*\
  !*** ./src/functions/fetchCurrentWeather.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
async function fetchCurrentWeather() {
  try {
    const response = await fetch('https://api.weatherapi.com/v1/current.json?key=5ef2cc7df56f4d9494d203100242002&q=karlsruhe', { mode: 'cors' });
    if (!response.ok) {
      throw new Error('something went wrong');
    }
    const responseData = await response.json();
    console.log(responseData);
    return responseData;
  } catch (error) {
    console.log(error.message);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchCurrentWeather);


/***/ }),

/***/ "./src/functions/fetchWeatherForecast.js":
/*!***********************************************!*\
  !*** ./src/functions/fetchWeatherForecast.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
async function fetchWeatherForecast() {
  try {
    const response = await fetch('https://api.weatherapi.com/v1/forecast.json?key=5ef2cc7df56f4d9494d203100242002&q=karlsruhe&days=3', { mode: 'cors' });
    if (!response.ok) {
      throw new Error('something went wrong');
    }
    const responseData = await response.json();
    console.log(responseData);
    return responseData;
  } catch (error) {
    console.log(error.message);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchWeatherForecast);


/***/ }),

/***/ "./src/assets/map-marker.svg":
/*!***********************************!*\
  !*** ./src/assets/map-marker.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9307c19cf2ce7ca1b033.svg";

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _components_mainSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/mainSection */ "./src/components/mainSection.js");
/* harmony import */ var _components_prognoseSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/prognoseSection */ "./src/components/prognoseSection.js");
/* harmony import */ var _components_highlightSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/highlightSection */ "./src/components/highlightSection.js");
/* harmony import */ var _functions_fetchCurrentWeather__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./functions/fetchCurrentWeather */ "./src/functions/fetchCurrentWeather.js");
/* harmony import */ var _functions_fetchWeatherForecast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./functions/fetchWeatherForecast */ "./src/functions/fetchWeatherForecast.js");







async function runCode() {
  const apiDataCurrent = await (0,_functions_fetchCurrentWeather__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const apiDataForecast = await (0,_functions_fetchWeatherForecast__WEBPACK_IMPORTED_MODULE_5__["default"])();
  (0,_components_mainSection__WEBPACK_IMPORTED_MODULE_1__["default"])(apiDataCurrent, apiDataForecast);
  (0,_components_prognoseSection__WEBPACK_IMPORTED_MODULE_2__["default"])(apiDataForecast);
  (0,_components_highlightSection__WEBPACK_IMPORTED_MODULE_3__["default"])(apiDataForecast);
}

runCode();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QW1CLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ2RuQztBQUNBO0FBQ0EseUlBQXlJLGNBQWM7QUFDdko7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxvQkFBb0IsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNkcEM7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FzQjtBQUNtQztBQUNlO0FBQ0U7QUFDUjtBQUNFOztBQUVwRTtBQUNBLCtCQUErQiwwRUFBbUI7QUFDbEQsZ0NBQWdDLDJFQUFvQjtBQUNwRCxFQUFFLG1FQUFpQjtBQUNuQixFQUFFLHVFQUE0QjtBQUM5QixFQUFFLHdFQUE2QjtBQUMvQjs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuc2Nzcz83NWJhIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy9oaWdobGlnaHRTZWN0aW9uLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvbWFpblNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy9wcm9nbm9zZVNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZnVuY3Rpb25zL2ZldGNoQ3VycmVudFdlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZnVuY3Rpb25zL2ZldGNoV2VhdGhlckZvcmVjYXN0LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTUxNjIzO1xufVxuXG5wIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5oMSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm1haW4tY29udGVudC1kaXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQyMTNhO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAyMHB4IDIwcHggMjBweCAyMHB4O1xufVxuLm1haW4tY29udGVudC1kaXYgLm1pbi1tYXgtZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxLjVlbTtcbn1cbi5tYWluLWNvbnRlbnQtZGl2IC5sb2NhdGlvbi1kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5tYWluLWNvbnRlbnQtZGl2IC5sb2NhdGlvbi1kaXYgLm1hcC1tYXJrZXIge1xuICBtYXgtd2lkdGg6IDMwJTtcbn1cbi5tYWluLWNvbnRlbnQtZGl2IC5kZWdyZWVzIHtcbiAgZm9udC1zaXplOiAyLjVyZW07XG59XG4ubWFpbi1jb250ZW50LWRpdiAubXktbG9jYXRpb24ge1xuICBmb250LXNpemU6IDEuNWVtO1xufVxuLm1haW4tY29udGVudC1kaXYgLndlYXRoZXItY29uZGl0aW9uLWltYWdlIHtcbiAgbWF4LXdpZHRoOiAyMCU7XG59XG5cbi53ZWF0aGVyLXByb2dub3NlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFkMjEzYTtcbiAgbWFyZ2luOiAyMHB4IDIwcHggMjBweCAyMHB4O1xufVxuLndlYXRoZXItcHJvZ25vc2UgLmRheS1wcm9nbm9zZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi53ZWF0aGVyLXByb2dub3NlIC53ZWF0aGVyLWNvbmRpdGlvbi1pbWFnZSB7XG4gIG1heC13aWR0aDogMTAlO1xufVxuLndlYXRoZXItcHJvZ25vc2UgLmRheS1wcm9nbm9zZSBwIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG5cbi50b2RheXMtaGlnaGxpZ2h0cyB7XG4gIG1hcmdpbjogMjBweCAyMHB4IDIwcHggMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnRvZGF5cy1oaWdobGlnaHRzIC5oaWdobGlnaHRzLWhlYWRsaW5lIHtcbiAgbWFyZ2luOiAxMHB4O1xufVxuLnRvZGF5cy1oaWdobGlnaHRzIC5oaWdobGlnaHRzLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICBnYXA6IDEwcHg7XG59XG4udG9kYXlzLWhpZ2hsaWdodHMgLndpbmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQyMTNhO1xufVxuLnRvZGF5cy1oaWdobGlnaHRzIC5odW1pZGl0eSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZDIxM2E7XG59XG4udG9kYXlzLWhpZ2hsaWdodHMgLmZlZWxzLWxpa2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQyMTNhO1xufVxuLnRvZGF5cy1oaWdobGlnaHRzIC5wcmVjaXBpdGF0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFkMjEzYTtcbn1cbi50b2RheXMtaGlnaGxpZ2h0cyAuc3VucmlzZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZDIxM2E7XG59XG4udG9kYXlzLWhpZ2hsaWdodHMgLnN1bnNldCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZDIxM2E7XG59XG4udG9kYXlzLWhpZ2hsaWdodHMgLm1vb24taWxsdW1pbmF0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFkMjEzYTtcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gIGdyaWQtY29sdW1uLWVuZDogMztcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUlBO0VBQ0ksc0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUhKOztBQU1BO0VBQ0kseUJBVk07QUFPVjs7QUFNQTtFQUNFLFlBYlU7QUFVWjs7QUFNQTtFQUNFLFlBakJVO0FBY1o7O0FBUUE7RUFFRSx5QkExQmM7RUEyQmQsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0FBTkY7QUFRRTtFQUNFLGFBQUE7RUFDQSxVQUFBO0FBTko7QUFTRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBUEo7QUFRSTtFQUNFLGNBQUE7QUFOTjtBQVVFO0VBQ0UsaUJBQUE7QUFSSjtBQVdFO0VBQ0UsZ0JBQUE7QUFUSjtBQVlFO0VBQ0UsY0FBQTtBQVZKOztBQWNBO0VBQ0UseUJBN0RjO0VBOERkLDJCQUFBO0FBWEY7QUFhRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBWEo7QUFjRTtFQUNFLGNBQUE7QUFaSjtBQWVFO0VBQ0UsU0FBQTtFQUNBLGVBQUE7QUFiSjs7QUFpQkE7RUFDRSwyQkFBQTtFQUNBLGtCQUFBO0FBZEY7QUFnQkU7RUFDRSxZQUFBO0FBZEo7QUFpQkU7RUFFQSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxTQUFBO0FBaEJGO0FBcUJBO0VBQ0UseUJBbEdjO0FBK0VoQjtBQXFCQTtFQUNFLHlCQXJHYztBQWtGaEI7QUFzQkE7RUFDRSx5QkF6R2M7QUFxRmhCO0FBdUJBO0VBQ0UseUJBN0djO0FBd0ZoQjtBQXdCQTtFQUNFLHlCQWpIYztBQTJGaEI7QUF5QkE7RUFDRSx5QkFySGM7QUE4RmhCO0FBMEJBO0VBQ0UseUJBekhjO0VBMEhkLG9CQUFBO0VBQ0Esa0JBQUE7QUF4QkZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiJHNlY3Rpb24tY29sb3I6ICMxZDIxM2E7XFxuJGJnY29sb3I6ICMxNTE2MjM7XFxuJGZvbnRjb2xvcjogd2hpdGU7XFxuXFxuKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gIH1cXG5cXG5ib2R5e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmdjb2xvcjtcXG59XFxuXFxucHtcXG4gIGNvbG9yOiAkZm9udGNvbG9yO1xcbn1cXG5cXG5oMXtcXG4gIGNvbG9yOiAkZm9udGNvbG9yO1xcbn1cXG5cXG5cXG5cXG4ubWFpbi1jb250ZW50LWRpdntcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6ICRzZWN0aW9uLWNvbG9yO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDIwcHggMjBweCAyMHB4IDIwcHg7XFxuXFxuICAubWluLW1heC1kaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMS41ZW07XFxuICB9XFxuXFxuICAubG9jYXRpb24tZGl2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgLm1hcC1tYXJrZXJ7XFxuICAgICAgbWF4LXdpZHRoOiAzMCU7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5kZWdyZWVze1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gIH1cXG5cXG4gIC5teS1sb2NhdGlvbntcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gIH1cXG4gIFxcbiAgLndlYXRoZXItY29uZGl0aW9uLWltYWdle1xcbiAgICBtYXgtd2lkdGg6IDIwJTtcXG4gIH1cXG59XFxuXFxuLndlYXRoZXItcHJvZ25vc2V7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2VjdGlvbi1jb2xvcjtcXG4gIG1hcmdpbjogMjBweCAyMHB4IDIwcHggMjBweDtcXG5cXG4gIC5kYXktcHJvZ25vc2V7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC53ZWF0aGVyLWNvbmRpdGlvbi1pbWFnZXtcXG4gICAgbWF4LXdpZHRoOiAxMCU7XFxuICB9XFxuXFxuICAuZGF5LXByb2dub3NlIHAge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDAgMTBweDtcXG4gIH1cXG59XFxuXFxuLnRvZGF5cy1oaWdobGlnaHRze1xcbiAgbWFyZ2luOiAyMHB4IDIwcHggMjBweCAyMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgXFxuICAuaGlnaGxpZ2h0cy1oZWFkbGluZXtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgfVxcblxcbiAgLmhpZ2hsaWdodHMtZ3JpZHtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgZ2FwOiAxMHB4O1xcbiAgICBcXG4gIH1cXG5cXG4gIFxcbi53aW5ke1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNlY3Rpb24tY29sb3I7XFxufVxcbi5odW1pZGl0eXtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRzZWN0aW9uLWNvbG9yO1xcbn1cXG5cXG4uZmVlbHMtbGlrZXtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRzZWN0aW9uLWNvbG9yO1xcbn1cXG5cXG4ucHJlY2lwaXRhdGlvbntcXG4gIGJhY2tncm91bmQtY29sb3I6ICRzZWN0aW9uLWNvbG9yO1xcbn1cXG5cXG4uc3VucmlzZXtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRzZWN0aW9uLWNvbG9yO1xcbn1cXG5cXG4uc3Vuc2V0e1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNlY3Rpb24tY29sb3I7XFxufVxcblxcbi5tb29uLWlsbHVtaW5hdGlvbntcXG4gIGJhY2tncm91bmQtY29sb3I6ICRzZWN0aW9uLWNvbG9yO1xcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICBncmlkLWNvbHVtbi1lbmQ6IDM7XFxufVxcblxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImZ1bmN0aW9uIGNyZWF0ZVRvZGF5c0hpZ2hsaWdodHNTZWN0aW9uKGFwaURhdGEpIHtcbiAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgY29uc3QgdG9kYXlzSGlnaGxpZ2h0c0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b2RheXNIaWdobGlnaHRzRGl2LmNsYXNzTGlzdC5hZGQoJ3RvZGF5cy1oaWdobGlnaHRzJyk7XG5cbiAgY29uc3QgZ3JpZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBncmlkRGl2LmNsYXNzTGlzdC5hZGQoJ2hpZ2hsaWdodHMtZ3JpZCcpO1xuXG4gIGNvbnN0IGhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgaGVhZGxpbmUuY2xhc3NMaXN0LmFkZCgnaGlnaGxpZ2h0cy1oZWFkbGluZScpO1xuICBoZWFkbGluZS50ZXh0Q29udGVudCA9ICdUb2RheXMgSGlnaGxpZ2h0cyc7XG5cbiAgdG9kYXlzSGlnaGxpZ2h0c0Rpdi5hcHBlbmRDaGlsZChoZWFkbGluZSk7XG5cbiAgY29uc3Qgd2luZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB3aW5kRGl2LmNsYXNzTGlzdC5hZGQoJ3dpbmQnKTtcblxuICBjb25zdCB3aW5kSGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHdpbmRIZWFkbGluZS50ZXh0Q29udGVudCA9ICdXaW5kIFN0YXR1cyBpbiBrbS9oJztcblxuICB3aW5kRGl2LmFwcGVuZENoaWxkKHdpbmRIZWFkbGluZSk7XG5cbiAgY29uc3Qgd2luZFBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIHdpbmRQYXJhZ3JhcGgudGV4dENvbnRlbnQgPSBgJHthcGlEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5tYXh3aW5kX2twaH0ga20vaGA7XG5cbiAgd2luZERpdi5hcHBlbmRDaGlsZCh3aW5kUGFyYWdyYXBoKTtcblxuICBncmlkRGl2LmFwcGVuZENoaWxkKHdpbmREaXYpO1xuXG4gIGNvbnN0IGh1bWlkaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGh1bWlkaXR5RGl2LmNsYXNzTGlzdC5hZGQoJ2h1bWlkaXR5Jyk7XG5cbiAgY29uc3QgaHVtaWRpdHlIZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgaHVtaWRpdHlIZWFkbGluZS50ZXh0Q29udGVudCA9ICdIdW1pZGl0eSBpbiAlJztcblxuICBodW1pZGl0eURpdi5hcHBlbmRDaGlsZChodW1pZGl0eUhlYWRsaW5lKTtcblxuICBjb25zdCBodW1pZGl0eVBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGh1bWlkaXR5UGFyYWdyYXBoLnRleHRDb250ZW50ID0gYCR7YXBpRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkuYXZnaHVtaWRpdHl9ICVgO1xuXG4gIGh1bWlkaXR5RGl2LmFwcGVuZENoaWxkKGh1bWlkaXR5UGFyYWdyYXBoKTtcblxuICBncmlkRGl2LmFwcGVuZENoaWxkKGh1bWlkaXR5RGl2KTtcblxuICBjb25zdCBmZWVsc0xpa2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZmVlbHNMaWtlRGl2LmNsYXNzTGlzdC5hZGQoJ2ZlZWxzLWxpa2UnKTtcblxuICBjb25zdCBmZWVsc0xpa2VIZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZmVlbHNMaWtlSGVhZGxpbmUudGV4dENvbnRlbnQgPSAnQ3VycmVudGx5IEZlZWxzIExpa2UnO1xuXG4gIGZlZWxzTGlrZURpdi5hcHBlbmRDaGlsZChmZWVsc0xpa2VIZWFkbGluZSk7XG5cbiAgY29uc3QgZmVlbHNMaWtlUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgZmVlbHNMaWtlUGFyYWdyYXBoLnRleHRDb250ZW50ID0gYCR7YXBpRGF0YS5jdXJyZW50LmZlZWxzbGlrZV9jfSDCsENgO1xuXG4gIGZlZWxzTGlrZURpdi5hcHBlbmRDaGlsZChmZWVsc0xpa2VQYXJhZ3JhcGgpO1xuXG4gIGdyaWREaXYuYXBwZW5kQ2hpbGQoZmVlbHNMaWtlRGl2KTtcblxuICBjb25zdCBwcmVjaXBpdGF0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHByZWNpcGl0YXRpb25EaXYuY2xhc3NMaXN0LmFkZCgncHJlY2lwaXRhdGlvbicpO1xuXG4gIGNvbnN0IHByZWNpcGl0YXRpb25IZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcHJlY2lwaXRhdGlvbkhlYWRsaW5lLnRleHRDb250ZW50ID0gJ0NoYW5jZSBvZiBSYWluIGluICUnO1xuXG4gIHByZWNpcGl0YXRpb25EaXYuYXBwZW5kQ2hpbGQocHJlY2lwaXRhdGlvbkhlYWRsaW5lKTtcblxuICBjb25zdCBwcmVjaXBpdGF0aW9uUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgcHJlY2lwaXRhdGlvblBhcmFncmFwaC50ZXh0Q29udGVudCA9IGAke2FwaURhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5LmRhaWx5X2NoYW5jZV9vZl9yYWlufSAlYDtcblxuICBwcmVjaXBpdGF0aW9uRGl2LmFwcGVuZENoaWxkKHByZWNpcGl0YXRpb25QYXJhZ3JhcGgpO1xuXG4gIGdyaWREaXYuYXBwZW5kQ2hpbGQocHJlY2lwaXRhdGlvbkRpdik7XG5cbiAgY29uc3Qgc3VucmlzZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzdW5yaXNlRGl2LmNsYXNzTGlzdC5hZGQoJ3N1bnJpc2UnKTtcblxuICBjb25zdCBzdW5yaXNlSGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHN1bnJpc2VIZWFkbGluZS50ZXh0Q29udGVudCA9ICdTdW5yaXNlJztcblxuICBzdW5yaXNlRGl2LmFwcGVuZENoaWxkKHN1bnJpc2VIZWFkbGluZSk7XG5cbiAgY29uc3Qgc3VucmlzZVBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIHN1bnJpc2VQYXJhZ3JhcGgudGV4dENvbnRlbnQgPSBhcGlEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmFzdHJvLnN1bnJpc2U7XG5cbiAgc3VucmlzZURpdi5hcHBlbmRDaGlsZChzdW5yaXNlUGFyYWdyYXBoKTtcblxuICBncmlkRGl2LmFwcGVuZENoaWxkKHN1bnJpc2VEaXYpO1xuXG4gIGNvbnN0IHN1bnNldERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzdW5zZXREaXYuY2xhc3NMaXN0LmFkZCgnc3Vuc2V0Jyk7XG5cbiAgY29uc3Qgc3Vuc2V0SGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHN1bnNldEhlYWRsaW5lLnRleHRDb250ZW50ID0gJ1N1bnNldCc7XG5cbiAgc3Vuc2V0RGl2LmFwcGVuZENoaWxkKHN1bnNldEhlYWRsaW5lKTtcblxuICBjb25zdCBzdW5zZXRQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBzdW5zZXRQYXJhZ3JhcGgudGV4dENvbnRlbnQgPSBhcGlEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmFzdHJvLnN1bnNldDtcblxuICBzdW5zZXREaXYuYXBwZW5kQ2hpbGQoc3Vuc2V0UGFyYWdyYXBoKTtcblxuICBncmlkRGl2LmFwcGVuZENoaWxkKHN1bnNldERpdik7XG5cbiAgY29uc3QgbW9vbklsbHVtaW5hdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtb29uSWxsdW1pbmF0aW9uRGl2LmNsYXNzTGlzdC5hZGQoJ21vb24taWxsdW1pbmF0aW9uJyk7XG5cbiAgY29uc3QgbW9vbklsbHVtaW5hdGlvbkhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBtb29uSWxsdW1pbmF0aW9uSGVhZGxpbmUudGV4dENvbnRlbnQgPSAnTW9vbiBJbGx1bWluYXRpb24gaW4gJSc7XG5cbiAgbW9vbklsbHVtaW5hdGlvbkRpdi5hcHBlbmRDaGlsZChtb29uSWxsdW1pbmF0aW9uSGVhZGxpbmUpO1xuXG4gIGNvbnN0IG1vb25JbGx1bWluYXRpb25QYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBtb29uSWxsdW1pbmF0aW9uUGFyYWdyYXBoLnRleHRDb250ZW50ID0gYCR7YXBpRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5hc3Ryby5tb29uX2lsbHVtaW5hdGlvbn0gJWA7XG5cbiAgbW9vbklsbHVtaW5hdGlvbkRpdi5hcHBlbmRDaGlsZChtb29uSWxsdW1pbmF0aW9uUGFyYWdyYXBoKTtcblxuICBncmlkRGl2LmFwcGVuZENoaWxkKG1vb25JbGx1bWluYXRpb25EaXYpO1xuXG4gIHRvZGF5c0hpZ2hsaWdodHNEaXYuYXBwZW5kQ2hpbGQoZ3JpZERpdik7XG5cbiAgY29udGVudERpdi5hcHBlbmRDaGlsZCh0b2RheXNIaWdobGlnaHRzRGl2KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlVG9kYXlzSGlnaGxpZ2h0c1NlY3Rpb247XG4iLCJpbXBvcnQgbWFwTWFya2VySWNvbiBmcm9tICcuLi9hc3NldHMvbWFwLW1hcmtlci5zdmcnO1xuXG5mdW5jdGlvbiBjcmVhdGVNYWluU2VjdGlvbihhcGlEYXRhLCBmb3JlY2FzdEFwaURhdGEpIHtcbiAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgY29uc3QgbWFpbkNvbnRlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWFpbkNvbnRlbnREaXYuY2xhc3NMaXN0LmFkZCgnbWFpbi1jb250ZW50LWRpdicpO1xuXG4gIGNvbnN0IG15TG9jYXRpb25UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIG15TG9jYXRpb25UaXRsZS5jbGFzc0xpc3QuYWRkKCdteS1sb2NhdGlvbicpO1xuICBteUxvY2F0aW9uVGl0bGUudGV4dENvbnRlbnQgPSAnTXkgTG9jYXRpb24nO1xuXG4gIG1haW5Db250ZW50RGl2LmFwcGVuZENoaWxkKG15TG9jYXRpb25UaXRsZSk7XG5cbiAgY29uc3Qgd2VhdGhlckltYWdlID0gbmV3IEltYWdlKCk7XG4gIHdlYXRoZXJJbWFnZS5zcmMgPSBhcGlEYXRhLmN1cnJlbnQuY29uZGl0aW9uLmljb247XG4gIHdlYXRoZXJJbWFnZS5jbGFzc0xpc3QuYWRkKCd3ZWF0aGVyLWNvbmRpdGlvbi1pbWFnZScpO1xuXG4gIG1haW5Db250ZW50RGl2LmFwcGVuZENoaWxkKHdlYXRoZXJJbWFnZSk7XG5cbiAgY29uc3QgbG9jYXRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbG9jYXRpb25EaXYuY2xhc3NMaXN0LmFkZCgnbG9jYXRpb24tZGl2Jyk7XG5cbiAgY29uc3QgbWFwTWFya2VySW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgbWFwTWFya2VySW1hZ2Uuc3JjID0gbWFwTWFya2VySWNvbjtcbiAgbWFwTWFya2VySW1hZ2UuY2xhc3NMaXN0LmFkZCgnbWFwLW1hcmtlcicpO1xuXG4gIGxvY2F0aW9uRGl2LmFwcGVuZENoaWxkKG1hcE1hcmtlckltYWdlKTtcblxuICBjb25zdCBsb2NhdGlvblBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbG9jYXRpb25QYXJhZ3JhcGguY2xhc3NMaXN0LmFkZCgnbG9jYXRpb24nKTtcbiAgbG9jYXRpb25QYXJhZ3JhcGgudGV4dENvbnRlbnQgPSBhcGlEYXRhLmxvY2F0aW9uLm5hbWU7XG5cbiAgbG9jYXRpb25EaXYuYXBwZW5kQ2hpbGQobG9jYXRpb25QYXJhZ3JhcGgpO1xuXG4gIG1haW5Db250ZW50RGl2LmFwcGVuZENoaWxkKGxvY2F0aW9uRGl2KTtcblxuICBjb25zdCBkZWdyZWVQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGRlZ3JlZVBhcmFncmFwaC5jbGFzc0xpc3QuYWRkKCdkZWdyZWVzJyk7XG4gIGRlZ3JlZVBhcmFncmFwaC50ZXh0Q29udGVudCA9IGAke2FwaURhdGEuY3VycmVudC50ZW1wX2N9wrBDYDtcblxuICBtYWluQ29udGVudERpdi5hcHBlbmRDaGlsZChkZWdyZWVQYXJhZ3JhcGgpO1xuXG4gIGNvbnN0IHdlYXRoZXJDb25kaXRpb25zUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICB3ZWF0aGVyQ29uZGl0aW9uc1BhcmFncmFwaC5jbGFzc0xpc3QuYWRkKCd3ZWF0aGVyLWNvbmRpdGlvbnMnKTtcbiAgd2VhdGhlckNvbmRpdGlvbnNQYXJhZ3JhcGgudGV4dENvbnRlbnQgPSBhcGlEYXRhLmN1cnJlbnQuY29uZGl0aW9uLnRleHQ7XG5cbiAgbWFpbkNvbnRlbnREaXYuYXBwZW5kQ2hpbGQod2VhdGhlckNvbmRpdGlvbnNQYXJhZ3JhcGgpO1xuXG4gIGNvbnN0IG1pbk1heERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtaW5NYXhEaXYuY2xhc3NMaXN0LmFkZCgnbWluLW1heC1kaXYnKTtcblxuICBjb25zdCBtaW5pbXVtUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBtaW5pbXVtUGFyYWdyYXBoLmNsYXNzTGlzdC5hZGQoJ21pbi1kZWdyZWVzJyk7XG4gIG1pbmltdW1QYXJhZ3JhcGgudGV4dENvbnRlbnQgPSBgTWluOiAke2ZvcmVjYXN0QXBpRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkubWludGVtcF9jfcKwQ2A7XG5cbiAgbWluTWF4RGl2LmFwcGVuZENoaWxkKG1pbmltdW1QYXJhZ3JhcGgpO1xuXG4gIGNvbnN0IG1heGltdW1QYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIG1heGltdW1QYXJhZ3JhcGguY2xhc3NMaXN0LmFkZCgnbWF4LWRlZ3JlZXMnKTtcbiAgbWF4aW11bVBhcmFncmFwaC50ZXh0Q29udGVudCA9IGBNYXg6ICR7Zm9yZWNhc3RBcGlEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5tYXh0ZW1wX2N9wrBDYDtcblxuICBtaW5NYXhEaXYuYXBwZW5kQ2hpbGQobWF4aW11bVBhcmFncmFwaCk7XG5cbiAgbWFpbkNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobWluTWF4RGl2KTtcblxuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKG1haW5Db250ZW50RGl2KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTWFpblNlY3Rpb247XG4iLCJmdW5jdGlvbiBjcmVhdGVXZWF0aGVyUHJvZ25vc2VTZWN0aW9uKGZvcmVjYXN0QXBpRGF0YSkge1xuICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICBjb25zdCB3ZWF0aGVyUHJvZ25vc2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgd2VhdGhlclByb2dub3NlRGl2LmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXItcHJvZ25vc2UnKTtcblxuICBjb25zdCBkYXkxUHJvZ25vc2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGF5MVByb2dub3NlRGl2LmNsYXNzTGlzdC5hZGQoJ2RheS1wcm9nbm9zZScpO1xuXG4gIGNvbnN0IGRheTFQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGRheTFQYXJhZ3JhcGgudGV4dENvbnRlbnQgPSAnRGF5IDEnO1xuXG4gIGRheTFQcm9nbm9zZURpdi5hcHBlbmRDaGlsZChkYXkxUGFyYWdyYXBoKTtcblxuICBjb25zdCB3ZWF0aGVySW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgd2VhdGhlckltYWdlLnNyYyA9IGZvcmVjYXN0QXBpRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkuY29uZGl0aW9uLmljb247XG4gIHdlYXRoZXJJbWFnZS5jbGFzc0xpc3QuYWRkKCd3ZWF0aGVyLWNvbmRpdGlvbi1pbWFnZScpO1xuXG4gIGRheTFQcm9nbm9zZURpdi5hcHBlbmRDaGlsZCh3ZWF0aGVySW1hZ2UpO1xuXG4gIGNvbnN0IGRheTFNYXhUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBkYXkxTWF4VGVtcC50ZXh0Q29udGVudCA9IGAke2ZvcmVjYXN0QXBpRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkubWF4dGVtcF9jfcKwQ2A7XG5cbiAgZGF5MVByb2dub3NlRGl2LmFwcGVuZENoaWxkKGRheTFNYXhUZW1wKTtcblxuICBjb25zdCBkYXkxTWluVGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZGF5MU1pblRlbXAudGV4dENvbnRlbnQgPSBgJHtmb3JlY2FzdEFwaURhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5Lm1pbnRlbXBfY33CsENgO1xuXG4gIGRheTFQcm9nbm9zZURpdi5hcHBlbmRDaGlsZChkYXkxTWluVGVtcCk7XG5cbiAgd2VhdGhlclByb2dub3NlRGl2LmFwcGVuZENoaWxkKGRheTFQcm9nbm9zZURpdik7XG5cbiAgY29uc3QgZGF5MlByb2dub3NlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRheTJQcm9nbm9zZURpdi5jbGFzc0xpc3QuYWRkKCdkYXktcHJvZ25vc2UnKTtcblxuICBjb25zdCBkYXkyUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBkYXkyUGFyYWdyYXBoLnRleHRDb250ZW50ID0gJ0RheSAyJztcblxuICBkYXkyUHJvZ25vc2VEaXYuYXBwZW5kQ2hpbGQoZGF5MlBhcmFncmFwaCk7XG5cbiAgY29uc3Qgd2VhdGhlckltYWdlMiA9IG5ldyBJbWFnZSgpO1xuICB3ZWF0aGVySW1hZ2UyLnNyYyA9IGZvcmVjYXN0QXBpRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkuY29uZGl0aW9uLmljb247XG4gIHdlYXRoZXJJbWFnZTIuY2xhc3NMaXN0LmFkZCgnd2VhdGhlci1jb25kaXRpb24taW1hZ2UnKTtcblxuICBkYXkyUHJvZ25vc2VEaXYuYXBwZW5kQ2hpbGQod2VhdGhlckltYWdlMik7XG5cbiAgY29uc3QgZGF5Mk1heFRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGRheTJNYXhUZW1wLnRleHRDb250ZW50ID0gYCR7Zm9yZWNhc3RBcGlEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS5tYXh0ZW1wX2N9wrBDYDtcblxuICBkYXkyUHJvZ25vc2VEaXYuYXBwZW5kQ2hpbGQoZGF5Mk1heFRlbXApO1xuXG4gIGNvbnN0IGRheTJNaW5UZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBkYXkyTWluVGVtcC50ZXh0Q29udGVudCA9IGAke2ZvcmVjYXN0QXBpRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkubWludGVtcF9jfcKwQ2A7XG5cbiAgZGF5MlByb2dub3NlRGl2LmFwcGVuZENoaWxkKGRheTJNaW5UZW1wKTtcblxuICB3ZWF0aGVyUHJvZ25vc2VEaXYuYXBwZW5kQ2hpbGQoZGF5MlByb2dub3NlRGl2KTtcblxuICBjb25zdCBkYXkzUHJvZ25vc2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGF5M1Byb2dub3NlRGl2LmNsYXNzTGlzdC5hZGQoJ2RheS1wcm9nbm9zZScpO1xuXG4gIGNvbnN0IGRheTNQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGRheTNQYXJhZ3JhcGgudGV4dENvbnRlbnQgPSAnRGF5IDMnO1xuXG4gIGRheTNQcm9nbm9zZURpdi5hcHBlbmRDaGlsZChkYXkzUGFyYWdyYXBoKTtcblxuICBjb25zdCB3ZWF0aGVySW1hZ2UzID0gbmV3IEltYWdlKCk7XG4gIHdlYXRoZXJJbWFnZTMuc3JjID0gZm9yZWNhc3RBcGlEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRheS5jb25kaXRpb24uaWNvbjtcbiAgd2VhdGhlckltYWdlMy5jbGFzc0xpc3QuYWRkKCd3ZWF0aGVyLWNvbmRpdGlvbi1pbWFnZScpO1xuXG4gIGRheTNQcm9nbm9zZURpdi5hcHBlbmRDaGlsZCh3ZWF0aGVySW1hZ2UzKTtcblxuICBjb25zdCBkYXkzTWF4VGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZGF5M01heFRlbXAudGV4dENvbnRlbnQgPSBgJHtmb3JlY2FzdEFwaURhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF5Lm1heHRlbXBfY33CsENgO1xuXG4gIGRheTNQcm9nbm9zZURpdi5hcHBlbmRDaGlsZChkYXkzTWF4VGVtcCk7XG5cbiAgY29uc3QgZGF5M01pblRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGRheTNNaW5UZW1wLnRleHRDb250ZW50ID0gYCR7Zm9yZWNhc3RBcGlEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRheS5taW50ZW1wX2N9wrBDYDtcblxuICBkYXkzUHJvZ25vc2VEaXYuYXBwZW5kQ2hpbGQoZGF5M01pblRlbXApO1xuXG4gIHdlYXRoZXJQcm9nbm9zZURpdi5hcHBlbmRDaGlsZChkYXkzUHJvZ25vc2VEaXYpO1xuXG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQod2VhdGhlclByb2dub3NlRGl2KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlV2VhdGhlclByb2dub3NlU2VjdGlvbjtcbiIsImFzeW5jIGZ1bmN0aW9uIGZldGNoQ3VycmVudFdlYXRoZXIoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT01ZWYyY2M3ZGY1NmY0ZDk0OTRkMjAzMTAwMjQyMDAyJnE9a2FybHNydWhlJywgeyBtb2RlOiAnY29ycycgfSk7XG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdzb21ldGhpbmcgd2VudCB3cm9uZycpO1xuICAgIH1cbiAgICBjb25zdCByZXNwb25zZURhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc29sZS5sb2cocmVzcG9uc2VEYXRhKTtcbiAgICByZXR1cm4gcmVzcG9uc2VEYXRhO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZldGNoQ3VycmVudFdlYXRoZXI7XG4iLCJhc3luYyBmdW5jdGlvbiBmZXRjaFdlYXRoZXJGb3JlY2FzdCgpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT01ZWYyY2M3ZGY1NmY0ZDk0OTRkMjAzMTAwMjQyMDAyJnE9a2FybHNydWhlJmRheXM9MycsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignc29tZXRoaW5nIHdlbnQgd3JvbmcnKTtcbiAgICB9XG4gICAgY29uc3QgcmVzcG9uc2VEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlRGF0YSk7XG4gICAgcmV0dXJuIHJlc3BvbnNlRGF0YTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmZXRjaFdlYXRoZXJGb3JlY2FzdDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5pbXBvcnQgY3JlYXRlTWFpblNlY3Rpb24gZnJvbSAnLi9jb21wb25lbnRzL21haW5TZWN0aW9uJztcbmltcG9ydCBjcmVhdGVXZWF0aGVyUHJvZ25vc2VTZWN0aW9uIGZyb20gJy4vY29tcG9uZW50cy9wcm9nbm9zZVNlY3Rpb24nO1xuaW1wb3J0IGNyZWF0ZVRvZGF5c0hpZ2hsaWdodHNTZWN0aW9uIGZyb20gJy4vY29tcG9uZW50cy9oaWdobGlnaHRTZWN0aW9uJztcbmltcG9ydCBmZXRjaEN1cnJlbnRXZWF0aGVyIGZyb20gJy4vZnVuY3Rpb25zL2ZldGNoQ3VycmVudFdlYXRoZXInO1xuaW1wb3J0IGZldGNoV2VhdGhlckZvcmVjYXN0IGZyb20gJy4vZnVuY3Rpb25zL2ZldGNoV2VhdGhlckZvcmVjYXN0JztcblxuYXN5bmMgZnVuY3Rpb24gcnVuQ29kZSgpIHtcbiAgY29uc3QgYXBpRGF0YUN1cnJlbnQgPSBhd2FpdCBmZXRjaEN1cnJlbnRXZWF0aGVyKCk7XG4gIGNvbnN0IGFwaURhdGFGb3JlY2FzdCA9IGF3YWl0IGZldGNoV2VhdGhlckZvcmVjYXN0KCk7XG4gIGNyZWF0ZU1haW5TZWN0aW9uKGFwaURhdGFDdXJyZW50LCBhcGlEYXRhRm9yZWNhc3QpO1xuICBjcmVhdGVXZWF0aGVyUHJvZ25vc2VTZWN0aW9uKGFwaURhdGFGb3JlY2FzdCk7XG4gIGNyZWF0ZVRvZGF5c0hpZ2hsaWdodHNTZWN0aW9uKGFwaURhdGFGb3JlY2FzdCk7XG59XG5cbnJ1bkNvZGUoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==