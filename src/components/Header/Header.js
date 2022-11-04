import React,{useEffect,useState} from 'react';
import PropTypes from 'prop-types';
import './style.css'
import {useSelector,useDispatch} from 'react-redux'
import logo from '../../assets/images/logo.png'
import account from '../../assets/images/account.png'
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
                <div className='sub_cont'>
                <img width="91" height="40" src={logo}/>
                <img  width="91" height="40" src={account}/>

                </div>
         
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