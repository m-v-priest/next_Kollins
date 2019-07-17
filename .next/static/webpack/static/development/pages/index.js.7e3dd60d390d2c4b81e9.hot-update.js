webpackHotUpdate("static\\development\\pages\\index.js",{

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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _store_objStore_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store/objStore.js */ "./store/objStore.js");
/* harmony import */ var _store_fnCreateObjAction_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../store/fnCreateObjAction.js */ "./store/fnCreateObjAction.js");





//切片显示词头数组





var Cpn_sliceArrWordName =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Cpn_sliceArrWordName, _React$Component);

  function Cpn_sliceArrWordName(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Cpn_sliceArrWordName);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Cpn_sliceArrWordName).call(this, props));
    _this.state = _store_objStore_js__WEBPACK_IMPORTED_MODULE_7__["default"].getState(); //从银行拿到默认的state对象

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Cpn_sliceArrWordName, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, "indexStart:", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        type: "text",
        size: "5",
        value: this.state.index_start,
        onChange: function onChange(event) {}
      }), "- indexEnd:", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        type: "text",
        size: "5",
        value: this.state.index_end,
        onChange: function onChange(event) {}
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        type: "button",
        value: '显示切片(数组)中的词头',
        onClick: function onClick() {}
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "index [", this.state.index_start, "-", this.state.index_end, "] \u4E2D\u7684\u8BCD\u5934\u6709:"), this.state.arr_wordNameInSlice.map(function (itemWordName, index, arr) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null, itemWordName);
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("hr", null));
    }
  }]);

  return Cpn_sliceArrWordName;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.7e3dd60d390d2c4b81e9.hot-update.js.map