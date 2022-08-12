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
___CSS_LOADER_EXPORT___.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\ninput:focus,\nselect:focus,\ntextarea:focus,\nbutton:focus {\n    outline: none;\n}\n\n#content{\n    font-size: 1.5em;\n    display: grid;\n\n    grid-template-columns: 1fr 4fr;\n    grid-template-rows: 1fr 4fr;\n    grid-template-areas: \"logo    logo\" \n                        \" sidebar main\";\n\n}\n:root{\n    --cyan-50 :#e0f7fa;\n    --cyan-100:#b2ebf2;\n    --cyan-200:#80deea;\n    --cyan-300:#4dd0e1;\n    --cyan-400:#26c6da;\n    --cyan-500:#00bcd4;\n    --cyan-600:#00acc1;\n    --cyan-700:#0097a7;\n    --cyan-800:#00838f;\n    --cyan-900:#006064;\n}\n#content{\n    width: 100%;\n    height: 100vh;\n    font-family: 'Roboto','Courier New', Courier, monospace;\n}\ntextarea{\n    font-family: 'Roboto','Courier New', Courier, monospace;\n}\n.logo-wrap{\n    grid-area: logo;\n    background-color: var(--cyan-300);\n    display: flex;\n    align-items: center;\n\n    color: white;\n}\n.logo{\n    font-family: 'PT Sans', sans-serif;\n    font-size: 2em;\n    margin-left: 16px;\n}\n\n.sidebar{\n    grid-area: sidebar;\n    background-color: var(--cyan-200);\n}\n.main-content{\n    grid-area: main;\n    padding-top: 32px;\n    background-color: var(--cyan-50);\n    overflow: scroll;\n    overflow-y:auto;\n    overflow-x:auto;\n}\n.sidebar>ul{\n    margin-top: 32px;\n    padding-left: 16px;\n}\n.sidebar li{\n    margin-bottom: 16px;\n\n    width: 80%;\n}\n.sidebar li > button{\n    border: none;\n    background-color: #0097a7;\n    width: 100%;\n\n    text-align: left;\n    font-size: 0.75em;\n    padding: 0.5em;\n    font-weight: 600;\n}\n#project-list{\n    width: 100%;\n    \n    height: 150px;\n\n    overflow: scroll;\n    overflow-x: auto;\n    overflow-y: auto;\n}\n#project-list > li{\n    font-size: 0.75em;\n    width: 100%;\n    margin:0;\n}\n#project-list > li > button{\n    background-color: transparent;\n}\n#project-list > li > button:hover{\n    background-color: var(--cyan-900);\n    color: white;\n}\n#add-project{\n    width: 100%;\n    display: flex;\n    flex-flow: column;\n}\n.btn-div{\n    display: flex;\n    justify-content: space-between;\n    margin-top: 8px;\n}\n#submit-proj{\n    background-color: rgb(62, 212, 62);\n}\n#cancel-proj{\n    background-color: rgb(229, 14, 14);\n}\n#project-add-name{\n    width: 97%;\n    font-size: 0.75em;\n}\n.error{\n    color: red;\n    font-size: 0.6em;\n    padding-top: 0.4em;\n}\n\n#submit-proj,\n#cancel-proj{\n    font-weight: 600;\n    width: 45%;\n    font-size: 0.75em;\n    border: none;\n    padding: 0.5em;\n    border-radius: 0.25em;\n}\n.todo:not(:last-child){\n    margin-bottom: 0.5em;\n}\n.todo{\n    display: flex;\n    align-items: center;\n    width: 90%;\n    margin-inline: auto;\n    background-color: var(--cyan-100);\n    padding: 0.75em;\n    font-weight: 100;\n\n    border-top-right-radius: 12px;\n    border-bottom-right-radius: 12px;\n}\n\n.todo[priority = \"1\"]{\n    border-left: 3px solid green;\n}\n.todo[priority = \"2\"]{\n    border-left: 3px solid yellow;\n}\n.todo[priority = \"3\"]{\n    border-left: 3px solid red;\n}\n\n.complete{\n    width: calc(1em - 6px);\n    height: calc(1em - 6px);\n\n    border: 3px solid var(--cyan-600);\n    border-radius: 6px;\n    margin-right: 16px;\n}\n\n.complete.checked{\n    background-color: var(--cyan-800);\n}\n.todo > .title.checked{\n    text-decoration:line-through;\n    color: gray;\n}\n.todo > .title{\n    margin-right: auto;\n}\n.todo > .date,\n.todo > .expand,\n.todo > .edit{\n    margin-right: 24px;\n}\n.todo > .trash:hover,\n.todo > .expand:hover,\n.todo > .complete:hover,\n.todo > .edit:hover,\nimg.close,\nbutton:hover,\nbutton#submit{\n    cursor: pointer;\n}\n.sidebar{\n    display: flex;\n    flex-flow: column;\n    justify-content: space-between;\n}\n.add{\n    color: white;\n    font-size: 2.5em;\n    background-color: var(--cyan-600);\n    border-radius: 40px;\n    \n    padding: 8px;\n    margin: 16px;\n\n    width: 48px;\n    height: 48px;\n    \n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n}\n\n.add:hover{\n    cursor: pointer;\n    box-shadow: 0px 3px 5px rgb(0, 0, 0);\n}\n.popup{\n    position:absolute;\n\n    margin-inline: auto;\n    margin-block: auto;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    text-align: center;\n\n    background-color: white;\n    border: none;\n\n    max-width: 600px;\n    max-height: 370px;\n    \n    border-radius: 16px;\n}\n.form-container{\n    height: calc(100% - 1.5em - 8px);\n    width: 95%;\n    margin-inline: auto;\n}\n#myForm ul{\n    display: flex;\n    flex-flow: column;\n    height: 100%;\n\n    justify-content: space-between;\n}\n#new-title{\n    width: 100%;\n    font-size: 1em;\n    background-color: white;\n\n    border: none;\n    margin-block: 8px;\n}\n#new-title:focus{\n    background-color: white;\n}\n#new-description{\n    font-size: 1em;\n    width: 100%;\n\n    height: 6em;\n    resize: none;\n    border: none;\n}\n#myForm>.title,\n#expandWindow > .title{\n    border-top-left-radius: 16px;\n    border-top-right-radius: 16px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding-inline: 3%;\n    background-color: var(--cyan-400);\n    height: 1.5em;\n}\n#myForm > .title > img.close,\n#expandWindow > .title > img.close{\n    width: 16px;\n}\n\nli.picker-field{\n    \n    display: flex;\n    flex-flow: column;\n\n    align-items: flex-start;\n}\n#expand-description{\n    text-align: left;\n    margin-top: 16px;\n}\n\n#submit{\n    position: absolute;\n    bottom: 8px;\n    right: calc(5%);\n    border: none;\n    font-size: 0.75em;\n    background-color: var(--cyan-500);\n    color: white;\n    padding: 0.5em;\n    border-radius: 0.25em;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;CAGC;;AAKD;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;AACA,gDAAgD;AAChD;;CAEC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,gBAAgB;AACjB;AACA;CACC,YAAY;AACb;AACA;;CAEC,WAAW;CACX,aAAa;AACd;AACA;CACC,yBAAyB;CACzB,iBAAiB;AAClB;AACA;;;;IAII,aAAa;AACjB;;AAEA;IACI,gBAAgB;IAChB,aAAa;;IAEb,8BAA8B;IAC9B,2BAA2B;IAC3B;uCACmC;;AAEvC;AACA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;AACtB;AACA;IACI,WAAW;IACX,aAAa;IACb,uDAAuD;AAC3D;AACA;IACI,uDAAuD;AAC3D;AACA;IACI,eAAe;IACf,iCAAiC;IACjC,aAAa;IACb,mBAAmB;;IAEnB,YAAY;AAChB;AACA;IACI,kCAAkC;IAClC,cAAc;IACd,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,iCAAiC;AACrC;AACA;IACI,eAAe;IACf,iBAAiB;IACjB,gCAAgC;IAChC,gBAAgB;IAChB,eAAe;IACf,eAAe;AACnB;AACA;IACI,gBAAgB;IAChB,kBAAkB;AACtB;AACA;IACI,mBAAmB;;IAEnB,UAAU;AACd;AACA;IACI,YAAY;IACZ,yBAAyB;IACzB,WAAW;;IAEX,gBAAgB;IAChB,iBAAiB;IACjB,cAAc;IACd,gBAAgB;AACpB;AACA;IACI,WAAW;;IAEX,aAAa;;IAEb,gBAAgB;IAChB,gBAAgB;IAChB,gBAAgB;AACpB;AACA;IACI,iBAAiB;IACjB,WAAW;IACX,QAAQ;AACZ;AACA;IACI,6BAA6B;AACjC;AACA;IACI,iCAAiC;IACjC,YAAY;AAChB;AACA;IACI,WAAW;IACX,aAAa;IACb,iBAAiB;AACrB;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,eAAe;AACnB;AACA;IACI,kCAAkC;AACtC;AACA;IACI,kCAAkC;AACtC;AACA;IACI,UAAU;IACV,iBAAiB;AACrB;AACA;IACI,UAAU;IACV,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;;IAEI,gBAAgB;IAChB,UAAU;IACV,iBAAiB;IACjB,YAAY;IACZ,cAAc;IACd,qBAAqB;AACzB;AACA;IACI,oBAAoB;AACxB;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,UAAU;IACV,mBAAmB;IACnB,iCAAiC;IACjC,eAAe;IACf,gBAAgB;;IAEhB,6BAA6B;IAC7B,gCAAgC;AACpC;;AAEA;IACI,4BAA4B;AAChC;AACA;IACI,6BAA6B;AACjC;AACA;IACI,0BAA0B;AAC9B;;AAEA;IACI,sBAAsB;IACtB,uBAAuB;;IAEvB,iCAAiC;IACjC,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,iCAAiC;AACrC;AACA;IACI,4BAA4B;IAC5B,WAAW;AACf;AACA;IACI,kBAAkB;AACtB;AACA;;;IAGI,kBAAkB;AACtB;AACA;;;;;;;IAOI,eAAe;AACnB;AACA;IACI,aAAa;IACb,iBAAiB;IACjB,8BAA8B;AAClC;AACA;IACI,YAAY;IACZ,gBAAgB;IAChB,iCAAiC;IACjC,mBAAmB;;IAEnB,YAAY;IACZ,YAAY;;IAEZ,WAAW;IACX,YAAY;;IAEZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;;AAEvB;;AAEA;IACI,eAAe;IACf,oCAAoC;AACxC;AACA;IACI,iBAAiB;;IAEjB,mBAAmB;IACnB,kBAAkB;IAClB,OAAO;IACP,QAAQ;IACR,MAAM;IACN,SAAS;IACT,kBAAkB;;IAElB,uBAAuB;IACvB,YAAY;;IAEZ,gBAAgB;IAChB,iBAAiB;;IAEjB,mBAAmB;AACvB;AACA;IACI,gCAAgC;IAChC,UAAU;IACV,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,iBAAiB;IACjB,YAAY;;IAEZ,8BAA8B;AAClC;AACA;IACI,WAAW;IACX,cAAc;IACd,uBAAuB;;IAEvB,YAAY;IACZ,iBAAiB;AACrB;AACA;IACI,uBAAuB;AAC3B;AACA;IACI,cAAc;IACd,WAAW;;IAEX,WAAW;IACX,YAAY;IACZ,YAAY;AAChB;AACA;;IAEI,4BAA4B;IAC5B,6BAA6B;IAC7B,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,kBAAkB;IAClB,iCAAiC;IACjC,aAAa;AACjB;AACA;;IAEI,WAAW;AACf;;AAEA;;IAEI,aAAa;IACb,iBAAiB;;IAEjB,uBAAuB;AAC3B;AACA;IACI,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,eAAe;IACf,YAAY;IACZ,iBAAiB;IACjB,iCAAiC;IACjC,YAAY;IACZ,cAAc;IACd,qBAAqB;AACzB","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\n@import url('https://fonts.googleapis.com/css2?family=PT+Sans:wght@700&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400&display=swap');\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\ninput:focus,\nselect:focus,\ntextarea:focus,\nbutton:focus {\n    outline: none;\n}\n\n#content{\n    font-size: 1.5em;\n    display: grid;\n\n    grid-template-columns: 1fr 4fr;\n    grid-template-rows: 1fr 4fr;\n    grid-template-areas: \"logo    logo\" \n                        \" sidebar main\";\n\n}\n:root{\n    --cyan-50 :#e0f7fa;\n    --cyan-100:#b2ebf2;\n    --cyan-200:#80deea;\n    --cyan-300:#4dd0e1;\n    --cyan-400:#26c6da;\n    --cyan-500:#00bcd4;\n    --cyan-600:#00acc1;\n    --cyan-700:#0097a7;\n    --cyan-800:#00838f;\n    --cyan-900:#006064;\n}\n#content{\n    width: 100%;\n    height: 100vh;\n    font-family: 'Roboto','Courier New', Courier, monospace;\n}\ntextarea{\n    font-family: 'Roboto','Courier New', Courier, monospace;\n}\n.logo-wrap{\n    grid-area: logo;\n    background-color: var(--cyan-300);\n    display: flex;\n    align-items: center;\n\n    color: white;\n}\n.logo{\n    font-family: 'PT Sans', sans-serif;\n    font-size: 2em;\n    margin-left: 16px;\n}\n\n.sidebar{\n    grid-area: sidebar;\n    background-color: var(--cyan-200);\n}\n.main-content{\n    grid-area: main;\n    padding-top: 32px;\n    background-color: var(--cyan-50);\n    overflow: scroll;\n    overflow-y:auto;\n    overflow-x:auto;\n}\n.sidebar>ul{\n    margin-top: 32px;\n    padding-left: 16px;\n}\n.sidebar li{\n    margin-bottom: 16px;\n\n    width: 80%;\n}\n.sidebar li > button{\n    border: none;\n    background-color: #0097a7;\n    width: 100%;\n\n    text-align: left;\n    font-size: 0.75em;\n    padding: 0.5em;\n    font-weight: 600;\n}\n#project-list{\n    width: 100%;\n    \n    height: 150px;\n\n    overflow: scroll;\n    overflow-x: auto;\n    overflow-y: auto;\n}\n#project-list > li{\n    font-size: 0.75em;\n    width: 100%;\n    margin:0;\n}\n#project-list > li > button{\n    background-color: transparent;\n}\n#project-list > li > button:hover{\n    background-color: var(--cyan-900);\n    color: white;\n}\n#add-project{\n    width: 100%;\n    display: flex;\n    flex-flow: column;\n}\n.btn-div{\n    display: flex;\n    justify-content: space-between;\n    margin-top: 8px;\n}\n#submit-proj{\n    background-color: rgb(62, 212, 62);\n}\n#cancel-proj{\n    background-color: rgb(229, 14, 14);\n}\n#project-add-name{\n    width: 97%;\n    font-size: 0.75em;\n}\n.error{\n    color: red;\n    font-size: 0.6em;\n    padding-top: 0.4em;\n}\n\n#submit-proj,\n#cancel-proj{\n    font-weight: 600;\n    width: 45%;\n    font-size: 0.75em;\n    border: none;\n    padding: 0.5em;\n    border-radius: 0.25em;\n}\n.todo:not(:last-child){\n    margin-bottom: 0.5em;\n}\n.todo{\n    display: flex;\n    align-items: center;\n    width: 90%;\n    margin-inline: auto;\n    background-color: var(--cyan-100);\n    padding: 0.75em;\n    font-weight: 100;\n\n    border-top-right-radius: 12px;\n    border-bottom-right-radius: 12px;\n}\n\n.todo[priority = \"1\"]{\n    border-left: 3px solid green;\n}\n.todo[priority = \"2\"]{\n    border-left: 3px solid yellow;\n}\n.todo[priority = \"3\"]{\n    border-left: 3px solid red;\n}\n\n.complete{\n    width: calc(1em - 6px);\n    height: calc(1em - 6px);\n\n    border: 3px solid var(--cyan-600);\n    border-radius: 6px;\n    margin-right: 16px;\n}\n\n.complete.checked{\n    background-color: var(--cyan-800);\n}\n.todo > .title.checked{\n    text-decoration:line-through;\n    color: gray;\n}\n.todo > .title{\n    margin-right: auto;\n}\n.todo > .date,\n.todo > .expand,\n.todo > .edit{\n    margin-right: 24px;\n}\n.todo > .trash:hover,\n.todo > .expand:hover,\n.todo > .complete:hover,\n.todo > .edit:hover,\nimg.close,\nbutton:hover,\nbutton#submit{\n    cursor: pointer;\n}\n.sidebar{\n    display: flex;\n    flex-flow: column;\n    justify-content: space-between;\n}\n.add{\n    color: white;\n    font-size: 2.5em;\n    background-color: var(--cyan-600);\n    border-radius: 40px;\n    \n    padding: 8px;\n    margin: 16px;\n\n    width: 48px;\n    height: 48px;\n    \n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n}\n\n.add:hover{\n    cursor: pointer;\n    box-shadow: 0px 3px 5px rgb(0, 0, 0);\n}\n.popup{\n    position:absolute;\n\n    margin-inline: auto;\n    margin-block: auto;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    text-align: center;\n\n    background-color: white;\n    border: none;\n\n    max-width: 600px;\n    max-height: 370px;\n    \n    border-radius: 16px;\n}\n.form-container{\n    height: calc(100% - 1.5em - 8px);\n    width: 95%;\n    margin-inline: auto;\n}\n#myForm ul{\n    display: flex;\n    flex-flow: column;\n    height: 100%;\n\n    justify-content: space-between;\n}\n#new-title{\n    width: 100%;\n    font-size: 1em;\n    background-color: white;\n\n    border: none;\n    margin-block: 8px;\n}\n#new-title:focus{\n    background-color: white;\n}\n#new-description{\n    font-size: 1em;\n    width: 100%;\n\n    height: 6em;\n    resize: none;\n    border: none;\n}\n#myForm>.title,\n#expandWindow > .title{\n    border-top-left-radius: 16px;\n    border-top-right-radius: 16px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding-inline: 3%;\n    background-color: var(--cyan-400);\n    height: 1.5em;\n}\n#myForm > .title > img.close,\n#expandWindow > .title > img.close{\n    width: 16px;\n}\n\nli.picker-field{\n    \n    display: flex;\n    flex-flow: column;\n\n    align-items: flex-start;\n}\n#expand-description{\n    text-align: left;\n    margin-top: 16px;\n}\n\n#submit{\n    position: absolute;\n    bottom: 8px;\n    right: calc(5%);\n    border: none;\n    font-size: 0.75em;\n    background-color: var(--cyan-500);\n    color: white;\n    padding: 0.5em;\n    border-radius: 0.25em;\n}"],"sourceRoot":""}]);
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
    projectLabel.textContent = "P   roject:";
    let projectInput = document.createElement("select");
    projectInput.setAttribute("name","create-form-poject");
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

