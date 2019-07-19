module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-int */ "core-js/library/fn/parse-int");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/regenerator/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/regenerator/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");


/***/ }),

/***/ "./pages/Cpn_FindSingleWord.jsx":
/*!**************************************!*\
  !*** ./pages/Cpn_FindSingleWord.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cpn_FindSingleWord; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _store_objStore_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../store/objStore.js */ "./store/objStore.js");
/* harmony import */ var _store_fnCreateObjAction_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../store/fnCreateObjAction.js */ "./store/fnCreateObjAction.js");
/* harmony import */ var _store_myFunc_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../store/myFunc.js */ "./store/myFunc.js");







//查找单个单词






var Cpn_FindSingleWord =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Cpn_FindSingleWord, _React$Component);

  function Cpn_FindSingleWord(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Cpn_FindSingleWord);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Cpn_FindSingleWord).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "fn_updateThisState", function () {
      //一旦监听到财务专家更新了state对象, 就执行本回调函数
      _this.setState(_store_objStore_js__WEBPACK_IMPORTED_MODULE_9__["default"].getState());
    });

    _this.state = _store_objStore_js__WEBPACK_IMPORTED_MODULE_9__["default"].getState(); //从银行拿到默认的state对象

    _store_objStore_js__WEBPACK_IMPORTED_MODULE_9__["default"].subscribe(_this.fn_updateThisState); //监听银行(的财务专家)对state对象的更新, 一旦监听到有新修改, 就执行回调函数fn_updateThisState

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Cpn_FindSingleWord, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "text",
        value: this.state.word_currentFind,
        onChange: function onChange() {
          _store_myFunc_js__WEBPACK_IMPORTED_MODULE_11__["fn_发送命令书_双向绑定word_currentFind"](event);
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "button",
        value: '查找单个单词',
        onClick: function onClick() {
          _store_myFunc_js__WEBPACK_IMPORTED_MODULE_11__["fn_发送命令书_搜索单词"](_this2.state.word_currentFind);
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "\u5F53\u524D\u67E5\u627E\u7684\u5355\u8BCD: ", this.state.word_currentFind, " | \u7D22\u5F15\u503C\u4E3A: ", this.state.index_wordCurrentFind)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("hr", null));
    }
  }]);

  return Cpn_FindSingleWord;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);



/***/ }),

/***/ "./pages/Cpn_SingleWordAllInfo.jsx":
/*!*****************************************!*\
  !*** ./pages/Cpn_SingleWordAllInfo.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cpn_SingleWordAllInfo; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _store_objStore_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../store/objStore.js */ "./store/objStore.js");
/* harmony import */ var _store_fnCreateObjAction_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../store/fnCreateObjAction.js */ "./store/fnCreateObjAction.js");
/* harmony import */ var _store_myFunc__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../store/myFunc */ "./store/myFunc.js");







//单个单词在柯林斯中的详细内容






var Cpn_SingleWordAllInfo =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Cpn_SingleWordAllInfo, _React$Component);

  function Cpn_SingleWordAllInfo(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Cpn_SingleWordAllInfo);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Cpn_SingleWordAllInfo).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "fn_updateThisState", function () {
      //一旦监听到财务专家更新了state对象, 就执行本回调函数
      _this.setState(_store_objStore_js__WEBPACK_IMPORTED_MODULE_9__["default"].getState());
    });

    _this.state = _store_objStore_js__WEBPACK_IMPORTED_MODULE_9__["default"].getState(); //从银行拿到默认的state对象

    _store_objStore_js__WEBPACK_IMPORTED_MODULE_9__["default"].subscribe(_this.fn_updateThisState);
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Cpn_SingleWordAllInfo, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, " kollins\u4E2D\u5BF9\u672C\u5355\u8BCD\u7684\u89E3\u91CA:", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "\u7D22\u5F15\u503C\u4E3A: ", this.state.index_wordCurrentFind), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "\u8BCD\u5934: ", this.state.word_name, " | \u97F3\u6807: ", this.state.word_yinBiao), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "\u8BCD\u6839: ", this.state.word_ciGeng), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: objCss.css单个单词搜索
      }, "\u6240\u6709\u91CA\u4F8B:", this.state.word_ArrDef.map(function (strItem, index, arr) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
          key: index,
          onClick: function onClick(event) {
            _store_myFunc__WEBPACK_IMPORTED_MODULE_11__["fn_发送命令书_更新arrSelectedContent"](event.target.innerText);
          }
        }, strItem);
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("hr", null));
    }
  }]);

  return Cpn_SingleWordAllInfo;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component); //----------------------------------------



var objCss = {
  css单个单词搜索: {
    height: "200px",
    border: "1px solid",
    overflow: "auto"
  }
};

/***/ }),

