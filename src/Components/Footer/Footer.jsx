import React from 'react';

const date = new Date()

const Footer = () => {

    return (
        <div className='bg-dark text-white py-4'>
            <p className='text-center'> Copyright &copy; {date.getFullYear()}. Made with 💖</p>
        </div>
    );
};

export default Footer;