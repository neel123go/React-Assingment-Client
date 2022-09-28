import React from 'react';

export const Checkout = () => {
    return (
        <div className="px-20 py-5 min-h-screen grid grid-cols-3 w-full gap-8">
            <div className='col-span-2'>
                <div className="overflow-x-auto w-full mt-5">
                    <table className="table w-full">
                        {/* <!-- head --> */}
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
                            {/* <!-- row 1 --> */}
                            <tr>
                                <td>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="w-16 rounded">
                                            <img src="https://placeimg.com/192/192/people" />
                                        </div>
                                    </div>
                                </td>
                                <td>Hoodie</td>
                                <td>$300</td>
                                <td>
                                    <div className="flex rounded-lg relative h-10 bg-transparent mt-1">
                                        <button data-action="decrement" className="bg-transparent text-neutral border-neutral border-y border-l h-full w-10 cursor-pointer rounded-l-full">−</button>
                                        <input type="number" className="text-center w-32 bg-transparent border-y border-neutral outline-none pl-3" value="45" readOnly></input>
                                        <button data-action="increment" className="bg-transparent text-neutral border-neutral border-y border-r h-full w-10 cursor-pointer rounded-r-full">+</button>
                                    </div>
                                </td>
                                <td>$500</td>
                            </tr>
                            <tr>
                                <td>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="w-16 rounded">
                                            <img src="https://placeimg.com/192/192/people" />
                                        </div>
                                    </div>
                                </td>
                                <td>Hoodie</td>
                                <td>$300</td>
                                <td>
                                    <div className="flex rounded-lg relative h-10 bg-transparent mt-1">
                                        <button data-action="decrement" className="bg-transparent text-neutral border-neutral border-y border-l h-full w-10 cursor-pointer rounded-l-full">−</button>
                                        <input type="number" className="text-center w-32 bg-transparent border-y border-neutral outline-none pl-3" value="45" readOnly></input>
                                        <button data-action="increment" className="bg-transparent text-neutral border-neutral border-y border-r h-full w-10 cursor-pointer rounded-r-full">+</button>
                                    </div>
                                </td>
                                <td>$500</td>
                            </tr>
                            <tr>
                                <td>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="w-16 rounded">
                                            <img src="https://placeimg.com/192/192/people" />
                                        </div>
                                    </div>
                                </td>
                                <td>Hoodie</td>
                                <td>$300</td>
                                <td>
                                    <div className="flex rounded-lg relative h-10 bg-transparent mt-1">
                                        <button data-action="decrement" className="bg-transparent text-neutral border-neutral border-y border-l h-full w-10 cursor-pointer rounded-l-full">−</button>
                                        <input type="number" className="text-center w-32 bg-transparent border-y border-neutral outline-none pl-3" value="45" readOnly></input>
                                        <button data-action="increment" className="bg-transparent text-neutral border-neutral border-y border-r h-full w-10 cursor-pointer rounded-r-full">+</button>
                                    </div>
                                </td>
                                <td>$500</td>
                            </tr>
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
                                <p className='text-secondary'>$500</p>
                            </div>
                        </div>
                        <div className="divider m-0"></div>
                        <div className='flex items-center justify-between text-xl font-bold'>
                            <div>
                                <p>Total:</p>
                            </div>
                            <div>
                                <p className='text-secondary'>$500</p>
                            </div>
                        </div>
                        <button className="btn btn-full btn-secondary mt-8">PROCEED TO CHECKOUT</button>
                    </div>
                </div>
            </div>
        </div>
    );
};