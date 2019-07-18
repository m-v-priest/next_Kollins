import objStore from "./objStore";
import * as moduleActionFactory from "./fnCreateObjAction";


export let fn_发送命令书_双向绑定word_currentFind = (event) => {
    objStore.dispatch(moduleActionFactory.fn_创建命令书_update_WordCurrentFind(event.target.value))
}

export let fn_发送命令书_搜索单词 = (wordToFind) => { //搜索单个单词的柯林斯信息
    objStore.dispatch(moduleActionFactory.fn_创建命令书_findSingleWord(wordToFind))
}

export let fn_发送命令书_更新indexStart = (event) => {
    objStore.dispatch(moduleActionFactory.fn_创建命令书_update_indexStart(event.target.value))
}

export let fn_发送命令书_更新indexEnd = (event) => {
    objStore.dispatch(moduleActionFactory.fn_创建命令书_update_indexEnd(event.target.value))
}

export let fn_发送命令书_获取切片中的词头数组 = () => {
    objStore.dispatch(moduleActionFactory.fn_创建命令书_update_arrWordNameInSlice())
}

export let fn_发送命令书_获取下20个单词 = () => {
    objStore.dispatch(moduleActionFactory.fn_创建命令书_获取下20个单词())
}

export let fn_发送命令书_更新arrSelectedContent = () => {
    objStore.dispatch(moduleActionFactory.fn_创建命令书_udpate_arrSelectedContent(event.target.innerText))
}

export let fn_发送命令书_从选出内容的数组中删除本元素 = (index) => {
    objStore.dispatch(moduleActionFactory.fn_创建命令书_从选出内容的数组中删除本元素(index))
}

export let fn_发送命令书_更新str_textArea = () => {
    objStore.dispatch(moduleActionFactory.fn_创建命令书_更新str_textArea())
}

export let fn_发送命令书_清空str_textArea = () => {
    objStore.dispatch(moduleActionFactory.fn_创建命令书_清空str_textArea())
}





//----------------------------------------

export let fn_处理所有释例到一维数组 = (arr所有释例) => {
    let newArr = [] //存放"arr所有释例"在经过处理后的扁平化一维数组

    arr所有释例.forEach((item单个释例, index, arr) => {
        newArr.push(index + 1) //把编号也作为数组的一个item添加进去, 方便我们查看该单词到底有多少条释义.

        let arr单个释例的释义与例句 = item单个释例.split('|') //str.split([separator[, limit]])方法, 使用指定的分隔符字符串将一个String对象分割成字符串数组. 返回一个字符串数组,不包括 separator 自身。
        arr单个释例的释义与例句.forEach((item, index, arr) => {
            newArr.push(item)
        })
        newArr.push('--------')
    })

    return newArr
}

//将"选出的内容的数组"转换成纯字符串
export let fn_将arr_selectedContent转换成str_textArea = (arr) => {
    let str = ''
    if (arr.length !== 0) {
        arr.map(item => {
            str += item + '\r\n'
        })
    }
    return str
}