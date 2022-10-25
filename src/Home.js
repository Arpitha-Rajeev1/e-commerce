import React, { useEffect, useState } from 'react'
import './Home.css';
import Product from './Product';

function Home() {

    const [products, setproducts] = useState([])

    useEffect(() => {
        async function fetchProducts() {
            await fetch('https://fakestoreapi.com/products')
                .then((res) => res.json())
                .then((result) => setproducts(...products, result))
        }

        fetchProducts()
    }, [])

    return (
        <div className='home'>
            <div className="home_container">
                <img src="https://img.freepik.com/free-vector/online-shopping-horizontal-banner-illustration_1284-57252.jpg?w=2000" height={800} alt="banner" className='home_image' />
                <div className="products">
                    {products?.map((product) =>
                        <Product
                            id={product.id}
                            title={product.title}
                            price={product.price}
                            description={product.description}
                            category={product.category}
                            image={product.image}
                            rating={Math.floor(product.rating.rate)}
                         />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Home
