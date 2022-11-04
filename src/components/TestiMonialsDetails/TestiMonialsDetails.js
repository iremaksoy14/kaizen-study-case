import React from 'react';
import { NavItem } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import './style.css'

const TestiMonialsDetails = ({testiMonialDetail}) => {
    let navigate = useNavigate();
    const testStyle=(c)=>{
        return{
            boxShadow: "15px 15px",
color:c,
            background: "#FFFFFF",
             border: "3px solid #F4F6F5",
        borderRadius: "20px",
        marginRight:"10px"
        }
    }
    const handleClick=()=>{
        navigate('/campaign/'+SeoName+"/"+Id)
       
    }
    function StripTags(input)

    {
    
      var array = [];
    
      var inside = false;
    
     
    
      for ( var i = 0; i < input.length; i++)
    
      {
    
        var test = input.charAt(i);
    
        if (test == '<')
    
        {
    
          inside = true;
    
          continue;
    
        }
    
        if (test == '>')
    
        {
    
          inside = false;
    
          continue;
    
        }
    
        if (!inside)
    
          array.push(test);
    
      }
    
      return array.join('');
    }
    const {Title, ScenarioType, ImageUrl,SeoName,Id,PromotionCardColor,RemainingText} = testiMonialDetail;
    console.log("testiMonialDetail"+testiMonialDetail)
    return (
        <div  onClick={handleClick} style={testStyle(PromotionCardColor)} >
            <div class="shadow-effect">
             
                <img class="img-circle" src={ImageUrl} />
               
                {/* <div  className='border_parent'><p className='border_text'></p>{RemainingText}</div> */}
                
            </div>
           
            <div className='center_frame'>
                <h5 class="testimonial-name">{StripTags(Title)}</h5>
                <p>{ScenarioType}</p>
               
            </div>
        </div>
    );
};

export default TestiMonialsDetails;