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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
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
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, " kollins\u4E2D\u5BF9\u672C\u5355\u8BCD\u7684\u89E3\u91CA:", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "\u7D22\u5F15\u503C\u4E3A: ", this.state.index_wordCurrentFind), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "\u8BCD\u5934: ", this.state.word_name, " | \u97F3\u6807: ", this.state.word_yinBiao), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "\u8BCD\u6839: ", this.state.word_ciGeng), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, "\u6240\u6709\u91CA\u4F8B:", this.state.word_ArrDef.map(function (strItem, index, arr) {
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
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);



/***/ }),

/***/ "./store/fnCreateObjAction.js":
/*!************************************!*\
  !*** ./store/fnCreateObjAction.js ***!
  \************************************/
/*! exports provided: fn_创建命令书_update_WordCurrentFind, fn_创建命令书_findSingleWord, fn_创建命令书_update_indexStart, fn_创建命令书_update_indexEnd, fn_创建命令书_update_arrWordNameInSlice, fn_创建命令书_获取下20个单词, fn_创建命令书_udpate_arrSelectedContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fn_创建命令书_update_WordCurrentFind", function() { return fn_创建命令书_update_WordCurrentFind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fn_创建命令书_findSingleWord", function() { return fn_创建命令书_findSingleWord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fn_创建命令书_update_indexStart", function() { return fn_创建命令书_update_indexStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fn_创建命令书_update_indexEnd", function() { return fn_创建命令书_update_indexEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fn_创建命令书_update_arrWordNameInSlice", function() { return fn_创建命令书_update_arrWordNameInSlice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fn_创建命令书_获取下20个单词", function() { return fn_创建命令书_获取下20个单词; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fn_创建命令书_udpate_arrSelectedContent", function() { return fn_创建命令书_udpate_arrSelectedContent; });
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
function fn_创建命令书_udpate_arrSelectedContent(valueNew) {
  var objAction = {
    type: '命令书_更新arr_selectedContent',
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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
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

    _newState3.index_end = objAction.value;
    return _newState3;
  } //搜索单个单词,并将内容填充到state中的各对应字段中


  if (objAction.type === '命令书_查找SingleWord') {
    var _newState4 = JSON.parse(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3___default()(state));

    _newState4.word_currentFind = objAction.value;

    _newState4.arr_KollinsAllWords.forEach(function (itemWord, index, arr) {
      if (itemWord["key词头"] === objAction.value) {
        _newState4.index_wordCurrentFind = index;
        _newState4.word_name = itemWord["key词头"];
        _newState4.word_yinBiao = itemWord["key音标"];
        _newState4.word_ciGeng = itemWord["key词根"];
        _newState4.word_ArrDef = _store_myFunc_js__WEBPACK_IMPORTED_MODULE_5__["fn_处理所有释例到一维数组"](itemWord["key所有释例"]);
        _newState4.arr_selectedContent = []; //当重新查询单词时, 就清空上一次选出的内容
      }
    });

    return _newState4;
  }

  if (objAction.type === '命令书_更新arrWordNameInSlice') {
    var _newState5 = JSON.parse(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3___default()(state));

    _newState5.arr_wordNameInSlice = fn_获取数组切片区间中的词头(_newState5.arr_KollinsAllWords, _newState5.index_start, _newState5.index_end);
    return _newState5;
  }

  if (objAction.type === '命令书_获取下20个单词') {
    var _newState6 = JSON.parse(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3___default()(state));

    _newState6.index_start = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2___default()(_newState6.index_end) + 1;
    _newState6.index_end = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2___default()(_newState6.index_start) + 19;
    _newState6.arr_wordNameInSlice = fn_获取数组切片区间中的词头(_newState6.arr_KollinsAllWords, _newState6.index_start, _newState6.index_end);
    return _newState6;
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
/*! exports provided: fn_发送命令书_双向绑定word_currentFind, fn_发送命令书_搜索单词, fn_发送命令书_更新indexStart, fn_发送命令书_更新indexEnd, fn_发送命令书_获取切片中的词头数组, fn_发送命令书_获取下20个单词, fn_发送命令书_更新arrSelectedContent, fn_处理所有释例到一维数组 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fn_发送命令书_双向绑定word_currentFind", function() { return fn_发送命令书_双向绑定word_currentFind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fn_发送命令书_搜索单词", function() { return fn_发送命令书_搜索单词; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fn_发送命令书_更新indexStart", function() { return fn_发送命令书_更新indexStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fn_发送命令书_更新indexEnd", function() { return fn_发送命令书_更新indexEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fn_发送命令书_获取切片中的词头数组", function() { return fn_发送命令书_获取切片中的词头数组; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fn_发送命令书_获取下20个单词", function() { return fn_发送命令书_获取下20个单词; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fn_发送命令书_更新arrSelectedContent", function() { return fn_发送命令书_更新arrSelectedContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fn_处理所有释例到一维数组", function() { return fn_处理所有释例到一维数组; });
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
var fn_发送命令书_更新arrSelectedContent = function fn_发送命令书_更新arrSelectedContent() {
  _objStore__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch(_fnCreateObjAction__WEBPACK_IMPORTED_MODULE_1__["fn_创建命令书_udpate_arrSelectedContent"](event.target.innerText));
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
};

/***/ })

})
//# sourceMappingURL=index.js.a55c0c96c33bf5a70a35.hot-update.js.map