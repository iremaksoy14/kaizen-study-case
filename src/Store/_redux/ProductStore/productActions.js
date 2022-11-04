

 import * as requestFromServer from "./productCrud";
 import {Slice, callTypes} from "./productSlice";
 const {actions} = Slice;


export const getTabs=() => dispatch => {
    dispatch(actions.startCall({ callType: callTypes.list }));
    return   requestFromServer
    .GetTab()    
    .then(function (response) {
      dispatch(actions.setTabs(response.data));
      return response.data
    })
    .catch(function (error) {
      console.log(error);
      return error
    });
  
}

export const getDetailById=(id) => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return   requestFromServer
  .getById(id)    
  .then(function (response) {
   
  dispatch(actions.detailsProduct(response.data));
    return response.data
  })
  .catch(function (error) {
    console.log(error);
    return error
  });

}

export const getList=() => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return   requestFromServer
  .GetMainList()    
  .then(function (response) {
   
  dispatch(actions.getProductList(response.data));
    return response.data
  })
  .catch(function (error) {
    console.log(error);
    return error
  });

}
