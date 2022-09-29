import React, { useEffect, useMemo, useState } from 'react';
import { Item } from '../../Components/Item';

export const Cart = () => {
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState();
    const [selectedSize, setSelectedSize] = useState();
    const [searchKeyWord, setSearchKeyWord] = useState('');
    const [selectedCart, setSelectedCart] = useState([]);

    // fetching all products
    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                if (searchKeyWord !== '') {
                    const filteredData = products.filter(product => product?.name.toLowerCase().includes(searchKeyWord.toLowerCase()));
                    setProducts(filteredData);
                }
            });
    }, [products, selectedCategory, selectedSize, searchKeyWord]);

    function getFilteredProduct() {
        if (!selectedSize && !selectedCategory) {
            return products;
        } else if (selectedSize && selectedCategory) {
            return products.filter((product) => (product?.category === selectedCategory) && (product?.size === selectedSize));
        } else {
            return products.filter((product) => (product?.category === selectedCategory) || (product?.size === selectedSize));
        }
    }

    let filteredList = useMemo(getFilteredProduct, [selectedCategory, selectedSize, products]);

    function handleCategoryChange(event) {
        setSelectedCategory(event.target.value);
    }

    function handleSizeChange(event) {
        setSelectedSize(event.target.value);
    }

    function handleSearchKeyWord(event) {
        setSearchKeyWord(event.target.value);
    }

    const handleCart = () => {
        console.log(selectedCart);
    }

    return (
        <div className='px-20 py-5 min-h-screen'>
            <div className="navbar p-0 grid grid-cols-2 justify-between items-center">
                <div className='gap-2'>
                    <select
                        className="select select-bordered w-52 bg-transparent"
                        onChange={handleCategoryChange}
                    >
                        <option disabled selected defaultValue="">Select Category</option>
                        <option value="hoodie">Hoodie</option>
                        <option value="t-shirt">T-Shirt</option>
                        <option value="shirt">Shirt</option>
                    </select>
                    <select
                        className="select select-bordered w-52 bg-transparent"
                        onChange={handleSizeChange}
                    >
                        <option disabled selected defaultValue="">Select Size</option>
                        <option value="sm">SM</option>
                        <option value="md">MD</option>
                        <option value="lg">LG</option>
                        <option value="xl">XL</option>
                        <option value="2xl">2 XL</option>
                    </select>
                    <div className='flex text-primary text-xl items-center cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
                        </svg>
                        Reset
                    </div>
                </div>
                <div className='justify-end'>
                    <div className="flex justify-center items-center">
                        <span className='text-neutral mr-2 text-xl'>Search: </span>
                        <input type="text" onChange={handleSearchKeyWord} className="px-2 py-3 border-none outline-none bg-zinc-300" />
                    </div>
                    <button onClick={() => handleCart()} className="btn btn-primary rounded-none ml-3 text-base-100 font-bold w-40 h-10">Add To Cart</button>
                </div>
            </div>

            {/* Product Table */}
            <div className="overflow-x-auto w-full mt-5">
                <table className="table w-full">
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
                        {filteredList.map(product => <Item selectedCart={selectedCart} setSelectedCart={setSelectedCart} key={product?._id} product={product} />)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};