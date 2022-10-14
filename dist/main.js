(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/addremoveItems.js":
/*!***************************************!*\
  !*** ./src/modules/addremoveItems.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addItemsEl": () => (/* binding */ addItemsEl),
/* harmony export */   "checkItemsUpdate": () => (/* binding */ checkItemsUpdate),
/* harmony export */   "renderItems": () => (/* binding */ renderItems)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/* eslint no-undefined: "error" */
var itemsToBeAdd = document.querySelector('.itemsToBeAdd');

var ContainerClass = /*#__PURE__*/function () {
  function ContainerClass() {
    _classCallCheck(this, ContainerClass);
  }

  _createClass(ContainerClass, [{
    key: "Constructor",
    value: function Constructor(description, completed, index) {
      this.description = description;
      this.completed = completed;
      this.index = index;
      this.items = JSON.parse(localStorage.getItem('listStorage')) || [];
    }
  }]);

  return ContainerClass;
}();

var taskItem = new ContainerClass();

var renderItems = function renderItems() {
  var infoItems = JSON.parse(localStorage.getItem('listStorage')) || [];
  var itemEI = document.getElementById('itemsContainer');
  itemEI.innerHTML = '';
  infoItems.forEach(function (element, id) {
    itemEI.innerHTML += "\n      <div class='doItems'>\n        <input class='itemClass' id='checkId-".concat(id, "', \"completed\"' type='checkbox' ").concat(element.completed ? 'checked' : '', " onclick='checkItemsUpdate(").concat(id, ", \"completed\")'>\n        <input type='text' class='findInput' id='input-").concat(id, "' value=").concat(element.description, " />\n        <i onclick='checkItemsUpdate(").concat(id, ", \"description\")' class='fa-solid fa-file-pen' id='options-").concat(id, "'></i>\n        <i onclick='deleteItem(").concat(id, ")' class='fa-solid fa-trash del-btn' id='delete-").concat(id, "'></i>\n      </div>\n    ");
  });
  return infoItems.length;
};

var addItemsEl = function addItemsEl(description, completed, index) {
  var newItem = new ContainerClass(description, completed, index);
  taskItem.items.push(newItem);
  localStorage.setItem('listStorage', JSON.stringify(taskItem.items));
  itemsToBeAdd.value = '';
  renderItems();
};

window.deleteItem = function () {
  var deleteItemsBtn = _toConsumableArray(document.querySelectorAll('.fa-trash'));

  deleteItemsBtn.forEach(function (elem) {
    elem.addEventListener('click', function () {
      taskItem.items.splice(deleteItemsBtn.indexOf(elem), 1);
      taskItem.items.forEach(function (elem, index) {
        elem.index = index + 1;
      });
      localStorage.setItem('listStorage', JSON.stringify(taskItem.items));
      renderItems();
    });
  });
};

var checkItemsUpdate = function checkItemsUpdate(inputList, checkBoxInfo, id) {
  inputList = document.querySelector("#input-".concat(id)).value;
  checkBoxInfo = document.querySelector("#checkId-".concat(id)).checked;
  var mainArr = taskItem.items.map(function (itemEl) {
    if (itemEl.index - 1 === id) {
      itemEl.description = inputList;
    }

    if (itemEl.index - 1 === id) {
      itemEl.completed = checkBoxInfo;
    }

    return itemEl;
  });
  localStorage.setItem('listStorage', JSON.stringify(mainArr));
};



/***/ }),

