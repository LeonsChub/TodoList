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
___CSS_LOADER_EXPORT___.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\ninput:focus,\nselect:focus,\ntextarea:focus,\nbutton:focus {\n    outline: none;\n}\n\n#content{\n    font-size: 1.5em;\n    display: grid;\n\n    grid-template-columns: 1fr 4fr;\n    grid-template-rows: 1fr 6fr;\n    grid-template-areas: \"logo    logo\" \n                        \" sidebar main\";\n\n}\n:root{\n    --cyan-50 :#e0f7fa;\n    --cyan-100:#b2ebf2;\n    --cyan-200:#80deea;\n    --cyan-300:#4dd0e1;\n    --cyan-400:#26c6da;\n    --cyan-500:#00bcd4;\n    --cyan-600:#00acc1;\n}\n#content{\n    width: 100%;\n    height: 100vh;\n    font-family: 'Roboto','Courier New', Courier, monospace;\n}\ntextarea{\n    font-family: 'Roboto','Courier New', Courier, monospace;\n}\n.logo-wrap{\n    grid-area: logo;\n    background-color: var(--cyan-300);\n    display: flex;\n    align-items: center;\n\n    color: white;\n}\n.logo{\n    font-family: 'PT Sans', sans-serif;\n    font-size: 2em;\n    margin-left: 16px;\n}\n\n.sidebar{\n    grid-area: sidebar;\n    background-color: var(--cyan-200);\n}\n.main-content{\n    grid-area: main;\n    padding-top: 32px;\n    background-color: var(--cyan-50);\n    overflow: scroll;\n    overflow-y:auto;\n    overflow-x:auto;\n}\n.sidebar>ul{\n    margin-top: 32px;\n    padding-left: 16px;\n}\n.sidebar li{\n    margin-bottom: 16px;\n\n    width: 80%;\n}\n.todo:not(:last-child){\n    margin-bottom: 0.5em;\n}\n.todo{\n    display: flex;\n    align-items: center;\n    width: 90%;\n    margin-inline: auto;\n    background-color: var(--cyan-100);\n    padding: 0.75em;\n    font-weight: 100;\n\n    border-top-right-radius: 12px;\n    border-bottom-right-radius: 12px;\n\n    border-left: 6px solid rebeccapurple;\n}\n.complete{\n    width: calc(1em - 6px);\n    height: calc(1em - 6px);\n\n    border: 3px solid var(--cyan-600);\n    border-radius: 6px;\n    margin-right: 16px;\n}\n.todo > .title{\n    margin-right: auto;\n}\n.todo > .date,\n.todo > .expand,\n.todo > .edit{\n    margin-right: 24px;\n}\n.todo > .trash:hover,\n.todo > .expand:hover,\n.todo > .complete:hover,\n.todo > .edit:hover,\nimg.close,\nbutton#submit{\n    cursor: pointer;\n}\n.sidebar{\n    display: flex;\n    flex-flow: column;\n    justify-content: space-between;\n}\n.add{\n    color: white;\n    font-size: 2.5em;\n    background-color: var(--cyan-600);\n    border-radius: 40px;\n    \n    padding: 8px;\n    margin: 16px;\n\n    width: 48px;\n    height: 48px;\n    \n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n}\n\n.add:hover{\n    cursor: pointer;\n    box-shadow: 0px 3px 5px rgb(0, 0, 0);\n}\n#myForm{\n    position:absolute;\n\n    margin-inline: auto;\n    margin-block: auto;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    text-align: center;\n\n    background-color: white;\n    border: 0px solid rgb(0, 0, 0);\n\n    max-width: 600px;\n    max-height: 370px;\n    \n    border-radius: 16px;\n    \n}\n.form-container{\n    height: calc(100% - 1.5em - 8px);\n}\n#myForm ul{\n    display: flex;\n    flex-flow: column;\n    height: 100%;\n\n    justify-content: space-between;\n}\n#new-title{\n    width: 95%;\n    font-size: 1em;\n    background-color: white;\n\n    border: none;\n    margin-block: 8px;\n}\n#new-description{\n    font-size: 1em;\n    width: 95%;\n\n    height: 6em;\n    resize: none;\n    border: none;\n}\n#myForm>.title{\n    border-top-left-radius: 16px;\n    border-top-right-radius: 16px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding-inline: 3%;\n    background-color: var(--cyan-400);\n    height: 1.5em;\n}\n#myForm > .title > img.close{\n    width: 16px;\n}\n\nli.picker-field{\n    width: 95%;\n    margin-inline: auto;   \n    display: flex;\n    flex-flow: column;\n\n    align-items: flex-start;\n\n}\n\n#submit{\n    position: absolute;\n    bottom: 8px;\n    right: calc(5%);\n    border: none;\n    font-size: 0.75em;\n    background-color: var(--cyan-500);\n    color: white;\n    padding: 0.5em;\n    border-radius: 0.25em;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\n@import url('https://fonts.googleapis.com/css2?family=PT+Sans:wght@700&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400&display=swap');\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\ninput:focus,\nselect:focus,\ntextarea:focus,\nbutton:focus {\n    outline: none;\n}\n\n#content{\n    font-size: 1.5em;\n    display: grid;\n\n    grid-template-columns: 1fr 4fr;\n    grid-template-rows: 1fr 6fr;\n    grid-template-areas: \"logo    logo\" \n                        \" sidebar main\";\n\n}\n:root{\n    --cyan-50 :#e0f7fa;\n    --cyan-100:#b2ebf2;\n    --cyan-200:#80deea;\n    --cyan-300:#4dd0e1;\n    --cyan-400:#26c6da;\n    --cyan-500:#00bcd4;\n    --cyan-600:#00acc1;\n}\n#content{\n    width: 100%;\n    height: 100vh;\n    font-family: 'Roboto','Courier New', Courier, monospace;\n}\ntextarea{\n    font-family: 'Roboto','Courier New', Courier, monospace;\n}\n.logo-wrap{\n    grid-area: logo;\n    background-color: var(--cyan-300);\n    display: flex;\n    align-items: center;\n\n    color: white;\n}\n.logo{\n    font-family: 'PT Sans', sans-serif;\n    font-size: 2em;\n    margin-left: 16px;\n}\n\n.sidebar{\n    grid-area: sidebar;\n    background-color: var(--cyan-200);\n}\n.main-content{\n    grid-area: main;\n    padding-top: 32px;\n    background-color: var(--cyan-50);\n    overflow: scroll;\n    overflow-y:auto;\n    overflow-x:auto;\n}\n.sidebar>ul{\n    margin-top: 32px;\n    padding-left: 16px;\n}\n.sidebar li{\n    margin-bottom: 16px;\n\n    width: 80%;\n}\n.todo:not(:last-child){\n    margin-bottom: 0.5em;\n}\n.todo{\n    display: flex;\n    align-items: center;\n    width: 90%;\n    margin-inline: auto;\n    background-color: var(--cyan-100);\n    padding: 0.75em;\n    font-weight: 100;\n\n    border-top-right-radius: 12px;\n    border-bottom-right-radius: 12px;\n\n    border-left: 6px solid rebeccapurple;\n}\n.complete{\n    width: calc(1em - 6px);\n    height: calc(1em - 6px);\n\n    border: 3px solid var(--cyan-600);\n    border-radius: 6px;\n    margin-right: 16px;\n}\n.todo > .title{\n    margin-right: auto;\n}\n.todo > .date,\n.todo > .expand,\n.todo > .edit{\n    margin-right: 24px;\n}\n.todo > .trash:hover,\n.todo > .expand:hover,\n.todo > .complete:hover,\n.todo > .edit:hover,\nimg.close,\nbutton#submit{\n    cursor: pointer;\n}\n.sidebar{\n    display: flex;\n    flex-flow: column;\n    justify-content: space-between;\n}\n.add{\n    color: white;\n    font-size: 2.5em;\n    background-color: var(--cyan-600);\n    border-radius: 40px;\n    \n    padding: 8px;\n    margin: 16px;\n\n    width: 48px;\n    height: 48px;\n    \n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n}\n\n.add:hover{\n    cursor: pointer;\n    box-shadow: 0px 3px 5px rgb(0, 0, 0);\n}\n#myForm{\n    position:absolute;\n\n    margin-inline: auto;\n    margin-block: auto;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    text-align: center;\n\n    background-color: white;\n    border: 0px solid rgb(0, 0, 0);\n\n    max-width: 600px;\n    max-height: 370px;\n    \n    border-radius: 16px;\n    \n}\n.form-container{\n    height: calc(100% - 1.5em - 8px);\n}\n#myForm ul{\n    display: flex;\n    flex-flow: column;\n    height: 100%;\n\n    justify-content: space-between;\n}\n#new-title{\n    width: 95%;\n    font-size: 1em;\n    background-color: white;\n\n    border: none;\n    margin-block: 8px;\n}\n#new-description{\n    font-size: 1em;\n    width: 95%;\n\n    height: 6em;\n    resize: none;\n    border: none;\n}\n#myForm>.title{\n    border-top-left-radius: 16px;\n    border-top-right-radius: 16px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding-inline: 3%;\n    background-color: var(--cyan-400);\n    height: 1.5em;\n}\n#myForm > .title > img.close{\n    width: 16px;\n}\n\nli.picker-field{\n    width: 95%;\n    margin-inline: auto;   \n    display: flex;\n    flex-flow: column;\n\n    align-items: flex-start;\n\n}\n\n#submit{\n    position: absolute;\n    bottom: 8px;\n    right: calc(5%);\n    border: none;\n    font-size: 0.75em;\n    background-color: var(--cyan-500);\n    color: white;\n    padding: 0.5em;\n    border-radius: 0.25em;\n}"],"sourceRoot":""}]);
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
/* harmony export */   "loadProject": () => (/* binding */ loadProject),
/* harmony export */   "loadTodo": () => (/* binding */ loadTodo),
/* harmony export */   "openForm": () => (/* binding */ openForm)
/* harmony export */ });
/* harmony import */ var _todoItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoItem */ "./src/todoItem.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/projects.js");



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
    titleInput.setAttribute("name","create-form-title");
    titleInput.setAttribute("placeholder","Title: (example: Walk the dog)");
    listItem.appendChild(titleInput);
    list.appendChild(listItem);

    let descriptionInput = document.createElement("textarea");
    descriptionInput.id = "new-description";
    descriptionInput.setAttribute("placeholder","Description...");
    descriptionInput.setAttribute("name","create-form-description");
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
    priorityOption.setAttribute("value","1");
    priorityInput.appendChild(priorityOption);

    priorityOption = document.createElement("option");
    priorityOption.textContent = "medium";
    priorityOption.setAttribute("value","2");
    priorityInput.appendChild(priorityOption);

    priorityOption = document.createElement("option");
    priorityOption.textContent = "high";
    priorityOption.setAttribute("value","3");
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

