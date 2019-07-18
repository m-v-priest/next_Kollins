//命令书制造工厂

export function fn_创建命令书_update_WordCurrentFind(valueNew) {
    let objAction = {
        type: '命令书_更新WordCurrentFind',
        value: valueNew,
    }
    return objAction
}


export function fn_创建命令书_findSingleWord(valueNew) {
    let objAction = {
        type: '命令书_查找SingleWord',
        value: valueNew,
    }
    return objAction
}

export function fn_创建命令书_update_indexStart(valueNew) {
    let objAction = {
        type: '命令书_更新indexStart',
        value: valueNew,
    }
    return objAction
}

export function fn_创建命令书_update_indexEnd(valueNew) {
    let objAction = {
        type: '命令书_更新indexEnd',
        value: valueNew,
    }
    return objAction
}

export function fn_创建命令书_update_arrWordNameInSlice(valueNew) {
    let objAction = {
        type: '命令书_更新arrWordNameInSlice',
        value: valueNew,
    }
    return objAction
}

export function fn_创建命令书_获取下20个单词(valueNew) {
    let objAction = {
        type: '命令书_获取下20个单词',
        value: valueNew,
    }
    return objAction
}




