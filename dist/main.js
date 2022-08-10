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
___CSS_LOADER_EXPORT___.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\ninput:focus,\nselect:focus,\ntextarea:focus,\nbutton:focus {\n    outline: none;\n}\n\n#content{\n    font-size: 1.5em;\n    display: grid;\n\n    grid-template-columns: 1fr 4fr;\n    grid-template-rows: 1fr 4fr;\n    grid-template-areas: \"logo    logo\" \n                        \" sidebar main\";\n\n}\n:root{\n    --cyan-50 :#e0f7fa;\n    --cyan-100:#b2ebf2;\n    --cyan-200:#80deea;\n    --cyan-300:#4dd0e1;\n    --cyan-400:#26c6da;\n    --cyan-500:#00bcd4;\n    --cyan-600:#00acc1;\n    --cyan-700:#0097a7;\n    --cyan-800:#00838f;\n    --cyan-900:#006064;\n}\n#content{\n    width: 100%;\n    height: 100vh;\n    font-family: 'Roboto','Courier New', Courier, monospace;\n}\ntextarea{\n    font-family: 'Roboto','Courier New', Courier, monospace;\n}\n.logo-wrap{\n    grid-area: logo;\n    background-color: var(--cyan-300);\n    display: flex;\n    align-items: center;\n\n    color: white;\n}\n.logo{\n    font-family: 'PT Sans', sans-serif;\n    font-size: 2em;\n    margin-left: 16px;\n}\n\n.sidebar{\n    grid-area: sidebar;\n    background-color: var(--cyan-200);\n}\n.main-content{\n    grid-area: main;\n    padding-top: 32px;\n    background-color: var(--cyan-50);\n    overflow: scroll;\n    overflow-y:auto;\n    overflow-x:auto;\n}\n.sidebar>ul{\n    margin-top: 32px;\n    padding-left: 16px;\n}\n.sidebar li{\n    margin-bottom: 16px;\n\n    width: 80%;\n}\n.sidebar li > button{\n    border: none;\n    background-color: #0097a7;\n    width: 100%;\n\n    text-align: left;\n    font-size: 0.75em;\n    padding: 0.5em;\n    font-weight: 600;\n}\n#project-list{\n    width: 100%;\n    \n    height: 150px;\n\n    overflow: scroll;\n    overflow-x: auto;\n    overflow-y: auto;\n}\n#project-list > li{\n    font-size: 0.75em;\n    width: 100%;\n    margin:0;\n}\n#project-list > li > button{\n    background-color: transparent;\n}\n#project-list > li > button:hover{\n    background-color: var(--cyan-900);\n    color: white;\n}\n#add-project{\n    width: 100%;\n    display: flex;\n    flex-flow: column;\n}\n.btn-div{\n    display: flex;\n    justify-content: space-between;\n    margin-top: 8px;\n}\n#submit-proj{\n    background-color: rgb(62, 212, 62);\n}\n#cancel-proj{\n    background-color: rgb(229, 14, 14);\n}\n#project-add-name{\n    width: 97%;\n    font-size: 0.75em;\n}\n.error{\n    color: red;\n    font-size: 0.6em;\n    padding-top: 0.4em;\n}\n\n#submit-proj,\n#cancel-proj{\n    font-weight: 600;\n    width: 45%;\n    font-size: 0.75em;\n    border: none;\n    padding: 0.5em;\n    border-radius: 0.25em;\n}\n.todo:not(:last-child){\n    margin-bottom: 0.5em;\n}\n.todo{\n    display: flex;\n    align-items: center;\n    width: 90%;\n    margin-inline: auto;\n    background-color: var(--cyan-100);\n    padding: 0.75em;\n    font-weight: 100;\n\n    border-top-right-radius: 12px;\n    border-bottom-right-radius: 12px;\n}\n\n.todo[priority = \"1\"]{\n    border-left: 3px solid green;\n}\n.todo[priority = \"2\"]{\n    border-left: 3px solid yellow;\n}\n.todo[priority = \"3\"]{\n    border-left: 3px solid red;\n}\n\n.complete{\n    width: calc(1em - 6px);\n    height: calc(1em - 6px);\n\n    border: 3px solid var(--cyan-600);\n    border-radius: 6px;\n    margin-right: 16px;\n}\n\n.complete.checked{\n    background-color: var(--cyan-800);\n}\n.todo > .title.checked{\n    text-decoration:line-through;\n    color: gray;\n}\n.todo > .title{\n    margin-right: auto;\n}\n.todo > .date,\n.todo > .expand,\n.todo > .edit{\n    margin-right: 24px;\n}\n.todo > .trash:hover,\n.todo > .expand:hover,\n.todo > .complete:hover,\n.todo > .edit:hover,\nimg.close,\nbutton:hover,\nbutton#submit{\n    cursor: pointer;\n}\n.sidebar{\n    display: flex;\n    flex-flow: column;\n    justify-content: space-between;\n}\n.add{\n    color: white;\n    font-size: 2.5em;\n    background-color: var(--cyan-600);\n    border-radius: 40px;\n    \n    padding: 8px;\n    margin: 16px;\n\n    width: 48px;\n    height: 48px;\n    \n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n}\n\n.add:hover{\n    cursor: pointer;\n    box-shadow: 0px 3px 5px rgb(0, 0, 0);\n}\n.popup{\n    position:absolute;\n\n    margin-inline: auto;\n    margin-block: auto;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    text-align: center;\n\n    background-color: white;\n    border: none;\n\n    max-width: 600px;\n    max-height: 370px;\n    \n    border-radius: 16px;\n}\n.form-container{\n    height: calc(100% - 1.5em - 8px);\n    width: 95%;\n    margin-inline: auto;\n}\n#myForm ul{\n    display: flex;\n    flex-flow: column;\n    height: 100%;\n\n    justify-content: space-between;\n}\n#new-title{\n    width: 100%;\n    font-size: 1em;\n    background-color: white;\n\n    border: none;\n    margin-block: 8px;\n}\n#new-title:focus{\n    background-color: white;\n}\n#new-description{\n    font-size: 1em;\n    width: 100%;\n\n    height: 6em;\n    resize: none;\n    border: none;\n}\n#myForm>.title,\n#expandWindow > .title{\n    border-top-left-radius: 16px;\n    border-top-right-radius: 16px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding-inline: 3%;\n    background-color: var(--cyan-400);\n    height: 1.5em;\n}\n#myForm > .title > img.close,\n#expandWindow > .title > img.close{\n    width: 16px;\n}\n\nli.picker-field{\n    \n    display: flex;\n    flex-flow: column;\n\n    align-items: flex-start;\n}\n#expand-description{\n    text-align: left;\n    margin-top: 16px;\n}\n\n#submit{\n    position: absolute;\n    bottom: 8px;\n    right: calc(5%);\n    border: none;\n    font-size: 0.75em;\n    background-color: var(--cyan-500);\n    color: white;\n    padding: 0.5em;\n    border-radius: 0.25em;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\n@import url('https://fonts.googleapis.com/css2?family=PT+Sans:wght@700&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400&display=swap');\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\ninput:focus,\nselect:focus,\ntextarea:focus,\nbutton:focus {\n    outline: none;\n}\n\n#content{\n    font-size: 1.5em;\n    display: grid;\n\n    grid-template-columns: 1fr 4fr;\n    grid-template-rows: 1fr 4fr;\n    grid-template-areas: \"logo    logo\" \n                        \" sidebar main\";\n\n}\n:root{\n    --cyan-50 :#e0f7fa;\n    --cyan-100:#b2ebf2;\n    --cyan-200:#80deea;\n    --cyan-300:#4dd0e1;\n    --cyan-400:#26c6da;\n    --cyan-500:#00bcd4;\n    --cyan-600:#00acc1;\n    --cyan-700:#0097a7;\n    --cyan-800:#00838f;\n    --cyan-900:#006064;\n}\n#content{\n    width: 100%;\n    height: 100vh;\n    font-family: 'Roboto','Courier New', Courier, monospace;\n}\ntextarea{\n    font-family: 'Roboto','Courier New', Courier, monospace;\n}\n.logo-wrap{\n    grid-area: logo;\n    background-color: var(--cyan-300);\n    display: flex;\n    align-items: center;\n\n    color: white;\n}\n.logo{\n    font-family: 'PT Sans', sans-serif;\n    font-size: 2em;\n    margin-left: 16px;\n}\n\n.sidebar{\n    grid-area: sidebar;\n    background-color: var(--cyan-200);\n}\n.main-content{\n    grid-area: main;\n    padding-top: 32px;\n    background-color: var(--cyan-50);\n    overflow: scroll;\n    overflow-y:auto;\n    overflow-x:auto;\n}\n.sidebar>ul{\n    margin-top: 32px;\n    padding-left: 16px;\n}\n.sidebar li{\n    margin-bottom: 16px;\n\n    width: 80%;\n}\n.sidebar li > button{\n    border: none;\n    background-color: #0097a7;\n    width: 100%;\n\n    text-align: left;\n    font-size: 0.75em;\n    padding: 0.5em;\n    font-weight: 600;\n}\n#project-list{\n    width: 100%;\n    \n    height: 150px;\n\n    overflow: scroll;\n    overflow-x: auto;\n    overflow-y: auto;\n}\n#project-list > li{\n    font-size: 0.75em;\n    width: 100%;\n    margin:0;\n}\n#project-list > li > button{\n    background-color: transparent;\n}\n#project-list > li > button:hover{\n    background-color: var(--cyan-900);\n    color: white;\n}\n#add-project{\n    width: 100%;\n    display: flex;\n    flex-flow: column;\n}\n.btn-div{\n    display: flex;\n    justify-content: space-between;\n    margin-top: 8px;\n}\n#submit-proj{\n    background-color: rgb(62, 212, 62);\n}\n#cancel-proj{\n    background-color: rgb(229, 14, 14);\n}\n#project-add-name{\n    width: 97%;\n    font-size: 0.75em;\n}\n.error{\n    color: red;\n    font-size: 0.6em;\n    padding-top: 0.4em;\n}\n\n#submit-proj,\n#cancel-proj{\n    font-weight: 600;\n    width: 45%;\n    font-size: 0.75em;\n    border: none;\n    padding: 0.5em;\n    border-radius: 0.25em;\n}\n.todo:not(:last-child){\n    margin-bottom: 0.5em;\n}\n.todo{\n    display: flex;\n    align-items: center;\n    width: 90%;\n    margin-inline: auto;\n    background-color: var(--cyan-100);\n    padding: 0.75em;\n    font-weight: 100;\n\n    border-top-right-radius: 12px;\n    border-bottom-right-radius: 12px;\n}\n\n.todo[priority = \"1\"]{\n    border-left: 3px solid green;\n}\n.todo[priority = \"2\"]{\n    border-left: 3px solid yellow;\n}\n.todo[priority = \"3\"]{\n    border-left: 3px solid red;\n}\n\n.complete{\n    width: calc(1em - 6px);\n    height: calc(1em - 6px);\n\n    border: 3px solid var(--cyan-600);\n    border-radius: 6px;\n    margin-right: 16px;\n}\n\n.complete.checked{\n    background-color: var(--cyan-800);\n}\n.todo > .title.checked{\n    text-decoration:line-through;\n    color: gray;\n}\n.todo > .title{\n    margin-right: auto;\n}\n.todo > .date,\n.todo > .expand,\n.todo > .edit{\n    margin-right: 24px;\n}\n.todo > .trash:hover,\n.todo > .expand:hover,\n.todo > .complete:hover,\n.todo > .edit:hover,\nimg.close,\nbutton:hover,\nbutton#submit{\n    cursor: pointer;\n}\n.sidebar{\n    display: flex;\n    flex-flow: column;\n    justify-content: space-between;\n}\n.add{\n    color: white;\n    font-size: 2.5em;\n    background-color: var(--cyan-600);\n    border-radius: 40px;\n    \n    padding: 8px;\n    margin: 16px;\n\n    width: 48px;\n    height: 48px;\n    \n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n}\n\n.add:hover{\n    cursor: pointer;\n    box-shadow: 0px 3px 5px rgb(0, 0, 0);\n}\n.popup{\n    position:absolute;\n\n    margin-inline: auto;\n    margin-block: auto;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    text-align: center;\n\n    background-color: white;\n    border: none;\n\n    max-width: 600px;\n    max-height: 370px;\n    \n    border-radius: 16px;\n}\n.form-container{\n    height: calc(100% - 1.5em - 8px);\n    width: 95%;\n    margin-inline: auto;\n}\n#myForm ul{\n    display: flex;\n    flex-flow: column;\n    height: 100%;\n\n    justify-content: space-between;\n}\n#new-title{\n    width: 100%;\n    font-size: 1em;\n    background-color: white;\n\n    border: none;\n    margin-block: 8px;\n}\n#new-title:focus{\n    background-color: white;\n}\n#new-description{\n    font-size: 1em;\n    width: 100%;\n\n    height: 6em;\n    resize: none;\n    border: none;\n}\n#myForm>.title,\n#expandWindow > .title{\n    border-top-left-radius: 16px;\n    border-top-right-radius: 16px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding-inline: 3%;\n    background-color: var(--cyan-400);\n    height: 1.5em;\n}\n#myForm > .title > img.close,\n#expandWindow > .title > img.close{\n    width: 16px;\n}\n\nli.picker-field{\n    \n    display: flex;\n    flex-flow: column;\n\n    align-items: flex-start;\n}\n#expand-description{\n    text-align: left;\n    margin-top: 16px;\n}\n\n#submit{\n    position: absolute;\n    bottom: 8px;\n    right: calc(5%);\n    border: none;\n    font-size: 0.75em;\n    background-color: var(--cyan-500);\n    color: white;\n    padding: 0.5em;\n    border-radius: 0.25em;\n}"],"sourceRoot":""}]);
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
/* harmony export */   "checkEventAdder": () => (/* binding */ checkEventAdder),
/* harmony export */   "closeForm": () => (/* binding */ closeForm),
/* harmony export */   "loadExpandWindow": () => (/* binding */ loadExpandWindow),
/* harmony export */   "loadMainAssests": () => (/* binding */ loadMainAssests),
/* harmony export */   "loadProject": () => (/* binding */ loadProject),
/* harmony export */   "loadTodo": () => (/* binding */ loadTodo),
/* harmony export */   "openForm": () => (/* binding */ openForm),
/* harmony export */   "reloadProjectList": () => (/* binding */ reloadProjectList),
/* harmony export */   "trashEventAdder": () => (/* binding */ trashEventAdder)
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
    let btnHome = document.createElement("button");
    btnHome.textContent = "home";
    listElem.appendChild(btnHome);
    
    sidebarList.appendChild(listElem);

    listElem = document.createElement("li");
    listElem.textContent = "Projects";
    sidebarList.appendChild(listElem);

    listElem = document.createElement("li");

    let addProjectWrap = document.createElement("div");
    addProjectWrap.id = "add-project";
    addProjectWrap.style.display = "none";
    
    let addProjInput = document.createElement("input");
    addProjInput.id = "project-add-name"
    addProjInput.setAttribute("maxlength","15");
    let btnDiv = document.createElement("div");
    btnDiv.classList.add("btn-div");

    let errorMsg = document.createElement("p");
    errorMsg.classList.add("error");
    errorMsg.style.display = "none";
    errorMsg.textContent = "Invalid value";

    let btn = document.createElement("button");
    btn.id = "submit-proj";
    btn.textContent = "ADD";
    btnDiv.appendChild(btn);

    btn = document.createElement("button");
    btn.id = "cancel-proj";
    btn.textContent = "X"
    btn.addEventListener("click",()=>{
        addProjInput.value = "";
        addProjectWrap.style.display = "none";
        errorMsg.style.display= "none";
    });
    btnDiv.appendChild(btn);

    addProjectWrap.appendChild(addProjInput);
    addProjectWrap.appendChild(errorMsg);
    addProjectWrap.appendChild(btnDiv);
    
    listElem.appendChild(addProjectWrap);
    sidebarList.appendChild(listElem);

    listElem = document.createElement("li");
    let btnAddProject = document.createElement("button");
    btnAddProject.textContent = "+ Add Project";

    btnAddProject.addEventListener("click",()=>{
        addProjectWrap.style.display = "block";
    });

    listElem.appendChild(btnAddProject);
    sidebarList.appendChild(listElem);

    listElem = document.createElement("li");
    let projectList = document.createElement("ul");
    projectList.id = "project-list";
    listElem.appendChild(projectList);
    sidebarList.appendChild(listElem);

    let addTodo = document.createElement("div");
    addTodo.classList.add("add");
    addTodo.textContent = "+";

    addTodo.addEventListener("click", ()=>{
        openForm();
    });

    sidebar.appendChild(sidebarList);
    sidebar.appendChild(addTodo);
    anchorDiv.appendChild(sidebar);

    let main = document.createElement("div");
    main.classList.add("main-content");
    anchorDiv.appendChild(main);

    loadForm();
}

