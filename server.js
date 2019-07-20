const {createServer} = require('http')
const {parse} = require('url')
const next = require('next')
const url = require('url')
const fs = require('fs')
let myFunc_mongoose_connectKollins = require('./store/myFunc_mongoose_connectKollins')

//----------------------------------------

let url_DbTest = "mongodb://localhost/test"
//连接test数据库
myFunc_mongoose_connectKollins.fn_连接数据库(url_DbTest) //拿到 collection reactState 的 model对象


//----------------------------------------

//开启node.js服务器
const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const handle = app.getRequestHandler()

app.prepare().then(() => {
    createServer((req, res) => {
        // Be sure to pass `true` as the second argument to `url.parse`.
        // This tells it to parse the query portion of the URL.
        const parsedUrl = parse(req.url, true)
        const {pathname, query} = parsedUrl

        if (pathname === '/') { //对前端访问根路径"/",进行监控, 并拿到前端get请求发来的数据
            console.log('哈哈哈');
            app.render(req, res, '/', query)
            let objQuery = url.parse(req.url, true).query //获取发送给"/"这个url地址的 GET请求内容
            console.log(objQuery);
            /*
            注意, 由于这里没有用express,而是node.js, 所以我们获取get请求的内容时,
            不能用express的req.query, 而要用node.js的获取get请求的方法, 即: url.parse(req.url, true).query
             */

            //react中多行文本框的数据, 在get请求的area_StrSelected字段中.
            console.log(objQuery.area_StrSelected);

            fn_写入文件('../01_myLearn/辞典kollins/柯林斯选.txt', objQuery.area_StrSelected + '\r\n---------------------\r\n\r\n')


            // 查看kollins collection 里面的所有document.
            myFunc_mongoose_connectKollins.fn_findAllDoc(
                myFunc_mongoose_connectKollins.ModelReactState, {}, ["index_start", "index_end"])
        }


        else {
            handle(req, res, parsedUrl)
        }
    }).listen(3000, err => {
        if (err) {
            throw err
        }
        console.log('> Ready on http://localhost:3000')
    })
})

//----------------------------------------

function fn_写入文件(pathFile, strContent) {
    fs.promises.writeFile(pathFile, strContent, {encoding: 'utf8', flag: 'a'})
    /*
    (1) writeFile()的回调函数,只有一个参数err, 而不像readFile()方法有两个参数err和data.
    (2) flag: 'a' 表示, 文件不存在, 则自动创建; 文件存在, 则追加内容.
     */
        .catch((err) => {
            console.log(err);
        })
}