function loadProject(proj){
    let array = proj.returnAll();
    array.forEach(p => {
        loadTodo(p);
    });
}

  

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createProject": () => (/* binding */ createProject)
/* harmony export */ });
/* harmony import */ var _todoItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoItem */ "./src/todoItem.js");


const createProject = (str)=>{
    let projects = [];
    let name = str;

    const addTodo = (todo)=>{
        projects.push(todo);
    }
    const removeTodo = (index) =>{
        projects.splice(index,1);
    }
    const getName = ()=>{
        return name;
    }
    const returnAll = ()=>{
        return projects;
    }
    const toString = ()=>{
        let str = "";
        projects.forEach(p => {
            str += p.getTitle();
            str += ", ";
        });

        return str;
    }

    return{addTodo,removeTodo,toString,getName,returnAll}
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
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects.js */ "./src/projects.js");
/* harmony import */ var _load_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./load.js */ "./src/load.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
 




(0,_load_js__WEBPACK_IMPORTED_MODULE_2__.loadMainAssests)();

let form = document.querySelector(".form-container");
let proj = (0,_projects_js__WEBPACK_IMPORTED_MODULE_1__.createProject)("general");

document.querySelector("div.add").addEventListener("click", ()=>{
    (0,_load_js__WEBPACK_IMPORTED_MODULE_2__.openForm)();
});

document.querySelector("img.close").addEventListener("click", ()=>{
    (0,_load_js__WEBPACK_IMPORTED_MODULE_2__.closeForm)();
});