function loadTodo(todo,index){
    let content = document.querySelector(".main-content");

    let toDoDiv = document.createElement("div");
    toDoDiv.setAttribute("priority",todo.getPriority());
    toDoDiv.setAttribute("index",index);
    toDoDiv.classList.add("todo");

    let checkBox = document.createElement("div");
    checkBox.classList.add("complete");
    
    let title = document.createElement("h2");
    title.classList.add("title");
    title.textContent = todo.getTitle();
    if (todo.isDone()) {
        title.classList.add("checked");
        checkBox.classList.add("checked");
    }

    let date = document.createElement("h3");
    date.classList.add("date");
    date.textContent = todo.getDueDate();

    let expand = document.createElement("img");
    expand.classList.add("expand");
    expand.setAttribute("width","24px");
    expand.setAttribute("src","../src/images/expand.svg");

    expand.addEventListener("click",()=>{
        loadExpandWindow(todo);
    });

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
    formWrap.classList.add("popup");

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
    titleInput.setAttribute("maxlength","30");
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
    
    xBtn.addEventListener("click", ()=>{
        closeForm();
    });
    

}

function openForm(){
    document.querySelector("#myForm").style.display = "block";
}

function closeForm(){
    document.querySelector("#myForm").style.display = "none";
}

function closeExpand(){
    document.querySelector("#expandWindow").remove();
}

function loadProject(projects,proj){
    let content = document.querySelector(".main-content");
    content.innerHTML = "";
    let subProjectArray = proj.returnAll();
    let mainProjArray = projects.returnMain().returnAll();
    for (let index = 0; index < mainProjArray.length; index++) {
        const p = mainProjArray[index];
        if (subProjectArray.includes(p)) {
            loadTodo(p,index);
        }
        
    }
    checkEventAdder(projects,proj);
    trashEventAdder(projects,proj);
    
}

const trashEventAdder = (projects,proj) =>{
    let trashBtns = document.querySelectorAll(".trash");
    trashBtns.forEach(element => {
        element.addEventListener("click", ()=>{

            let i = element.closest(".todo").getAttribute("index");
            projects.returnMain().removeTodo(i);
            loadProject(projects,proj);
            
        });
    });
}

const checkEventAdder = (projects,proj) =>{
    console.log("adding checklistener");
    let trashBtns = document.querySelectorAll(".complete");
    trashBtns.forEach(element => {
        element.addEventListener("click", ()=>{
            let domTitle = element.closest(".todo").childNodes[1];
            let i = element.closest(".todo").getAttribute("index");
            projects.returnMain().todoAt(i).switchDone();

            if (element.classList.contains("checked")) {
                domTitle.classList.remove("checked");
                element.classList.remove("checked");
            } else {
                element.classList.add("checked");
                domTitle.classList.add("checked");
            }
        });
    });
}

const loadExpandWindow = (todo) =>{
    let expandWrap = document.createElement("div");
    expandWrap.id = "expandWindow";

    let formTitle = document.createElement("div");
    formTitle.classList.add("title");
    expandWrap.classList.add("popup");

    let name = document.createElement("h3");
    name.textContent = todo.getTitle();
    formTitle.appendChild(name);

    let xBtn = document.createElement("img");
    xBtn.classList.add("close");
    xBtn.setAttribute("src","../src/images/close.svg");
    formTitle.appendChild(xBtn);

    xBtn.addEventListener("click",()=>{
        closeExpand()
    });


    let descriptionContainer = document.createElement("div");
    descriptionContainer.classList.add("form-container");

    let description = document.createElement("p");
    description.id = "expand-description";
    description.textContent = todo.getDescription();

    descriptionContainer.appendChild(description);

    expandWrap.appendChild(formTitle);
    expandWrap.appendChild(descriptionContainer);
    
    anchorDiv.appendChild(expandWrap);
}

