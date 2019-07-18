webpackHotUpdate("static\\development\\pages\\index.js",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
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
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "button",
        value: '添加到下面的文本框中',
        onClick: function onClick() {
          _store_myFunc__WEBPACK_IMPORTED_MODULE_11__["fn_发送命令书_更新str_textArea"]();
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("form", {
        action: "#",
        method: "get",
        onSubmit: function onSubmit(event) {
          _this2.fn提交表单(event);
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("textarea", {
        rows: "10",
        cols: "50",
        name: 'area_StrSelected',
        value: this.state.str_textArea,
        onChange: function onChange(event) {}
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

/***/ "./store/fnCreateObjAction.js":
/*!************************************!*\
  !*** ./store/fnCreateObjAction.js ***!
  \************************************/
/*! exports provided: fn_创建命令书_update_WordCurrentFind, fn_创建命令书_findSingleWord, fn_创建命令书_update_indexStart, fn_创建命令书_update_indexEnd, fn_创建命令书_update_arrWordNameInSlice, fn_创建命令书_获取下20个单词, fn_创建命令书_udpate_arrSelectedContent, fn_创建命令书_从选出内容的数组中删除本元素, fn_创建命令书_更新str_textArea, fn_创建命令书_清空str_textArea */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fn_创建命令书_从选出内容的数组中删除本元素", function() { return fn_创建命令书_从选出内容的数组中删除本元素; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fn_创建命令书_更新str_textArea", function() { return fn_创建命令书_更新str_textArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fn_创建命令书_清空str_textArea", function() { return fn_创建命令书_清空str_textArea; });
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
    str = _newState5.word_name + '\r\n' + _newState5.word_yinBiao + '\r\n' + _newState5.word_ciGeng + '\r\n\r\n';
    str += _store_myFunc_js__WEBPACK_IMPORTED_MODULE_5__["fn_将arr_selectedContent转换成str_textArea"](_newState5.arr_selectedContent);
    _newState5.str_textArea = str;
    return _newState5;
  } //搜索单个单词,并将内容填充到state中的各对应字段中


  if (objAction.type === '命令书_查找SingleWord') {
    var _newState6 = JSON.parse(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3___default()(state));

    _newState6.word_currentFind = objAction.value;

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

  if (objAction.type === '命令书_清空str_textArea') {
    var _newState9 = JSON.parse(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3___default()(state));

    _newState9.str_textArea = '';
    _newState9.arr_selectedContent;
    return _newState9;
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
/*! exports provided: fn_发送命令书_双向绑定word_currentFind, fn_发送命令书_搜索单词, fn_发送命令书_更新indexStart, fn_发送命令书_更新indexEnd, fn_发送命令书_获取切片中的词头数组, fn_发送命令书_获取下20个单词, fn_发送命令书_更新arrSelectedContent, fn_发送命令书_从选出内容的数组中删除本元素, fn_发送命令书_更新str_textArea, fn_发送命令书_清空str_textArea, fn_处理所有释例到一维数组, fn_将arr_selectedContent转换成str_textArea */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fn_发送命令书_从选出内容的数组中删除本元素", function() { return fn_发送命令书_从选出内容的数组中删除本元素; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fn_发送命令书_更新str_textArea", function() { return fn_发送命令书_更新str_textArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fn_发送命令书_清空str_textArea", function() { return fn_发送命令书_清空str_textArea; });
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

/***/ })

})
//# sourceMappingURL=index.js.49365ed5e7e7e784d3dd.hot-update.js.map