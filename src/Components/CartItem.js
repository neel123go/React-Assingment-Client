import React, { useEffect } from 'react';

export const CartItem = ({ product, setCartProduct, cartProduct, setTotalPrice }) => {

    useEffect(() => {
        const price = cartProduct.map(product => (parseInt(product?.price) * parseInt(product?.quantity)));
        let totalPrice = 0;
        price.map(price => (totalPrice = totalPrice + price));
        setTotalPrice(totalPrice)
    }, [cartProduct, setTotalPrice]);

    const increaseQty = (id) => {
        const result = cartProduct.filter(item => (item?._id === id));
        const newQty = parseInt(result[0].quantity) + 1;

        fetch(`https://react-assignment.onrender.com/cart/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ quantity: newQty })
        })
            .then(res => res.json())
            .then(data => {
                // console.log('Quantity Updated Successfully')
            });
    };

    const decrementQty = (id) => {
        const result = cartProduct.filter(item => (item?._id === id));
        const newQty = parseInt(result[0].quantity) - 1;

        fetch(`https://react-assignment.onrender.com/cart/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ quantity: newQty })
        })
            .then(res => res.json())
            .then(data => {
                // console.log('Quantity Updated Successfully')
            });
    };

    const handleDeleteButton = (id) => {
        fetch(`https://react-assignment.onrender.com/cart/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
            }
        })
            .then(res => res.json())
            .then(data => {
                // console.log('Deleted Successfully');
            })
    };

    return (
        <tr>
            <td>
                <svg onClick={() => handleDeleteButton(product?._id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </td>
            <td>
                <div className="avatar">
                    <div className="w-16 rounded">
                        <img src={product?.image} />
                    </div>
                </div>
            </td>
            <td>{product?.name}</td>
            <td>${product?.price}</td>
            <td>
                <div className="flex rounded-lg relative h-10 bg-transparent mt-1">

                    <button onClick={() => decrementQty(product?._id)} className="bg-transparent text-neutral border-neutral border-y border-l h-full w-10 cursor-pointer rounded-l-full" disabled={product?.quantity === 1}>−</button>
                    <input type="number" className="text-center w-32 bg-transparent border-y border-neutral outline-none pl-3" value={parseInt(product?.quantity) > 0 ? parseInt(product?.quantity) : 0} readOnly id="number"></input>
                    <button onClick={() => increaseQty(product?._id)} className="bg-transparent text-neutral border-neutral border-y border-r h-full w-10 cursor-pointer rounded-r-full">+</button>

                </div>
            </td>
            <td>${product?.price * parseInt(product?.quantity)}</td>
        </tr>
    );
};