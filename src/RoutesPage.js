 

import React,{useEffect, useId} from "react";
import { Routes , Route } from "react-router-dom";
import ProductDetail from "./components/Product/ProductDetail";
import TestiMonials from "./components/TestiMonials/TestiMonials";

import {routes} from "./routes";
import withTracker from "./withTracker";
 
 function RoutesPage() {
  
 const tokenget=()=>{    
        return routes.map((route, index) => {
            return (
            
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={withTracker(props => {
                      return (  
                                      
                          <route.layout {...props}>                         
                              <route.component {...props} />                      
                          </route.layout>      
                               
                      );
                    })}
                  />
                
            );
          })
    }
 
   return (
    <Routes >

    {tokenget()}
   
   </Routes >
   );
 }
 export default RoutesPage