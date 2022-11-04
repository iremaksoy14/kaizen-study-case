import { prettyDOM } from "@testing-library/react";
import ProductDetail from "./components/Product/ProductDetail";
import TestiMonials from "./components/TestiMonials/TestiMonials";

export const routes= [  
  {
    path: "/",
    exact: true,    
    component: TestiMonials,
   
  },
  {
    path: "/profile",
    exact: true,    
   component: ProductDetail,
  
  },
  
];