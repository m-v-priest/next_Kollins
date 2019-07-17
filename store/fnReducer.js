//财务专家

let defaultState = {
    // url_BigObjJsonKollins: './static/+json所有柯林斯单词.json', //kollins json路径
    url_BigArrJsonKollins: './static/+arr所有柯林斯单词.json',
    // obj_AllWords: {}, //存放从json文件(一个大的obj对象)中读取到的obj_objJson
    arr_AllWords: [], //存放从json文件(一个大的数组)中读取到的arr_objJson

    word_currentFind: '', //当前查找的词头
    index_wordCurrentFind: -1, //当前查找的单词, 在arr_AllWords中的索引值

    num_OfElementsInSlice: 0, //想切含有多少个元素的切片? 范围是多少? 比如20个元素, 还是30个元素?
    index_start: 0, //数组切片的起始索引值
    index_end: 19, //数组切片的尾索引值
    arr_wordNameInSlice: [], //存放对数组切片后, 里面的所有词头组成的数组

    word_name: '', //词头
    word_ciGeng: '', //词根
    word_yinBiao: '', //音标
    word_ArrDef: [], //释例数组, 已经过扁平化一维处理.

    arr_selectedContent: [], //存放选出的释义与例句内容
    str_textArea: '', //将选出的内容,放入文本框中. 方便发送给后端node.js来另存文件.
}


let fnReducer = (state = defaultState, objAction) => {

    if (objAction.type === '命令书_更新newSave') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.newSave = objAction.value
        return newState
    }


    return state
}

export default fnReducer