import React, { useEffect, useState } from 'react';
import { CartItem } from '../../Components/CartItem';

export const Checkout = () => {
    const [cartProduct, setCartProduct] = useState([]);
    const [totalPrice, setTotalPrice] = useState();

    useEffect(() => {
        fetch('http://localhost:5000/cartItems')
            .then(res => res.json())
            .then(data => setCartProduct(data))
    }, [cartProduct]);

    return (
        <div className="px-20 py-5 min-h-screen grid grid-cols-3 w-full gap-8">
            <div className='col-span-2'>
                <div className="overflow-x-auto w-full mt-5">
                    <table className="table w-full">
                        <thead >
                            <tr className='border-b border-neutral'>
                                <th className='bg-transparent'></th>
                                <th className='bg-transparent'></th>
                                <th className='bg-transparent'>Product</th>
                                <th className='bg-transparent'>Price</th>
                                <th className='bg-transparent'>Quantity</th>
                                <th className='bg-transparent'>Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartProduct?.map(product => <CartItem key={product?._id} setTotalPrice={setTotalPrice} cartProduct={cartProduct} setCartProduct={setCartProduct} product={product} />)}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='col-span-1 pt-16'>
                <div className="w-full border-zinc-400 border-2">
                    <div className="card-body w-full">
                        <h2 className="card-title">Cart Totals</h2>
                        <div className='flex items-center justify-between mt-5'>
                            <div>
                                <p>Subtotal:</p>
                            </div>
                            <div>
                                <p className='text-secondary'>${totalPrice}</p>
                            </div>
                        </div>
                        <div className="divider m-0"></div>
                        <div className='flex items-center justify-between text-xl font-bold'>
                            <div>
                                <p>Total:</p>
                            </div>
                            <div>
                                <p className='text-secondary'>${totalPrice}</p>
                            </div>
                        </div>
                        <button className="btn btn-full btn-secondary mt-8">PROCEED TO CHECKOUT</button>
                    </div>
                </div>
            </div>
        </div>
    );
};