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
  #content #right-side {
    display: flex;
    margin: auto auto;
    gap: 3em;
  }
  #content #right-side .weather-prognose {
    padding: 2em 2em;
    align-self: center;
  }
  #content #right-side .weather-prognose .day-prognose {
    justify-content: space-around;
    gap: 40px;
  }
  #content #right-side .weather-prognose .day-prognose img {
    max-width: 100%;
  }
  #content #right-side .weather-prognose .day-prognose p {
    max-width: 10%;
    font-size: 1.2rem;
  }
  #content .todays-highlights {
    font-size: 1.2rem;
  }
  #content .todays-highlights .highlights-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  #content .todays-highlights .wind, #content .todays-highlights .humidity, #content .todays-highlights .feels-like, #content .todays-highlights .precipitation, #content .todays-highlights .sunrise, #content .todays-highlights .sunset {
    padding: 1em 1em;
  }
  #content .todays-highlights .moon-illumination {
    grid-column-start: 1;
    grid-column-end: 4;
    padding: 1em 1em;
  }
}`, "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAIA;EACE,sBAAA;EACA,SAAA;EACA,UAAA;AAHF;;AAMA;EACE,yBAVQ;AAOV;;AAMA;EACE,YAbU;AAUZ;;AAMA;EACE,YAjBU;AAcZ;;AAMA;EACE,yBAvBc;EAwBd,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,2BAAA;AAHF;AAME;EACE,aAAA;EACA,UAAA;AAJJ;AAME;EACE,kBAAA;AAJJ;AASA;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;AAPF;AAQE;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;AANJ;AAOI;EACE,cAAA;AALN;AASE;EACE,gBAAA;AAPJ;AAUE;EACE,cAAA;AARJ;AAcE;EACE,iBAAA;AAZJ;;AAiBA;EACE,yBAxEc;EAyEd,2BAAA;AAdF;AAgBE;EACE,aAAA;EACA,6BAAA;EACA,mBAAA;AAdJ;AAgBI;EACE,aAAA;AAdN;AAkBE;EACE,cAAA;AAhBJ;;AAoBA;EACE,2BAAA;EACA,kBAAA;AAjBF;AAmBE;EACE,YAAA;AAjBJ;AAoBE;EACE,aAAA;EACA,qCAAA;EACA,SAAA;AAlBJ;AAqBE;EACE,yBAzGY;AAsFhB;AAqBE;EACE,yBA5GY;AAyFhB;AAsBE;EACE,yBAhHY;AA4FhB;AAuBE;EACE,yBApHY;AA+FhB;AAwBE;EACE,yBAxHY;AAkGhB;AAyBE;EACE,yBA5HY;AAqGhB;AA0BE;EACE,yBAhIY;EAiIZ,oBAAA;EACA,kBAAA;AAxBJ;;AA4BA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,SAAA;EACA,eAAA;AAzBF;AA2BE;EACE,cAAA;EACA,YAAA;EACA,kBAAA;EACA,aAAA;AAzBJ;AA4BE;EACE,cAAA;EACA,eAAA;AA1BJ;AA6BE;EACE,cA1JY;AA+HhB;;AA+BA;EACE;IACE,aAAA;EA5BF;EA8BE;IACE,YAAA;IACA,wBAAA;IACA,QAAA;IACA,iBAAA;IACA,6BAAA;EA5BJ;EA+BM;IACE,eAAA;EA7BR;EA+BQ;IACE,cAAA;EA7BV;EAgCI;IACE,eAAA;EA9BN;EAiCE;IACE,aAAA;IACA,iBAAA;IACA,QAAA;EA/BJ;EAgCI;IACE,gBAAA;IACA,kBAAA;EA9BN;EA+BI;IACE,6BAAA;IACA,SAAA;EA7BN;EA8BM;IACE,eAAA;EA5BR;EA8BM;IACE,cAAA;IACA,iBAAA;EA5BR;EAiCI;IACE,iBAAA;EA/BN;EAgCM;IACE,qCAAA;EA9BR;EAgCM;IACE,gBAAA;EA9BR;EAgCM;IACE,oBAAA;IACA,kBAAA;IACA,gBAAA;EA9BR;AACF","sourcesContent":["$section-color: #1d213a;\n$bgcolor: #151623;\n$fontcolor: white;\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  background-color: $bgcolor;\n}\n\np {\n  color: $fontcolor;\n}\n\nh1 {\n  color: $fontcolor;\n}\n\n.main-content-div {\n  background-color: $section-color;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 20px 20px 20px 20px;\n\n.weather-status-div{\n  .min-max-div {\n    display: flex;\n    gap: 1.5em;\n  }\n  .weather-conditions{\n    text-align: center;\n  }\n\n}\n\n.weather-location-div{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  .location-div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    .map-marker {\n      max-width: 30%;\n    }\n  }\n\n  .my-location {\n    font-size: 1.5em;\n  }\n\n  .weather-condition-image {\n    max-width: 30%;\n  }\n}\n\n\n\n  .degrees {\n    font-size: 2.5rem;\n  }\n\n}\n\n.weather-prognose {\n  background-color: $section-color;\n  margin: 20px 20px 20px 20px;\n\n  .day-prognose {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n\n    p {\n      max-width: 5%;\n    }\n  }\n\n  .weather-condition-image {\n    max-width: 10%;\n  }\n}\n\n.todays-highlights {\n  margin: 20px 20px 20px 20px;\n  text-align: center;\n\n  .highlights-headline {\n    margin: 10px;\n  }\n\n  .highlights-grid {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    gap: 10px;\n  }\n\n  .wind {\n    background-color: $section-color;\n  }\n  .humidity {\n    background-color: $section-color;\n  }\n\n  .feels-like {\n    background-color: $section-color;\n  }\n\n  .precipitation {\n    background-color: $section-color;\n  }\n\n  .sunrise {\n    background-color: $section-color;\n  }\n\n  .sunset {\n    background-color: $section-color;\n  }\n\n  .moon-illumination {\n    background-color: $section-color;\n    grid-column-start: 1;\n    grid-column-end: 3;\n  }\n}\n\n.searchbar-div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  margin-top: 5px;\n\n  .searchbar {\n    padding: 0.3em;\n    border: none;\n    border-radius: 8px;\n    outline: none;\n  }\n\n  .search-icon {\n    max-width: 10%;\n    cursor: pointer;\n  }\n\n  ::placeholder {\n    color: $section-color;\n  }\n}\n\n@media only screen and (min-width: 1200px) {\n  #content {\n    display: flex;\n\n    .main-content-div {\n      height: 90vh;\n      padding: 2em 2em 2em 2em;\n      gap: 2em;\n      font-size: 1.2rem;\n      justify-content: space-around;\n\n      .weather-location-div{\n        .weather-condition-image{\n          max-width: 100%;\n        }\n          .map-marker{\n            max-width: 40%;\n          }\n      }\n      .degrees{\n        font-size: 4rem;\n      }\n    }\n    #right-side{\n      display: flex;\n      margin: auto auto;\n      gap: 3em;\n      .weather-prognose{\n        padding: 2em 2em;\n        align-self: center;\n      .day-prognose{\n        justify-content: space-around;\n        gap: 40px;\n        img{\n          max-width: 100%;\n        }\n        p{\n          max-width: 10%;\n          font-size: 1.2rem;\n        }\n      }\n      }\n        }\n      .todays-highlights{\n        font-size: 1.2rem;\n        .highlights-grid{\n          grid-template-columns: repeat(3, 1fr);\n        }\n        .wind, .humidity, .feels-like, .precipitation, .sunrise, .sunset{\n          padding: 1em 1em;\n        }\n        .moon-illumination{\n          grid-column-start: 1;\n          grid-column-end: 4;\n          padding: 1em 1em;\n        }\n      }\n    }\n\n}\n\n"],"sourceRoot":""}]);
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
  if (inputFieldValue !== '') {
    (0,_functions_clearContent__WEBPACK_IMPORTED_MODULE_7__["default"])();
  }
  runCode(inputFieldValue);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxpRkFBaUYsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssV0FBVyxNQUFNLE1BQU0sWUFBWSxZQUFZLEtBQUssTUFBTSxVQUFVLFdBQVcsV0FBVyxLQUFLLE1BQU0sVUFBVSxLQUFLLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxZQUFZLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFFBQVEsTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0s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LCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuc2Nzcz83NWJhIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy9oaWdobGlnaHRTZWN0aW9uLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvbWFpblNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy9wcm9nbm9zZVNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy9zZWFyY2hCYXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZnVuY3Rpb25zL2NsZWFyQ29udGVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9mdW5jdGlvbnMvZmV0Y2hDdXJyZW50V2VhdGhlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9mdW5jdGlvbnMvZmV0Y2hXZWF0aGVyRm9yZWNhc3QuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZnVuY3Rpb25zL2dldERheS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE1MTYyMztcbn1cblxucCB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaDEge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5tYWluLWNvbnRlbnQtZGl2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFkMjEzYTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMjBweCAyMHB4IDIwcHggMjBweDtcbn1cbi5tYWluLWNvbnRlbnQtZGl2IC53ZWF0aGVyLXN0YXR1cy1kaXYgLm1pbi1tYXgtZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxLjVlbTtcbn1cbi5tYWluLWNvbnRlbnQtZGl2IC53ZWF0aGVyLXN0YXR1cy1kaXYgLndlYXRoZXItY29uZGl0aW9ucyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5tYWluLWNvbnRlbnQtZGl2IC53ZWF0aGVyLWxvY2F0aW9uLWRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubWFpbi1jb250ZW50LWRpdiAud2VhdGhlci1sb2NhdGlvbi1kaXYgLmxvY2F0aW9uLWRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm1haW4tY29udGVudC1kaXYgLndlYXRoZXItbG9jYXRpb24tZGl2IC5sb2NhdGlvbi1kaXYgLm1hcC1tYXJrZXIge1xuICBtYXgtd2lkdGg6IDMwJTtcbn1cbi5tYWluLWNvbnRlbnQtZGl2IC53ZWF0aGVyLWxvY2F0aW9uLWRpdiAubXktbG9jYXRpb24ge1xuICBmb250LXNpemU6IDEuNWVtO1xufVxuLm1haW4tY29udGVudC1kaXYgLndlYXRoZXItbG9jYXRpb24tZGl2IC53ZWF0aGVyLWNvbmRpdGlvbi1pbWFnZSB7XG4gIG1heC13aWR0aDogMzAlO1xufVxuLm1haW4tY29udGVudC1kaXYgLmRlZ3JlZXMge1xuICBmb250LXNpemU6IDIuNXJlbTtcbn1cblxuLndlYXRoZXItcHJvZ25vc2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQyMTNhO1xuICBtYXJnaW46IDIwcHggMjBweCAyMHB4IDIwcHg7XG59XG4ud2VhdGhlci1wcm9nbm9zZSAuZGF5LXByb2dub3NlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ud2VhdGhlci1wcm9nbm9zZSAuZGF5LXByb2dub3NlIHAge1xuICBtYXgtd2lkdGg6IDUlO1xufVxuLndlYXRoZXItcHJvZ25vc2UgLndlYXRoZXItY29uZGl0aW9uLWltYWdlIHtcbiAgbWF4LXdpZHRoOiAxMCU7XG59XG5cbi50b2RheXMtaGlnaGxpZ2h0cyB7XG4gIG1hcmdpbjogMjBweCAyMHB4IDIwcHggMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnRvZGF5cy1oaWdobGlnaHRzIC5oaWdobGlnaHRzLWhlYWRsaW5lIHtcbiAgbWFyZ2luOiAxMHB4O1xufVxuLnRvZGF5cy1oaWdobGlnaHRzIC5oaWdobGlnaHRzLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICBnYXA6IDEwcHg7XG59XG4udG9kYXlzLWhpZ2hsaWdodHMgLndpbmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQyMTNhO1xufVxuLnRvZGF5cy1oaWdobGlnaHRzIC5odW1pZGl0eSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZDIxM2E7XG59XG4udG9kYXlzLWhpZ2hsaWdodHMgLmZlZWxzLWxpa2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQyMTNhO1xufVxuLnRvZGF5cy1oaWdobGlnaHRzIC5wcmVjaXBpdGF0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFkMjEzYTtcbn1cbi50b2RheXMtaGlnaGxpZ2h0cyAuc3VucmlzZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZDIxM2E7XG59XG4udG9kYXlzLWhpZ2hsaWdodHMgLnN1bnNldCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZDIxM2E7XG59XG4udG9kYXlzLWhpZ2hsaWdodHMgLm1vb24taWxsdW1pbmF0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFkMjEzYTtcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gIGdyaWQtY29sdW1uLWVuZDogMztcbn1cblxuLnNlYXJjaGJhci1kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4uc2VhcmNoYmFyLWRpdiAuc2VhcmNoYmFyIHtcbiAgcGFkZGluZzogMC4zZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBvdXRsaW5lOiBub25lO1xufVxuLnNlYXJjaGJhci1kaXYgLnNlYXJjaC1pY29uIHtcbiAgbWF4LXdpZHRoOiAxMCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zZWFyY2hiYXItZGl2IDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzFkMjEzYTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgI2NvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgI2NvbnRlbnQgLm1haW4tY29udGVudC1kaXYge1xuICAgIGhlaWdodDogOTB2aDtcbiAgICBwYWRkaW5nOiAyZW0gMmVtIDJlbSAyZW07XG4gICAgZ2FwOiAyZW07XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIH1cbiAgI2NvbnRlbnQgLm1haW4tY29udGVudC1kaXYgLndlYXRoZXItbG9jYXRpb24tZGl2IC53ZWF0aGVyLWNvbmRpdGlvbi1pbWFnZSB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG4gICNjb250ZW50IC5tYWluLWNvbnRlbnQtZGl2IC53ZWF0aGVyLWxvY2F0aW9uLWRpdiAubWFwLW1hcmtlciB7XG4gICAgbWF4LXdpZHRoOiA0MCU7XG4gIH1cbiAgI2NvbnRlbnQgLm1haW4tY29udGVudC1kaXYgLmRlZ3JlZXMge1xuICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgfVxuICAjY29udGVudCAjcmlnaHQtc2lkZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW46IGF1dG8gYXV0bztcbiAgICBnYXA6IDNlbTtcbiAgfVxuICAjY29udGVudCAjcmlnaHQtc2lkZSAud2VhdGhlci1wcm9nbm9zZSB7XG4gICAgcGFkZGluZzogMmVtIDJlbTtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIH1cbiAgI2NvbnRlbnQgI3JpZ2h0LXNpZGUgLndlYXRoZXItcHJvZ25vc2UgLmRheS1wcm9nbm9zZSB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgZ2FwOiA0MHB4O1xuICB9XG4gICNjb250ZW50ICNyaWdodC1zaWRlIC53ZWF0aGVyLXByb2dub3NlIC5kYXktcHJvZ25vc2UgaW1nIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cbiAgI2NvbnRlbnQgI3JpZ2h0LXNpZGUgLndlYXRoZXItcHJvZ25vc2UgLmRheS1wcm9nbm9zZSBwIHtcbiAgICBtYXgtd2lkdGg6IDEwJTtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgfVxuICAjY29udGVudCAudG9kYXlzLWhpZ2hsaWdodHMge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICB9XG4gICNjb250ZW50IC50b2RheXMtaGlnaGxpZ2h0cyAuaGlnaGxpZ2h0cy1ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICB9XG4gICNjb250ZW50IC50b2RheXMtaGlnaGxpZ2h0cyAud2luZCwgI2NvbnRlbnQgLnRvZGF5cy1oaWdobGlnaHRzIC5odW1pZGl0eSwgI2NvbnRlbnQgLnRvZGF5cy1oaWdobGlnaHRzIC5mZWVscy1saWtlLCAjY29udGVudCAudG9kYXlzLWhpZ2hsaWdodHMgLnByZWNpcGl0YXRpb24sICNjb250ZW50IC50b2RheXMtaGlnaGxpZ2h0cyAuc3VucmlzZSwgI2NvbnRlbnQgLnRvZGF5cy1oaWdobGlnaHRzIC5zdW5zZXQge1xuICAgIHBhZGRpbmc6IDFlbSAxZW07XG4gIH1cbiAgI2NvbnRlbnQgLnRvZGF5cy1oaWdobGlnaHRzIC5tb29uLWlsbHVtaW5hdGlvbiB7XG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gICAgZ3JpZC1jb2x1bW4tZW5kOiA0O1xuICAgIHBhZGRpbmc6IDFlbSAxZW07XG4gIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUlBO0VBQ0Usc0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUhGOztBQU1BO0VBQ0UseUJBVlE7QUFPVjs7QUFNQTtFQUNFLFlBYlU7QUFVWjs7QUFNQTtFQUNFLFlBakJVO0FBY1o7O0FBTUE7RUFDRSx5QkF2QmM7RUF3QmQsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0FBSEY7QUFNRTtFQUNFLGFBQUE7RUFDQSxVQUFBO0FBSko7QUFNRTtFQUNFLGtCQUFBO0FBSko7QUFTQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBUEY7QUFRRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBTko7QUFPSTtFQUNFLGNBQUE7QUFMTjtBQVNFO0VBQ0UsZ0JBQUE7QUFQSjtBQVVFO0VBQ0UsY0FBQTtBQVJKO0FBY0U7RUFDRSxpQkFBQTtBQVpKOztBQWlCQTtFQUNFLHlCQXhFYztFQXlFZCwyQkFBQTtBQWRGO0FBZ0JFO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUFkSjtBQWdCSTtFQUNFLGFBQUE7QUFkTjtBQWtCRTtFQUNFLGNBQUE7QUFoQko7O0FBb0JBO0VBQ0UsMkJBQUE7RUFDQSxrQkFBQTtBQWpCRjtBQW1CRTtFQUNFLFlBQUE7QUFqQko7QUFvQkU7RUFDRSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxTQUFBO0FBbEJKO0FBcUJFO0VBQ0UseUJBekdZO0FBc0ZoQjtBQXFCRTtFQUNFLHlCQTVHWTtBQXlGaEI7QUFzQkU7RUFDRSx5QkFoSFk7QUE0RmhCO0FBdUJFO0VBQ0UseUJBcEhZO0FBK0ZoQjtBQXdCRTtFQUNFLHlCQXhIWTtBQWtHaEI7QUF5QkU7RUFDRSx5QkE1SFk7QUFxR2hCO0FBMEJFO0VBQ0UseUJBaElZO0VBaUlaLG9CQUFBO0VBQ0Esa0JBQUE7QUF4Qko7O0FBNEJBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQXpCRjtBQTJCRTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBekJKO0FBNEJFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUExQko7QUE2QkU7RUFDRSxjQTFKWTtBQStIaEI7O0FBK0JBO0VBQ0U7SUFDRSxhQUFBO0VBNUJGO0VBOEJFO0lBQ0UsWUFBQTtJQUNBLHdCQUFBO0lBQ0EsUUFBQTtJQUNBLGlCQUFBO0lBQ0EsNkJBQUE7RUE1Qko7RUErQk07SUFDRSxlQUFBO0VBN0JSO0VBK0JRO0lBQ0UsY0FBQTtFQTdCVjtFQWdDSTtJQUNFLGVBQUE7RUE5Qk47RUFpQ0U7SUFDRSxhQUFBO0lBQ0EsaUJBQUE7SUFDQSxRQUFBO0VBL0JKO0VBZ0NJO0lBQ0UsZ0JBQUE7SUFDQSxrQkFBQTtFQTlCTjtFQStCSTtJQUNFLDZCQUFBO0lBQ0EsU0FBQTtFQTdCTjtFQThCTTtJQUNFLGVBQUE7RUE1QlI7RUE4Qk07SUFDRSxjQUFBO0lBQ0EsaUJBQUE7RUE1QlI7RUFpQ0k7SUFDRSxpQkFBQTtFQS9CTjtFQWdDTTtJQUNFLHFDQUFBO0VBOUJSO0VBZ0NNO0lBQ0UsZ0JBQUE7RUE5QlI7RUFnQ007SUFDRSxvQkFBQTtJQUNBLGtCQUFBO0lBQ0EsZ0JBQUE7RUE5QlI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIkc2VjdGlvbi1jb2xvcjogIzFkMjEzYTtcXG4kYmdjb2xvcjogIzE1MTYyMztcXG4kZm9udGNvbG9yOiB3aGl0ZTtcXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRiZ2NvbG9yO1xcbn1cXG5cXG5wIHtcXG4gIGNvbG9yOiAkZm9udGNvbG9yO1xcbn1cXG5cXG5oMSB7XFxuICBjb2xvcjogJGZvbnRjb2xvcjtcXG59XFxuXFxuLm1haW4tY29udGVudC1kaXYge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNlY3Rpb24tY29sb3I7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogMjBweCAyMHB4IDIwcHggMjBweDtcXG5cXG4ud2VhdGhlci1zdGF0dXMtZGl2e1xcbiAgLm1pbi1tYXgtZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxLjVlbTtcXG4gIH1cXG4gIC53ZWF0aGVyLWNvbmRpdGlvbnN7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG5cXG59XFxuXFxuLndlYXRoZXItbG9jYXRpb24tZGl2e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLmxvY2F0aW9uLWRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAubWFwLW1hcmtlciB7XFxuICAgICAgbWF4LXdpZHRoOiAzMCU7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5teS1sb2NhdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICB9XFxuXFxuICAud2VhdGhlci1jb25kaXRpb24taW1hZ2Uge1xcbiAgICBtYXgtd2lkdGg6IDMwJTtcXG4gIH1cXG59XFxuXFxuXFxuXFxuICAuZGVncmVlcyB7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgfVxcblxcbn1cXG5cXG4ud2VhdGhlci1wcm9nbm9zZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2VjdGlvbi1jb2xvcjtcXG4gIG1hcmdpbjogMjBweCAyMHB4IDIwcHggMjBweDtcXG5cXG4gIC5kYXktcHJvZ25vc2Uge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgcCB7XFxuICAgICAgbWF4LXdpZHRoOiA1JTtcXG4gICAgfVxcbiAgfVxcblxcbiAgLndlYXRoZXItY29uZGl0aW9uLWltYWdlIHtcXG4gICAgbWF4LXdpZHRoOiAxMCU7XFxuICB9XFxufVxcblxcbi50b2RheXMtaGlnaGxpZ2h0cyB7XFxuICBtYXJnaW46IDIwcHggMjBweCAyMHB4IDIwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuICAuaGlnaGxpZ2h0cy1oZWFkbGluZSB7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gIH1cXG5cXG4gIC5oaWdobGlnaHRzLWdyaWQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICBnYXA6IDEwcHg7XFxuICB9XFxuXFxuICAud2luZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWN0aW9uLWNvbG9yO1xcbiAgfVxcbiAgLmh1bWlkaXR5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY3Rpb24tY29sb3I7XFxuICB9XFxuXFxuICAuZmVlbHMtbGlrZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWN0aW9uLWNvbG9yO1xcbiAgfVxcblxcbiAgLnByZWNpcGl0YXRpb24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2VjdGlvbi1jb2xvcjtcXG4gIH1cXG5cXG4gIC5zdW5yaXNlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY3Rpb24tY29sb3I7XFxuICB9XFxuXFxuICAuc3Vuc2V0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY3Rpb24tY29sb3I7XFxuICB9XFxuXFxuICAubW9vbi1pbGx1bWluYXRpb24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2VjdGlvbi1jb2xvcjtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogMztcXG4gIH1cXG59XFxuXFxuLnNlYXJjaGJhci1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG5cXG4gIC5zZWFyY2hiYXIge1xcbiAgICBwYWRkaW5nOiAwLjNlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICB9XFxuXFxuICAuc2VhcmNoLWljb24ge1xcbiAgICBtYXgtd2lkdGg6IDEwJTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcblxcbiAgOjpwbGFjZWhvbGRlciB7XFxuICAgIGNvbG9yOiAkc2VjdGlvbi1jb2xvcjtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcXG4gICNjb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG5cXG4gICAgLm1haW4tY29udGVudC1kaXYge1xcbiAgICAgIGhlaWdodDogOTB2aDtcXG4gICAgICBwYWRkaW5nOiAyZW0gMmVtIDJlbSAyZW07XFxuICAgICAgZ2FwOiAyZW07XFxuICAgICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuXFxuICAgICAgLndlYXRoZXItbG9jYXRpb24tZGl2e1xcbiAgICAgICAgLndlYXRoZXItY29uZGl0aW9uLWltYWdle1xcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgICAgICB9XFxuICAgICAgICAgIC5tYXAtbWFya2Vye1xcbiAgICAgICAgICAgIG1heC13aWR0aDogNDAlO1xcbiAgICAgICAgICB9XFxuICAgICAgfVxcbiAgICAgIC5kZWdyZWVze1xcbiAgICAgICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgICAjcmlnaHQtc2lkZXtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIG1hcmdpbjogYXV0byBhdXRvO1xcbiAgICAgIGdhcDogM2VtO1xcbiAgICAgIC53ZWF0aGVyLXByb2dub3Nle1xcbiAgICAgICAgcGFkZGluZzogMmVtIDJlbTtcXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgICAuZGF5LXByb2dub3Nle1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgICAgICBnYXA6IDQwcHg7XFxuICAgICAgICBpbWd7XFxuICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgICAgIH1cXG4gICAgICAgIHB7XFxuICAgICAgICAgIG1heC13aWR0aDogMTAlO1xcbiAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgIC50b2RheXMtaGlnaGxpZ2h0c3tcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICAgICAgLmhpZ2hsaWdodHMtZ3JpZHtcXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gICAgICAgIH1cXG4gICAgICAgIC53aW5kLCAuaHVtaWRpdHksIC5mZWVscy1saWtlLCAucHJlY2lwaXRhdGlvbiwgLnN1bnJpc2UsIC5zdW5zZXR7XFxuICAgICAgICAgIHBhZGRpbmc6IDFlbSAxZW07XFxuICAgICAgICB9XFxuICAgICAgICAubW9vbi1pbGx1bWluYXRpb257XFxuICAgICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDQ7XFxuICAgICAgICAgIHBhZGRpbmc6IDFlbSAxZW07XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuXFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gY3JlYXRlVG9kYXlzSGlnaGxpZ2h0c1NlY3Rpb24oYXBpRGF0YSkge1xuICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICBjb25zdCByaWdodFNpZGVEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJpZ2h0LXNpZGVcIik7XG5cbiAgY29uc3QgdG9kYXlzSGlnaGxpZ2h0c0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRvZGF5c0hpZ2hsaWdodHNEaXYuY2xhc3NMaXN0LmFkZChcInRvZGF5cy1oaWdobGlnaHRzXCIpO1xuXG4gIGNvbnN0IGdyaWREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBncmlkRGl2LmNsYXNzTGlzdC5hZGQoXCJoaWdobGlnaHRzLWdyaWRcIik7XG5cbiAgY29uc3QgaGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGhlYWRsaW5lLmNsYXNzTGlzdC5hZGQoXCJoaWdobGlnaHRzLWhlYWRsaW5lXCIpO1xuICBoZWFkbGluZS50ZXh0Q29udGVudCA9IFwiVG9kYXlzIEhpZ2hsaWdodHNcIjtcblxuICB0b2RheXNIaWdobGlnaHRzRGl2LmFwcGVuZENoaWxkKGhlYWRsaW5lKTtcblxuICBjb25zdCB3aW5kRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgd2luZERpdi5jbGFzc0xpc3QuYWRkKFwid2luZFwiKTtcblxuICBjb25zdCB3aW5kSGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgd2luZEhlYWRsaW5lLnRleHRDb250ZW50ID0gXCJXaW5kIFN0YXR1cyBpbiBrbS9oXCI7XG5cbiAgd2luZERpdi5hcHBlbmRDaGlsZCh3aW5kSGVhZGxpbmUpO1xuXG4gIGNvbnN0IHdpbmRQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIHdpbmRQYXJhZ3JhcGgudGV4dENvbnRlbnQgPSBgJHthcGlEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5tYXh3aW5kX2twaH0ga20vaGA7XG5cbiAgd2luZERpdi5hcHBlbmRDaGlsZCh3aW5kUGFyYWdyYXBoKTtcblxuICBncmlkRGl2LmFwcGVuZENoaWxkKHdpbmREaXYpO1xuXG4gIGNvbnN0IGh1bWlkaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaHVtaWRpdHlEaXYuY2xhc3NMaXN0LmFkZChcImh1bWlkaXR5XCIpO1xuXG4gIGNvbnN0IGh1bWlkaXR5SGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgaHVtaWRpdHlIZWFkbGluZS50ZXh0Q29udGVudCA9IFwiSHVtaWRpdHkgaW4gJVwiO1xuXG4gIGh1bWlkaXR5RGl2LmFwcGVuZENoaWxkKGh1bWlkaXR5SGVhZGxpbmUpO1xuXG4gIGNvbnN0IGh1bWlkaXR5UGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBodW1pZGl0eVBhcmFncmFwaC50ZXh0Q29udGVudCA9IGAke2FwaURhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5LmF2Z2h1bWlkaXR5fSAlYDtcblxuICBodW1pZGl0eURpdi5hcHBlbmRDaGlsZChodW1pZGl0eVBhcmFncmFwaCk7XG5cbiAgZ3JpZERpdi5hcHBlbmRDaGlsZChodW1pZGl0eURpdik7XG5cbiAgY29uc3QgZmVlbHNMaWtlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZmVlbHNMaWtlRGl2LmNsYXNzTGlzdC5hZGQoXCJmZWVscy1saWtlXCIpO1xuXG4gIGNvbnN0IGZlZWxzTGlrZUhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGZlZWxzTGlrZUhlYWRsaW5lLnRleHRDb250ZW50ID0gXCJDdXJyZW50bHkgRmVlbHMgTGlrZVwiO1xuXG4gIGZlZWxzTGlrZURpdi5hcHBlbmRDaGlsZChmZWVsc0xpa2VIZWFkbGluZSk7XG5cbiAgY29uc3QgZmVlbHNMaWtlUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBmZWVsc0xpa2VQYXJhZ3JhcGgudGV4dENvbnRlbnQgPSBgJHthcGlEYXRhLmN1cnJlbnQuZmVlbHNsaWtlX2N9IMKwQ2A7XG5cbiAgZmVlbHNMaWtlRGl2LmFwcGVuZENoaWxkKGZlZWxzTGlrZVBhcmFncmFwaCk7XG5cbiAgZ3JpZERpdi5hcHBlbmRDaGlsZChmZWVsc0xpa2VEaXYpO1xuXG4gIGNvbnN0IHByZWNpcGl0YXRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcmVjaXBpdGF0aW9uRGl2LmNsYXNzTGlzdC5hZGQoXCJwcmVjaXBpdGF0aW9uXCIpO1xuXG4gIGNvbnN0IHByZWNpcGl0YXRpb25IZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwcmVjaXBpdGF0aW9uSGVhZGxpbmUudGV4dENvbnRlbnQgPSBcIkNoYW5jZSBvZiBSYWluIGluICVcIjtcblxuICBwcmVjaXBpdGF0aW9uRGl2LmFwcGVuZENoaWxkKHByZWNpcGl0YXRpb25IZWFkbGluZSk7XG5cbiAgY29uc3QgcHJlY2lwaXRhdGlvblBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgcHJlY2lwaXRhdGlvblBhcmFncmFwaC50ZXh0Q29udGVudCA9IGAke2FwaURhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5LmRhaWx5X2NoYW5jZV9vZl9yYWlufSAlYDtcblxuICBwcmVjaXBpdGF0aW9uRGl2LmFwcGVuZENoaWxkKHByZWNpcGl0YXRpb25QYXJhZ3JhcGgpO1xuXG4gIGdyaWREaXYuYXBwZW5kQ2hpbGQocHJlY2lwaXRhdGlvbkRpdik7XG5cbiAgY29uc3Qgc3VucmlzZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHN1bnJpc2VEaXYuY2xhc3NMaXN0LmFkZChcInN1bnJpc2VcIik7XG5cbiAgY29uc3Qgc3VucmlzZUhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHN1bnJpc2VIZWFkbGluZS50ZXh0Q29udGVudCA9IFwiU3VucmlzZVwiO1xuXG4gIHN1bnJpc2VEaXYuYXBwZW5kQ2hpbGQoc3VucmlzZUhlYWRsaW5lKTtcblxuICBjb25zdCBzdW5yaXNlUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBzdW5yaXNlUGFyYWdyYXBoLnRleHRDb250ZW50ID0gYXBpRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5hc3Ryby5zdW5yaXNlO1xuXG4gIHN1bnJpc2VEaXYuYXBwZW5kQ2hpbGQoc3VucmlzZVBhcmFncmFwaCk7XG5cbiAgZ3JpZERpdi5hcHBlbmRDaGlsZChzdW5yaXNlRGl2KTtcblxuICBjb25zdCBzdW5zZXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzdW5zZXREaXYuY2xhc3NMaXN0LmFkZChcInN1bnNldFwiKTtcblxuICBjb25zdCBzdW5zZXRIZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBzdW5zZXRIZWFkbGluZS50ZXh0Q29udGVudCA9IFwiU3Vuc2V0XCI7XG5cbiAgc3Vuc2V0RGl2LmFwcGVuZENoaWxkKHN1bnNldEhlYWRsaW5lKTtcblxuICBjb25zdCBzdW5zZXRQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIHN1bnNldFBhcmFncmFwaC50ZXh0Q29udGVudCA9IGFwaURhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uYXN0cm8uc3Vuc2V0O1xuXG4gIHN1bnNldERpdi5hcHBlbmRDaGlsZChzdW5zZXRQYXJhZ3JhcGgpO1xuXG4gIGdyaWREaXYuYXBwZW5kQ2hpbGQoc3Vuc2V0RGl2KTtcblxuICBjb25zdCBtb29uSWxsdW1pbmF0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbW9vbklsbHVtaW5hdGlvbkRpdi5jbGFzc0xpc3QuYWRkKFwibW9vbi1pbGx1bWluYXRpb25cIik7XG5cbiAgY29uc3QgbW9vbklsbHVtaW5hdGlvbkhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIG1vb25JbGx1bWluYXRpb25IZWFkbGluZS50ZXh0Q29udGVudCA9IFwiTW9vbiBJbGx1bWluYXRpb24gaW4gJVwiO1xuXG4gIG1vb25JbGx1bWluYXRpb25EaXYuYXBwZW5kQ2hpbGQobW9vbklsbHVtaW5hdGlvbkhlYWRsaW5lKTtcblxuICBjb25zdCBtb29uSWxsdW1pbmF0aW9uUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBtb29uSWxsdW1pbmF0aW9uUGFyYWdyYXBoLnRleHRDb250ZW50ID0gYCR7YXBpRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5hc3Ryby5tb29uX2lsbHVtaW5hdGlvbn0gJWA7XG5cbiAgbW9vbklsbHVtaW5hdGlvbkRpdi5hcHBlbmRDaGlsZChtb29uSWxsdW1pbmF0aW9uUGFyYWdyYXBoKTtcblxuICBncmlkRGl2LmFwcGVuZENoaWxkKG1vb25JbGx1bWluYXRpb25EaXYpO1xuXG4gIHRvZGF5c0hpZ2hsaWdodHNEaXYuYXBwZW5kQ2hpbGQoZ3JpZERpdik7XG5cbiAgcmlnaHRTaWRlRGl2LmFwcGVuZENoaWxkKHRvZGF5c0hpZ2hsaWdodHNEaXYpO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKHJpZ2h0U2lkZURpdik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVRvZGF5c0hpZ2hsaWdodHNTZWN0aW9uO1xuIiwiaW1wb3J0IG1hcE1hcmtlckljb24gZnJvbSAnLi4vYXNzZXRzL21hcC1tYXJrZXIuc3ZnJztcblxuZnVuY3Rpb24gY3JlYXRlTWFpblNlY3Rpb24oYXBpRGF0YSwgZm9yZWNhc3RBcGlEYXRhKSB7XG4gIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICBjb25zdCBsZWZ0U2lkZURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZWZ0LXNpZGUnKTtcblxuICBjb25zdCB3ZWF0aGVyTG9jYXRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgd2VhdGhlckxvY2F0aW9uRGl2LmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXItbG9jYXRpb24tZGl2Jyk7XG5cbiAgY29uc3Qgd2VhdGhlclN0YXR1c0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB3ZWF0aGVyU3RhdHVzRGl2LmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXItc3RhdHVzLWRpdicpO1xuXG4gIGNvbnN0IG1haW5Db250ZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1haW5Db250ZW50RGl2LmNsYXNzTGlzdC5hZGQoJ21haW4tY29udGVudC1kaXYnKTtcblxuICBjb25zdCBteUxvY2F0aW9uVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBteUxvY2F0aW9uVGl0bGUuY2xhc3NMaXN0LmFkZCgnbXktbG9jYXRpb24nKTtcbiAgbXlMb2NhdGlvblRpdGxlLnRleHRDb250ZW50ID0gJ015IExvY2F0aW9uJztcblxuICB3ZWF0aGVyTG9jYXRpb25EaXYuYXBwZW5kQ2hpbGQobXlMb2NhdGlvblRpdGxlKTtcblxuICBjb25zdCB3ZWF0aGVySW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgd2VhdGhlckltYWdlLnNyYyA9IGFwaURhdGEuY3VycmVudC5jb25kaXRpb24uaWNvbjtcbiAgd2VhdGhlckltYWdlLmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXItY29uZGl0aW9uLWltYWdlJyk7XG5cbiAgd2VhdGhlckxvY2F0aW9uRGl2LmFwcGVuZENoaWxkKHdlYXRoZXJJbWFnZSk7XG5cbiAgY29uc3QgbG9jYXRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbG9jYXRpb25EaXYuY2xhc3NMaXN0LmFkZCgnbG9jYXRpb24tZGl2Jyk7XG5cbiAgY29uc3QgbWFwTWFya2VySW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgbWFwTWFya2VySW1hZ2Uuc3JjID0gbWFwTWFya2VySWNvbjtcbiAgbWFwTWFya2VySW1hZ2UuY2xhc3NMaXN0LmFkZCgnbWFwLW1hcmtlcicpO1xuXG4gIGxvY2F0aW9uRGl2LmFwcGVuZENoaWxkKG1hcE1hcmtlckltYWdlKTtcblxuICBjb25zdCBsb2NhdGlvblBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbG9jYXRpb25QYXJhZ3JhcGguY2xhc3NMaXN0LmFkZCgnbG9jYXRpb24nKTtcbiAgbG9jYXRpb25QYXJhZ3JhcGgudGV4dENvbnRlbnQgPSBhcGlEYXRhLmxvY2F0aW9uLm5hbWU7XG5cbiAgbG9jYXRpb25EaXYuYXBwZW5kQ2hpbGQobG9jYXRpb25QYXJhZ3JhcGgpO1xuXG4gIHdlYXRoZXJMb2NhdGlvbkRpdi5hcHBlbmRDaGlsZChsb2NhdGlvbkRpdik7XG4gIG1haW5Db250ZW50RGl2LmFwcGVuZENoaWxkKHdlYXRoZXJMb2NhdGlvbkRpdik7XG5cbiAgY29uc3QgZGVncmVlUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBkZWdyZWVQYXJhZ3JhcGguY2xhc3NMaXN0LmFkZCgnZGVncmVlcycpO1xuICBkZWdyZWVQYXJhZ3JhcGgudGV4dENvbnRlbnQgPSBgJHthcGlEYXRhLmN1cnJlbnQudGVtcF9jfcKwQ2A7XG5cbiAgbWFpbkNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoZGVncmVlUGFyYWdyYXBoKTtcblxuICBjb25zdCB3ZWF0aGVyQ29uZGl0aW9uc1BhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgd2VhdGhlckNvbmRpdGlvbnNQYXJhZ3JhcGguY2xhc3NMaXN0LmFkZCgnd2VhdGhlci1jb25kaXRpb25zJyk7XG4gIHdlYXRoZXJDb25kaXRpb25zUGFyYWdyYXBoLnRleHRDb250ZW50ID0gYXBpRGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0O1xuXG4gIHdlYXRoZXJTdGF0dXNEaXYuYXBwZW5kQ2hpbGQod2VhdGhlckNvbmRpdGlvbnNQYXJhZ3JhcGgpO1xuXG4gIGNvbnN0IG1pbk1heERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtaW5NYXhEaXYuY2xhc3NMaXN0LmFkZCgnbWluLW1heC1kaXYnKTtcblxuICBjb25zdCBtaW5pbXVtUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBtaW5pbXVtUGFyYWdyYXBoLmNsYXNzTGlzdC5hZGQoJ21pbi1kZWdyZWVzJyk7XG4gIG1pbmltdW1QYXJhZ3JhcGgudGV4dENvbnRlbnQgPSBgTWluOiAke2ZvcmVjYXN0QXBpRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkubWludGVtcF9jfcKwQ2A7XG5cbiAgbWluTWF4RGl2LmFwcGVuZENoaWxkKG1pbmltdW1QYXJhZ3JhcGgpO1xuXG4gIGNvbnN0IG1heGltdW1QYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIG1heGltdW1QYXJhZ3JhcGguY2xhc3NMaXN0LmFkZCgnbWF4LWRlZ3JlZXMnKTtcbiAgbWF4aW11bVBhcmFncmFwaC50ZXh0Q29udGVudCA9IGBNYXg6ICR7Zm9yZWNhc3RBcGlEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5tYXh0ZW1wX2N9wrBDYDtcblxuICBtaW5NYXhEaXYuYXBwZW5kQ2hpbGQobWF4aW11bVBhcmFncmFwaCk7XG5cbiAgd2VhdGhlclN0YXR1c0Rpdi5hcHBlbmRDaGlsZChtaW5NYXhEaXYpO1xuICBtYWluQ29udGVudERpdi5hcHBlbmRDaGlsZCh3ZWF0aGVyU3RhdHVzRGl2KTtcblxuICBsZWZ0U2lkZURpdi5hcHBlbmRDaGlsZChtYWluQ29udGVudERpdik7XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobGVmdFNpZGVEaXYpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVNYWluU2VjdGlvbjtcbiIsImZ1bmN0aW9uIGNyZWF0ZVdlYXRoZXJQcm9nbm9zZVNlY3Rpb24oZm9yZWNhc3RBcGlEYXRhLCB3ZWVrZGF5cykge1xuICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICBjb25zdCByaWdodFNpZGVEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJpZ2h0LXNpZGVcIik7XG5cbiAgY29uc3Qgd2VhdGhlclByb2dub3NlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgd2VhdGhlclByb2dub3NlRGl2LmNsYXNzTGlzdC5hZGQoXCJ3ZWF0aGVyLXByb2dub3NlXCIpO1xuXG4gIGNvbnN0IGRheTFQcm9nbm9zZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRheTFQcm9nbm9zZURpdi5jbGFzc0xpc3QuYWRkKFwiZGF5LXByb2dub3NlXCIpO1xuXG4gIGNvbnN0IGRheTFQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZGF5MVBhcmFncmFwaC50ZXh0Q29udGVudCA9IHdlZWtkYXlzWzBdO1xuXG4gIGRheTFQcm9nbm9zZURpdi5hcHBlbmRDaGlsZChkYXkxUGFyYWdyYXBoKTtcblxuICBjb25zdCB3ZWF0aGVySW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgd2VhdGhlckltYWdlLnNyYyA9IGZvcmVjYXN0QXBpRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkuY29uZGl0aW9uLmljb247XG4gIHdlYXRoZXJJbWFnZS5jbGFzc0xpc3QuYWRkKFwid2VhdGhlci1jb25kaXRpb24taW1hZ2VcIik7XG5cbiAgZGF5MVByb2dub3NlRGl2LmFwcGVuZENoaWxkKHdlYXRoZXJJbWFnZSk7XG5cbiAgY29uc3QgZGF5MU1heFRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZGF5MU1heFRlbXAudGV4dENvbnRlbnQgPSBgJHtmb3JlY2FzdEFwaURhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5Lm1heHRlbXBfY33CsENgO1xuXG4gIGRheTFQcm9nbm9zZURpdi5hcHBlbmRDaGlsZChkYXkxTWF4VGVtcCk7XG5cbiAgY29uc3QgZGF5MU1pblRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZGF5MU1pblRlbXAudGV4dENvbnRlbnQgPSBgJHtmb3JlY2FzdEFwaURhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5Lm1pbnRlbXBfY33CsENgO1xuXG4gIGRheTFQcm9nbm9zZURpdi5hcHBlbmRDaGlsZChkYXkxTWluVGVtcCk7XG5cbiAgd2VhdGhlclByb2dub3NlRGl2LmFwcGVuZENoaWxkKGRheTFQcm9nbm9zZURpdik7XG5cbiAgY29uc3QgZGF5MlByb2dub3NlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGF5MlByb2dub3NlRGl2LmNsYXNzTGlzdC5hZGQoXCJkYXktcHJvZ25vc2VcIik7XG5cbiAgY29uc3QgZGF5MlBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBkYXkyUGFyYWdyYXBoLnRleHRDb250ZW50ID0gd2Vla2RheXNbMV07XG5cbiAgZGF5MlByb2dub3NlRGl2LmFwcGVuZENoaWxkKGRheTJQYXJhZ3JhcGgpO1xuXG4gIGNvbnN0IHdlYXRoZXJJbWFnZTIgPSBuZXcgSW1hZ2UoKTtcbiAgd2VhdGhlckltYWdlMi5zcmMgPVxuICAgIGZvcmVjYXN0QXBpRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkuY29uZGl0aW9uLmljb247XG4gIHdlYXRoZXJJbWFnZTIuY2xhc3NMaXN0LmFkZChcIndlYXRoZXItY29uZGl0aW9uLWltYWdlXCIpO1xuXG4gIGRheTJQcm9nbm9zZURpdi5hcHBlbmRDaGlsZCh3ZWF0aGVySW1hZ2UyKTtcblxuICBjb25zdCBkYXkyTWF4VGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBkYXkyTWF4VGVtcC50ZXh0Q29udGVudCA9IGAke2ZvcmVjYXN0QXBpRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkubWF4dGVtcF9jfcKwQ2A7XG5cbiAgZGF5MlByb2dub3NlRGl2LmFwcGVuZENoaWxkKGRheTJNYXhUZW1wKTtcblxuICBjb25zdCBkYXkyTWluVGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBkYXkyTWluVGVtcC50ZXh0Q29udGVudCA9IGAke2ZvcmVjYXN0QXBpRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkubWludGVtcF9jfcKwQ2A7XG5cbiAgZGF5MlByb2dub3NlRGl2LmFwcGVuZENoaWxkKGRheTJNaW5UZW1wKTtcblxuICB3ZWF0aGVyUHJvZ25vc2VEaXYuYXBwZW5kQ2hpbGQoZGF5MlByb2dub3NlRGl2KTtcblxuICBjb25zdCBkYXkzUHJvZ25vc2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkYXkzUHJvZ25vc2VEaXYuY2xhc3NMaXN0LmFkZChcImRheS1wcm9nbm9zZVwiKTtcblxuICBjb25zdCBkYXkzUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGRheTNQYXJhZ3JhcGgudGV4dENvbnRlbnQgPSB3ZWVrZGF5c1syXTtcblxuICBkYXkzUHJvZ25vc2VEaXYuYXBwZW5kQ2hpbGQoZGF5M1BhcmFncmFwaCk7XG5cbiAgY29uc3Qgd2VhdGhlckltYWdlMyA9IG5ldyBJbWFnZSgpO1xuICB3ZWF0aGVySW1hZ2UzLnNyYyA9XG4gICAgZm9yZWNhc3RBcGlEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRheS5jb25kaXRpb24uaWNvbjtcbiAgd2VhdGhlckltYWdlMy5jbGFzc0xpc3QuYWRkKFwid2VhdGhlci1jb25kaXRpb24taW1hZ2VcIik7XG5cbiAgZGF5M1Byb2dub3NlRGl2LmFwcGVuZENoaWxkKHdlYXRoZXJJbWFnZTMpO1xuXG4gIGNvbnN0IGRheTNNYXhUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGRheTNNYXhUZW1wLnRleHRDb250ZW50ID0gYCR7Zm9yZWNhc3RBcGlEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRheS5tYXh0ZW1wX2N9wrBDYDtcblxuICBkYXkzUHJvZ25vc2VEaXYuYXBwZW5kQ2hpbGQoZGF5M01heFRlbXApO1xuXG4gIGNvbnN0IGRheTNNaW5UZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGRheTNNaW5UZW1wLnRleHRDb250ZW50ID0gYCR7Zm9yZWNhc3RBcGlEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRheS5taW50ZW1wX2N9wrBDYDtcblxuICBkYXkzUHJvZ25vc2VEaXYuYXBwZW5kQ2hpbGQoZGF5M01pblRlbXApO1xuXG4gIHdlYXRoZXJQcm9nbm9zZURpdi5hcHBlbmRDaGlsZChkYXkzUHJvZ25vc2VEaXYpO1xuXG4gIHJpZ2h0U2lkZURpdi5hcHBlbmRDaGlsZCh3ZWF0aGVyUHJvZ25vc2VEaXYpO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKHJpZ2h0U2lkZURpdik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVdlYXRoZXJQcm9nbm9zZVNlY3Rpb247XG4iLCJpbXBvcnQgc2VhcmNoU3ZnIGZyb20gXCIuLi9hc3NldHMvY2xvdWQtc2VhcmNoLW91dGxpbmUuc3ZnXCI7XG5cbmZ1bmN0aW9uIHNlYXJjaEJhcigpIHtcbiAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgY29uc3QgbGVmdFNpZGVEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlZnQtc2lkZVwiKTtcblxuICBjb25zdCBzZWFyY2hCYXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzZWFyY2hCYXJEaXYuY2xhc3NMaXN0LmFkZChcInNlYXJjaGJhci1kaXZcIik7XG5cbiAgY29uc3QgaW5wdXRGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgaW5wdXRGaWVsZC5jbGFzc0xpc3QuYWRkKFwic2VhcmNoYmFyXCIpO1xuICBpbnB1dEZpZWxkLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzZWFyY2hcIik7XG4gIGlucHV0RmllbGQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJTZWFyY2guLi5cIik7XG5cbiAgc2VhcmNoQmFyRGl2LmFwcGVuZENoaWxkKGlucHV0RmllbGQpO1xuXG4gIGNvbnN0IHNlYXJjaEljb24gPSBuZXcgSW1hZ2UoKTtcbiAgc2VhcmNoSWNvbi5zcmMgPSBzZWFyY2hTdmc7XG4gIHNlYXJjaEljb24uY2xhc3NMaXN0LmFkZChcInNlYXJjaC1pY29uXCIpO1xuXG4gIHNlYXJjaEJhckRpdi5hcHBlbmRDaGlsZChzZWFyY2hJY29uKTtcbiAgbGVmdFNpZGVEaXYuYXBwZW5kQ2hpbGQoc2VhcmNoQmFyRGl2KTtcblxuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGxlZnRTaWRlRGl2KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2VhcmNoQmFyO1xuIiwiZnVuY3Rpb24gY2xlYXJDb250ZW50KCkge1xuICBjb25zdCBtYWluQ29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRlbnQtZGl2Jyk7XG4gIG1haW5Db250ZW50RGl2LnJlbW92ZSgpO1xuXG4gIGNvbnN0IHdlYXRoZXJQcm9nbm9zZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyLXByb2dub3NlJyk7XG4gIHdlYXRoZXJQcm9nbm9zZURpdi5yZW1vdmUoKTtcblxuICBjb25zdCB0b2RheXNIaWdobGlnaHRzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZGF5cy1oaWdobGlnaHRzJyk7XG4gIHRvZGF5c0hpZ2hsaWdodHNEaXYucmVtb3ZlKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsZWFyQ29udGVudDtcbiIsImFzeW5jIGZ1bmN0aW9uIGZldGNoQ3VycmVudFdlYXRoZXIoc2VhcmNoYmFyVmFsdWUpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PTVlZjJjYzdkZjU2ZjRkOTQ5NGQyMDMxMDAyNDIwMDImcT0ke3NlYXJjaGJhclZhbHVlfWAsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignc29tZXRoaW5nIHdlbnQgd3JvbmcnKTtcbiAgICB9XG4gICAgY29uc3QgcmVzcG9uc2VEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlRGF0YSk7XG4gICAgcmV0dXJuIHJlc3BvbnNlRGF0YTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmZXRjaEN1cnJlbnRXZWF0aGVyO1xuIiwiYXN5bmMgZnVuY3Rpb24gZmV0Y2hXZWF0aGVyRm9yZWNhc3Qoc2VhcmNoYmFyVmFsdWUpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT01ZWYyY2M3ZGY1NmY0ZDk0OTRkMjAzMTAwMjQyMDAyJnE9JHtzZWFyY2hiYXJWYWx1ZX0mZGF5cz0zYCwgeyBtb2RlOiAnY29ycycgfSk7XG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdzb21ldGhpbmcgd2VudCB3cm9uZycpO1xuICAgIH1cbiAgICBjb25zdCByZXNwb25zZURhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc29sZS5sb2cocmVzcG9uc2VEYXRhKTtcbiAgICByZXR1cm4gcmVzcG9uc2VEYXRhO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZldGNoV2VhdGhlckZvcmVjYXN0O1xuIiwiZnVuY3Rpb24gZ2V0RGF5cyhhcGlEYXRhKSB7XG4gIGNvbnN0IHdlZWtEYXlzID0gWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddO1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUoYXBpRGF0YSk7XG4gIHJldHVybiB3ZWVrRGF5c1tkYXRlLmdldERheSgpXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0RGF5cztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5pbXBvcnQgY3JlYXRlTWFpblNlY3Rpb24gZnJvbSAnLi9jb21wb25lbnRzL21haW5TZWN0aW9uJztcbmltcG9ydCBjcmVhdGVXZWF0aGVyUHJvZ25vc2VTZWN0aW9uIGZyb20gJy4vY29tcG9uZW50cy9wcm9nbm9zZVNlY3Rpb24nO1xuaW1wb3J0IGNyZWF0ZVRvZGF5c0hpZ2hsaWdodHNTZWN0aW9uIGZyb20gJy4vY29tcG9uZW50cy9oaWdobGlnaHRTZWN0aW9uJztcbmltcG9ydCBmZXRjaEN1cnJlbnRXZWF0aGVyIGZyb20gJy4vZnVuY3Rpb25zL2ZldGNoQ3VycmVudFdlYXRoZXInO1xuaW1wb3J0IGZldGNoV2VhdGhlckZvcmVjYXN0IGZyb20gJy4vZnVuY3Rpb25zL2ZldGNoV2VhdGhlckZvcmVjYXN0JztcbmltcG9ydCBzZWFyY2hCYXIgZnJvbSAnLi9jb21wb25lbnRzL3NlYXJjaEJhcic7XG5pbXBvcnQgY2xlYXJDb250ZW50IGZyb20gJy4vZnVuY3Rpb25zL2NsZWFyQ29udGVudCc7XG5pbXBvcnQgZ2V0RGF5cyBmcm9tICcuL2Z1bmN0aW9ucy9nZXREYXknO1xuXG5zZWFyY2hCYXIoKTtcbmNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtaWNvbicpO1xuY29uc3QgaW5wdXRGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hiYXInKTtcblxuYXN5bmMgZnVuY3Rpb24gcnVuQ29kZShzZWFyY2hiYXJWYWx1ZSkge1xuICBjb25zdCBhcGlEYXRhQ3VycmVudCA9IGF3YWl0IGZldGNoQ3VycmVudFdlYXRoZXIoc2VhcmNoYmFyVmFsdWUpO1xuICBjb25zdCBhcGlEYXRhRm9yZWNhc3QgPSBhd2FpdCBmZXRjaFdlYXRoZXJGb3JlY2FzdChzZWFyY2hiYXJWYWx1ZSk7XG4gIGNvbnN0IHdlZWtEYXlzID0gYXBpRGF0YUZvcmVjYXN0LmZvcmVjYXN0LmZvcmVjYXN0ZGF5Lm1hcCgoZGF5KSA9PiBnZXREYXlzKGRheS5kYXRlKSk7XG4gIGNvbnNvbGUubG9nKHdlZWtEYXlzKTtcbiAgY3JlYXRlTWFpblNlY3Rpb24oYXBpRGF0YUN1cnJlbnQsIGFwaURhdGFGb3JlY2FzdCk7XG4gIGNyZWF0ZVdlYXRoZXJQcm9nbm9zZVNlY3Rpb24oYXBpRGF0YUZvcmVjYXN0LCB3ZWVrRGF5cyk7XG4gIGNyZWF0ZVRvZGF5c0hpZ2hsaWdodHNTZWN0aW9uKGFwaURhdGFGb3JlY2FzdCk7XG59XG5cbnJ1bkNvZGUoJ2xvbmRvbicpO1xuXG5zdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGNvbnN0IGlucHV0RmllbGRWYWx1ZSA9IGlucHV0RmllbGQudmFsdWU7XG4gIGlmIChpbnB1dEZpZWxkVmFsdWUgIT09ICcnKSB7XG4gICAgY2xlYXJDb250ZW50KCk7XG4gIH1cbiAgcnVuQ29kZShpbnB1dEZpZWxkVmFsdWUpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=