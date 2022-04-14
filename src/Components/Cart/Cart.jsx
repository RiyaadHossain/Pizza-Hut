import React from 'react';
import { useParams } from 'react-router-dom';

const Cart = () => {
    const {foodId}  = useParams()
    return (
        <div>
            <h1>Here is Cart { foodId}</h1>
        </div>
    );
};

export default Cart;