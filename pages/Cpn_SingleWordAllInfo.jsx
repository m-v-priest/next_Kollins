//单个单词在柯林斯中的详细内容

import React from 'react';
import ReactDOM from 'react-dom';

import objStore from '../store/objStore.js'
import * as moduleAction from '../store/fnCreateObjAction.js'
import * as moduleMyfunc from "../store/myFunc";


export default class Cpn_SingleWordAllInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = objStore.getState() //从银行拿到默认的state对象
        objStore.subscribe(this.fn_updateThisState)
    }

    render() {
        return (
            <React.Fragment>

                <div> kollins中对本单词的解释:
                    <p>索引值为: {this.state.index_wordCurrentFind}</p>
                    <p>词头: {this.state.word_name} | 音标: {this.state.word_yinBiao}</p>
                    <p>词根: {this.state.word_ciGeng}</p>

                    <div style={objCss.css单个单词搜索}>所有释例:
                        {this.state.word_ArrDef.map((strItem, index, arr) => {
                            return (<p key={index}
                                       onClick={(event) => {
                                           moduleMyfunc.fn_发送命令书_更新arrSelectedContent(event.target.innerText)
                                       }}>{strItem}</p>)
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
    css单个单词搜索: {height: "200px", border: "1px solid", overflow: "auto"},
}

