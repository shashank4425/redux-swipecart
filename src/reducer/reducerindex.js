import { combineReducers } from "redux";
import { productReducer, selectedproductReducer } from "./productReducer";
const ReducersIndex = combineReducers({
    items : productReducer,
    product: selectedproductReducer
})
export default ReducersIndex;