/***/ "./pages/Cpn_TextArea.jsx":
/*!********************************!*\
  !*** ./pages/Cpn_TextArea.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cpn_TextArea; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _store_objStore_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../store/objStore.js */ "./store/objStore.js");
/* harmony import */ var _store_fnCreateObjAction_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../store/fnCreateObjAction.js */ "./store/fnCreateObjAction.js");
/* harmony import */ var _store_myFunc__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../store/myFunc */ "./store/myFunc.js");








/*
多行文本框, 专门用来存放选出的句子的string,
表单会提交这个文本框中的值, 到后端, 并用fs来保存到文件中.
action="#" 表示 本表单提交给本页自己.
 */






var Cpn_TextArea =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Cpn_TextArea, _React$Component);

  function Cpn_TextArea(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Cpn_TextArea);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Cpn_TextArea).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "fn_updateThisState", function () {
      //一旦监听到财务专家更新了state对象, 就执行本回调函数
      _this.setState(_store_objStore_js__WEBPACK_IMPORTED_MODULE_9__["default"].getState());
    });

    _this.state = _store_objStore_js__WEBPACK_IMPORTED_MODULE_9__["default"].getState(); //从银行拿到默认的state对象

    _store_objStore_js__WEBPACK_IMPORTED_MODULE_9__["default"].subscribe(_this.fn_updateThisState);
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Cpn_TextArea, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "button",
        value: '添加到下面的文本框中',
        onClick: function onClick() {
          _store_myFunc__WEBPACK_IMPORTED_MODULE_11__["fn_发送命令书_更新str_textArea"]();
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("form", {
        action: "#",
        method: "get" // onSubmit={() => { //此方式被验证为不可行.
        //     moduleMyfunc.fn_发送命令书_获取切片中的词头数组()
        //     /*注意!!! 这里一定要重新获取切片中的词头!!
        //     因为你这里的词头数组, 是页面渲染后, 再来用按钮手动从state中拿到的,
        //     所以并非是页面渲染前的state中的原始数据,
        //     所以当本表单被提交后, 后天拿到的state中的数据都会被清空!
        //     所以你必须在表单提交后, 再次来获取这个词头数组, 才能保持页面上这块数据的永远显示.
        //     */
        // }}

      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("textarea", {
        rows: "10",
        cols: "50",
        name: 'area_StrSelected',
        value: this.state.str_textArea,
        onChange: function onChange() {
          _store_myFunc__WEBPACK_IMPORTED_MODULE_11__["fn_发送命令书_可编辑str_textArea"](event.target.value);
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "button",
        value: '清空',
        onClick: function onClick() {
          _store_myFunc__WEBPACK_IMPORTED_MODULE_11__["fn_发送命令书_清空str_textArea"]();
        }
      }), "\xA0", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "submit",
        value: "\u8BA9\u670D\u52A1\u5668\u4FDD\u5B58\u6587\u4EF6\u5230\u7535\u8111\u4E0A"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("hr", null));
    }
  }]);

  return Cpn_TextArea;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);



/***/ }),

/***/ "./pages/Cpn_selectedContents.jsx":
/*!****************************************!*\
  !*** ./pages/Cpn_selectedContents.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cpn_selectedContents; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _store_myFunc_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../store/myFunc.js */ "./store/myFunc.js");
/* harmony import */ var _store_objStore_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../store/objStore.js */ "./store/objStore.js");
/* harmony import */ var _store_fnCreateObjAction_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../store/fnCreateObjAction.js */ "./store/fnCreateObjAction.js");







//选出的释义与例句内容






var Cpn_selectedContents =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Cpn_selectedContents, _React$Component);

  function Cpn_selectedContents(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Cpn_selectedContents);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Cpn_selectedContents).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "fn_updateThisState", function () {
      //一旦监听到财务专家更新了state对象, 就执行本回调函数
      _this.setState(_store_objStore_js__WEBPACK_IMPORTED_MODULE_10__["default"].getState());
    });

    _this.state = _store_objStore_js__WEBPACK_IMPORTED_MODULE_10__["default"].getState(); //从银行拿到默认的state对象

    _store_objStore_js__WEBPACK_IMPORTED_MODULE_10__["default"].subscribe(_this.fn_updateThisState);
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Cpn_selectedContents, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "\u9009\u51FA\u7684\u91CA\u4E49\u4E0E\u4F8B\u53E5\u5185\u5BB9:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: objCss.css选出的内容
      }, this.state.arr_selectedContent.map(function (item, index, arr) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
          key: index,
          onClick: function onClick() {
            _store_myFunc_js__WEBPACK_IMPORTED_MODULE_9__["fn_发送命令书_从选出内容的数组中删除本元素"](index);
          }
        }, item);
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("hr", null));
    }
  }]);

  return Cpn_selectedContents;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component); //----------------------------------------



