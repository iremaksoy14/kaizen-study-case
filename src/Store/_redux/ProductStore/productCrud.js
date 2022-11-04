 import axios from "axios";

export function GetTab() {

  var config = {
    method: 'get',
    url: 'https://api.extrazone.com/tags/list',
    headers: { 
      'Content-Type': ' application/json', 
      'X-Country-Id': 'TR', 
      'X-Language-Id': 'TR'
    },
  
  };
  
 return  axios(config)
}
export function GetMainList() {
  var config = {
    method: 'get',
    url: 'https://api.extrazone.com/promotions/list?Channel=PWA',
    headers: { 
      'X-Country-Id': 'TR', 
      'X-Language-ID': 'TR'
    }
  };
  
  return axios(config)
}
export function getById() {
  var config = {
    method: 'get',
    url: 'https://api.extrazone.com/promotions?Id=33',
    headers: { 
      'X-Country-Id': 'TR', 
      'X-Language-Id': 'TR'
    }
  };
  
  return  axios(config)
}









