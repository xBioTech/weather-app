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
.main-content-div .weather-status-div .min-max-div {
  display: flex;
  gap: 1.5em;
}
.main-content-div .weather-status-div .weather-conditions {
  text-align: center;
}
.main-content-div .weather-location-div {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.main-content-div .weather-location-div .location-div {
  display: flex;
  justify-content: center;
  align-items: center;
}
.main-content-div .weather-location-div .location-div .map-marker {
  max-width: 30%;
}
.main-content-div .weather-location-div .my-location {
  font-size: 1.5em;
}
.main-content-div .weather-location-div .weather-condition-image {
  max-width: 30%;
}
.main-content-div .degrees {
  font-size: 2.5rem;
}

.weather-prognose {
  background-color: #1d213a;
  margin: 20px 20px 20px 20px;
}
.weather-prognose .day-prognose {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.weather-prognose .day-prognose p {
  max-width: 5%;
}
.weather-prognose .weather-condition-image {
  max-width: 10%;
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
}

.searchbar-div {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 5px;
}
.searchbar-div .searchbar {
  padding: 0.3em;
  border: none;
  border-radius: 8px;
  outline: none;
}
.searchbar-div .search-icon {
  max-width: 10%;
  cursor: pointer;
}
.searchbar-div ::placeholder {
  color: #1d213a;
}

@media only screen and (min-width: 1200px) {
  #content {
    display: flex;
  }
  #content .main-content-div {
    height: 90vh;
    padding: 2em 2em 2em 2em;
    gap: 2em;
    font-size: 1.2rem;
    justify-content: space-around;
  }
  #content .main-content-div .weather-location-div .weather-condition-image {
    max-width: 100%;
  }
  #content .main-content-div .weather-location-div .map-marker {
    max-width: 40%;
  }
  #content .main-content-div .degrees {
    font-size: 4rem;
  }
  #content .weather-prognose {
    width: 100%;
    padding: 0em 2em;
  }
  #content .weather-prognose .day-prognose {
    justify-content: space-around;
    gap: 40px;
  }
  #content .weather-prognose .day-prognose img {
    max-width: 100%;
  }
  #content .weather-prognose .day-prognose p {
    max-width: 10%;
    font-size: 1.2rem;
  }
  .todays-highlights .highlights-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  .todays-highlights .moon-illumination {
    grid-column-start: 1;
    grid-column-end: 4;
  }
}`, "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAIA;EACE,sBAAA;EACA,SAAA;EACA,UAAA;AAHF;;AAMA;EACE,yBAVQ;AAOV;;AAMA;EACE,YAbU;AAUZ;;AAMA;EACE,YAjBU;AAcZ;;AAMA;EACE,yBAvBc;EAwBd,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,2BAAA;AAHF;AAME;EACE,aAAA;EACA,UAAA;AAJJ;AAME;EACE,kBAAA;AAJJ;AASA;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;AAPF;AAQE;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;AANJ;AAOI;EACE,cAAA;AALN;AASE;EACE,gBAAA;AAPJ;AAUE;EACE,cAAA;AARJ;AAcE;EACE,iBAAA;AAZJ;;AAiBA;EACE,yBAxEc;EAyEd,2BAAA;AAdF;AAgBE;EACE,aAAA;EACA,6BAAA;EACA,mBAAA;AAdJ;AAgBI;EACE,aAAA;AAdN;AAkBE;EACE,cAAA;AAhBJ;;AAoBA;EACE,2BAAA;EACA,kBAAA;AAjBF;AAmBE;EACE,YAAA;AAjBJ;AAoBE;EACE,aAAA;EACA,qCAAA;EACA,SAAA;AAlBJ;AAqBE;EACE,yBAzGY;AAsFhB;AAqBE;EACE,yBA5GY;AAyFhB;AAsBE;EACE,yBAhHY;AA4FhB;AAuBE;EACE,yBApHY;AA+FhB;AAwBE;EACE,yBAxHY;AAkGhB;AAyBE;EACE,yBA5HY;AAqGhB;AA0BE;EACE,yBAhIY;EAiIZ,oBAAA;EACA,kBAAA;AAxBJ;;AA4BA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,SAAA;EACA,eAAA;AAzBF;AA2BE;EACE,cAAA;EACA,YAAA;EACA,kBAAA;EACA,aAAA;AAzBJ;AA4BE;EACE,cAAA;EACA,eAAA;AA1BJ;AA6BE;EACE,cA1JY;AA+HhB;;AA+BA;EACE;IACE,aAAA;EA5BF;EA+BE;IACE,YAAA;IACA,wBAAA;IACA,QAAA;IACA,iBAAA;IACA,6BAAA;EA7BJ;EAgCM;IACE,eAAA;EA9BR;EAgCQ;IACE,cAAA;EA9BV;EAmCI;IACE,eAAA;EAjCN;EAoCF;IACE,WAAA;IACA,gBAAA;EAlCA;EAmCF;IACE,6BAAA;IACA,SAAA;EAjCA;EAkCA;IACE,eAAA;EAhCF;EAkCA;IACE,cAAA;IACA,iBAAA;EAhCF;EAuCA;IACE,qCAAA;EArCF;EAuCA;IACE,oBAAA;IACA,kBAAA;EArCF;AACF","sourcesContent":["$section-color: #1d213a;\n$bgcolor: #151623;\n$fontcolor: white;\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  background-color: $bgcolor;\n}\n\np {\n  color: $fontcolor;\n}\n\nh1 {\n  color: $fontcolor;\n}\n\n.main-content-div {\n  background-color: $section-color;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 20px 20px 20px 20px;\n\n.weather-status-div{\n  .min-max-div {\n    display: flex;\n    gap: 1.5em;\n  }\n  .weather-conditions{\n    text-align: center;\n  }\n\n}\n\n.weather-location-div{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  .location-div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    .map-marker {\n      max-width: 30%;\n    }\n  }\n\n  .my-location {\n    font-size: 1.5em;\n  }\n\n  .weather-condition-image {\n    max-width: 30%;\n  }\n}\n\n\n\n  .degrees {\n    font-size: 2.5rem;\n  }\n\n}\n\n.weather-prognose {\n  background-color: $section-color;\n  margin: 20px 20px 20px 20px;\n\n  .day-prognose {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n\n    p {\n      max-width: 5%;\n    }\n  }\n\n  .weather-condition-image {\n    max-width: 10%;\n  }\n}\n\n.todays-highlights {\n  margin: 20px 20px 20px 20px;\n  text-align: center;\n\n  .highlights-headline {\n    margin: 10px;\n  }\n\n  .highlights-grid {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    gap: 10px;\n  }\n\n  .wind {\n    background-color: $section-color;\n  }\n  .humidity {\n    background-color: $section-color;\n  }\n\n  .feels-like {\n    background-color: $section-color;\n  }\n\n  .precipitation {\n    background-color: $section-color;\n  }\n\n  .sunrise {\n    background-color: $section-color;\n  }\n\n  .sunset {\n    background-color: $section-color;\n  }\n\n  .moon-illumination {\n    background-color: $section-color;\n    grid-column-start: 1;\n    grid-column-end: 3;\n  }\n}\n\n.searchbar-div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  margin-top: 5px;\n\n  .searchbar {\n    padding: 0.3em;\n    border: none;\n    border-radius: 8px;\n    outline: none;\n  }\n\n  .search-icon {\n    max-width: 10%;\n    cursor: pointer;\n  }\n\n  ::placeholder {\n    color: $section-color;\n  }\n}\n\n@media only screen and (min-width: 1200px) {\n  #content {\n    display: flex;\n\n\n    .main-content-div {\n      height: 90vh;\n      padding: 2em 2em 2em 2em;\n      gap: 2em;\n      font-size: 1.2rem;\n      justify-content: space-around;\n\n      .weather-location-div{\n        .weather-condition-image{\n          max-width: 100%;\n        }\n          .map-marker{\n            max-width: 40%;\n          }\n\n      }\n\n      .degrees{\n        font-size: 4rem;\n      }\n    }\n.weather-prognose{\n  width: 100%;\n  padding: 0em 2em;\n.day-prognose{\n  justify-content: space-around;\n  gap: 40px;\n  img{\n    max-width: 100%;\n  }\n  p{\n    max-width: 10%;\n    font-size: 1.2rem;\n  }\n}\n}\n  }\n.todays-highlights{\n\n  .highlights-grid{\n    grid-template-columns: repeat(3, 1fr);\n  }\n  .moon-illumination{\n    grid-column-start: 1;\n    grid-column-end: 4;\n  }\n}\n}\n"],"sourceRoot":""}]);
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
  const contentDiv = document.getElementById("content");
  const rightSideDiv = document.getElementById("right-side");

  const todaysHighlightsDiv = document.createElement("div");
  todaysHighlightsDiv.classList.add("todays-highlights");

  const gridDiv = document.createElement("div");
  gridDiv.classList.add("highlights-grid");

  const headline = document.createElement("h1");
  headline.classList.add("highlights-headline");
  headline.textContent = "Todays Highlights";

  todaysHighlightsDiv.appendChild(headline);

  const windDiv = document.createElement("div");
  windDiv.classList.add("wind");

  const windHeadline = document.createElement("p");
  windHeadline.textContent = "Wind Status in km/h";

  windDiv.appendChild(windHeadline);

  const windParagraph = document.createElement("h1");
  windParagraph.textContent = `${apiData.forecast.forecastday[0].day.maxwind_kph} km/h`;

  windDiv.appendChild(windParagraph);

  gridDiv.appendChild(windDiv);

  const humidityDiv = document.createElement("div");
  humidityDiv.classList.add("humidity");

  const humidityHeadline = document.createElement("p");
  humidityHeadline.textContent = "Humidity in %";

  humidityDiv.appendChild(humidityHeadline);

  const humidityParagraph = document.createElement("h1");
  humidityParagraph.textContent = `${apiData.forecast.forecastday[0].day.avghumidity} %`;

  humidityDiv.appendChild(humidityParagraph);

  gridDiv.appendChild(humidityDiv);

  const feelsLikeDiv = document.createElement("div");
  feelsLikeDiv.classList.add("feels-like");

  const feelsLikeHeadline = document.createElement("p");
  feelsLikeHeadline.textContent = "Currently Feels Like";

  feelsLikeDiv.appendChild(feelsLikeHeadline);

  const feelsLikeParagraph = document.createElement("h1");
  feelsLikeParagraph.textContent = `${apiData.current.feelslike_c} °C`;

  feelsLikeDiv.appendChild(feelsLikeParagraph);

  gridDiv.appendChild(feelsLikeDiv);

  const precipitationDiv = document.createElement("div");
  precipitationDiv.classList.add("precipitation");

  const precipitationHeadline = document.createElement("p");
  precipitationHeadline.textContent = "Chance of Rain in %";

  precipitationDiv.appendChild(precipitationHeadline);

  const precipitationParagraph = document.createElement("h1");
  precipitationParagraph.textContent = `${apiData.forecast.forecastday[0].day.daily_chance_of_rain} %`;

  precipitationDiv.appendChild(precipitationParagraph);

  gridDiv.appendChild(precipitationDiv);

  const sunriseDiv = document.createElement("div");
  sunriseDiv.classList.add("sunrise");

  const sunriseHeadline = document.createElement("p");
  sunriseHeadline.textContent = "Sunrise";

  sunriseDiv.appendChild(sunriseHeadline);

  const sunriseParagraph = document.createElement("h1");
  sunriseParagraph.textContent = apiData.forecast.forecastday[0].astro.sunrise;

  sunriseDiv.appendChild(sunriseParagraph);

  gridDiv.appendChild(sunriseDiv);

  const sunsetDiv = document.createElement("div");
  sunsetDiv.classList.add("sunset");

  const sunsetHeadline = document.createElement("p");
  sunsetHeadline.textContent = "Sunset";

  sunsetDiv.appendChild(sunsetHeadline);

  const sunsetParagraph = document.createElement("h1");
  sunsetParagraph.textContent = apiData.forecast.forecastday[0].astro.sunset;

  sunsetDiv.appendChild(sunsetParagraph);

  gridDiv.appendChild(sunsetDiv);

  const moonIlluminationDiv = document.createElement("div");
  moonIlluminationDiv.classList.add("moon-illumination");

  const moonIlluminationHeadline = document.createElement("p");
  moonIlluminationHeadline.textContent = "Moon Illumination in %";

  moonIlluminationDiv.appendChild(moonIlluminationHeadline);

  const moonIlluminationParagraph = document.createElement("h1");
  moonIlluminationParagraph.textContent = `${apiData.forecast.forecastday[0].astro.moon_illumination} %`;

  moonIlluminationDiv.appendChild(moonIlluminationParagraph);

  gridDiv.appendChild(moonIlluminationDiv);

  todaysHighlightsDiv.appendChild(gridDiv);

  rightSideDiv.appendChild(todaysHighlightsDiv);
  contentDiv.appendChild(rightSideDiv);
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
  const leftSideDiv = document.getElementById('left-side');

  const weatherLocationDiv = document.createElement('div');
  weatherLocationDiv.classList.add('weather-location-div');

  const weatherStatusDiv = document.createElement('div');
  weatherStatusDiv.classList.add('weather-status-div');

  const mainContentDiv = document.createElement('div');
  mainContentDiv.classList.add('main-content-div');

  const myLocationTitle = document.createElement('h1');
  myLocationTitle.classList.add('my-location');
  myLocationTitle.textContent = 'My Location';

  weatherLocationDiv.appendChild(myLocationTitle);

  const weatherImage = new Image();
  weatherImage.src = apiData.current.condition.icon;
  weatherImage.classList.add('weather-condition-image');

  weatherLocationDiv.appendChild(weatherImage);

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

  weatherLocationDiv.appendChild(locationDiv);
  mainContentDiv.appendChild(weatherLocationDiv);

  const degreeParagraph = document.createElement('p');
  degreeParagraph.classList.add('degrees');
  degreeParagraph.textContent = `${apiData.current.temp_c}°C`;

  mainContentDiv.appendChild(degreeParagraph);

  const weatherConditionsParagraph = document.createElement('p');
  weatherConditionsParagraph.classList.add('weather-conditions');
  weatherConditionsParagraph.textContent = apiData.current.condition.text;

  weatherStatusDiv.appendChild(weatherConditionsParagraph);

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

  weatherStatusDiv.appendChild(minMaxDiv);
  mainContentDiv.appendChild(weatherStatusDiv);

  leftSideDiv.appendChild(mainContentDiv);
  contentDiv.appendChild(leftSideDiv);
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
function createWeatherPrognoseSection(forecastApiData, weekdays) {
  const contentDiv = document.getElementById("content");
  const rightSideDiv = document.getElementById("right-side");

  const weatherPrognoseDiv = document.createElement("div");
  weatherPrognoseDiv.classList.add("weather-prognose");

  const day1PrognoseDiv = document.createElement("div");
  day1PrognoseDiv.classList.add("day-prognose");

  const day1Paragraph = document.createElement("p");
  day1Paragraph.textContent = weekdays[0];

  day1PrognoseDiv.appendChild(day1Paragraph);

  const weatherImage = new Image();
  weatherImage.src = forecastApiData.forecast.forecastday[0].day.condition.icon;
  weatherImage.classList.add("weather-condition-image");

  day1PrognoseDiv.appendChild(weatherImage);

  const day1MaxTemp = document.createElement("p");
  day1MaxTemp.textContent = `${forecastApiData.forecast.forecastday[0].day.maxtemp_c}°C`;

  day1PrognoseDiv.appendChild(day1MaxTemp);

  const day1MinTemp = document.createElement("p");
  day1MinTemp.textContent = `${forecastApiData.forecast.forecastday[0].day.mintemp_c}°C`;

  day1PrognoseDiv.appendChild(day1MinTemp);

  weatherPrognoseDiv.appendChild(day1PrognoseDiv);

  const day2PrognoseDiv = document.createElement("div");
  day2PrognoseDiv.classList.add("day-prognose");

  const day2Paragraph = document.createElement("p");
  day2Paragraph.textContent = weekdays[1];

  day2PrognoseDiv.appendChild(day2Paragraph);

  const weatherImage2 = new Image();
  weatherImage2.src =
    forecastApiData.forecast.forecastday[1].day.condition.icon;
  weatherImage2.classList.add("weather-condition-image");

  day2PrognoseDiv.appendChild(weatherImage2);

  const day2MaxTemp = document.createElement("p");
  day2MaxTemp.textContent = `${forecastApiData.forecast.forecastday[1].day.maxtemp_c}°C`;

  day2PrognoseDiv.appendChild(day2MaxTemp);

  const day2MinTemp = document.createElement("p");
  day2MinTemp.textContent = `${forecastApiData.forecast.forecastday[1].day.mintemp_c}°C`;

  day2PrognoseDiv.appendChild(day2MinTemp);

  weatherPrognoseDiv.appendChild(day2PrognoseDiv);

  const day3PrognoseDiv = document.createElement("div");
  day3PrognoseDiv.classList.add("day-prognose");

  const day3Paragraph = document.createElement("p");
  day3Paragraph.textContent = weekdays[2];

  day3PrognoseDiv.appendChild(day3Paragraph);

  const weatherImage3 = new Image();
  weatherImage3.src =
    forecastApiData.forecast.forecastday[2].day.condition.icon;
  weatherImage3.classList.add("weather-condition-image");

  day3PrognoseDiv.appendChild(weatherImage3);

  const day3MaxTemp = document.createElement("p");
  day3MaxTemp.textContent = `${forecastApiData.forecast.forecastday[2].day.maxtemp_c}°C`;

  day3PrognoseDiv.appendChild(day3MaxTemp);

  const day3MinTemp = document.createElement("p");
  day3MinTemp.textContent = `${forecastApiData.forecast.forecastday[2].day.mintemp_c}°C`;

  day3PrognoseDiv.appendChild(day3MinTemp);

  weatherPrognoseDiv.appendChild(day3PrognoseDiv);

  rightSideDiv.appendChild(weatherPrognoseDiv);
  contentDiv.appendChild(rightSideDiv);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createWeatherPrognoseSection);


/***/ }),

/***/ "./src/components/searchBar.js":
/*!*************************************!*\
  !*** ./src/components/searchBar.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_cloud_search_outline_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/cloud-search-outline.svg */ "./src/assets/cloud-search-outline.svg");


function searchBar() {
  const contentDiv = document.getElementById("content");
  const leftSideDiv = document.getElementById("left-side");

  const searchBarDiv = document.createElement("div");
  searchBarDiv.classList.add("searchbar-div");

  const inputField = document.createElement("input");
  inputField.classList.add("searchbar");
  inputField.setAttribute("type", "search");
  inputField.setAttribute("placeholder", "Search...");

  searchBarDiv.appendChild(inputField);

  const searchIcon = new Image();
  searchIcon.src = _assets_cloud_search_outline_svg__WEBPACK_IMPORTED_MODULE_0__;
  searchIcon.classList.add("search-icon");

  searchBarDiv.appendChild(searchIcon);
  leftSideDiv.appendChild(searchBarDiv);

  contentDiv.appendChild(leftSideDiv);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (searchBar);


/***/ }),

/***/ "./src/functions/clearContent.js":
/*!***************************************!*\
  !*** ./src/functions/clearContent.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function clearContent() {
  const mainContentDiv = document.querySelector('.main-content-div');
  mainContentDiv.remove();

  const weatherPrognoseDiv = document.querySelector('.weather-prognose');
  weatherPrognoseDiv.remove();

  const todaysHighlightsDiv = document.querySelector('.todays-highlights');
  todaysHighlightsDiv.remove();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clearContent);


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
async function fetchCurrentWeather(searchbarValue) {
  try {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=5ef2cc7df56f4d9494d203100242002&q=${searchbarValue}`, { mode: 'cors' });
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
async function fetchWeatherForecast(searchbarValue) {
  try {
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=5ef2cc7df56f4d9494d203100242002&q=${searchbarValue}&days=3`, { mode: 'cors' });
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

/***/ "./src/functions/getDay.js":
/*!*********************************!*\
  !*** ./src/functions/getDay.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function getDays(apiData) {
  const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const date = new Date(apiData);
  return weekDays[date.getDay()];
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getDays);


/***/ }),

/***/ "./src/assets/cloud-search-outline.svg":
/*!*********************************************!*\
  !*** ./src/assets/cloud-search-outline.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4a750a31318e710db1a6.svg";

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
/* harmony import */ var _components_searchBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/searchBar */ "./src/components/searchBar.js");
/* harmony import */ var _functions_clearContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./functions/clearContent */ "./src/functions/clearContent.js");
/* harmony import */ var _functions_getDay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./functions/getDay */ "./src/functions/getDay.js");










(0,_components_searchBar__WEBPACK_IMPORTED_MODULE_6__["default"])();
const submitBtn = document.querySelector('.search-icon');
const inputField = document.querySelector('.searchbar');

async function runCode(searchbarValue) {
  const apiDataCurrent = await (0,_functions_fetchCurrentWeather__WEBPACK_IMPORTED_MODULE_4__["default"])(searchbarValue);
  const apiDataForecast = await (0,_functions_fetchWeatherForecast__WEBPACK_IMPORTED_MODULE_5__["default"])(searchbarValue);
  const weekDays = apiDataForecast.forecast.forecastday.map((day) => (0,_functions_getDay__WEBPACK_IMPORTED_MODULE_8__["default"])(day.date));
  console.log(weekDays);
  (0,_components_mainSection__WEBPACK_IMPORTED_MODULE_1__["default"])(apiDataCurrent, apiDataForecast);
  (0,_components_prognoseSection__WEBPACK_IMPORTED_MODULE_2__["default"])(apiDataForecast, weekDays);
  (0,_components_highlightSection__WEBPACK_IMPORTED_MODULE_3__["default"])(apiDataForecast);
}

runCode('london');

submitBtn.addEventListener('click', () => {
  const inputFieldValue = inputField.value;
  (0,_functions_clearContent__WEBPACK_IMPORTED_MODULE_7__["default"])();
  runCode(inputFieldValue);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FzQjtBQUNtQztBQUNlO0FBQ0U7QUFDUjtBQUNFO0FBQ3JCO0FBQ0s7QUFDWDs7QUFFekMsaUVBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0EsK0JBQStCLDBFQUFtQjtBQUNsRCxnQ0FBZ0MsMkVBQW9CO0FBQ3BELHFFQUFxRSw2REFBTztBQUM1RTtBQUNBLEVBQUUsbUVBQWlCO0FBQ25CLEVBQUUsdUVBQTRCO0FBQzlCLEVBQUUsd0VBQTZCO0FBQy9COztBQUVBOztBQUVBO0FBQ0E7QUFDQSxFQUFFLG1FQUFZO0FBQ2Q7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL2hpZ2hsaWdodFNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy9tYWluU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL3Byb2dub3NlU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL3NlYXJjaEJhci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9mdW5jdGlvbnMvY2xlYXJDb250ZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Z1bmN0aW9ucy9mZXRjaEN1cnJlbnRXZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Z1bmN0aW9ucy9mZXRjaFdlYXRoZXJGb3JlY2FzdC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9mdW5jdGlvbnMvZ2V0RGF5LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTUxNjIzO1xufVxuXG5wIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5oMSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm1haW4tY29udGVudC1kaXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQyMTNhO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAyMHB4IDIwcHggMjBweCAyMHB4O1xufVxuLm1haW4tY29udGVudC1kaXYgLndlYXRoZXItc3RhdHVzLWRpdiAubWluLW1heC1kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEuNWVtO1xufVxuLm1haW4tY29udGVudC1kaXYgLndlYXRoZXItc3RhdHVzLWRpdiAud2VhdGhlci1jb25kaXRpb25zIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm1haW4tY29udGVudC1kaXYgLndlYXRoZXItbG9jYXRpb24tZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5tYWluLWNvbnRlbnQtZGl2IC53ZWF0aGVyLWxvY2F0aW9uLWRpdiAubG9jYXRpb24tZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubWFpbi1jb250ZW50LWRpdiAud2VhdGhlci1sb2NhdGlvbi1kaXYgLmxvY2F0aW9uLWRpdiAubWFwLW1hcmtlciB7XG4gIG1heC13aWR0aDogMzAlO1xufVxuLm1haW4tY29udGVudC1kaXYgLndlYXRoZXItbG9jYXRpb24tZGl2IC5teS1sb2NhdGlvbiB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG59XG4ubWFpbi1jb250ZW50LWRpdiAud2VhdGhlci1sb2NhdGlvbi1kaXYgLndlYXRoZXItY29uZGl0aW9uLWltYWdlIHtcbiAgbWF4LXdpZHRoOiAzMCU7XG59XG4ubWFpbi1jb250ZW50LWRpdiAuZGVncmVlcyB7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xufVxuXG4ud2VhdGhlci1wcm9nbm9zZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZDIxM2E7XG4gIG1hcmdpbjogMjBweCAyMHB4IDIwcHggMjBweDtcbn1cbi53ZWF0aGVyLXByb2dub3NlIC5kYXktcHJvZ25vc2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi53ZWF0aGVyLXByb2dub3NlIC5kYXktcHJvZ25vc2UgcCB7XG4gIG1heC13aWR0aDogNSU7XG59XG4ud2VhdGhlci1wcm9nbm9zZSAud2VhdGhlci1jb25kaXRpb24taW1hZ2Uge1xuICBtYXgtd2lkdGg6IDEwJTtcbn1cblxuLnRvZGF5cy1oaWdobGlnaHRzIHtcbiAgbWFyZ2luOiAyMHB4IDIwcHggMjBweCAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udG9kYXlzLWhpZ2hsaWdodHMgLmhpZ2hsaWdodHMtaGVhZGxpbmUge1xuICBtYXJnaW46IDEwcHg7XG59XG4udG9kYXlzLWhpZ2hsaWdodHMgLmhpZ2hsaWdodHMtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gIGdhcDogMTBweDtcbn1cbi50b2RheXMtaGlnaGxpZ2h0cyAud2luZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZDIxM2E7XG59XG4udG9kYXlzLWhpZ2hsaWdodHMgLmh1bWlkaXR5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFkMjEzYTtcbn1cbi50b2RheXMtaGlnaGxpZ2h0cyAuZmVlbHMtbGlrZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZDIxM2E7XG59XG4udG9kYXlzLWhpZ2hsaWdodHMgLnByZWNpcGl0YXRpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQyMTNhO1xufVxuLnRvZGF5cy1oaWdobGlnaHRzIC5zdW5yaXNlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFkMjEzYTtcbn1cbi50b2RheXMtaGlnaGxpZ2h0cyAuc3Vuc2V0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFkMjEzYTtcbn1cbi50b2RheXMtaGlnaGxpZ2h0cyAubW9vbi1pbGx1bWluYXRpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQyMTNhO1xuICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xufVxuXG4uc2VhcmNoYmFyLWRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbi5zZWFyY2hiYXItZGl2IC5zZWFyY2hiYXIge1xuICBwYWRkaW5nOiAwLjNlbTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uc2VhcmNoYmFyLWRpdiAuc2VhcmNoLWljb24ge1xuICBtYXgtd2lkdGg6IDEwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnNlYXJjaGJhci1kaXYgOjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjMWQyMTNhO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAjY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICAjY29udGVudCAubWFpbi1jb250ZW50LWRpdiB7XG4gICAgaGVpZ2h0OiA5MHZoO1xuICAgIHBhZGRpbmc6IDJlbSAyZW0gMmVtIDJlbTtcbiAgICBnYXA6IDJlbTtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgfVxuICAjY29udGVudCAubWFpbi1jb250ZW50LWRpdiAud2VhdGhlci1sb2NhdGlvbi1kaXYgLndlYXRoZXItY29uZGl0aW9uLWltYWdlIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cbiAgI2NvbnRlbnQgLm1haW4tY29udGVudC1kaXYgLndlYXRoZXItbG9jYXRpb24tZGl2IC5tYXAtbWFya2VyIHtcbiAgICBtYXgtd2lkdGg6IDQwJTtcbiAgfVxuICAjY29udGVudCAubWFpbi1jb250ZW50LWRpdiAuZGVncmVlcyB7XG4gICAgZm9udC1zaXplOiA0cmVtO1xuICB9XG4gICNjb250ZW50IC53ZWF0aGVyLXByb2dub3NlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAwZW0gMmVtO1xuICB9XG4gICNjb250ZW50IC53ZWF0aGVyLXByb2dub3NlIC5kYXktcHJvZ25vc2Uge1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGdhcDogNDBweDtcbiAgfVxuICAjY29udGVudCAud2VhdGhlci1wcm9nbm9zZSAuZGF5LXByb2dub3NlIGltZyB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG4gICNjb250ZW50IC53ZWF0aGVyLXByb2dub3NlIC5kYXktcHJvZ25vc2UgcCB7XG4gICAgbWF4LXdpZHRoOiAxMCU7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gIH1cbiAgLnRvZGF5cy1oaWdobGlnaHRzIC5oaWdobGlnaHRzLWdyaWQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4gIH1cbiAgLnRvZGF5cy1oaWdobGlnaHRzIC5tb29uLWlsbHVtaW5hdGlvbiB7XG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gICAgZ3JpZC1jb2x1bW4tZW5kOiA0O1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFJQTtFQUNFLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFIRjs7QUFNQTtFQUNFLHlCQVZRO0FBT1Y7O0FBTUE7RUFDRSxZQWJVO0FBVVo7O0FBTUE7RUFDRSxZQWpCVTtBQWNaOztBQU1BO0VBQ0UseUJBdkJjO0VBd0JkLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtBQUhGO0FBTUU7RUFDRSxhQUFBO0VBQ0EsVUFBQTtBQUpKO0FBTUU7RUFDRSxrQkFBQTtBQUpKO0FBU0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQVBGO0FBUUU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQU5KO0FBT0k7RUFDRSxjQUFBO0FBTE47QUFTRTtFQUNFLGdCQUFBO0FBUEo7QUFVRTtFQUNFLGNBQUE7QUFSSjtBQWNFO0VBQ0UsaUJBQUE7QUFaSjs7QUFpQkE7RUFDRSx5QkF4RWM7RUF5RWQsMkJBQUE7QUFkRjtBQWdCRTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FBZEo7QUFnQkk7RUFDRSxhQUFBO0FBZE47QUFrQkU7RUFDRSxjQUFBO0FBaEJKOztBQW9CQTtFQUNFLDJCQUFBO0VBQ0Esa0JBQUE7QUFqQkY7QUFtQkU7RUFDRSxZQUFBO0FBakJKO0FBb0JFO0VBQ0UsYUFBQTtFQUNBLHFDQUFBO0VBQ0EsU0FBQTtBQWxCSjtBQXFCRTtFQUNFLHlCQXpHWTtBQXNGaEI7QUFxQkU7RUFDRSx5QkE1R1k7QUF5RmhCO0FBc0JFO0VBQ0UseUJBaEhZO0FBNEZoQjtBQXVCRTtFQUNFLHlCQXBIWTtBQStGaEI7QUF3QkU7RUFDRSx5QkF4SFk7QUFrR2hCO0FBeUJFO0VBQ0UseUJBNUhZO0FBcUdoQjtBQTBCRTtFQUNFLHlCQWhJWTtFQWlJWixvQkFBQTtFQUNBLGtCQUFBO0FBeEJKOztBQTRCQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUF6QkY7QUEyQkU7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQXpCSjtBQTRCRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBMUJKO0FBNkJFO0VBQ0UsY0ExSlk7QUErSGhCOztBQStCQTtFQUNFO0lBQ0UsYUFBQTtFQTVCRjtFQStCRTtJQUNFLFlBQUE7SUFDQSx3QkFBQTtJQUNBLFFBQUE7SUFDQSxpQkFBQTtJQUNBLDZCQUFBO0VBN0JKO0VBZ0NNO0lBQ0UsZUFBQTtFQTlCUjtFQWdDUTtJQUNFLGNBQUE7RUE5QlY7RUFtQ0k7SUFDRSxlQUFBO0VBakNOO0VBb0NGO0lBQ0UsV0FBQTtJQUNBLGdCQUFBO0VBbENBO0VBbUNGO0lBQ0UsNkJBQUE7SUFDQSxTQUFBO0VBakNBO0VBa0NBO0lBQ0UsZUFBQTtFQWhDRjtFQWtDQTtJQUNFLGNBQUE7SUFDQSxpQkFBQTtFQWhDRjtFQXVDQTtJQUNFLHFDQUFBO0VBckNGO0VBdUNBO0lBQ0Usb0JBQUE7SUFDQSxrQkFBQTtFQXJDRjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiRzZWN0aW9uLWNvbG9yOiAjMWQyMTNhO1xcbiRiZ2NvbG9yOiAjMTUxNjIzO1xcbiRmb250Y29sb3I6IHdoaXRlO1xcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJnY29sb3I7XFxufVxcblxcbnAge1xcbiAgY29sb3I6ICRmb250Y29sb3I7XFxufVxcblxcbmgxIHtcXG4gIGNvbG9yOiAkZm9udGNvbG9yO1xcbn1cXG5cXG4ubWFpbi1jb250ZW50LWRpdiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2VjdGlvbi1jb2xvcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiAyMHB4IDIwcHggMjBweCAyMHB4O1xcblxcbi53ZWF0aGVyLXN0YXR1cy1kaXZ7XFxuICAubWluLW1heC1kaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEuNWVtO1xcbiAgfVxcbiAgLndlYXRoZXItY29uZGl0aW9uc3tcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbn1cXG5cXG4ud2VhdGhlci1sb2NhdGlvbi1kaXZ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAubG9jYXRpb24tZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIC5tYXAtbWFya2VyIHtcXG4gICAgICBtYXgtd2lkdGg6IDMwJTtcXG4gICAgfVxcbiAgfVxcblxcbiAgLm15LWxvY2F0aW9uIHtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gIH1cXG5cXG4gIC53ZWF0aGVyLWNvbmRpdGlvbi1pbWFnZSB7XFxuICAgIG1heC13aWR0aDogMzAlO1xcbiAgfVxcbn1cXG5cXG5cXG5cXG4gIC5kZWdyZWVzIHtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICB9XFxuXFxufVxcblxcbi53ZWF0aGVyLXByb2dub3NlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRzZWN0aW9uLWNvbG9yO1xcbiAgbWFyZ2luOiAyMHB4IDIwcHggMjBweCAyMHB4O1xcblxcbiAgLmRheS1wcm9nbm9zZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBwIHtcXG4gICAgICBtYXgtd2lkdGg6IDUlO1xcbiAgICB9XFxuICB9XFxuXFxuICAud2VhdGhlci1jb25kaXRpb24taW1hZ2Uge1xcbiAgICBtYXgtd2lkdGg6IDEwJTtcXG4gIH1cXG59XFxuXFxuLnRvZGF5cy1oaWdobGlnaHRzIHtcXG4gIG1hcmdpbjogMjBweCAyMHB4IDIwcHggMjBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gIC5oaWdobGlnaHRzLWhlYWRsaW5lIHtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgfVxcblxcbiAgLmhpZ2hsaWdodHMtZ3JpZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICAgIGdhcDogMTBweDtcXG4gIH1cXG5cXG4gIC53aW5kIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY3Rpb24tY29sb3I7XFxuICB9XFxuICAuaHVtaWRpdHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2VjdGlvbi1jb2xvcjtcXG4gIH1cXG5cXG4gIC5mZWVscy1saWtlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY3Rpb24tY29sb3I7XFxuICB9XFxuXFxuICAucHJlY2lwaXRhdGlvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWN0aW9uLWNvbG9yO1xcbiAgfVxcblxcbiAgLnN1bnJpc2Uge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2VjdGlvbi1jb2xvcjtcXG4gIH1cXG5cXG4gIC5zdW5zZXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2VjdGlvbi1jb2xvcjtcXG4gIH1cXG5cXG4gIC5tb29uLWlsbHVtaW5hdGlvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWN0aW9uLWNvbG9yO1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xcbiAgfVxcbn1cXG5cXG4uc2VhcmNoYmFyLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcblxcbiAgLnNlYXJjaGJhciB7XFxuICAgIHBhZGRpbmc6IDAuM2VtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gIH1cXG5cXG4gIC5zZWFyY2gtaWNvbiB7XFxuICAgIG1heC13aWR0aDogMTAlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxuXFxuICA6OnBsYWNlaG9sZGVyIHtcXG4gICAgY29sb3I6ICRzZWN0aW9uLWNvbG9yO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xcbiAgI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcblxcblxcbiAgICAubWFpbi1jb250ZW50LWRpdiB7XFxuICAgICAgaGVpZ2h0OiA5MHZoO1xcbiAgICAgIHBhZGRpbmc6IDJlbSAyZW0gMmVtIDJlbTtcXG4gICAgICBnYXA6IDJlbTtcXG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG5cXG4gICAgICAud2VhdGhlci1sb2NhdGlvbi1kaXZ7XFxuICAgICAgICAud2VhdGhlci1jb25kaXRpb24taW1hZ2V7XFxuICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgICAgIH1cXG4gICAgICAgICAgLm1hcC1tYXJrZXJ7XFxuICAgICAgICAgICAgbWF4LXdpZHRoOiA0MCU7XFxuICAgICAgICAgIH1cXG5cXG4gICAgICB9XFxuXFxuICAgICAgLmRlZ3JlZXN7XFxuICAgICAgICBmb250LXNpemU6IDRyZW07XFxuICAgICAgfVxcbiAgICB9XFxuLndlYXRoZXItcHJvZ25vc2V7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDBlbSAyZW07XFxuLmRheS1wcm9nbm9zZXtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgZ2FwOiA0MHB4O1xcbiAgaW1ne1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICB9XFxuICBwe1xcbiAgICBtYXgtd2lkdGg6IDEwJTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICB9XFxufVxcbn1cXG4gIH1cXG4udG9kYXlzLWhpZ2hsaWdodHN7XFxuXFxuICAuaGlnaGxpZ2h0cy1ncmlke1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgfVxcbiAgLm1vb24taWxsdW1pbmF0aW9ue1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiA0O1xcbiAgfVxcbn1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBjcmVhdGVUb2RheXNIaWdobGlnaHRzU2VjdGlvbihhcGlEYXRhKSB7XG4gIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gIGNvbnN0IHJpZ2h0U2lkZURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmlnaHQtc2lkZVwiKTtcblxuICBjb25zdCB0b2RheXNIaWdobGlnaHRzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdG9kYXlzSGlnaGxpZ2h0c0Rpdi5jbGFzc0xpc3QuYWRkKFwidG9kYXlzLWhpZ2hsaWdodHNcIik7XG5cbiAgY29uc3QgZ3JpZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGdyaWREaXYuY2xhc3NMaXN0LmFkZChcImhpZ2hsaWdodHMtZ3JpZFwiKTtcblxuICBjb25zdCBoZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgaGVhZGxpbmUuY2xhc3NMaXN0LmFkZChcImhpZ2hsaWdodHMtaGVhZGxpbmVcIik7XG4gIGhlYWRsaW5lLnRleHRDb250ZW50ID0gXCJUb2RheXMgSGlnaGxpZ2h0c1wiO1xuXG4gIHRvZGF5c0hpZ2hsaWdodHNEaXYuYXBwZW5kQ2hpbGQoaGVhZGxpbmUpO1xuXG4gIGNvbnN0IHdpbmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB3aW5kRGl2LmNsYXNzTGlzdC5hZGQoXCJ3aW5kXCIpO1xuXG4gIGNvbnN0IHdpbmRIZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICB3aW5kSGVhZGxpbmUudGV4dENvbnRlbnQgPSBcIldpbmQgU3RhdHVzIGluIGttL2hcIjtcblxuICB3aW5kRGl2LmFwcGVuZENoaWxkKHdpbmRIZWFkbGluZSk7XG5cbiAgY29uc3Qgd2luZFBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgd2luZFBhcmFncmFwaC50ZXh0Q29udGVudCA9IGAke2FwaURhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5Lm1heHdpbmRfa3BofSBrbS9oYDtcblxuICB3aW5kRGl2LmFwcGVuZENoaWxkKHdpbmRQYXJhZ3JhcGgpO1xuXG4gIGdyaWREaXYuYXBwZW5kQ2hpbGQod2luZERpdik7XG5cbiAgY29uc3QgaHVtaWRpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBodW1pZGl0eURpdi5jbGFzc0xpc3QuYWRkKFwiaHVtaWRpdHlcIik7XG5cbiAgY29uc3QgaHVtaWRpdHlIZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBodW1pZGl0eUhlYWRsaW5lLnRleHRDb250ZW50ID0gXCJIdW1pZGl0eSBpbiAlXCI7XG5cbiAgaHVtaWRpdHlEaXYuYXBwZW5kQ2hpbGQoaHVtaWRpdHlIZWFkbGluZSk7XG5cbiAgY29uc3QgaHVtaWRpdHlQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGh1bWlkaXR5UGFyYWdyYXBoLnRleHRDb250ZW50ID0gYCR7YXBpRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkuYXZnaHVtaWRpdHl9ICVgO1xuXG4gIGh1bWlkaXR5RGl2LmFwcGVuZENoaWxkKGh1bWlkaXR5UGFyYWdyYXBoKTtcblxuICBncmlkRGl2LmFwcGVuZENoaWxkKGh1bWlkaXR5RGl2KTtcblxuICBjb25zdCBmZWVsc0xpa2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmZWVsc0xpa2VEaXYuY2xhc3NMaXN0LmFkZChcImZlZWxzLWxpa2VcIik7XG5cbiAgY29uc3QgZmVlbHNMaWtlSGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZmVlbHNMaWtlSGVhZGxpbmUudGV4dENvbnRlbnQgPSBcIkN1cnJlbnRseSBGZWVscyBMaWtlXCI7XG5cbiAgZmVlbHNMaWtlRGl2LmFwcGVuZENoaWxkKGZlZWxzTGlrZUhlYWRsaW5lKTtcblxuICBjb25zdCBmZWVsc0xpa2VQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGZlZWxzTGlrZVBhcmFncmFwaC50ZXh0Q29udGVudCA9IGAke2FwaURhdGEuY3VycmVudC5mZWVsc2xpa2VfY30gwrBDYDtcblxuICBmZWVsc0xpa2VEaXYuYXBwZW5kQ2hpbGQoZmVlbHNMaWtlUGFyYWdyYXBoKTtcblxuICBncmlkRGl2LmFwcGVuZENoaWxkKGZlZWxzTGlrZURpdik7XG5cbiAgY29uc3QgcHJlY2lwaXRhdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByZWNpcGl0YXRpb25EaXYuY2xhc3NMaXN0LmFkZChcInByZWNpcGl0YXRpb25cIik7XG5cbiAgY29uc3QgcHJlY2lwaXRhdGlvbkhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHByZWNpcGl0YXRpb25IZWFkbGluZS50ZXh0Q29udGVudCA9IFwiQ2hhbmNlIG9mIFJhaW4gaW4gJVwiO1xuXG4gIHByZWNpcGl0YXRpb25EaXYuYXBwZW5kQ2hpbGQocHJlY2lwaXRhdGlvbkhlYWRsaW5lKTtcblxuICBjb25zdCBwcmVjaXBpdGF0aW9uUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBwcmVjaXBpdGF0aW9uUGFyYWdyYXBoLnRleHRDb250ZW50ID0gYCR7YXBpRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkuZGFpbHlfY2hhbmNlX29mX3JhaW59ICVgO1xuXG4gIHByZWNpcGl0YXRpb25EaXYuYXBwZW5kQ2hpbGQocHJlY2lwaXRhdGlvblBhcmFncmFwaCk7XG5cbiAgZ3JpZERpdi5hcHBlbmRDaGlsZChwcmVjaXBpdGF0aW9uRGl2KTtcblxuICBjb25zdCBzdW5yaXNlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc3VucmlzZURpdi5jbGFzc0xpc3QuYWRkKFwic3VucmlzZVwiKTtcblxuICBjb25zdCBzdW5yaXNlSGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgc3VucmlzZUhlYWRsaW5lLnRleHRDb250ZW50ID0gXCJTdW5yaXNlXCI7XG5cbiAgc3VucmlzZURpdi5hcHBlbmRDaGlsZChzdW5yaXNlSGVhZGxpbmUpO1xuXG4gIGNvbnN0IHN1bnJpc2VQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIHN1bnJpc2VQYXJhZ3JhcGgudGV4dENvbnRlbnQgPSBhcGlEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmFzdHJvLnN1bnJpc2U7XG5cbiAgc3VucmlzZURpdi5hcHBlbmRDaGlsZChzdW5yaXNlUGFyYWdyYXBoKTtcblxuICBncmlkRGl2LmFwcGVuZENoaWxkKHN1bnJpc2VEaXYpO1xuXG4gIGNvbnN0IHN1bnNldERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHN1bnNldERpdi5jbGFzc0xpc3QuYWRkKFwic3Vuc2V0XCIpO1xuXG4gIGNvbnN0IHN1bnNldEhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHN1bnNldEhlYWRsaW5lLnRleHRDb250ZW50ID0gXCJTdW5zZXRcIjtcblxuICBzdW5zZXREaXYuYXBwZW5kQ2hpbGQoc3Vuc2V0SGVhZGxpbmUpO1xuXG4gIGNvbnN0IHN1bnNldFBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgc3Vuc2V0UGFyYWdyYXBoLnRleHRDb250ZW50ID0gYXBpRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5hc3Ryby5zdW5zZXQ7XG5cbiAgc3Vuc2V0RGl2LmFwcGVuZENoaWxkKHN1bnNldFBhcmFncmFwaCk7XG5cbiAgZ3JpZERpdi5hcHBlbmRDaGlsZChzdW5zZXREaXYpO1xuXG4gIGNvbnN0IG1vb25JbGx1bWluYXRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtb29uSWxsdW1pbmF0aW9uRGl2LmNsYXNzTGlzdC5hZGQoXCJtb29uLWlsbHVtaW5hdGlvblwiKTtcblxuICBjb25zdCBtb29uSWxsdW1pbmF0aW9uSGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgbW9vbklsbHVtaW5hdGlvbkhlYWRsaW5lLnRleHRDb250ZW50ID0gXCJNb29uIElsbHVtaW5hdGlvbiBpbiAlXCI7XG5cbiAgbW9vbklsbHVtaW5hdGlvbkRpdi5hcHBlbmRDaGlsZChtb29uSWxsdW1pbmF0aW9uSGVhZGxpbmUpO1xuXG4gIGNvbnN0IG1vb25JbGx1bWluYXRpb25QYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIG1vb25JbGx1bWluYXRpb25QYXJhZ3JhcGgudGV4dENvbnRlbnQgPSBgJHthcGlEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmFzdHJvLm1vb25faWxsdW1pbmF0aW9ufSAlYDtcblxuICBtb29uSWxsdW1pbmF0aW9uRGl2LmFwcGVuZENoaWxkKG1vb25JbGx1bWluYXRpb25QYXJhZ3JhcGgpO1xuXG4gIGdyaWREaXYuYXBwZW5kQ2hpbGQobW9vbklsbHVtaW5hdGlvbkRpdik7XG5cbiAgdG9kYXlzSGlnaGxpZ2h0c0Rpdi5hcHBlbmRDaGlsZChncmlkRGl2KTtcblxuICByaWdodFNpZGVEaXYuYXBwZW5kQ2hpbGQodG9kYXlzSGlnaGxpZ2h0c0Rpdik7XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQocmlnaHRTaWRlRGl2KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlVG9kYXlzSGlnaGxpZ2h0c1NlY3Rpb247XG4iLCJpbXBvcnQgbWFwTWFya2VySWNvbiBmcm9tICcuLi9hc3NldHMvbWFwLW1hcmtlci5zdmcnO1xuXG5mdW5jdGlvbiBjcmVhdGVNYWluU2VjdGlvbihhcGlEYXRhLCBmb3JlY2FzdEFwaURhdGEpIHtcbiAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gIGNvbnN0IGxlZnRTaWRlRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xlZnQtc2lkZScpO1xuXG4gIGNvbnN0IHdlYXRoZXJMb2NhdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB3ZWF0aGVyTG9jYXRpb25EaXYuY2xhc3NMaXN0LmFkZCgnd2VhdGhlci1sb2NhdGlvbi1kaXYnKTtcblxuICBjb25zdCB3ZWF0aGVyU3RhdHVzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHdlYXRoZXJTdGF0dXNEaXYuY2xhc3NMaXN0LmFkZCgnd2VhdGhlci1zdGF0dXMtZGl2Jyk7XG5cbiAgY29uc3QgbWFpbkNvbnRlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWFpbkNvbnRlbnREaXYuY2xhc3NMaXN0LmFkZCgnbWFpbi1jb250ZW50LWRpdicpO1xuXG4gIGNvbnN0IG15TG9jYXRpb25UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIG15TG9jYXRpb25UaXRsZS5jbGFzc0xpc3QuYWRkKCdteS1sb2NhdGlvbicpO1xuICBteUxvY2F0aW9uVGl0bGUudGV4dENvbnRlbnQgPSAnTXkgTG9jYXRpb24nO1xuXG4gIHdlYXRoZXJMb2NhdGlvbkRpdi5hcHBlbmRDaGlsZChteUxvY2F0aW9uVGl0bGUpO1xuXG4gIGNvbnN0IHdlYXRoZXJJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICB3ZWF0aGVySW1hZ2Uuc3JjID0gYXBpRGF0YS5jdXJyZW50LmNvbmRpdGlvbi5pY29uO1xuICB3ZWF0aGVySW1hZ2UuY2xhc3NMaXN0LmFkZCgnd2VhdGhlci1jb25kaXRpb24taW1hZ2UnKTtcblxuICB3ZWF0aGVyTG9jYXRpb25EaXYuYXBwZW5kQ2hpbGQod2VhdGhlckltYWdlKTtcblxuICBjb25zdCBsb2NhdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsb2NhdGlvbkRpdi5jbGFzc0xpc3QuYWRkKCdsb2NhdGlvbi1kaXYnKTtcblxuICBjb25zdCBtYXBNYXJrZXJJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICBtYXBNYXJrZXJJbWFnZS5zcmMgPSBtYXBNYXJrZXJJY29uO1xuICBtYXBNYXJrZXJJbWFnZS5jbGFzc0xpc3QuYWRkKCdtYXAtbWFya2VyJyk7XG5cbiAgbG9jYXRpb25EaXYuYXBwZW5kQ2hpbGQobWFwTWFya2VySW1hZ2UpO1xuXG4gIGNvbnN0IGxvY2F0aW9uUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBsb2NhdGlvblBhcmFncmFwaC5jbGFzc0xpc3QuYWRkKCdsb2NhdGlvbicpO1xuICBsb2NhdGlvblBhcmFncmFwaC50ZXh0Q29udGVudCA9IGFwaURhdGEubG9jYXRpb24ubmFtZTtcblxuICBsb2NhdGlvbkRpdi5hcHBlbmRDaGlsZChsb2NhdGlvblBhcmFncmFwaCk7XG5cbiAgd2VhdGhlckxvY2F0aW9uRGl2LmFwcGVuZENoaWxkKGxvY2F0aW9uRGl2KTtcbiAgbWFpbkNvbnRlbnREaXYuYXBwZW5kQ2hpbGQod2VhdGhlckxvY2F0aW9uRGl2KTtcblxuICBjb25zdCBkZWdyZWVQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGRlZ3JlZVBhcmFncmFwaC5jbGFzc0xpc3QuYWRkKCdkZWdyZWVzJyk7XG4gIGRlZ3JlZVBhcmFncmFwaC50ZXh0Q29udGVudCA9IGAke2FwaURhdGEuY3VycmVudC50ZW1wX2N9wrBDYDtcblxuICBtYWluQ29udGVudERpdi5hcHBlbmRDaGlsZChkZWdyZWVQYXJhZ3JhcGgpO1xuXG4gIGNvbnN0IHdlYXRoZXJDb25kaXRpb25zUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICB3ZWF0aGVyQ29uZGl0aW9uc1BhcmFncmFwaC5jbGFzc0xpc3QuYWRkKCd3ZWF0aGVyLWNvbmRpdGlvbnMnKTtcbiAgd2VhdGhlckNvbmRpdGlvbnNQYXJhZ3JhcGgudGV4dENvbnRlbnQgPSBhcGlEYXRhLmN1cnJlbnQuY29uZGl0aW9uLnRleHQ7XG5cbiAgd2VhdGhlclN0YXR1c0Rpdi5hcHBlbmRDaGlsZCh3ZWF0aGVyQ29uZGl0aW9uc1BhcmFncmFwaCk7XG5cbiAgY29uc3QgbWluTWF4RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1pbk1heERpdi5jbGFzc0xpc3QuYWRkKCdtaW4tbWF4LWRpdicpO1xuXG4gIGNvbnN0IG1pbmltdW1QYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIG1pbmltdW1QYXJhZ3JhcGguY2xhc3NMaXN0LmFkZCgnbWluLWRlZ3JlZXMnKTtcbiAgbWluaW11bVBhcmFncmFwaC50ZXh0Q29udGVudCA9IGBNaW46ICR7Zm9yZWNhc3RBcGlEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5taW50ZW1wX2N9wrBDYDtcblxuICBtaW5NYXhEaXYuYXBwZW5kQ2hpbGQobWluaW11bVBhcmFncmFwaCk7XG5cbiAgY29uc3QgbWF4aW11bVBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbWF4aW11bVBhcmFncmFwaC5jbGFzc0xpc3QuYWRkKCdtYXgtZGVncmVlcycpO1xuICBtYXhpbXVtUGFyYWdyYXBoLnRleHRDb250ZW50ID0gYE1heDogJHtmb3JlY2FzdEFwaURhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5Lm1heHRlbXBfY33CsENgO1xuXG4gIG1pbk1heERpdi5hcHBlbmRDaGlsZChtYXhpbXVtUGFyYWdyYXBoKTtcblxuICB3ZWF0aGVyU3RhdHVzRGl2LmFwcGVuZENoaWxkKG1pbk1heERpdik7XG4gIG1haW5Db250ZW50RGl2LmFwcGVuZENoaWxkKHdlYXRoZXJTdGF0dXNEaXYpO1xuXG4gIGxlZnRTaWRlRGl2LmFwcGVuZENoaWxkKG1haW5Db250ZW50RGl2KTtcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChsZWZ0U2lkZURpdik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU1haW5TZWN0aW9uO1xuIiwiZnVuY3Rpb24gY3JlYXRlV2VhdGhlclByb2dub3NlU2VjdGlvbihmb3JlY2FzdEFwaURhdGEsIHdlZWtkYXlzKSB7XG4gIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gIGNvbnN0IHJpZ2h0U2lkZURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmlnaHQtc2lkZVwiKTtcblxuICBjb25zdCB3ZWF0aGVyUHJvZ25vc2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB3ZWF0aGVyUHJvZ25vc2VEaXYuY2xhc3NMaXN0LmFkZChcIndlYXRoZXItcHJvZ25vc2VcIik7XG5cbiAgY29uc3QgZGF5MVByb2dub3NlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGF5MVByb2dub3NlRGl2LmNsYXNzTGlzdC5hZGQoXCJkYXktcHJvZ25vc2VcIik7XG5cbiAgY29uc3QgZGF5MVBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBkYXkxUGFyYWdyYXBoLnRleHRDb250ZW50ID0gd2Vla2RheXNbMF07XG5cbiAgZGF5MVByb2dub3NlRGl2LmFwcGVuZENoaWxkKGRheTFQYXJhZ3JhcGgpO1xuXG4gIGNvbnN0IHdlYXRoZXJJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICB3ZWF0aGVySW1hZ2Uuc3JjID0gZm9yZWNhc3RBcGlEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5jb25kaXRpb24uaWNvbjtcbiAgd2VhdGhlckltYWdlLmNsYXNzTGlzdC5hZGQoXCJ3ZWF0aGVyLWNvbmRpdGlvbi1pbWFnZVwiKTtcblxuICBkYXkxUHJvZ25vc2VEaXYuYXBwZW5kQ2hpbGQod2VhdGhlckltYWdlKTtcblxuICBjb25zdCBkYXkxTWF4VGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBkYXkxTWF4VGVtcC50ZXh0Q29udGVudCA9IGAke2ZvcmVjYXN0QXBpRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkubWF4dGVtcF9jfcKwQ2A7XG5cbiAgZGF5MVByb2dub3NlRGl2LmFwcGVuZENoaWxkKGRheTFNYXhUZW1wKTtcblxuICBjb25zdCBkYXkxTWluVGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBkYXkxTWluVGVtcC50ZXh0Q29udGVudCA9IGAke2ZvcmVjYXN0QXBpRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkubWludGVtcF9jfcKwQ2A7XG5cbiAgZGF5MVByb2dub3NlRGl2LmFwcGVuZENoaWxkKGRheTFNaW5UZW1wKTtcblxuICB3ZWF0aGVyUHJvZ25vc2VEaXYuYXBwZW5kQ2hpbGQoZGF5MVByb2dub3NlRGl2KTtcblxuICBjb25zdCBkYXkyUHJvZ25vc2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkYXkyUHJvZ25vc2VEaXYuY2xhc3NMaXN0LmFkZChcImRheS1wcm9nbm9zZVwiKTtcblxuICBjb25zdCBkYXkyUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGRheTJQYXJhZ3JhcGgudGV4dENvbnRlbnQgPSB3ZWVrZGF5c1sxXTtcblxuICBkYXkyUHJvZ25vc2VEaXYuYXBwZW5kQ2hpbGQoZGF5MlBhcmFncmFwaCk7XG5cbiAgY29uc3Qgd2VhdGhlckltYWdlMiA9IG5ldyBJbWFnZSgpO1xuICB3ZWF0aGVySW1hZ2UyLnNyYyA9XG4gICAgZm9yZWNhc3RBcGlEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS5jb25kaXRpb24uaWNvbjtcbiAgd2VhdGhlckltYWdlMi5jbGFzc0xpc3QuYWRkKFwid2VhdGhlci1jb25kaXRpb24taW1hZ2VcIik7XG5cbiAgZGF5MlByb2dub3NlRGl2LmFwcGVuZENoaWxkKHdlYXRoZXJJbWFnZTIpO1xuXG4gIGNvbnN0IGRheTJNYXhUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGRheTJNYXhUZW1wLnRleHRDb250ZW50ID0gYCR7Zm9yZWNhc3RBcGlEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS5tYXh0ZW1wX2N9wrBDYDtcblxuICBkYXkyUHJvZ25vc2VEaXYuYXBwZW5kQ2hpbGQoZGF5Mk1heFRlbXApO1xuXG4gIGNvbnN0IGRheTJNaW5UZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGRheTJNaW5UZW1wLnRleHRDb250ZW50ID0gYCR7Zm9yZWNhc3RBcGlEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS5taW50ZW1wX2N9wrBDYDtcblxuICBkYXkyUHJvZ25vc2VEaXYuYXBwZW5kQ2hpbGQoZGF5Mk1pblRlbXApO1xuXG4gIHdlYXRoZXJQcm9nbm9zZURpdi5hcHBlbmRDaGlsZChkYXkyUHJvZ25vc2VEaXYpO1xuXG4gIGNvbnN0IGRheTNQcm9nbm9zZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRheTNQcm9nbm9zZURpdi5jbGFzc0xpc3QuYWRkKFwiZGF5LXByb2dub3NlXCIpO1xuXG4gIGNvbnN0IGRheTNQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZGF5M1BhcmFncmFwaC50ZXh0Q29udGVudCA9IHdlZWtkYXlzWzJdO1xuXG4gIGRheTNQcm9nbm9zZURpdi5hcHBlbmRDaGlsZChkYXkzUGFyYWdyYXBoKTtcblxuICBjb25zdCB3ZWF0aGVySW1hZ2UzID0gbmV3IEltYWdlKCk7XG4gIHdlYXRoZXJJbWFnZTMuc3JjID1cbiAgICBmb3JlY2FzdEFwaURhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF5LmNvbmRpdGlvbi5pY29uO1xuICB3ZWF0aGVySW1hZ2UzLmNsYXNzTGlzdC5hZGQoXCJ3ZWF0aGVyLWNvbmRpdGlvbi1pbWFnZVwiKTtcblxuICBkYXkzUHJvZ25vc2VEaXYuYXBwZW5kQ2hpbGQod2VhdGhlckltYWdlMyk7XG5cbiAgY29uc3QgZGF5M01heFRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZGF5M01heFRlbXAudGV4dENvbnRlbnQgPSBgJHtmb3JlY2FzdEFwaURhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF5Lm1heHRlbXBfY33CsENgO1xuXG4gIGRheTNQcm9nbm9zZURpdi5hcHBlbmRDaGlsZChkYXkzTWF4VGVtcCk7XG5cbiAgY29uc3QgZGF5M01pblRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZGF5M01pblRlbXAudGV4dENvbnRlbnQgPSBgJHtmb3JlY2FzdEFwaURhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF5Lm1pbnRlbXBfY33CsENgO1xuXG4gIGRheTNQcm9nbm9zZURpdi5hcHBlbmRDaGlsZChkYXkzTWluVGVtcCk7XG5cbiAgd2VhdGhlclByb2dub3NlRGl2LmFwcGVuZENoaWxkKGRheTNQcm9nbm9zZURpdik7XG5cbiAgcmlnaHRTaWRlRGl2LmFwcGVuZENoaWxkKHdlYXRoZXJQcm9nbm9zZURpdik7XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQocmlnaHRTaWRlRGl2KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlV2VhdGhlclByb2dub3NlU2VjdGlvbjtcbiIsImltcG9ydCBzZWFyY2hTdmcgZnJvbSBcIi4uL2Fzc2V0cy9jbG91ZC1zZWFyY2gtb3V0bGluZS5zdmdcIjtcblxuZnVuY3Rpb24gc2VhcmNoQmFyKCkge1xuICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICBjb25zdCBsZWZ0U2lkZURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVmdC1zaWRlXCIpO1xuXG4gIGNvbnN0IHNlYXJjaEJhckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNlYXJjaEJhckRpdi5jbGFzc0xpc3QuYWRkKFwic2VhcmNoYmFyLWRpdlwiKTtcblxuICBjb25zdCBpbnB1dEZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBpbnB1dEZpZWxkLmNsYXNzTGlzdC5hZGQoXCJzZWFyY2hiYXJcIik7XG4gIGlucHV0RmllbGQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInNlYXJjaFwiKTtcbiAgaW5wdXRGaWVsZC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIlNlYXJjaC4uLlwiKTtcblxuICBzZWFyY2hCYXJEaXYuYXBwZW5kQ2hpbGQoaW5wdXRGaWVsZCk7XG5cbiAgY29uc3Qgc2VhcmNoSWNvbiA9IG5ldyBJbWFnZSgpO1xuICBzZWFyY2hJY29uLnNyYyA9IHNlYXJjaFN2ZztcbiAgc2VhcmNoSWNvbi5jbGFzc0xpc3QuYWRkKFwic2VhcmNoLWljb25cIik7XG5cbiAgc2VhcmNoQmFyRGl2LmFwcGVuZENoaWxkKHNlYXJjaEljb24pO1xuICBsZWZ0U2lkZURpdi5hcHBlbmRDaGlsZChzZWFyY2hCYXJEaXYpO1xuXG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobGVmdFNpZGVEaXYpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzZWFyY2hCYXI7XG4iLCJmdW5jdGlvbiBjbGVhckNvbnRlbnQoKSB7XG4gIGNvbnN0IG1haW5Db250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGVudC1kaXYnKTtcbiAgbWFpbkNvbnRlbnREaXYucmVtb3ZlKCk7XG5cbiAgY29uc3Qgd2VhdGhlclByb2dub3NlRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXItcHJvZ25vc2UnKTtcbiAgd2VhdGhlclByb2dub3NlRGl2LnJlbW92ZSgpO1xuXG4gIGNvbnN0IHRvZGF5c0hpZ2hsaWdodHNEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kYXlzLWhpZ2hsaWdodHMnKTtcbiAgdG9kYXlzSGlnaGxpZ2h0c0Rpdi5yZW1vdmUoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xlYXJDb250ZW50O1xuIiwiYXN5bmMgZnVuY3Rpb24gZmV0Y2hDdXJyZW50V2VhdGhlcihzZWFyY2hiYXJWYWx1ZSkge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9NWVmMmNjN2RmNTZmNGQ5NDk0ZDIwMzEwMDI0MjAwMiZxPSR7c2VhcmNoYmFyVmFsdWV9YCwgeyBtb2RlOiAnY29ycycgfSk7XG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdzb21ldGhpbmcgd2VudCB3cm9uZycpO1xuICAgIH1cbiAgICBjb25zdCByZXNwb25zZURhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc29sZS5sb2cocmVzcG9uc2VEYXRhKTtcbiAgICByZXR1cm4gcmVzcG9uc2VEYXRhO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZldGNoQ3VycmVudFdlYXRoZXI7XG4iLCJhc3luYyBmdW5jdGlvbiBmZXRjaFdlYXRoZXJGb3JlY2FzdChzZWFyY2hiYXJWYWx1ZSkge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PTVlZjJjYzdkZjU2ZjRkOTQ5NGQyMDMxMDAyNDIwMDImcT0ke3NlYXJjaGJhclZhbHVlfSZkYXlzPTNgLCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3NvbWV0aGluZyB3ZW50IHdyb25nJyk7XG4gICAgfVxuICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZURhdGEpO1xuICAgIHJldHVybiByZXNwb25zZURhdGE7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZmV0Y2hXZWF0aGVyRm9yZWNhc3Q7XG4iLCJmdW5jdGlvbiBnZXREYXlzKGFwaURhdGEpIHtcbiAgY29uc3Qgd2Vla0RheXMgPSBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J107XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShhcGlEYXRhKTtcbiAgcmV0dXJuIHdlZWtEYXlzW2RhdGUuZ2V0RGF5KCldO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXREYXlzO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5zY3NzJztcbmltcG9ydCBjcmVhdGVNYWluU2VjdGlvbiBmcm9tICcuL2NvbXBvbmVudHMvbWFpblNlY3Rpb24nO1xuaW1wb3J0IGNyZWF0ZVdlYXRoZXJQcm9nbm9zZVNlY3Rpb24gZnJvbSAnLi9jb21wb25lbnRzL3Byb2dub3NlU2VjdGlvbic7XG5pbXBvcnQgY3JlYXRlVG9kYXlzSGlnaGxpZ2h0c1NlY3Rpb24gZnJvbSAnLi9jb21wb25lbnRzL2hpZ2hsaWdodFNlY3Rpb24nO1xuaW1wb3J0IGZldGNoQ3VycmVudFdlYXRoZXIgZnJvbSAnLi9mdW5jdGlvbnMvZmV0Y2hDdXJyZW50V2VhdGhlcic7XG5pbXBvcnQgZmV0Y2hXZWF0aGVyRm9yZWNhc3QgZnJvbSAnLi9mdW5jdGlvbnMvZmV0Y2hXZWF0aGVyRm9yZWNhc3QnO1xuaW1wb3J0IHNlYXJjaEJhciBmcm9tICcuL2NvbXBvbmVudHMvc2VhcmNoQmFyJztcbmltcG9ydCBjbGVhckNvbnRlbnQgZnJvbSAnLi9mdW5jdGlvbnMvY2xlYXJDb250ZW50JztcbmltcG9ydCBnZXREYXlzIGZyb20gJy4vZnVuY3Rpb25zL2dldERheSc7XG5cbnNlYXJjaEJhcigpO1xuY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1pY29uJyk7XG5jb25zdCBpbnB1dEZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaGJhcicpO1xuXG5hc3luYyBmdW5jdGlvbiBydW5Db2RlKHNlYXJjaGJhclZhbHVlKSB7XG4gIGNvbnN0IGFwaURhdGFDdXJyZW50ID0gYXdhaXQgZmV0Y2hDdXJyZW50V2VhdGhlcihzZWFyY2hiYXJWYWx1ZSk7XG4gIGNvbnN0IGFwaURhdGFGb3JlY2FzdCA9IGF3YWl0IGZldGNoV2VhdGhlckZvcmVjYXN0KHNlYXJjaGJhclZhbHVlKTtcbiAgY29uc3Qgd2Vla0RheXMgPSBhcGlEYXRhRm9yZWNhc3QuZm9yZWNhc3QuZm9yZWNhc3RkYXkubWFwKChkYXkpID0+IGdldERheXMoZGF5LmRhdGUpKTtcbiAgY29uc29sZS5sb2cod2Vla0RheXMpO1xuICBjcmVhdGVNYWluU2VjdGlvbihhcGlEYXRhQ3VycmVudCwgYXBpRGF0YUZvcmVjYXN0KTtcbiAgY3JlYXRlV2VhdGhlclByb2dub3NlU2VjdGlvbihhcGlEYXRhRm9yZWNhc3QsIHdlZWtEYXlzKTtcbiAgY3JlYXRlVG9kYXlzSGlnaGxpZ2h0c1NlY3Rpb24oYXBpRGF0YUZvcmVjYXN0KTtcbn1cblxucnVuQ29kZSgnbG9uZG9uJyk7XG5cbnN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgY29uc3QgaW5wdXRGaWVsZFZhbHVlID0gaW5wdXRGaWVsZC52YWx1ZTtcbiAgY2xlYXJDb250ZW50KCk7XG4gIHJ1bkNvZGUoaW5wdXRGaWVsZFZhbHVlKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9