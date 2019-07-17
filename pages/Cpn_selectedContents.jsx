//选出的释义与例句内容

import React from 'react';
import ReactDOM from 'react-dom';

import objStore from '../store/objStore.js'
import * as moduleAction from '../store/fnCreateObjAction.js'


export default class Cpn_selectedContents extends React.Component {
    constructor(props) {
        super(props)
        this.state = objStore.getState() //从银行拿到默认的state对象
    }

    render() {
        return (
            <React.Fragment>

                <div> 选出的释义与例句内容:
                    {this.state.arr_selectedContent
                        .map((item, index, arr) => {
                            return (<p key={index}
                                       onClick={() => {

                                       }}>{item}</p>)
                        })}
                </div>

                <hr/>

            </React.Fragment>
        )
    }

}