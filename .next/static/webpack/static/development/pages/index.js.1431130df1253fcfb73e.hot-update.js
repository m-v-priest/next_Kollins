webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./store/myFunc.js":
/*!*************************!*\
  !*** ./store/myFunc.js ***!
  \*************************/
/*! exports provided: fn_发送命令书_双向绑定word_currentFind, fn_发送命令书_搜索单词, fn_发送命令书_更新indexStart, fn_发送命令书_更新indexEnd, fn_发送命令书_获取切片中的词头数组, fn_发送命令书_获取下20个单词, fn_发送命令书_更新arrSelectedContent, fn_发送命令书_从选出内容的数组中删除本元素, fn_发送命令书_更新str_textArea, fn_处理所有释例到一维数组, fn_将arr_selectedContent转换成str_selected */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fn_处理所有释例到一维数组", function() { return fn_处理所有释例到一维数组; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fn_将arr_selectedContent转换成str_selected", function() { return fn_将arr_selectedContent转换成str_selected; });
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

var fn_将arr_selectedContent转换成str_selected = function fn_将arr_selectedContent转换成str_selected(arr_selectedDef) {
  var str_selected = '';

  if (arr_selectedDef.length !== 0) {
    arr_selectedDef.map(function (item) {
      str_selected += item + '\r\n';
      console.log('-->', str_selected);
    });
  }

  console.log(str_selected);
  return str_selected;
};

/***/ })

})
//# sourceMappingURL=index.js.1431130df1253fcfb73e.hot-update.js.map