import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import Cart from '../Cart/Cart'

const Home = () => {
    const tshirts = useLoaderData();

    const [cart, setCart]= useState([]);

const handleAddToCart= tshirt=> {
    const newCard= [...cart, tshirt];
      setCart(newCard);
}

const handleRemoveFromCart= id=> {
    const remaining= cart.filter(ts=> ts._id !==id);
    setCart(remaining);
}

    return (
        <div className='w-11/12 grid grid-cols-3 gap-2'>
            <div className='t-shirt grid md:grid-cols-2 col-span-2 mx-auto'>
            {
               tshirts.map(tshirt=> <TShirt key={tshirt._id} tshirt={tshirt} handleAddToCart={handleAddToCart}/>) 
            }
            </div>
            <div className='text-center w-full'>
                <Cart cart= {cart} handleRemoveFromCart={handleRemoveFromCart}/>
            </div>
        </div>
    );
};

export default Home;