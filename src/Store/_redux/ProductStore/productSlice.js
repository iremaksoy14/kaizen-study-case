import { createSlice } from "@reduxjs/toolkit";
 import { persistReducer } from "redux-persist";
// import { isNaN } from "lodash";
const initialState = {
    products: [],
    brand:[],
    getById:{}
 
};
export const callTypes = {
    list: "list",
    action: "action"
};
// //State işlemleri için
export const Slice = createSlice({
    name: "product",
    initialState: initialState,
    reducers: {
        catchError: (state, action) => {

            state.error = `${action.type}: ${action.payload.error}`;

            if (action.payload.callType === callTypes.list) {
                state.listLoading = false;
                state.actionsLoading = false;
            } else {
                state.actionsLoading = false;
                state.listLoading = false;
            }
        },
        startCall: (state, action) => {
            state.error = null;
            if (action.payload.callType === callTypes.list) {
                state.listLoading = true;
            } else {
                state.actionsLoading = true;
                state.actionsLoading2 = true;
            }
        },
        setTabs: (state, action) => {
           
            state.products = action.payload;
        },
        getProductList: (state, action) => {
           
            state.brand = action.payload;
        },
        detailsProduct: (state, action) => {
           
            state.getById = action.payload;
        },
       

    }
});



