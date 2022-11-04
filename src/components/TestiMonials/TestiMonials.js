import React, { useEffect, useState } from 'react';
import TestiMonialsDetails from '../TestiMonialsDetails/TestiMonialsDetails'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {useSelector,useDispatch} from 'react-redux'
import userPic from '../../image/user-one.png';
import * as productAction from '../../Store/_redux/ProductStore/productActions'
import './TestiMonials.css'
import { useNavigate } from "react-router-dom";

const TestiMonials = () => {
    const dispatch=useDispatch() 
    let navigate = useNavigate();
    const items=useSelector((state)=>state.product.brand)
  useEffect(()=>{
    dispatch(productAction.getList()).then((res)=>{
        console.log(res,)
    })
  },[])
  
    const testiMonials = items
    //Owl Carousel Settings
    const options = {
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots: true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    };
   
    return (
        <section id="testimonial" className="testimonials pt-70 pb-70">
            <div className="container">
                
           
                <div className="row">
                    <div className="col-md-12">
                        <OwlCarousel   id="customer-testimonoals" className="owl-carousel owl-theme " {...options}>
                           {
                              testiMonials.map(testiMonialDetail => {
                                return (
                                    <TestiMonialsDetails style={{borderRadius:20}} testiMonialDetail={testiMonialDetail} key={testiMonialDetail._key} />

                                )
                            })
                           }
                               
                                    
                                  
                           
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestiMonials;