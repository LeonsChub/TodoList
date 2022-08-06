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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=PT+Sans:wght@700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\ninput:focus,\nselect:focus,\ntextarea:focus,\nbutton:focus {\n    outline: none;\n}\n\n#content{\n    font-size: 1.5em;\n    display: grid;\n\n    grid-template-columns: 1fr 4fr;\n    grid-template-rows: 1fr 6fr;\n    grid-template-areas: \"logo    logo\" \n                        \" sidebar main\";\n\n}\n:root{\n    --cyan-50 :#e0f7fa;\n    --cyan-100:#b2ebf2;\n    --cyan-200:#80deea;\n    --cyan-300:#4dd0e1;\n    --cyan-400:#26c6da;\n    --cyan-500:#00bcd4;\n    --cyan-600:#00acc1;\n}\n#content{\n    width: 100%;\n    height: 100vh;\n    font-family: 'Roboto','Courier New', Courier, monospace;\n}\n.logo-wrap{\n    grid-area: logo;\n    background-color: var(--cyan-300);\n    display: flex;\n    align-items: center;\n\n    color: white;\n}\n.logo{\n    font-family: 'PT Sans', sans-serif;\n    font-size: 2em;\n    margin-left: 16px;\n}\n\n.sidebar{\n    grid-area: sidebar;\n    background-color: var(--cyan-200);\n}\n.main-content{\n    grid-area: main;\n    padding-top: 32px;\n    background-color: var(--cyan-50);\n    overflow: scroll;\n    overflow-y:auto;\n    overflow-x:auto;\n}\n.sidebar>ul{\n    margin-top: 32px;\n    padding-left: 16px;\n}\n.sidebar li{\n    margin-bottom: 16px;\n\n    width: 80%;\n}\n.todo:not(:last-child){\n    margin-bottom: 0.5em;\n}\n.todo{\n    display: flex;\n    align-items: center;\n    width: 90%;\n    margin-inline: auto;\n    background-color: var(--cyan-100);\n    padding: 0.75em;\n    font-weight: 100;\n\n    border-top-right-radius: 12px;\n    border-bottom-right-radius: 12px;\n\n    border-left: 6px solid rebeccapurple;\n}\n.complete{\n    width: calc(1em - 6px);\n    height: calc(1em - 6px);\n\n    border: 3px solid var(--cyan-600);\n    border-radius: 6px;\n    margin-right: 16px;\n}\n.todo > .title{\n    margin-right: auto;\n}\n.todo > .date,\n.todo > .expand,\n.todo > .edit{\n    margin-right: 24px;\n}\n.todo > .trash:hover,\n.todo > .expand:hover,\n.todo > .complete:hover,\n.todo > .edit:hover,\nimg.close,\nbutton#submit{\n    cursor: pointer;\n}\n.sidebar{\n    display: flex;\n    flex-flow: column;\n    justify-content: space-between;\n}\n.add{\n    color: white;\n    font-size: 2.5em;\n    background-color: var(--cyan-600);\n    border-radius: 40px;\n    \n    padding: 8px;\n    margin: 16px;\n\n    width: 48px;\n    height: 48px;\n    \n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n}\n\n.add:hover{\n    cursor: pointer;\n    box-shadow: 0px 5px 5px black;\n}\n#myForm{\n    position:absolute;\n\n    margin-inline: auto;\n    margin-block: auto;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    text-align: center;\n\n    background-color: white;\n    border: 1px solid rgb(0, 0, 0);\n\n    max-width: 600px;\n    max-height: 370px;\n    \n    border-radius: 16px;\n    \n}\n.form-container{\n    height: calc(100% - 1.5em - 8px);\n}\n#myForm ul{\n    display: flex;\n    flex-flow: column;\n    height: 100%;\n\n    justify-content: space-between;\n}\n#new-title{\n    width: 95%;\n    font-size: 1em;\n\n    border: none;\n    margin-top: 8px;\n}\n#new-description{\n    font-size: 1em;\n    width: 95%;\n\n    height: 6em;\n    resize: none;\n    border: none;\n}\n#myForm>.title{\n    border-top-left-radius: 16px;\n    border-top-right-radius: 16px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding-inline: 3%;\n    background-color: var(--cyan-400);\n    height: 1.5em;\n}\n#myForm > .title > img.close{\n    width: 16px;\n}\n\nli.picker-field{\n    width: 95%;\n    margin-inline: auto;   \n    display: flex;\n    flex-flow: column;\n\n    align-items: flex-start;\n\n}\n\n#submit{\n    position: absolute;\n    bottom: 8px;\n    right: calc(5%);\n    border: none;\n    font-size: 0.75em;\n    background-color: var(--cyan-500);\n    color: white;\n    padding: 0.5em;\n    border-radius: 0.25em;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\n@import url('https://fonts.googleapis.com/css2?family=PT+Sans:wght@700&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400&display=swap');\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\ninput:focus,\nselect:focus,\ntextarea:focus,\nbutton:focus {\n    outline: none;\n}\n\n#content{\n    font-size: 1.5em;\n    display: grid;\n\n    grid-template-columns: 1fr 4fr;\n    grid-template-rows: 1fr 6fr;\n    grid-template-areas: \"logo    logo\" \n                        \" sidebar main\";\n\n}\n:root{\n    --cyan-50 :#e0f7fa;\n    --cyan-100:#b2ebf2;\n    --cyan-200:#80deea;\n    --cyan-300:#4dd0e1;\n    --cyan-400:#26c6da;\n    --cyan-500:#00bcd4;\n    --cyan-600:#00acc1;\n}\n#content{\n    width: 100%;\n    height: 100vh;\n    font-family: 'Roboto','Courier New', Courier, monospace;\n}\n.logo-wrap{\n    grid-area: logo;\n    background-color: var(--cyan-300);\n    display: flex;\n    align-items: center;\n\n    color: white;\n}\n.logo{\n    font-family: 'PT Sans', sans-serif;\n    font-size: 2em;\n    margin-left: 16px;\n}\n\n.sidebar{\n    grid-area: sidebar;\n    background-color: var(--cyan-200);\n}\n.main-content{\n    grid-area: main;\n    padding-top: 32px;\n    background-color: var(--cyan-50);\n    overflow: scroll;\n    overflow-y:auto;\n    overflow-x:auto;\n}\n.sidebar>ul{\n    margin-top: 32px;\n    padding-left: 16px;\n}\n.sidebar li{\n    margin-bottom: 16px;\n\n    width: 80%;\n}\n.todo:not(:last-child){\n    margin-bottom: 0.5em;\n}\n.todo{\n    display: flex;\n    align-items: center;\n    width: 90%;\n    margin-inline: auto;\n    background-color: var(--cyan-100);\n    padding: 0.75em;\n    font-weight: 100;\n\n    border-top-right-radius: 12px;\n    border-bottom-right-radius: 12px;\n\n    border-left: 6px solid rebeccapurple;\n}\n.complete{\n    width: calc(1em - 6px);\n    height: calc(1em - 6px);\n\n    border: 3px solid var(--cyan-600);\n    border-radius: 6px;\n    margin-right: 16px;\n}\n.todo > .title{\n    margin-right: auto;\n}\n.todo > .date,\n.todo > .expand,\n.todo > .edit{\n    margin-right: 24px;\n}\n.todo > .trash:hover,\n.todo > .expand:hover,\n.todo > .complete:hover,\n.todo > .edit:hover,\nimg.close,\nbutton#submit{\n    cursor: pointer;\n}\n.sidebar{\n    display: flex;\n    flex-flow: column;\n    justify-content: space-between;\n}\n.add{\n    color: white;\n    font-size: 2.5em;\n    background-color: var(--cyan-600);\n    border-radius: 40px;\n    \n    padding: 8px;\n    margin: 16px;\n\n    width: 48px;\n    height: 48px;\n    \n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n}\n\n.add:hover{\n    cursor: pointer;\n    box-shadow: 0px 5px 5px black;\n}\n#myForm{\n    position:absolute;\n\n    margin-inline: auto;\n    margin-block: auto;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    text-align: center;\n\n    background-color: white;\n    border: 1px solid rgb(0, 0, 0);\n\n    max-width: 600px;\n    max-height: 370px;\n    \n    border-radius: 16px;\n    \n}\n.form-container{\n    height: calc(100% - 1.5em - 8px);\n}\n#myForm ul{\n    display: flex;\n    flex-flow: column;\n    height: 100%;\n\n    justify-content: space-between;\n}\n#new-title{\n    width: 95%;\n    font-size: 1em;\n\n    border: none;\n    margin-top: 8px;\n}\n#new-description{\n    font-size: 1em;\n    width: 95%;\n\n    height: 6em;\n    resize: none;\n    border: none;\n}\n#myForm>.title{\n    border-top-left-radius: 16px;\n    border-top-right-radius: 16px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding-inline: 3%;\n    background-color: var(--cyan-400);\n    height: 1.5em;\n}\n#myForm > .title > img.close{\n    width: 16px;\n}\n\nli.picker-field{\n    width: 95%;\n    margin-inline: auto;   \n    display: flex;\n    flex-flow: column;\n\n    align-items: flex-start;\n\n}\n\n#submit{\n    position: absolute;\n    bottom: 8px;\n    right: calc(5%);\n    border: none;\n    font-size: 0.75em;\n    background-color: var(--cyan-500);\n    color: white;\n    padding: 0.5em;\n    border-radius: 0.25em;\n}"],"sourceRoot":""}]);
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

