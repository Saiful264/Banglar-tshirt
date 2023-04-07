import React from "react";
import './Tshirt.css';

const Tshirt = ({tshirt, handleAbbToCart}) => {
  const { _id, name, picture, price } = tshirt;
  return (
    <div>
      <div className="t-shirt">
        <img src={picture} alt="" />
        <h2>{name}</h2>
        <p>${price}</p>
        <button onClick={()=>handleAbbToCart(tshirt)}>Buy Now</button>
      </div>
    </div>
  );
};

export default Tshirt;