var objCss = {
  css选出的内容: {
    height: "200px",
    border: "1px solid",
    overflow: "auto"
  }
};

/***/ }),

/***/ "./pages/Cpn_sliceArrWordName.jsx":
/*!****************************************!*\
  !*** ./pages/Cpn_sliceArrWordName.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cpn_sliceArrWordName; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _store_objStore_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../store/objStore.js */ "./store/objStore.js");
/* harmony import */ var _store_fnCreateObjAction_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../store/fnCreateObjAction.js */ "./store/fnCreateObjAction.js");
/* harmony import */ var _store_myFunc_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../store/myFunc.js */ "./store/myFunc.js");







//切片显示词头数组







var Cpn_sliceArrWordName =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Cpn_sliceArrWordName, _React$Component);

  function Cpn_sliceArrWordName(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Cpn_sliceArrWordName);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Cpn_sliceArrWordName).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "fn_updateThisState", function () {
      //一旦监听到财务专家更新了state对象, 就执行本回调函数
      _this.setState(_store_objStore_js__WEBPACK_IMPORTED_MODULE_9__["default"].getState());
    });

    _this.state = _store_objStore_js__WEBPACK_IMPORTED_MODULE_9__["default"].getState(); //从银行拿到默认的state对象

    _store_objStore_js__WEBPACK_IMPORTED_MODULE_9__["default"].subscribe(_this.fn_updateThisState);
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Cpn_sliceArrWordName, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, "indexStart:", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "text",
        size: "5",
        value: this.state.index_start,
        onChange: function onChange() {
          _store_myFunc_js__WEBPACK_IMPORTED_MODULE_11__["fn_发送命令书_更新indexStart"](event);
        }
      }), "- indexEnd:", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "text",
        size: "5",
        value: this.state.index_end,
        onChange: function onChange() {
          _store_myFunc_js__WEBPACK_IMPORTED_MODULE_11__["fn_发送命令书_更新indexEnd"](event);
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "button",
        value: '显示切片(数组)中的词头',
        onClick: function onClick() {
          _store_myFunc_js__WEBPACK_IMPORTED_MODULE_11__["fn_发送命令书_获取切片中的词头数组"]();
        }
      }), "\xA0", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "button",
        value: "\u4E0B20\u4E2A\u5355\u8BCD",
        onClick: function onClick() {
          _store_myFunc_js__WEBPACK_IMPORTED_MODULE_11__["fn_发送命令书_获取下20个单词"]();
        }
      }), "\xA0", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "button",
        value: "\u4E0A20\u4E2A\u5355\u8BCD",
        onClick: function onClick() {
          _store_myFunc_js__WEBPACK_IMPORTED_MODULE_11__["fn_发送命令书_获取上20个单词"]();
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "index [", this.state.index_start, "-", this.state.index_end, "] \u4E2D\u7684\u8BCD\u5934\u6709:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: objCss.容器
      }, this.state.arr_wordNameInSlice.map(function (itemWordName, index, arr) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          key: index,
          style: objCss.子项,
          onClick: function onClick() {
            _store_myFunc_js__WEBPACK_IMPORTED_MODULE_11__["fn_发送命令书_搜索单词"](event.target.innerText);
          }
        }, itemWordName);
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("hr", null));
    }
  }]);

  return Cpn_sliceArrWordName;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component); //----------------------------------------



var objCss = {
  容器: {
    /*里面有专属于容器的flex属性*/
    display: 'flex',
    height: '200px',
    border: "solid 1px",
    // flexDirection: 'row-reverse', /*每行中的元素, 从右到左排*/
    flexWrap: 'wrap',

    /*一行超过容器宽度, 就换行*/
    alignContent: "flex-start",
    //行与行的行距, 不平均分配容器的高度, 而是采用默认的固定行距.
    overflow: "auto" //超出高度则使用滚动条,

  },
  子项: {
    /*里面有专属于子项的flex属性*/
    width: '33.33%' // flexGrow: 1, //一行中无论有几个元素, 都平均分配容器的宽度

  }
};

/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cpn_Index; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _store_objStore_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store/objStore.js */ "./store/objStore.js");
/* harmony import */ var _store_fnCreateObjAction_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../store/fnCreateObjAction.js */ "./store/fnCreateObjAction.js");
/* harmony import */ var _pages_Cpn_FindSingleWord__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pages/Cpn_FindSingleWord */ "./pages/Cpn_FindSingleWord.jsx");
/* harmony import */ var _pages_Cpn_sliceArrWordName__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../pages/Cpn_sliceArrWordName */ "./pages/Cpn_sliceArrWordName.jsx");
/* harmony import */ var _pages_Cpn_SingleWordAllInfo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../pages/Cpn_SingleWordAllInfo */ "./pages/Cpn_SingleWordAllInfo.jsx");
/* harmony import */ var _pages_Cpn_selectedContents__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../pages/Cpn_selectedContents */ "./pages/Cpn_selectedContents.jsx");
/* harmony import */ var _pages_Cpn_TextArea__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../pages/Cpn_TextArea */ "./pages/Cpn_TextArea.jsx");















