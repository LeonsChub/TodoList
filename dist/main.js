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

function loadMainAssests(projects){

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
    btn.addEventListener("click",()=>{
        let val = document.querySelector("#project-add-name").value;
        if (val.length < 2) {
            document.querySelector("#add-project").childNodes[1].style.display = "block";
        }
        else{
            document.querySelector("#project-add-name").value = "";
            document.querySelector("#add-project").childNodes[1].style.display = "none";
            document.querySelector("#add-project").style.display = "none";
    
            let projToadd = (0,_projects__WEBPACK_IMPORTED_MODULE_1__.createProject)(val);
            projects.addProj(projToadd);
            reloadProjectList(projects);
    
            document.querySelector("#myForm").remove();
            loadForm(projects);
        }
    });
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

    loadForm(projects);
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

function loadForm(projects){

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

    let projectLabel = document.createElement("label");
    projectLabel.setAttribute("for","create-form-poject");
    projectLabel.textContent = "Project:";
    let projectInput = document.createElement("select");
    projectInput.setAttribute("name","create-form-project");
    projectInput.id = "new-poject";


    for (let index = 0; index < projects.length(); index++) {
        let Option = document.createElement("option");
        Option.textContent = projects.getProjByIndex(index).getName();
        Option.setAttribute("value",`${projects.getProjByIndex(index).getName()}`);
        projectInput.appendChild(Option);
        
    }

    simpleDiv = document.createElement("div");
    
    simpleDiv.appendChild(projectLabel);
    simpleDiv.appendChild(projectInput);

    listItem.appendChild(simpleDiv);

    list.appendChild(listItem);

    let submitBtn = document.createElement("button");
    submitBtn.id = "submit";
    submitBtn.textContent = "Add Task";

    submitBtn.addEventListener("click", ()=>{
        let form = document.querySelector(".form-container");
        
        if(form["create-form-title"].value === "" || form["create-form-description"].value === "" || form["create-form-date"].value === ""){
            alert("Please fill out Title Description and Due date.");
        }
        else{
            let todo = (0,_todoItem__WEBPACK_IMPORTED_MODULE_0__.createTodo)(form["create-form-title"].value,
                       form["create-form-description"].value,
                       form["create-form-date"].value,
                       form["create-form-priority"].value);

            if(form["create-form-project"].value !== "General"){
                let projName = `${form["create-form-project"].value}`;
                let proj = projects.getProjByName(projName);
                proj.addTodo(todo);
            }
            projects.returnMain().addTodo(todo);
            loadProject(projects,projects.returnMain());
        }
    
        closeForm();
    
        form["create-form-title"].value = "";
        form["create-form-description"].value = "";
        form["create-form-date"].value = "";
        form["create-form-priority"].value = "1";
        form["create-form-project"].value = "General";
    });

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
    
    const getProjByIndex = (index)=>{
        const p = projects[index];
        return p; 
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

    const length = ()=>{
        return projects.length;
    }

    const returnMain = ()=>{
        return projects[0];
    }

    return{addProj,rmProj,returnAll,returnMain,getProjByName,length,getProjByIndex}
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
projects.addProj(mainproj);

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

(0,_load_js__WEBPACK_IMPORTED_MODULE_2__.loadMainAssests)(projects);
(0,_load_js__WEBPACK_IMPORTED_MODULE_2__.reloadProjectList)(projects);

let form = document.querySelector(".form-container");
let main = document.querySelector(".main-content");


(0,_load_js__WEBPACK_IMPORTED_MODULE_2__.loadProject)(projects,projects.returnMain());
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qix3REFBYTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVB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QzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7OztBQ0F3QztBQUNzQjtBQUMyQztBQUM1RTs7QUFFN0IsZUFBZSw2REFBZTtBQUM5QixlQUFlLDJEQUFhO0FBQzVCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSx5QkFBeUI7O0FBRXpCLHlEQUFlO0FBQ2YsMkRBQWlCOztBQUVqQjtBQUNBOzs7QUFHQSxxREFBVyxpQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2xvYWQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdG9kb0l0ZW0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QVCtTYW5zOndnaHRANzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDEwMDszMDA7NDAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG59XFxub2wsIHVsIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLCBxIHtcXG5cXHRxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG5cXHRjb250ZW50OiAnJztcXG5cXHRjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXG59XFxuaW5wdXQ6Zm9jdXMsXFxuc2VsZWN0OmZvY3VzLFxcbnRleHRhcmVhOmZvY3VzLFxcbmJ1dHRvbjpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbiNjb250ZW50e1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcblxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDRmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcImxvZ28gICAgbG9nb1xcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgXFxcIiBzaWRlYmFyIG1haW5cXFwiO1xcblxcbn1cXG46cm9vdHtcXG4gICAgLS1jeWFuLTUwIDojZTBmN2ZhO1xcbiAgICAtLWN5YW4tMTAwOiNiMmViZjI7XFxuICAgIC0tY3lhbi0yMDA6IzgwZGVlYTtcXG4gICAgLS1jeWFuLTMwMDojNGRkMGUxO1xcbiAgICAtLWN5YW4tNDAwOiMyNmM2ZGE7XFxuICAgIC0tY3lhbi01MDA6IzAwYmNkNDtcXG4gICAgLS1jeWFuLTYwMDojMDBhY2MxO1xcbiAgICAtLWN5YW4tNzAwOiMwMDk3YTc7XFxuICAgIC0tY3lhbi04MDA6IzAwODM4ZjtcXG4gICAgLS1jeWFuLTkwMDojMDA2MDY0O1xcbn1cXG4jY29udGVudHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxufVxcbnRleHRhcmVhe1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbn1cXG4ubG9nby13cmFwe1xcbiAgICBncmlkLWFyZWE6IGxvZ287XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN5YW4tMzAwKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG4ubG9nb3tcXG4gICAgZm9udC1mYW1pbHk6ICdQVCBTYW5zJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xcbn1cXG5cXG4uc2lkZWJhcntcXG4gICAgZ3JpZC1hcmVhOiBzaWRlYmFyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jeWFuLTIwMCk7XFxufVxcbi5tYWluLWNvbnRlbnR7XFxuICAgIGdyaWQtYXJlYTogbWFpbjtcXG4gICAgcGFkZGluZy10b3A6IDMycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN5YW4tNTApO1xcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgICBvdmVyZmxvdy15OmF1dG87XFxuICAgIG92ZXJmbG93LXg6YXV0bztcXG59XFxuLnNpZGViYXI+dWx7XFxuICAgIG1hcmdpbi10b3A6IDMycHg7XFxuICAgIHBhZGRpbmctbGVmdDogMTZweDtcXG59XFxuLnNpZGViYXIgbGl7XFxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XFxuXFxuICAgIHdpZHRoOiA4MCU7XFxufVxcbi5zaWRlYmFyIGxpID4gYnV0dG9ue1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDk3YTc7XFxuICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBmb250LXNpemU6IDAuNzVlbTtcXG4gICAgcGFkZGluZzogMC41ZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbiNwcm9qZWN0LWxpc3R7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG5cXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gICAgb3ZlcmZsb3cteDogYXV0bztcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuI3Byb2plY3QtbGlzdCA+IGxpe1xcbiAgICBmb250LXNpemU6IDAuNzVlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjowO1xcbn1cXG4jcHJvamVjdC1saXN0ID4gbGkgPiBidXR0b257XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG4jcHJvamVjdC1saXN0ID4gbGkgPiBidXR0b246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN5YW4tOTAwKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG4jYWRkLXByb2plY3R7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG59XFxuLmJ0bi1kaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWFyZ2luLXRvcDogOHB4O1xcbn1cXG4jc3VibWl0LXByb2p7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2MiwgMjEyLCA2Mik7XFxufVxcbiNjYW5jZWwtcHJvantcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyOSwgMTQsIDE0KTtcXG59XFxuI3Byb2plY3QtYWRkLW5hbWV7XFxuICAgIHdpZHRoOiA5NyU7XFxuICAgIGZvbnQtc2l6ZTogMC43NWVtO1xcbn1cXG4uZXJyb3J7XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIGZvbnQtc2l6ZTogMC42ZW07XFxuICAgIHBhZGRpbmctdG9wOiAwLjRlbTtcXG59XFxuXFxuI3N1Ym1pdC1wcm9qLFxcbiNjYW5jZWwtcHJvantcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgd2lkdGg6IDQ1JTtcXG4gICAgZm9udC1zaXplOiAwLjc1ZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogMC41ZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcXG59XFxuLnRvZG86bm90KDpsYXN0LWNoaWxkKXtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XFxufVxcbi50b2Rve1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBtYXJnaW4taW5saW5lOiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jeWFuLTEwMCk7XFxuICAgIHBhZGRpbmc6IDAuNzVlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG5cXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEycHg7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMnB4O1xcbn1cXG5cXG4udG9kb1twcmlvcml0eSA9IFxcXCIxXFxcIl17XFxuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgZ3JlZW47XFxufVxcbi50b2RvW3ByaW9yaXR5ID0gXFxcIjJcXFwiXXtcXG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCB5ZWxsb3c7XFxufVxcbi50b2RvW3ByaW9yaXR5ID0gXFxcIjNcXFwiXXtcXG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCByZWQ7XFxufVxcblxcbi5jb21wbGV0ZXtcXG4gICAgd2lkdGg6IGNhbGMoMWVtIC0gNnB4KTtcXG4gICAgaGVpZ2h0OiBjYWxjKDFlbSAtIDZweCk7XFxuXFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWN5YW4tNjAwKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XFxufVxcblxcbi5jb21wbGV0ZS5jaGVja2Vke1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jeWFuLTgwMCk7XFxufVxcbi50b2RvID4gLnRpdGxlLmNoZWNrZWR7XFxuICAgIHRleHQtZGVjb3JhdGlvbjpsaW5lLXRocm91Z2g7XFxuICAgIGNvbG9yOiBncmF5O1xcbn1cXG4udG9kbyA+IC50aXRsZXtcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG4udG9kbyA+IC5kYXRlLFxcbi50b2RvID4gLmV4cGFuZCxcXG4udG9kbyA+IC5lZGl0e1xcbiAgICBtYXJnaW4tcmlnaHQ6IDI0cHg7XFxufVxcbi50b2RvID4gLnRyYXNoOmhvdmVyLFxcbi50b2RvID4gLmV4cGFuZDpob3ZlcixcXG4udG9kbyA+IC5jb21wbGV0ZTpob3ZlcixcXG4udG9kbyA+IC5lZGl0OmhvdmVyLFxcbmltZy5jbG9zZSxcXG5idXR0b246aG92ZXIsXFxuYnV0dG9uI3N1Ym1pdHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uc2lkZWJhcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLmFkZHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDIuNWVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jeWFuLTYwMCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XFxuICAgIFxcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIG1hcmdpbjogMTZweDtcXG5cXG4gICAgd2lkdGg6IDQ4cHg7XFxuICAgIGhlaWdodDogNDhweDtcXG4gICAgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbn1cXG5cXG4uYWRkOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IDBweCAzcHggNXB4IHJnYigwLCAwLCAwKTtcXG59XFxuLnBvcHVwe1xcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcXG5cXG4gICAgbWFyZ2luLWlubGluZTogYXV0bztcXG4gICAgbWFyZ2luLWJsb2NrOiBhdXRvO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG5cXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcXG4gICAgbWF4LWhlaWdodDogMzcwcHg7XFxuICAgIFxcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbn1cXG4uZm9ybS1jb250YWluZXJ7XFxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMS41ZW0gLSA4cHgpO1xcbiAgICB3aWR0aDogOTUlO1xcbiAgICBtYXJnaW4taW5saW5lOiBhdXRvO1xcbn1cXG4jbXlGb3JtIHVse1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcblxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbiNuZXctdGl0bGV7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuXFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgbWFyZ2luLWJsb2NrOiA4cHg7XFxufVxcbiNuZXctdGl0bGU6Zm9jdXN7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG4jbmV3LWRlc2NyaXB0aW9ue1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgIGhlaWdodDogNmVtO1xcbiAgICByZXNpemU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuI215Rm9ybT4udGl0bGUsXFxuI2V4cGFuZFdpbmRvdyA+IC50aXRsZXtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTZweDtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE2cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZy1pbmxpbmU6IDMlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jeWFuLTQwMCk7XFxuICAgIGhlaWdodDogMS41ZW07XFxufVxcbiNteUZvcm0gPiAudGl0bGUgPiBpbWcuY2xvc2UsXFxuI2V4cGFuZFdpbmRvdyA+IC50aXRsZSA+IGltZy5jbG9zZXtcXG4gICAgd2lkdGg6IDE2cHg7XFxufVxcblxcbmxpLnBpY2tlci1maWVsZHtcXG4gICAgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xcblxcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuI2V4cGFuZC1kZXNjcmlwdGlvbntcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgbWFyZ2luLXRvcDogMTZweDtcXG59XFxuXFxuI3N1Ym1pdHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDhweDtcXG4gICAgcmlnaHQ6IGNhbGMoNSUpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMC43NWVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jeWFuLTUwMCk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMC41ZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0NBR0M7O0FBS0Q7Ozs7Ozs7Ozs7Ozs7Q0FhQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLFNBQVM7Q0FDVCxlQUFlO0NBQ2YsYUFBYTtDQUNiLHdCQUF3QjtBQUN6QjtBQUNBLGdEQUFnRDtBQUNoRDs7Q0FFQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxZQUFZO0FBQ2I7QUFDQTs7Q0FFQyxXQUFXO0NBQ1gsYUFBYTtBQUNkO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsaUJBQWlCO0FBQ2xCO0FBQ0E7Ozs7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SUFDSSxpQkFBaUI7O0lBRWpCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFFBQVE7SUFDUixNQUFNO0lBQ04sU0FBUztJQUNULGtCQUFrQjs7SUFFbEIsdUJBQXVCO0lBQ3ZCLFlBQVk7O0lBRVosZ0JBQWdCO0lBQ2hCLGlCQUFpQjs7SUFFakIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxnQ0FBZ0M7SUFDaEMsVUFBVTtJQUNWLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixZQUFZOztJQUVaLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCx1QkFBdUI7O0lBRXZCLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksY0FBYztJQUNkLFdBQVc7O0lBRVgsV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0FBQ2hCO0FBQ0E7O0lBRUksNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixrQkFBa0I7SUFDbEIsaUNBQWlDO0lBQ2pDLGFBQWE7QUFDakI7QUFDQTs7SUFFSSxXQUFXO0FBQ2Y7O0FBRUE7O0lBRUksYUFBYTtJQUNiLGlCQUFpQjs7SUFFakIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQ0FBaUM7SUFDakMsWUFBWTtJQUNaLGNBQWM7SUFDZCxxQkFBcUI7QUFDekJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcblxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBUK1NhbnM6d2dodEA3MDAmZGlzcGxheT1zd2FwJyk7XFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRAMTAwOzMwMDs0MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLCB1bCB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSwgcSB7XFxuXFx0cXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuXFx0Y29udGVudDogJyc7XFxuXFx0Y29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxufVxcbmlucHV0OmZvY3VzLFxcbnNlbGVjdDpmb2N1cyxcXG50ZXh0YXJlYTpmb2N1cyxcXG5idXR0b246Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4jY29udGVudHtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG5cXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA0ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJsb2dvICAgIGxvZ29cXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgIFxcXCIgc2lkZWJhciBtYWluXFxcIjtcXG5cXG59XFxuOnJvb3R7XFxuICAgIC0tY3lhbi01MCA6I2UwZjdmYTtcXG4gICAgLS1jeWFuLTEwMDojYjJlYmYyO1xcbiAgICAtLWN5YW4tMjAwOiM4MGRlZWE7XFxuICAgIC0tY3lhbi0zMDA6IzRkZDBlMTtcXG4gICAgLS1jeWFuLTQwMDojMjZjNmRhO1xcbiAgICAtLWN5YW4tNTAwOiMwMGJjZDQ7XFxuICAgIC0tY3lhbi02MDA6IzAwYWNjMTtcXG4gICAgLS1jeWFuLTcwMDojMDA5N2E3O1xcbiAgICAtLWN5YW4tODAwOiMwMDgzOGY7XFxuICAgIC0tY3lhbi05MDA6IzAwNjA2NDtcXG59XFxuI2NvbnRlbnR7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbn1cXG50ZXh0YXJlYXtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG59XFxuLmxvZ28td3JhcHtcXG4gICAgZ3JpZC1hcmVhOiBsb2dvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jeWFuLTMwMCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmxvZ297XFxuICAgIGZvbnQtZmFtaWx5OiAnUFQgU2FucycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcXG59XFxuXFxuLnNpZGViYXJ7XFxuICAgIGdyaWQtYXJlYTogc2lkZWJhcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3lhbi0yMDApO1xcbn1cXG4ubWFpbi1jb250ZW50e1xcbiAgICBncmlkLWFyZWE6IG1haW47XFxuICAgIHBhZGRpbmctdG9wOiAzMnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jeWFuLTUwKTtcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gICAgb3ZlcmZsb3cteTphdXRvO1xcbiAgICBvdmVyZmxvdy14OmF1dG87XFxufVxcbi5zaWRlYmFyPnVse1xcbiAgICBtYXJnaW4tdG9wOiAzMnB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XFxufVxcbi5zaWRlYmFyIGxpe1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcblxcbiAgICB3aWR0aDogODAlO1xcbn1cXG4uc2lkZWJhciBsaSA+IGJ1dHRvbntcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5N2E3O1xcbiAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgZm9udC1zaXplOiAwLjc1ZW07XFxuICAgIHBhZGRpbmc6IDAuNWVtO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4jcHJvamVjdC1saXN0e1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgXFxuICAgIGhlaWdodDogMTUwcHg7XFxuXFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxuICAgIG92ZXJmbG93LXg6IGF1dG87XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxufVxcbiNwcm9qZWN0LWxpc3QgPiBsaXtcXG4gICAgZm9udC1zaXplOiAwLjc1ZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW46MDtcXG59XFxuI3Byb2plY3QtbGlzdCA+IGxpID4gYnV0dG9ue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuI3Byb2plY3QtbGlzdCA+IGxpID4gYnV0dG9uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jeWFuLTkwMCk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuI2FkZC1wcm9qZWN0e1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW47XFxufVxcbi5idG4tZGl2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1hcmdpbi10b3A6IDhweDtcXG59XFxuI3N1Ym1pdC1wcm9qe1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjIsIDIxMiwgNjIpO1xcbn1cXG4jY2FuY2VsLXByb2p7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjksIDE0LCAxNCk7XFxufVxcbiNwcm9qZWN0LWFkZC1uYW1le1xcbiAgICB3aWR0aDogOTclO1xcbiAgICBmb250LXNpemU6IDAuNzVlbTtcXG59XFxuLmVycm9ye1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICBmb250LXNpemU6IDAuNmVtO1xcbiAgICBwYWRkaW5nLXRvcDogMC40ZW07XFxufVxcblxcbiNzdWJtaXQtcHJvaixcXG4jY2FuY2VsLXByb2p7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIHdpZHRoOiA0NSU7XFxuICAgIGZvbnQtc2l6ZTogMC43NWVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDAuNWVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XFxufVxcbi50b2RvOm5vdCg6bGFzdC1jaGlsZCl7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xcbn1cXG4udG9kb3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgbWFyZ2luLWlubGluZTogYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3lhbi0xMDApO1xcbiAgICBwYWRkaW5nOiAwLjc1ZW07XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuXFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMnB4O1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTJweDtcXG59XFxuXFxuLnRvZG9bcHJpb3JpdHkgPSBcXFwiMVxcXCJde1xcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkIGdyZWVuO1xcbn1cXG4udG9kb1twcmlvcml0eSA9IFxcXCIyXFxcIl17XFxuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgeWVsbG93O1xcbn1cXG4udG9kb1twcmlvcml0eSA9IFxcXCIzXFxcIl17XFxuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgcmVkO1xcbn1cXG5cXG4uY29tcGxldGV7XFxuICAgIHdpZHRoOiBjYWxjKDFlbSAtIDZweCk7XFxuICAgIGhlaWdodDogY2FsYygxZW0gLSA2cHgpO1xcblxcbiAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1jeWFuLTYwMCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xcbn1cXG5cXG4uY29tcGxldGUuY2hlY2tlZHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3lhbi04MDApO1xcbn1cXG4udG9kbyA+IC50aXRsZS5jaGVja2Vke1xcbiAgICB0ZXh0LWRlY29yYXRpb246bGluZS10aHJvdWdoO1xcbiAgICBjb2xvcjogZ3JheTtcXG59XFxuLnRvZG8gPiAudGl0bGV7XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuLnRvZG8gPiAuZGF0ZSxcXG4udG9kbyA+IC5leHBhbmQsXFxuLnRvZG8gPiAuZWRpdHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xcbn1cXG4udG9kbyA+IC50cmFzaDpob3ZlcixcXG4udG9kbyA+IC5leHBhbmQ6aG92ZXIsXFxuLnRvZG8gPiAuY29tcGxldGU6aG92ZXIsXFxuLnRvZG8gPiAuZWRpdDpob3ZlcixcXG5pbWcuY2xvc2UsXFxuYnV0dG9uOmhvdmVyLFxcbmJ1dHRvbiNzdWJtaXR7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnNpZGViYXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5hZGR7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAyLjVlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3lhbi02MDApO1xcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xcbiAgICBcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBtYXJnaW46IDE2cHg7XFxuXFxuICAgIHdpZHRoOiA0OHB4O1xcbiAgICBoZWlnaHQ6IDQ4cHg7XFxuICAgIFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG59XFxuXFxuLmFkZDpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDVweCByZ2IoMCwgMCwgMCk7XFxufVxcbi5wb3B1cHtcXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XFxuXFxuICAgIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxuICAgIG1hcmdpbi1ibG9jazogYXV0bztcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuXFxuICAgIG1heC13aWR0aDogNjAwcHg7XFxuICAgIG1heC1oZWlnaHQ6IDM3MHB4O1xcbiAgICBcXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcXG59XFxuLmZvcm0tY29udGFpbmVye1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDEuNWVtIC0gOHB4KTtcXG4gICAgd2lkdGg6IDk1JTtcXG4gICAgbWFyZ2luLWlubGluZTogYXV0bztcXG59XFxuI215Rm9ybSB1bHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW47XFxuICAgIGhlaWdodDogMTAwJTtcXG5cXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4jbmV3LXRpdGxle1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1zaXplOiAxZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcblxcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG1hcmdpbi1ibG9jazogOHB4O1xcbn1cXG4jbmV3LXRpdGxlOmZvY3Vze1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuI25ldy1kZXNjcmlwdGlvbntcXG4gICAgZm9udC1zaXplOiAxZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICBoZWlnaHQ6IDZlbTtcXG4gICAgcmVzaXplOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcbiNteUZvcm0+LnRpdGxlLFxcbiNleHBhbmRXaW5kb3cgPiAudGl0bGV7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE2cHg7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNnB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmctaW5saW5lOiAzJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3lhbi00MDApO1xcbiAgICBoZWlnaHQ6IDEuNWVtO1xcbn1cXG4jbXlGb3JtID4gLnRpdGxlID4gaW1nLmNsb3NlLFxcbiNleHBhbmRXaW5kb3cgPiAudGl0bGUgPiBpbWcuY2xvc2V7XFxuICAgIHdpZHRoOiAxNnB4O1xcbn1cXG5cXG5saS5waWNrZXItZmllbGR7XFxuICAgIFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG5cXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcbiNleHBhbmQtZGVzY3JpcHRpb257XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIG1hcmdpbi10b3A6IDE2cHg7XFxufVxcblxcbiNzdWJtaXR7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiA4cHg7XFxuICAgIHJpZ2h0OiBjYWxjKDUlKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IDAuNzVlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3lhbi01MDApO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDAuNWVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHtjb3B5LCBjcmVhdGVUb2RvfSBmcm9tIFwiLi90b2RvSXRlbVwiO1xuaW1wb3J0IHsgY3JlYXRlUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RzXCI7XG5cbmlmKCEhZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpID09PSBmYWxzZSl7XG4gICAgdmFyIGFuY2hvckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYW5jaG9yRGl2LmlkID0gXCJjb250ZW50XCI7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuYXBwZW5kQ2hpbGQoYW5jaG9yRGl2KTtcbn1cbmVsc2V7XG4gICAgdmFyIGFuY2hvckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTsgXG59XG5cbmZ1bmN0aW9uIGxvYWRNYWluQXNzZXN0cyhwcm9qZWN0cyl7XG5cbiAgICBsZXQgbG9nb1dyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuICAgIGxvZ29XcmFwLmNsYXNzTGlzdC5hZGQoXCJsb2dvLXdyYXBcIik7XG5cbiAgICBsZXQgbG9nb0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgbG9nb0ltZy5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLFwiNDhweFwiKTtcblxuICAgIGxvZ29JbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsXCIuLi9zcmMvaW1hZ2VzL0xvZ28uc3ZnXCIpO1xuICAgIGxldCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBsb2dvLmNsYXNzTGlzdC5hZGQoJ2xvZ28nKTtcbiAgICBsb2dvLmlubmVySFRNTCA9ICc8aW1nIHdpZHRoPVwiNDBweFwiIHNyYz1cIi4uL3NyYy9pbWFnZXMvTG9nby5zdmdcIiBhbHQ9XCJcIj4gVG8gRG8gTGlzdCc7XG5cbiAgICBsb2dvV3JhcC5hcHBlbmRDaGlsZChsb2dvKTtcbiAgICBhbmNob3JEaXYuYXBwZW5kQ2hpbGQobG9nb1dyYXApO1xuXG4gICAgbGV0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyXCIpO1xuXG4gICAgbGV0IHNpZGViYXJMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcblxuICAgIGxldCBsaXN0RWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBsZXQgYnRuSG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnRuSG9tZS50ZXh0Q29udGVudCA9IFwiaG9tZVwiO1xuICAgIGxpc3RFbGVtLmFwcGVuZENoaWxkKGJ0bkhvbWUpO1xuICAgIFxuICAgIHNpZGViYXJMaXN0LmFwcGVuZENoaWxkKGxpc3RFbGVtKTtcblxuICAgIGxpc3RFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGxpc3RFbGVtLnRleHRDb250ZW50ID0gXCJQcm9qZWN0c1wiO1xuICAgIHNpZGViYXJMaXN0LmFwcGVuZENoaWxkKGxpc3RFbGVtKTtcblxuICAgIGxpc3RFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXG4gICAgbGV0IGFkZFByb2plY3RXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhZGRQcm9qZWN0V3JhcC5pZCA9IFwiYWRkLXByb2plY3RcIjtcbiAgICBhZGRQcm9qZWN0V3JhcC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgXG4gICAgbGV0IGFkZFByb2pJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBhZGRQcm9qSW5wdXQuaWQgPSBcInByb2plY3QtYWRkLW5hbWVcIlxuICAgIGFkZFByb2pJbnB1dC5zZXRBdHRyaWJ1dGUoXCJtYXhsZW5ndGhcIixcIjE1XCIpO1xuICAgIGxldCBidG5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJ0bkRpdi5jbGFzc0xpc3QuYWRkKFwiYnRuLWRpdlwiKTtcblxuICAgIGxldCBlcnJvck1zZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGVycm9yTXNnLmNsYXNzTGlzdC5hZGQoXCJlcnJvclwiKTtcbiAgICBlcnJvck1zZy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgZXJyb3JNc2cudGV4dENvbnRlbnQgPSBcIkludmFsaWQgdmFsdWVcIjtcblxuICAgIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ0bi5pZCA9IFwic3VibWl0LXByb2pcIjtcbiAgICBidG4udGV4dENvbnRlbnQgPSBcIkFERFwiO1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+e1xuICAgICAgICBsZXQgdmFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWFkZC1uYW1lXCIpLnZhbHVlO1xuICAgICAgICBpZiAodmFsLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXByb2plY3RcIikuY2hpbGROb2Rlc1sxXS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtYWRkLW5hbWVcIikudmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtcHJvamVjdFwiKS5jaGlsZE5vZGVzWzFdLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXByb2plY3RcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIFxuICAgICAgICAgICAgbGV0IHByb2pUb2FkZCA9IGNyZWF0ZVByb2plY3QodmFsKTtcbiAgICAgICAgICAgIHByb2plY3RzLmFkZFByb2oocHJvalRvYWRkKTtcbiAgICAgICAgICAgIHJlbG9hZFByb2plY3RMaXN0KHByb2plY3RzKTtcbiAgICBcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbXlGb3JtXCIpLnJlbW92ZSgpO1xuICAgICAgICAgICAgbG9hZEZvcm0ocHJvamVjdHMpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgYnRuRGl2LmFwcGVuZENoaWxkKGJ0bik7XG5cbiAgICBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ0bi5pZCA9IFwiY2FuY2VsLXByb2pcIjtcbiAgICBidG4udGV4dENvbnRlbnQgPSBcIlhcIlxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+e1xuICAgICAgICBhZGRQcm9qSW5wdXQudmFsdWUgPSBcIlwiO1xuICAgICAgICBhZGRQcm9qZWN0V3JhcC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGVycm9yTXNnLnN0eWxlLmRpc3BsYXk9IFwibm9uZVwiO1xuICAgIH0pO1xuICAgIGJ0bkRpdi5hcHBlbmRDaGlsZChidG4pO1xuXG4gICAgYWRkUHJvamVjdFdyYXAuYXBwZW5kQ2hpbGQoYWRkUHJvaklucHV0KTtcbiAgICBhZGRQcm9qZWN0V3JhcC5hcHBlbmRDaGlsZChlcnJvck1zZyk7XG4gICAgYWRkUHJvamVjdFdyYXAuYXBwZW5kQ2hpbGQoYnRuRGl2KTtcbiAgICBcbiAgICBsaXN0RWxlbS5hcHBlbmRDaGlsZChhZGRQcm9qZWN0V3JhcCk7XG4gICAgc2lkZWJhckxpc3QuYXBwZW5kQ2hpbGQobGlzdEVsZW0pO1xuXG4gICAgbGlzdEVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbGV0IGJ0bkFkZFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ0bkFkZFByb2plY3QudGV4dENvbnRlbnQgPSBcIisgQWRkIFByb2plY3RcIjtcblxuICAgIGJ0bkFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCk9PntcbiAgICAgICAgYWRkUHJvamVjdFdyYXAuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB9KTtcblxuICAgIGxpc3RFbGVtLmFwcGVuZENoaWxkKGJ0bkFkZFByb2plY3QpO1xuICAgIHNpZGViYXJMaXN0LmFwcGVuZENoaWxkKGxpc3RFbGVtKTtcblxuICAgIGxpc3RFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGxldCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICBwcm9qZWN0TGlzdC5pZCA9IFwicHJvamVjdC1saXN0XCI7XG4gICAgbGlzdEVsZW0uYXBwZW5kQ2hpbGQocHJvamVjdExpc3QpO1xuICAgIHNpZGViYXJMaXN0LmFwcGVuZENoaWxkKGxpc3RFbGVtKTtcblxuICAgIGxldCBhZGRUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhZGRUb2RvLmNsYXNzTGlzdC5hZGQoXCJhZGRcIik7XG4gICAgYWRkVG9kby50ZXh0Q29udGVudCA9IFwiK1wiO1xuXG4gICAgYWRkVG9kby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcbiAgICAgICAgb3BlbkZvcm0oKTtcbiAgICB9KTtcblxuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoc2lkZWJhckxpc3QpO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoYWRkVG9kbyk7XG4gICAgYW5jaG9yRGl2LmFwcGVuZENoaWxkKHNpZGViYXIpO1xuXG4gICAgbGV0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1haW4uY2xhc3NMaXN0LmFkZChcIm1haW4tY29udGVudFwiKTtcbiAgICBhbmNob3JEaXYuYXBwZW5kQ2hpbGQobWFpbik7XG5cbiAgICBsb2FkRm9ybShwcm9qZWN0cyk7XG59XG5cbmZ1bmN0aW9uIGxvYWRUb2RvKHRvZG8saW5kZXgpe1xuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWNvbnRlbnRcIik7XG5cbiAgICBsZXQgdG9Eb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9Eb0Rpdi5zZXRBdHRyaWJ1dGUoXCJwcmlvcml0eVwiLHRvZG8uZ2V0UHJpb3JpdHkoKSk7XG4gICAgdG9Eb0Rpdi5zZXRBdHRyaWJ1dGUoXCJpbmRleFwiLGluZGV4KTtcbiAgICB0b0RvRGl2LmNsYXNzTGlzdC5hZGQoXCJ0b2RvXCIpO1xuXG4gICAgbGV0IGNoZWNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjaGVja0JveC5jbGFzc0xpc3QuYWRkKFwiY29tcGxldGVcIik7XG4gICAgXG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRvZG8uZ2V0VGl0bGUoKTtcbiAgICBpZiAodG9kby5pc0RvbmUoKSkge1xuICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwiY2hlY2tlZFwiKTtcbiAgICAgICAgY2hlY2tCb3guY2xhc3NMaXN0LmFkZChcImNoZWNrZWRcIik7XG4gICAgfVxuXG4gICAgbGV0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgZGF0ZS5jbGFzc0xpc3QuYWRkKFwiZGF0ZVwiKTtcbiAgICBkYXRlLnRleHRDb250ZW50ID0gdG9kby5nZXREdWVEYXRlKCk7XG5cbiAgICBsZXQgZXhwYW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBleHBhbmQuY2xhc3NMaXN0LmFkZChcImV4cGFuZFwiKTtcbiAgICBleHBhbmQuc2V0QXR0cmlidXRlKFwid2lkdGhcIixcIjI0cHhcIik7XG4gICAgZXhwYW5kLnNldEF0dHJpYnV0ZShcInNyY1wiLFwiLi4vc3JjL2ltYWdlcy9leHBhbmQuc3ZnXCIpO1xuXG4gICAgZXhwYW5kLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpPT57XG4gICAgICAgIGxvYWRFeHBhbmRXaW5kb3codG9kbyk7XG4gICAgfSk7XG5cbiAgICBsZXQgZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgZWRpdC5jbGFzc0xpc3QuYWRkKFwiZWRpdFwiKTtcbiAgICBlZGl0LnNldEF0dHJpYnV0ZShcIndpZHRoXCIsXCIyNHB4XCIpO1xuICAgIGVkaXQuc2V0QXR0cmlidXRlKFwic3JjXCIsXCIuLi9zcmMvaW1hZ2VzL2VkaXQuc3ZnXCIpO1xuXG4gICAgXG5cbiAgICBsZXQgdHJhc2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIHRyYXNoLmNsYXNzTGlzdC5hZGQoXCJ0cmFzaFwiKTtcbiAgICB0cmFzaC5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLFwiMjRweFwiKTtcbiAgICB0cmFzaC5zZXRBdHRyaWJ1dGUoXCJzcmNcIixcIi4uL3NyYy9pbWFnZXMvdHJhc2guc3ZnXCIpO1xuXG5cbiAgICB0b0RvRGl2LmFwcGVuZChjaGVja0JveCk7XG4gICAgdG9Eb0Rpdi5hcHBlbmQodGl0bGUpO1xuICAgIHRvRG9EaXYuYXBwZW5kKGRhdGUpO1xuICAgIHRvRG9EaXYuYXBwZW5kKGV4cGFuZCk7XG4gICAgdG9Eb0Rpdi5hcHBlbmQoZWRpdCk7XG4gICAgdG9Eb0Rpdi5hcHBlbmQodHJhc2gpO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0b0RvRGl2KTtcbn1cblxuZnVuY3Rpb24gbG9hZEZvcm0ocHJvamVjdHMpe1xuXG4gICAgbGV0IGZvcm1XcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb3JtV3JhcC5pZCA9IFwibXlGb3JtXCI7XG5cbiAgICBsZXQgZm9ybVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb3JtVGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xuICAgIGZvcm1XcmFwLmNsYXNzTGlzdC5hZGQoXCJwb3B1cFwiKTtcblxuICAgIGxldCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIG5hbWUudGV4dENvbnRlbnQgPSBcIkFkZCBhIHRvLWRvXCI7XG4gICAgZm9ybVRpdGxlLmFwcGVuZENoaWxkKG5hbWUpO1xuXG4gICAgbGV0IHhCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIHhCdG4uY2xhc3NMaXN0LmFkZChcImNsb3NlXCIpO1xuICAgIHhCdG4uc2V0QXR0cmlidXRlKFwic3JjXCIsXCIuLi9zcmMvaW1hZ2VzL2Nsb3NlLnN2Z1wiKTtcbiAgICBmb3JtVGl0bGUuYXBwZW5kQ2hpbGQoeEJ0bik7XG5cbiAgICBmb3JtV3JhcC5hcHBlbmRDaGlsZChmb3JtVGl0bGUpO1xuXG4gICAgbGV0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWNvbnRhaW5lclwiKTtcbiAgICBmb3JtLnNldEF0dHJpYnV0ZSgnbm92YWxpZGF0ZScsIHRydWUpO1xuICAgIGZvcm1XcmFwLmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gICAgbGV0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChsaXN0KTtcblxuICAgIGxldCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBsaXN0SXRlbS5jbGFzc0xpc3QuYWRkKFwidGV4dC1maWVsZFwiKTtcbiAgICBsZXQgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB0aXRsZUlucHV0LmlkID0gXCJuZXctdGl0bGVcIjtcbiAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIixcInRleHRcIik7XG4gICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsXCJjcmVhdGUtZm9ybS10aXRsZVwiKTtcbiAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcIm1heGxlbmd0aFwiLFwiMzBcIik7XG4gICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLFwiVGl0bGU6IChleGFtcGxlOiBXYWxrIHRoZSBkb2cpXCIpO1xuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuICAgIGxpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuXG4gICAgbGV0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgZGVzY3JpcHRpb25JbnB1dC5pZCA9IFwibmV3LWRlc2NyaXB0aW9uXCI7XG4gICAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLFwiRGVzY3JpcHRpb24uLi5cIik7XG4gICAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsXCJjcmVhdGUtZm9ybS1kZXNjcmlwdGlvblwiKTtcbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbklucHV0KTtcbiAgICBsaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcblxuICAgIGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGxpc3RJdGVtLmNsYXNzTGlzdC5hZGQoXCJwaWNrZXItZmllbGRcIik7XG5cbiAgICBsZXQgZGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGRhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIixcImNyZWF0ZS1mb3JtLWRhdGVcIik7XG4gICAgZGF0ZUxhYmVsLnRleHRDb250ZW50ID0gXCJEdWUgRGF0ZTpcIjtcbiAgICBsZXQgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsXCJjcmVhdGUtZm9ybS1kYXRlXCIpO1xuICAgIGRhdGVJbnB1dC5pZCA9IFwibmV3LWRhdGVcIjtcbiAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLFwiZGF0ZVwiKTtcblxuICAgIGxldCBzaW1wbGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgc2ltcGxlRGl2LmFwcGVuZENoaWxkKGRhdGVMYWJlbCk7XG4gICAgc2ltcGxlRGl2LmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XG5cbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChzaW1wbGVEaXYpO1xuICAgIFxuICAgIGxldCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHByaW9yaXR5TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsXCJjcmVhdGUtZm9ybS1wcmlvcml0eVwiKTtcbiAgICBwcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gXCJwcmlvcml0eTpcIjtcbiAgICBsZXQgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgcHJpb3JpdHlJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsXCJjcmVhdGUtZm9ybS1wcmlvcml0eVwiKTtcbiAgICBwcmlvcml0eUlucHV0LmlkID0gXCJuZXctcHJpb3JpdHlcIjtcblxuICAgIGxldCBwcmlvcml0eU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgcHJpb3JpdHlPcHRpb24udGV4dENvbnRlbnQgPSBcImxvd1wiO1xuICAgIHByaW9yaXR5T3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsXCIxXCIpO1xuICAgIHByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQocHJpb3JpdHlPcHRpb24pO1xuXG4gICAgcHJpb3JpdHlPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIHByaW9yaXR5T3B0aW9uLnRleHRDb250ZW50ID0gXCJtZWRpdW1cIjtcbiAgICBwcmlvcml0eU9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLFwiMlwiKTtcbiAgICBwcmlvcml0eUlucHV0LmFwcGVuZENoaWxkKHByaW9yaXR5T3B0aW9uKTtcblxuICAgIHByaW9yaXR5T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBwcmlvcml0eU9wdGlvbi50ZXh0Q29udGVudCA9IFwiaGlnaFwiO1xuICAgIHByaW9yaXR5T3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsXCIzXCIpO1xuICAgIHByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQocHJpb3JpdHlPcHRpb24pO1xuXG4gICAgc2ltcGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIHNpbXBsZURpdi5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsKTtcbiAgICBzaW1wbGVEaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlJbnB1dCk7XG5cbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChzaW1wbGVEaXYpO1xuXG4gICAgbGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG5cbiAgICBsZXQgcHJvamVjdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHByb2plY3RMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIixcImNyZWF0ZS1mb3JtLXBvamVjdFwiKTtcbiAgICBwcm9qZWN0TGFiZWwudGV4dENvbnRlbnQgPSBcIlByb2plY3Q6XCI7XG4gICAgbGV0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgcHJvamVjdElucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIixcImNyZWF0ZS1mb3JtLXByb2plY3RcIik7XG4gICAgcHJvamVjdElucHV0LmlkID0gXCJuZXctcG9qZWN0XCI7XG5cblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBwcm9qZWN0cy5sZW5ndGgoKTsgaW5kZXgrKykge1xuICAgICAgICBsZXQgT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgT3B0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdHMuZ2V0UHJvakJ5SW5kZXgoaW5kZXgpLmdldE5hbWUoKTtcbiAgICAgICAgT3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsYCR7cHJvamVjdHMuZ2V0UHJvakJ5SW5kZXgoaW5kZXgpLmdldE5hbWUoKX1gKTtcbiAgICAgICAgcHJvamVjdElucHV0LmFwcGVuZENoaWxkKE9wdGlvbik7XG4gICAgICAgIFxuICAgIH1cblxuICAgIHNpbXBsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgXG4gICAgc2ltcGxlRGl2LmFwcGVuZENoaWxkKHByb2plY3RMYWJlbCk7XG4gICAgc2ltcGxlRGl2LmFwcGVuZENoaWxkKHByb2plY3RJbnB1dCk7XG5cbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChzaW1wbGVEaXYpO1xuXG4gICAgbGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG5cbiAgICBsZXQgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBzdWJtaXRCdG4uaWQgPSBcInN1Ym1pdFwiO1xuICAgIHN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9IFwiQWRkIFRhc2tcIjtcblxuICAgIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcbiAgICAgICAgbGV0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tY29udGFpbmVyXCIpO1xuICAgICAgICBcbiAgICAgICAgaWYoZm9ybVtcImNyZWF0ZS1mb3JtLXRpdGxlXCJdLnZhbHVlID09PSBcIlwiIHx8IGZvcm1bXCJjcmVhdGUtZm9ybS1kZXNjcmlwdGlvblwiXS52YWx1ZSA9PT0gXCJcIiB8fCBmb3JtW1wiY3JlYXRlLWZvcm0tZGF0ZVwiXS52YWx1ZSA9PT0gXCJcIil7XG4gICAgICAgICAgICBhbGVydChcIlBsZWFzZSBmaWxsIG91dCBUaXRsZSBEZXNjcmlwdGlvbiBhbmQgRHVlIGRhdGUuXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBsZXQgdG9kbyA9IGNyZWF0ZVRvZG8oZm9ybVtcImNyZWF0ZS1mb3JtLXRpdGxlXCJdLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICBmb3JtW1wiY3JlYXRlLWZvcm0tZGVzY3JpcHRpb25cIl0udmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgIGZvcm1bXCJjcmVhdGUtZm9ybS1kYXRlXCJdLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICBmb3JtW1wiY3JlYXRlLWZvcm0tcHJpb3JpdHlcIl0udmFsdWUpO1xuXG4gICAgICAgICAgICBpZihmb3JtW1wiY3JlYXRlLWZvcm0tcHJvamVjdFwiXS52YWx1ZSAhPT0gXCJHZW5lcmFsXCIpe1xuICAgICAgICAgICAgICAgIGxldCBwcm9qTmFtZSA9IGAke2Zvcm1bXCJjcmVhdGUtZm9ybS1wcm9qZWN0XCJdLnZhbHVlfWA7XG4gICAgICAgICAgICAgICAgbGV0IHByb2ogPSBwcm9qZWN0cy5nZXRQcm9qQnlOYW1lKHByb2pOYW1lKTtcbiAgICAgICAgICAgICAgICBwcm9qLmFkZFRvZG8odG9kbyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcm9qZWN0cy5yZXR1cm5NYWluKCkuYWRkVG9kbyh0b2RvKTtcbiAgICAgICAgICAgIGxvYWRQcm9qZWN0KHByb2plY3RzLHByb2plY3RzLnJldHVybk1haW4oKSk7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgY2xvc2VGb3JtKCk7XG4gICAgXG4gICAgICAgIGZvcm1bXCJjcmVhdGUtZm9ybS10aXRsZVwiXS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGZvcm1bXCJjcmVhdGUtZm9ybS1kZXNjcmlwdGlvblwiXS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGZvcm1bXCJjcmVhdGUtZm9ybS1kYXRlXCJdLnZhbHVlID0gXCJcIjtcbiAgICAgICAgZm9ybVtcImNyZWF0ZS1mb3JtLXByaW9yaXR5XCJdLnZhbHVlID0gXCIxXCI7XG4gICAgICAgIGZvcm1bXCJjcmVhdGUtZm9ybS1wcm9qZWN0XCJdLnZhbHVlID0gXCJHZW5lcmFsXCI7XG4gICAgfSk7XG5cbiAgICBmb3JtV3JhcC5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xuXG4gICAgZm9ybVdyYXAuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIFxuICAgIGFuY2hvckRpdi5hcHBlbmRDaGlsZChmb3JtV3JhcCk7XG4gICAgXG4gICAgeEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcbiAgICAgICAgY2xvc2VGb3JtKCk7XG4gICAgfSk7XG4gICAgXG5cbn1cblxuZnVuY3Rpb24gb3BlbkZvcm0oKXtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI215Rm9ybVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xufVxuXG5mdW5jdGlvbiBjbG9zZUZvcm0oKXtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI215Rm9ybVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59XG5cbmZ1bmN0aW9uIGNsb3NlRXhwYW5kKCl7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNleHBhbmRXaW5kb3dcIikucmVtb3ZlKCk7XG59XG5cbmZ1bmN0aW9uIGxvYWRQcm9qZWN0KHByb2plY3RzLHByb2ope1xuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWNvbnRlbnRcIik7XG4gICAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGxldCBzdWJQcm9qZWN0QXJyYXkgPSBwcm9qLnJldHVybkFsbCgpO1xuICAgIGxldCBtYWluUHJvakFycmF5ID0gcHJvamVjdHMucmV0dXJuTWFpbigpLnJldHVybkFsbCgpO1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBtYWluUHJvakFycmF5Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBjb25zdCBwID0gbWFpblByb2pBcnJheVtpbmRleF07XG4gICAgICAgIGlmIChzdWJQcm9qZWN0QXJyYXkuaW5jbHVkZXMocCkpIHtcbiAgICAgICAgICAgIGxvYWRUb2RvKHAsaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbiAgICBjaGVja0V2ZW50QWRkZXIocHJvamVjdHMscHJvaik7XG4gICAgdHJhc2hFdmVudEFkZGVyKHByb2plY3RzLHByb2opO1xuICAgIFxufVxuXG5jb25zdCB0cmFzaEV2ZW50QWRkZXIgPSAocHJvamVjdHMscHJvaikgPT57XG4gICAgbGV0IHRyYXNoQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudHJhc2hcIik7XG4gICAgdHJhc2hCdG5zLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XG5cbiAgICAgICAgICAgIGxldCBpID0gZWxlbWVudC5jbG9zZXN0KFwiLnRvZG9cIikuZ2V0QXR0cmlidXRlKFwiaW5kZXhcIik7XG4gICAgICAgICAgICBwcm9qZWN0cy5yZXR1cm5NYWluKCkucmVtb3ZlVG9kbyhpKTtcbiAgICAgICAgICAgIGxvYWRQcm9qZWN0KHByb2plY3RzLHByb2opO1xuICAgICAgICAgICAgXG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG5jb25zdCBjaGVja0V2ZW50QWRkZXIgPSAocHJvamVjdHMscHJvaikgPT57XG4gICAgY29uc29sZS5sb2coXCJhZGRpbmcgY2hlY2tsaXN0ZW5lclwiKTtcbiAgICBsZXQgdHJhc2hCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jb21wbGV0ZVwiKTtcbiAgICB0cmFzaEJ0bnMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcbiAgICAgICAgICAgIGxldCBkb21UaXRsZSA9IGVsZW1lbnQuY2xvc2VzdChcIi50b2RvXCIpLmNoaWxkTm9kZXNbMV07XG4gICAgICAgICAgICBsZXQgaSA9IGVsZW1lbnQuY2xvc2VzdChcIi50b2RvXCIpLmdldEF0dHJpYnV0ZShcImluZGV4XCIpO1xuICAgICAgICAgICAgcHJvamVjdHMucmV0dXJuTWFpbigpLnRvZG9BdChpKS5zd2l0Y2hEb25lKCk7XG5cbiAgICAgICAgICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImNoZWNrZWRcIikpIHtcbiAgICAgICAgICAgICAgICBkb21UaXRsZS5jbGFzc0xpc3QucmVtb3ZlKFwiY2hlY2tlZFwiKTtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJjaGVja2VkXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJjaGVja2VkXCIpO1xuICAgICAgICAgICAgICAgIGRvbVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJjaGVja2VkXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cblxuY29uc3QgbG9hZEV4cGFuZFdpbmRvdyA9ICh0b2RvKSA9PntcbiAgICBsZXQgZXhwYW5kV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZXhwYW5kV3JhcC5pZCA9IFwiZXhwYW5kV2luZG93XCI7XG5cbiAgICBsZXQgZm9ybVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb3JtVGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xuICAgIGV4cGFuZFdyYXAuY2xhc3NMaXN0LmFkZChcInBvcHVwXCIpO1xuXG4gICAgbGV0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgbmFtZS50ZXh0Q29udGVudCA9IHRvZG8uZ2V0VGl0bGUoKTtcbiAgICBmb3JtVGl0bGUuYXBwZW5kQ2hpbGQobmFtZSk7XG5cbiAgICBsZXQgeEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgeEJ0bi5jbGFzc0xpc3QuYWRkKFwiY2xvc2VcIik7XG4gICAgeEJ0bi5zZXRBdHRyaWJ1dGUoXCJzcmNcIixcIi4uL3NyYy9pbWFnZXMvY2xvc2Uuc3ZnXCIpO1xuICAgIGZvcm1UaXRsZS5hcHBlbmRDaGlsZCh4QnRuKTtcblxuICAgIHhCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCk9PntcbiAgICAgICAgY2xvc2VFeHBhbmQoKVxuICAgIH0pO1xuXG5cbiAgICBsZXQgZGVzY3JpcHRpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRlc2NyaXB0aW9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWNvbnRhaW5lclwiKTtcblxuICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGRlc2NyaXB0aW9uLmlkID0gXCJleHBhbmQtZGVzY3JpcHRpb25cIjtcbiAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRvZG8uZ2V0RGVzY3JpcHRpb24oKTtcblxuICAgIGRlc2NyaXB0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuICAgIGV4cGFuZFdyYXAuYXBwZW5kQ2hpbGQoZm9ybVRpdGxlKTtcbiAgICBleHBhbmRXcmFwLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uQ29udGFpbmVyKTtcbiAgICBcbiAgICBhbmNob3JEaXYuYXBwZW5kQ2hpbGQoZXhwYW5kV3JhcCk7XG59XG5cbmNvbnN0IHJlbG9hZFByb2plY3RMaXN0ID0gKHByb2plY3RzKSA9PntcbiAgICBsZXQgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtbGlzdFwiKTtcbiAgICBwcm9qZWN0TGlzdC5pbm5lckhUTUwgPSBcIlwiO1xuICAgIHByb2plY3RzLnJldHVybkFsbCgpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IGVsZW1lbnQuZ2V0TmFtZSgpO1xuICAgICAgICBsaS5hcHBlbmQoYnV0dG9uKTtcbiAgICAgICAgcHJvamVjdExpc3QuYXBwZW5kKGxpKTtcblxuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCk9PntcbiAgICAgICAgICAgIGxvYWRQcm9qZWN0KHByb2plY3RzLHByb2plY3RzLmdldFByb2pCeU5hbWUoYnV0dG9uLnRleHRDb250ZW50KSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG5leHBvcnQge2xvYWRNYWluQXNzZXN0cywgbG9hZFRvZG8sIG9wZW5Gb3JtLCBjbG9zZUZvcm0sIGxvYWRQcm9qZWN0LCB0cmFzaEV2ZW50QWRkZXIsY2hlY2tFdmVudEFkZGVyICxsb2FkRXhwYW5kV2luZG93LHJlbG9hZFByb2plY3RMaXN0fSAgIiwiaW1wb3J0IHsgY3JlYXRlVG9kbyB9IGZyb20gXCIuL3RvZG9JdGVtXCI7XG5cbmNvbnN0IGNyZWF0ZVByb2plY3QgPSAoc3RyKT0+e1xuICAgIGxldCB0b2RvcyA9IFtdO1xuICAgIGxldCBuYW1lID0gc3RyO1xuXG4gICAgY29uc3QgYWRkVG9kbyA9ICh0b2RvKT0+e1xuICAgICAgICB0b2Rvcy5wdXNoKHRvZG8pO1xuICAgIH1cbiAgICBjb25zdCByZW1vdmVUb2RvID0gKGluZGV4KSA9PntcbiAgICAgICAgdG9kb3Muc3BsaWNlKGluZGV4LDEpO1xuICAgIH1cbiAgICBjb25zdCBnZXROYW1lID0gKCk9PntcbiAgICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfVxuICAgIGNvbnN0IHJldHVybkFsbCA9ICgpPT57XG4gICAgICAgIHJldHVybiB0b2RvcztcbiAgICB9XG4gICAgY29uc3QgdG9kb0F0ID0oaW5kZXgpID0+e1xuICAgICAgICByZXR1cm4gdG9kb3NbaW5kZXhdO1xuICAgIH1cbiAgICBjb25zdCB0b1N0cmluZyA9ICgpPT57XG4gICAgICAgIGxldCBzdHIgPSBcIlwiO1xuICAgICAgICB0b2Rvcy5mb3JFYWNoKHAgPT4ge1xuICAgICAgICAgICAgc3RyICs9IHAuZ2V0VGl0bGUoKTtcbiAgICAgICAgICAgIHN0ciArPSBcIiwgXCI7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuXG4gICAgcmV0dXJue2FkZFRvZG8scmVtb3ZlVG9kbyx0b1N0cmluZyxnZXROYW1lLHJldHVybkFsbCx0b2RvQXR9XG59XG5cbmNvbnN0IHByb2plY3RzTWFuYWdlciA9ICgpPT57XG4gICAgbGV0IHByb2plY3RzID0gW107XG5cbiAgICBjb25zdCBhZGRQcm9qID0gKHByb2opPT57XG4gICAgICAgIHByb2plY3RzLnB1c2gocHJvaik7XG4gICAgfVxuXG4gICAgY29uc3Qgcm1Qcm9qID0gKG5hbWUpID0+e1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcHJvamVjdHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9qID0gYXJyYXlbaW5kZXhdO1xuXG4gICAgICAgICAgICBpZiAocHJvai5nZXROYW1lKCkgPT09IG5hbWUpIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0cy5zcGxpY2UoaW5kZXgsMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgY29uc3QgZ2V0UHJvakJ5SW5kZXggPSAoaW5kZXgpPT57XG4gICAgICAgIGNvbnN0IHAgPSBwcm9qZWN0c1tpbmRleF07XG4gICAgICAgIHJldHVybiBwOyBcbiAgICB9XG5cbiAgICBjb25zdCBnZXRQcm9qQnlOYW1lID0gKG5hbWUpPT57XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBwcm9qZWN0cy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IHAgPSBwcm9qZWN0c1tpbmRleF07XG4gICAgICAgICAgICBpZiAocC5nZXROYW1lKCkgPT09IG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcDsgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByZXR1cm5BbGwgPSAoKT0+e1xuICAgICAgICByZXR1cm4gcHJvamVjdHM7XG4gICAgfVxuXG4gICAgY29uc3QgbGVuZ3RoID0gKCk9PntcbiAgICAgICAgcmV0dXJuIHByb2plY3RzLmxlbmd0aDtcbiAgICB9XG5cbiAgICBjb25zdCByZXR1cm5NYWluID0gKCk9PntcbiAgICAgICAgcmV0dXJuIHByb2plY3RzWzBdO1xuICAgIH1cblxuICAgIHJldHVybnthZGRQcm9qLHJtUHJvaixyZXR1cm5BbGwscmV0dXJuTWFpbixnZXRQcm9qQnlOYW1lLGxlbmd0aCxnZXRQcm9qQnlJbmRleH1cbn1cblxuZXhwb3J0IHtjcmVhdGVQcm9qZWN0LHByb2plY3RzTWFuYWdlcn0iLCJjb25zdCBjcmVhdGVUb2RvID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlLCBwcmlvcml0eSk9PntcbiAgICBsZXQgZG9uZSA9IGZhbHNlO1xuXG4gICAgY29uc3QgZ2V0VGl0bGUgPSAoKT0+e1xuICAgICAgICByZXR1cm4gdGl0bGU7XG4gICAgfTtcbiAgICBjb25zdCBnZXREZXNjcmlwdGlvbiA9ICgpPT57XG4gICAgICAgIHJldHVybiBkZXNjcmlwdGlvbjtcbiAgICB9O1xuICAgIGNvbnN0IGdldER1ZURhdGUgPSAoKT0+e1xuICAgICAgICByZXR1cm4gZHVlO1xuICAgIH07XG4gICAgY29uc3QgZ2V0UHJpb3JpdHkgPSAoKT0+e1xuICAgICAgICByZXR1cm4gcHJpb3JpdHk7XG4gICAgfTtcbiAgICBjb25zdCBpc0RvbmUgPSAoKT0+e1xuICAgICAgICByZXR1cm4gZG9uZTtcbiAgICB9XG4gICAgY29uc3Qgc3dpdGNoRG9uZSA9ICgpPT57XG4gICAgICAgIGRvbmUgPSAhZG9uZTtcbiAgICB9XG4gICAgY29uc3QgcmV0dXJuVG9kbyA9ICgpPT57XG4gICAgICAgIHJldHVybiB7dGl0bGUsZGVzY3JpcHRpb24sZHVlLHByaW9yaXR5LGRvbmV9O1xuICAgIH07XG4gICAgY29uc3QgdG9TdHJpbmcgPSAoKT0+e1xuICAgICAgICByZXR1cm4gYCR7cHJpb3JpdHl9ICR7dGl0bGV9ICAgICAgICAgJHtkdWV9IFxcbiAke2Rlc2NyaXB0aW9ufWBcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtnZXRUaXRsZSwgZ2V0RGVzY3JpcHRpb24sZ2V0RHVlRGF0ZSxnZXRQcmlvcml0eSx0b1N0cmluZyxyZXR1cm5Ub2RvLGlzRG9uZSxzd2l0Y2hEb25lfTtcbn1cblxuY29uc3QgY29weSA9IChUb0RvKT0+e1xuICAgIHJldHVybiBjcmVhdGVUb2RvKFRvRG8uZ2V0VGl0bGUoKSxUb0RvLmdldERlc2NyaXB0aW9uKCksVG9Eby5nZXREdWVEYXRlKCksVG9Eby5nZXRQcmlvcml0eSgpKTtcbn07XG5leHBvcnQge2NyZWF0ZVRvZG8sY29weX07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHtjcmVhdGVUb2RvfSBmcm9tIFwiLi90b2RvSXRlbS5qc1wiIFxuaW1wb3J0IHsgY3JlYXRlUHJvamVjdCxwcm9qZWN0c01hbmFnZXIgfSBmcm9tIFwiLi9wcm9qZWN0cy5qc1wiO1xuaW1wb3J0IHsgbG9hZE1haW5Bc3Nlc3RzLGNsb3NlRm9ybSwgbG9hZFByb2plY3QsIHJlbG9hZFByb2plY3RMaXN0LGxvYWRQcm9qZWN0U2VsZWN0b3J9IGZyb20gXCIuL2xvYWQuanNcIjtcbmltcG9ydCBjc3MgZnJvbSBcIi4vc3R5bGUuY3NzXCJcblxubGV0IHByb2plY3RzID0gcHJvamVjdHNNYW5hZ2VyKCk7XG5sZXQgbWFpbnByb2ogPSBjcmVhdGVQcm9qZWN0KFwiR2VuZXJhbFwiKTtcbnByb2plY3RzLmFkZFByb2oobWFpbnByb2opO1xuXG4vKmxldCBzZWNvbmRQcm9qID0gY3JlYXRlUHJvamVjdChcIlNwcmluZyBjbGVhbmluZ1wiKTtcbmxldCB0aGlyZFByb2ogPSBjcmVhdGVQcm9qZWN0KFwiSG91c2UgcmVub3ZhdGlvblwiKTtcbnByb2plY3RzLmFkZFByb2oobWFpbnByb2opO1xucHJvamVjdHMuYWRkUHJvaihzZWNvbmRQcm9qKTtcbnByb2plY3RzLmFkZFByb2oodGhpcmRQcm9qKTtcblxubGV0IHRvZG8xID0gY3JlYXRlVG9kbyhcImJ1eSBtaWxrXCIsXCJOZWVkIHRvIGdldCBjb3cgbWlsa1wiLFwidG9tb3Jyb3cgU0lLRVwiLDMpO1xubGV0IHRvZG8yID0gY3JlYXRlVG9kbyhcImNsZWFuIHNoZWRcIixcImNsZWFuIHNoZWQgaW4gdGhlIHlhZFwiLFwidG9tb3Jyb3cgU0lLRVwiLDEpO1xubGV0IHRvZG8zID0gY3JlYXRlVG9kbyhcImJ1eSBoYW1tZXIgXCIsXCJidXkgdG9vbHMgZnJvbSBob21lIGRlcG9cIixcInRvbW9ycm93IFNJS0VcIiwyKTtcbmxldCB0b2RvNCA9IGNyZWF0ZVRvZG8oXCJidXkgbmFpbHNcIixcImJ1eSB0b29scyBmcm9tIGhvbWUgZGVwb1wiLFwidG9tb3Jyb3cgU0lLRVwiLDIpO1xuXG5tYWlucHJvai5hZGRUb2RvKHRvZG8xKTtcbm1haW5wcm9qLmFkZFRvZG8odG9kbzIpO1xubWFpbnByb2ouYWRkVG9kbyh0b2RvMyk7XG5tYWlucHJvai5hZGRUb2RvKHRvZG80KTtcblxuc2Vjb25kUHJvai5hZGRUb2RvKHRvZG8yKTtcblxudGhpcmRQcm9qLmFkZFRvZG8odG9kbzMpO1xudGhpcmRQcm9qLmFkZFRvZG8odG9kbzQpOyovXG5cbmxvYWRNYWluQXNzZXN0cyhwcm9qZWN0cyk7XG5yZWxvYWRQcm9qZWN0TGlzdChwcm9qZWN0cyk7XG5cbmxldCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLWNvbnRhaW5lclwiKTtcbmxldCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWNvbnRlbnRcIik7XG5cblxubG9hZFByb2plY3QocHJvamVjdHMscHJvamVjdHMucmV0dXJuTWFpbigpKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=