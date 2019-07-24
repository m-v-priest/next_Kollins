/*
多行文本框, 专门用来存放选出的句子的string,
表单会提交这个文本框中的值, 到后端, 并用fs来保存到文件中.
action="#" 表示 本表单提交给本页自己.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'

import objStore from '../store/objStore.js'
import * as moduleAction from '../store/fnCreateObjAction.js'
import * as moduleMyfunc from "../store/myFunc";


export default class Cpn_TextArea extends React.Component {
    constructor(props) {
        super(props)
        this.state = objStore.getState() //从银行拿到默认的state对象
        objStore.subscribe(this.fn_updateThisState)
    }

    render() {
        return (
            <React.Fragment>

                {/*按钮: 把选出内容添加到文本框*/}
                <input type="button"
                       value={'1.添加到下面的文本框中'}
                       onClick={() => {
                           moduleMyfunc.fn_发送命令书_更新str_textArea()
                       }}
                />
                &nbsp; 或&nbsp;

                <input type="button"
                       value={'3.两步并一步:直接更新到txt'}
                       onClick={() => {
                           moduleMyfunc.fn_发送命令书_两步并一步直接更新到txt()
                       }}
                />


                {/*多行文本框, 存放已选出来的句子*/}
                <textarea rows="10" cols="50"
                          name={'area_StrSelected'}
                          value={this.state.str_textArea}
                          onChange={() => {
                              moduleMyfunc.fn_发送命令书_可编辑str_textArea(event.target.value)
                          }}/>
                <br/>

                {/*按钮:清空文本框*/}
                <input type="button"
                       value={'清空'}
                       onClick={() => {
                           moduleMyfunc.fn_发送命令书_清空str_textArea()
                       }}/>
                &nbsp;

                {/*按钮:保存文本框中的值到电脑文件*/}
                <input type="button"
                       value="2.让服务器保存文件到电脑上"
                       onClick={() => {
                           moduleMyfunc.fn_sendTextareaContent_ByAxios(this.state.str_textArea)
                       }}
                />


                <hr/>

            </React.Fragment>
        )
    }

    fn_updateThisState = () => { //一旦监听到财务专家更新了state对象, 就执行本回调函数
        this.setState(objStore.getState())
    }


}
