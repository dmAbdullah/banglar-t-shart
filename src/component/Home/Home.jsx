import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const tshirts = useLoaderData();
    console.log(tshirts);
    return (
        <div className='text-center'>
            <h2>Total T-Shirt: {tshirts.length}</h2>
        </div>
    );
};

export default Home;