//查找单个单词

import React from 'react';
import ReactDOM from 'react-dom';

import objStore from '../store/objStore.js'
import * as moduleActionFactory from '../store/fnCreateObjAction.js'
import * as moduleMyfunc from '../store/myFunc.js'



export default class Cpn_FindSingleWord extends React.Component {
    constructor(props) {
        super(props)
        this.state = objStore.getState() //从银行拿到默认的state对象
        objStore.subscribe(this.fn_updateThisState) //监听银行(的财务专家)对state对象的更新, 一旦监听到有新修改, 就执行回调函数fn_updateThisState
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    {/*单词搜索框*/}
                    <input type="text" value={this.state.word_currentFind}
                           onChange={() => {
                               moduleMyfunc.fn_发送命令书_双向绑定word_currentFind(event)
                           }}/>

                    {/*按钮, 用来搜索单词*/}
                    <input type="button"
                           value={'查找单个单词'}
                           onClick={() => {
                               moduleMyfunc.fn_发送命令书_搜索单词(this.state.word_currentFind)
                           }}/>

                    {/*重复确认当前查找的单词, 并显示该单词在arr_AllWords中的索引*/}
                    <p>当前查找的单词: {this.state.word_currentFind} | 索引值为: {this.state.index_wordCurrentFind}</p>
                </div>
                <hr/>

            </React.Fragment>
        )
    }


    fn_updateThisState = () => { //一旦监听到财务专家更新了state对象, 就执行本回调函数
        this.setState(objStore.getState())
    }

}






