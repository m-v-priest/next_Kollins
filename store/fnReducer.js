//财务专家

import axios from 'axios'


//客户托管在这里的默认的state对象
let defaultState = {
    // url_BigObjJsonKollins: './static/+json所有柯林斯单词.json', //kollins json路径
    url_BigArrJsonKollins: './static/+arr所有柯林斯单词.json',
    // obj_AllWords: {}, //存放从json文件(一个大的obj对象)中读取到的obj_objJson
    arr_KollinsAllWords: [], //存放从json文件(一个大的数组)中读取到的arr_objJson

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


//先从json文件中, 拿到所有的kollins单词数据, 并赋值给defaultState对象的arr_KollinsAllWords属性
fn_Set_ArrAllWords() //调用函数


//财务专家函数
let fnReducer = (state = defaultState, objAction) => {
    // console.log('财务专家收到命令书', objAction);

    if (objAction.type === '命令书_更新WordCurrentFind') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.word_currentFind = objAction.value
        return newState
    }


    if (objAction.type === '命令书_更新indexStart') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.index_start = objAction.value
        return newState
    }


    if (objAction.type === '命令书_更新indexEnd') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.index_end = objAction.value
        return newState
    }


    //搜索单个单词,并将内容填充到state中的各对应字段中
    if (objAction.type === '命令书_查找SingleWord') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.word_currentFind = objAction.value

        newState.arr_KollinsAllWords.forEach((itemWord, index, arr) => {
                if (itemWord["key词头"] === objAction.value) {
                    newState.index_wordCurrentFind = index
                    newState.word_name = itemWord["key词头"]
                    newState.word_yinBiao = itemWord["key音标"]
                    newState.word_ciGeng = itemWord["key词根"]
                    newState.word_ArrDef = itemWord["key所有释例"]
                    newState.arr_selectedContent = [] //当重新查询单词时, 就清空上一次选出的内容
                }
            }
        )
        return newState
    }


    if (objAction.type === '命令书_更新arrWordNameInSlice') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.arr_wordNameInSlice = fn_获取数组切片区间中的词头(newState.arr_KollinsAllWords, newState.index_start, newState.index_end)
        return newState
    }


    if (objAction.type === '命令书_获取下20个单词') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.index_start = parseInt(newState.index_end) + 1
        newState.index_end = parseInt(newState.index_start) + 19
        newState.arr_wordNameInSlice = fn_获取数组切片区间中的词头(newState.arr_KollinsAllWords, newState.index_start, newState.index_end)
        return newState
    }


    return state //如果没有进入上面的if语句而返回一个newState, 本函数也要返回一个默认的defaultState.
}

export default fnReducer


//----------------------------------------

//从json文件中, 拿到所有的kollins单词数据, 返回一个promise对象
async function fnPms_getWordArr_FromJsonFile(urlJson) {
    let Pms_ArrAllWords = await axios.get(urlJson)
        .then(res => {
            return res.data
        })
        .catch(err => {
            console.log(err);
        })
    return Pms_ArrAllWords
}


//将拿到的所有柯林斯单词, 赋值给defaultState对象的arr_AllWords属性
function fn_Set_ArrAllWords() {
    fnPms_getWordArr_FromJsonFile(defaultState.url_BigArrJsonKollins)
        .then(res => {
            defaultState.arr_KollinsAllWords = res
        })
        .catch(err => {
            console.log(err);
        })
}


function fn_获取数组切片区间中的词头(arr, indexStart, indexEnd) {
    let arrSlice = arr.slice(indexStart, indexEnd)
    let arrWordName = arrSlice.map((item, index, arr) => {
        return item['key词头']
    })
    return arrWordName
}
