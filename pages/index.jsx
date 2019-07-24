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

                    <div id='id词头切片数组' style={objCss.css词头切片数组}>
                        <Cpn_sliceArrWordName/>
                    </div>

                    <div id='id其他div元素的整体' style={objCss.css其他div元素的整体}>
                        <Cpn_FindSingleWord/>
                        <Cpn_SingleWordAllInfo/>
                        <Cpn_selectedContents/>
                        <Cpn_TextArea/>
                    </div>
            </React.Fragment>
    )
    }

    componentDidMount() {
        let divHeight = document.getElementById('id词头切片数组').offsetHeight

        //拿到 Window.localStorage对象, 我们把index_start 和 index_end 属性, 存放在Window.localStorage对象中, 免得每次刷新页面, 即提交表单后, 会导致index_start 和 index_end 这两个属性的被重置.
        // function fn_getWindowLocalStorage() {
        //     let objStorage = window.localStorage;
        //     objStorage.indexStart = 0 //进行初始化
        //     objStorage.indexEnd = 19
        // }

        // fn_getWindowLocalStorage()

    }

    }

    let objCss = {
        css词头切片数组: {position: "fixed",background:"rgba(240,240,240,1)"}, //让这个div元素浮动固定.
        /*注意: flex是不支持浮动的, 但是我们可以在运用了flex样式的元素的外面,再包一层div,
        对这个div运用传统的css样式, 就能使用position来浮动了.
         */
        css其他div元素的整体:{marginTop:"360px"}
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