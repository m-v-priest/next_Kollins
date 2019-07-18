webpackHotUpdate("static\\development\\pages\\index.js",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
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

/***/ })

})
//# sourceMappingURL=index.js.7801a07da043618cc703.hot-update.js.map