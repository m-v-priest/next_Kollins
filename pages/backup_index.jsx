import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'

export default class Cpn_Index extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            url_BigObjJsonKollins: './static/+json所有柯林斯单词.json', //kollins json路径
            url_BigArrJsonKollins: './static/+arr所有柯林斯单词.json',
            obj_AllWords: {}, //存放从json文件(一个大的obj对象)中读取到的obj_objJson
            arr_AllWords: [], //存放从json文件(一个大的数组)中读取到的arr_objJson

            word_currentFind: '', //当前查找的词头
            word_name: '', //词头
            word_ciGeng: '', //词根
            word_yinBiao: '', //音标
            word_ArrDef: [], //释例数组, 已经过扁平化一维处理.

            arr_selectedContent: [], //存放选出的释义与例句内容
            str_textArea: '',
        }
    }

    render() {
        return (
            <React.Fragment>
                <p>柯林斯查词页面</p>

                <input type="text"
                       onChange={(event) => {
                           this.fn_update_wordCurrentFind(event) //双向绑定
                       }}/>
                <input type="button"
                       value={'查找单词'}
                       onClick={() => {
                           this.fn_查找单词并更新state中对应的内容(this.state.word_currentFind)
                       }}/>
                <hr/>

                <p>当前查找的单词: {this.state.word_currentFind}</p>
                <hr/>


                {/*单词的详细内容*/}
                <div>
                    <p>词头: {this.state.word_name}</p>
                    <p>音标: {this.state.word_yinBiao}</p>
                    <p>词根: {this.state.word_ciGeng}</p>
                    {/*<p>所有释例: {this.state.word_ArrDef}</p>*/}


                    {/*所有释例*/}
                    {/*下面, 用css样式, 给div元素设置固定高度, 并显示滚动条*/}
                    <div style={{height: "300px", border: "1px solid", overflow: "auto"}}>所有释例:
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
                <div style={{height: "200px", border: "1px solid", overflow: "auto"}}> 选出的释义与例句内容:
                    {this.state.arr_selectedContent
                        .map((item, index, arr) => {
                            return (<p key={index}
                                       onClick={() => {
                                           this.fn_删除本元素(arr, index)
                                       }}>{item}</p>)
                        })}
                </div>

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
        axios.get(this.state.url_BigObjJsonKollins)
            .then(res => {
                this.setState({obj_AllWords: res.data})
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
        // console.log(this.state.obj_AllWords[wordName]);
        if (wordName in this.state.obj_AllWords) {
            const obj_wordValue = this.state.obj_AllWords[wordName]

            this.setState({
                word_name: obj_wordValue.key词头,
                word_yinBiao: obj_wordValue.key音标,
                word_ciGeng: obj_wordValue.key词根,
                word_ArrDef: this.fn_处理所有释例到一维数组(obj_wordValue.key所有释例),
                arr_selectedContent: [], //重新查询单词时, 就将上一次选出的释义例句内容清空
            })
        }
        else {
            this.setState({word_currentFind: '你查找的单词不存在'})
        }
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


}