var Cpn_Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Cpn_Index, _React$Component);

  function Cpn_Index(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Cpn_Index);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Cpn_Index).call(this, props));
    _this.state = _store_objStore_js__WEBPACK_IMPORTED_MODULE_7__["default"].getState(); //从银行拿到默认的state对象

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Cpn_Index, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "kollins\u4E3B\u63A7\u53F0"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        id: "id\u8BCD\u5934\u5207\u7247\u6570\u7EC4",
        style: objCss.css词头切片数组
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_pages_Cpn_sliceArrWordName__WEBPACK_IMPORTED_MODULE_10__["default"], null)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        id: "id\u5176\u4ED6div\u5143\u7D20\u7684\u6574\u4F53",
        style: objCss.css其他div元素的整体
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_pages_Cpn_FindSingleWord__WEBPACK_IMPORTED_MODULE_9__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_pages_Cpn_SingleWordAllInfo__WEBPACK_IMPORTED_MODULE_11__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_pages_Cpn_selectedContents__WEBPACK_IMPORTED_MODULE_12__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_pages_Cpn_TextArea__WEBPACK_IMPORTED_MODULE_13__["default"], null)));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var divHeight = document.getElementById('id词头切片数组').offsetHeight; //拿到 Window.localStorage对象, 我们把index_start 和 index_end 属性, 存放在Window.localStorage对象中, 免得每次刷新页面, 即提交表单后, 会导致index_start 和 index_end 这两个属性的被重置.
      // function fn_getWindowLocalStorage() {
      //     let objStorage = window.localStorage;
      //     objStorage.indexStart = 0 //进行初始化
      //     objStorage.indexEnd = 19
      // }
      // fn_getWindowLocalStorage()
    }
  }]);

  return Cpn_Index;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);


var objCss = {
  css词头切片数组: {
    position: "fixed",
    background: "rgba(240,240,240,1)"
  },
  //让这个div元素浮动固定.

  /*注意: flex是不支持浮动的, 但是我们可以在运用了flex样式的元素的外面,再包一层div,
  对这个div运用传统的css样式, 就能使用position来浮动了.
   */
  css其他div元素的整体: {
    marginTop: "360px"
  } // let objCss = {
  //     容器: { /**/
  //         display: 'flex',
  //         height: '200px',
  //         border: "solid 1px",
  //         // flexDirection: 'row-reverse', /*每行中的元素, 从右到左排*/
  //         flexWrap: 'wrap', /*一行超过容器宽度, 就换行*/
  //         alignContent: "flex-start", //行与行的行距, 不平均分配容器的高度, 而是采用默认的固定行距.
  //     },
  //
  //     项目: {
  //         width: '33.33%',
  //         // flexGrow: 1, //一行中无论有几个元素, 都平均分配容器的宽度
  //     }
  // }

};

/***/ }),

/***/ "./store/fnCreateObjAction.js":
/*!************************************!*\
  !*** ./store/fnCreateObjAction.js ***!
  \************************************/
