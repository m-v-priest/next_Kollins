webpackHotUpdate("static\\development\\pages\\index.js",{

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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _store_objStore_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store/objStore.js */ "./store/objStore.js");
/* harmony import */ var _store_fnCreateObjAction_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../store/fnCreateObjAction.js */ "./store/fnCreateObjAction.js");





//单个单词在柯林斯中的详细内容





var Cpn_SingleWordAllInfo =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Cpn_SingleWordAllInfo, _React$Component);

  function Cpn_SingleWordAllInfo(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Cpn_SingleWordAllInfo);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Cpn_SingleWordAllInfo).call(this, props));
    _this.state = _store_objStore_js__WEBPACK_IMPORTED_MODULE_7__["default"].getState(); //从银行拿到默认的state对象

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Cpn_SingleWordAllInfo, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "\u8BCD\u5934: ", this.state.word_name, " | \u97F3\u6807: ", this.state.word_yinBiao), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "\u8BCD\u6839: ", this.state.word_ciGeng), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, "\u6240\u6709\u91CA\u4F8B:", this.state.word_ArrDef.map(function (strItem, index, arr) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          key: index,
          onClick: function onClick(event) {}
        }, strItem);
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("hr", null));
    }
  }]);

  return Cpn_SingleWordAllInfo;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _store_objStore_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store/objStore.js */ "./store/objStore.js");
/* harmony import */ var _store_fnCreateObjAction_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../store/fnCreateObjAction.js */ "./store/fnCreateObjAction.js");
/* harmony import */ var _pages_Cpn_FindSingleWord__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pages/Cpn_FindSingleWord */ "./pages/Cpn_FindSingleWord.jsx");
/* harmony import */ var _pages_Cpn_sliceArrWordName__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../pages/Cpn_sliceArrWordName */ "./pages/Cpn_sliceArrWordName.jsx");
/* harmony import */ var _pages_Cpn_SingleWordAllInfo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../pages/Cpn_SingleWordAllInfo */ "./pages/Cpn_SingleWordAllInfo.jsx");













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
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "kollins\u4E3B\u63A7\u53F0"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_pages_Cpn_FindSingleWord__WEBPACK_IMPORTED_MODULE_9__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_pages_Cpn_sliceArrWordName__WEBPACK_IMPORTED_MODULE_10__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_pages_Cpn_SingleWordAllInfo__WEBPACK_IMPORTED_MODULE_11__["default"], null));
    }
  }]);

  return Cpn_Index;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component); // let objCss = {
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




/***/ })

})
//# sourceMappingURL=index.js.fd860c3e8612b353f3d6.hot-update.js.map