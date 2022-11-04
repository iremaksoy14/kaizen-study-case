import {combineReducers} from "redux";
import * as AllReducer from "../Store/_redux/AllReducer";


export const rootReducer = combineReducers({
   product: AllReducer.productReducer,
});



 
 