/*! exports provided: fn_创建命令书_update_WordCurrentFind, fn_创建命令书_findSingleWord, fn_创建命令书_update_indexStart, fn_创建命令书_update_indexEnd, fn_创建命令书_update_arrWordNameInSlice, fn_创建命令书_获取下20个单词, fn_创建命令书_获取上20个单词, fn_创建命令书_udpate_arrSelectedContent, fn_创建命令书_从选出内容的数组中删除本元素, fn_创建命令书_更新str_textArea, fn_创建命令书_清空str_textArea, fn_创建命令书_可编辑str_textArea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fn_创建命令书_update_WordCurrentFind", function() { return fn_创建命令书_update_WordCurrentFind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fn_创建命令书_findSingleWord", function() { return fn_创建命令书_findSingleWord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fn_创建命令书_update_indexStart", function() { return fn_创建命令书_update_indexStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fn_创建命令书_update_indexEnd", function() { return fn_创建命令书_update_indexEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fn_创建命令书_update_arrWordNameInSlice", function() { return fn_创建命令书_update_arrWordNameInSlice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fn_创建命令书_获取下20个单词", function() { return fn_创建命令书_获取下20个单词; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fn_创建命令书_获取上20个单词", function() { return fn_创建命令书_获取上20个单词; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fn_创建命令书_udpate_arrSelectedContent", function() { return fn_创建命令书_udpate_arrSelectedContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fn_创建命令书_从选出内容的数组中删除本元素", function() { return fn_创建命令书_从选出内容的数组中删除本元素; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fn_创建命令书_更新str_textArea", function() { return fn_创建命令书_更新str_textArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fn_创建命令书_清空str_textArea", function() { return fn_创建命令书_清空str_textArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fn_创建命令书_可编辑str_textArea", function() { return fn_创建命令书_可编辑str_textArea; });
//命令书制造工厂
function fn_创建命令书_update_WordCurrentFind(valueNew) {
  var objAction = {
    type: '命令书_更新WordCurrentFind',
    value: valueNew
  };
  return objAction;
}
function fn_创建命令书_findSingleWord(valueNew) {
  var objAction = {
    type: '命令书_查找SingleWord',
    value: valueNew
  };
  return objAction;
}
function fn_创建命令书_update_indexStart(valueNew) {
  var objAction = {
    type: '命令书_更新indexStart',
    value: valueNew
  };
  return objAction;
}
function fn_创建命令书_update_indexEnd(valueNew) {
  var objAction = {
    type: '命令书_更新indexEnd',
    value: valueNew
  };
  return objAction;
}
function fn_创建命令书_update_arrWordNameInSlice(valueNew) {
  var objAction = {
    type: '命令书_更新arrWordNameInSlice',
    value: valueNew
  };
  return objAction;
}
function fn_创建命令书_获取下20个单词(valueNew) {
  var objAction = {
    type: '命令书_获取下20个单词',
    value: valueNew
  };
  return objAction;
}
function fn_创建命令书_获取上20个单词(valueNew) {
  var objAction = {
    type: '命令书_获取上20个单词',
    value: valueNew
  };
  return objAction;
}
function fn_创建命令书_udpate_arrSelectedContent(valueNew) {
  var objAction = {
    type: '命令书_更新arr_selectedContent',
    value: valueNew
  };
  return objAction;
}
function fn_创建命令书_从选出内容的数组中删除本元素(valueNew) {
  var objAction = {
    type: '命令书_从选出内容的数组中删除本元素',
    value: valueNew
  };
  return objAction;
}
function fn_创建命令书_更新str_textArea(valueNew) {
  var objAction = {
    type: '命令书_更新str_textArea',
    value: valueNew
  };
  return objAction;
}
function fn_创建命令书_清空str_textArea(valueNew) {
  var objAction = {
    type: '命令书_清空str_textArea',
    value: valueNew
  };
  return objAction;
}
function fn_创建命令书_可编辑str_textArea(valueNew) {
  var objAction = {
    type: '命令书_可编辑str_textArea',
    value: valueNew
  };
  return objAction;
}

/***/ }),

/***/ "./store/fnReducer.js":
/*!****************************!*\
  !*** ./store/fnReducer.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_myFunc_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/myFunc.js */ "./store/myFunc.js");




//财务专家

 //客户托管在这里的默认的state对象

var defaultState = {
  // url_BigObjJsonKollins: './static/+json所有柯林斯单词.json', //kollins json路径
  url_BigArrJsonKollins: './static/+arr所有柯林斯单词.json',
  // obj_AllWords: {}, //存放从json文件(一个大的obj对象)中读取到的obj_objJson
  arr_KollinsAllWords: [],
  //存放从json文件(一个大的数组)中读取到的arr_objJson
  word_currentFind: '',
  //当前查找的词头
  index_wordCurrentFind: -1,
  //当前查找的单词, 在arr_AllWords中的索引值
  num_OfElementsInSlice: 0,
  //想切含有多少个元素的切片? 范围是多少? 比如20个元素, 还是30个元素?
  index_start: 0,
  //数组切片的起始索引值
  index_end: 19,
  //数组切片的尾索引值
  // index_start: objStorage.indexStart,
  // index_end: objStorage.indexEnd,
  arr_wordNameInSlice: [],
  //存放对数组切片后, 里面的所有词头组成的数组
  word_name: '',
  //词头
  word_ciGeng: '',
  //词根
  word_yinBiao: '',
  //音标
  word_ArrDef: [],
  //释例数组, 已经过扁平化一维处理.
  arr_selectedContent: [],
  //存放选出的释义与例句内容
  str_textArea: '' //将选出的内容,放入文本框中. 方便发送给后端node.js来另存文件.
  //先从json文件中, 拿到所有的kollins单词数据, 并赋值给defaultState对象的arr_KollinsAllWords属性

};
fn_Set_ArrAllWords(); //调用函数
//财务专家函数