/***/ "./src/load.js":
/*!*********************!*\
  !*** ./src/load.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeForm": () => (/* binding */ closeForm),
/* harmony export */   "loadMainAssests": () => (/* binding */ loadMainAssests),
/* harmony export */   "loadTodo": () => (/* binding */ loadTodo),
/* harmony export */   "openForm": () => (/* binding */ openForm)
/* harmony export */ });
/* harmony import */ var _todoItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoItem */ "./src/todoItem.js");


if(!!document.querySelector("#content") === false){
    var anchorDiv = document.createElement("div");
    anchorDiv.id = "content";
    document.querySelector("body").appendChild(anchorDiv);
}
else{
    var anchorDiv = document.querySelector("#content"); 
}

function loadMainAssests(){

    let logoWrap = document.createElement("header");
    logoWrap.classList.add("logo-wrap");

    let logoImg = document.createElement("img");
    logoImg.setAttribute("width","48px");

    logoImg.setAttribute("src","../src/images/Logo.svg");
    let logo = document.createElement('h1');
    logo.classList.add('logo');
    logo.innerHTML = '<img width="40px" src="../src/images/Logo.svg" alt=""> To Do List';

    logoWrap.appendChild(logo);
    anchorDiv.appendChild(logoWrap);



    let sidebar = document.createElement('div');
    sidebar.classList.add("sidebar");

    let sidebarList = document.createElement('ul');

    let listElem = document.createElement("li");
    listElem.textContent = "Home";
    sidebarList.appendChild(listElem);

    listElem = document.createElement("li");
    listElem.textContent = "Today";
    sidebarList.appendChild(listElem);

    listElem = document.createElement("li");
    listElem.textContent = "Week";
    sidebarList.appendChild(listElem);

    let addTodo = document.createElement("div");
    addTodo.classList.add("add");
    addTodo.textContent = "+";

    sidebar.appendChild(sidebarList);
    sidebar.appendChild(addTodo);
    anchorDiv.appendChild(sidebar);

    let main = document.createElement("div");
    main.classList.add("main-content");
    anchorDiv.appendChild(main);

    loadForm()
}

function loadTodo(todo){
    let content = document.querySelector(".main-content");

    let toDoDiv = document.createElement("div");
    toDoDiv.classList.add("todo");

    let checkBox = document.createElement("div");
    checkBox.classList.add("complete");
    
    let title = document.createElement("h2");
    title.classList.add("title");
    title.textContent = todo.getTitle();

    let date = document.createElement("h3");
    date.classList.add("date");
    date.textContent = todo.getDueDate();

    let expand = document.createElement("img");
    expand.classList.add("expand");
    expand.setAttribute("width","24px");
    expand.setAttribute("src","../src/images/expand.svg");

    let edit = document.createElement("img");
    edit.classList.add("edit");
    edit.setAttribute("width","24px");
    edit.setAttribute("src","../src/images/edit.svg");

    let trash = document.createElement("img");
    trash.classList.add("trash");
    trash.setAttribute("width","24px");
    trash.setAttribute("src","../src/images/trash.svg");

    toDoDiv.append(checkBox);
    toDoDiv.append(title);
    toDoDiv.append(date);
    toDoDiv.append(expand);
    toDoDiv.append(edit);
    toDoDiv.append(trash);

    content.appendChild(toDoDiv);
}

