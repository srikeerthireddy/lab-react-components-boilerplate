import React from "react";
import './Body.css';
const Body=(props)=>{
    console.log(props)
    return(
<div>
        {
          props.data.map(image=>{
            return(
              <div key={image.id} className="column">
                <img src={image.img} alt=""></img>
              </div>
            )
          })
        }
      </div>
      
    //   <GallaryFooter/> 
    )
}
export default Body;


     