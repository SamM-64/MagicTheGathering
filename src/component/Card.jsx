import React from "react";

const Card =({img}) => {
    return (  <div className ='card'>
       
        <img className='card-img' src ={img} alt="magicCards" />
        </div>
    );
};

export default Card;