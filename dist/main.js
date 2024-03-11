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
  max-width: 10%;
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
}`, "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAIA;EACI,sBAAA;EACA,SAAA;EACA,UAAA;AAHJ;;AAMA;EACI,yBAVM;AAOV;;AAMA;EACE,YAbU;AAUZ;;AAMA;EACE,YAjBU;AAcZ;;AAQA;EAEE,yBA1Bc;EA2Bd,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,2BAAA;AANF;AAQE;EACE,aAAA;EACA,UAAA;AANJ;AASE;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;AAPJ;AAQI;EACE,cAAA;AANN;AAUE;EACE,iBAAA;AARJ;AAWE;EACE,gBAAA;AATJ;AAYE;EACE,cAAA;AAVJ;;AAcA;EACE,yBA7Dc;EA8Dd,2BAAA;AAXF;AAaE;EACE,aAAA;EACA,8BAAA;EACA,mBAAA;AAXJ;AAcE;EACE,cAAA;AAZJ;;AAiBA;EACE,yBA7Ec;AA+DhB;AAgBA;EACE,yBAhFc;AAkEhB;AAiBA;EACE,yBApFc;AAqEhB;AAkBA;EACE,yBAxFc;AAwEhB","sourcesContent":["$section-color: #1d213a;\n$bgcolor: #151623;\n$fontcolor: white;\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n\nbody{\n    background-color: $bgcolor;\n}\n\np{\n  color: $fontcolor;\n}\n\nh1{\n  color: $fontcolor;\n}\n\n\n\n.main-content-div{\n\n  background-color: $section-color;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 20px 20px 20px 20px;\n\n  .min-max-div{\n    display: flex;\n    gap: 1.5em;\n  }\n\n  .location-div{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    .map-marker{\n      max-width: 30%;\n    }\n  }\n\n  .degrees{\n    font-size: 2.5rem;\n  }\n\n  .my-location{\n    font-size: 1.5em;\n  }\n  \n  .weather-condition-image{\n    max-width: 10%;\n  }\n}\n\n.weather-prognose{\n  background-color: $section-color;\n  margin: 20px 20px 20px 20px;\n\n  .day-prognose{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n\n  .weather-condition-image{\n    max-width: 10%;\n  }\n}\n\n.todays-highlights{\n.wind{\n  background-color: $section-color;\n}\n.humidity{\n  background-color: $section-color;\n}\n\n.feels-like{\n  background-color: $section-color;\n}\n\n.precipitation{\n  background-color: $section-color;\n}\n}\n"],"sourceRoot":""}]);
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
function createTodaysHighlightsSection() {
  const contentDiv = document.getElementById('content');

  const todaysHighlightsDiv = document.createElement('div');
  todaysHighlightsDiv.classList.add('todays-highlights');

  const headline = document.createElement('h1');
  headline.textContent = 'Todays Highlights';

  todaysHighlightsDiv.appendChild(headline);

  const windDiv = document.createElement('div');
  windDiv.classList.add('wind');

  const windHeadline = document.createElement('p');
  windHeadline.textContent = 'Wind Status';

  windDiv.appendChild(windHeadline);

  const windParagraph = document.createElement('h1');
  windParagraph.textContent = '10 kmh';

  windDiv.appendChild(windParagraph);

  todaysHighlightsDiv.appendChild(windDiv);

  const humidityDiv = document.createElement('div');
  humidityDiv.classList.add('humidity');

  const humidityHeadline = document.createElement('p');
  humidityHeadline.textContent = 'Humidity in %';

  humidityDiv.appendChild(humidityHeadline);

  const humidityParagraph = document.createElement('h1');
  humidityParagraph.textContent = '80%';

  humidityDiv.appendChild(humidityParagraph);

  todaysHighlightsDiv.appendChild(humidityDiv);

  const feelsLikeDiv = document.createElement('div');
  feelsLikeDiv.classList.add('feels-like');

  const feelsLikeHeadline = document.createElement('p');
  feelsLikeHeadline.textContent = 'Feels Like';

  feelsLikeDiv.appendChild(feelsLikeHeadline);

  const feelsLikeParagraph = document.createElement('h1');
  feelsLikeParagraph.textContent = '8°C';

  feelsLikeDiv.appendChild(feelsLikeParagraph);

  todaysHighlightsDiv.appendChild(feelsLikeDiv);

  const precipitationDiv = document.createElement('div');
  precipitationDiv.classList.add('precipitation');

  const precipitationHeadline = document.createElement('p');
  precipitationHeadline.textContent = 'Precipitation in %';

  precipitationDiv.appendChild(precipitationHeadline);

  const precipitationParagraph = document.createElement('h1');
  precipitationParagraph.textContent = '45%';

  precipitationDiv.appendChild(precipitationParagraph);

  todaysHighlightsDiv.appendChild(precipitationDiv);

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
/* harmony import */ var _assets_cloudyrainy_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/cloudyrainy.png */ "./src/assets/cloudyrainy.png");
/* harmony import */ var _assets_map_marker_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/map-marker.svg */ "./src/assets/map-marker.svg");



function createMainSection() {
  const contentDiv = document.getElementById('content');

  const mainContentDiv = document.createElement('div');
  mainContentDiv.classList.add('main-content-div');

  const myLocationTitle = document.createElement('h1');
  myLocationTitle.classList.add('my-location');
  myLocationTitle.textContent = 'My Location';

  mainContentDiv.appendChild(myLocationTitle);

  const weatherImage = new Image();
  weatherImage.src = _assets_cloudyrainy_png__WEBPACK_IMPORTED_MODULE_0__;
  weatherImage.classList.add('weather-condition-image');

  mainContentDiv.appendChild(weatherImage);

  const locationDiv = document.createElement('div');
  locationDiv.classList.add('location-div');

  const mapMarkerImage = new Image();
  mapMarkerImage.src = _assets_map_marker_svg__WEBPACK_IMPORTED_MODULE_1__;
  mapMarkerImage.classList.add('map-marker');

  locationDiv.appendChild(mapMarkerImage);

  const locationParagraph = document.createElement('p');
  locationParagraph.classList.add('location');
  locationParagraph.textContent = 'Karlsruhe';

  locationDiv.appendChild(locationParagraph);

  mainContentDiv.appendChild(locationDiv);

  const degreeParagraph = document.createElement('p');
  degreeParagraph.classList.add('degrees');
  degreeParagraph.textContent = '12°C';

  mainContentDiv.appendChild(degreeParagraph);

  const weatherConditionsParagraph = document.createElement('p');
  weatherConditionsParagraph.classList.add('weather-conditions');
  weatherConditionsParagraph.textContent = 'Sunny';

  mainContentDiv.appendChild(weatherConditionsParagraph);

  const minMaxDiv = document.createElement('div');
  minMaxDiv.classList.add('min-max-div');

  const minimumParagraph = document.createElement('p');
  minimumParagraph.classList.add('min-degrees');
  minimumParagraph.textContent = 'min temp: 0°C';

  minMaxDiv.appendChild(minimumParagraph);

  const maximumParagraph = document.createElement('p');
  maximumParagraph.classList.add('max-degrees');
  maximumParagraph.textContent = 'max temp: 12°C';

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
/* harmony import */ var _assets_cloudyrainy_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/cloudyrainy.png */ "./src/assets/cloudyrainy.png");


function createWeatherPrognoseSection() {
  const contentDiv = document.getElementById('content');

  const weatherPrognoseDiv = document.createElement('div');
  weatherPrognoseDiv.classList.add('weather-prognose');

  const day1PrognoseDiv = document.createElement('div');
  day1PrognoseDiv.classList.add('day-prognose');

  const day1Paragraph = document.createElement('p');
  day1Paragraph.textContent = 'Day 1';

  day1PrognoseDiv.appendChild(day1Paragraph);

  const weatherImage = new Image();
  weatherImage.src = _assets_cloudyrainy_png__WEBPACK_IMPORTED_MODULE_0__;
  weatherImage.classList.add('weather-condition-image');

  day1PrognoseDiv.appendChild(weatherImage);

  const day1MaxTemp = document.createElement('p');
  day1MaxTemp.textContent = '12°C';

  day1PrognoseDiv.appendChild(day1MaxTemp);

  const day1MinTemp = document.createElement('p');
  day1MinTemp.textContent = '0°C';

  day1PrognoseDiv.appendChild(day1MinTemp);

  weatherPrognoseDiv.appendChild(day1PrognoseDiv);

  const day2PrognoseDiv = document.createElement('div');
  day2PrognoseDiv.classList.add('day-prognose');

  const day2Paragraph = document.createElement('p');
  day2Paragraph.textContent = 'Day 2';

  day2PrognoseDiv.appendChild(day2Paragraph);

  const weatherImage2 = new Image();
  weatherImage2.src = _assets_cloudyrainy_png__WEBPACK_IMPORTED_MODULE_0__;
  weatherImage2.classList.add('weather-condition-image');

  day2PrognoseDiv.appendChild(weatherImage2);

  const day2MaxTemp = document.createElement('p');
  day2MaxTemp.textContent = '10°C';

  day2PrognoseDiv.appendChild(day2MaxTemp);

  const day2MinTemp = document.createElement('p');
  day2MinTemp.textContent = '1°C';

  day2PrognoseDiv.appendChild(day2MinTemp);

  weatherPrognoseDiv.appendChild(day2PrognoseDiv);

  const day3PrognoseDiv = document.createElement('div');
  day3PrognoseDiv.classList.add('day-prognose');

  const day3Paragraph = document.createElement('p');
  day3Paragraph.textContent = 'Day 3';

  day3PrognoseDiv.appendChild(day3Paragraph);

  const weatherImage3 = new Image();
  weatherImage3.src = _assets_cloudyrainy_png__WEBPACK_IMPORTED_MODULE_0__;
  weatherImage3.classList.add('weather-condition-image');

  day3PrognoseDiv.appendChild(weatherImage3);

  const day3MaxTemp = document.createElement('p');
  day3MaxTemp.textContent = '10°C';

  day3PrognoseDiv.appendChild(day3MaxTemp);

  const day3MinTemp = document.createElement('p');
  day3MinTemp.textContent = '2°C';

  day3PrognoseDiv.appendChild(day3MinTemp);

  weatherPrognoseDiv.appendChild(day3PrognoseDiv);

  const day4PrognoseDiv = document.createElement('div');
  day4PrognoseDiv.classList.add('day-prognose');

  const day4Paragraph = document.createElement('p');
  day4Paragraph.textContent = 'Day 4';

  day4PrognoseDiv.appendChild(day4Paragraph);

  const weatherImage4 = new Image();
  weatherImage4.src = _assets_cloudyrainy_png__WEBPACK_IMPORTED_MODULE_0__;
  weatherImage4.classList.add('weather-condition-image');

  day4PrognoseDiv.appendChild(weatherImage4);

  const day4MaxTemp = document.createElement('p');
  day4MaxTemp.textContent = '10°C';

  day4PrognoseDiv.appendChild(day4MaxTemp);

  const day4MinTemp = document.createElement('p');
  day4MinTemp.textContent = '1°C';

  day4PrognoseDiv.appendChild(day4MinTemp);

  weatherPrognoseDiv.appendChild(day4PrognoseDiv);

  const day5PrognoseDiv = document.createElement('div');
  day5PrognoseDiv.classList.add('day-prognose');

  const day5Paragraph = document.createElement('p');
  day5Paragraph.textContent = 'Day 5';

  day5PrognoseDiv.appendChild(day5Paragraph);

  const weatherImage5 = new Image();
  weatherImage5.src = _assets_cloudyrainy_png__WEBPACK_IMPORTED_MODULE_0__;
  weatherImage5.classList.add('weather-condition-image');

  day5PrognoseDiv.appendChild(weatherImage5);

  const day5MaxTemp = document.createElement('p');
  day5MaxTemp.textContent = '10°C';

  day5PrognoseDiv.appendChild(day5MaxTemp);

  const day5MinTemp = document.createElement('p');
  day5MinTemp.textContent = '1°C';

  day5PrognoseDiv.appendChild(day5MinTemp);

  weatherPrognoseDiv.appendChild(day5PrognoseDiv);

  const day6PrognoseDiv = document.createElement('div');
  day6PrognoseDiv.classList.add('day-prognose');

  const day6Paragraph = document.createElement('p');
  day6Paragraph.textContent = 'Day 6';

  day6PrognoseDiv.appendChild(day6Paragraph);

  const weatherImage6 = new Image();
  weatherImage6.src = _assets_cloudyrainy_png__WEBPACK_IMPORTED_MODULE_0__;
  weatherImage6.classList.add('weather-condition-image');

  day6PrognoseDiv.appendChild(weatherImage6);

  const day6MaxTemp = document.createElement('p');
  day6MaxTemp.textContent = '10°C';

  day6PrognoseDiv.appendChild(day6MaxTemp);

  const day6MinTemp = document.createElement('p');
  day6MinTemp.textContent = '1°C';

  day6PrognoseDiv.appendChild(day6MinTemp);

  weatherPrognoseDiv.appendChild(day6PrognoseDiv);

  const day7PrognoseDiv = document.createElement('div');
  day7PrognoseDiv.classList.add('day-prognose');

  const day7Paragraph = document.createElement('p');
  day7Paragraph.textContent = 'Day 7';

  day7PrognoseDiv.appendChild(day7Paragraph);

  const weatherImage7 = new Image();
  weatherImage7.src = _assets_cloudyrainy_png__WEBPACK_IMPORTED_MODULE_0__;
  weatherImage7.classList.add('weather-condition-image');

  day7PrognoseDiv.appendChild(weatherImage7);

  const day7MaxTemp = document.createElement('p');
  day7MaxTemp.textContent = '10°C';

  day7PrognoseDiv.appendChild(day7MaxTemp);

  const day7MinTemp = document.createElement('p');
  day7MinTemp.textContent = '1°C';

  day7PrognoseDiv.appendChild(day7MinTemp);

  weatherPrognoseDiv.appendChild(day7PrognoseDiv);

  contentDiv.appendChild(weatherPrognoseDiv);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createWeatherPrognoseSection);


/***/ }),

/***/ "./src/functions/fetchTodayWeather.js":
/*!********************************************!*\
  !*** ./src/functions/fetchTodayWeather.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
async function fetchTodayWeather() {
  try {
    const response = await fetch('https://api.weatherapi.com/v1/current.json?key=5ef2cc7df56f4d9494d203100242002&q=london');
    if (!response.ok) {
      throw new Error('something went wrong');
    }
    const responseData = await response.json();
    console.log(responseData);
    // console.log(responseData.current.condition.text);
  } catch (error) {
    console.log(error.message);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchTodayWeather);


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
    const response = await fetch('https://api.weatherapi.com/v1/forecast.json?key=5ef2cc7df56f4d9494d203100242002&q=london&days=3');
    if (!response.ok) {
      throw new Error('something went wrong');
    }
    const responseData = await response.json();
    console.log(responseData);
  } catch (error) {
    console.log(error.message);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchWeatherForecast);


/***/ }),

/***/ "./src/assets/cloudyrainy.png":
/*!************************************!*\
  !*** ./src/assets/cloudyrainy.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4cf00c54b52122e8ffce.png";

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
/* harmony import */ var _functions_fetchTodayWeather__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./functions/fetchTodayWeather */ "./src/functions/fetchTodayWeather.js");
/* harmony import */ var _functions_fetchWeatherForecast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./functions/fetchWeatherForecast */ "./src/functions/fetchWeatherForecast.js");







(0,_components_mainSection__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_components_prognoseSection__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_components_highlightSection__WEBPACK_IMPORTED_MODULE_3__["default"])();
(0,_functions_fetchTodayWeather__WEBPACK_IMPORTED_MODULE_4__["default"])();
(0,_functions_fetchWeatherForecast__WEBPACK_IMPORTED_MODULE_5__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBc0I7QUFDbUM7QUFDZTtBQUNFO0FBQ1o7QUFDTTs7QUFFcEUsbUVBQWlCO0FBQ2pCLHVFQUE0QjtBQUM1Qix3RUFBNkI7QUFDN0Isd0VBQWlCO0FBQ2pCLDJFQUFvQiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuc2Nzcz83NWJhIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy9oaWdobGlnaHRTZWN0aW9uLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvbWFpblNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy9wcm9nbm9zZVNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZnVuY3Rpb25zL2ZldGNoVG9kYXlXZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Z1bmN0aW9ucy9mZXRjaFdlYXRoZXJGb3JlY2FzdC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE1MTYyMztcbn1cblxucCB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaDEge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5tYWluLWNvbnRlbnQtZGl2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFkMjEzYTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMjBweCAyMHB4IDIwcHggMjBweDtcbn1cbi5tYWluLWNvbnRlbnQtZGl2IC5taW4tbWF4LWRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMS41ZW07XG59XG4ubWFpbi1jb250ZW50LWRpdiAubG9jYXRpb24tZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubWFpbi1jb250ZW50LWRpdiAubG9jYXRpb24tZGl2IC5tYXAtbWFya2VyIHtcbiAgbWF4LXdpZHRoOiAzMCU7XG59XG4ubWFpbi1jb250ZW50LWRpdiAuZGVncmVlcyB7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xufVxuLm1haW4tY29udGVudC1kaXYgLm15LWxvY2F0aW9uIHtcbiAgZm9udC1zaXplOiAxLjVlbTtcbn1cbi5tYWluLWNvbnRlbnQtZGl2IC53ZWF0aGVyLWNvbmRpdGlvbi1pbWFnZSB7XG4gIG1heC13aWR0aDogMTAlO1xufVxuXG4ud2VhdGhlci1wcm9nbm9zZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZDIxM2E7XG4gIG1hcmdpbjogMjBweCAyMHB4IDIwcHggMjBweDtcbn1cbi53ZWF0aGVyLXByb2dub3NlIC5kYXktcHJvZ25vc2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ud2VhdGhlci1wcm9nbm9zZSAud2VhdGhlci1jb25kaXRpb24taW1hZ2Uge1xuICBtYXgtd2lkdGg6IDEwJTtcbn1cblxuLnRvZGF5cy1oaWdobGlnaHRzIC53aW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFkMjEzYTtcbn1cbi50b2RheXMtaGlnaGxpZ2h0cyAuaHVtaWRpdHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQyMTNhO1xufVxuLnRvZGF5cy1oaWdobGlnaHRzIC5mZWVscy1saWtlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFkMjEzYTtcbn1cbi50b2RheXMtaGlnaGxpZ2h0cyAucHJlY2lwaXRhdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZDIxM2E7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFJQTtFQUNJLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFISjs7QUFNQTtFQUNJLHlCQVZNO0FBT1Y7O0FBTUE7RUFDRSxZQWJVO0FBVVo7O0FBTUE7RUFDRSxZQWpCVTtBQWNaOztBQVFBO0VBRUUseUJBMUJjO0VBMkJkLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtBQU5GO0FBUUU7RUFDRSxhQUFBO0VBQ0EsVUFBQTtBQU5KO0FBU0U7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQVBKO0FBUUk7RUFDRSxjQUFBO0FBTk47QUFVRTtFQUNFLGlCQUFBO0FBUko7QUFXRTtFQUNFLGdCQUFBO0FBVEo7QUFZRTtFQUNFLGNBQUE7QUFWSjs7QUFjQTtFQUNFLHlCQTdEYztFQThEZCwyQkFBQTtBQVhGO0FBYUU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQVhKO0FBY0U7RUFDRSxjQUFBO0FBWko7O0FBaUJBO0VBQ0UseUJBN0VjO0FBK0RoQjtBQWdCQTtFQUNFLHlCQWhGYztBQWtFaEI7QUFpQkE7RUFDRSx5QkFwRmM7QUFxRWhCO0FBa0JBO0VBQ0UseUJBeEZjO0FBd0VoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIkc2VjdGlvbi1jb2xvcjogIzFkMjEzYTtcXG4kYmdjb2xvcjogIzE1MTYyMztcXG4kZm9udGNvbG9yOiB3aGl0ZTtcXG5cXG4qIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgfVxcblxcbmJvZHl7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRiZ2NvbG9yO1xcbn1cXG5cXG5we1xcbiAgY29sb3I6ICRmb250Y29sb3I7XFxufVxcblxcbmgxe1xcbiAgY29sb3I6ICRmb250Y29sb3I7XFxufVxcblxcblxcblxcbi5tYWluLWNvbnRlbnQtZGl2e1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNlY3Rpb24tY29sb3I7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogMjBweCAyMHB4IDIwcHggMjBweDtcXG5cXG4gIC5taW4tbWF4LWRpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxLjVlbTtcXG4gIH1cXG5cXG4gIC5sb2NhdGlvbi1kaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAubWFwLW1hcmtlcntcXG4gICAgICBtYXgtd2lkdGg6IDMwJTtcXG4gICAgfVxcbiAgfVxcblxcbiAgLmRlZ3JlZXN7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgfVxcblxcbiAgLm15LWxvY2F0aW9ue1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgfVxcbiAgXFxuICAud2VhdGhlci1jb25kaXRpb24taW1hZ2V7XFxuICAgIG1heC13aWR0aDogMTAlO1xcbiAgfVxcbn1cXG5cXG4ud2VhdGhlci1wcm9nbm9zZXtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRzZWN0aW9uLWNvbG9yO1xcbiAgbWFyZ2luOiAyMHB4IDIwcHggMjBweCAyMHB4O1xcblxcbiAgLmRheS1wcm9nbm9zZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgLndlYXRoZXItY29uZGl0aW9uLWltYWdle1xcbiAgICBtYXgtd2lkdGg6IDEwJTtcXG4gIH1cXG59XFxuXFxuLnRvZGF5cy1oaWdobGlnaHRze1xcbi53aW5ke1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNlY3Rpb24tY29sb3I7XFxufVxcbi5odW1pZGl0eXtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRzZWN0aW9uLWNvbG9yO1xcbn1cXG5cXG4uZmVlbHMtbGlrZXtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRzZWN0aW9uLWNvbG9yO1xcbn1cXG5cXG4ucHJlY2lwaXRhdGlvbntcXG4gIGJhY2tncm91bmQtY29sb3I6ICRzZWN0aW9uLWNvbG9yO1xcbn1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBjcmVhdGVUb2RheXNIaWdobGlnaHRzU2VjdGlvbigpIHtcbiAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgY29uc3QgdG9kYXlzSGlnaGxpZ2h0c0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b2RheXNIaWdobGlnaHRzRGl2LmNsYXNzTGlzdC5hZGQoJ3RvZGF5cy1oaWdobGlnaHRzJyk7XG5cbiAgY29uc3QgaGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBoZWFkbGluZS50ZXh0Q29udGVudCA9ICdUb2RheXMgSGlnaGxpZ2h0cyc7XG5cbiAgdG9kYXlzSGlnaGxpZ2h0c0Rpdi5hcHBlbmRDaGlsZChoZWFkbGluZSk7XG5cbiAgY29uc3Qgd2luZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB3aW5kRGl2LmNsYXNzTGlzdC5hZGQoJ3dpbmQnKTtcblxuICBjb25zdCB3aW5kSGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHdpbmRIZWFkbGluZS50ZXh0Q29udGVudCA9ICdXaW5kIFN0YXR1cyc7XG5cbiAgd2luZERpdi5hcHBlbmRDaGlsZCh3aW5kSGVhZGxpbmUpO1xuXG4gIGNvbnN0IHdpbmRQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICB3aW5kUGFyYWdyYXBoLnRleHRDb250ZW50ID0gJzEwIGttaCc7XG5cbiAgd2luZERpdi5hcHBlbmRDaGlsZCh3aW5kUGFyYWdyYXBoKTtcblxuICB0b2RheXNIaWdobGlnaHRzRGl2LmFwcGVuZENoaWxkKHdpbmREaXYpO1xuXG4gIGNvbnN0IGh1bWlkaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGh1bWlkaXR5RGl2LmNsYXNzTGlzdC5hZGQoJ2h1bWlkaXR5Jyk7XG5cbiAgY29uc3QgaHVtaWRpdHlIZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgaHVtaWRpdHlIZWFkbGluZS50ZXh0Q29udGVudCA9ICdIdW1pZGl0eSBpbiAlJztcblxuICBodW1pZGl0eURpdi5hcHBlbmRDaGlsZChodW1pZGl0eUhlYWRsaW5lKTtcblxuICBjb25zdCBodW1pZGl0eVBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGh1bWlkaXR5UGFyYWdyYXBoLnRleHRDb250ZW50ID0gJzgwJSc7XG5cbiAgaHVtaWRpdHlEaXYuYXBwZW5kQ2hpbGQoaHVtaWRpdHlQYXJhZ3JhcGgpO1xuXG4gIHRvZGF5c0hpZ2hsaWdodHNEaXYuYXBwZW5kQ2hpbGQoaHVtaWRpdHlEaXYpO1xuXG4gIGNvbnN0IGZlZWxzTGlrZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmZWVsc0xpa2VEaXYuY2xhc3NMaXN0LmFkZCgnZmVlbHMtbGlrZScpO1xuXG4gIGNvbnN0IGZlZWxzTGlrZUhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBmZWVsc0xpa2VIZWFkbGluZS50ZXh0Q29udGVudCA9ICdGZWVscyBMaWtlJztcblxuICBmZWVsc0xpa2VEaXYuYXBwZW5kQ2hpbGQoZmVlbHNMaWtlSGVhZGxpbmUpO1xuXG4gIGNvbnN0IGZlZWxzTGlrZVBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGZlZWxzTGlrZVBhcmFncmFwaC50ZXh0Q29udGVudCA9ICc4wrBDJztcblxuICBmZWVsc0xpa2VEaXYuYXBwZW5kQ2hpbGQoZmVlbHNMaWtlUGFyYWdyYXBoKTtcblxuICB0b2RheXNIaWdobGlnaHRzRGl2LmFwcGVuZENoaWxkKGZlZWxzTGlrZURpdik7XG5cbiAgY29uc3QgcHJlY2lwaXRhdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwcmVjaXBpdGF0aW9uRGl2LmNsYXNzTGlzdC5hZGQoJ3ByZWNpcGl0YXRpb24nKTtcblxuICBjb25zdCBwcmVjaXBpdGF0aW9uSGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHByZWNpcGl0YXRpb25IZWFkbGluZS50ZXh0Q29udGVudCA9ICdQcmVjaXBpdGF0aW9uIGluICUnO1xuXG4gIHByZWNpcGl0YXRpb25EaXYuYXBwZW5kQ2hpbGQocHJlY2lwaXRhdGlvbkhlYWRsaW5lKTtcblxuICBjb25zdCBwcmVjaXBpdGF0aW9uUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgcHJlY2lwaXRhdGlvblBhcmFncmFwaC50ZXh0Q29udGVudCA9ICc0NSUnO1xuXG4gIHByZWNpcGl0YXRpb25EaXYuYXBwZW5kQ2hpbGQocHJlY2lwaXRhdGlvblBhcmFncmFwaCk7XG5cbiAgdG9kYXlzSGlnaGxpZ2h0c0Rpdi5hcHBlbmRDaGlsZChwcmVjaXBpdGF0aW9uRGl2KTtcblxuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKHRvZGF5c0hpZ2hsaWdodHNEaXYpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVUb2RheXNIaWdobGlnaHRzU2VjdGlvbjtcbiIsImltcG9ydCBjbG91ZHlSYWlueUljb24gZnJvbSAnLi4vYXNzZXRzL2Nsb3VkeXJhaW55LnBuZyc7XG5pbXBvcnQgbWFwTWFya2VySWNvbiBmcm9tICcuLi9hc3NldHMvbWFwLW1hcmtlci5zdmcnO1xuXG5mdW5jdGlvbiBjcmVhdGVNYWluU2VjdGlvbigpIHtcbiAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgY29uc3QgbWFpbkNvbnRlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWFpbkNvbnRlbnREaXYuY2xhc3NMaXN0LmFkZCgnbWFpbi1jb250ZW50LWRpdicpO1xuXG4gIGNvbnN0IG15TG9jYXRpb25UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIG15TG9jYXRpb25UaXRsZS5jbGFzc0xpc3QuYWRkKCdteS1sb2NhdGlvbicpO1xuICBteUxvY2F0aW9uVGl0bGUudGV4dENvbnRlbnQgPSAnTXkgTG9jYXRpb24nO1xuXG4gIG1haW5Db250ZW50RGl2LmFwcGVuZENoaWxkKG15TG9jYXRpb25UaXRsZSk7XG5cbiAgY29uc3Qgd2VhdGhlckltYWdlID0gbmV3IEltYWdlKCk7XG4gIHdlYXRoZXJJbWFnZS5zcmMgPSBjbG91ZHlSYWlueUljb247XG4gIHdlYXRoZXJJbWFnZS5jbGFzc0xpc3QuYWRkKCd3ZWF0aGVyLWNvbmRpdGlvbi1pbWFnZScpO1xuXG4gIG1haW5Db250ZW50RGl2LmFwcGVuZENoaWxkKHdlYXRoZXJJbWFnZSk7XG5cbiAgY29uc3QgbG9jYXRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbG9jYXRpb25EaXYuY2xhc3NMaXN0LmFkZCgnbG9jYXRpb24tZGl2Jyk7XG5cbiAgY29uc3QgbWFwTWFya2VySW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgbWFwTWFya2VySW1hZ2Uuc3JjID0gbWFwTWFya2VySWNvbjtcbiAgbWFwTWFya2VySW1hZ2UuY2xhc3NMaXN0LmFkZCgnbWFwLW1hcmtlcicpO1xuXG4gIGxvY2F0aW9uRGl2LmFwcGVuZENoaWxkKG1hcE1hcmtlckltYWdlKTtcblxuICBjb25zdCBsb2NhdGlvblBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbG9jYXRpb25QYXJhZ3JhcGguY2xhc3NMaXN0LmFkZCgnbG9jYXRpb24nKTtcbiAgbG9jYXRpb25QYXJhZ3JhcGgudGV4dENvbnRlbnQgPSAnS2FybHNydWhlJztcblxuICBsb2NhdGlvbkRpdi5hcHBlbmRDaGlsZChsb2NhdGlvblBhcmFncmFwaCk7XG5cbiAgbWFpbkNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobG9jYXRpb25EaXYpO1xuXG4gIGNvbnN0IGRlZ3JlZVBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZGVncmVlUGFyYWdyYXBoLmNsYXNzTGlzdC5hZGQoJ2RlZ3JlZXMnKTtcbiAgZGVncmVlUGFyYWdyYXBoLnRleHRDb250ZW50ID0gJzEywrBDJztcblxuICBtYWluQ29udGVudERpdi5hcHBlbmRDaGlsZChkZWdyZWVQYXJhZ3JhcGgpO1xuXG4gIGNvbnN0IHdlYXRoZXJDb25kaXRpb25zUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICB3ZWF0aGVyQ29uZGl0aW9uc1BhcmFncmFwaC5jbGFzc0xpc3QuYWRkKCd3ZWF0aGVyLWNvbmRpdGlvbnMnKTtcbiAgd2VhdGhlckNvbmRpdGlvbnNQYXJhZ3JhcGgudGV4dENvbnRlbnQgPSAnU3VubnknO1xuXG4gIG1haW5Db250ZW50RGl2LmFwcGVuZENoaWxkKHdlYXRoZXJDb25kaXRpb25zUGFyYWdyYXBoKTtcblxuICBjb25zdCBtaW5NYXhEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWluTWF4RGl2LmNsYXNzTGlzdC5hZGQoJ21pbi1tYXgtZGl2Jyk7XG5cbiAgY29uc3QgbWluaW11bVBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbWluaW11bVBhcmFncmFwaC5jbGFzc0xpc3QuYWRkKCdtaW4tZGVncmVlcycpO1xuICBtaW5pbXVtUGFyYWdyYXBoLnRleHRDb250ZW50ID0gJ21pbiB0ZW1wOiAwwrBDJztcblxuICBtaW5NYXhEaXYuYXBwZW5kQ2hpbGQobWluaW11bVBhcmFncmFwaCk7XG5cbiAgY29uc3QgbWF4aW11bVBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbWF4aW11bVBhcmFncmFwaC5jbGFzc0xpc3QuYWRkKCdtYXgtZGVncmVlcycpO1xuICBtYXhpbXVtUGFyYWdyYXBoLnRleHRDb250ZW50ID0gJ21heCB0ZW1wOiAxMsKwQyc7XG5cbiAgbWluTWF4RGl2LmFwcGVuZENoaWxkKG1heGltdW1QYXJhZ3JhcGgpO1xuXG4gIG1haW5Db250ZW50RGl2LmFwcGVuZENoaWxkKG1pbk1heERpdik7XG5cbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChtYWluQ29udGVudERpdik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU1haW5TZWN0aW9uO1xuIiwiaW1wb3J0IGNsb3VkeVJhaW55SWNvbiBmcm9tICcuLi9hc3NldHMvY2xvdWR5cmFpbnkucG5nJztcblxuZnVuY3Rpb24gY3JlYXRlV2VhdGhlclByb2dub3NlU2VjdGlvbigpIHtcbiAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgY29uc3Qgd2VhdGhlclByb2dub3NlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHdlYXRoZXJQcm9nbm9zZURpdi5jbGFzc0xpc3QuYWRkKCd3ZWF0aGVyLXByb2dub3NlJyk7XG5cbiAgY29uc3QgZGF5MVByb2dub3NlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRheTFQcm9nbm9zZURpdi5jbGFzc0xpc3QuYWRkKCdkYXktcHJvZ25vc2UnKTtcblxuICBjb25zdCBkYXkxUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBkYXkxUGFyYWdyYXBoLnRleHRDb250ZW50ID0gJ0RheSAxJztcblxuICBkYXkxUHJvZ25vc2VEaXYuYXBwZW5kQ2hpbGQoZGF5MVBhcmFncmFwaCk7XG5cbiAgY29uc3Qgd2VhdGhlckltYWdlID0gbmV3IEltYWdlKCk7XG4gIHdlYXRoZXJJbWFnZS5zcmMgPSBjbG91ZHlSYWlueUljb247XG4gIHdlYXRoZXJJbWFnZS5jbGFzc0xpc3QuYWRkKCd3ZWF0aGVyLWNvbmRpdGlvbi1pbWFnZScpO1xuXG4gIGRheTFQcm9nbm9zZURpdi5hcHBlbmRDaGlsZCh3ZWF0aGVySW1hZ2UpO1xuXG4gIGNvbnN0IGRheTFNYXhUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBkYXkxTWF4VGVtcC50ZXh0Q29udGVudCA9ICcxMsKwQyc7XG5cbiAgZGF5MVByb2dub3NlRGl2LmFwcGVuZENoaWxkKGRheTFNYXhUZW1wKTtcblxuICBjb25zdCBkYXkxTWluVGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZGF5MU1pblRlbXAudGV4dENvbnRlbnQgPSAnMMKwQyc7XG5cbiAgZGF5MVByb2dub3NlRGl2LmFwcGVuZENoaWxkKGRheTFNaW5UZW1wKTtcblxuICB3ZWF0aGVyUHJvZ25vc2VEaXYuYXBwZW5kQ2hpbGQoZGF5MVByb2dub3NlRGl2KTtcblxuICBjb25zdCBkYXkyUHJvZ25vc2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGF5MlByb2dub3NlRGl2LmNsYXNzTGlzdC5hZGQoJ2RheS1wcm9nbm9zZScpO1xuXG4gIGNvbnN0IGRheTJQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGRheTJQYXJhZ3JhcGgudGV4dENvbnRlbnQgPSAnRGF5IDInO1xuXG4gIGRheTJQcm9nbm9zZURpdi5hcHBlbmRDaGlsZChkYXkyUGFyYWdyYXBoKTtcblxuICBjb25zdCB3ZWF0aGVySW1hZ2UyID0gbmV3IEltYWdlKCk7XG4gIHdlYXRoZXJJbWFnZTIuc3JjID0gY2xvdWR5UmFpbnlJY29uO1xuICB3ZWF0aGVySW1hZ2UyLmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXItY29uZGl0aW9uLWltYWdlJyk7XG5cbiAgZGF5MlByb2dub3NlRGl2LmFwcGVuZENoaWxkKHdlYXRoZXJJbWFnZTIpO1xuXG4gIGNvbnN0IGRheTJNYXhUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBkYXkyTWF4VGVtcC50ZXh0Q29udGVudCA9ICcxMMKwQyc7XG5cbiAgZGF5MlByb2dub3NlRGl2LmFwcGVuZENoaWxkKGRheTJNYXhUZW1wKTtcblxuICBjb25zdCBkYXkyTWluVGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZGF5Mk1pblRlbXAudGV4dENvbnRlbnQgPSAnMcKwQyc7XG5cbiAgZGF5MlByb2dub3NlRGl2LmFwcGVuZENoaWxkKGRheTJNaW5UZW1wKTtcblxuICB3ZWF0aGVyUHJvZ25vc2VEaXYuYXBwZW5kQ2hpbGQoZGF5MlByb2dub3NlRGl2KTtcblxuICBjb25zdCBkYXkzUHJvZ25vc2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGF5M1Byb2dub3NlRGl2LmNsYXNzTGlzdC5hZGQoJ2RheS1wcm9nbm9zZScpO1xuXG4gIGNvbnN0IGRheTNQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGRheTNQYXJhZ3JhcGgudGV4dENvbnRlbnQgPSAnRGF5IDMnO1xuXG4gIGRheTNQcm9nbm9zZURpdi5hcHBlbmRDaGlsZChkYXkzUGFyYWdyYXBoKTtcblxuICBjb25zdCB3ZWF0aGVySW1hZ2UzID0gbmV3IEltYWdlKCk7XG4gIHdlYXRoZXJJbWFnZTMuc3JjID0gY2xvdWR5UmFpbnlJY29uO1xuICB3ZWF0aGVySW1hZ2UzLmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXItY29uZGl0aW9uLWltYWdlJyk7XG5cbiAgZGF5M1Byb2dub3NlRGl2LmFwcGVuZENoaWxkKHdlYXRoZXJJbWFnZTMpO1xuXG4gIGNvbnN0IGRheTNNYXhUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBkYXkzTWF4VGVtcC50ZXh0Q29udGVudCA9ICcxMMKwQyc7XG5cbiAgZGF5M1Byb2dub3NlRGl2LmFwcGVuZENoaWxkKGRheTNNYXhUZW1wKTtcblxuICBjb25zdCBkYXkzTWluVGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZGF5M01pblRlbXAudGV4dENvbnRlbnQgPSAnMsKwQyc7XG5cbiAgZGF5M1Byb2dub3NlRGl2LmFwcGVuZENoaWxkKGRheTNNaW5UZW1wKTtcblxuICB3ZWF0aGVyUHJvZ25vc2VEaXYuYXBwZW5kQ2hpbGQoZGF5M1Byb2dub3NlRGl2KTtcblxuICBjb25zdCBkYXk0UHJvZ25vc2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGF5NFByb2dub3NlRGl2LmNsYXNzTGlzdC5hZGQoJ2RheS1wcm9nbm9zZScpO1xuXG4gIGNvbnN0IGRheTRQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGRheTRQYXJhZ3JhcGgudGV4dENvbnRlbnQgPSAnRGF5IDQnO1xuXG4gIGRheTRQcm9nbm9zZURpdi5hcHBlbmRDaGlsZChkYXk0UGFyYWdyYXBoKTtcblxuICBjb25zdCB3ZWF0aGVySW1hZ2U0ID0gbmV3IEltYWdlKCk7XG4gIHdlYXRoZXJJbWFnZTQuc3JjID0gY2xvdWR5UmFpbnlJY29uO1xuICB3ZWF0aGVySW1hZ2U0LmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXItY29uZGl0aW9uLWltYWdlJyk7XG5cbiAgZGF5NFByb2dub3NlRGl2LmFwcGVuZENoaWxkKHdlYXRoZXJJbWFnZTQpO1xuXG4gIGNvbnN0IGRheTRNYXhUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBkYXk0TWF4VGVtcC50ZXh0Q29udGVudCA9ICcxMMKwQyc7XG5cbiAgZGF5NFByb2dub3NlRGl2LmFwcGVuZENoaWxkKGRheTRNYXhUZW1wKTtcblxuICBjb25zdCBkYXk0TWluVGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZGF5NE1pblRlbXAudGV4dENvbnRlbnQgPSAnMcKwQyc7XG5cbiAgZGF5NFByb2dub3NlRGl2LmFwcGVuZENoaWxkKGRheTRNaW5UZW1wKTtcblxuICB3ZWF0aGVyUHJvZ25vc2VEaXYuYXBwZW5kQ2hpbGQoZGF5NFByb2dub3NlRGl2KTtcblxuICBjb25zdCBkYXk1UHJvZ25vc2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGF5NVByb2dub3NlRGl2LmNsYXNzTGlzdC5hZGQoJ2RheS1wcm9nbm9zZScpO1xuXG4gIGNvbnN0IGRheTVQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGRheTVQYXJhZ3JhcGgudGV4dENvbnRlbnQgPSAnRGF5IDUnO1xuXG4gIGRheTVQcm9nbm9zZURpdi5hcHBlbmRDaGlsZChkYXk1UGFyYWdyYXBoKTtcblxuICBjb25zdCB3ZWF0aGVySW1hZ2U1ID0gbmV3IEltYWdlKCk7XG4gIHdlYXRoZXJJbWFnZTUuc3JjID0gY2xvdWR5UmFpbnlJY29uO1xuICB3ZWF0aGVySW1hZ2U1LmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXItY29uZGl0aW9uLWltYWdlJyk7XG5cbiAgZGF5NVByb2dub3NlRGl2LmFwcGVuZENoaWxkKHdlYXRoZXJJbWFnZTUpO1xuXG4gIGNvbnN0IGRheTVNYXhUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBkYXk1TWF4VGVtcC50ZXh0Q29udGVudCA9ICcxMMKwQyc7XG5cbiAgZGF5NVByb2dub3NlRGl2LmFwcGVuZENoaWxkKGRheTVNYXhUZW1wKTtcblxuICBjb25zdCBkYXk1TWluVGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZGF5NU1pblRlbXAudGV4dENvbnRlbnQgPSAnMcKwQyc7XG5cbiAgZGF5NVByb2dub3NlRGl2LmFwcGVuZENoaWxkKGRheTVNaW5UZW1wKTtcblxuICB3ZWF0aGVyUHJvZ25vc2VEaXYuYXBwZW5kQ2hpbGQoZGF5NVByb2dub3NlRGl2KTtcblxuICBjb25zdCBkYXk2UHJvZ25vc2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGF5NlByb2dub3NlRGl2LmNsYXNzTGlzdC5hZGQoJ2RheS1wcm9nbm9zZScpO1xuXG4gIGNvbnN0IGRheTZQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGRheTZQYXJhZ3JhcGgudGV4dENvbnRlbnQgPSAnRGF5IDYnO1xuXG4gIGRheTZQcm9nbm9zZURpdi5hcHBlbmRDaGlsZChkYXk2UGFyYWdyYXBoKTtcblxuICBjb25zdCB3ZWF0aGVySW1hZ2U2ID0gbmV3IEltYWdlKCk7XG4gIHdlYXRoZXJJbWFnZTYuc3JjID0gY2xvdWR5UmFpbnlJY29uO1xuICB3ZWF0aGVySW1hZ2U2LmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXItY29uZGl0aW9uLWltYWdlJyk7XG5cbiAgZGF5NlByb2dub3NlRGl2LmFwcGVuZENoaWxkKHdlYXRoZXJJbWFnZTYpO1xuXG4gIGNvbnN0IGRheTZNYXhUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBkYXk2TWF4VGVtcC50ZXh0Q29udGVudCA9ICcxMMKwQyc7XG5cbiAgZGF5NlByb2dub3NlRGl2LmFwcGVuZENoaWxkKGRheTZNYXhUZW1wKTtcblxuICBjb25zdCBkYXk2TWluVGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZGF5Nk1pblRlbXAudGV4dENvbnRlbnQgPSAnMcKwQyc7XG5cbiAgZGF5NlByb2dub3NlRGl2LmFwcGVuZENoaWxkKGRheTZNaW5UZW1wKTtcblxuICB3ZWF0aGVyUHJvZ25vc2VEaXYuYXBwZW5kQ2hpbGQoZGF5NlByb2dub3NlRGl2KTtcblxuICBjb25zdCBkYXk3UHJvZ25vc2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGF5N1Byb2dub3NlRGl2LmNsYXNzTGlzdC5hZGQoJ2RheS1wcm9nbm9zZScpO1xuXG4gIGNvbnN0IGRheTdQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGRheTdQYXJhZ3JhcGgudGV4dENvbnRlbnQgPSAnRGF5IDcnO1xuXG4gIGRheTdQcm9nbm9zZURpdi5hcHBlbmRDaGlsZChkYXk3UGFyYWdyYXBoKTtcblxuICBjb25zdCB3ZWF0aGVySW1hZ2U3ID0gbmV3IEltYWdlKCk7XG4gIHdlYXRoZXJJbWFnZTcuc3JjID0gY2xvdWR5UmFpbnlJY29uO1xuICB3ZWF0aGVySW1hZ2U3LmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXItY29uZGl0aW9uLWltYWdlJyk7XG5cbiAgZGF5N1Byb2dub3NlRGl2LmFwcGVuZENoaWxkKHdlYXRoZXJJbWFnZTcpO1xuXG4gIGNvbnN0IGRheTdNYXhUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBkYXk3TWF4VGVtcC50ZXh0Q29udGVudCA9ICcxMMKwQyc7XG5cbiAgZGF5N1Byb2dub3NlRGl2LmFwcGVuZENoaWxkKGRheTdNYXhUZW1wKTtcblxuICBjb25zdCBkYXk3TWluVGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZGF5N01pblRlbXAudGV4dENvbnRlbnQgPSAnMcKwQyc7XG5cbiAgZGF5N1Byb2dub3NlRGl2LmFwcGVuZENoaWxkKGRheTdNaW5UZW1wKTtcblxuICB3ZWF0aGVyUHJvZ25vc2VEaXYuYXBwZW5kQ2hpbGQoZGF5N1Byb2dub3NlRGl2KTtcblxuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKHdlYXRoZXJQcm9nbm9zZURpdik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVdlYXRoZXJQcm9nbm9zZVNlY3Rpb247XG4iLCJhc3luYyBmdW5jdGlvbiBmZXRjaFRvZGF5V2VhdGhlcigpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PTVlZjJjYzdkZjU2ZjRkOTQ5NGQyMDMxMDAyNDIwMDImcT1sb25kb24nKTtcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3NvbWV0aGluZyB3ZW50IHdyb25nJyk7XG4gICAgfVxuICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZURhdGEpO1xuICAgIC8vIGNvbnNvbGUubG9nKHJlc3BvbnNlRGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmZXRjaFRvZGF5V2VhdGhlcjtcbiIsImFzeW5jIGZ1bmN0aW9uIGZldGNoV2VhdGhlckZvcmVjYXN0KCkge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PTVlZjJjYzdkZjU2ZjRkOTQ5NGQyMDMxMDAyNDIwMDImcT1sb25kb24mZGF5cz0zJyk7XG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdzb21ldGhpbmcgd2VudCB3cm9uZycpO1xuICAgIH1cbiAgICBjb25zdCByZXNwb25zZURhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc29sZS5sb2cocmVzcG9uc2VEYXRhKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmZXRjaFdlYXRoZXJGb3JlY2FzdDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5pbXBvcnQgY3JlYXRlTWFpblNlY3Rpb24gZnJvbSAnLi9jb21wb25lbnRzL21haW5TZWN0aW9uJztcbmltcG9ydCBjcmVhdGVXZWF0aGVyUHJvZ25vc2VTZWN0aW9uIGZyb20gJy4vY29tcG9uZW50cy9wcm9nbm9zZVNlY3Rpb24nO1xuaW1wb3J0IGNyZWF0ZVRvZGF5c0hpZ2hsaWdodHNTZWN0aW9uIGZyb20gJy4vY29tcG9uZW50cy9oaWdobGlnaHRTZWN0aW9uJztcbmltcG9ydCBmZXRjaFRvZGF5V2VhdGhlciBmcm9tICcuL2Z1bmN0aW9ucy9mZXRjaFRvZGF5V2VhdGhlcic7XG5pbXBvcnQgZmV0Y2hXZWF0aGVyRm9yZWNhc3QgZnJvbSAnLi9mdW5jdGlvbnMvZmV0Y2hXZWF0aGVyRm9yZWNhc3QnO1xuXG5jcmVhdGVNYWluU2VjdGlvbigpO1xuY3JlYXRlV2VhdGhlclByb2dub3NlU2VjdGlvbigpO1xuY3JlYXRlVG9kYXlzSGlnaGxpZ2h0c1NlY3Rpb24oKTtcbmZldGNoVG9kYXlXZWF0aGVyKCk7XG5mZXRjaFdlYXRoZXJGb3JlY2FzdCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9