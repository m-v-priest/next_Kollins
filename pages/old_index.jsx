import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'

const objCssStyle = {
    css单个单词搜索: {height: "80px", border: "1px solid", overflow: "auto"},
    css切片显示词头: {height: "180px", width:"350px",border: "1px solid", overflow: "auto", wordWrap:"break-word",wordBreak:"normal"},
    css柯林斯单词全部信息: {height: "200px", border: "1px solid", overflow: "auto"},
    css选出的内容: {height: "200px", border: "1px solid", overflow: "auto"},
    css每个词头显示宽度: {width:"30%"},

}

export default class Cpn_Index extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // url_BigObjJsonKollins: './static/+json所有柯林斯单词.json', //kollins json路径
            url_BigArrJsonKollins: './static/+arr所有柯林斯单词.json',
            // obj_AllWords: {}, //存放从json文件(一个大的obj对象)中读取到的obj_objJson
            arr_AllWords: [], //存放从json文件(一个大的数组)中读取到的arr_objJson

            word_currentFind: '', //当前查找的词头
            index_wordCurrentFind: -1,

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
    }

    render() {
        return (
            <React.Fragment>
                <p>柯林斯查词页面</p>

                {/*查找单个单词*/}
                <div style={objCssStyle.css单个单词搜索}>
                    <input type="text"
                           onChange={(event) => {
                               this.fn_update_wordCurrentFind(event) //双向绑定
                           }}/>
                    <input type="button"
                           value={'查找单词'}
                           onClick={() => {
                               this.fn_查找单词并更新state中对应的内容(this.state.word_currentFind)
                           }}/>


                    <p>当前查找的单词: {this.state.word_currentFind} | 索引值为: {this.state.index_wordCurrentFind}</p>
                </div>
                <hr/>

                {/*切片显示词头数组*/}
                <div style={objCssStyle.css切片显示词头}>
                    indexStart:<input type="text"
                                      size='5'
                                      value={this.state.index_start}
                                      onChange={(event) => {
                                          this.fn_updateIndexStart(event)
                                      }}/>
                    - indexEnd:<input type="text"
                                      size='5'
                                      value={this.state.index_end}
                                      onChange={(event) => {
                                          this.fn_updateIndexEnd(event)
                                      }}/>
                    <input type="button"
                           value={'显示切片中的词头'}
                           onClick={()=>{this.fn_获取数组切片后的里面所有词头组成的数组()}}
                    />

                    <p>index [{this.state.index_start}-{this.state.index_end}]的词头有:</p>
                    {this.state.arr_wordNameInSlice.map((itemWordName, index, arr) => {
                        return <span style={objCssStyle.css每个词头显示宽度}>{itemWordName}</span>
                    })}
                </div>


                {/*单词的详细内容*/}
                <div>
                    <p>词头: {this.state.word_name} | 音标: {this.state.word_yinBiao}</p>
                    <p>词根: {this.state.word_ciGeng}</p>
                    {/*<p>所有释例: {this.state.word_ArrDef}</p>*/}


                    {/*所有释例*/}
                    {/*下面, 用css样式, 给div元素设置固定高度, 并显示滚动条*/}
                    <div style={objCssStyle.css柯林斯单词全部信息}>所有释例:
                        {this.state.word_ArrDef.map((strItem, index, arr) => {
                            return (<p key={index}
                                       onClick={(event) => {
                                           this.fn_获取元素的文本内容并更新ArrSelectedDef(event) //点击本tag元素, 就获取本元素的纯文本内容
                                       }}>{strItem}</p>)
                        })}
                    </div>
                </div>
                <hr/>


                {/*选出的释义与例句内容*/}
                <div style={objCssStyle.css选出的内容}> 选出的释义与例句内容:
                    {this.state.arr_selectedContent
                        .map((item, index, arr) => {
                            return (<p key={index}
                                       onClick={() => {
                                           this.fn_删除本元素(arr, index)
                                       }}>{item}</p>)
                        })}
                </div>


                {/*按钮: 把选出内容添加到文本框*/}
                <input type="button"
                       value={'添加到下面的文本框中'}
                       onClick={() => {
                           this.fn_把选出的句子添加到文本框中(this.state.arr_selectedContent)
                       }}/>


                {/*多行文本框, 专门用来存放选出的句子的string, 表单会提交这个文本框中的值, 到后端, 来fs保存到文件中.
                 action="#" 表示 本表单提交给本页自己.
                */}
                <form action="#"
                      method="get"
                      onSubmit={(event) => {
                          this.fn提交表单(event)
                      }}>

                    {/*多行文本框, 存放已选出来的句子*/}
                    <textarea rows="10" cols="50"
                              name={'area_StrSelected'}
                              value={this.state.str_textArea}
                              onChange={(event) => {
                                  this.fn_双向绑定多行文本框(event) //让这个多行文本框, 可以被手动修改. 否则, 你无法修改里面的内容.
                              }}/>

                    {/*按钮:清空文本框*/}
                    <input type="button"
                           value={'清空'}
                           onClick={() => {
                               this.fn_清空textarea中的值()
                           }}/>

                    {/*按钮:保存文本框中的值到电脑文件*/}
                    <input type="submit" value="让服务器保存文件到电脑上"/>

                </form>

            </React.Fragment>
        )
    }

    //---------------

    //ajax请求推荐放在ComponentDidMount()中
    componentDidMount() {
        axios.get(this.state.url_BigArrJsonKollins)
            .then(res => {
                this.setState({arr_KollinsAllWords: res.data})
            })
            .catch(err => {
                console.log(err);
            })
    }

    //---------------

    //双向绑定到state中的word_currentFind属性上
    fn_update_wordCurrentFind = (event) => {
        this.setState({word_currentFind: event.target.value})
    }

    //---------------

    //在柯林斯obj中查找单词(key)对应的value, 并更新state对象中的单词信息字段
    fn_查找单词并更新state中对应的内容 = (wordName) => {
        /*
        先判断要查找的词头,是否存在于json数组的数据库中,
        如果存在, 则取出该单词, 在数组中的index索引值,
        并设置到state对象中的"index_wordCurrentFind"字段中.
        并同时更新state对象中的"单词各信息"的字段.
         */
        this.state.arr_KollinsAllWords.forEach((itemObj, index, arr) => {
            if (itemObj.key词头 === wordName) {
                // console.log('单词被找到!');
                const obj_wordValue = this.state.arr_KollinsAllWords[index] //obj_wordValue就是找到的单词的所有详细柯林斯信息,包括词头,音标,词根, 所有释例.
                this.setState({
                    index_wordCurrentFind: index, word_name: obj_wordValue.key词头,
                    word_currentFind: obj_wordValue.key词头,
                    word_yinBiao: obj_wordValue.key音标,
                    word_ciGeng: obj_wordValue.key词根,
                    word_ArrDef: this.fn_处理所有释例到一维数组(obj_wordValue.key所有释例),
                    arr_selectedContent: [], //重新查询单词时, 就将上一次选出的释义例句内容清空
                }) //注意, 更新state, 强烈推荐一次性更新完毕所有字段, 不要分开来一个个写更新, 这样会造成react不会一次性更新state中的数据!
            }
        })
    }

    //---------------

    fn_处理所有释例到一维数组 = (arr所有释例) => {
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

    //---------------

    //点击任意html tag元素,就获取该元素的纯文本内容, 并添加到state对象中的arr_selectedDef属性中, 并同步更新str_selected属性的值
    fn_获取元素的文本内容并更新ArrSelectedDef = (event) => {
        // console.log(event.target.innerText);
        let newArr = [...this.state.arr_selectedContent] //先深拷贝一份
        // 注意!! state对象中的属性,不能直接修改, 必须先深拷贝一份,对深拷贝进行修改后, 再用setState()方法替换回去
        newArr.push(event.target.innerText)
        this.setState({arr_selectedContent: newArr})
    }

    //----------------------------------------

    //将arr_selectedDef转换成str_selected
    fn_将arr_selectedDef转换成str_selected = (arr_selectedDef) => {
        let str_selected = ''
        if (arr_selectedDef.length !== 0) {
            arr_selectedDef.map(item => {
                str_selected += item + '\r\n'
                console.log('-->', str_selected);
            })
        }
        console.log(str_selected);
        return str_selected
    }

    //----------------------------------------

    fn_清空textarea中的值 = () => {
        this.setState({str_textArea: ''})
    }

    //----------------------------------------

    fn_把选出的句子添加到文本框中 = (arr_selectedDef) => {
        let str选出的释义例句 = this.fn_将arr_selectedDef转换成str_selected(arr_selectedDef)
        let str词头 = this.state.word_name + '  '
        let str音标 = this.state.word_yinBiao + '\r\n'
        let str词根 = '→ ' + this.state.word_ciGeng + '\r\n\r\n'
        let strAll = str词头 + str音标 + str词根 + str选出的释义例句
        this.setState({str_textArea: strAll})
    }

    //----------------------------------------

    //下面这个函数的作用是: 点击哪个已选出的句子(即arr_selectedDef中的某元素), 就删除该句子(在arr_selectedDef数组中删除该元素).
    fn_删除本元素 = (arr, index) => {
        let arrNew = [...arr] //先深拷贝一份, 因为不能直接修改state中的属性.
        arrNew.splice(index, 1)//删除数组中指定索引处的元素. arrayObject.splice(index,howmany,item1,.....,itemX)
        this.setState({arr_selectedContent: arrNew})
    }

    //----------------------------------------

    fn提交表单 = (event) => {
        // event.preventDefault() //阻止表单的默认提交行为, 即刷新页面
        /*
        注意!!! 如果你想node.js服务器, 接收到你提交的表单数据的话, 就一定不要写上面一句,
        即不要阻止掉表单提交的默认动作, 否则node.js服务器是接收不到你提交的数据的!
        */
        console.log(`已提交:${this.state.str_textArea}`)
    }

    //----------------------------------------

    fn_双向绑定多行文本框 = (event) => {
        this.setState({str_textArea: event.target.value})
    }

    //----------------------------------------

    //获取数组切片后, 里面所有词头组成的数组, 并更新到state对象中的arrSlice_wordName属性的值
    fn_获取数组切片后的里面所有词头组成的数组(arrJson_kollins) {
        let arrSlice = this.state.arr_KollinsAllWords.slice(this.state.index_start, this.state.index_end) //返回一个数组的切片(子数组)

        let arrSlice_WordName = [] //存放对数组切片后, 里面的所有词头
        arrSlice.forEach((itemObjWord, index, arr) => {
            arrSlice_WordName.push(itemObjWord.key词头)
        })

        this.setState({arr_wordNameInSlice: arrSlice_WordName})
        return arrSlice_WordName
    }

    //----------------------------------------

    fn_updateNumSlice = (event) => {
        this.setState({num_OfElementsInSlice: event.target.value})
    }

    //----------------------------------------

    fn_updateIndexStart = (event) => {
        this.setState({index_start: event.target.value})
    }

    //----------------------------------------

    fn_updateIndexEnd = (event) => {
        this.setState({index_end: event.target.value})
    }
}