let mongoose = require('mongoose')


let docReactState = { //会插入到 react collection 中的第一条文档
    url_BigArrJsonKollins: './static/+arr所有柯林斯单词.json',
    arr_KollinsAllWords: [],        //存放从json文件(一个大的数组)中读取到的arr_objJson

    word_currentFind: '',
    index_wordCurrentFind: -1,

    num_OfElementsInSlice: 0,       //想切含有多少个元素的切片? 范围是多少? 比如20个元素, 还是30个元素?
    index_start: 0,
    index_end: 19,
    arr_wordNameInSlice: Array,     //存放对数组切片后, 里面的所有词头组成的数组

    word_name: '',
    word_ciGeng: '',
    word_yinBiao: '',
    word_ArrDef: [],                //释例数组, 已经过扁平化一维处理.

    arr_selectedContent: [],        //存放选出的释义与例句内容
    str_textArea: '',               //将选出的内容,放入文本框中. 方便发送给后端node.js来另存文件.
}

let ModelReactState = fn_获取ModelReactState()


module.exports = {
    ModelReactState,
    fn_连接数据库,
    fn_获取ModelReactState,
    fn_findAllDoc
}


//----------------------------------------
// 下面是函数库


function fn_连接数据库(url) {
    mongoose.connect(url, {useNewUrlParser: true}) //连接test数据库. 第二个参数 {useNewUrlParser: true} 是个URL字符串的解析器.

    let db = mongoose.connection;   //监听各种连接状态

    db.on('error', () => {          //如果发生错误,就调用回调函数
        console.log(`mongoDB连接失败_fail`);
    })

    db.once('open', () => {         //Once our connection opens, our callback will be called.
        console.log(`mongoDB连接成功_success!`);
    })

    db.once('close', () => {
        console.log(`mongoDB已断开连接_disconnect!`);
    })
}

//----------------------------------------

function fn_获取ModelKollins() {
    // 创建柯林斯辞典的表头模型, 类似于接口.
    let SchemaKollins = mongoose.Schema({
        wordName: String,
        wordPronunciation: String,
        wordCiGeng: String,
        arrDef: Array
    })

    /*
    根据表头模型, 生成Model对象(Model 就是我们用来构造 文档document 的 Class。),
    就如同用interface接口 来约束class类一样!

    用法: Mongoose.Model(1.Model的名字, 2.生成Model所需要的schema) 根据接口, 生成类.
    默认情况下mongoose会根据我们传入的Model名字来生成collection名字.
    */
    let ModelKollins = mongoose.model('colKollins', SchemaKollins)
    return ModelKollins
}


//----------------------------------------

function fn_获取ModelReactState() {
    // 创建一个我们react的state对象的表头模型
    let SchemaReactState = mongoose.Schema({
        url_BigArrJsonKollins: String,
        arr_KollinsAllWords: Array,     //存放从json文件(一个大的数组)中读取到的arr_objJson

        word_currentFind: String,
        index_wordCurrentFind: Number,

        num_OfElementsInSlice: Number,  //想切含有多少个元素的切片? 范围是多少? 比如20个元素, 还是30个元素?
        index_start: Number,
        index_end: Number,
        arr_wordNameInSlice: Array,     //存放对数组切片后, 里面的所有词头组成的数组

        word_name: String,
        word_ciGeng: String,
        word_yinBiao: String,
        word_ArrDef: Array,             //释例数组, 已经过扁平化一维处理.

        arr_selectedContent: Array,     //存放选出的释义与例句内容
        str_textArea: String,           //将选出的内容,放入文本框中. 方便发送给后端node.js来另存文件.
    })

    //根据表头模型, 生成Model对象(Model 就是我们用来构造 文档document 的 Class。)
    let ModelReactState
    if (mongoose.models && mongoose.models['colreactstates']) {
        console.log('model已存在');
        console.log('mongoose.models -->', mongoose.models);
        // console.log('mongoose.models[\'colreactstates\']-->',mongoose.models['colreactstates']);
        //如果ModelReactState之前就已经被创建出来了,这里不需要重复创建了, 我们就直接返回它
        ModelReactState = mongoose.models['colreactstates'];
    }
    else { //如果ModelReactState还没创建过, 就新建它
        ModelReactState = mongoose.model('colreactstates', SchemaReactState)
        console.log('新建了model');
        console.log('ModelReactState -->', ModelReactState);
    }
    return ModelReactState
}

//----------------------------------------

function fn_给collection插入document(doc, modelName) {
    /*
    创建 类的实例,即mongoDB中的文档.
    每个document 都是一个Model的实例,
    它的属性和行为都会被声明在 schema(类似于"class类")里面.
     */
    let doc1 = new ModelReactState(doc)

    /*
    将document插入collection中.
    Model提供了一个create方法, 来对数据进行保存,
    用法是: Model.create(文档数据，callback)
    */
    modelName.create(doc1, (err) => {
        if (!err) {
            console.log('Document inserted into collection successfully');
        }
        else {
            throw err
        }
    })
}

//----------------------------------------

function fn_findAllDoc(modelName, objCondition, arr_WhichFieldToShow) { //参数是: model的名字, 按哪个条件来搜索, 只显示某些字段field (把你想要显示的字段名字, 放在一个数组中)
    modelName.find(
        objCondition,
        arr_WhichFieldToShow,
        (err, arrDoc) => {
            console.log(arrDoc);
        }
    )
}