document.querySelector("button#submit").addEventListener("click", ()=>{

    if(form["create-form-title"].value === "" || form["create-form-description"].value === "" || form["create-form-date"].value === ""){
        alert("Please fill out Title Description and Due date.");
    }
    else{
        let todo = (0,_todoItem_js__WEBPACK_IMPORTED_MODULE_0__.createTodo)(form["create-form-title"].value,
                   form["create-form-description"].value,
                   form["create-form-date"].value,
                   form["create-form-priority"].value);
        
        proj.addTodo(todo);
        console.log(proj.toString());

        (0,_load_js__WEBPACK_IMPORTED_MODULE_2__.loadProject)(proj);
    }

    (0,_load_js__WEBPACK_IMPORTED_MODULE_2__.closeForm)();

    form["create-form-title"].value = "";
    form["create-form-description"].value = "";
    form["create-form-date"].value = "";
    form["create-form-priority"].value = "1";
});


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0Q7O0FBRTNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7QUFJQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRW9FOzs7Ozs7Ozs7Ozs7Ozs7QUNoTzVCOztBQUV4QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBLGtCQUFrQixVQUFVLEVBQUUsZUFBZSxFQUFFLEtBQUssS0FBSyxZQUFZO0FBQ3JFOztBQUVBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7VUM5QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7OztBQ0F3QztBQUNNO0FBQ3dDO0FBQ3pEOztBQUU3Qix5REFBZTs7QUFFZjtBQUNBLFdBQVcsMkRBQWE7O0FBRXhCO0FBQ0EsSUFBSSxrREFBUTtBQUNaLENBQUM7O0FBRUQ7QUFDQSxJQUFJLG1EQUFTO0FBQ2IsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix3REFBVTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUSxxREFBVztBQUNuQjs7QUFFQSxJQUFJLG1EQUFTOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2xvYWQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdG9kb0l0ZW0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QVCtTYW5zOndnaHRANzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDEwMDszMDA7NDAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG59XFxub2wsIHVsIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLCBxIHtcXG5cXHRxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG5cXHRjb250ZW50OiAnJztcXG5cXHRjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXG59XFxuaW5wdXQ6Zm9jdXMsXFxuc2VsZWN0OmZvY3VzLFxcbnRleHRhcmVhOmZvY3VzLFxcbmJ1dHRvbjpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbiNjb250ZW50e1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcblxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDZmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcImxvZ28gICAgbG9nb1xcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgXFxcIiBzaWRlYmFyIG1haW5cXFwiO1xcblxcbn1cXG46cm9vdHtcXG4gICAgLS1jeWFuLTUwIDojZTBmN2ZhO1xcbiAgICAtLWN5YW4tMTAwOiNiMmViZjI7XFxuICAgIC0tY3lhbi0yMDA6IzgwZGVlYTtcXG4gICAgLS1jeWFuLTMwMDojNGRkMGUxO1xcbiAgICAtLWN5YW4tNDAwOiMyNmM2ZGE7XFxuICAgIC0tY3lhbi01MDA6IzAwYmNkNDtcXG4gICAgLS1jeWFuLTYwMDojMDBhY2MxO1xcbn1cXG4jY29udGVudHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxufVxcbnRleHRhcmVhe1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbn1cXG4ubG9nby13cmFwe1xcbiAgICBncmlkLWFyZWE6IGxvZ287XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN5YW4tMzAwKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG4ubG9nb3tcXG4gICAgZm9udC1mYW1pbHk6ICdQVCBTYW5zJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xcbn1cXG5cXG4uc2lkZWJhcntcXG4gICAgZ3JpZC1hcmVhOiBzaWRlYmFyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jeWFuLTIwMCk7XFxufVxcbi5tYWluLWNvbnRlbnR7XFxuICAgIGdyaWQtYXJlYTogbWFpbjtcXG4gICAgcGFkZGluZy10b3A6IDMycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN5YW4tNTApO1xcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgICBvdmVyZmxvdy15OmF1dG87XFxuICAgIG92ZXJmbG93LXg6YXV0bztcXG59XFxuLnNpZGViYXI+dWx7XFxuICAgIG1hcmdpbi10b3A6IDMycHg7XFxuICAgIHBhZGRpbmctbGVmdDogMTZweDtcXG59XFxuLnNpZGViYXIgbGl7XFxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XFxuXFxuICAgIHdpZHRoOiA4MCU7XFxufVxcbi50b2RvOm5vdCg6bGFzdC1jaGlsZCl7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xcbn1cXG4udG9kb3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgbWFyZ2luLWlubGluZTogYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3lhbi0xMDApO1xcbiAgICBwYWRkaW5nOiAwLjc1ZW07XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuXFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMnB4O1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTJweDtcXG5cXG4gICAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCByZWJlY2NhcHVycGxlO1xcbn1cXG4uY29tcGxldGV7XFxuICAgIHdpZHRoOiBjYWxjKDFlbSAtIDZweCk7XFxuICAgIGhlaWdodDogY2FsYygxZW0gLSA2cHgpO1xcblxcbiAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1jeWFuLTYwMCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xcbn1cXG4udG9kbyA+IC50aXRsZXtcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG4udG9kbyA+IC5kYXRlLFxcbi50b2RvID4gLmV4cGFuZCxcXG4udG9kbyA+IC5lZGl0e1xcbiAgICBtYXJnaW4tcmlnaHQ6IDI0cHg7XFxufVxcbi50b2RvID4gLnRyYXNoOmhvdmVyLFxcbi50b2RvID4gLmV4cGFuZDpob3ZlcixcXG4udG9kbyA+IC5jb21wbGV0ZTpob3ZlcixcXG4udG9kbyA+IC5lZGl0OmhvdmVyLFxcbmltZy5jbG9zZSxcXG5idXR0b24jc3VibWl0e1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5zaWRlYmFye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4uYWRke1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMi41ZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN5YW4tNjAwKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcXG4gICAgXFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgbWFyZ2luOiAxNnB4O1xcblxcbiAgICB3aWR0aDogNDhweDtcXG4gICAgaGVpZ2h0OiA0OHB4O1xcbiAgICBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxufVxcblxcbi5hZGQ6aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm94LXNoYWRvdzogMHB4IDNweCA1cHggcmdiKDAsIDAsIDApO1xcbn1cXG4jbXlGb3Jte1xcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcXG5cXG4gICAgbWFyZ2luLWlubGluZTogYXV0bztcXG4gICAgbWFyZ2luLWJsb2NrOiBhdXRvO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMHB4IHNvbGlkIHJnYigwLCAwLCAwKTtcXG5cXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcXG4gICAgbWF4LWhlaWdodDogMzcwcHg7XFxuICAgIFxcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbiAgICBcXG59XFxuLmZvcm0tY29udGFpbmVye1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDEuNWVtIC0gOHB4KTtcXG59XFxuI215Rm9ybSB1bHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW47XFxuICAgIGhlaWdodDogMTAwJTtcXG5cXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4jbmV3LXRpdGxle1xcbiAgICB3aWR0aDogOTUlO1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuXFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgbWFyZ2luLWJsb2NrOiA4cHg7XFxufVxcbiNuZXctZGVzY3JpcHRpb257XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICB3aWR0aDogOTUlO1xcblxcbiAgICBoZWlnaHQ6IDZlbTtcXG4gICAgcmVzaXplOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcbiNteUZvcm0+LnRpdGxle1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNnB4O1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTZweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nLWlubGluZTogMyU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN5YW4tNDAwKTtcXG4gICAgaGVpZ2h0OiAxLjVlbTtcXG59XFxuI215Rm9ybSA+IC50aXRsZSA+IGltZy5jbG9zZXtcXG4gICAgd2lkdGg6IDE2cHg7XFxufVxcblxcbmxpLnBpY2tlci1maWVsZHtcXG4gICAgd2lkdGg6IDk1JTtcXG4gICAgbWFyZ2luLWlubGluZTogYXV0bzsgICBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW47XFxuXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcblxcbn1cXG5cXG4jc3VibWl0e1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogOHB4O1xcbiAgICByaWdodDogY2FsYyg1JSk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1zaXplOiAwLjc1ZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN5YW4tNTAwKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAwLjVlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Q0FHQzs7QUFLRDs7Ozs7Ozs7Ozs7OztDQWFDLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsU0FBUztDQUNULGVBQWU7Q0FDZixhQUFhO0NBQ2Isd0JBQXdCO0FBQ3pCO0FBQ0EsZ0RBQWdEO0FBQ2hEOztDQUVDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsY0FBYztBQUNmO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLFlBQVk7QUFDYjtBQUNBOztDQUVDLFdBQVc7Q0FDWCxhQUFhO0FBQ2Q7QUFDQTtDQUNDLHlCQUF5QjtDQUN6QixpQkFBaUI7QUFDbEI7QUFDQTs7OztJQUlJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTs7SUFFYiw4QkFBOEI7SUFDOUIsMkJBQTJCO0lBQzNCO3VDQUNtQzs7QUFFdkM7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYix1REFBdUQ7QUFDM0Q7QUFDQTtJQUNJLHVEQUF1RDtBQUMzRDtBQUNBO0lBQ0ksZUFBZTtJQUNmLGlDQUFpQztJQUNqQyxhQUFhO0lBQ2IsbUJBQW1COztJQUVuQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxrQ0FBa0M7SUFDbEMsY0FBYztJQUNkLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZ0NBQWdDO0lBQ2hDLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksbUJBQW1COztJQUVuQixVQUFVO0FBQ2Q7QUFDQTtJQUNJLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLGlDQUFpQztJQUNqQyxlQUFlO0lBQ2YsZ0JBQWdCOztJQUVoQiw2QkFBNkI7SUFDN0IsZ0NBQWdDOztJQUVoQyxvQ0FBb0M7QUFDeEM7QUFDQTtJQUNJLHNCQUFzQjtJQUN0Qix1QkFBdUI7O0lBRXZCLGlDQUFpQztJQUNqQyxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTs7O0lBR0ksa0JBQWtCO0FBQ3RCO0FBQ0E7Ozs7OztJQU1JLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGlDQUFpQztJQUNqQyxtQkFBbUI7O0lBRW5CLFlBQVk7SUFDWixZQUFZOztJQUVaLFdBQVc7SUFDWCxZQUFZOztJQUVaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCOztBQUUzQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixvQ0FBb0M7QUFDeEM7QUFDQTtJQUNJLGlCQUFpQjs7SUFFakIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsUUFBUTtJQUNSLE1BQU07SUFDTixTQUFTO0lBQ1Qsa0JBQWtCOztJQUVsQix1QkFBdUI7SUFDdkIsOEJBQThCOztJQUU5QixnQkFBZ0I7SUFDaEIsaUJBQWlCOztJQUVqQixtQkFBbUI7O0FBRXZCO0FBQ0E7SUFDSSxnQ0FBZ0M7QUFDcEM7QUFDQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsWUFBWTs7SUFFWiw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLFVBQVU7SUFDVixjQUFjO0lBQ2QsdUJBQXVCOztJQUV2QixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsVUFBVTs7SUFFVixXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7QUFDaEI7QUFDQTtJQUNJLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsa0JBQWtCO0lBQ2xCLGlDQUFpQztJQUNqQyxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixpQkFBaUI7O0lBRWpCLHVCQUF1Qjs7QUFFM0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGVBQWU7SUFDZixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGlDQUFpQztJQUNqQyxZQUFZO0lBQ1osY0FBYztJQUNkLHFCQUFxQjtBQUN6QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UFQrU2Fuczp3Z2h0QDcwMCZkaXNwbGF5PXN3YXAnKTtcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEAxMDA7MzAwOzQwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG59XFxub2wsIHVsIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLCBxIHtcXG5cXHRxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG5cXHRjb250ZW50OiAnJztcXG5cXHRjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXG59XFxuaW5wdXQ6Zm9jdXMsXFxuc2VsZWN0OmZvY3VzLFxcbnRleHRhcmVhOmZvY3VzLFxcbmJ1dHRvbjpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbiNjb250ZW50e1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcblxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDZmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcImxvZ28gICAgbG9nb1xcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgXFxcIiBzaWRlYmFyIG1haW5cXFwiO1xcblxcbn1cXG46cm9vdHtcXG4gICAgLS1jeWFuLTUwIDojZTBmN2ZhO1xcbiAgICAtLWN5YW4tMTAwOiNiMmViZjI7XFxuICAgIC0tY3lhbi0yMDA6IzgwZGVlYTtcXG4gICAgLS1jeWFuLTMwMDojNGRkMGUxO1xcbiAgICAtLWN5YW4tNDAwOiMyNmM2ZGE7XFxuICAgIC0tY3lhbi01MDA6IzAwYmNkNDtcXG4gICAgLS1jeWFuLTYwMDojMDBhY2MxO1xcbn1cXG4jY29udGVudHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxufVxcbnRleHRhcmVhe1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbn1cXG4ubG9nby13cmFwe1xcbiAgICBncmlkLWFyZWE6IGxvZ287XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN5YW4tMzAwKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG4ubG9nb3tcXG4gICAgZm9udC1mYW1pbHk6ICdQVCBTYW5zJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xcbn1cXG5cXG4uc2lkZWJhcntcXG4gICAgZ3JpZC1hcmVhOiBzaWRlYmFyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jeWFuLTIwMCk7XFxufVxcbi5tYWluLWNvbnRlbnR7XFxuICAgIGdyaWQtYXJlYTogbWFpbjtcXG4gICAgcGFkZGluZy10b3A6IDMycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN5YW4tNTApO1xcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgICBvdmVyZmxvdy15OmF1dG87XFxuICAgIG92ZXJmbG93LXg6YXV0bztcXG59XFxuLnNpZGViYXI+dWx7XFxuICAgIG1hcmdpbi10b3A6IDMycHg7XFxuICAgIHBhZGRpbmctbGVmdDogMTZweDtcXG59XFxuLnNpZGViYXIgbGl7XFxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XFxuXFxuICAgIHdpZHRoOiA4MCU7XFxufVxcbi50b2RvOm5vdCg6bGFzdC1jaGlsZCl7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xcbn1cXG4udG9kb3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgbWFyZ2luLWlubGluZTogYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3lhbi0xMDApO1xcbiAgICBwYWRkaW5nOiAwLjc1ZW07XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuXFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMnB4O1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTJweDtcXG5cXG4gICAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCByZWJlY2NhcHVycGxlO1xcbn1cXG4uY29tcGxldGV7XFxuICAgIHdpZHRoOiBjYWxjKDFlbSAtIDZweCk7XFxuICAgIGhlaWdodDogY2FsYygxZW0gLSA2cHgpO1xcblxcbiAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1jeWFuLTYwMCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xcbn1cXG4udG9kbyA+IC50aXRsZXtcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG4udG9kbyA+IC5kYXRlLFxcbi50b2RvID4gLmV4cGFuZCxcXG4udG9kbyA+IC5lZGl0e1xcbiAgICBtYXJnaW4tcmlnaHQ6IDI0cHg7XFxufVxcbi50b2RvID4gLnRyYXNoOmhvdmVyLFxcbi50b2RvID4gLmV4cGFuZDpob3ZlcixcXG4udG9kbyA+IC5jb21wbGV0ZTpob3ZlcixcXG4udG9kbyA+IC5lZGl0OmhvdmVyLFxcbmltZy5jbG9zZSxcXG5idXR0b24jc3VibWl0e1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5zaWRlYmFye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4uYWRke1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMi41ZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN5YW4tNjAwKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcXG4gICAgXFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgbWFyZ2luOiAxNnB4O1xcblxcbiAgICB3aWR0aDogNDhweDtcXG4gICAgaGVpZ2h0OiA0OHB4O1xcbiAgICBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxufVxcblxcbi5hZGQ6aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm94LXNoYWRvdzogMHB4IDNweCA1cHggcmdiKDAsIDAsIDApO1xcbn1cXG4jbXlGb3Jte1xcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcXG5cXG4gICAgbWFyZ2luLWlubGluZTogYXV0bztcXG4gICAgbWFyZ2luLWJsb2NrOiBhdXRvO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMHB4IHNvbGlkIHJnYigwLCAwLCAwKTtcXG5cXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcXG4gICAgbWF4LWhlaWdodDogMzcwcHg7XFxuICAgIFxcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbiAgICBcXG59XFxuLmZvcm0tY29udGFpbmVye1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDEuNWVtIC0gOHB4KTtcXG59XFxuI215Rm9ybSB1bHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW47XFxuICAgIGhlaWdodDogMTAwJTtcXG5cXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4jbmV3LXRpdGxle1xcbiAgICB3aWR0aDogOTUlO1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuXFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgbWFyZ2luLWJsb2NrOiA4cHg7XFxufVxcbiNuZXctZGVzY3JpcHRpb257XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICB3aWR0aDogOTUlO1xcblxcbiAgICBoZWlnaHQ6IDZlbTtcXG4gICAgcmVzaXplOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcbiNteUZvcm0+LnRpdGxle1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNnB4O1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTZweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nLWlubGluZTogMyU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN5YW4tNDAwKTtcXG4gICAgaGVpZ2h0OiAxLjVlbTtcXG59XFxuI215Rm9ybSA+IC50aXRsZSA+IGltZy5jbG9zZXtcXG4gICAgd2lkdGg6IDE2cHg7XFxufVxcblxcbmxpLnBpY2tlci1maWVsZHtcXG4gICAgd2lkdGg6IDk1JTtcXG4gICAgbWFyZ2luLWlubGluZTogYXV0bzsgICBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW47XFxuXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcblxcbn1cXG5cXG4jc3VibWl0e1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogOHB4O1xcbiAgICByaWdodDogY2FsYyg1JSk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1zaXplOiAwLjc1ZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN5YW4tNTAwKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAwLjVlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7Y29weSwgY3JlYXRlVG9kb30gZnJvbSBcIi4vdG9kb0l0ZW1cIjtcbmltcG9ydCB7IGNyZWF0ZVByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuXG5pZighIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKSA9PT0gZmFsc2Upe1xuICAgIHZhciBhbmNob3JEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGFuY2hvckRpdi5pZCA9IFwiY29udGVudFwiO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLmFwcGVuZENoaWxkKGFuY2hvckRpdik7XG59XG5lbHNle1xuICAgIHZhciBhbmNob3JEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7IFxufVxuXG5mdW5jdGlvbiBsb2FkTWFpbkFzc2VzdHMoKXtcblxuICAgIGxldCBsb2dvV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG4gICAgbG9nb1dyYXAuY2xhc3NMaXN0LmFkZChcImxvZ28td3JhcFwiKTtcblxuICAgIGxldCBsb2dvSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBsb2dvSW1nLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsXCI0OHB4XCIpO1xuXG4gICAgbG9nb0ltZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIixcIi4uL3NyYy9pbWFnZXMvTG9nby5zdmdcIik7XG4gICAgbGV0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGxvZ28uY2xhc3NMaXN0LmFkZCgnbG9nbycpO1xuICAgIGxvZ28uaW5uZXJIVE1MID0gJzxpbWcgd2lkdGg9XCI0MHB4XCIgc3JjPVwiLi4vc3JjL2ltYWdlcy9Mb2dvLnN2Z1wiIGFsdD1cIlwiPiBUbyBEbyBMaXN0JztcblxuICAgIGxvZ29XcmFwLmFwcGVuZENoaWxkKGxvZ28pO1xuICAgIGFuY2hvckRpdi5hcHBlbmRDaGlsZChsb2dvV3JhcCk7XG5cblxuXG4gICAgbGV0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyXCIpO1xuXG4gICAgbGV0IHNpZGViYXJMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcblxuICAgIGxldCBsaXN0RWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBsaXN0RWxlbS50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xuICAgIHNpZGViYXJMaXN0LmFwcGVuZENoaWxkKGxpc3RFbGVtKTtcblxuICAgIGxpc3RFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGxpc3RFbGVtLnRleHRDb250ZW50ID0gXCJUb2RheVwiO1xuICAgIHNpZGViYXJMaXN0LmFwcGVuZENoaWxkKGxpc3RFbGVtKTtcblxuICAgIGxpc3RFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGxpc3RFbGVtLnRleHRDb250ZW50ID0gXCJXZWVrXCI7XG4gICAgc2lkZWJhckxpc3QuYXBwZW5kQ2hpbGQobGlzdEVsZW0pO1xuXG4gICAgbGV0IGFkZFRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGFkZFRvZG8uY2xhc3NMaXN0LmFkZChcImFkZFwiKTtcbiAgICBhZGRUb2RvLnRleHRDb250ZW50ID0gXCIrXCI7XG5cbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHNpZGViYXJMaXN0KTtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGFkZFRvZG8pO1xuICAgIGFuY2hvckRpdi5hcHBlbmRDaGlsZChzaWRlYmFyKTtcblxuICAgIGxldCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluLWNvbnRlbnRcIik7XG4gICAgYW5jaG9yRGl2LmFwcGVuZENoaWxkKG1haW4pO1xuXG4gICAgbG9hZEZvcm0oKVxufVxuXG5mdW5jdGlvbiBsb2FkVG9kbyh0b2RvKXtcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1jb250ZW50XCIpO1xuXG4gICAgbGV0IHRvRG9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvRG9EaXYuY2xhc3NMaXN0LmFkZChcInRvZG9cIik7XG5cbiAgICBsZXQgY2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNoZWNrQm94LmNsYXNzTGlzdC5hZGQoXCJjb21wbGV0ZVwiKTtcbiAgICBcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gdG9kby5nZXRUaXRsZSgpO1xuXG4gICAgbGV0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgZGF0ZS5jbGFzc0xpc3QuYWRkKFwiZGF0ZVwiKTtcbiAgICBkYXRlLnRleHRDb250ZW50ID0gdG9kby5nZXREdWVEYXRlKCk7XG5cbiAgICBsZXQgZXhwYW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBleHBhbmQuY2xhc3NMaXN0LmFkZChcImV4cGFuZFwiKTtcbiAgICBleHBhbmQuc2V0QXR0cmlidXRlKFwid2lkdGhcIixcIjI0cHhcIik7XG4gICAgZXhwYW5kLnNldEF0dHJpYnV0ZShcInNyY1wiLFwiLi4vc3JjL2ltYWdlcy9leHBhbmQuc3ZnXCIpO1xuXG4gICAgbGV0IGVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGVkaXQuY2xhc3NMaXN0LmFkZChcImVkaXRcIik7XG4gICAgZWRpdC5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLFwiMjRweFwiKTtcbiAgICBlZGl0LnNldEF0dHJpYnV0ZShcInNyY1wiLFwiLi4vc3JjL2ltYWdlcy9lZGl0LnN2Z1wiKTtcblxuICAgIGxldCB0cmFzaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgdHJhc2guY2xhc3NMaXN0LmFkZChcInRyYXNoXCIpO1xuICAgIHRyYXNoLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsXCIyNHB4XCIpO1xuICAgIHRyYXNoLnNldEF0dHJpYnV0ZShcInNyY1wiLFwiLi4vc3JjL2ltYWdlcy90cmFzaC5zdmdcIik7XG5cbiAgICB0b0RvRGl2LmFwcGVuZChjaGVja0JveCk7XG4gICAgdG9Eb0Rpdi5hcHBlbmQodGl0bGUpO1xuICAgIHRvRG9EaXYuYXBwZW5kKGRhdGUpO1xuICAgIHRvRG9EaXYuYXBwZW5kKGV4cGFuZCk7XG4gICAgdG9Eb0Rpdi5hcHBlbmQoZWRpdCk7XG4gICAgdG9Eb0Rpdi5hcHBlbmQodHJhc2gpO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0b0RvRGl2KTtcbn1cblxuZnVuY3Rpb24gbG9hZEZvcm0oKXtcblxuICAgIGxldCBmb3JtV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9ybVdyYXAuaWQgPSBcIm15Rm9ybVwiO1xuXG4gICAgbGV0IGZvcm1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9ybVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcblxuICAgIGxldCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIG5hbWUudGV4dENvbnRlbnQgPSBcIkFkZCBhIHRvLWRvXCI7XG4gICAgZm9ybVRpdGxlLmFwcGVuZENoaWxkKG5hbWUpO1xuXG4gICAgbGV0IHhCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIHhCdG4uY2xhc3NMaXN0LmFkZChcImNsb3NlXCIpO1xuICAgIHhCdG4uc2V0QXR0cmlidXRlKFwic3JjXCIsXCIuLi9zcmMvaW1hZ2VzL2Nsb3NlLnN2Z1wiKTtcbiAgICBmb3JtVGl0bGUuYXBwZW5kQ2hpbGQoeEJ0bik7XG5cbiAgICBmb3JtV3JhcC5hcHBlbmRDaGlsZChmb3JtVGl0bGUpO1xuXG4gICAgbGV0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWNvbnRhaW5lclwiKTtcbiAgICBmb3JtLnNldEF0dHJpYnV0ZSgnbm92YWxpZGF0ZScsIHRydWUpO1xuICAgIGZvcm1XcmFwLmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gICAgbGV0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChsaXN0KTtcblxuICAgIGxldCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBsaXN0SXRlbS5jbGFzc0xpc3QuYWRkKFwidGV4dC1maWVsZFwiKTtcbiAgICBsZXQgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB0aXRsZUlucHV0LmlkID0gXCJuZXctdGl0bGVcIjtcbiAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIixcInRleHRcIik7XG4gICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsXCJjcmVhdGUtZm9ybS10aXRsZVwiKTtcbiAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsXCJUaXRsZTogKGV4YW1wbGU6IFdhbGsgdGhlIGRvZylcIik7XG4gICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG4gICAgbGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG5cbiAgICBsZXQgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICBkZXNjcmlwdGlvbklucHV0LmlkID0gXCJuZXctZGVzY3JpcHRpb25cIjtcbiAgICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsXCJEZXNjcmlwdGlvbi4uLlwiKTtcbiAgICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIixcImNyZWF0ZS1mb3JtLWRlc2NyaXB0aW9uXCIpO1xuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uSW5wdXQpO1xuICAgIGxpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuXG4gICAgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbGlzdEl0ZW0uY2xhc3NMaXN0LmFkZChcInBpY2tlci1maWVsZFwiKTtcblxuICAgIGxldCBkYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgZGF0ZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLFwiY3JlYXRlLWZvcm0tZGF0ZVwiKTtcbiAgICBkYXRlTGFiZWwudGV4dENvbnRlbnQgPSBcIkR1ZSBEYXRlOlwiO1xuICAgIGxldCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIixcImNyZWF0ZS1mb3JtLWRhdGVcIik7XG4gICAgZGF0ZUlucHV0LmlkID0gXCJuZXctZGF0ZVwiO1xuICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJkYXRlXCIpO1xuXG4gICAgbGV0IHNpbXBsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBzaW1wbGVEaXYuYXBwZW5kQ2hpbGQoZGF0ZUxhYmVsKTtcbiAgICBzaW1wbGVEaXYuYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcblxuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKHNpbXBsZURpdik7XG4gICAgXG4gICAgbGV0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgcHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIixcImNyZWF0ZS1mb3JtLXByaW9yaXR5XCIpO1xuICAgIHByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSBcInByaW9yaXR5OlwiO1xuICAgIGxldCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICBwcmlvcml0eUlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIixcImNyZWF0ZS1mb3JtLXByaW9yaXR5XCIpO1xuICAgIHByaW9yaXR5SW5wdXQuaWQgPSBcIm5ldy1wcmlvcml0eVwiO1xuXG4gICAgbGV0IHByaW9yaXR5T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBwcmlvcml0eU9wdGlvbi50ZXh0Q29udGVudCA9IFwibG93XCI7XG4gICAgcHJpb3JpdHlPcHRpb24uc2V0QXR0cmlidXRlKFwidmFsdWVcIixcIjFcIik7XG4gICAgcHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZChwcmlvcml0eU9wdGlvbik7XG5cbiAgICBwcmlvcml0eU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgcHJpb3JpdHlPcHRpb24udGV4dENvbnRlbnQgPSBcIm1lZGl1bVwiO1xuICAgIHByaW9yaXR5T3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsXCIyXCIpO1xuICAgIHByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQocHJpb3JpdHlPcHRpb24pO1xuXG4gICAgcHJpb3JpdHlPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIHByaW9yaXR5T3B0aW9uLnRleHRDb250ZW50ID0gXCJoaWdoXCI7XG4gICAgcHJpb3JpdHlPcHRpb24uc2V0QXR0cmlidXRlKFwidmFsdWVcIixcIjNcIik7XG4gICAgcHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZChwcmlvcml0eU9wdGlvbik7XG5cbiAgICBzaW1wbGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgc2ltcGxlRGl2LmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpO1xuICAgIHNpbXBsZURpdi5hcHBlbmRDaGlsZChwcmlvcml0eUlucHV0KTtcblxuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKHNpbXBsZURpdik7XG5cbiAgICBsaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcblxuICAgIGxldCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHN1Ym1pdEJ0bi5pZCA9IFwic3VibWl0XCI7XG4gICAgc3VibWl0QnRuLnRleHRDb250ZW50ID0gXCJBZGQgVGFza1wiO1xuXG4gICAgZm9ybVdyYXAuYXBwZW5kQ2hpbGQoc3VibWl0QnRuKTtcblxuICAgIGZvcm1XcmFwLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBcbiAgICBhbmNob3JEaXYuYXBwZW5kQ2hpbGQoZm9ybVdyYXApO1xuXG59XG5cbmZ1bmN0aW9uIG9wZW5Gb3JtKCl7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNteUZvcm1cIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbn1cblxuZnVuY3Rpb24gY2xvc2VGb3JtKCl7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNteUZvcm1cIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufVxuXG5mdW5jdGlvbiBsb2FkUHJvamVjdChwcm9qKXtcbiAgICBsZXQgYXJyYXkgPSBwcm9qLnJldHVybkFsbCgpO1xuICAgIGFycmF5LmZvckVhY2gocCA9PiB7XG4gICAgICAgIGxvYWRUb2RvKHApO1xuICAgIH0pO1xufVxuXG5leHBvcnQge2xvYWRNYWluQXNzZXN0cywgbG9hZFRvZG8sIG9wZW5Gb3JtLCBjbG9zZUZvcm0sIGxvYWRQcm9qZWN0fSAgIiwiaW1wb3J0IHsgY3JlYXRlVG9kbyB9IGZyb20gXCIuL3RvZG9JdGVtXCI7XG5cbmNvbnN0IGNyZWF0ZVByb2plY3QgPSAoc3RyKT0+e1xuICAgIGxldCBwcm9qZWN0cyA9IFtdO1xuICAgIGxldCBuYW1lID0gc3RyO1xuXG4gICAgY29uc3QgYWRkVG9kbyA9ICh0b2RvKT0+e1xuICAgICAgICBwcm9qZWN0cy5wdXNoKHRvZG8pO1xuICAgIH1cbiAgICBjb25zdCByZW1vdmVUb2RvID0gKGluZGV4KSA9PntcbiAgICAgICAgcHJvamVjdHMuc3BsaWNlKGluZGV4LDEpO1xuICAgIH1cbiAgICBjb25zdCBnZXROYW1lID0gKCk9PntcbiAgICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfVxuICAgIGNvbnN0IHJldHVybkFsbCA9ICgpPT57XG4gICAgICAgIHJldHVybiBwcm9qZWN0cztcbiAgICB9XG4gICAgY29uc3QgdG9TdHJpbmcgPSAoKT0+e1xuICAgICAgICBsZXQgc3RyID0gXCJcIjtcbiAgICAgICAgcHJvamVjdHMuZm9yRWFjaChwID0+IHtcbiAgICAgICAgICAgIHN0ciArPSBwLmdldFRpdGxlKCk7XG4gICAgICAgICAgICBzdHIgKz0gXCIsIFwiO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gc3RyO1xuICAgIH1cblxuICAgIHJldHVybnthZGRUb2RvLHJlbW92ZVRvZG8sdG9TdHJpbmcsZ2V0TmFtZSxyZXR1cm5BbGx9XG59XG5cbmV4cG9ydCB7Y3JlYXRlUHJvamVjdH0iLCJjb25zdCBjcmVhdGVUb2RvID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlLCBwcmlvcml0eSk9PntcbiAgICBsZXQgZG9uZSA9IGZhbHNlO1xuXG4gICAgY29uc3QgZ2V0VGl0bGUgPSAoKT0+e1xuICAgICAgICByZXR1cm4gdGl0bGU7XG4gICAgfTtcbiAgICBjb25zdCBnZXREZXNjcmlwdGlvbiA9ICgpPT57XG4gICAgICAgIHJldHVybiBkZXNjcmlwdGlvbjtcbiAgICB9O1xuICAgIGNvbnN0IGdldER1ZURhdGUgPSAoKT0+e1xuICAgICAgICByZXR1cm4gZHVlO1xuICAgIH07XG4gICAgY29uc3QgZ2V0UHJpb3JpdHkgPSAoKT0+e1xuICAgICAgICByZXR1cm4gcHJpb3JpdHk7XG4gICAgfTtcbiAgICBjb25zdCBpc0RvbmUgPSAoKT0+e1xuICAgICAgICByZXR1cm4gZG9uZTtcbiAgICB9XG4gICAgY29uc3QgcmV0dXJuVG9kbyA9ICgpPT57XG4gICAgICAgIHJldHVybiB7dGl0bGUsZGVzY3JpcHRpb24sZHVlLHByaW9yaXR5LGRvbmV9O1xuICAgIH07XG4gICAgY29uc3QgdG9TdHJpbmcgPSAoKT0+e1xuICAgICAgICByZXR1cm4gYCR7cHJpb3JpdHl9ICR7dGl0bGV9ICAgICAgICAgJHtkdWV9IFxcbiAke2Rlc2NyaXB0aW9ufWBcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtnZXRUaXRsZSwgZ2V0RGVzY3JpcHRpb24sZ2V0RHVlRGF0ZSxnZXRQcmlvcml0eSx0b1N0cmluZyxyZXR1cm5Ub2RvLGlzRG9uZX07XG59XG5cbmNvbnN0IGNvcHkgPSAoVG9Ebyk9PntcbiAgICByZXR1cm4gY3JlYXRlVG9kbyhUb0RvLmdldFRpdGxlKCksVG9Eby5nZXREZXNjcmlwdGlvbigpLFRvRG8uZ2V0RHVlRGF0ZSgpLFRvRG8uZ2V0UHJpb3JpdHkoKSk7XG59O1xuZXhwb3J0IHtjcmVhdGVUb2RvLGNvcHl9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7Y3JlYXRlVG9kb30gZnJvbSBcIi4vdG9kb0l0ZW0uanNcIiBcbmltcG9ydCB7IGNyZWF0ZVByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0cy5qc1wiO1xuaW1wb3J0IHsgbG9hZE1haW5Bc3Nlc3RzLCBsb2FkVG9kbyxvcGVuRm9ybSAsY2xvc2VGb3JtLCBsb2FkUHJvamVjdH0gZnJvbSBcIi4vbG9hZC5qc1wiO1xuaW1wb3J0IGNzcyBmcm9tIFwiLi9zdHlsZS5jc3NcIlxuXG5sb2FkTWFpbkFzc2VzdHMoKTtcblxubGV0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tY29udGFpbmVyXCIpO1xubGV0IHByb2ogPSBjcmVhdGVQcm9qZWN0KFwiZ2VuZXJhbFwiKTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdi5hZGRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XG4gICAgb3BlbkZvcm0oKTtcbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW1nLmNsb3NlXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e1xuICAgIGNsb3NlRm9ybSgpO1xufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24jc3VibWl0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e1xuXG4gICAgaWYoZm9ybVtcImNyZWF0ZS1mb3JtLXRpdGxlXCJdLnZhbHVlID09PSBcIlwiIHx8IGZvcm1bXCJjcmVhdGUtZm9ybS1kZXNjcmlwdGlvblwiXS52YWx1ZSA9PT0gXCJcIiB8fCBmb3JtW1wiY3JlYXRlLWZvcm0tZGF0ZVwiXS52YWx1ZSA9PT0gXCJcIil7XG4gICAgICAgIGFsZXJ0KFwiUGxlYXNlIGZpbGwgb3V0IFRpdGxlIERlc2NyaXB0aW9uIGFuZCBEdWUgZGF0ZS5cIik7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgIGxldCB0b2RvID0gY3JlYXRlVG9kbyhmb3JtW1wiY3JlYXRlLWZvcm0tdGl0bGVcIl0udmFsdWUsXG4gICAgICAgICAgICAgICAgICAgZm9ybVtcImNyZWF0ZS1mb3JtLWRlc2NyaXB0aW9uXCJdLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgIGZvcm1bXCJjcmVhdGUtZm9ybS1kYXRlXCJdLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgIGZvcm1bXCJjcmVhdGUtZm9ybS1wcmlvcml0eVwiXS52YWx1ZSk7XG4gICAgICAgIFxuICAgICAgICBwcm9qLmFkZFRvZG8odG9kbyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2oudG9TdHJpbmcoKSk7XG5cbiAgICAgICAgbG9hZFByb2plY3QocHJvaik7XG4gICAgfVxuXG4gICAgY2xvc2VGb3JtKCk7XG5cbiAgICBmb3JtW1wiY3JlYXRlLWZvcm0tdGl0bGVcIl0udmFsdWUgPSBcIlwiO1xuICAgIGZvcm1bXCJjcmVhdGUtZm9ybS1kZXNjcmlwdGlvblwiXS52YWx1ZSA9IFwiXCI7XG4gICAgZm9ybVtcImNyZWF0ZS1mb3JtLWRhdGVcIl0udmFsdWUgPSBcIlwiO1xuICAgIGZvcm1bXCJjcmVhdGUtZm9ybS1wcmlvcml0eVwiXS52YWx1ZSA9IFwiMVwiO1xufSk7XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==