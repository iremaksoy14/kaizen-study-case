import React,{useState} from 'react';
import './style.css'
import star from '../../assets/images/star.png'
import colors from '../../assets/images/colors.png'


import kesfet from '../../assets/images/kesfet.png'
import cuzdan from '../../assets/images/cuzdan.png'


function Footer(props) {
    const [toggleClassName, setClassName] = useState("tab");
    function onClick() {
        if (toggleClassName.includes("active")) {
          setClassName("");
          console.log({ toggleClassName });
        } else {
          setClassName("active");
          console.log({ toggleClassName });
        }
      }
    return (
        <div className="tab-nav-container">
        <div onClick={onClick} >
        <img src={kesfet} alt=""/>
         </div>
         <div onClick={onClick} >
         <img src={colors} alt=""/>      
          </div>
          <div onClick={onClick} >
          <img src={cuzdan} alt=""/>
         
          </div>
         
       </div>
    );
}

export default Footer;