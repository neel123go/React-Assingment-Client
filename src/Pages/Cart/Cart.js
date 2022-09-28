import React from 'react';

export const Cart = () => {
    return (
        <div className='px-20 py-5 min-h-screen'>
            <div className="navbar p-0 grid grid-cols-2 justify-between items-center">
                <div className='gap-2'>
                    <select className="select select-bordered w-52 bg-transparent">
                        <option disabled selected>Select Category</option>
                        <option>Hoodies</option>
                        <option>T-Shirt</option>
                        <option>Shirt</option>
                    </select>
                    <select className="select select-bordered w-52 bg-transparent">
                        <option disabled selected>Select Size</option>
                        <option>S</option>
                        <option>M</option>
                        <option>XL</option>
                        <option>2 XL</option>
                    </select>
                    <div className='flex text-primary text-xl items-center cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-7 h-7 mr-2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
                        </svg>
                        Reset
                    </div>
                </div>
                <div className='justify-end'>
                    <div className="flex justify-center items-center">
                        <span className='text-neutral mr-2 text-xl'>Search: </span>
                        <input type="text" className="px-2 py-3 border-none outline-none bg-zinc-300" />
                    </div>
                    <button className="btn btn-primary rounded-none ml-3 text-base-100 font-bold w-40 h-10">Add To Cart</button>
                </div>
            </div>

            {/* Product Table */}
            <div class="overflow-x-auto w-full mt-5">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Color</th>
                            <th>Stock</th>
                            <th>Price</th>
                            <th></th>
                            <th>Buy</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        <tr>
                            <td>
                                <div class="avatar">
                                    <div class="w-16 rounded">
                                        <img src="https://placeimg.com/192/192/people" />
                                    </div>
                                </div>
                            </td>
                            <td>Hoodie</td>
                            <td>Purple</td>
                            <td>
                                <div className='flex text-success font-semibold'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                                    </svg>
                                    In Stock
                                </div>
                            </td>
                            <td>$300</td>
                            <th>
                                <div class="input-group justify-end">
                                    <input type="number" defaultValue={1} class="outline-none focus:outline-none input input-bordered" />
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                        </svg>
                                    </span>
                                </div>
                            </th>
                            <th>
                                <label>
                                    <input type="checkbox" class="checkbox border-neutral" />
                                </label>
                            </th>
                        </tr>
                        {/* <!-- row 1 --> */}
                        <tr>
                            <td>
                                <div class="avatar">
                                    <div class="w-16 rounded">
                                        <img src="https://placeimg.com/192/192/people" />
                                    </div>
                                </div>
                            </td>
                            <td>Hoodie</td>
                            <td>Purple</td>
                            <td>
                                <div className='flex text-success font-semibold'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                                    </svg>
                                    In Stock
                                </div>
                            </td>
                            <td>$300</td>
                            <th>
                                <div class="input-group justify-end">
                                    <input type="number" defaultValue={1} class="outline-none focus:outline-none input input-bordered" />
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                        </svg>
                                    </span>
                                </div>
                            </th>
                            <th>
                                <label>
                                    <input type="checkbox" class="checkbox border-neutral" />
                                </label>
                            </th>
                        </tr>
                        {/* <!-- row 1 --> */}
                        <tr>
                            <td>
                                <div class="avatar">
                                    <div class="w-16 rounded">
                                        <img src="https://placeimg.com/192/192/people" />
                                    </div>
                                </div>
                            </td>
                            <td>Hoodie</td>
                            <td>Purple</td>
                            <td>
                                <div className='flex text-success font-semibold'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                                    </svg>
                                    In Stock
                                </div>
                            </td>
                            <td>$300</td>
                            <th>
                                <div class="input-group justify-end">
                                    <input type="number" defaultValue={1} class="outline-none focus:outline-none input input-bordered" />
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                        </svg>
                                    </span>
                                </div>
                            </th>
                            <th>
                                <label>
                                    <input type="checkbox" class="checkbox border-neutral" />
                                </label>
                            </th>
                        </tr>
                        {/* <!-- row 1 --> */}
                        <tr>
                            <td>
                                <div class="avatar">
                                    <div class="w-16 rounded">
                                        <img src="https://placeimg.com/192/192/people" />
                                    </div>
                                </div>
                            </td>
                            <td>Hoodie</td>
                            <td>Purple</td>
                            <td>
                                <div className='flex text-success font-semibold'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                                    </svg>
                                    In Stock
                                </div>
                            </td>
                            <td>$300</td>
                            <th>
                                <div class="input-group justify-end">
                                    <input type="number" defaultValue={1} class="outline-none focus:outline-none input input-bordered" />
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                        </svg>
                                    </span>
                                </div>
                            </th>
                            <th>
                                <label>
                                    <input type="checkbox" class="checkbox border-neutral" />
                                </label>
                            </th>
                        </tr>
                        {/* <!-- row 1 --> */}
                        <tr>
                            <td>
                                <div class="avatar">
                                    <div class="w-16 rounded">
                                        <img src="https://placeimg.com/192/192/people" />
                                    </div>
                                </div>
                            </td>
                            <td>Hoodie</td>
                            <td>Purple</td>
                            <td>
                                <div className='flex text-success font-semibold'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                                    </svg>
                                    In Stock
                                </div>
                            </td>
                            <td>$300</td>
                            <th>
                                <div class="input-group justify-end">
                                    <input type="number" defaultValue={1} class="outline-none focus:outline-none input input-bordered" />
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                        </svg>
                                    </span>
                                </div>
                            </th>
                            <th>
                                <label>
                                    <input type="checkbox" class="checkbox border-neutral" />
                                </label>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};