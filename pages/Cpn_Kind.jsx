import React from 'react';
import ReactDOM from 'react-dom';
import * as moduleMyfunc from "../store/myFunc";

export default class Cpn_Kind extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <React.Fragment>
                分类kind: 已选中{this.state.kindName}<br/>
                <div onChange={() => {
                    console.log('onChange->',event.target.value);
                    moduleMyfunc.fn_发送命令书_updateKindName(event.target.value)
                }}>
                    {this.fn_creatRadio('人_生物身体')}
                    {this.fn_creatRadio('人_身份识别')}
                    {this.fn_creatRadio('人_情绪心理思想')}
                    {this.fn_creatRadio('人_品质学识')}
                    {this.fn_creatRadio('人_行为动作经历人生')}
                    {this.fn_creatRadio('逻辑转折')}
                    {this.fn_creatRadio('程度性质')}
                    <br/>

                    {this.fn_creatRadio('食物_水果粮食')}
                    {this.fn_creatRadio('食物_中餐西餐调味料')}
                    {this.fn_creatRadio('医药')}
                    <br/>


                    {this.fn_creatRadio('器物_家用')}
                    {this.fn_creatRadio('器物_衣服')}
                    {this.fn_creatRadio('器物_农工用')}
                    {this.fn_creatRadio('器物_军用')}
                    {this.fn_creatRadio('器物_材料')}
                    {this.fn_creatRadio('建筑城市')}
                    <br/>


                    {this.fn_creatRadio('政治法律外交历史')}
                    {this.fn_creatRadio('经济管理')}
                    {this.fn_creatRadio('军事')}
                    {this.fn_creatRadio('文化艺术娱乐体育')}
                    <br/>


                    {this.fn_creatRadio('物理_度量衡')}
                    {this.fn_creatRadio('物理_时间空间')}
                    <br/>

                    {this.fn_creatRadio('动物_陆地')}
                    {this.fn_creatRadio('动物_天空')}
                    {this.fn_creatRadio('动物_水生')}
                    {this.fn_creatRadio('动物_虫')}
                    <br/>

                    {this.fn_creatRadio('植物_林木')}
                    {this.fn_creatRadio('植物_花草')}

                    {this.fn_creatRadio('微生物_细菌病毒')}
                    <br/>



                </div>

                <hr/>
            </React.Fragment>
        )
    }

    fn_creatRadio = (kindName) => {
        return (
            <React.Fragment>
                <input type="radio" name="classify" value={kindName} id={kindName}/>
                <label htmlFor={kindName}>{kindName}</label> |


            </React.Fragment>
        )
    }

}