var fnReducer = function fnReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var objAction = arguments.length > 1 ? arguments[1] : undefined;

  // console.log('财务专家收到命令书', objAction);
  if (objAction.type === '命令书_更新WordCurrentFind') {
    var newState = JSON.parse(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3___default()(state));
    newState.word_currentFind = objAction.value;
    return newState;
  }

  if (objAction.type === '命令书_更新indexStart') {
    var _newState = JSON.parse(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3___default()(state));

    _newState.index_start = objAction.value;
    return _newState;
  }

  if (objAction.type === '命令书_更新indexEnd') {
    var _newState2 = JSON.parse(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3___default()(state));

    _newState2.index_end = objAction.value;
    return _newState2;
  }

  if (objAction.type === '命令书_更新arr_selectedContent') {
    var _newState3 = JSON.parse(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3___default()(state));

    _newState3.arr_selectedContent.push(objAction.value);

    return _newState3;
  }

  if (objAction.type === '命令书_从选出内容的数组中删除本元素') {
    var _newState4 = JSON.parse(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3___default()(state));

    var index = objAction.value; //要删除的数组元素的索引值

    _newState4.arr_selectedContent.splice(index, 1); //删除数组中指定索引处的元素. arrayObject.splice(index,howmany,item1,.....,itemX)


    return _newState4;
  }

  if (objAction.type === '命令书_更新str_textArea') {
    var _newState5 = JSON.parse(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3___default()(state));

    var str = '';
    var str词头 = _newState5.word_name + '\r\n';
    var str音标 = _newState5.word_yinBiao + '\r\n';
    var str词根 = '-> ' + _newState5.word_ciGeng + '\r\n\r\n';
    str = str词头 + str音标 + str词根;
    str += _store_myFunc_js__WEBPACK_IMPORTED_MODULE_5__["fn_将arr_selectedContent转换成str_textArea"](_newState5.arr_selectedContent);
    _newState5.str_textArea = str;
    return _newState5;
  } //搜索单个单词,并将内容填充到state中的各对应字段中


  if (objAction.type === '命令书_查找SingleWord') {
    var _newState6 = JSON.parse(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3___default()(state));

    _newState6.word_currentFind = objAction.value; // 用 for...of 来做不起作用, 不知原因为何??
    // for (let index = 0; index <= newState.arr_KollinsAllWords.length, index++;) {
    //     if (newState.arr_KollinsAllWords[index]["key词头"] === objAction.value) {
    //         newState.index_wordCurrentFind = index
    //         newState.word_name = newState.arr_KollinsAllWords[index]["key词头"]
    //         newState.word_yinBiao = newState.arr_KollinsAllWords[index]["key音标"]
    //         newState.word_ciGeng = newState.arr_KollinsAllWords[index]["key词根"]
    //         newState.word_ArrDef = moduleMyfunc.fn_处理所有释例到一维数组(newState.arr_KollinsAllWords[index]["key所有释例"])
    //         newState.arr_selectedContent = [] //当重新查询单词时, 就清空上一次选出的内容
    //         break
    //     }
    // }
    //

    _newState6.arr_KollinsAllWords.forEach(function (itemWord, index, arr) {
      if (itemWord["key词头"] === objAction.value) {
        _newState6.index_wordCurrentFind = index;
        _newState6.word_name = itemWord["key词头"];
        _newState6.word_yinBiao = itemWord["key音标"];
        _newState6.word_ciGeng = itemWord["key词根"];
        _newState6.word_ArrDef = _store_myFunc_js__WEBPACK_IMPORTED_MODULE_5__["fn_处理所有释例到一维数组"](itemWord["key所有释例"]);
        _newState6.arr_selectedContent = []; //当重新查询单词时, 就清空上一次选出的内容
      }
    });

    return _newState6;
  }

  if (objAction.type === '命令书_更新arrWordNameInSlice') {
    var _newState7 = JSON.parse(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3___default()(state));

    _newState7.arr_wordNameInSlice = fn_获取数组切片区间中的词头(_newState7.arr_KollinsAllWords, _newState7.index_start, _newState7.index_end);
    return _newState7;
  }

  if (objAction.type === '命令书_获取下20个单词') {
    var _newState8 = JSON.parse(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3___default()(state));

    _newState8.index_start = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2___default()(_newState8.index_end) + 1;
    _newState8.index_end = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2___default()(_newState8.index_start) + 19;
    _newState8.arr_wordNameInSlice = fn_获取数组切片区间中的词头(_newState8.arr_KollinsAllWords, _newState8.index_start, _newState8.index_end);
    return _newState8;
  }

  if (objAction.type === '命令书_获取上20个单词') {
    var _newState9 = JSON.parse(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3___default()(state));

    _newState9.index_start = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2___default()(_newState9.index_start) - 20;
    _newState9.index_end = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2___default()(_newState9.index_end) - 20;
    _newState9.arr_wordNameInSlice = fn_获取数组切片区间中的词头(_newState9.arr_KollinsAllWords, _newState9.index_start, _newState9.index_end);
    return _newState9;
  }

  if (objAction.type === '命令书_清空str_textArea') {
    var _newState10 = JSON.parse(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3___default()(state));

    _newState10.str_textArea = ''; //除了清空文本框中的值外

    _newState10.arr_selectedContent = [];
    /*也要清空选出的句子, 别忘了这一点!
     因为你添加到str_textArea中的句子, 是从arr_selectedContent中来挑选的,
     如果不清空arr_selectedContent, 里面的残留, 会造成str_textArea里的脏数据.
     */

    return _newState10;
  }

  if (objAction.type === '命令书_可编辑str_textArea') {
    var _newState11 = JSON.parse(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3___default()(state));

    _newState11.str_textArea = objAction.value;
    return _newState11;
  }

  return state; //如果没有进入上面的if语句而返回一个newState, 本函数也要返回一个默认的defaultState.
};

