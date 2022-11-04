
import './App.css';
import TestiMonials from './components/TestiMonials/TestiMonials';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import ProductDetail from './components/Product/ProductDetail';
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from 'react-redux';
import * as _redux from "../src/Store/index";



import MainPage from './MainPage';
import axios from "axios";
import store, { persistor } from "../src/Store/Store";

import  RoutesPage  from "./RoutesPage";

_redux.setupAxios(axios, store);
export default () => (
  <Provider store={store} >
      <PersistGate persistor={persistor} loading={"Loading"} >
      <Router>
      
        <div className="container">
        <Header></Header>
        <Routes>
            <Route path="/" element={<TestiMonials />} />
            <Route path="/campaign/:SeoName/:Id" element={<ProductDetail />} />
        </Routes>
        <Footer />
        </div>
      
      </Router>
      </PersistGate>
    </Provider>
  
  
  );


