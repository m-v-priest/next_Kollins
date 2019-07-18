webpackHotUpdate("static\\development\\pages\\index.js",{

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
  } //搜索单个单词,并将内容填充到state中的各对应字段中


  if (objAction.type === '命令书_查找SingleWord') {
    var _newState3 = JSON.parse(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3___default()(state));

    _newState3.word_currentFind = objAction.value;

    _newState3.arr_KollinsAllWords.forEach(function (itemWord, index, arr) {
      if (itemWord["key词头"] === objAction.value) {
        _newState3.index_wordCurrentFind = index;
        _newState3.word_name = itemWord["key词头"];
        _newState3.word_yinBiao = itemWord["key音标"];
        _newState3.word_ciGeng = itemWord["key词根"];
        _newState3.word_ArrDef = itemWord["key所有释例"];
        _newState3.arr_selectedContent = []; //当重新查询单词时, 就清空上一次选出的内容
      }
    });

    return _newState3;
  }

  if (objAction.type === '命令书_更新arrWordNameInSlice') {
    var _newState4 = JSON.parse(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3___default()(state));

    _newState4.arr_wordNameInSlice = fn_获取数组切片区间中的词头(_newState4.arr_KollinsAllWords, _newState4.index_start, _newState4.index_end);
    return _newState4;
  }

  if (objAction.type === '命令书_获取下20个单词') {
    var _newState5 = JSON.parse(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3___default()(state));

    _newState5.index_start = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2___default()(_newState5.index_end) + 1;
    _newState5.index_end = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2___default()(_newState5.index_start) + 19;
    _newState5.arr_wordNameInSlice = fn_获取数组切片区间中的词头(_newState5.arr_KollinsAllWords, _newState5.index_start, _newState5.index_end);
    return _newState5;
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

/***/ })

})
//# sourceMappingURL=index.js.518541013242f1289b7c.hot-update.js.map