import React ,{useEffect}from 'react';
import cola from '../../assets/images/cola.png'
import { useNavigate } from "react-router-dom";
import './style.css'
import { Routes, Route, useParams } from "react-router-dom";
import * as productAction from '../../Store/_redux/ProductStore/productActions'
import {useSelector,useDispatch} from 'react-redux'
import { FaLongArrowAltLeft } from "react-icons/fa";

function ProductDetail(props) {
    const dispatch=useDispatch() 
    let params = useParams();
    let navigate = useNavigate();
   
//     function StripTags(input)

// {

//   var array = [];

//   var inside = false;

 

//   for ( var i = 0; i < input.length; i++)

//   {

//     var test = input.charAt(i);

//     if (test == '<')

//     {

//       inside = true;

//       continue;

//     }

//     if (test == '>')

//     {

//       inside = false;

//       continue;

//     }

//     if (!inside)

//       array.push(test);

//   }

//   return array.join('');
// }

    useEffect(()=>{
        dispatch(productAction.getDetailById(params.Id)).then((res)=>{
            console.log(res)
        })
        .catch(err=>console.log(err))
    },[])
    const getDetail=useSelector((state)=>state.product.getById)
    return (
        <div className='product_container'>
            <div className='row_section'>
            <FaLongArrowAltLeft style={{fontSizeÇ:20}} onClick={()=>  navigate('/')}/>
           <img style={{borderBottomLeftRadius:" 80% 30% !important"}} height="355" class="border_bottom_class" src={getDetail.ImageUrl}/> 
            </div>
           
        
             
        <p className='detail_text'>{getDetail.BrandPromotionCardParticipationText}</p>
<div className='overflow_class'>
    <span className='detail_parapgraph'>
  {getDetail.Description} 
    </span>
    <div ><button className='detail_tick'>Hemen Katıl</button></div>
</div>
        </div>
    );
}

export default ProductDetail;