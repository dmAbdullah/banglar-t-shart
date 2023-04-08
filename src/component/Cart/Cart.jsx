import React from "react";

const Cart = ({cart, handleRemoveFromCart}) => {
    // console.log(cart);
  return (
    <div className="sticky top-0">
      <div className="card bg-neutral text-neutral-content">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Order Summary: {cart.length}</h2>
          {
            cart.map(tshirt=> <p key={tshirt._id}>{tshirt.name} <button className="ml-2 text-amber-500" 
            onClick={()=> handleRemoveFromCart(tshirt._id)}>X</button></p>)
          }
          
        </div>
      </div>
    </div>
  );
};

export default Cart;
