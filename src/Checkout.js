import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';

function Chekout() {
    const [{basket, user}, dispatch] = useStateValue();
    return (
        <div className='checkout'>
            <div className="checkout_left">
                <img src="https://img1.gadgetsnow.com/gd/imgbn/Amazon-Cash-Back.jpg" alt="banner" className='checkout_ad'/>
                <div>
                    <h3>Hello, {user?.email}</h3>
                    <h2 className='checkout_title'>Your Shopping Basket</h2>
                    {basket.map(item => (
                        <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        />
                    ))}
                </div>
            </div>
            <div className="checkout_right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Chekout
