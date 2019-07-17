//切片显示词头数组

import React from 'react';
import ReactDOM from 'react-dom';

import objStore from '../store/objStore.js'
import * as moduleAction from '../store/fnCreateObjAction.js'


export default class Cpn_sliceArrWordName extends React.Component {
    constructor(props) {
        super(props)
        this.state = objStore.getState() //从银行拿到默认的state对象
    }

    render() {
        return (
            <React.Fragment>

                <div>
                    indexStart:<input type="text"
                                      size='5'
                                      value={this.state.index_start}
                                      onChange={(event) => {

                                      }}/>
                    - indexEnd:<input type="text"
                                      size='5'
                                      value={this.state.index_end}
                                      onChange={(event) => {

                                      }}/>
                    <input type="button"
                           value={'显示切片(数组)中的词头'}
                           onClick={() => {
                           }}
                    />

                    <p>index [{this.state.index_start}-{this.state.index_end}] 中的词头有:</p>
                    {this.state.arr_wordNameInSlice.map((itemWordName, index, arr) => {
                        return <span>{itemWordName}</span>
                    })}
                </div>

                <hr/>

            </React.Fragment>
        )
    }

}