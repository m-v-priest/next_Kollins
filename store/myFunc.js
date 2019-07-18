import objStore from "./objStore";
import * as moduleActionFactory from "./fnCreateObjAction";


export let fn_发送命令书_双向绑定word_currentFind=(event)=>{
    objStore.dispatch(moduleActionFactory.fn_创建命令书_update_WordCurrentFind(event.target.value))
}

export let fn_发送命令书_搜索单词=(wordToFind)=>{ //搜索单个单词的柯林斯信息
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