const reloadProjectList = (projects) =>{
    let projectList = document.querySelector("#project-list");
    projectList.innerHTML = "";
    projects.returnAll().forEach(element => {
        let li = document.createElement("li");
        let button = document.createElement("button");
        button.textContent = element.getName();
        li.append(button);
        projectList.append(li);

        button.addEventListener("click",()=>{
            loadProject(projects,projects.getProjByName(button.textContent));
        });
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
/* harmony export */   "createProject": () => (/* binding */ createProject),
/* harmony export */   "projectsManager": () => (/* binding */ projectsManager)
/* harmony export */ });
/* harmony import */ var _todoItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoItem */ "./src/todoItem.js");


const createProject = (str)=>{
    let todos = [];
    let name = str;

    const addTodo = (todo)=>{
        todos.push(todo);
    }
    const removeTodo = (index) =>{
        todos.splice(index,1);
    }
    const getName = ()=>{
        return name;
    }
    const returnAll = ()=>{
        return todos;
    }
    const todoAt =(index) =>{
        return todos[index];
    }
    const toString = ()=>{
        let str = "";
        todos.forEach(p => {
            str += p.getTitle();
            str += ", ";
        });

        return str;
    }

    return{addTodo,removeTodo,toString,getName,returnAll,todoAt}
}