function loadForm(){

    let formWrap = document.createElement("div");
    formWrap.id = "myForm";

    let formTitle = document.createElement("div");
    formTitle.classList.add("title");

    let name = document.createElement("h3");
    name.textContent = "Add a to-do";
    formTitle.appendChild(name);

    let xBtn = document.createElement("img");
    xBtn.classList.add("close");
    xBtn.setAttribute("src","../src/images/close.svg");
    formTitle.appendChild(xBtn);

    formWrap.appendChild(formTitle);

    let form = document.createElement("form");
    form.classList.add("form-container");
    form.setAttribute('novalidate', true);
    formWrap.appendChild(form);

    let list = document.createElement("ul");
    form.appendChild(list);

    let listItem = document.createElement("li");
    listItem.classList.add("text-field");
    let titleInput = document.createElement("input");
    titleInput.id = "new-title";
    titleInput.setAttribute("type","text");
    titleInput.setAttribute("placeholder","Title: (example: Walk the dog)");
    listItem.appendChild(titleInput);
    list.appendChild(listItem);

    let descriptionInput = document.createElement("textarea");
    descriptionInput.id = "new-description";
    descriptionInput.setAttribute("placeholder","Description...");
    listItem.appendChild(descriptionInput);
    list.appendChild(listItem);

    listItem = document.createElement("li");
    listItem.classList.add("picker-field");

    let dateLabel = document.createElement("label");
    dateLabel.setAttribute("for","create-form-date");
    dateLabel.textContent = "Due Date:";
    let dateInput = document.createElement("input");
    dateInput.setAttribute("name","create-form-date");
    dateInput.id = "new-date";
    dateInput.setAttribute("type","date");

    let simpleDiv = document.createElement("div");

    simpleDiv.appendChild(dateLabel);
    simpleDiv.appendChild(dateInput);

    listItem.appendChild(simpleDiv);
    
    let priorityLabel = document.createElement("label");
    priorityLabel.setAttribute("for","create-form-priority");
    priorityLabel.textContent = "priority:";
    let priorityInput = document.createElement("select");
    priorityInput.setAttribute("name","create-form-priority");
    priorityInput.id = "new-priority";

    let priorityOption = document.createElement("option");
    priorityOption.textContent = "low";
    priorityOption.setAttribute("value","low");
    priorityInput.appendChild(priorityOption);

    priorityOption = document.createElement("option");
    priorityOption.textContent = "medium";
    priorityOption.setAttribute("value","medium");
    priorityInput.appendChild(priorityOption);

    priorityOption = document.createElement("option");
    priorityOption.textContent = "high";
    priorityOption.setAttribute("value","high");
    priorityInput.appendChild(priorityOption);

    simpleDiv = document.createElement("div");

    simpleDiv.appendChild(priorityLabel);
    simpleDiv.appendChild(priorityInput);

    listItem.appendChild(simpleDiv);

    list.appendChild(listItem);

    let submitBtn = document.createElement("button");
    submitBtn.id = "submit";
    submitBtn.textContent = "Add Task";

    formWrap.appendChild(submitBtn);

    formWrap.style.display = "none";
    
    anchorDiv.appendChild(formWrap);

}
function openForm(){
    document.querySelector("#myForm").style.display = "block";
}
function closeForm(){
    document.querySelector("#myForm").style.display = "none";
}

  

/***/ }),

/***/ "./src/todoItem.js":
/*!*************************!*\
  !*** ./src/todoItem.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "copy": () => (/* binding */ copy),
/* harmony export */   "createTodo": () => (/* binding */ createTodo)
/* harmony export */ });
const createTodo = (title, description, due, priority)=>{
    let done = false;

    const getTitle = ()=>{
        return title;
    };
    const getDescription = ()=>{
        return description;
    };
    const getDueDate = ()=>{
        return due;
    };
    const getPriority = ()=>{
        return priority;
    };
    const isDone = ()=>{
        return done;
    }
    const returnTodo = ()=>{
        return {title,description,due,priority,done};
    };
    const toString = ()=>{
        return `${priority} ${title}         ${due} \n ${description}`
    };

    return {getTitle, getDescription,getDueDate,getPriority,toString,returnTodo,isDone};
}

const copy = (ToDo)=>{
    return createTodo(ToDo.getTitle(),ToDo.getDescription(),ToDo.getDueDate(),ToDo.getPriority());
};


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
/* harmony import */ var _todoItem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoItem.js */ "./src/todoItem.js");
/* harmony import */ var _load_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./load.js */ "./src/load.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
 



let todo = (0,_todoItem_js__WEBPACK_IMPORTED_MODULE_0__.createTodo)("Feed jimmy","jimmy the dog will die if I dont feed him :( Lol","25/04/2022",3);
console.log(todo.isDone());
(0,_load_js__WEBPACK_IMPORTED_MODULE_1__.loadMainAssests)();

document.querySelector("div.add").addEventListener("click", ()=>{
    (0,_load_js__WEBPACK_IMPORTED_MODULE_1__.openForm)();
});

document.querySelector("img.close").addEventListener("click", ()=>{
    (0,_load_js__WEBPACK_IMPORTED_MODULE_1__.closeForm)();
});

document.querySelector("button#submit").addEventListener("click", ()=>{
    (0,_load_js__WEBPACK_IMPORTED_MODULE_1__.closeForm)();
});


