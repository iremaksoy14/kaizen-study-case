
export default function setupAxios(axios, store) {
    axios.interceptors.request.use(
      config => {
       
        //console.log( "setupAxios.js")
        //console.log(authToken)
       
  
        return config;
      },
      err => Promise.reject(err)
    );
  }
  