/***/ "./src/modules/interraction.js":
/*!*************************************!*\
  !*** ./src/modules/interraction.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var completeAll = function completeAll() {
  var nonComplete = JSON.parse(localStorage.getItem('listStorage')).filter(function (item) {
    if (!item.completed) {
      return item;
    }

    return '';
  });
  nonComplete = nonComplete.map(function (item, id) {
    item.index = id + 1;
    return item;
  });
  localStorage.setItem('listStorage', JSON.stringify(nonComplete));
  window.location.reload();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (completeAll);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n  margin: 0;\r\n  padding: 0;\r\n  width: 100%;\r\n  height: 100vh;\r\n  align-items: center;\r\n}\r\n\r\n.main-container {\r\n  width: 100%;\r\n  height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 3rem;\r\n  background-color: rgb(235, 235, 235);\r\n}\r\n\r\n.section-content {\r\n  width: 90%;\r\n  margin-top: 100px;\r\n  height: auto;\r\n  background-color: #fff;\r\n  box-shadow: 10px 10px 10px silver;\r\n}\r\n\r\n.header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 1rem;\r\n  border-bottom: 1px solid silver;\r\n  height: auto;\r\n}\r\n\r\n.header h1 {\r\n  font-size: 28px;\r\n}\r\n\r\n.bi-arrow-return-left {\r\n  position: relative;\r\n  right: 20px;\r\n}\r\n\r\n.itemsToDo {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: auto;\r\n  gap: 1rem;\r\n}\r\n\r\n.enterInput {\r\n  display: flex;\r\n  height: auto;\r\n  border-bottom: 1px solid black;\r\n}\r\n\r\n.textValue {\r\n  min-height: 2em;\r\n  width: 100%;\r\n  outline: none;\r\n  border: none;\r\n  padding: 0 1rem;\r\n  font-size: 20px;\r\n  font-style: italic;\r\n}\r\n\r\n.addbtnEl {\r\n  border: none;\r\n  outline: none;\r\n  margin-right: 0.5rem;\r\n  justify-self: left;\r\n  background-color: white;\r\n}\r\n\r\n.itemsContainer {\r\n  flex: 1;\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex-wrap: wrap;\r\n  gap: 1em;\r\n  border-bottom: 1px solid black;\r\n  min-height: 100%;\r\n  align-items: center;\r\n  padding: 1em 0;\r\n}\r\n\r\n.doItems {\r\n  display: flex;\r\n  justify-content: center;\r\n  min-width: 35%;\r\n  height: 2.5em;\r\n  gap: 0.5em;\r\n  background-color: rgba(40, 34, 54, 0.473);\r\n  padding: 0;\r\n  align-items: center;\r\n  border-radius: 5px;\r\n}\r\n\r\n.itemClass {\r\n  height: 1.4em;\r\n  width: 1.4em;\r\n  border-radius: 5px;\r\n  background-color: #16161d;\r\n}\r\n\r\n.findInput {\r\n  width: 70%;\r\n  height: 1em;\r\n  padding: 0.3em;\r\n}\r\n\r\n.completeBtn {\r\n  width: 100%;\r\n  font-size: 20px;\r\n  align-self: center;\r\n  border: none;\r\n  font-weight: bolder;\r\n}\r\n\r\n.fa-arrow-turn-down {\r\n  rotate: 90deg;\r\n}\r\n\r\n/* .fa-file-pen {\r\n  background: linear-gradient(45deg, #05d6d9, #f907fd);\r\n  -webkit-background-clip: text;\r\n  background-clip: text;\r\n  color: transparent;\r\n}\r\n\r\n.fa-trash {\r\n  background: linear-gradient(-45deg, #05d6d9, #f907fd);\r\n  -webkit-background-clip: text;\r\n  background-clip: text;\r\n  color: transparent;\r\n} */\r\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,WAAW;EACX,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,aAAa;EACb,oCAAoC;AACtC;;AAEA;EACE,UAAU;EACV,iBAAiB;EACjB,YAAY;EACZ,sBAAsB;EACtB,iCAAiC;AACnC;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,aAAa;EACb,+BAA+B;EAC/B,YAAY;AACd;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,SAAS;AACX;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,8BAA8B;AAChC;;AAEA;EACE,eAAe;EACf,WAAW;EACX,aAAa;EACb,YAAY;EACZ,eAAe;EACf,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,oBAAoB;EACpB,kBAAkB;EAClB,uBAAuB;AACzB;;AAEA;EACE,OAAO;EACP,aAAa;EACb,sBAAsB;EACtB,eAAe;EACf,QAAQ;EACR,8BAA8B;EAC9B,gBAAgB;EAChB,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,cAAc;EACd,aAAa;EACb,UAAU;EACV,yCAAyC;EACzC,UAAU;EACV,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,kBAAkB;EAClB,yBAAyB;AAC3B;;AAEA;EACE,UAAU;EACV,WAAW;EACX,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,eAAe;EACf,kBAAkB;EAClB,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf;;AAEA;;;;;;;;;;;;GAYG","sourcesContent":["body {\r\n  margin: 0;\r\n  padding: 0;\r\n  width: 100%;\r\n  height: 100vh;\r\n  align-items: center;\r\n}\r\n\r\n.main-container {\r\n  width: 100%;\r\n  height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 3rem;\r\n  background-color: rgb(235, 235, 235);\r\n}\r\n\r\n.section-content {\r\n  width: 90%;\r\n  margin-top: 100px;\r\n  height: auto;\r\n  background-color: #fff;\r\n  box-shadow: 10px 10px 10px silver;\r\n}\r\n\r\n.header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 1rem;\r\n  border-bottom: 1px solid silver;\r\n  height: auto;\r\n}\r\n\r\n.header h1 {\r\n  font-size: 28px;\r\n}\r\n\r\n.bi-arrow-return-left {\r\n  position: relative;\r\n  right: 20px;\r\n}\r\n\r\n.itemsToDo {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: auto;\r\n  gap: 1rem;\r\n}\r\n\r\n.enterInput {\r\n  display: flex;\r\n  height: auto;\r\n  border-bottom: 1px solid black;\r\n}\r\n\r\n.textValue {\r\n  min-height: 2em;\r\n  width: 100%;\r\n  outline: none;\r\n  border: none;\r\n  padding: 0 1rem;\r\n  font-size: 20px;\r\n  font-style: italic;\r\n}\r\n\r\n.addbtnEl {\r\n  border: none;\r\n  outline: none;\r\n  margin-right: 0.5rem;\r\n  justify-self: left;\r\n  background-color: white;\r\n}\r\n\r\n.itemsContainer {\r\n  flex: 1;\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex-wrap: wrap;\r\n  gap: 1em;\r\n  border-bottom: 1px solid black;\r\n  min-height: 100%;\r\n  align-items: center;\r\n  padding: 1em 0;\r\n}\r\n\r\n.doItems {\r\n  display: flex;\r\n  justify-content: center;\r\n  min-width: 35%;\r\n  height: 2.5em;\r\n  gap: 0.5em;\r\n  background-color: rgba(40, 34, 54, 0.473);\r\n  padding: 0;\r\n  align-items: center;\r\n  border-radius: 5px;\r\n}\r\n\r\n.itemClass {\r\n  height: 1.4em;\r\n  width: 1.4em;\r\n  border-radius: 5px;\r\n  background-color: #16161d;\r\n}\r\n\r\n.findInput {\r\n  width: 70%;\r\n  height: 1em;\r\n  padding: 0.3em;\r\n}\r\n\r\n.completeBtn {\r\n  width: 100%;\r\n  font-size: 20px;\r\n  align-self: center;\r\n  border: none;\r\n  font-weight: bolder;\r\n}\r\n\r\n.fa-arrow-turn-down {\r\n  rotate: 90deg;\r\n}\r\n\r\n/* .fa-file-pen {\r\n  background: linear-gradient(45deg, #05d6d9, #f907fd);\r\n  -webkit-background-clip: text;\r\n  background-clip: text;\r\n  color: transparent;\r\n}\r\n\r\n.fa-trash {\r\n  background: linear-gradient(-45deg, #05d6d9, #f907fd);\r\n  -webkit-background-clip: text;\r\n  background-clip: text;\r\n  color: transparent;\r\n} */\r\n"],"sourceRoot":""}]);
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

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _modules_addremoveItems_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/addremoveItems.js */ "./src/modules/addremoveItems.js");
/* harmony import */ var _modules_interraction_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/interraction.js */ "./src/modules/interraction.js");



var addButton = document.querySelector('.addbtnEl');
var itemsToBeAdd = document.querySelector('.itemsToBeAdd');
var clearAll = document.querySelector('.completeBtn');
window.addEventListener('load', function () {
  (0,_modules_addremoveItems_js__WEBPACK_IMPORTED_MODULE_1__.renderItems)();
});
addButton.addEventListener('click', function () {
  (0,_modules_addremoveItems_js__WEBPACK_IMPORTED_MODULE_1__.addItemsEl)(itemsToBeAdd.value, false, JSON.parse(localStorage.getItem('listStorage')).length + 1);
  (0,_modules_addremoveItems_js__WEBPACK_IMPORTED_MODULE_1__.renderItems)();
});
clearAll.addEventListener('click', function () {
  (0,_modules_interraction_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_modules_addremoveItems_js__WEBPACK_IMPORTED_MODULE_1__.renderItems)();
});
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=main.js.map