const projectsManager = ()=>{
    let projects = [];

    const addProj = (proj)=>{
        projects.push(proj);
    }

    const rmProj = (name) =>{
        for (let index = 0; index < projects.length; index++) {
            const proj = array[index];

            if (proj.getName() === name) {
                projects.splice(index,1);
            }
        }
    }

    const getProjByName = (name)=>{
        for (let index = 0; index < projects.length; index++) {
            const p = projects[index];
            if (p.getName() === name) {
                return p; 
            }
        }
    }

    const returnAll = ()=>{
        return projects;
    }

    const returnMain = ()=>{
        return projects[0];
    }

    return{addProj,rmProj,returnAll,returnMain,getProjByName}
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
    const switchDone = ()=>{
        done = !done;
    }
    const returnTodo = ()=>{
        return {title,description,due,priority,done};
    };
    const toString = ()=>{
        return `${priority} ${title}         ${due} \n ${description}`
    };

    return {getTitle, getDescription,getDueDate,getPriority,toString,returnTodo,isDone,switchDone};
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
 




let projects = (0,_projects_js__WEBPACK_IMPORTED_MODULE_1__.projectsManager)();
let mainproj = (0,_projects_js__WEBPACK_IMPORTED_MODULE_1__.createProject)("General");
/*let secondProj = createProject("Spring cleaning");
let thirdProj = createProject("House renovation");
projects.addProj(mainproj);
projects.addProj(secondProj);
projects.addProj(thirdProj);

let todo1 = createTodo("buy milk","Need to get cow milk","tomorrow SIKE",3);
let todo2 = createTodo("clean shed","clean shed in the yad","tomorrow SIKE",1);
let todo3 = createTodo("buy hammer ","buy tools from home depo","tomorrow SIKE",2);
let todo4 = createTodo("buy nails","buy tools from home depo","tomorrow SIKE",2);

mainproj.addTodo(todo1);
mainproj.addTodo(todo2);
mainproj.addTodo(todo3);
mainproj.addTodo(todo4);

secondProj.addTodo(todo2);

thirdProj.addTodo(todo3);
thirdProj.addTodo(todo4);*/

(0,_load_js__WEBPACK_IMPORTED_MODULE_2__.loadMainAssests)();
(0,_load_js__WEBPACK_IMPORTED_MODULE_2__.reloadProjectList)(projects);

let form = document.querySelector(".form-container");
let main = document.querySelector(".main-content");



document.querySelector("#submit").addEventListener("click", ()=>{
    
        if(form["create-form-title"].value === "" || form["create-form-description"].value === "" || form["create-form-date"].value === ""){
            alert("Please fill out Title Description and Due date.");
        }
        else{
            let todo = (0,_todoItem_js__WEBPACK_IMPORTED_MODULE_0__.createTodo)(form["create-form-title"].value,
                       form["create-form-description"].value,
                       form["create-form-date"].value,
                       form["create-form-priority"].value);
            
            mainproj.addTodo(todo);
    
            (0,_load_js__WEBPACK_IMPORTED_MODULE_2__.loadProject)(projects,mainproj);
        }
    
        (0,_load_js__WEBPACK_IMPORTED_MODULE_2__.closeForm)();
    
        form["create-form-title"].value = "";
        form["create-form-description"].value = "";
        form["create-form-date"].value = "";
        form["create-form-priority"].value = "1";
});

document.querySelector("#submit-proj").addEventListener("click",()=>{
    let val = document.querySelector("#project-add-name").value;
    if (val.length < 2) {
        document.querySelector("#add-project").childNodes[1].style.display = "block";
    }
    else{
        document.querySelector("#project-add-name").value = "";
        document.querySelector("#add-project").childNodes[1].style.display = "none";
        document.querySelector("#add-project").style.display = "none";

        let projToadd = (0,_projects_js__WEBPACK_IMPORTED_MODULE_1__.createProject)(val);
        projects.addProj(projToadd);
        (0,_load_js__WEBPACK_IMPORTED_MODULE_2__.reloadProjectList)(projects.returnAll());
    }
});

(0,_load_js__WEBPACK_IMPORTED_MODULE_2__.loadProject)(projects,projects.returnMain());
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7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QjtBQUNBO0FBQ0EsUUFBUSxtREFBUztBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCLDJEQUFhO0FBQ3JDO0FBQ0EsUUFBUSwyREFBaUI7QUFDekI7QUFDQSxDQUFDOztBQUVELHFEQUFXLGlDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbG9hZC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy90b2RvSXRlbS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBUK1NhbnM6d2dodEA3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRAMTAwOzMwMDs0MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcblxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCwgdWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsIHEge1xcblxcdHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5pbnB1dDpmb2N1cyxcXG5zZWxlY3Q6Zm9jdXMsXFxudGV4dGFyZWE6Zm9jdXMsXFxuYnV0dG9uOmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuI2NvbnRlbnR7XFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNGZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwibG9nbyAgICBsb2dvXFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICBcXFwiIHNpZGViYXIgbWFpblxcXCI7XFxuXFxufVxcbjpyb290e1xcbiAgICAtLWN5YW4tNTAgOiNlMGY3ZmE7XFxuICAgIC0tY3lhbi0xMDA6I2IyZWJmMjtcXG4gICAgLS1jeWFuLTIwMDojODBkZWVhO1xcbiAgICAtLWN5YW4tMzAwOiM0ZGQwZTE7XFxuICAgIC0tY3lhbi00MDA6IzI2YzZkYTtcXG4gICAgLS1jeWFuLTUwMDojMDBiY2Q0O1xcbiAgICAtLWN5YW4tNjAwOiMwMGFjYzE7XFxuICAgIC0tY3lhbi03MDA6IzAwOTdhNztcXG4gICAgLS1jeWFuLTgwMDojMDA4MzhmO1xcbiAgICAtLWN5YW4tOTAwOiMwMDYwNjQ7XFxufVxcbiNjb250ZW50e1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG59XFxudGV4dGFyZWF7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxufVxcbi5sb2dvLXdyYXB7XFxuICAgIGdyaWQtYXJlYTogbG9nbztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3lhbi0zMDApO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbi5sb2dve1xcbiAgICBmb250LWZhbWlseTogJ1BUIFNhbnMnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XFxufVxcblxcbi5zaWRlYmFye1xcbiAgICBncmlkLWFyZWE6IHNpZGViYXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN5YW4tMjAwKTtcXG59XFxuLm1haW4tY29udGVudHtcXG4gICAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgICBwYWRkaW5nLXRvcDogMzJweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3lhbi01MCk7XFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxuICAgIG92ZXJmbG93LXk6YXV0bztcXG4gICAgb3ZlcmZsb3cteDphdXRvO1xcbn1cXG4uc2lkZWJhcj51bHtcXG4gICAgbWFyZ2luLXRvcDogMzJweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xcbn1cXG4uc2lkZWJhciBsaXtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG5cXG4gICAgd2lkdGg6IDgwJTtcXG59XFxuLnNpZGViYXIgbGkgPiBidXR0b257XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTdhNztcXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGZvbnQtc2l6ZTogMC43NWVtO1xcbiAgICBwYWRkaW5nOiAwLjVlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuI3Byb2plY3QtbGlzdHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIFxcbiAgICBoZWlnaHQ6IDE1MHB4O1xcblxcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG4jcHJvamVjdC1saXN0ID4gbGl7XFxuICAgIGZvbnQtc2l6ZTogMC43NWVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOjA7XFxufVxcbiNwcm9qZWN0LWxpc3QgPiBsaSA+IGJ1dHRvbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbiNwcm9qZWN0LWxpc3QgPiBsaSA+IGJ1dHRvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3lhbi05MDApO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbiNhZGQtcHJvamVjdHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbn1cXG4uYnRuLWRpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBtYXJnaW4tdG9wOiA4cHg7XFxufVxcbiNzdWJtaXQtcHJvantcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYyLCAyMTIsIDYyKTtcXG59XFxuI2NhbmNlbC1wcm9qe1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI5LCAxNCwgMTQpO1xcbn1cXG4jcHJvamVjdC1hZGQtbmFtZXtcXG4gICAgd2lkdGg6IDk3JTtcXG4gICAgZm9udC1zaXplOiAwLjc1ZW07XFxufVxcbi5lcnJvcntcXG4gICAgY29sb3I6IHJlZDtcXG4gICAgZm9udC1zaXplOiAwLjZlbTtcXG4gICAgcGFkZGluZy10b3A6IDAuNGVtO1xcbn1cXG5cXG4jc3VibWl0LXByb2osXFxuI2NhbmNlbC1wcm9qe1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICB3aWR0aDogNDUlO1xcbiAgICBmb250LXNpemU6IDAuNzVlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiAwLjVlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xcbn1cXG4udG9kbzpub3QoOmxhc3QtY2hpbGQpe1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcXG59XFxuLnRvZG97XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN5YW4tMTAwKTtcXG4gICAgcGFkZGluZzogMC43NWVtO1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcblxcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTJweDtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEycHg7XFxufVxcblxcbi50b2RvW3ByaW9yaXR5ID0gXFxcIjFcXFwiXXtcXG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCBncmVlbjtcXG59XFxuLnRvZG9bcHJpb3JpdHkgPSBcXFwiMlxcXCJde1xcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHllbGxvdztcXG59XFxuLnRvZG9bcHJpb3JpdHkgPSBcXFwiM1xcXCJde1xcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHJlZDtcXG59XFxuXFxuLmNvbXBsZXRle1xcbiAgICB3aWR0aDogY2FsYygxZW0gLSA2cHgpO1xcbiAgICBoZWlnaHQ6IGNhbGMoMWVtIC0gNnB4KTtcXG5cXG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tY3lhbi02MDApO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIG1hcmdpbi1yaWdodDogMTZweDtcXG59XFxuXFxuLmNvbXBsZXRlLmNoZWNrZWR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN5YW4tODAwKTtcXG59XFxuLnRvZG8gPiAudGl0bGUuY2hlY2tlZHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOmxpbmUtdGhyb3VnaDtcXG4gICAgY29sb3I6IGdyYXk7XFxufVxcbi50b2RvID4gLnRpdGxle1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcbi50b2RvID4gLmRhdGUsXFxuLnRvZG8gPiAuZXhwYW5kLFxcbi50b2RvID4gLmVkaXR7XFxuICAgIG1hcmdpbi1yaWdodDogMjRweDtcXG59XFxuLnRvZG8gPiAudHJhc2g6aG92ZXIsXFxuLnRvZG8gPiAuZXhwYW5kOmhvdmVyLFxcbi50b2RvID4gLmNvbXBsZXRlOmhvdmVyLFxcbi50b2RvID4gLmVkaXQ6aG92ZXIsXFxuaW1nLmNsb3NlLFxcbmJ1dHRvbjpob3ZlcixcXG5idXR0b24jc3VibWl0e1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5zaWRlYmFye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4uYWRke1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMi41ZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN5YW4tNjAwKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcXG4gICAgXFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgbWFyZ2luOiAxNnB4O1xcblxcbiAgICB3aWR0aDogNDhweDtcXG4gICAgaGVpZ2h0OiA0OHB4O1xcbiAgICBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxufVxcblxcbi5hZGQ6aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm94LXNoYWRvdzogMHB4IDNweCA1cHggcmdiKDAsIDAsIDApO1xcbn1cXG4ucG9wdXB7XFxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xcblxcbiAgICBtYXJnaW4taW5saW5lOiBhdXRvO1xcbiAgICBtYXJnaW4tYmxvY2s6IGF1dG87XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiBub25lO1xcblxcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xcbiAgICBtYXgtaGVpZ2h0OiAzNzBweDtcXG4gICAgXFxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxufVxcbi5mb3JtLWNvbnRhaW5lcntcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxLjVlbSAtIDhweCk7XFxuICAgIHdpZHRoOiA5NSU7XFxuICAgIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxufVxcbiNteUZvcm0gdWx7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuI25ldy10aXRsZXtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG5cXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBtYXJnaW4tYmxvY2s6IDhweDtcXG59XFxuI25ldy10aXRsZTpmb2N1c3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcbiNuZXctZGVzY3JpcHRpb257XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgaGVpZ2h0OiA2ZW07XFxuICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG4jbXlGb3JtPi50aXRsZSxcXG4jZXhwYW5kV2luZG93ID4gLnRpdGxle1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNnB4O1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTZweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nLWlubGluZTogMyU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN5YW4tNDAwKTtcXG4gICAgaGVpZ2h0OiAxLjVlbTtcXG59XFxuI215Rm9ybSA+IC50aXRsZSA+IGltZy5jbG9zZSxcXG4jZXhwYW5kV2luZG93ID4gLnRpdGxlID4gaW1nLmNsb3Nle1xcbiAgICB3aWR0aDogMTZweDtcXG59XFxuXFxubGkucGlja2VyLWZpZWxke1xcbiAgICBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW47XFxuXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG4jZXhwYW5kLWRlc2NyaXB0aW9ue1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xcbn1cXG5cXG4jc3VibWl0e1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogOHB4O1xcbiAgICByaWdodDogY2FsYyg1JSk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1zaXplOiAwLjc1ZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN5YW4tNTAwKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAwLjVlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Q0FHQzs7QUFLRDs7Ozs7Ozs7Ozs7OztDQWFDLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsU0FBUztDQUNULGVBQWU7Q0FDZixhQUFhO0NBQ2Isd0JBQXdCO0FBQ3pCO0FBQ0EsZ0RBQWdEO0FBQ2hEOztDQUVDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsY0FBYztBQUNmO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLFlBQVk7QUFDYjtBQUNBOztDQUVDLFdBQVc7Q0FDWCxhQUFhO0FBQ2Q7QUFDQTtDQUNDLHlCQUF5QjtDQUN6QixpQkFBaUI7QUFDbEI7QUFDQTs7OztJQUlJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTs7SUFFYiw4QkFBOEI7SUFDOUIsMkJBQTJCO0lBQzNCO3VDQUNtQzs7QUFFdkM7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixrQkFBa0I7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QW1CO0FBQ3ZCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLFlBQVk7O0lBRVosOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLHVCQUF1Qjs7SUFFdkIsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsV0FBVzs7SUFFWCxXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7QUFDaEI7QUFDQTs7SUFFSSw0QkFBNEI7SUFDNUIsNkJBQTZCO0lBQzdCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLGtCQUFrQjtJQUNsQixpQ0FBaUM7SUFDakMsYUFBYTtBQUNqQjtBQUNBOztJQUVJLFdBQVc7QUFDZjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsaUJBQWlCOztJQUVqQix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGVBQWU7SUFDZixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGlDQUFpQztJQUNqQyxZQUFZO0lBQ1osY0FBYztJQUNkLHFCQUFxQjtBQUN6QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UFQrU2Fuczp3Z2h0QDcwMCZkaXNwbGF5PXN3YXAnKTtcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEAxMDA7MzAwOzQwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG59XFxub2wsIHVsIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLCBxIHtcXG5cXHRxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG5cXHRjb250ZW50OiAnJztcXG5cXHRjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXG59XFxuaW5wdXQ6Zm9jdXMsXFxuc2VsZWN0OmZvY3VzLFxcbnRleHRhcmVhOmZvY3VzLFxcbmJ1dHRvbjpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbiNjb250ZW50e1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcblxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDRmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcImxvZ28gICAgbG9nb1xcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgXFxcIiBzaWRlYmFyIG1haW5cXFwiO1xcblxcbn1cXG46cm9vdHtcXG4gICAgLS1jeWFuLTUwIDojZTBmN2ZhO1xcbiAgICAtLWN5YW4tMTAwOiNiMmViZjI7XFxuICAgIC0tY3lhbi0yMDA6IzgwZGVlYTtcXG4gICAgLS1jeWFuLTMwMDojNGRkMGUxO1xcbiAgICAtLWN5YW4tNDAwOiMyNmM2ZGE7XFxuICAgIC0tY3lhbi01MDA6IzAwYmNkNDtcXG4gICAgLS1jeWFuLTYwMDojMDBhY2MxO1xcbiAgICAtLWN5YW4tNzAwOiMwMDk3YTc7XFxuICAgIC0tY3lhbi04MDA6IzAwODM4ZjtcXG4gICAgLS1jeWFuLTkwMDojMDA2MDY0O1xcbn1cXG4jY29udGVudHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxufVxcbnRleHRhcmVhe1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbn1cXG4ubG9nby13cmFwe1xcbiAgICBncmlkLWFyZWE6IGxvZ287XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN5YW4tMzAwKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG4ubG9nb3tcXG4gICAgZm9udC1mYW1pbHk6ICdQVCBTYW5zJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xcbn1cXG5cXG4uc2lkZWJhcntcXG4gICAgZ3JpZC1hcmVhOiBzaWRlYmFyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jeWFuLTIwMCk7XFxufVxcbi5tYWluLWNvbnRlbnR7XFxuICAgIGdyaWQtYXJlYTogbWFpbjtcXG4gICAgcGFkZGluZy10b3A6IDMycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN5YW4tNTApO1xcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgICBvdmVyZmxvdy15OmF1dG87XFxuICAgIG92ZXJmbG93LXg6YXV0bztcXG59XFxuLnNpZGViYXI+dWx7XFxuICAgIG1hcmdpbi10b3A6IDMycHg7XFxuICAgIHBhZGRpbmctbGVmdDogMTZweDtcXG59XFxuLnNpZGViYXIgbGl7XFxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XFxuXFxuICAgIHdpZHRoOiA4MCU7XFxufVxcbi5zaWRlYmFyIGxpID4gYnV0dG9ue1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDk3YTc7XFxuICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBmb250LXNpemU6IDAuNzVlbTtcXG4gICAgcGFkZGluZzogMC41ZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbiNwcm9qZWN0LWxpc3R7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG5cXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gICAgb3ZlcmZsb3cteDogYXV0bztcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuI3Byb2plY3QtbGlzdCA+IGxpe1xcbiAgICBmb250LXNpemU6IDAuNzVlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjowO1xcbn1cXG4jcHJvamVjdC1saXN0ID4gbGkgPiBidXR0b257XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG4jcHJvamVjdC1saXN0ID4gbGkgPiBidXR0b246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN5YW4tOTAwKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG4jYWRkLXByb2plY3R7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG59XFxuLmJ0bi1kaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWFyZ2luLXRvcDogOHB4O1xcbn1cXG4jc3VibWl0LXByb2p7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2MiwgMjEyLCA2Mik7XFxufVxcbiNjYW5jZWwtcHJvantcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyOSwgMTQsIDE0KTtcXG59XFxuI3Byb2plY3QtYWRkLW5hbWV7XFxuICAgIHdpZHRoOiA5NyU7XFxuICAgIGZvbnQtc2l6ZTogMC43NWVtO1xcbn1cXG4uZXJyb3J7XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIGZvbnQtc2l6ZTogMC42ZW07XFxuICAgIHBhZGRpbmctdG9wOiAwLjRlbTtcXG59XFxuXFxuI3N1Ym1pdC1wcm9qLFxcbiNjYW5jZWwtcHJvantcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgd2lkdGg6IDQ1JTtcXG4gICAgZm9udC1zaXplOiAwLjc1ZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogMC41ZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcXG59XFxuLnRvZG86bm90KDpsYXN0LWNoaWxkKXtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XFxufVxcbi50b2Rve1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBtYXJnaW4taW5saW5lOiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jeWFuLTEwMCk7XFxuICAgIHBhZGRpbmc6IDAuNzVlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG5cXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEycHg7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMnB4O1xcbn1cXG5cXG4udG9kb1twcmlvcml0eSA9IFxcXCIxXFxcIl17XFxuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgZ3JlZW47XFxufVxcbi50b2RvW3ByaW9yaXR5ID0gXFxcIjJcXFwiXXtcXG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCB5ZWxsb3c7XFxufVxcbi50b2RvW3ByaW9yaXR5ID0gXFxcIjNcXFwiXXtcXG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCByZWQ7XFxufVxcblxcbi5jb21wbGV0ZXtcXG4gICAgd2lkdGg6IGNhbGMoMWVtIC0gNnB4KTtcXG4gICAgaGVpZ2h0OiBjYWxjKDFlbSAtIDZweCk7XFxuXFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWN5YW4tNjAwKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XFxufVxcblxcbi5jb21wbGV0ZS5jaGVja2Vke1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jeWFuLTgwMCk7XFxufVxcbi50b2RvID4gLnRpdGxlLmNoZWNrZWR7XFxuICAgIHRleHQtZGVjb3JhdGlvbjpsaW5lLXRocm91Z2g7XFxuICAgIGNvbG9yOiBncmF5O1xcbn1cXG4udG9kbyA+IC50aXRsZXtcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG4udG9kbyA+IC5kYXRlLFxcbi50b2RvID4gLmV4cGFuZCxcXG4udG9kbyA+IC5lZGl0e1xcbiAgICBtYXJnaW4tcmlnaHQ6IDI0cHg7XFxufVxcbi50b2RvID4gLnRyYXNoOmhvdmVyLFxcbi50b2RvID4gLmV4cGFuZDpob3ZlcixcXG4udG9kbyA+IC5jb21wbGV0ZTpob3ZlcixcXG4udG9kbyA+IC5lZGl0OmhvdmVyLFxcbmltZy5jbG9zZSxcXG5idXR0b246aG92ZXIsXFxuYnV0dG9uI3N1Ym1pdHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uc2lkZWJhcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLmFkZHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDIuNWVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jeWFuLTYwMCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XFxuICAgIFxcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIG1hcmdpbjogMTZweDtcXG5cXG4gICAgd2lkdGg6IDQ4cHg7XFxuICAgIGhlaWdodDogNDhweDtcXG4gICAgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbn1cXG5cXG4uYWRkOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IDBweCAzcHggNXB4IHJnYigwLCAwLCAwKTtcXG59XFxuLnBvcHVwe1xcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcXG5cXG4gICAgbWFyZ2luLWlubGluZTogYXV0bztcXG4gICAgbWFyZ2luLWJsb2NrOiBhdXRvO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG5cXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcXG4gICAgbWF4LWhlaWdodDogMzcwcHg7XFxuICAgIFxcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbn1cXG4uZm9ybS1jb250YWluZXJ7XFxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMS41ZW0gLSA4cHgpO1xcbiAgICB3aWR0aDogOTUlO1xcbiAgICBtYXJnaW4taW5saW5lOiBhdXRvO1xcbn1cXG4jbXlGb3JtIHVse1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcblxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbiNuZXctdGl0bGV7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuXFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgbWFyZ2luLWJsb2NrOiA4cHg7XFxufVxcbiNuZXctdGl0bGU6Zm9jdXN7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG4jbmV3LWRlc2NyaXB0aW9ue1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgIGhlaWdodDogNmVtO1xcbiAgICByZXNpemU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuI215Rm9ybT4udGl0bGUsXFxuI2V4cGFuZFdpbmRvdyA+IC50aXRsZXtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTZweDtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE2cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZy1pbmxpbmU6IDMlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jeWFuLTQwMCk7XFxuICAgIGhlaWdodDogMS41ZW07XFxufVxcbiNteUZvcm0gPiAudGl0bGUgPiBpbWcuY2xvc2UsXFxuI2V4cGFuZFdpbmRvdyA+IC50aXRsZSA+IGltZy5jbG9zZXtcXG4gICAgd2lkdGg6IDE2cHg7XFxufVxcblxcbmxpLnBpY2tlci1maWVsZHtcXG4gICAgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xcblxcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuI2V4cGFuZC1kZXNjcmlwdGlvbntcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgbWFyZ2luLXRvcDogMTZweDtcXG59XFxuXFxuI3N1Ym1pdHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDhweDtcXG4gICAgcmlnaHQ6IGNhbGMoNSUpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMC43NWVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jeWFuLTUwMCk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMC41ZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQge2NvcHksIGNyZWF0ZVRvZG99IGZyb20gXCIuL3RvZG9JdGVtXCI7XG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcblxuaWYoISFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIikgPT09IGZhbHNlKXtcbiAgICB2YXIgYW5jaG9yRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhbmNob3JEaXYuaWQgPSBcImNvbnRlbnRcIjtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5hcHBlbmRDaGlsZChhbmNob3JEaXYpO1xufVxuZWxzZXtcbiAgICB2YXIgYW5jaG9yRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpOyBcbn1cblxuZnVuY3Rpb24gbG9hZE1haW5Bc3Nlc3RzKCl7XG5cbiAgICBsZXQgbG9nb1dyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuICAgIGxvZ29XcmFwLmNsYXNzTGlzdC5hZGQoXCJsb2dvLXdyYXBcIik7XG5cbiAgICBsZXQgbG9nb0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgbG9nb0ltZy5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLFwiNDhweFwiKTtcblxuICAgIGxvZ29JbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsXCIuLi9zcmMvaW1hZ2VzL0xvZ28uc3ZnXCIpO1xuICAgIGxldCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBsb2dvLmNsYXNzTGlzdC5hZGQoJ2xvZ28nKTtcbiAgICBsb2dvLmlubmVySFRNTCA9ICc8aW1nIHdpZHRoPVwiNDBweFwiIHNyYz1cIi4uL3NyYy9pbWFnZXMvTG9nby5zdmdcIiBhbHQ9XCJcIj4gVG8gRG8gTGlzdCc7XG5cbiAgICBsb2dvV3JhcC5hcHBlbmRDaGlsZChsb2dvKTtcbiAgICBhbmNob3JEaXYuYXBwZW5kQ2hpbGQobG9nb1dyYXApO1xuXG4gICAgbGV0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyXCIpO1xuXG4gICAgbGV0IHNpZGViYXJMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcblxuICAgIGxldCBsaXN0RWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBsZXQgYnRuSG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnRuSG9tZS50ZXh0Q29udGVudCA9IFwiaG9tZVwiO1xuICAgIGxpc3RFbGVtLmFwcGVuZENoaWxkKGJ0bkhvbWUpO1xuICAgIFxuICAgIHNpZGViYXJMaXN0LmFwcGVuZENoaWxkKGxpc3RFbGVtKTtcblxuICAgIGxpc3RFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGxpc3RFbGVtLnRleHRDb250ZW50ID0gXCJQcm9qZWN0c1wiO1xuICAgIHNpZGViYXJMaXN0LmFwcGVuZENoaWxkKGxpc3RFbGVtKTtcblxuICAgIGxpc3RFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXG4gICAgbGV0IGFkZFByb2plY3RXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhZGRQcm9qZWN0V3JhcC5pZCA9IFwiYWRkLXByb2plY3RcIjtcbiAgICBhZGRQcm9qZWN0V3JhcC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgXG4gICAgbGV0IGFkZFByb2pJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBhZGRQcm9qSW5wdXQuaWQgPSBcInByb2plY3QtYWRkLW5hbWVcIlxuICAgIGFkZFByb2pJbnB1dC5zZXRBdHRyaWJ1dGUoXCJtYXhsZW5ndGhcIixcIjE1XCIpO1xuICAgIGxldCBidG5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJ0bkRpdi5jbGFzc0xpc3QuYWRkKFwiYnRuLWRpdlwiKTtcblxuICAgIGxldCBlcnJvck1zZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGVycm9yTXNnLmNsYXNzTGlzdC5hZGQoXCJlcnJvclwiKTtcbiAgICBlcnJvck1zZy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgZXJyb3JNc2cudGV4dENvbnRlbnQgPSBcIkludmFsaWQgdmFsdWVcIjtcblxuICAgIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ0bi5pZCA9IFwic3VibWl0LXByb2pcIjtcbiAgICBidG4udGV4dENvbnRlbnQgPSBcIkFERFwiO1xuICAgIGJ0bkRpdi5hcHBlbmRDaGlsZChidG4pO1xuXG4gICAgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidG4uaWQgPSBcImNhbmNlbC1wcm9qXCI7XG4gICAgYnRuLnRleHRDb250ZW50ID0gXCJYXCJcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCk9PntcbiAgICAgICAgYWRkUHJvaklucHV0LnZhbHVlID0gXCJcIjtcbiAgICAgICAgYWRkUHJvamVjdFdyYXAuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBlcnJvck1zZy5zdHlsZS5kaXNwbGF5PSBcIm5vbmVcIjtcbiAgICB9KTtcbiAgICBidG5EaXYuYXBwZW5kQ2hpbGQoYnRuKTtcblxuICAgIGFkZFByb2plY3RXcmFwLmFwcGVuZENoaWxkKGFkZFByb2pJbnB1dCk7XG4gICAgYWRkUHJvamVjdFdyYXAuYXBwZW5kQ2hpbGQoZXJyb3JNc2cpO1xuICAgIGFkZFByb2plY3RXcmFwLmFwcGVuZENoaWxkKGJ0bkRpdik7XG4gICAgXG4gICAgbGlzdEVsZW0uYXBwZW5kQ2hpbGQoYWRkUHJvamVjdFdyYXApO1xuICAgIHNpZGViYXJMaXN0LmFwcGVuZENoaWxkKGxpc3RFbGVtKTtcblxuICAgIGxpc3RFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGxldCBidG5BZGRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidG5BZGRQcm9qZWN0LnRleHRDb250ZW50ID0gXCIrIEFkZCBQcm9qZWN0XCI7XG5cbiAgICBidG5BZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpPT57XG4gICAgICAgIGFkZFByb2plY3RXcmFwLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgfSk7XG5cbiAgICBsaXN0RWxlbS5hcHBlbmRDaGlsZChidG5BZGRQcm9qZWN0KTtcbiAgICBzaWRlYmFyTGlzdC5hcHBlbmRDaGlsZChsaXN0RWxlbSk7XG5cbiAgICBsaXN0RWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBsZXQgcHJvamVjdExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgcHJvamVjdExpc3QuaWQgPSBcInByb2plY3QtbGlzdFwiO1xuICAgIGxpc3RFbGVtLmFwcGVuZENoaWxkKHByb2plY3RMaXN0KTtcbiAgICBzaWRlYmFyTGlzdC5hcHBlbmRDaGlsZChsaXN0RWxlbSk7XG5cbiAgICBsZXQgYWRkVG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYWRkVG9kby5jbGFzc0xpc3QuYWRkKFwiYWRkXCIpO1xuICAgIGFkZFRvZG8udGV4dENvbnRlbnQgPSBcIitcIjtcblxuICAgIGFkZFRvZG8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XG4gICAgICAgIG9wZW5Gb3JtKCk7XG4gICAgfSk7XG5cbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHNpZGViYXJMaXN0KTtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGFkZFRvZG8pO1xuICAgIGFuY2hvckRpdi5hcHBlbmRDaGlsZChzaWRlYmFyKTtcblxuICAgIGxldCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluLWNvbnRlbnRcIik7XG4gICAgYW5jaG9yRGl2LmFwcGVuZENoaWxkKG1haW4pO1xuXG4gICAgbG9hZEZvcm0oKTtcbn1cblxuZnVuY3Rpb24gbG9hZFRvZG8odG9kbyxpbmRleCl7XG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGVudFwiKTtcblxuICAgIGxldCB0b0RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b0RvRGl2LnNldEF0dHJpYnV0ZShcInByaW9yaXR5XCIsdG9kby5nZXRQcmlvcml0eSgpKTtcbiAgICB0b0RvRGl2LnNldEF0dHJpYnV0ZShcImluZGV4XCIsaW5kZXgpO1xuICAgIHRvRG9EaXYuY2xhc3NMaXN0LmFkZChcInRvZG9cIik7XG5cbiAgICBsZXQgY2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNoZWNrQm94LmNsYXNzTGlzdC5hZGQoXCJjb21wbGV0ZVwiKTtcbiAgICBcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gdG9kby5nZXRUaXRsZSgpO1xuICAgIGlmICh0b2RvLmlzRG9uZSgpKSB7XG4gICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJjaGVja2VkXCIpO1xuICAgICAgICBjaGVja0JveC5jbGFzc0xpc3QuYWRkKFwiY2hlY2tlZFwiKTtcbiAgICB9XG5cbiAgICBsZXQgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBkYXRlLmNsYXNzTGlzdC5hZGQoXCJkYXRlXCIpO1xuICAgIGRhdGUudGV4dENvbnRlbnQgPSB0b2RvLmdldER1ZURhdGUoKTtcblxuICAgIGxldCBleHBhbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGV4cGFuZC5jbGFzc0xpc3QuYWRkKFwiZXhwYW5kXCIpO1xuICAgIGV4cGFuZC5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLFwiMjRweFwiKTtcbiAgICBleHBhbmQuc2V0QXR0cmlidXRlKFwic3JjXCIsXCIuLi9zcmMvaW1hZ2VzL2V4cGFuZC5zdmdcIik7XG5cbiAgICBleHBhbmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCk9PntcbiAgICAgICAgbG9hZEV4cGFuZFdpbmRvdyh0b2RvKTtcbiAgICB9KTtcblxuICAgIGxldCBlZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBlZGl0LmNsYXNzTGlzdC5hZGQoXCJlZGl0XCIpO1xuICAgIGVkaXQuc2V0QXR0cmlidXRlKFwid2lkdGhcIixcIjI0cHhcIik7XG4gICAgZWRpdC5zZXRBdHRyaWJ1dGUoXCJzcmNcIixcIi4uL3NyYy9pbWFnZXMvZWRpdC5zdmdcIik7XG5cbiAgICBcblxuICAgIGxldCB0cmFzaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgdHJhc2guY2xhc3NMaXN0LmFkZChcInRyYXNoXCIpO1xuICAgIHRyYXNoLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsXCIyNHB4XCIpO1xuICAgIHRyYXNoLnNldEF0dHJpYnV0ZShcInNyY1wiLFwiLi4vc3JjL2ltYWdlcy90cmFzaC5zdmdcIik7XG5cblxuICAgIHRvRG9EaXYuYXBwZW5kKGNoZWNrQm94KTtcbiAgICB0b0RvRGl2LmFwcGVuZCh0aXRsZSk7XG4gICAgdG9Eb0Rpdi5hcHBlbmQoZGF0ZSk7XG4gICAgdG9Eb0Rpdi5hcHBlbmQoZXhwYW5kKTtcbiAgICB0b0RvRGl2LmFwcGVuZChlZGl0KTtcbiAgICB0b0RvRGl2LmFwcGVuZCh0cmFzaCk7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRvRG9EaXYpO1xufVxuXG5mdW5jdGlvbiBsb2FkRm9ybSgpe1xuXG4gICAgbGV0IGZvcm1XcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb3JtV3JhcC5pZCA9IFwibXlGb3JtXCI7XG5cbiAgICBsZXQgZm9ybVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb3JtVGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xuICAgIGZvcm1XcmFwLmNsYXNzTGlzdC5hZGQoXCJwb3B1cFwiKTtcblxuICAgIGxldCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIG5hbWUudGV4dENvbnRlbnQgPSBcIkFkZCBhIHRvLWRvXCI7XG4gICAgZm9ybVRpdGxlLmFwcGVuZENoaWxkKG5hbWUpO1xuXG4gICAgbGV0IHhCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIHhCdG4uY2xhc3NMaXN0LmFkZChcImNsb3NlXCIpO1xuICAgIHhCdG4uc2V0QXR0cmlidXRlKFwic3JjXCIsXCIuLi9zcmMvaW1hZ2VzL2Nsb3NlLnN2Z1wiKTtcbiAgICBmb3JtVGl0bGUuYXBwZW5kQ2hpbGQoeEJ0bik7XG5cbiAgICBmb3JtV3JhcC5hcHBlbmRDaGlsZChmb3JtVGl0bGUpO1xuXG4gICAgbGV0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWNvbnRhaW5lclwiKTtcbiAgICBmb3JtLnNldEF0dHJpYnV0ZSgnbm92YWxpZGF0ZScsIHRydWUpO1xuICAgIGZvcm1XcmFwLmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gICAgbGV0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChsaXN0KTtcblxuICAgIGxldCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBsaXN0SXRlbS5jbGFzc0xpc3QuYWRkKFwidGV4dC1maWVsZFwiKTtcbiAgICBsZXQgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB0aXRsZUlucHV0LmlkID0gXCJuZXctdGl0bGVcIjtcbiAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIixcInRleHRcIik7XG4gICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsXCJjcmVhdGUtZm9ybS10aXRsZVwiKTtcbiAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcIm1heGxlbmd0aFwiLFwiMzBcIik7XG4gICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLFwiVGl0bGU6IChleGFtcGxlOiBXYWxrIHRoZSBkb2cpXCIpO1xuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuICAgIGxpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuXG4gICAgbGV0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgZGVzY3JpcHRpb25JbnB1dC5pZCA9IFwibmV3LWRlc2NyaXB0aW9uXCI7XG4gICAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLFwiRGVzY3JpcHRpb24uLi5cIik7XG4gICAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsXCJjcmVhdGUtZm9ybS1kZXNjcmlwdGlvblwiKTtcbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbklucHV0KTtcbiAgICBsaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcblxuICAgIGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGxpc3RJdGVtLmNsYXNzTGlzdC5hZGQoXCJwaWNrZXItZmllbGRcIik7XG5cbiAgICBsZXQgZGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGRhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIixcImNyZWF0ZS1mb3JtLWRhdGVcIik7XG4gICAgZGF0ZUxhYmVsLnRleHRDb250ZW50ID0gXCJEdWUgRGF0ZTpcIjtcbiAgICBsZXQgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsXCJjcmVhdGUtZm9ybS1kYXRlXCIpO1xuICAgIGRhdGVJbnB1dC5pZCA9IFwibmV3LWRhdGVcIjtcbiAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLFwiZGF0ZVwiKTtcblxuICAgIGxldCBzaW1wbGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgc2ltcGxlRGl2LmFwcGVuZENoaWxkKGRhdGVMYWJlbCk7XG4gICAgc2ltcGxlRGl2LmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XG5cbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChzaW1wbGVEaXYpO1xuICAgIFxuICAgIGxldCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHByaW9yaXR5TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsXCJjcmVhdGUtZm9ybS1wcmlvcml0eVwiKTtcbiAgICBwcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gXCJwcmlvcml0eTpcIjtcbiAgICBsZXQgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgcHJpb3JpdHlJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsXCJjcmVhdGUtZm9ybS1wcmlvcml0eVwiKTtcbiAgICBwcmlvcml0eUlucHV0LmlkID0gXCJuZXctcHJpb3JpdHlcIjtcblxuICAgIGxldCBwcmlvcml0eU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgcHJpb3JpdHlPcHRpb24udGV4dENvbnRlbnQgPSBcImxvd1wiO1xuICAgIHByaW9yaXR5T3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsXCIxXCIpO1xuICAgIHByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQocHJpb3JpdHlPcHRpb24pO1xuXG4gICAgcHJpb3JpdHlPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIHByaW9yaXR5T3B0aW9uLnRleHRDb250ZW50ID0gXCJtZWRpdW1cIjtcbiAgICBwcmlvcml0eU9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLFwiMlwiKTtcbiAgICBwcmlvcml0eUlucHV0LmFwcGVuZENoaWxkKHByaW9yaXR5T3B0aW9uKTtcblxuICAgIHByaW9yaXR5T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBwcmlvcml0eU9wdGlvbi50ZXh0Q29udGVudCA9IFwiaGlnaFwiO1xuICAgIHByaW9yaXR5T3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsXCIzXCIpO1xuICAgIHByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQocHJpb3JpdHlPcHRpb24pO1xuXG4gICAgc2ltcGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIHNpbXBsZURpdi5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsKTtcbiAgICBzaW1wbGVEaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlJbnB1dCk7XG5cbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChzaW1wbGVEaXYpO1xuXG4gICAgbGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG5cbiAgICBsZXQgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBzdWJtaXRCdG4uaWQgPSBcInN1Ym1pdFwiO1xuICAgIHN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9IFwiQWRkIFRhc2tcIjtcblxuICAgIGZvcm1XcmFwLmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XG5cbiAgICBmb3JtV3JhcC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgXG4gICAgYW5jaG9yRGl2LmFwcGVuZENoaWxkKGZvcm1XcmFwKTtcbiAgICBcbiAgICB4QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e1xuICAgICAgICBjbG9zZUZvcm0oKTtcbiAgICB9KTtcbiAgICBcblxufVxuXG5mdW5jdGlvbiBvcGVuRm9ybSgpe1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbXlGb3JtXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG59XG5cbmZ1bmN0aW9uIGNsb3NlRm9ybSgpe1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbXlGb3JtXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn1cblxuZnVuY3Rpb24gY2xvc2VFeHBhbmQoKXtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2V4cGFuZFdpbmRvd1wiKS5yZW1vdmUoKTtcbn1cblxuZnVuY3Rpb24gbG9hZFByb2plY3QocHJvamVjdHMscHJvail7XG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGVudFwiKTtcbiAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgbGV0IHN1YlByb2plY3RBcnJheSA9IHByb2oucmV0dXJuQWxsKCk7XG4gICAgbGV0IG1haW5Qcm9qQXJyYXkgPSBwcm9qZWN0cy5yZXR1cm5NYWluKCkucmV0dXJuQWxsKCk7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG1haW5Qcm9qQXJyYXkubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIGNvbnN0IHAgPSBtYWluUHJvakFycmF5W2luZGV4XTtcbiAgICAgICAgaWYgKHN1YlByb2plY3RBcnJheS5pbmNsdWRlcyhwKSkge1xuICAgICAgICAgICAgbG9hZFRvZG8ocCxpbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuICAgIGNoZWNrRXZlbnRBZGRlcihwcm9qZWN0cyxwcm9qKTtcbiAgICB0cmFzaEV2ZW50QWRkZXIocHJvamVjdHMscHJvaik7XG4gICAgXG59XG5cbmNvbnN0IHRyYXNoRXZlbnRBZGRlciA9IChwcm9qZWN0cyxwcm9qKSA9PntcbiAgICBsZXQgdHJhc2hCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50cmFzaFwiKTtcbiAgICB0cmFzaEJ0bnMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcblxuICAgICAgICAgICAgbGV0IGkgPSBlbGVtZW50LmNsb3Nlc3QoXCIudG9kb1wiKS5nZXRBdHRyaWJ1dGUoXCJpbmRleFwiKTtcbiAgICAgICAgICAgIHByb2plY3RzLnJldHVybk1haW4oKS5yZW1vdmVUb2RvKGkpO1xuICAgICAgICAgICAgbG9hZFByb2plY3QocHJvamVjdHMscHJvaik7XG4gICAgICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5cbmNvbnN0IGNoZWNrRXZlbnRBZGRlciA9IChwcm9qZWN0cyxwcm9qKSA9PntcbiAgICBjb25zb2xlLmxvZyhcImFkZGluZyBjaGVja2xpc3RlbmVyXCIpO1xuICAgIGxldCB0cmFzaEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbXBsZXRlXCIpO1xuICAgIHRyYXNoQnRucy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e1xuICAgICAgICAgICAgbGV0IGRvbVRpdGxlID0gZWxlbWVudC5jbG9zZXN0KFwiLnRvZG9cIikuY2hpbGROb2Rlc1sxXTtcbiAgICAgICAgICAgIGxldCBpID0gZWxlbWVudC5jbG9zZXN0KFwiLnRvZG9cIikuZ2V0QXR0cmlidXRlKFwiaW5kZXhcIik7XG4gICAgICAgICAgICBwcm9qZWN0cy5yZXR1cm5NYWluKCkudG9kb0F0KGkpLnN3aXRjaERvbmUoKTtcblxuICAgICAgICAgICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2hlY2tlZFwiKSkge1xuICAgICAgICAgICAgICAgIGRvbVRpdGxlLmNsYXNzTGlzdC5yZW1vdmUoXCJjaGVja2VkXCIpO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImNoZWNrZWRcIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImNoZWNrZWRcIik7XG4gICAgICAgICAgICAgICAgZG9tVGl0bGUuY2xhc3NMaXN0LmFkZChcImNoZWNrZWRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG5jb25zdCBsb2FkRXhwYW5kV2luZG93ID0gKHRvZG8pID0+e1xuICAgIGxldCBleHBhbmRXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBleHBhbmRXcmFwLmlkID0gXCJleHBhbmRXaW5kb3dcIjtcblxuICAgIGxldCBmb3JtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvcm1UaXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG4gICAgZXhwYW5kV3JhcC5jbGFzc0xpc3QuYWRkKFwicG9wdXBcIik7XG5cbiAgICBsZXQgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBuYW1lLnRleHRDb250ZW50ID0gdG9kby5nZXRUaXRsZSgpO1xuICAgIGZvcm1UaXRsZS5hcHBlbmRDaGlsZChuYW1lKTtcblxuICAgIGxldCB4QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICB4QnRuLmNsYXNzTGlzdC5hZGQoXCJjbG9zZVwiKTtcbiAgICB4QnRuLnNldEF0dHJpYnV0ZShcInNyY1wiLFwiLi4vc3JjL2ltYWdlcy9jbG9zZS5zdmdcIik7XG4gICAgZm9ybVRpdGxlLmFwcGVuZENoaWxkKHhCdG4pO1xuXG4gICAgeEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+e1xuICAgICAgICBjbG9zZUV4cGFuZCgpXG4gICAgfSk7XG5cblxuICAgIGxldCBkZXNjcmlwdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGVzY3JpcHRpb25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImZvcm0tY29udGFpbmVyXCIpO1xuXG4gICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZGVzY3JpcHRpb24uaWQgPSBcImV4cGFuZC1kZXNjcmlwdGlvblwiO1xuICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdG9kby5nZXREZXNjcmlwdGlvbigpO1xuXG4gICAgZGVzY3JpcHRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gICAgZXhwYW5kV3JhcC5hcHBlbmRDaGlsZChmb3JtVGl0bGUpO1xuICAgIGV4cGFuZFdyYXAuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25Db250YWluZXIpO1xuICAgIFxuICAgIGFuY2hvckRpdi5hcHBlbmRDaGlsZChleHBhbmRXcmFwKTtcbn1cblxuY29uc3QgcmVsb2FkUHJvamVjdExpc3QgPSAocHJvamVjdHMpID0+e1xuICAgIGxldCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1saXN0XCIpO1xuICAgIHByb2plY3RMaXN0LmlubmVySFRNTCA9IFwiXCI7XG4gICAgcHJvamVjdHMucmV0dXJuQWxsKCkuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gZWxlbWVudC5nZXROYW1lKCk7XG4gICAgICAgIGxpLmFwcGVuZChidXR0b24pO1xuICAgICAgICBwcm9qZWN0TGlzdC5hcHBlbmQobGkpO1xuXG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+e1xuICAgICAgICAgICAgbG9hZFByb2plY3QocHJvamVjdHMscHJvamVjdHMuZ2V0UHJvakJ5TmFtZShidXR0b24udGV4dENvbnRlbnQpKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCB7bG9hZE1haW5Bc3Nlc3RzLCBsb2FkVG9kbywgb3BlbkZvcm0sIGNsb3NlRm9ybSwgbG9hZFByb2plY3QsIHRyYXNoRXZlbnRBZGRlcixjaGVja0V2ZW50QWRkZXIgLGxvYWRFeHBhbmRXaW5kb3cscmVsb2FkUHJvamVjdExpc3R9ICAiLCJpbXBvcnQgeyBjcmVhdGVUb2RvIH0gZnJvbSBcIi4vdG9kb0l0ZW1cIjtcblxuY29uc3QgY3JlYXRlUHJvamVjdCA9IChzdHIpPT57XG4gICAgbGV0IHRvZG9zID0gW107XG4gICAgbGV0IG5hbWUgPSBzdHI7XG5cbiAgICBjb25zdCBhZGRUb2RvID0gKHRvZG8pPT57XG4gICAgICAgIHRvZG9zLnB1c2godG9kbyk7XG4gICAgfVxuICAgIGNvbnN0IHJlbW92ZVRvZG8gPSAoaW5kZXgpID0+e1xuICAgICAgICB0b2Rvcy5zcGxpY2UoaW5kZXgsMSk7XG4gICAgfVxuICAgIGNvbnN0IGdldE5hbWUgPSAoKT0+e1xuICAgICAgICByZXR1cm4gbmFtZTtcbiAgICB9XG4gICAgY29uc3QgcmV0dXJuQWxsID0gKCk9PntcbiAgICAgICAgcmV0dXJuIHRvZG9zO1xuICAgIH1cbiAgICBjb25zdCB0b2RvQXQgPShpbmRleCkgPT57XG4gICAgICAgIHJldHVybiB0b2Rvc1tpbmRleF07XG4gICAgfVxuICAgIGNvbnN0IHRvU3RyaW5nID0gKCk9PntcbiAgICAgICAgbGV0IHN0ciA9IFwiXCI7XG4gICAgICAgIHRvZG9zLmZvckVhY2gocCA9PiB7XG4gICAgICAgICAgICBzdHIgKz0gcC5nZXRUaXRsZSgpO1xuICAgICAgICAgICAgc3RyICs9IFwiLCBcIjtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG5cbiAgICByZXR1cm57YWRkVG9kbyxyZW1vdmVUb2RvLHRvU3RyaW5nLGdldE5hbWUscmV0dXJuQWxsLHRvZG9BdH1cbn1cblxuY29uc3QgcHJvamVjdHNNYW5hZ2VyID0gKCk9PntcbiAgICBsZXQgcHJvamVjdHMgPSBbXTtcblxuICAgIGNvbnN0IGFkZFByb2ogPSAocHJvaik9PntcbiAgICAgICAgcHJvamVjdHMucHVzaChwcm9qKTtcbiAgICB9XG5cbiAgICBjb25zdCBybVByb2ogPSAobmFtZSkgPT57XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBwcm9qZWN0cy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2ogPSBhcnJheVtpbmRleF07XG5cbiAgICAgICAgICAgIGlmIChwcm9qLmdldE5hbWUoKSA9PT0gbmFtZSkge1xuICAgICAgICAgICAgICAgIHByb2plY3RzLnNwbGljZShpbmRleCwxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGdldFByb2pCeU5hbWUgPSAobmFtZSk9PntcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHByb2plY3RzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgcCA9IHByb2plY3RzW2luZGV4XTtcbiAgICAgICAgICAgIGlmIChwLmdldE5hbWUoKSA9PT0gbmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJldHVybkFsbCA9ICgpPT57XG4gICAgICAgIHJldHVybiBwcm9qZWN0cztcbiAgICB9XG5cbiAgICBjb25zdCByZXR1cm5NYWluID0gKCk9PntcbiAgICAgICAgcmV0dXJuIHByb2plY3RzWzBdO1xuICAgIH1cblxuICAgIHJldHVybnthZGRQcm9qLHJtUHJvaixyZXR1cm5BbGwscmV0dXJuTWFpbixnZXRQcm9qQnlOYW1lfVxufVxuXG5leHBvcnQge2NyZWF0ZVByb2plY3QscHJvamVjdHNNYW5hZ2VyfSIsImNvbnN0IGNyZWF0ZVRvZG8gPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWUsIHByaW9yaXR5KT0+e1xuICAgIGxldCBkb25lID0gZmFsc2U7XG5cbiAgICBjb25zdCBnZXRUaXRsZSA9ICgpPT57XG4gICAgICAgIHJldHVybiB0aXRsZTtcbiAgICB9O1xuICAgIGNvbnN0IGdldERlc2NyaXB0aW9uID0gKCk9PntcbiAgICAgICAgcmV0dXJuIGRlc2NyaXB0aW9uO1xuICAgIH07XG4gICAgY29uc3QgZ2V0RHVlRGF0ZSA9ICgpPT57XG4gICAgICAgIHJldHVybiBkdWU7XG4gICAgfTtcbiAgICBjb25zdCBnZXRQcmlvcml0eSA9ICgpPT57XG4gICAgICAgIHJldHVybiBwcmlvcml0eTtcbiAgICB9O1xuICAgIGNvbnN0IGlzRG9uZSA9ICgpPT57XG4gICAgICAgIHJldHVybiBkb25lO1xuICAgIH1cbiAgICBjb25zdCBzd2l0Y2hEb25lID0gKCk9PntcbiAgICAgICAgZG9uZSA9ICFkb25lO1xuICAgIH1cbiAgICBjb25zdCByZXR1cm5Ub2RvID0gKCk9PntcbiAgICAgICAgcmV0dXJuIHt0aXRsZSxkZXNjcmlwdGlvbixkdWUscHJpb3JpdHksZG9uZX07XG4gICAgfTtcbiAgICBjb25zdCB0b1N0cmluZyA9ICgpPT57XG4gICAgICAgIHJldHVybiBgJHtwcmlvcml0eX0gJHt0aXRsZX0gICAgICAgICAke2R1ZX0gXFxuICR7ZGVzY3JpcHRpb259YFxuICAgIH07XG5cbiAgICByZXR1cm4ge2dldFRpdGxlLCBnZXREZXNjcmlwdGlvbixnZXREdWVEYXRlLGdldFByaW9yaXR5LHRvU3RyaW5nLHJldHVyblRvZG8saXNEb25lLHN3aXRjaERvbmV9O1xufVxuXG5jb25zdCBjb3B5ID0gKFRvRG8pPT57XG4gICAgcmV0dXJuIGNyZWF0ZVRvZG8oVG9Eby5nZXRUaXRsZSgpLFRvRG8uZ2V0RGVzY3JpcHRpb24oKSxUb0RvLmdldER1ZURhdGUoKSxUb0RvLmdldFByaW9yaXR5KCkpO1xufTtcbmV4cG9ydCB7Y3JlYXRlVG9kbyxjb3B5fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQge2NyZWF0ZVRvZG99IGZyb20gXCIuL3RvZG9JdGVtLmpzXCIgXG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0LHByb2plY3RzTWFuYWdlciB9IGZyb20gXCIuL3Byb2plY3RzLmpzXCI7XG5pbXBvcnQgeyBsb2FkTWFpbkFzc2VzdHMsb3BlbkZvcm0gLGNsb3NlRm9ybSwgbG9hZFByb2plY3QsbG9hZEV4cGFuZFdpbmRvdywgcmVsb2FkUHJvamVjdExpc3R9IGZyb20gXCIuL2xvYWQuanNcIjtcbmltcG9ydCBjc3MgZnJvbSBcIi4vc3R5bGUuY3NzXCJcblxubGV0IHByb2plY3RzID0gcHJvamVjdHNNYW5hZ2VyKCk7XG5sZXQgbWFpbnByb2ogPSBjcmVhdGVQcm9qZWN0KFwiR2VuZXJhbFwiKTtcbi8qbGV0IHNlY29uZFByb2ogPSBjcmVhdGVQcm9qZWN0KFwiU3ByaW5nIGNsZWFuaW5nXCIpO1xubGV0IHRoaXJkUHJvaiA9IGNyZWF0ZVByb2plY3QoXCJIb3VzZSByZW5vdmF0aW9uXCIpO1xucHJvamVjdHMuYWRkUHJvaihtYWlucHJvaik7XG5wcm9qZWN0cy5hZGRQcm9qKHNlY29uZFByb2opO1xucHJvamVjdHMuYWRkUHJvaih0aGlyZFByb2opO1xuXG5sZXQgdG9kbzEgPSBjcmVhdGVUb2RvKFwiYnV5IG1pbGtcIixcIk5lZWQgdG8gZ2V0IGNvdyBtaWxrXCIsXCJ0b21vcnJvdyBTSUtFXCIsMyk7XG5sZXQgdG9kbzIgPSBjcmVhdGVUb2RvKFwiY2xlYW4gc2hlZFwiLFwiY2xlYW4gc2hlZCBpbiB0aGUgeWFkXCIsXCJ0b21vcnJvdyBTSUtFXCIsMSk7XG5sZXQgdG9kbzMgPSBjcmVhdGVUb2RvKFwiYnV5IGhhbW1lciBcIixcImJ1eSB0b29scyBmcm9tIGhvbWUgZGVwb1wiLFwidG9tb3Jyb3cgU0lLRVwiLDIpO1xubGV0IHRvZG80ID0gY3JlYXRlVG9kbyhcImJ1eSBuYWlsc1wiLFwiYnV5IHRvb2xzIGZyb20gaG9tZSBkZXBvXCIsXCJ0b21vcnJvdyBTSUtFXCIsMik7XG5cbm1haW5wcm9qLmFkZFRvZG8odG9kbzEpO1xubWFpbnByb2ouYWRkVG9kbyh0b2RvMik7XG5tYWlucHJvai5hZGRUb2RvKHRvZG8zKTtcbm1haW5wcm9qLmFkZFRvZG8odG9kbzQpO1xuXG5zZWNvbmRQcm9qLmFkZFRvZG8odG9kbzIpO1xuXG50aGlyZFByb2ouYWRkVG9kbyh0b2RvMyk7XG50aGlyZFByb2ouYWRkVG9kbyh0b2RvNCk7Ki9cblxubG9hZE1haW5Bc3Nlc3RzKCk7XG5yZWxvYWRQcm9qZWN0TGlzdChwcm9qZWN0cyk7XG5cbmxldCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLWNvbnRhaW5lclwiKTtcbmxldCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWNvbnRlbnRcIik7XG5cblxuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N1Ym1pdFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcbiAgICBcbiAgICAgICAgaWYoZm9ybVtcImNyZWF0ZS1mb3JtLXRpdGxlXCJdLnZhbHVlID09PSBcIlwiIHx8IGZvcm1bXCJjcmVhdGUtZm9ybS1kZXNjcmlwdGlvblwiXS52YWx1ZSA9PT0gXCJcIiB8fCBmb3JtW1wiY3JlYXRlLWZvcm0tZGF0ZVwiXS52YWx1ZSA9PT0gXCJcIil7XG4gICAgICAgICAgICBhbGVydChcIlBsZWFzZSBmaWxsIG91dCBUaXRsZSBEZXNjcmlwdGlvbiBhbmQgRHVlIGRhdGUuXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBsZXQgdG9kbyA9IGNyZWF0ZVRvZG8oZm9ybVtcImNyZWF0ZS1mb3JtLXRpdGxlXCJdLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICBmb3JtW1wiY3JlYXRlLWZvcm0tZGVzY3JpcHRpb25cIl0udmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgIGZvcm1bXCJjcmVhdGUtZm9ybS1kYXRlXCJdLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICBmb3JtW1wiY3JlYXRlLWZvcm0tcHJpb3JpdHlcIl0udmFsdWUpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBtYWlucHJvai5hZGRUb2RvKHRvZG8pO1xuICAgIFxuICAgICAgICAgICAgbG9hZFByb2plY3QocHJvamVjdHMsbWFpbnByb2opO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGNsb3NlRm9ybSgpO1xuICAgIFxuICAgICAgICBmb3JtW1wiY3JlYXRlLWZvcm0tdGl0bGVcIl0udmFsdWUgPSBcIlwiO1xuICAgICAgICBmb3JtW1wiY3JlYXRlLWZvcm0tZGVzY3JpcHRpb25cIl0udmFsdWUgPSBcIlwiO1xuICAgICAgICBmb3JtW1wiY3JlYXRlLWZvcm0tZGF0ZVwiXS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGZvcm1bXCJjcmVhdGUtZm9ybS1wcmlvcml0eVwiXS52YWx1ZSA9IFwiMVwiO1xufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3VibWl0LXByb2pcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCk9PntcbiAgICBsZXQgdmFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWFkZC1uYW1lXCIpLnZhbHVlO1xuICAgIGlmICh2YWwubGVuZ3RoIDwgMikge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1wcm9qZWN0XCIpLmNoaWxkTm9kZXNbMV0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWFkZC1uYW1lXCIpLnZhbHVlID0gXCJcIjtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtcHJvamVjdFwiKS5jaGlsZE5vZGVzWzFdLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtcHJvamVjdFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbiAgICAgICAgbGV0IHByb2pUb2FkZCA9IGNyZWF0ZVByb2plY3QodmFsKTtcbiAgICAgICAgcHJvamVjdHMuYWRkUHJvaihwcm9qVG9hZGQpO1xuICAgICAgICByZWxvYWRQcm9qZWN0TGlzdChwcm9qZWN0cy5yZXR1cm5BbGwoKSk7XG4gICAgfVxufSk7XG5cbmxvYWRQcm9qZWN0KHByb2plY3RzLHByb2plY3RzLnJldHVybk1haW4oKSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9