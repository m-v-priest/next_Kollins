import React from 'react';
import myFunc_mongoose_connectKollins from '../store/myFunc_mongoose_connectKollins'

export let ModelReactState = myFunc_mongoose_connectKollins.fn_获取ModelReactState()


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
                       onClick={() => {this.fn_testMongoose()
                           // myFunc_mongoose_connectKollins.fn_findAllDoc(ModelReactState, {}, ["index_start", "index_end"])

                       }}
                />

            </React.Fragment>
        );
    }

    fn_testMongoose = ()=>{
        console.log(ModelReactState);
        // ModelReactState.find({},{},
        //     (err, arrDoc) => {
        //         console.log(arrDoc);
        //     }
        // )
    }
}

