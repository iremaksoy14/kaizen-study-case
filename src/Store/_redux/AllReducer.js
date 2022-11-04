
import { persistReducer,persistStore } from "redux-persist";
import { createStore} from 'redux';

import * as productSlice from "./../_redux/ProductStore/productSlice";



import storage from "redux-persist/lib/storage" 
 
 export const productReducer =  persistReducer({ storage, key: "state-product",blacklist:[]},productSlice.Slice.reducer)


const productStore = createStore(productReducer);

 persistStore(productStore);





 