/* harmony default export */ __webpack_exports__["default"] = (fnReducer); //----------------------------------------
//从json文件中, 拿到所有的kollins单词数据, 返回一个promise对象

function fnPms_getWordArr_FromJsonFile(_x) {
  return _fnPms_getWordArr_FromJsonFile.apply(this, arguments);
} //将拿到的所有柯林斯单词, 赋值给defaultState对象的arr_AllWords属性


function _fnPms_getWordArr_FromJsonFile() {
  _fnPms_getWordArr_FromJsonFile = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(urlJson) {
    var Pms_ArrAllWords;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(urlJson).then(function (res) {
              return res.data;
            })["catch"](function (err) {
              console.log(err);
            });

          case 2:
            Pms_ArrAllWords = _context.sent;
            return _context.abrupt("return", Pms_ArrAllWords);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _fnPms_getWordArr_FromJsonFile.apply(this, arguments);
}

function fn_Set_ArrAllWords() {
  fnPms_getWordArr_FromJsonFile(defaultState.url_BigArrJsonKollins).then(function (res) {
    defaultState.arr_KollinsAllWords = res;
  })["catch"](function (err) {
    console.log(err);
  });
}

function fn_获取数组切片区间中的词头(arr, indexStart, indexEnd) {
  var arrSlice = arr.slice(indexStart, indexEnd);
  var arrWordName = arrSlice.map(function (item, index, arr) {
    return item['key词头'];
  });
  return arrWordName;
}

/***/ }),

/***/ "./store/myFunc.js":
/*!*************************!*\
  !*** ./store/myFunc.js ***!
  \*************************/
/*! exports provided: fn_发送命令书_双向绑定word_currentFind, fn_发送命令书_搜索单词, fn_发送命令书_更新indexStart, fn_发送命令书_更新indexEnd, fn_发送命令书_获取切片中的词头数组, fn_发送命令书_获取下20个单词, fn_发送命令书_获取上20个单词, fn_发送命令书_更新arrSelectedContent, fn_发送命令书_从选出内容的数组中删除本元素, fn_发送命令书_更新str_textArea, fn_发送命令书_清空str_textArea, fn_发送命令书_可编辑str_textArea, fn_处理所有释例到一维数组, fn_将arr_selectedContent转换成str_textArea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fn_发送命令书_双向绑定word_currentFind", function() { return fn_发送命令书_双向绑定word_currentFind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fn_发送命令书_搜索单词", function() { return fn_发送命令书_搜索单词; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fn_发送命令书_更新indexStart", function() { return fn_发送命令书_更新indexStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fn_发送命令书_更新indexEnd", function() { return fn_发送命令书_更新indexEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fn_发送命令书_获取切片中的词头数组", function() { return fn_发送命令书_获取切片中的词头数组; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fn_发送命令书_获取下20个单词", function() { return fn_发送命令书_获取下20个单词; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fn_发送命令书_获取上20个单词", function() { return fn_发送命令书_获取上20个单词; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fn_发送命令书_更新arrSelectedContent", function() { return fn_发送命令书_更新arrSelectedContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fn_发送命令书_从选出内容的数组中删除本元素", function() { return fn_发送命令书_从选出内容的数组中删除本元素; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fn_发送命令书_更新str_textArea", function() { return fn_发送命令书_更新str_textArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fn_发送命令书_清空str_textArea", function() { return fn_发送命令书_清空str_textArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fn_发送命令书_可编辑str_textArea", function() { return fn_发送命令书_可编辑str_textArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fn_处理所有释例到一维数组", function() { return fn_处理所有释例到一维数组; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fn_将arr_selectedContent转换成str_textArea", function() { return fn_将arr_selectedContent转换成str_textArea; });
/* harmony import */ var _objStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objStore */ "./store/objStore.js");
/* harmony import */ var _fnCreateObjAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fnCreateObjAction */ "./store/fnCreateObjAction.js");


