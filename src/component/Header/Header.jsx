import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='flex justify-center space-x-8 my-5'>
            <Link to='/'>Home</Link>
            <Link to='/review'>Order</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
        </nav>
    );
};

export default Header;