import React,{useEffect,useState} from 'react';
import PropTypes from 'prop-types';
import './style.css'
import {useSelector,useDispatch} from 'react-redux'
import header from '../../assets/images/header.png'
import * as productAction from '../../Store/_redux/ProductStore/productActions'
import { NavItem } from 'react-bootstrap';

const  Header=(props)=> {
   const dispatch=useDispatch() 
useEffect(()=>{
dispatch(productAction.getTabs()).then((res)=>{
    console.log(res,)
})
},[])
const product=useSelector(state=>state.product.products)

    return (
        <div>
            <div className="header_container">
            <img src={header}/>
        </div>
    <div className='header_tabs'>
     {
             product.map((item)=>
                (
                    <div className='item_product'>
                        <img className='round_img' src={item.IconUrl}/>
                         <p className='item_text'>{item.Name}</p></div>
                    
                )
            )
        } 
         
       
       
    </div>
        </div>
        
    );
}

export default Header;