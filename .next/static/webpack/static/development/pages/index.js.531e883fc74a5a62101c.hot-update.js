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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
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
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "index [", this.state.index_start, "-", this.state.index_end, "] \u4E2D\u7684\u8BCD\u5934\u6709:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: objCss.容器
      }, this.state.arr_wordNameInSlice.map(function (itemWordName, index, arr) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          key: index,
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
    alignContent: "flex-start" //行与行的行距, 不平均分配容器的高度, 而是采用默认的固定行距.

  },
  子项: {
    /*里面有专属于子项的flex属性*/
    width: '33.33%' // flexGrow: 1, //一行中无论有几个元素, 都平均分配容器的宽度

  }
};

/***/ })

})
//# sourceMappingURL=index.js.531e883fc74a5a62101c.hot-update.js.map