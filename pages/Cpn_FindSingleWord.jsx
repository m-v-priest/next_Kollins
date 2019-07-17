//查找单个单词

import React from 'react';
import ReactDOM from 'react-dom';

import objStore from '../store/objStore.js'
import * as moduleAction from '../store/fnCreateObjAction.js'


export default class Cpn_FindSingleWord extends React.Component {
    constructor(props) {
        super(props)
        this.state = objStore.getState() //从银行拿到默认的state对象
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <input type="text"
                           onChange={(event) => {

                           }}/>
                    <input type="button"
                           value={'查找单个单词'}
                           onClick={() => {

                           }}/>


                    <p>当前查找的单词: {this.state.word_currentFind} | 索引值为: {this.state.index_wordCurrentFind}</p>
                </div>
                <hr/>

            </React.Fragment>
        )
    }

}