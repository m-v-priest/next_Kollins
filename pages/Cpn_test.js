import React from 'react';
import myFunc_mongoose_connectKollins from '../store/myFunc_mongoose_connectKollins'

// export let ModelReactState = myFunc_mongoose_connectKollins.fn_获取ModelReactState()


export default class Cpn_test extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            msg: '',
        }
    }

    render() {
        return (
            <React.Fragment>
                <input type="button"
                       value='显示collection kollins 中的全部document'
                       onClick={() => {
                       }}
                />

            </React.Fragment>
        );
    }

}

