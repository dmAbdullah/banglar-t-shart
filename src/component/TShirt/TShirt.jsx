import React from 'react';

const TShirt = ({tshirt, handleAddToCart}) => {
    const {picture, name, price, gender}= tshirt;
    return (
        <div className="card w-96 bg-base-100 shadow-xl mb-5">
  <figure><img src={picture} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>$ {price}</p>
    <p>for {gender}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-accent" onClick={()=> handleAddToCart(tshirt)}>Add to Cart</button>
    </div>
  </div>
</div>
    );
};

export default TShirt;