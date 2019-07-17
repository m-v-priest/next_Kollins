// 银行

import {createStore} from 'redux'
import fnReducer from './fnReducer.js'

let objStore = createStore(fnReducer)

export default objStore