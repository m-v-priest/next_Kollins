//单个单词在柯林斯中的详细内容

import React from 'react';
import ReactDOM from 'react-dom';

import objStore from '../store/objStore.js'
import * as moduleAction from '../store/fnCreateObjAction.js'


export default class Cpn_SingleWordAllInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = objStore.getState() //从银行拿到默认的state对象
    }

    render() {
        return (
            <React.Fragment>

                <div> kollins中对本单词的解释:
                    <p>词头: {this.state.word_name} | 音标: {this.state.word_yinBiao}</p>
                    <p>词根: {this.state.word_ciGeng}</p>

                    <div>所有释例:
                        {this.state.word_ArrDef.map((strItem, index, arr) => {
                            return (<p key={index}
                                       onClick={(event) => {

                                       }}>{strItem}</p>)
                        })}
                    </div>
                </div>

                <hr/>

            </React.Fragment>
        )
    }

}