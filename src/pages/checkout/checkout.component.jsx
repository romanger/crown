import './checkout.style.scss'

import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'

const Checkout = () => {
    const { cartItems, totalPrice, currency } = useContext(CartContext)

    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map((item) => {
                return <CheckoutItem item={item} key={item.id} />
            })}
            <span className='total'>Total: {currency + totalPrice}</span>
        </div>
    )
}

export default Checkout