(0,_load_js__WEBPACK_IMPORTED_MODULE_1__.loadTodo)(todo);



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7QUFJQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXVEOzs7Ozs7Ozs7Ozs7Ozs7QUNwTnZEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBLGtCQUFrQixVQUFVLEVBQUUsZUFBZSxFQUFFLEtBQUssS0FBSyxZQUFZO0FBQ3JFOztBQUVBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7VUM5QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7O0FDQXdDO0FBQ2lDO0FBQzVDOztBQUU3QixXQUFXLHdEQUFVO0FBQ3JCO0FBQ0EseURBQWU7O0FBRWY7QUFDQSxJQUFJLGtEQUFRO0FBQ1osQ0FBQzs7QUFFRDtBQUNBLElBQUksbURBQVM7QUFDYixDQUFDOztBQUVEO0FBQ0EsSUFBSSxtREFBUztBQUNiLENBQUM7OztBQUdELGtEQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbG9hZC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy90b2RvSXRlbS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBUK1NhbnM6d2dodEA3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRAMTAwOzMwMDs0MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcblxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCwgdWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsIHEge1xcblxcdHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5pbnB1dDpmb2N1cyxcXG5zZWxlY3Q6Zm9jdXMsXFxudGV4dGFyZWE6Zm9jdXMsXFxuYnV0dG9uOmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuI2NvbnRlbnR7XFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNmZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwibG9nbyAgICBsb2dvXFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICBcXFwiIHNpZGViYXIgbWFpblxcXCI7XFxuXFxufVxcbjpyb290e1xcbiAgICAtLWN5YW4tNTAgOiNlMGY3ZmE7XFxuICAgIC0tY3lhbi0xMDA6I2IyZWJmMjtcXG4gICAgLS1jeWFuLTIwMDojODBkZWVhO1xcbiAgICAtLWN5YW4tMzAwOiM0ZGQwZTE7XFxuICAgIC0tY3lhbi00MDA6IzI2YzZkYTtcXG4gICAgLS1jeWFuLTUwMDojMDBiY2Q0O1xcbiAgICAtLWN5YW4tNjAwOiMwMGFjYzE7XFxufVxcbiNjb250ZW50e1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG59XFxuLmxvZ28td3JhcHtcXG4gICAgZ3JpZC1hcmVhOiBsb2dvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jeWFuLTMwMCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmxvZ297XFxuICAgIGZvbnQtZmFtaWx5OiAnUFQgU2FucycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcXG59XFxuXFxuLnNpZGViYXJ7XFxuICAgIGdyaWQtYXJlYTogc2lkZWJhcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3lhbi0yMDApO1xcbn1cXG4ubWFpbi1jb250ZW50e1xcbiAgICBncmlkLWFyZWE6IG1haW47XFxuICAgIHBhZGRpbmctdG9wOiAzMnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jeWFuLTUwKTtcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gICAgb3ZlcmZsb3cteTphdXRvO1xcbiAgICBvdmVyZmxvdy14OmF1dG87XFxufVxcbi5zaWRlYmFyPnVse1xcbiAgICBtYXJnaW4tdG9wOiAzMnB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XFxufVxcbi5zaWRlYmFyIGxpe1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcblxcbiAgICB3aWR0aDogODAlO1xcbn1cXG4udG9kbzpub3QoOmxhc3QtY2hpbGQpe1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcXG59XFxuLnRvZG97XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN5YW4tMTAwKTtcXG4gICAgcGFkZGluZzogMC43NWVtO1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcblxcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTJweDtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEycHg7XFxuXFxuICAgIGJvcmRlci1sZWZ0OiA2cHggc29saWQgcmViZWNjYXB1cnBsZTtcXG59XFxuLmNvbXBsZXRle1xcbiAgICB3aWR0aDogY2FsYygxZW0gLSA2cHgpO1xcbiAgICBoZWlnaHQ6IGNhbGMoMWVtIC0gNnB4KTtcXG5cXG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tY3lhbi02MDApO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIG1hcmdpbi1yaWdodDogMTZweDtcXG59XFxuLnRvZG8gPiAudGl0bGV7XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuLnRvZG8gPiAuZGF0ZSxcXG4udG9kbyA+IC5leHBhbmQsXFxuLnRvZG8gPiAuZWRpdHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xcbn1cXG4udG9kbyA+IC50cmFzaDpob3ZlcixcXG4udG9kbyA+IC5leHBhbmQ6aG92ZXIsXFxuLnRvZG8gPiAuY29tcGxldGU6aG92ZXIsXFxuLnRvZG8gPiAuZWRpdDpob3ZlcixcXG5pbWcuY2xvc2UsXFxuYnV0dG9uI3N1Ym1pdHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uc2lkZWJhcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLmFkZHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDIuNWVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jeWFuLTYwMCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XFxuICAgIFxcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIG1hcmdpbjogMTZweDtcXG5cXG4gICAgd2lkdGg6IDQ4cHg7XFxuICAgIGhlaWdodDogNDhweDtcXG4gICAgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbn1cXG5cXG4uYWRkOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IDBweCA1cHggNXB4IGJsYWNrO1xcbn1cXG4jbXlGb3Jte1xcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcXG5cXG4gICAgbWFyZ2luLWlubGluZTogYXV0bztcXG4gICAgbWFyZ2luLWJsb2NrOiBhdXRvO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigwLCAwLCAwKTtcXG5cXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcXG4gICAgbWF4LWhlaWdodDogMzcwcHg7XFxuICAgIFxcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbiAgICBcXG59XFxuLmZvcm0tY29udGFpbmVye1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDEuNWVtIC0gOHB4KTtcXG59XFxuI215Rm9ybSB1bHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW47XFxuICAgIGhlaWdodDogMTAwJTtcXG5cXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4jbmV3LXRpdGxle1xcbiAgICB3aWR0aDogOTUlO1xcbiAgICBmb250LXNpemU6IDFlbTtcXG5cXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBtYXJnaW4tdG9wOiA4cHg7XFxufVxcbiNuZXctZGVzY3JpcHRpb257XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICB3aWR0aDogOTUlO1xcblxcbiAgICBoZWlnaHQ6IDZlbTtcXG4gICAgcmVzaXplOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcbiNteUZvcm0+LnRpdGxle1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNnB4O1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTZweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nLWlubGluZTogMyU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN5YW4tNDAwKTtcXG4gICAgaGVpZ2h0OiAxLjVlbTtcXG59XFxuI215Rm9ybSA+IC50aXRsZSA+IGltZy5jbG9zZXtcXG4gICAgd2lkdGg6IDE2cHg7XFxufVxcblxcbmxpLnBpY2tlci1maWVsZHtcXG4gICAgd2lkdGg6IDk1JTtcXG4gICAgbWFyZ2luLWlubGluZTogYXV0bzsgICBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW47XFxuXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcblxcbn1cXG5cXG4jc3VibWl0e1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogOHB4O1xcbiAgICByaWdodDogY2FsYyg1JSk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1zaXplOiAwLjc1ZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN5YW4tNTAwKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAwLjVlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Q0FHQzs7QUFLRDs7Ozs7Ozs7Ozs7OztDQWFDLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsU0FBUztDQUNULGVBQWU7Q0FDZixhQUFhO0NBQ2Isd0JBQXdCO0FBQ3pCO0FBQ0EsZ0RBQWdEO0FBQ2hEOztDQUVDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsY0FBYztBQUNmO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLFlBQVk7QUFDYjtBQUNBOztDQUVDLFdBQVc7Q0FDWCxhQUFhO0FBQ2Q7QUFDQTtDQUNDLHlCQUF5QjtDQUN6QixpQkFBaUI7QUFDbEI7QUFDQTs7OztJQUlJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTs7SUFFYiw4QkFBOEI7SUFDOUIsMkJBQTJCO0lBQzNCO3VDQUNtQzs7QUFFdkM7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYix1REFBdUQ7QUFDM0Q7QUFDQTtJQUNJLGVBQWU7SUFDZixpQ0FBaUM7SUFDakMsYUFBYTtJQUNiLG1CQUFtQjs7SUFFbkIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksa0NBQWtDO0lBQ2xDLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUNBQWlDO0FBQ3JDO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdDQUFnQztJQUNoQyxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLG1CQUFtQjs7SUFFbkIsVUFBVTtBQUNkO0FBQ0E7SUFDSSxvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixpQ0FBaUM7SUFDakMsZUFBZTtJQUNmLGdCQUFnQjs7SUFFaEIsNkJBQTZCO0lBQzdCLGdDQUFnQzs7SUFFaEMsb0NBQW9DO0FBQ3hDO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsdUJBQXVCOztJQUV2QixpQ0FBaUM7SUFDakMsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7OztJQUdJLGtCQUFrQjtBQUN0QjtBQUNBOzs7Ozs7SUFNSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixpQ0FBaUM7SUFDakMsbUJBQW1COztJQUVuQixZQUFZO0lBQ1osWUFBWTs7SUFFWixXQUFXO0lBQ1gsWUFBWTs7SUFFWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1Qjs7QUFFM0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSxpQkFBaUI7O0lBRWpCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFFBQVE7SUFDUixNQUFNO0lBQ04sU0FBUztJQUNULGtCQUFrQjs7SUFFbEIsdUJBQXVCO0lBQ3ZCLDhCQUE4Qjs7SUFFOUIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjs7SUFFakIsbUJBQW1COztBQUV2QjtBQUNBO0lBQ0ksZ0NBQWdDO0FBQ3BDO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLFlBQVk7O0lBRVosOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsY0FBYzs7SUFFZCxZQUFZO0lBQ1osZUFBZTtBQUNuQjtBQUNBO0lBQ0ksY0FBYztJQUNkLFVBQVU7O0lBRVYsV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSw0QkFBNEI7SUFDNUIsNkJBQTZCO0lBQzdCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLGtCQUFrQjtJQUNsQixpQ0FBaUM7SUFDakMsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsaUJBQWlCOztJQUVqQix1QkFBdUI7O0FBRTNCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQ0FBaUM7SUFDakMsWUFBWTtJQUNaLGNBQWM7SUFDZCxxQkFBcUI7QUFDekJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcblxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBUK1NhbnM6d2dodEA3MDAmZGlzcGxheT1zd2FwJyk7XFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRAMTAwOzMwMDs0MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLCB1bCB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSwgcSB7XFxuXFx0cXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuXFx0Y29udGVudDogJyc7XFxuXFx0Y29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxufVxcbmlucHV0OmZvY3VzLFxcbnNlbGVjdDpmb2N1cyxcXG50ZXh0YXJlYTpmb2N1cyxcXG5idXR0b246Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4jY29udGVudHtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG5cXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA2ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJsb2dvICAgIGxvZ29cXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgIFxcXCIgc2lkZWJhciBtYWluXFxcIjtcXG5cXG59XFxuOnJvb3R7XFxuICAgIC0tY3lhbi01MCA6I2UwZjdmYTtcXG4gICAgLS1jeWFuLTEwMDojYjJlYmYyO1xcbiAgICAtLWN5YW4tMjAwOiM4MGRlZWE7XFxuICAgIC0tY3lhbi0zMDA6IzRkZDBlMTtcXG4gICAgLS1jeWFuLTQwMDojMjZjNmRhO1xcbiAgICAtLWN5YW4tNTAwOiMwMGJjZDQ7XFxuICAgIC0tY3lhbi02MDA6IzAwYWNjMTtcXG59XFxuI2NvbnRlbnR7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbn1cXG4ubG9nby13cmFwe1xcbiAgICBncmlkLWFyZWE6IGxvZ287XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN5YW4tMzAwKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG4ubG9nb3tcXG4gICAgZm9udC1mYW1pbHk6ICdQVCBTYW5zJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xcbn1cXG5cXG4uc2lkZWJhcntcXG4gICAgZ3JpZC1hcmVhOiBzaWRlYmFyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jeWFuLTIwMCk7XFxufVxcbi5tYWluLWNvbnRlbnR7XFxuICAgIGdyaWQtYXJlYTogbWFpbjtcXG4gICAgcGFkZGluZy10b3A6IDMycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN5YW4tNTApO1xcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgICBvdmVyZmxvdy15OmF1dG87XFxuICAgIG92ZXJmbG93LXg6YXV0bztcXG59XFxuLnNpZGViYXI+dWx7XFxuICAgIG1hcmdpbi10b3A6IDMycHg7XFxuICAgIHBhZGRpbmctbGVmdDogMTZweDtcXG59XFxuLnNpZGViYXIgbGl7XFxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XFxuXFxuICAgIHdpZHRoOiA4MCU7XFxufVxcbi50b2RvOm5vdCg6bGFzdC1jaGlsZCl7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xcbn1cXG4udG9kb3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgbWFyZ2luLWlubGluZTogYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3lhbi0xMDApO1xcbiAgICBwYWRkaW5nOiAwLjc1ZW07XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuXFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMnB4O1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTJweDtcXG5cXG4gICAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCByZWJlY2NhcHVycGxlO1xcbn1cXG4uY29tcGxldGV7XFxuICAgIHdpZHRoOiBjYWxjKDFlbSAtIDZweCk7XFxuICAgIGhlaWdodDogY2FsYygxZW0gLSA2cHgpO1xcblxcbiAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1jeWFuLTYwMCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xcbn1cXG4udG9kbyA+IC50aXRsZXtcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG4udG9kbyA+IC5kYXRlLFxcbi50b2RvID4gLmV4cGFuZCxcXG4udG9kbyA+IC5lZGl0e1xcbiAgICBtYXJnaW4tcmlnaHQ6IDI0cHg7XFxufVxcbi50b2RvID4gLnRyYXNoOmhvdmVyLFxcbi50b2RvID4gLmV4cGFuZDpob3ZlcixcXG4udG9kbyA+IC5jb21wbGV0ZTpob3ZlcixcXG4udG9kbyA+IC5lZGl0OmhvdmVyLFxcbmltZy5jbG9zZSxcXG5idXR0b24jc3VibWl0e1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5zaWRlYmFye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4uYWRke1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMi41ZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN5YW4tNjAwKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcXG4gICAgXFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgbWFyZ2luOiAxNnB4O1xcblxcbiAgICB3aWR0aDogNDhweDtcXG4gICAgaGVpZ2h0OiA0OHB4O1xcbiAgICBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxufVxcblxcbi5hZGQ6aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm94LXNoYWRvdzogMHB4IDVweCA1cHggYmxhY2s7XFxufVxcbiNteUZvcm17XFxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xcblxcbiAgICBtYXJnaW4taW5saW5lOiBhdXRvO1xcbiAgICBtYXJnaW4tYmxvY2s6IGF1dG87XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDAsIDAsIDApO1xcblxcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xcbiAgICBtYXgtaGVpZ2h0OiAzNzBweDtcXG4gICAgXFxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICAgIFxcbn1cXG4uZm9ybS1jb250YWluZXJ7XFxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMS41ZW0gLSA4cHgpO1xcbn1cXG4jbXlGb3JtIHVse1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcblxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbiNuZXctdGl0bGV7XFxuICAgIHdpZHRoOiA5NSU7XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcblxcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG1hcmdpbi10b3A6IDhweDtcXG59XFxuI25ldy1kZXNjcmlwdGlvbntcXG4gICAgZm9udC1zaXplOiAxZW07XFxuICAgIHdpZHRoOiA5NSU7XFxuXFxuICAgIGhlaWdodDogNmVtO1xcbiAgICByZXNpemU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuI215Rm9ybT4udGl0bGV7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE2cHg7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNnB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmctaW5saW5lOiAzJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3lhbi00MDApO1xcbiAgICBoZWlnaHQ6IDEuNWVtO1xcbn1cXG4jbXlGb3JtID4gLnRpdGxlID4gaW1nLmNsb3Nle1xcbiAgICB3aWR0aDogMTZweDtcXG59XFxuXFxubGkucGlja2VyLWZpZWxke1xcbiAgICB3aWR0aDogOTUlO1xcbiAgICBtYXJnaW4taW5saW5lOiBhdXRvOyAgIFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG5cXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuXFxufVxcblxcbiNzdWJtaXR7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiA4cHg7XFxuICAgIHJpZ2h0OiBjYWxjKDUlKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IDAuNzVlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3lhbi01MDApO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDAuNWVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHtjb3B5LCBjcmVhdGVUb2RvfSBmcm9tIFwiLi90b2RvSXRlbVwiO1xuXG5pZighIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKSA9PT0gZmFsc2Upe1xuICAgIHZhciBhbmNob3JEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGFuY2hvckRpdi5pZCA9IFwiY29udGVudFwiO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLmFwcGVuZENoaWxkKGFuY2hvckRpdik7XG59XG5lbHNle1xuICAgIHZhciBhbmNob3JEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7IFxufVxuXG5mdW5jdGlvbiBsb2FkTWFpbkFzc2VzdHMoKXtcblxuICAgIGxldCBsb2dvV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG4gICAgbG9nb1dyYXAuY2xhc3NMaXN0LmFkZChcImxvZ28td3JhcFwiKTtcblxuICAgIGxldCBsb2dvSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBsb2dvSW1nLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsXCI0OHB4XCIpO1xuXG4gICAgbG9nb0ltZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIixcIi4uL3NyYy9pbWFnZXMvTG9nby5zdmdcIik7XG4gICAgbGV0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGxvZ28uY2xhc3NMaXN0LmFkZCgnbG9nbycpO1xuICAgIGxvZ28uaW5uZXJIVE1MID0gJzxpbWcgd2lkdGg9XCI0MHB4XCIgc3JjPVwiLi4vc3JjL2ltYWdlcy9Mb2dvLnN2Z1wiIGFsdD1cIlwiPiBUbyBEbyBMaXN0JztcblxuICAgIGxvZ29XcmFwLmFwcGVuZENoaWxkKGxvZ28pO1xuICAgIGFuY2hvckRpdi5hcHBlbmRDaGlsZChsb2dvV3JhcCk7XG5cblxuXG4gICAgbGV0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyXCIpO1xuXG4gICAgbGV0IHNpZGViYXJMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcblxuICAgIGxldCBsaXN0RWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBsaXN0RWxlbS50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xuICAgIHNpZGViYXJMaXN0LmFwcGVuZENoaWxkKGxpc3RFbGVtKTtcblxuICAgIGxpc3RFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGxpc3RFbGVtLnRleHRDb250ZW50ID0gXCJUb2RheVwiO1xuICAgIHNpZGViYXJMaXN0LmFwcGVuZENoaWxkKGxpc3RFbGVtKTtcblxuICAgIGxpc3RFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGxpc3RFbGVtLnRleHRDb250ZW50ID0gXCJXZWVrXCI7XG4gICAgc2lkZWJhckxpc3QuYXBwZW5kQ2hpbGQobGlzdEVsZW0pO1xuXG4gICAgbGV0IGFkZFRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGFkZFRvZG8uY2xhc3NMaXN0LmFkZChcImFkZFwiKTtcbiAgICBhZGRUb2RvLnRleHRDb250ZW50ID0gXCIrXCI7XG5cbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHNpZGViYXJMaXN0KTtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGFkZFRvZG8pO1xuICAgIGFuY2hvckRpdi5hcHBlbmRDaGlsZChzaWRlYmFyKTtcblxuICAgIGxldCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluLWNvbnRlbnRcIik7XG4gICAgYW5jaG9yRGl2LmFwcGVuZENoaWxkKG1haW4pO1xuXG4gICAgbG9hZEZvcm0oKVxufVxuXG5mdW5jdGlvbiBsb2FkVG9kbyh0b2RvKXtcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1jb250ZW50XCIpO1xuXG4gICAgbGV0IHRvRG9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvRG9EaXYuY2xhc3NMaXN0LmFkZChcInRvZG9cIik7XG5cbiAgICBsZXQgY2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNoZWNrQm94LmNsYXNzTGlzdC5hZGQoXCJjb21wbGV0ZVwiKTtcbiAgICBcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gdG9kby5nZXRUaXRsZSgpO1xuXG4gICAgbGV0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgZGF0ZS5jbGFzc0xpc3QuYWRkKFwiZGF0ZVwiKTtcbiAgICBkYXRlLnRleHRDb250ZW50ID0gdG9kby5nZXREdWVEYXRlKCk7XG5cbiAgICBsZXQgZXhwYW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBleHBhbmQuY2xhc3NMaXN0LmFkZChcImV4cGFuZFwiKTtcbiAgICBleHBhbmQuc2V0QXR0cmlidXRlKFwid2lkdGhcIixcIjI0cHhcIik7XG4gICAgZXhwYW5kLnNldEF0dHJpYnV0ZShcInNyY1wiLFwiLi4vc3JjL2ltYWdlcy9leHBhbmQuc3ZnXCIpO1xuXG4gICAgbGV0IGVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGVkaXQuY2xhc3NMaXN0LmFkZChcImVkaXRcIik7XG4gICAgZWRpdC5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLFwiMjRweFwiKTtcbiAgICBlZGl0LnNldEF0dHJpYnV0ZShcInNyY1wiLFwiLi4vc3JjL2ltYWdlcy9lZGl0LnN2Z1wiKTtcblxuICAgIGxldCB0cmFzaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgdHJhc2guY2xhc3NMaXN0LmFkZChcInRyYXNoXCIpO1xuICAgIHRyYXNoLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsXCIyNHB4XCIpO1xuICAgIHRyYXNoLnNldEF0dHJpYnV0ZShcInNyY1wiLFwiLi4vc3JjL2ltYWdlcy90cmFzaC5zdmdcIik7XG5cbiAgICB0b0RvRGl2LmFwcGVuZChjaGVja0JveCk7XG4gICAgdG9Eb0Rpdi5hcHBlbmQodGl0bGUpO1xuICAgIHRvRG9EaXYuYXBwZW5kKGRhdGUpO1xuICAgIHRvRG9EaXYuYXBwZW5kKGV4cGFuZCk7XG4gICAgdG9Eb0Rpdi5hcHBlbmQoZWRpdCk7XG4gICAgdG9Eb0Rpdi5hcHBlbmQodHJhc2gpO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0b0RvRGl2KTtcbn1cblxuZnVuY3Rpb24gbG9hZEZvcm0oKXtcblxuICAgIGxldCBmb3JtV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9ybVdyYXAuaWQgPSBcIm15Rm9ybVwiO1xuXG4gICAgbGV0IGZvcm1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9ybVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcblxuICAgIGxldCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIG5hbWUudGV4dENvbnRlbnQgPSBcIkFkZCBhIHRvLWRvXCI7XG4gICAgZm9ybVRpdGxlLmFwcGVuZENoaWxkKG5hbWUpO1xuXG4gICAgbGV0IHhCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIHhCdG4uY2xhc3NMaXN0LmFkZChcImNsb3NlXCIpO1xuICAgIHhCdG4uc2V0QXR0cmlidXRlKFwic3JjXCIsXCIuLi9zcmMvaW1hZ2VzL2Nsb3NlLnN2Z1wiKTtcbiAgICBmb3JtVGl0bGUuYXBwZW5kQ2hpbGQoeEJ0bik7XG5cbiAgICBmb3JtV3JhcC5hcHBlbmRDaGlsZChmb3JtVGl0bGUpO1xuXG4gICAgbGV0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWNvbnRhaW5lclwiKTtcbiAgICBmb3JtLnNldEF0dHJpYnV0ZSgnbm92YWxpZGF0ZScsIHRydWUpO1xuICAgIGZvcm1XcmFwLmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gICAgbGV0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChsaXN0KTtcblxuICAgIGxldCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBsaXN0SXRlbS5jbGFzc0xpc3QuYWRkKFwidGV4dC1maWVsZFwiKTtcbiAgICBsZXQgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB0aXRsZUlucHV0LmlkID0gXCJuZXctdGl0bGVcIjtcbiAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIixcInRleHRcIik7XG4gICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLFwiVGl0bGU6IChleGFtcGxlOiBXYWxrIHRoZSBkb2cpXCIpO1xuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuICAgIGxpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuXG4gICAgbGV0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgZGVzY3JpcHRpb25JbnB1dC5pZCA9IFwibmV3LWRlc2NyaXB0aW9uXCI7XG4gICAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLFwiRGVzY3JpcHRpb24uLi5cIik7XG4gICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbnB1dCk7XG4gICAgbGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG5cbiAgICBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBsaXN0SXRlbS5jbGFzc0xpc3QuYWRkKFwicGlja2VyLWZpZWxkXCIpO1xuXG4gICAgbGV0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBkYXRlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsXCJjcmVhdGUtZm9ybS1kYXRlXCIpO1xuICAgIGRhdGVMYWJlbC50ZXh0Q29udGVudCA9IFwiRHVlIERhdGU6XCI7XG4gICAgbGV0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLFwiY3JlYXRlLWZvcm0tZGF0ZVwiKTtcbiAgICBkYXRlSW5wdXQuaWQgPSBcIm5ldy1kYXRlXCI7XG4gICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIixcImRhdGVcIik7XG5cbiAgICBsZXQgc2ltcGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIHNpbXBsZURpdi5hcHBlbmRDaGlsZChkYXRlTGFiZWwpO1xuICAgIHNpbXBsZURpdi5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xuXG4gICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoc2ltcGxlRGl2KTtcbiAgICBcbiAgICBsZXQgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBwcmlvcml0eUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLFwiY3JlYXRlLWZvcm0tcHJpb3JpdHlcIik7XG4gICAgcHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9IFwicHJpb3JpdHk6XCI7XG4gICAgbGV0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgIHByaW9yaXR5SW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLFwiY3JlYXRlLWZvcm0tcHJpb3JpdHlcIik7XG4gICAgcHJpb3JpdHlJbnB1dC5pZCA9IFwibmV3LXByaW9yaXR5XCI7XG5cbiAgICBsZXQgcHJpb3JpdHlPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIHByaW9yaXR5T3B0aW9uLnRleHRDb250ZW50ID0gXCJsb3dcIjtcbiAgICBwcmlvcml0eU9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLFwibG93XCIpO1xuICAgIHByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQocHJpb3JpdHlPcHRpb24pO1xuXG4gICAgcHJpb3JpdHlPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIHByaW9yaXR5T3B0aW9uLnRleHRDb250ZW50ID0gXCJtZWRpdW1cIjtcbiAgICBwcmlvcml0eU9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLFwibWVkaXVtXCIpO1xuICAgIHByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQocHJpb3JpdHlPcHRpb24pO1xuXG4gICAgcHJpb3JpdHlPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIHByaW9yaXR5T3B0aW9uLnRleHRDb250ZW50ID0gXCJoaWdoXCI7XG4gICAgcHJpb3JpdHlPcHRpb24uc2V0QXR0cmlidXRlKFwidmFsdWVcIixcImhpZ2hcIik7XG4gICAgcHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZChwcmlvcml0eU9wdGlvbik7XG5cbiAgICBzaW1wbGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgc2ltcGxlRGl2LmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpO1xuICAgIHNpbXBsZURpdi5hcHBlbmRDaGlsZChwcmlvcml0eUlucHV0KTtcblxuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKHNpbXBsZURpdik7XG5cbiAgICBsaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcblxuICAgIGxldCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHN1Ym1pdEJ0bi5pZCA9IFwic3VibWl0XCI7XG4gICAgc3VibWl0QnRuLnRleHRDb250ZW50ID0gXCJBZGQgVGFza1wiO1xuXG4gICAgZm9ybVdyYXAuYXBwZW5kQ2hpbGQoc3VibWl0QnRuKTtcblxuICAgIGZvcm1XcmFwLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBcbiAgICBhbmNob3JEaXYuYXBwZW5kQ2hpbGQoZm9ybVdyYXApO1xuXG59XG5mdW5jdGlvbiBvcGVuRm9ybSgpe1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbXlGb3JtXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG59XG5mdW5jdGlvbiBjbG9zZUZvcm0oKXtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI215Rm9ybVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59XG5cbmV4cG9ydCB7bG9hZE1haW5Bc3Nlc3RzLCBsb2FkVG9kbywgb3BlbkZvcm0sIGNsb3NlRm9ybX0gICIsImNvbnN0IGNyZWF0ZVRvZG8gPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWUsIHByaW9yaXR5KT0+e1xuICAgIGxldCBkb25lID0gZmFsc2U7XG5cbiAgICBjb25zdCBnZXRUaXRsZSA9ICgpPT57XG4gICAgICAgIHJldHVybiB0aXRsZTtcbiAgICB9O1xuICAgIGNvbnN0IGdldERlc2NyaXB0aW9uID0gKCk9PntcbiAgICAgICAgcmV0dXJuIGRlc2NyaXB0aW9uO1xuICAgIH07XG4gICAgY29uc3QgZ2V0RHVlRGF0ZSA9ICgpPT57XG4gICAgICAgIHJldHVybiBkdWU7XG4gICAgfTtcbiAgICBjb25zdCBnZXRQcmlvcml0eSA9ICgpPT57XG4gICAgICAgIHJldHVybiBwcmlvcml0eTtcbiAgICB9O1xuICAgIGNvbnN0IGlzRG9uZSA9ICgpPT57XG4gICAgICAgIHJldHVybiBkb25lO1xuICAgIH1cbiAgICBjb25zdCByZXR1cm5Ub2RvID0gKCk9PntcbiAgICAgICAgcmV0dXJuIHt0aXRsZSxkZXNjcmlwdGlvbixkdWUscHJpb3JpdHksZG9uZX07XG4gICAgfTtcbiAgICBjb25zdCB0b1N0cmluZyA9ICgpPT57XG4gICAgICAgIHJldHVybiBgJHtwcmlvcml0eX0gJHt0aXRsZX0gICAgICAgICAke2R1ZX0gXFxuICR7ZGVzY3JpcHRpb259YFxuICAgIH07XG5cbiAgICByZXR1cm4ge2dldFRpdGxlLCBnZXREZXNjcmlwdGlvbixnZXREdWVEYXRlLGdldFByaW9yaXR5LHRvU3RyaW5nLHJldHVyblRvZG8saXNEb25lfTtcbn1cblxuY29uc3QgY29weSA9IChUb0RvKT0+e1xuICAgIHJldHVybiBjcmVhdGVUb2RvKFRvRG8uZ2V0VGl0bGUoKSxUb0RvLmdldERlc2NyaXB0aW9uKCksVG9Eby5nZXREdWVEYXRlKCksVG9Eby5nZXRQcmlvcml0eSgpKTtcbn07XG5leHBvcnQge2NyZWF0ZVRvZG8sY29weX07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHtjcmVhdGVUb2RvfSBmcm9tIFwiLi90b2RvSXRlbS5qc1wiIFxuaW1wb3J0IHsgbG9hZE1haW5Bc3Nlc3RzLCBsb2FkVG9kbyxvcGVuRm9ybSAsY2xvc2VGb3JtfSBmcm9tIFwiLi9sb2FkLmpzXCI7XG5pbXBvcnQgY3NzIGZyb20gXCIuL3N0eWxlLmNzc1wiXG5cbmxldCB0b2RvID0gY3JlYXRlVG9kbyhcIkZlZWQgamltbXlcIixcImppbW15IHRoZSBkb2cgd2lsbCBkaWUgaWYgSSBkb250IGZlZWQgaGltIDooIExvbFwiLFwiMjUvMDQvMjAyMlwiLDMpO1xuY29uc29sZS5sb2codG9kby5pc0RvbmUoKSk7XG5sb2FkTWFpbkFzc2VzdHMoKTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdi5hZGRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XG4gICAgb3BlbkZvcm0oKTtcbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW1nLmNsb3NlXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e1xuICAgIGNsb3NlRm9ybSgpO1xufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24jc3VibWl0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e1xuICAgIGNsb3NlRm9ybSgpO1xufSk7XG5cblxubG9hZFRvZG8odG9kbyk7XG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9