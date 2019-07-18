import React from 'react';
import ReactDOM from 'react-dom';

import objStore from '../store/objStore.js'
import * as moduleAction from '../store/fnCreateObjAction.js'

import Cpn_FindSingleWord from '../pages/Cpn_FindSingleWord'
import Cpn_sliceArrWordName from '../pages/Cpn_sliceArrWordName'
import Cpn_SingleWordAllInfo from '../pages/Cpn_SingleWordAllInfo'
import Cpn_selectedContents from '../pages/Cpn_selectedContents'
import Cpn_TextArea from '../pages/Cpn_TextArea'


export default class Cpn_Index extends React.Component {
    constructor(props) {
        super(props)
        this.state = objStore.getState() //从银行拿到默认的state对象
    }

    render() {
        return (
            <React.Fragment>
                <p>kollins主控台</p>

                <Cpn_FindSingleWord/>
                <Cpn_sliceArrWordName/>
                <Cpn_SingleWordAllInfo/>
                <Cpn_selectedContents/>
                <Cpn_TextArea/>

            </React.Fragment>
        )
    }

}


// let objCss = {
//     容器: { /**/
//         display: 'flex',
//         height: '200px',
//         border: "solid 1px",
//         // flexDirection: 'row-reverse', /*每行中的元素, 从右到左排*/
//         flexWrap: 'wrap', /*一行超过容器宽度, 就换行*/
//         alignContent: "flex-start", //行与行的行距, 不平均分配容器的高度, 而是采用默认的固定行距.
//     },
//
//     项目: {
//         width: '33.33%',
//         // flexGrow: 1, //一行中无论有几个元素, 都平均分配容器的宽度
//     }
// }