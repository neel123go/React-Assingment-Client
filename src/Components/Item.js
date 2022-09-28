import React from 'react';

export const Item = ({ product }) => {
    return (
        <tr>
            <td>
                <div className="avatar">
                    <div className="w-16 rounded">
                        <img src={product?.image} />
                    </div>
                </div>
            </td>
            <td>{product?.name}</td>
            <td>{product?.color}</td>
            <td>
                {product?.instock === 'true' ? <div className='flex text-success font-semibold'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                    </svg>
                    In Stock
                </div> : <p className='text-red-500 font-semibold'>Out Of Stock</p>}
            </td>
            <td>${product?.price}</td>
            <th>
                <div className="input-group justify-end">
                    <input type="number" defaultValue={1} readOnly className="outline-none focus:outline-none input input-bordered" />
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                    </span>
                </div>
            </th>
            <th>
                <label>
                    <input type="checkbox" className="checkbox border-neutral" />
                </label>
            </th>
        </tr>
    );
};