

 import * as requestFromServer from "./productCrud";
 import {Slice, callTypes} from "./productSlice";
 const {actions} = Slice;

// export const addProduct=(data,setAlertField)=>dispatch=>{
//   dispatch(actions.startCall({ callType: callTypes.list }));
//   return   requestFromServer
//   .Add(data)    
//   .then(response => {
//   if(response.data.success){ 
//     dispatch(actions.add(data));
//     setAlertField({
//         title: "Success",
//         text: "Ürün başarıyla eklendi.",
//         show: true,
//         color: "green"
//       })       
//         return  response.data.message
//     }
//     else{
//        setAlertField({
//         title: "Error",
//         text: response.data.message,
//         show: true,
//         color: "red"
//       })
//         return response.data.message
//     }
// })
//   .catch(error => {});
// }
// export const updateProduct=(data,setAlertField)=>dispatch=>{
//     dispatch(actions.startCall({ callType: callTypes.list }));
//     return   requestFromServer
//     .Update(data)    
//     .then(response => {
//     if(response.data.success){ 
//       dispatch(actions.update(data));
//       setAlertField({
//           title: "Success",
//           text: "Ürün başarıyla güncellendi.",
//           show: true,
//           color: "green"
//         })       
//           return  response.data.message
//       }
//       else{
//          setAlertField({
//           title: "Error",
//           text: response.data.message,
//           show: true,
//           color: "red"
//         })
//           return response.data.message
//       }
//   })
//     .catch(error => {});
// }
// export const deleteProduct=(data,setAlertField)=>dispatch=>{
//     dispatch(actions.startCall({ callType: callTypes.list }));
//     return   requestFromServer
//     .Delete(data)    
//     .then(response => {
//     if(response.success){ 
//       dispatch(actions.remove(data));
//       setAlertField({
//           title: "Success",
//           text: "Ürün başarıyla silindi.",
//           show: true,
//           color: "green"
//         })       
//           return  response.success
//       }
//       else{
//          setAlertField({
//           title: "Error",
//           text: response.message,
//           show: true,
//           color: "red"
//         })
//           return response.success
//       }
//   })
//     .catch(error => {});
// }
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





// export const getProducts=()=>dispatch=>{
//     dispatch(actions.startCall({ callType: callTypes.list }));
//     return   requestFromServer
//     .GetAll()    
//     .then(response => {
//         if(response.data.success){
//             dispatch(actions.updateAll(response.data.data)); 
//             return  response
//         }
//         else{
//             return response
//         }
//     })
//     .catch(error => {});
// }
// export const addChildProduct=(data,setAlertField)=>dispatch=>{
//     dispatch(actions.startCall({ callType: callTypes.list }));
//     return   requestFromServer
//     .AddChildProduct(data)    
//     .then(response => {
//     if(response.data.success){ 
//       dispatch(actions.addChildProduct(data));
//       setAlertField({
//           title: "Success",
//           text: "Ürün başarıyla güncellendi.",
//           show: true,
//           color: "green"
//         })       
//           return  response.data.message
//       }
//       else{
//          setAlertField({
//           title: "Error",
//           text: response.data.message,
//           show: true,
//           color: "red"
//         })
//           return response.data.message
//       }
//   })
//     .catch(error => {});
// }
// export const updateChildProduct=(data,setAlertField)=>dispatch=>{
//     dispatch(actions.startCall({ callType: callTypes.list }));
//     return   requestFromServer
//     .UpdateChild(data)    
//     .then(response => {
//     if(response.data.success){ 
//       dispatch(actions.updateChild(data));
//       setAlertField({
//           title: "Success",
//           text: "Ürün başarıyla güncellendi.",
//           show: true,
//           color: "green"
//         })       
//           return  response.data.message
//       }
//       else{
//          setAlertField({
//           title: "Error",
//           text: response.data.message,
//           show: true,
//           color: "red"
//         })
//           return response.data.message
//       }
//   })
//     .catch(error => {});
// }
// export const deleteChildProduct=(data,setAlertField)=>dispatch=>{
//     dispatch(actions.startCall({ callType: callTypes.list }));
//     return   requestFromServer
//     .DeleteChild(data)    
//     .then(response => {
//     if(response.success){ 
//       dispatch(actions.removeChild(data));
//       setAlertField({
//           title: "Success",
//           text: "Ürün başarıyla silindi.",
//           show: true,
//           color: "green"
//         })       
//           return  response.success;
//       }
//       else{
//          setAlertField({
//           title: "Error",
//           text: response.message,
//           show: true,
//           color: "red"
//         })
//         return  response.success;
//       }
//   })
//     .catch(error => {});
// }