mainproj = (0,_projects_js__WEBPACK_IMPORTED_MODULE_1__.createProject)("homework");
projects.addProj(mainproj);

mainproj = (0,_projects_js__WEBPACK_IMPORTED_MODULE_1__.createProject)("Chores");
projects.addProj(mainproj);

mainproj = (0,_projects_js__WEBPACK_IMPORTED_MODULE_1__.createProject)("Bills");
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

console.log(form["create-form-project"].value);

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
        (0,_load_js__WEBPACK_IMPORTED_MODULE_2__.reloadProjectList)(projects);
    }
});

(0,_load_js__WEBPACK_IMPORTED_MODULE_2__.loadProject)(projects,projects.returnMain());
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLHdCQUF3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QUFXLDJEQUFhO0FBQ3hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSx5QkFBeUI7O0FBRXpCLHlEQUFlO0FBQ2YsMkRBQWlCOztBQUVqQjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix3REFBVTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHFEQUFXO0FBQ3ZCO0FBQ0E7QUFDQSxRQUFRLG1EQUFTO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0IsMkRBQWE7QUFDckM7QUFDQSxRQUFRLDJEQUFpQjtBQUN6QjtBQUNBLENBQUM7O0FBRUQscURBQVcsaUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9sb2FkLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3RvZG9JdGVtLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UFQrU2Fuczp3Z2h0QDcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEAxMDA7MzAwOzQwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLCB1bCB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSwgcSB7XFxuXFx0cXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuXFx0Y29udGVudDogJyc7XFxuXFx0Y29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxufVxcbmlucHV0OmZvY3VzLFxcbnNlbGVjdDpmb2N1cyxcXG50ZXh0YXJlYTpmb2N1cyxcXG5idXR0b246Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4jY29udGVudHtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG5cXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA0ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJsb2dvICAgIGxvZ29cXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgIFxcXCIgc2lkZWJhciBtYWluXFxcIjtcXG5cXG59XFxuOnJvb3R7XFxuICAgIC0tY3lhbi01MCA6I2UwZjdmYTtcXG4gICAgLS1jeWFuLTEwMDojYjJlYmYyO1xcbiAgICAtLWN5YW4tMjAwOiM4MGRlZWE7XFxuICAgIC0tY3lhbi0zMDA6IzRkZDBlMTtcXG4gICAgLS1jeWFuLTQwMDojMjZjNmRhO1xcbiAgICAtLWN5YW4tNTAwOiMwMGJjZDQ7XFxuICAgIC0tY3lhbi02MDA6IzAwYWNjMTtcXG4gICAgLS1jeWFuLTcwMDojMDA5N2E3O1xcbiAgICAtLWN5YW4tODAwOiMwMDgzOGY7XFxuICAgIC0tY3lhbi05MDA6IzAwNjA2NDtcXG59XFxuI2NvbnRlbnR7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbn1cXG50ZXh0YXJlYXtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG59XFxuLmxvZ28td3JhcHtcXG4gICAgZ3JpZC1hcmVhOiBsb2dvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jeWFuLTMwMCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmxvZ297XFxuICAgIGZvbnQtZmFtaWx5OiAnUFQgU2FucycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcXG59XFxuXFxuLnNpZGViYXJ7XFxuICAgIGdyaWQtYXJlYTogc2lkZWJhcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3lhbi0yMDApO1xcbn1cXG4ubWFpbi1jb250ZW50e1xcbiAgICBncmlkLWFyZWE6IG1haW47XFxuICAgIHBhZGRpbmctdG9wOiAzMnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jeWFuLTUwKTtcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gICAgb3ZlcmZsb3cteTphdXRvO1xcbiAgICBvdmVyZmxvdy14OmF1dG87XFxufVxcbi5zaWRlYmFyPnVse1xcbiAgICBtYXJnaW4tdG9wOiAzMnB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XFxufVxcbi5zaWRlYmFyIGxpe1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcblxcbiAgICB3aWR0aDogODAlO1xcbn1cXG4uc2lkZWJhciBsaSA+IGJ1dHRvbntcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5N2E3O1xcbiAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgZm9udC1zaXplOiAwLjc1ZW07XFxuICAgIHBhZGRpbmc6IDAuNWVtO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4jcHJvamVjdC1saXN0e1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgXFxuICAgIGhlaWdodDogMTUwcHg7XFxuXFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxuICAgIG92ZXJmbG93LXg6IGF1dG87XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxufVxcbiNwcm9qZWN0LWxpc3QgPiBsaXtcXG4gICAgZm9udC1zaXplOiAwLjc1ZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW46MDtcXG59XFxuI3Byb2plY3QtbGlzdCA+IGxpID4gYnV0dG9ue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuI3Byb2plY3QtbGlzdCA+IGxpID4gYnV0dG9uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jeWFuLTkwMCk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuI2FkZC1wcm9qZWN0e1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW47XFxufVxcbi5idG4tZGl2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1hcmdpbi10b3A6IDhweDtcXG59XFxuI3N1Ym1pdC1wcm9qe1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjIsIDIxMiwgNjIpO1xcbn1cXG4jY2FuY2VsLXByb2p7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjksIDE0LCAxNCk7XFxufVxcbiNwcm9qZWN0LWFkZC1uYW1le1xcbiAgICB3aWR0aDogOTclO1xcbiAgICBmb250LXNpemU6IDAuNzVlbTtcXG59XFxuLmVycm9ye1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICBmb250LXNpemU6IDAuNmVtO1xcbiAgICBwYWRkaW5nLXRvcDogMC40ZW07XFxufVxcblxcbiNzdWJtaXQtcHJvaixcXG4jY2FuY2VsLXByb2p7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIHdpZHRoOiA0NSU7XFxuICAgIGZvbnQtc2l6ZTogMC43NWVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDAuNWVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XFxufVxcbi50b2RvOm5vdCg6bGFzdC1jaGlsZCl7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xcbn1cXG4udG9kb3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgbWFyZ2luLWlubGluZTogYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3lhbi0xMDApO1xcbiAgICBwYWRkaW5nOiAwLjc1ZW07XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuXFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMnB4O1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTJweDtcXG59XFxuXFxuLnRvZG9bcHJpb3JpdHkgPSBcXFwiMVxcXCJde1xcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkIGdyZWVuO1xcbn1cXG4udG9kb1twcmlvcml0eSA9IFxcXCIyXFxcIl17XFxuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgeWVsbG93O1xcbn1cXG4udG9kb1twcmlvcml0eSA9IFxcXCIzXFxcIl17XFxuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgcmVkO1xcbn1cXG5cXG4uY29tcGxldGV7XFxuICAgIHdpZHRoOiBjYWxjKDFlbSAtIDZweCk7XFxuICAgIGhlaWdodDogY2FsYygxZW0gLSA2cHgpO1xcblxcbiAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1jeWFuLTYwMCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xcbn1cXG5cXG4uY29tcGxldGUuY2hlY2tlZHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3lhbi04MDApO1xcbn1cXG4udG9kbyA+IC50aXRsZS5jaGVja2Vke1xcbiAgICB0ZXh0LWRlY29yYXRpb246bGluZS10aHJvdWdoO1xcbiAgICBjb2xvcjogZ3JheTtcXG59XFxuLnRvZG8gPiAudGl0bGV7XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuLnRvZG8gPiAuZGF0ZSxcXG4udG9kbyA+IC5leHBhbmQsXFxuLnRvZG8gPiAuZWRpdHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xcbn1cXG4udG9kbyA+IC50cmFzaDpob3ZlcixcXG4udG9kbyA+IC5leHBhbmQ6aG92ZXIsXFxuLnRvZG8gPiAuY29tcGxldGU6aG92ZXIsXFxuLnRvZG8gPiAuZWRpdDpob3ZlcixcXG5pbWcuY2xvc2UsXFxuYnV0dG9uOmhvdmVyLFxcbmJ1dHRvbiNzdWJtaXR7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnNpZGViYXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5hZGR7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAyLjVlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3lhbi02MDApO1xcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xcbiAgICBcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBtYXJnaW46IDE2cHg7XFxuXFxuICAgIHdpZHRoOiA0OHB4O1xcbiAgICBoZWlnaHQ6IDQ4cHg7XFxuICAgIFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG59XFxuXFxuLmFkZDpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDVweCByZ2IoMCwgMCwgMCk7XFxufVxcbi5wb3B1cHtcXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XFxuXFxuICAgIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxuICAgIG1hcmdpbi1ibG9jazogYXV0bztcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuXFxuICAgIG1heC13aWR0aDogNjAwcHg7XFxuICAgIG1heC1oZWlnaHQ6IDM3MHB4O1xcbiAgICBcXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcXG59XFxuLmZvcm0tY29udGFpbmVye1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDEuNWVtIC0gOHB4KTtcXG4gICAgd2lkdGg6IDk1JTtcXG4gICAgbWFyZ2luLWlubGluZTogYXV0bztcXG59XFxuI215Rm9ybSB1bHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW47XFxuICAgIGhlaWdodDogMTAwJTtcXG5cXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4jbmV3LXRpdGxle1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1zaXplOiAxZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcblxcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG1hcmdpbi1ibG9jazogOHB4O1xcbn1cXG4jbmV3LXRpdGxlOmZvY3Vze1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuI25ldy1kZXNjcmlwdGlvbntcXG4gICAgZm9udC1zaXplOiAxZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICBoZWlnaHQ6IDZlbTtcXG4gICAgcmVzaXplOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcbiNteUZvcm0+LnRpdGxlLFxcbiNleHBhbmRXaW5kb3cgPiAudGl0bGV7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE2cHg7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNnB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmctaW5saW5lOiAzJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3lhbi00MDApO1xcbiAgICBoZWlnaHQ6IDEuNWVtO1xcbn1cXG4jbXlGb3JtID4gLnRpdGxlID4gaW1nLmNsb3NlLFxcbiNleHBhbmRXaW5kb3cgPiAudGl0bGUgPiBpbWcuY2xvc2V7XFxuICAgIHdpZHRoOiAxNnB4O1xcbn1cXG5cXG5saS5waWNrZXItZmllbGR7XFxuICAgIFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG5cXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcbiNleHBhbmQtZGVzY3JpcHRpb257XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIG1hcmdpbi10b3A6IDE2cHg7XFxufVxcblxcbiNzdWJtaXR7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiA4cHg7XFxuICAgIHJpZ2h0OiBjYWxjKDUlKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IDAuNzVlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3lhbi01MDApO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDAuNWVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztDQUdDOztBQUtEOzs7Ozs7Ozs7Ozs7O0NBYUMsU0FBUztDQUNULFVBQVU7Q0FDVixTQUFTO0NBQ1QsZUFBZTtDQUNmLGFBQWE7Q0FDYix3QkFBd0I7QUFDekI7QUFDQSxnREFBZ0Q7QUFDaEQ7O0NBRUMsY0FBYztBQUNmO0FBQ0E7Q0FDQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsWUFBWTtBQUNiO0FBQ0E7O0NBRUMsV0FBVztDQUNYLGFB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QkFBbUI7O0FBRXZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLG9DQUFvQztBQUN4QztBQUNBO0lBQ0ksaUJBQWlCOztJQUVqQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxRQUFRO0lBQ1IsTUFBTTtJQUNOLFNBQVM7SUFDVCxrQkFBa0I7O0lBRWxCLHVCQUF1QjtJQUN2QixZQUFZOztJQUVaLGdCQUFnQjtJQUNoQixpQkFBaUI7O0lBRWpCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksZ0NBQWdDO0lBQ2hDLFVBQVU7SUFDVixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsWUFBWTs7SUFFWiw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2QsdUJBQXVCOztJQUV2QixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGNBQWM7SUFDZCxXQUFXOztJQUVYLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtBQUNoQjtBQUNBOztJQUVJLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsa0JBQWtCO0lBQ2xCLGlDQUFpQztJQUNqQyxhQUFhO0FBQ2pCO0FBQ0E7O0lBRUksV0FBVztBQUNmOztBQUVBOztJQUVJLGFBQWE7SUFDYixpQkFBaUI7O0lBRWpCLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZUFBZTtJQUNmLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUNBQWlDO0lBQ2pDLFlBQVk7SUFDWixjQUFjO0lBQ2QscUJBQXFCO0FBQ3pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5cXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QVCtTYW5zOndnaHRANzAwJmRpc3BsYXk9c3dhcCcpO1xcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDEwMDszMDA7NDAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCwgdWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsIHEge1xcblxcdHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5pbnB1dDpmb2N1cyxcXG5zZWxlY3Q6Zm9jdXMsXFxudGV4dGFyZWE6Zm9jdXMsXFxuYnV0dG9uOmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuI2NvbnRlbnR7XFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNGZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwibG9nbyAgICBsb2dvXFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICBcXFwiIHNpZGViYXIgbWFpblxcXCI7XFxuXFxufVxcbjpyb290e1xcbiAgICAtLWN5YW4tNTAgOiNlMGY3ZmE7XFxuICAgIC0tY3lhbi0xMDA6I2IyZWJmMjtcXG4gICAgLS1jeWFuLTIwMDojODBkZWVhO1xcbiAgICAtLWN5YW4tMzAwOiM0ZGQwZTE7XFxuICAgIC0tY3lhbi00MDA6IzI2YzZkYTtcXG4gICAgLS1jeWFuLTUwMDojMDBiY2Q0O1xcbiAgICAtLWN5YW4tNjAwOiMwMGFjYzE7XFxuICAgIC0tY3lhbi03MDA6IzAwOTdhNztcXG4gICAgLS1jeWFuLTgwMDojMDA4MzhmO1xcbiAgICAtLWN5YW4tOTAwOiMwMDYwNjQ7XFxufVxcbiNjb250ZW50e1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG59XFxudGV4dGFyZWF7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxufVxcbi5sb2dvLXdyYXB7XFxuICAgIGdyaWQtYXJlYTogbG9nbztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3lhbi0zMDApO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbi5sb2dve1xcbiAgICBmb250LWZhbWlseTogJ1BUIFNhbnMnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XFxufVxcblxcbi5zaWRlYmFye1xcbiAgICBncmlkLWFyZWE6IHNpZGViYXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN5YW4tMjAwKTtcXG59XFxuLm1haW4tY29udGVudHtcXG4gICAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgICBwYWRkaW5nLXRvcDogMzJweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3lhbi01MCk7XFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxuICAgIG92ZXJmbG93LXk6YXV0bztcXG4gICAgb3ZlcmZsb3cteDphdXRvO1xcbn1cXG4uc2lkZWJhcj51bHtcXG4gICAgbWFyZ2luLXRvcDogMzJweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xcbn1cXG4uc2lkZWJhciBsaXtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG5cXG4gICAgd2lkdGg6IDgwJTtcXG59XFxuLnNpZGViYXIgbGkgPiBidXR0b257XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTdhNztcXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGZvbnQtc2l6ZTogMC43NWVtO1xcbiAgICBwYWRkaW5nOiAwLjVlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuI3Byb2plY3QtbGlzdHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIFxcbiAgICBoZWlnaHQ6IDE1MHB4O1xcblxcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG4jcHJvamVjdC1saXN0ID4gbGl7XFxuICAgIGZvbnQtc2l6ZTogMC43NWVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOjA7XFxufVxcbiNwcm9qZWN0LWxpc3QgPiBsaSA+IGJ1dHRvbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbiNwcm9qZWN0LWxpc3QgPiBsaSA+IGJ1dHRvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3lhbi05MDApO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbiNhZGQtcHJvamVjdHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbn1cXG4uYnRuLWRpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBtYXJnaW4tdG9wOiA4cHg7XFxufVxcbiNzdWJtaXQtcHJvantcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYyLCAyMTIsIDYyKTtcXG59XFxuI2NhbmNlbC1wcm9qe1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI5LCAxNCwgMTQpO1xcbn1cXG4jcHJvamVjdC1hZGQtbmFtZXtcXG4gICAgd2lkdGg6IDk3JTtcXG4gICAgZm9udC1zaXplOiAwLjc1ZW07XFxufVxcbi5lcnJvcntcXG4gICAgY29sb3I6IHJlZDtcXG4gICAgZm9udC1zaXplOiAwLjZlbTtcXG4gICAgcGFkZGluZy10b3A6IDAuNGVtO1xcbn1cXG5cXG4jc3VibWl0LXByb2osXFxuI2NhbmNlbC1wcm9qe1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICB3aWR0aDogNDUlO1xcbiAgICBmb250LXNpemU6IDAuNzVlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiAwLjVlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xcbn1cXG4udG9kbzpub3QoOmxhc3QtY2hpbGQpe1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcXG59XFxuLnRvZG97XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN5YW4tMTAwKTtcXG4gICAgcGFkZGluZzogMC43NWVtO1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcblxcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTJweDtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEycHg7XFxufVxcblxcbi50b2RvW3ByaW9yaXR5ID0gXFxcIjFcXFwiXXtcXG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCBncmVlbjtcXG59XFxuLnRvZG9bcHJpb3JpdHkgPSBcXFwiMlxcXCJde1xcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHllbGxvdztcXG59XFxuLnRvZG9bcHJpb3JpdHkgPSBcXFwiM1xcXCJde1xcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHJlZDtcXG59XFxuXFxuLmNvbXBsZXRle1xcbiAgICB3aWR0aDogY2FsYygxZW0gLSA2cHgpO1xcbiAgICBoZWlnaHQ6IGNhbGMoMWVtIC0gNnB4KTtcXG5cXG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tY3lhbi02MDApO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIG1hcmdpbi1yaWdodDogMTZweDtcXG59XFxuXFxuLmNvbXBsZXRlLmNoZWNrZWR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN5YW4tODAwKTtcXG59XFxuLnRvZG8gPiAudGl0bGUuY2hlY2tlZHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOmxpbmUtdGhyb3VnaDtcXG4gICAgY29sb3I6IGdyYXk7XFxufVxcbi50b2RvID4gLnRpdGxle1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcbi50b2RvID4gLmRhdGUsXFxuLnRvZG8gPiAuZXhwYW5kLFxcbi50b2RvID4gLmVkaXR7XFxuICAgIG1hcmdpbi1yaWdodDogMjRweDtcXG59XFxuLnRvZG8gPiAudHJhc2g6aG92ZXIsXFxuLnRvZG8gPiAuZXhwYW5kOmhvdmVyLFxcbi50b2RvID4gLmNvbXBsZXRlOmhvdmVyLFxcbi50b2RvID4gLmVkaXQ6aG92ZXIsXFxuaW1nLmNsb3NlLFxcbmJ1dHRvbjpob3ZlcixcXG5idXR0b24jc3VibWl0e1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5zaWRlYmFye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4uYWRke1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMi41ZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN5YW4tNjAwKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcXG4gICAgXFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgbWFyZ2luOiAxNnB4O1xcblxcbiAgICB3aWR0aDogNDhweDtcXG4gICAgaGVpZ2h0OiA0OHB4O1xcbiAgICBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxufVxcblxcbi5hZGQ6aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm94LXNoYWRvdzogMHB4IDNweCA1cHggcmdiKDAsIDAsIDApO1xcbn1cXG4ucG9wdXB7XFxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xcblxcbiAgICBtYXJnaW4taW5saW5lOiBhdXRvO1xcbiAgICBtYXJnaW4tYmxvY2s6IGF1dG87XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiBub25lO1xcblxcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xcbiAgICBtYXgtaGVpZ2h0OiAzNzBweDtcXG4gICAgXFxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxufVxcbi5mb3JtLWNvbnRhaW5lcntcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxLjVlbSAtIDhweCk7XFxuICAgIHdpZHRoOiA5NSU7XFxuICAgIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxufVxcbiNteUZvcm0gdWx7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuI25ldy10aXRsZXtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG5cXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBtYXJnaW4tYmxvY2s6IDhweDtcXG59XFxuI25ldy10aXRsZTpmb2N1c3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcbiNuZXctZGVzY3JpcHRpb257XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgaGVpZ2h0OiA2ZW07XFxuICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG4jbXlGb3JtPi50aXRsZSxcXG4jZXhwYW5kV2luZG93ID4gLnRpdGxle1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNnB4O1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTZweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nLWlubGluZTogMyU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN5YW4tNDAwKTtcXG4gICAgaGVpZ2h0OiAxLjVlbTtcXG59XFxuI215Rm9ybSA+IC50aXRsZSA+IGltZy5jbG9zZSxcXG4jZXhwYW5kV2luZG93ID4gLnRpdGxlID4gaW1nLmNsb3Nle1xcbiAgICB3aWR0aDogMTZweDtcXG59XFxuXFxubGkucGlja2VyLWZpZWxke1xcbiAgICBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW47XFxuXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG4jZXhwYW5kLWRlc2NyaXB0aW9ue1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xcbn1cXG5cXG4jc3VibWl0e1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogOHB4O1xcbiAgICByaWdodDogY2FsYyg1JSk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1zaXplOiAwLjc1ZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN5YW4tNTAwKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAwLjVlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7Y29weSwgY3JlYXRlVG9kb30gZnJvbSBcIi4vdG9kb0l0ZW1cIjtcbmltcG9ydCB7IGNyZWF0ZVByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuXG5pZighIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKSA9PT0gZmFsc2Upe1xuICAgIHZhciBhbmNob3JEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGFuY2hvckRpdi5pZCA9IFwiY29udGVudFwiO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLmFwcGVuZENoaWxkKGFuY2hvckRpdik7XG59XG5lbHNle1xuICAgIHZhciBhbmNob3JEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7IFxufVxuXG5mdW5jdGlvbiBsb2FkTWFpbkFzc2VzdHMocHJvamVjdHMpe1xuXG4gICAgbGV0IGxvZ29XcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgICBsb2dvV3JhcC5jbGFzc0xpc3QuYWRkKFwibG9nby13cmFwXCIpO1xuXG4gICAgbGV0IGxvZ29JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGxvZ29JbWcuc2V0QXR0cmlidXRlKFwid2lkdGhcIixcIjQ4cHhcIik7XG5cbiAgICBsb2dvSW1nLnNldEF0dHJpYnV0ZShcInNyY1wiLFwiLi4vc3JjL2ltYWdlcy9Mb2dvLnN2Z1wiKTtcbiAgICBsZXQgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgbG9nby5jbGFzc0xpc3QuYWRkKCdsb2dvJyk7XG4gICAgbG9nby5pbm5lckhUTUwgPSAnPGltZyB3aWR0aD1cIjQwcHhcIiBzcmM9XCIuLi9zcmMvaW1hZ2VzL0xvZ28uc3ZnXCIgYWx0PVwiXCI+IFRvIERvIExpc3QnO1xuXG4gICAgbG9nb1dyYXAuYXBwZW5kQ2hpbGQobG9nbyk7XG4gICAgYW5jaG9yRGl2LmFwcGVuZENoaWxkKGxvZ29XcmFwKTtcblxuICAgIGxldCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKFwic2lkZWJhclwiKTtcblxuICAgIGxldCBzaWRlYmFyTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cbiAgICBsZXQgbGlzdEVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbGV0IGJ0bkhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ0bkhvbWUudGV4dENvbnRlbnQgPSBcImhvbWVcIjtcbiAgICBsaXN0RWxlbS5hcHBlbmRDaGlsZChidG5Ib21lKTtcbiAgICBcbiAgICBzaWRlYmFyTGlzdC5hcHBlbmRDaGlsZChsaXN0RWxlbSk7XG5cbiAgICBsaXN0RWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBsaXN0RWxlbS50ZXh0Q29udGVudCA9IFwiUHJvamVjdHNcIjtcbiAgICBzaWRlYmFyTGlzdC5hcHBlbmRDaGlsZChsaXN0RWxlbSk7XG5cbiAgICBsaXN0RWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblxuICAgIGxldCBhZGRQcm9qZWN0V3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYWRkUHJvamVjdFdyYXAuaWQgPSBcImFkZC1wcm9qZWN0XCI7XG4gICAgYWRkUHJvamVjdFdyYXAuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIFxuICAgIGxldCBhZGRQcm9qSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgYWRkUHJvaklucHV0LmlkID0gXCJwcm9qZWN0LWFkZC1uYW1lXCJcbiAgICBhZGRQcm9qSW5wdXQuc2V0QXR0cmlidXRlKFwibWF4bGVuZ3RoXCIsXCIxNVwiKTtcbiAgICBsZXQgYnRuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBidG5EaXYuY2xhc3NMaXN0LmFkZChcImJ0bi1kaXZcIik7XG5cbiAgICBsZXQgZXJyb3JNc2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBlcnJvck1zZy5jbGFzc0xpc3QuYWRkKFwiZXJyb3JcIik7XG4gICAgZXJyb3JNc2cuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGVycm9yTXNnLnRleHRDb250ZW50ID0gXCJJbnZhbGlkIHZhbHVlXCI7XG5cbiAgICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidG4uaWQgPSBcInN1Ym1pdC1wcm9qXCI7XG4gICAgYnRuLnRleHRDb250ZW50ID0gXCJBRERcIjtcbiAgICBidG5EaXYuYXBwZW5kQ2hpbGQoYnRuKTtcblxuICAgIGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnRuLmlkID0gXCJjYW5jZWwtcHJvalwiO1xuICAgIGJ0bi50ZXh0Q29udGVudCA9IFwiWFwiXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpPT57XG4gICAgICAgIGFkZFByb2pJbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGFkZFByb2plY3RXcmFwLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgZXJyb3JNc2cuc3R5bGUuZGlzcGxheT0gXCJub25lXCI7XG4gICAgfSk7XG4gICAgYnRuRGl2LmFwcGVuZENoaWxkKGJ0bik7XG5cbiAgICBhZGRQcm9qZWN0V3JhcC5hcHBlbmRDaGlsZChhZGRQcm9qSW5wdXQpO1xuICAgIGFkZFByb2plY3RXcmFwLmFwcGVuZENoaWxkKGVycm9yTXNnKTtcbiAgICBhZGRQcm9qZWN0V3JhcC5hcHBlbmRDaGlsZChidG5EaXYpO1xuICAgIFxuICAgIGxpc3RFbGVtLmFwcGVuZENoaWxkKGFkZFByb2plY3RXcmFwKTtcbiAgICBzaWRlYmFyTGlzdC5hcHBlbmRDaGlsZChsaXN0RWxlbSk7XG5cbiAgICBsaXN0RWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBsZXQgYnRuQWRkUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnRuQWRkUHJvamVjdC50ZXh0Q29udGVudCA9IFwiKyBBZGQgUHJvamVjdFwiO1xuXG4gICAgYnRuQWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+e1xuICAgICAgICBhZGRQcm9qZWN0V3JhcC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIH0pO1xuXG4gICAgbGlzdEVsZW0uYXBwZW5kQ2hpbGQoYnRuQWRkUHJvamVjdCk7XG4gICAgc2lkZWJhckxpc3QuYXBwZW5kQ2hpbGQobGlzdEVsZW0pO1xuXG4gICAgbGlzdEVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbGV0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIHByb2plY3RMaXN0LmlkID0gXCJwcm9qZWN0LWxpc3RcIjtcbiAgICBsaXN0RWxlbS5hcHBlbmRDaGlsZChwcm9qZWN0TGlzdCk7XG4gICAgc2lkZWJhckxpc3QuYXBwZW5kQ2hpbGQobGlzdEVsZW0pO1xuXG4gICAgbGV0IGFkZFRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGFkZFRvZG8uY2xhc3NMaXN0LmFkZChcImFkZFwiKTtcbiAgICBhZGRUb2RvLnRleHRDb250ZW50ID0gXCIrXCI7XG5cbiAgICBhZGRUb2RvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e1xuICAgICAgICBvcGVuRm9ybSgpO1xuICAgIH0pO1xuXG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChzaWRlYmFyTGlzdCk7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChhZGRUb2RvKTtcbiAgICBhbmNob3JEaXYuYXBwZW5kQ2hpbGQoc2lkZWJhcik7XG5cbiAgICBsZXQgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpbi1jb250ZW50XCIpO1xuICAgIGFuY2hvckRpdi5hcHBlbmRDaGlsZChtYWluKTtcblxuICAgIGxvYWRGb3JtKHByb2plY3RzKTtcbn1cblxuZnVuY3Rpb24gbG9hZFRvZG8odG9kbyxpbmRleCl7XG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGVudFwiKTtcblxuICAgIGxldCB0b0RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b0RvRGl2LnNldEF0dHJpYnV0ZShcInByaW9yaXR5XCIsdG9kby5nZXRQcmlvcml0eSgpKTtcbiAgICB0b0RvRGl2LnNldEF0dHJpYnV0ZShcImluZGV4XCIsaW5kZXgpO1xuICAgIHRvRG9EaXYuY2xhc3NMaXN0LmFkZChcInRvZG9cIik7XG5cbiAgICBsZXQgY2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNoZWNrQm94LmNsYXNzTGlzdC5hZGQoXCJjb21wbGV0ZVwiKTtcbiAgICBcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gdG9kby5nZXRUaXRsZSgpO1xuICAgIGlmICh0b2RvLmlzRG9uZSgpKSB7XG4gICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJjaGVja2VkXCIpO1xuICAgICAgICBjaGVja0JveC5jbGFzc0xpc3QuYWRkKFwiY2hlY2tlZFwiKTtcbiAgICB9XG5cbiAgICBsZXQgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBkYXRlLmNsYXNzTGlzdC5hZGQoXCJkYXRlXCIpO1xuICAgIGRhdGUudGV4dENvbnRlbnQgPSB0b2RvLmdldER1ZURhdGUoKTtcblxuICAgIGxldCBleHBhbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGV4cGFuZC5jbGFzc0xpc3QuYWRkKFwiZXhwYW5kXCIpO1xuICAgIGV4cGFuZC5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLFwiMjRweFwiKTtcbiAgICBleHBhbmQuc2V0QXR0cmlidXRlKFwic3JjXCIsXCIuLi9zcmMvaW1hZ2VzL2V4cGFuZC5zdmdcIik7XG5cbiAgICBleHBhbmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCk9PntcbiAgICAgICAgbG9hZEV4cGFuZFdpbmRvdyh0b2RvKTtcbiAgICB9KTtcblxuICAgIGxldCBlZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBlZGl0LmNsYXNzTGlzdC5hZGQoXCJlZGl0XCIpO1xuICAgIGVkaXQuc2V0QXR0cmlidXRlKFwid2lkdGhcIixcIjI0cHhcIik7XG4gICAgZWRpdC5zZXRBdHRyaWJ1dGUoXCJzcmNcIixcIi4uL3NyYy9pbWFnZXMvZWRpdC5zdmdcIik7XG5cbiAgICBcblxuICAgIGxldCB0cmFzaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgdHJhc2guY2xhc3NMaXN0LmFkZChcInRyYXNoXCIpO1xuICAgIHRyYXNoLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsXCIyNHB4XCIpO1xuICAgIHRyYXNoLnNldEF0dHJpYnV0ZShcInNyY1wiLFwiLi4vc3JjL2ltYWdlcy90cmFzaC5zdmdcIik7XG5cblxuICAgIHRvRG9EaXYuYXBwZW5kKGNoZWNrQm94KTtcbiAgICB0b0RvRGl2LmFwcGVuZCh0aXRsZSk7XG4gICAgdG9Eb0Rpdi5hcHBlbmQoZGF0ZSk7XG4gICAgdG9Eb0Rpdi5hcHBlbmQoZXhwYW5kKTtcbiAgICB0b0RvRGl2LmFwcGVuZChlZGl0KTtcbiAgICB0b0RvRGl2LmFwcGVuZCh0cmFzaCk7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRvRG9EaXYpO1xufVxuXG5mdW5jdGlvbiBsb2FkRm9ybShwcm9qZWN0cyl7XG5cbiAgICBsZXQgZm9ybVdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvcm1XcmFwLmlkID0gXCJteUZvcm1cIjtcblxuICAgIGxldCBmb3JtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvcm1UaXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG4gICAgZm9ybVdyYXAuY2xhc3NMaXN0LmFkZChcInBvcHVwXCIpO1xuXG4gICAgbGV0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgbmFtZS50ZXh0Q29udGVudCA9IFwiQWRkIGEgdG8tZG9cIjtcbiAgICBmb3JtVGl0bGUuYXBwZW5kQ2hpbGQobmFtZSk7XG5cbiAgICBsZXQgeEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgeEJ0bi5jbGFzc0xpc3QuYWRkKFwiY2xvc2VcIik7XG4gICAgeEJ0bi5zZXRBdHRyaWJ1dGUoXCJzcmNcIixcIi4uL3NyYy9pbWFnZXMvY2xvc2Uuc3ZnXCIpO1xuICAgIGZvcm1UaXRsZS5hcHBlbmRDaGlsZCh4QnRuKTtcblxuICAgIGZvcm1XcmFwLmFwcGVuZENoaWxkKGZvcm1UaXRsZSk7XG5cbiAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIGZvcm0uY2xhc3NMaXN0LmFkZChcImZvcm0tY29udGFpbmVyXCIpO1xuICAgIGZvcm0uc2V0QXR0cmlidXRlKCdub3ZhbGlkYXRlJywgdHJ1ZSk7XG4gICAgZm9ybVdyYXAuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgICBsZXQgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGxpc3QpO1xuXG4gICAgbGV0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGxpc3RJdGVtLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LWZpZWxkXCIpO1xuICAgIGxldCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHRpdGxlSW5wdXQuaWQgPSBcIm5ldy10aXRsZVwiO1xuICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLFwidGV4dFwiKTtcbiAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIixcImNyZWF0ZS1mb3JtLXRpdGxlXCIpO1xuICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwibWF4bGVuZ3RoXCIsXCIzMFwiKTtcbiAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsXCJUaXRsZTogKGV4YW1wbGU6IFdhbGsgdGhlIGRvZylcIik7XG4gICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG4gICAgbGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG5cbiAgICBsZXQgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICBkZXNjcmlwdGlvbklucHV0LmlkID0gXCJuZXctZGVzY3JpcHRpb25cIjtcbiAgICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsXCJEZXNjcmlwdGlvbi4uLlwiKTtcbiAgICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIixcImNyZWF0ZS1mb3JtLWRlc2NyaXB0aW9uXCIpO1xuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uSW5wdXQpO1xuICAgIGxpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuXG4gICAgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbGlzdEl0ZW0uY2xhc3NMaXN0LmFkZChcInBpY2tlci1maWVsZFwiKTtcblxuICAgIGxldCBkYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgZGF0ZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLFwiY3JlYXRlLWZvcm0tZGF0ZVwiKTtcbiAgICBkYXRlTGFiZWwudGV4dENvbnRlbnQgPSBcIkR1ZSBEYXRlOlwiO1xuICAgIGxldCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIixcImNyZWF0ZS1mb3JtLWRhdGVcIik7XG4gICAgZGF0ZUlucHV0LmlkID0gXCJuZXctZGF0ZVwiO1xuICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJkYXRlXCIpO1xuXG4gICAgbGV0IHNpbXBsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBzaW1wbGVEaXYuYXBwZW5kQ2hpbGQoZGF0ZUxhYmVsKTtcbiAgICBzaW1wbGVEaXYuYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcblxuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKHNpbXBsZURpdik7XG4gICAgXG4gICAgbGV0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgcHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIixcImNyZWF0ZS1mb3JtLXByaW9yaXR5XCIpO1xuICAgIHByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSBcInByaW9yaXR5OlwiO1xuICAgIGxldCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICBwcmlvcml0eUlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIixcImNyZWF0ZS1mb3JtLXByaW9yaXR5XCIpO1xuICAgIHByaW9yaXR5SW5wdXQuaWQgPSBcIm5ldy1wcmlvcml0eVwiO1xuXG4gICAgbGV0IHByaW9yaXR5T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBwcmlvcml0eU9wdGlvbi50ZXh0Q29udGVudCA9IFwibG93XCI7XG4gICAgcHJpb3JpdHlPcHRpb24uc2V0QXR0cmlidXRlKFwidmFsdWVcIixcIjFcIik7XG4gICAgcHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZChwcmlvcml0eU9wdGlvbik7XG5cbiAgICBwcmlvcml0eU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgcHJpb3JpdHlPcHRpb24udGV4dENvbnRlbnQgPSBcIm1lZGl1bVwiO1xuICAgIHByaW9yaXR5T3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsXCIyXCIpO1xuICAgIHByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQocHJpb3JpdHlPcHRpb24pO1xuXG4gICAgcHJpb3JpdHlPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIHByaW9yaXR5T3B0aW9uLnRleHRDb250ZW50ID0gXCJoaWdoXCI7XG4gICAgcHJpb3JpdHlPcHRpb24uc2V0QXR0cmlidXRlKFwidmFsdWVcIixcIjNcIik7XG4gICAgcHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZChwcmlvcml0eU9wdGlvbik7XG5cbiAgICBzaW1wbGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgc2ltcGxlRGl2LmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpO1xuICAgIHNpbXBsZURpdi5hcHBlbmRDaGlsZChwcmlvcml0eUlucHV0KTtcblxuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKHNpbXBsZURpdik7XG5cbiAgICBsaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcblxuICAgIGxldCBwcm9qZWN0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgcHJvamVjdExhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLFwiY3JlYXRlLWZvcm0tcG9qZWN0XCIpO1xuICAgIHByb2plY3RMYWJlbC50ZXh0Q29udGVudCA9IFwiUCAgIHJvamVjdDpcIjtcbiAgICBsZXQgcHJvamVjdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICBwcm9qZWN0SW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLFwiY3JlYXRlLWZvcm0tcG9qZWN0XCIpO1xuICAgIHByb2plY3RJbnB1dC5pZCA9IFwibmV3LXBvamVjdFwiO1xuXG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcHJvamVjdHMubGVuZ3RoKCk7IGluZGV4KyspIHtcbiAgICAgICAgbGV0IE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIE9wdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3RzLmdldFByb2pCeUluZGV4KGluZGV4KS5nZXROYW1lKCk7XG4gICAgICAgIE9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLGAke3Byb2plY3RzLmdldFByb2pCeUluZGV4KGluZGV4KS5nZXROYW1lKCl9YCk7XG4gICAgICAgIHByb2plY3RJbnB1dC5hcHBlbmRDaGlsZChPcHRpb24pO1xuICAgICAgICBcbiAgICB9XG5cbiAgICBzaW1wbGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIFxuICAgIHNpbXBsZURpdi5hcHBlbmRDaGlsZChwcm9qZWN0TGFiZWwpO1xuICAgIHNpbXBsZURpdi5hcHBlbmRDaGlsZChwcm9qZWN0SW5wdXQpO1xuXG4gICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoc2ltcGxlRGl2KTtcblxuICAgIGxpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuXG4gICAgbGV0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgc3VibWl0QnRuLmlkID0gXCJzdWJtaXRcIjtcbiAgICBzdWJtaXRCdG4udGV4dENvbnRlbnQgPSBcIkFkZCBUYXNrXCI7XG5cbiAgICBmb3JtV3JhcC5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xuXG4gICAgZm9ybVdyYXAuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIFxuICAgIGFuY2hvckRpdi5hcHBlbmRDaGlsZChmb3JtV3JhcCk7XG4gICAgXG4gICAgeEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcbiAgICAgICAgY2xvc2VGb3JtKCk7XG4gICAgfSk7XG4gICAgXG5cbn1cblxuZnVuY3Rpb24gb3BlbkZvcm0oKXtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI215Rm9ybVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xufVxuXG5mdW5jdGlvbiBjbG9zZUZvcm0oKXtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI215Rm9ybVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59XG5cbmZ1bmN0aW9uIGNsb3NlRXhwYW5kKCl7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNleHBhbmRXaW5kb3dcIikucmVtb3ZlKCk7XG59XG5cbmZ1bmN0aW9uIGxvYWRQcm9qZWN0KHByb2plY3RzLHByb2ope1xuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWNvbnRlbnRcIik7XG4gICAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGxldCBzdWJQcm9qZWN0QXJyYXkgPSBwcm9qLnJldHVybkFsbCgpO1xuICAgIGxldCBtYWluUHJvakFycmF5ID0gcHJvamVjdHMucmV0dXJuTWFpbigpLnJldHVybkFsbCgpO1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBtYWluUHJvakFycmF5Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBjb25zdCBwID0gbWFpblByb2pBcnJheVtpbmRleF07XG4gICAgICAgIGlmIChzdWJQcm9qZWN0QXJyYXkuaW5jbHVkZXMocCkpIHtcbiAgICAgICAgICAgIGxvYWRUb2RvKHAsaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbiAgICBjaGVja0V2ZW50QWRkZXIocHJvamVjdHMscHJvaik7XG4gICAgdHJhc2hFdmVudEFkZGVyKHByb2plY3RzLHByb2opO1xuICAgIFxufVxuXG5jb25zdCB0cmFzaEV2ZW50QWRkZXIgPSAocHJvamVjdHMscHJvaikgPT57XG4gICAgbGV0IHRyYXNoQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudHJhc2hcIik7XG4gICAgdHJhc2hCdG5zLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XG5cbiAgICAgICAgICAgIGxldCBpID0gZWxlbWVudC5jbG9zZXN0KFwiLnRvZG9cIikuZ2V0QXR0cmlidXRlKFwiaW5kZXhcIik7XG4gICAgICAgICAgICBwcm9qZWN0cy5yZXR1cm5NYWluKCkucmVtb3ZlVG9kbyhpKTtcbiAgICAgICAgICAgIGxvYWRQcm9qZWN0KHByb2plY3RzLHByb2opO1xuICAgICAgICAgICAgXG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG5jb25zdCBjaGVja0V2ZW50QWRkZXIgPSAocHJvamVjdHMscHJvaikgPT57XG4gICAgY29uc29sZS5sb2coXCJhZGRpbmcgY2hlY2tsaXN0ZW5lclwiKTtcbiAgICBsZXQgdHJhc2hCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jb21wbGV0ZVwiKTtcbiAgICB0cmFzaEJ0bnMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcbiAgICAgICAgICAgIGxldCBkb21UaXRsZSA9IGVsZW1lbnQuY2xvc2VzdChcIi50b2RvXCIpLmNoaWxkTm9kZXNbMV07XG4gICAgICAgICAgICBsZXQgaSA9IGVsZW1lbnQuY2xvc2VzdChcIi50b2RvXCIpLmdldEF0dHJpYnV0ZShcImluZGV4XCIpO1xuICAgICAgICAgICAgcHJvamVjdHMucmV0dXJuTWFpbigpLnRvZG9BdChpKS5zd2l0Y2hEb25lKCk7XG5cbiAgICAgICAgICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImNoZWNrZWRcIikpIHtcbiAgICAgICAgICAgICAgICBkb21UaXRsZS5jbGFzc0xpc3QucmVtb3ZlKFwiY2hlY2tlZFwiKTtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJjaGVja2VkXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJjaGVja2VkXCIpO1xuICAgICAgICAgICAgICAgIGRvbVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJjaGVja2VkXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cblxuY29uc3QgbG9hZEV4cGFuZFdpbmRvdyA9ICh0b2RvKSA9PntcbiAgICBsZXQgZXhwYW5kV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZXhwYW5kV3JhcC5pZCA9IFwiZXhwYW5kV2luZG93XCI7XG5cbiAgICBsZXQgZm9ybVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb3JtVGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xuICAgIGV4cGFuZFdyYXAuY2xhc3NMaXN0LmFkZChcInBvcHVwXCIpO1xuXG4gICAgbGV0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgbmFtZS50ZXh0Q29udGVudCA9IHRvZG8uZ2V0VGl0bGUoKTtcbiAgICBmb3JtVGl0bGUuYXBwZW5kQ2hpbGQobmFtZSk7XG5cbiAgICBsZXQgeEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgeEJ0bi5jbGFzc0xpc3QuYWRkKFwiY2xvc2VcIik7XG4gICAgeEJ0bi5zZXRBdHRyaWJ1dGUoXCJzcmNcIixcIi4uL3NyYy9pbWFnZXMvY2xvc2Uuc3ZnXCIpO1xuICAgIGZvcm1UaXRsZS5hcHBlbmRDaGlsZCh4QnRuKTtcblxuICAgIHhCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCk9PntcbiAgICAgICAgY2xvc2VFeHBhbmQoKVxuICAgIH0pO1xuXG5cbiAgICBsZXQgZGVzY3JpcHRpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRlc2NyaXB0aW9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWNvbnRhaW5lclwiKTtcblxuICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGRlc2NyaXB0aW9uLmlkID0gXCJleHBhbmQtZGVzY3JpcHRpb25cIjtcbiAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRvZG8uZ2V0RGVzY3JpcHRpb24oKTtcblxuICAgIGRlc2NyaXB0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuICAgIGV4cGFuZFdyYXAuYXBwZW5kQ2hpbGQoZm9ybVRpdGxlKTtcbiAgICBleHBhbmRXcmFwLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uQ29udGFpbmVyKTtcbiAgICBcbiAgICBhbmNob3JEaXYuYXBwZW5kQ2hpbGQoZXhwYW5kV3JhcCk7XG59XG5cbmNvbnN0IHJlbG9hZFByb2plY3RMaXN0ID0gKHByb2plY3RzKSA9PntcbiAgICBsZXQgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtbGlzdFwiKTtcbiAgICBwcm9qZWN0TGlzdC5pbm5lckhUTUwgPSBcIlwiO1xuICAgIHByb2plY3RzLnJldHVybkFsbCgpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IGVsZW1lbnQuZ2V0TmFtZSgpO1xuICAgICAgICBsaS5hcHBlbmQoYnV0dG9uKTtcbiAgICAgICAgcHJvamVjdExpc3QuYXBwZW5kKGxpKTtcblxuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCk9PntcbiAgICAgICAgICAgIGxvYWRQcm9qZWN0KHByb2plY3RzLHByb2plY3RzLmdldFByb2pCeU5hbWUoYnV0dG9uLnRleHRDb250ZW50KSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG5leHBvcnQge2xvYWRNYWluQXNzZXN0cywgbG9hZFRvZG8sIG9wZW5Gb3JtLCBjbG9zZUZvcm0sIGxvYWRQcm9qZWN0LCB0cmFzaEV2ZW50QWRkZXIsY2hlY2tFdmVudEFkZGVyICxsb2FkRXhwYW5kV2luZG93LHJlbG9hZFByb2plY3RMaXN0fSAgIiwiaW1wb3J0IHsgY3JlYXRlVG9kbyB9IGZyb20gXCIuL3RvZG9JdGVtXCI7XG5cbmNvbnN0IGNyZWF0ZVByb2plY3QgPSAoc3RyKT0+e1xuICAgIGxldCB0b2RvcyA9IFtdO1xuICAgIGxldCBuYW1lID0gc3RyO1xuXG4gICAgY29uc3QgYWRkVG9kbyA9ICh0b2RvKT0+e1xuICAgICAgICB0b2Rvcy5wdXNoKHRvZG8pO1xuICAgIH1cbiAgICBjb25zdCByZW1vdmVUb2RvID0gKGluZGV4KSA9PntcbiAgICAgICAgdG9kb3Muc3BsaWNlKGluZGV4LDEpO1xuICAgIH1cbiAgICBjb25zdCBnZXROYW1lID0gKCk9PntcbiAgICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfVxuICAgIGNvbnN0IHJldHVybkFsbCA9ICgpPT57XG4gICAgICAgIHJldHVybiB0b2RvcztcbiAgICB9XG4gICAgY29uc3QgdG9kb0F0ID0oaW5kZXgpID0+e1xuICAgICAgICByZXR1cm4gdG9kb3NbaW5kZXhdO1xuICAgIH1cbiAgICBjb25zdCB0b1N0cmluZyA9ICgpPT57XG4gICAgICAgIGxldCBzdHIgPSBcIlwiO1xuICAgICAgICB0b2Rvcy5mb3JFYWNoKHAgPT4ge1xuICAgICAgICAgICAgc3RyICs9IHAuZ2V0VGl0bGUoKTtcbiAgICAgICAgICAgIHN0ciArPSBcIiwgXCI7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuXG4gICAgcmV0dXJue2FkZFRvZG8scmVtb3ZlVG9kbyx0b1N0cmluZyxnZXROYW1lLHJldHVybkFsbCx0b2RvQXR9XG59XG5cbmNvbnN0IHByb2plY3RzTWFuYWdlciA9ICgpPT57XG4gICAgbGV0IHByb2plY3RzID0gW107XG5cbiAgICBjb25zdCBhZGRQcm9qID0gKHByb2opPT57XG4gICAgICAgIHByb2plY3RzLnB1c2gocHJvaik7XG4gICAgfVxuXG4gICAgY29uc3Qgcm1Qcm9qID0gKG5hbWUpID0+e1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcHJvamVjdHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9qID0gYXJyYXlbaW5kZXhdO1xuXG4gICAgICAgICAgICBpZiAocHJvai5nZXROYW1lKCkgPT09IG5hbWUpIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0cy5zcGxpY2UoaW5kZXgsMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgY29uc3QgZ2V0UHJvakJ5SW5kZXggPSAoaW5kZXgpPT57XG4gICAgICAgIGNvbnN0IHAgPSBwcm9qZWN0c1tpbmRleF07XG4gICAgICAgIHJldHVybiBwOyBcbiAgICB9XG5cbiAgICBjb25zdCBnZXRQcm9qQnlOYW1lID0gKG5hbWUpPT57XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBwcm9qZWN0cy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IHAgPSBwcm9qZWN0c1tpbmRleF07XG4gICAgICAgICAgICBpZiAocC5nZXROYW1lKCkgPT09IG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcDsgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByZXR1cm5BbGwgPSAoKT0+e1xuICAgICAgICByZXR1cm4gcHJvamVjdHM7XG4gICAgfVxuXG4gICAgY29uc3QgbGVuZ3RoID0gKCk9PntcbiAgICAgICAgcmV0dXJuIHByb2plY3RzLmxlbmd0aDtcbiAgICB9XG5cbiAgICBjb25zdCByZXR1cm5NYWluID0gKCk9PntcbiAgICAgICAgcmV0dXJuIHByb2plY3RzWzBdO1xuICAgIH1cblxuICAgIHJldHVybnthZGRQcm9qLHJtUHJvaixyZXR1cm5BbGwscmV0dXJuTWFpbixnZXRQcm9qQnlOYW1lLGxlbmd0aCxnZXRQcm9qQnlJbmRleH1cbn1cblxuZXhwb3J0IHtjcmVhdGVQcm9qZWN0LHByb2plY3RzTWFuYWdlcn0iLCJjb25zdCBjcmVhdGVUb2RvID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlLCBwcmlvcml0eSk9PntcbiAgICBsZXQgZG9uZSA9IGZhbHNlO1xuXG4gICAgY29uc3QgZ2V0VGl0bGUgPSAoKT0+e1xuICAgICAgICByZXR1cm4gdGl0bGU7XG4gICAgfTtcbiAgICBjb25zdCBnZXREZXNjcmlwdGlvbiA9ICgpPT57XG4gICAgICAgIHJldHVybiBkZXNjcmlwdGlvbjtcbiAgICB9O1xuICAgIGNvbnN0IGdldER1ZURhdGUgPSAoKT0+e1xuICAgICAgICByZXR1cm4gZHVlO1xuICAgIH07XG4gICAgY29uc3QgZ2V0UHJpb3JpdHkgPSAoKT0+e1xuICAgICAgICByZXR1cm4gcHJpb3JpdHk7XG4gICAgfTtcbiAgICBjb25zdCBpc0RvbmUgPSAoKT0+e1xuICAgICAgICByZXR1cm4gZG9uZTtcbiAgICB9XG4gICAgY29uc3Qgc3dpdGNoRG9uZSA9ICgpPT57XG4gICAgICAgIGRvbmUgPSAhZG9uZTtcbiAgICB9XG4gICAgY29uc3QgcmV0dXJuVG9kbyA9ICgpPT57XG4gICAgICAgIHJldHVybiB7dGl0bGUsZGVzY3JpcHRpb24sZHVlLHByaW9yaXR5LGRvbmV9O1xuICAgIH07XG4gICAgY29uc3QgdG9TdHJpbmcgPSAoKT0+e1xuICAgICAgICByZXR1cm4gYCR7cHJpb3JpdHl9ICR7dGl0bGV9ICAgICAgICAgJHtkdWV9IFxcbiAke2Rlc2NyaXB0aW9ufWBcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtnZXRUaXRsZSwgZ2V0RGVzY3JpcHRpb24sZ2V0RHVlRGF0ZSxnZXRQcmlvcml0eSx0b1N0cmluZyxyZXR1cm5Ub2RvLGlzRG9uZSxzd2l0Y2hEb25lfTtcbn1cblxuY29uc3QgY29weSA9IChUb0RvKT0+e1xuICAgIHJldHVybiBjcmVhdGVUb2RvKFRvRG8uZ2V0VGl0bGUoKSxUb0RvLmdldERlc2NyaXB0aW9uKCksVG9Eby5nZXREdWVEYXRlKCksVG9Eby5nZXRQcmlvcml0eSgpKTtcbn07XG5leHBvcnQge2NyZWF0ZVRvZG8sY29weX07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHtjcmVhdGVUb2RvfSBmcm9tIFwiLi90b2RvSXRlbS5qc1wiIFxuaW1wb3J0IHsgY3JlYXRlUHJvamVjdCxwcm9qZWN0c01hbmFnZXIgfSBmcm9tIFwiLi9wcm9qZWN0cy5qc1wiO1xuaW1wb3J0IHsgbG9hZE1haW5Bc3Nlc3RzLG9wZW5Gb3JtICxjbG9zZUZvcm0sIGxvYWRQcm9qZWN0LGxvYWRFeHBhbmRXaW5kb3csIHJlbG9hZFByb2plY3RMaXN0fSBmcm9tIFwiLi9sb2FkLmpzXCI7XG5pbXBvcnQgY3NzIGZyb20gXCIuL3N0eWxlLmNzc1wiXG5cbmxldCBwcm9qZWN0cyA9IHByb2plY3RzTWFuYWdlcigpO1xubGV0IG1haW5wcm9qID0gY3JlYXRlUHJvamVjdChcIkdlbmVyYWxcIik7XG5wcm9qZWN0cy5hZGRQcm9qKG1haW5wcm9qKTtcblxubWFpbnByb2ogPSBjcmVhdGVQcm9qZWN0KFwiaG9tZXdvcmtcIik7XG5wcm9qZWN0cy5hZGRQcm9qKG1haW5wcm9qKTtcblxubWFpbnByb2ogPSBjcmVhdGVQcm9qZWN0KFwiQ2hvcmVzXCIpO1xucHJvamVjdHMuYWRkUHJvaihtYWlucHJvaik7XG5cbm1haW5wcm9qID0gY3JlYXRlUHJvamVjdChcIkJpbGxzXCIpO1xucHJvamVjdHMuYWRkUHJvaihtYWlucHJvaik7XG5cbi8qbGV0IHNlY29uZFByb2ogPSBjcmVhdGVQcm9qZWN0KFwiU3ByaW5nIGNsZWFuaW5nXCIpO1xubGV0IHRoaXJkUHJvaiA9IGNyZWF0ZVByb2plY3QoXCJIb3VzZSByZW5vdmF0aW9uXCIpO1xucHJvamVjdHMuYWRkUHJvaihtYWlucHJvaik7XG5wcm9qZWN0cy5hZGRQcm9qKHNlY29uZFByb2opO1xucHJvamVjdHMuYWRkUHJvaih0aGlyZFByb2opO1xuXG5sZXQgdG9kbzEgPSBjcmVhdGVUb2RvKFwiYnV5IG1pbGtcIixcIk5lZWQgdG8gZ2V0IGNvdyBtaWxrXCIsXCJ0b21vcnJvdyBTSUtFXCIsMyk7XG5sZXQgdG9kbzIgPSBjcmVhdGVUb2RvKFwiY2xlYW4gc2hlZFwiLFwiY2xlYW4gc2hlZCBpbiB0aGUgeWFkXCIsXCJ0b21vcnJvdyBTSUtFXCIsMSk7XG5sZXQgdG9kbzMgPSBjcmVhdGVUb2RvKFwiYnV5IGhhbW1lciBcIixcImJ1eSB0b29scyBmcm9tIGhvbWUgZGVwb1wiLFwidG9tb3Jyb3cgU0lLRVwiLDIpO1xubGV0IHRvZG80ID0gY3JlYXRlVG9kbyhcImJ1eSBuYWlsc1wiLFwiYnV5IHRvb2xzIGZyb20gaG9tZSBkZXBvXCIsXCJ0b21vcnJvdyBTSUtFXCIsMik7XG5cbm1haW5wcm9qLmFkZFRvZG8odG9kbzEpO1xubWFpbnByb2ouYWRkVG9kbyh0b2RvMik7XG5tYWlucHJvai5hZGRUb2RvKHRvZG8zKTtcbm1haW5wcm9qLmFkZFRvZG8odG9kbzQpO1xuXG5zZWNvbmRQcm9qLmFkZFRvZG8odG9kbzIpO1xuXG50aGlyZFByb2ouYWRkVG9kbyh0b2RvMyk7XG50aGlyZFByb2ouYWRkVG9kbyh0b2RvNCk7Ki9cblxubG9hZE1haW5Bc3Nlc3RzKHByb2plY3RzKTtcbnJlbG9hZFByb2plY3RMaXN0KHByb2plY3RzKTtcblxubGV0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tY29udGFpbmVyXCIpO1xubGV0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGVudFwiKTtcblxuY29uc29sZS5sb2coZm9ybVtcImNyZWF0ZS1mb3JtLXByb2plY3RcIl0udmFsdWUpO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N1Ym1pdFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcbiAgICBcbiAgICAgICAgaWYoZm9ybVtcImNyZWF0ZS1mb3JtLXRpdGxlXCJdLnZhbHVlID09PSBcIlwiIHx8IGZvcm1bXCJjcmVhdGUtZm9ybS1kZXNjcmlwdGlvblwiXS52YWx1ZSA9PT0gXCJcIiB8fCBmb3JtW1wiY3JlYXRlLWZvcm0tZGF0ZVwiXS52YWx1ZSA9PT0gXCJcIil7XG4gICAgICAgICAgICBhbGVydChcIlBsZWFzZSBmaWxsIG91dCBUaXRsZSBEZXNjcmlwdGlvbiBhbmQgRHVlIGRhdGUuXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBsZXQgdG9kbyA9IGNyZWF0ZVRvZG8oZm9ybVtcImNyZWF0ZS1mb3JtLXRpdGxlXCJdLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICBmb3JtW1wiY3JlYXRlLWZvcm0tZGVzY3JpcHRpb25cIl0udmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgIGZvcm1bXCJjcmVhdGUtZm9ybS1kYXRlXCJdLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICBmb3JtW1wiY3JlYXRlLWZvcm0tcHJpb3JpdHlcIl0udmFsdWUpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBtYWlucHJvai5hZGRUb2RvKHRvZG8pO1xuICAgIFxuICAgICAgICAgICAgbG9hZFByb2plY3QocHJvamVjdHMsbWFpbnByb2opO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGNsb3NlRm9ybSgpO1xuICAgIFxuICAgICAgICBmb3JtW1wiY3JlYXRlLWZvcm0tdGl0bGVcIl0udmFsdWUgPSBcIlwiO1xuICAgICAgICBmb3JtW1wiY3JlYXRlLWZvcm0tZGVzY3JpcHRpb25cIl0udmFsdWUgPSBcIlwiO1xuICAgICAgICBmb3JtW1wiY3JlYXRlLWZvcm0tZGF0ZVwiXS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGZvcm1bXCJjcmVhdGUtZm9ybS1wcmlvcml0eVwiXS52YWx1ZSA9IFwiMVwiO1xufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3VibWl0LXByb2pcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCk9PntcbiAgICBsZXQgdmFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWFkZC1uYW1lXCIpLnZhbHVlO1xuICAgIGlmICh2YWwubGVuZ3RoIDwgMikge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1wcm9qZWN0XCIpLmNoaWxkTm9kZXNbMV0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWFkZC1uYW1lXCIpLnZhbHVlID0gXCJcIjtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtcHJvamVjdFwiKS5jaGlsZE5vZGVzWzFdLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtcHJvamVjdFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbiAgICAgICAgbGV0IHByb2pUb2FkZCA9IGNyZWF0ZVByb2plY3QodmFsKTtcbiAgICAgICAgcHJvamVjdHMuYWRkUHJvaihwcm9qVG9hZGQpO1xuICAgICAgICByZWxvYWRQcm9qZWN0TGlzdChwcm9qZWN0cyk7XG4gICAgfVxufSk7XG5cbmxvYWRQcm9qZWN0KHByb2plY3RzLHByb2plY3RzLnJldHVybk1haW4oKSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9