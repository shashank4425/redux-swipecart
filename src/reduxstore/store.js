import {createStore} from "redux"
import ReducersIndex from "../reducer/reducerindex"
const store= createStore(
    ReducersIndex,
    {},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
    );

export default store;   