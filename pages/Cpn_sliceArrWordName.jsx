//切片显示词头数组

import React from 'react';
import ReactDOM from 'react-dom';

import objStore from '../store/objStore.js'
import * as moduleAction from '../store/fnCreateObjAction.js'
import * as moduleActionFactory from "../store/fnCreateObjAction";
import * as moduleMyfunc from '../store/myFunc.js'

export default class Cpn_sliceArrWordName extends React.Component {
    constructor(props) {
        super(props)
        this.state = objStore.getState() //从银行拿到默认的state对象
        objStore.subscribe(this.fn_updateThisState)
    }

    render() {
        return (
            <React.Fragment>

                <div>
                    {/*切片区间的输入框*/}
                    indexStart:<input type="text"
                                      size='5'
                                      value={this.state.index_start}
                                      onChange={() => {
                                          moduleMyfunc.fn_发送命令书_更新indexStart(event)
                                      }}/>
                    - indexEnd:<input type="text"
                                      size='5'
                                      value={this.state.index_end}
                                      onChange={() => {
                                          moduleMyfunc.fn_发送命令书_更新indexEnd(event)
                                      }}/>

                    <input type="button"
                           value={'显示切片(数组)中的词头'}
                           onClick={() => {
                               moduleMyfunc.fn_发送命令书_获取切片中的词头数组()
                           }}
                    />
                    &nbsp;


                    {/*下20个单词*/}
                    <input type="button" value='下20个单词'
                           onClick={() => {
                               moduleMyfunc.fn_发送命令书_获取下20个单词()
                           }}
                    />
                    &nbsp;

                    {/*上20个单词*/}
                    <input type="button" value='上20个单词'
                           onClick={() => {
                               moduleMyfunc.fn_发送命令书_获取上20个单词()
                           }}
                    />


                    {/*显示切片区间中的所有词头*/}
                    <p>index [{this.state.index_start}-{this.state.index_end}] 中的词头有:</p>

                    <div style={objCss.容器}>
                        {this.state.arr_wordNameInSlice.map((itemWordName, index, arr) => {
                            return <span key={index} style={objCss.子项}
                                         onClick={() => {
                                             moduleMyfunc.fn_发送命令书_搜索单词(event.target.innerText)
                                         }}
                            >{itemWordName}</span>
                        })}
                    </div>

                </div>

                <hr/>

            </React.Fragment>
        )
    }


    fn_updateThisState = () => { //一旦监听到财务专家更新了state对象, 就执行本回调函数
        this.setState(objStore.getState())
    }

}

//----------------------------------------

let objCss = {
    容器: { /*里面有专属于容器的flex属性*/
        display: 'flex',
        height: '200px',
        border: "solid 1px",
        // flexDirection: 'row-reverse', /*每行中的元素, 从右到左排*/
        flexWrap: 'wrap', /*一行超过容器宽度, 就换行*/
        alignContent: "flex-start", //行与行的行距, 不平均分配容器的高度, 而是采用默认的固定行距.
        overflow: "auto", //超出高度则使用滚动条,
    },

    子项: { /*里面有专属于子项的flex属性*/
        width: '33.33%',
        // flexGrow: 1, //一行中无论有几个元素, 都平均分配容器的宽度
    }
}
