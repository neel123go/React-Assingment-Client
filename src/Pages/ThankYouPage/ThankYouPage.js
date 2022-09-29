import React from 'react';
import ThankYouImg from '../../assets/thank-you.png';

export const ThankYouPage = () => {
    return (
        <div>
            <img src={ThankYouImg} className="w-3/5 mx-auto mt-20" alt="" />
            <h1 className='text-3xl text-center mt-16'>Thanks so much for your order! I hope you enjoy your new purchase!</h1>
        </div>
    );
};