var fn_发送命令书_双向绑定word_currentFind = function fn_发送命令书_双向绑定word_currentFind(event) {
  _objStore__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch(_fnCreateObjAction__WEBPACK_IMPORTED_MODULE_1__["fn_创建命令书_update_WordCurrentFind"](event.target.value));
};
var fn_发送命令书_搜索单词 = function fn_发送命令书_搜索单词(wordToFind) {
  //搜索单个单词的柯林斯信息
  _objStore__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch(_fnCreateObjAction__WEBPACK_IMPORTED_MODULE_1__["fn_创建命令书_findSingleWord"](wordToFind));
};
var fn_发送命令书_更新indexStart = function fn_发送命令书_更新indexStart(event) {
  _objStore__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch(_fnCreateObjAction__WEBPACK_IMPORTED_MODULE_1__["fn_创建命令书_update_indexStart"](event.target.value));
};
var fn_发送命令书_更新indexEnd = function fn_发送命令书_更新indexEnd(event) {
  _objStore__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch(_fnCreateObjAction__WEBPACK_IMPORTED_MODULE_1__["fn_创建命令书_update_indexEnd"](event.target.value));
};
var fn_发送命令书_获取切片中的词头数组 = function fn_发送命令书_获取切片中的词头数组() {
  _objStore__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch(_fnCreateObjAction__WEBPACK_IMPORTED_MODULE_1__["fn_创建命令书_update_arrWordNameInSlice"]());
};
var fn_发送命令书_获取下20个单词 = function fn_发送命令书_获取下20个单词() {
  _objStore__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch(_fnCreateObjAction__WEBPACK_IMPORTED_MODULE_1__["fn_创建命令书_获取下20个单词"]());
};
var fn_发送命令书_获取上20个单词 = function fn_发送命令书_获取上20个单词() {
  _objStore__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch(_fnCreateObjAction__WEBPACK_IMPORTED_MODULE_1__["fn_创建命令书_获取上20个单词"]());
};
var fn_发送命令书_更新arrSelectedContent = function fn_发送命令书_更新arrSelectedContent() {
  _objStore__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch(_fnCreateObjAction__WEBPACK_IMPORTED_MODULE_1__["fn_创建命令书_udpate_arrSelectedContent"](event.target.innerText));
};
var fn_发送命令书_从选出内容的数组中删除本元素 = function fn_发送命令书_从选出内容的数组中删除本元素(index) {
  _objStore__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch(_fnCreateObjAction__WEBPACK_IMPORTED_MODULE_1__["fn_创建命令书_从选出内容的数组中删除本元素"](index));
};
var fn_发送命令书_更新str_textArea = function fn_发送命令书_更新str_textArea() {
  _objStore__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch(_fnCreateObjAction__WEBPACK_IMPORTED_MODULE_1__["fn_创建命令书_更新str_textArea"]());
};
var fn_发送命令书_清空str_textArea = function fn_发送命令书_清空str_textArea() {
  _objStore__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch(_fnCreateObjAction__WEBPACK_IMPORTED_MODULE_1__["fn_创建命令书_清空str_textArea"]());
};
var fn_发送命令书_可编辑str_textArea = function fn_发送命令书_可编辑str_textArea() {
  _objStore__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch(_fnCreateObjAction__WEBPACK_IMPORTED_MODULE_1__["fn_创建命令书_可编辑str_textArea"]());
}; //----------------------------------------

var fn_处理所有释例到一维数组 = function fn_处理所有释例到一维数组(arr所有释例) {
  var newArr = []; //存放"arr所有释例"在经过处理后的扁平化一维数组

  arr所有释例.forEach(function (item单个释例, index, arr) {
    newArr.push(index + 1); //把编号也作为数组的一个item添加进去, 方便我们查看该单词到底有多少条释义.

    var arr单个释例的释义与例句 = item单个释例.split('|'); //str.split([separator[, limit]])方法, 使用指定的分隔符字符串将一个String对象分割成字符串数组. 返回一个字符串数组,不包括 separator 自身。

    arr单个释例的释义与例句.forEach(function (item, index, arr) {
      newArr.push(item);
    });
    newArr.push('--------');
  });
  return newArr;
}; //将"选出的内容的数组"转换成纯字符串

var fn_将arr_selectedContent转换成str_textArea = function fn_将arr_selectedContent转换成str_textArea(arr) {
  var str = '';

  if (arr.length !== 0) {
    arr.map(function (item) {
      str += item + '\r\n';
    });
  }

  return str;
};

/***/ }),

/***/ "./store/objStore.js":
/*!***************************!*\
  !*** ./store/objStore.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fnReducer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fnReducer.js */ "./store/fnReducer.js");
// 银行


var objStore = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_fnReducer_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (objStore);

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\phpStorm_proj\next_Kollins\pages\index.jsx */"./pages/index.jsx");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/parse-int":
/*!***********************************************!*\
  !*** external "core-js/library/fn/parse-int" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map