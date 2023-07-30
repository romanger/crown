import './cart-dropdown.styels.scss'

import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'

import CartItem from '../cart-item/cart-item.component'
import Button from '../button/button.component'
import { useNavigate } from 'react-router-dom'

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext)
    const navigate = useNavigate()

    const goToCheckoutHandler = () => {
        navigate('/checkout')
    }

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map((item) => {
                    return <CartItem key={item.id} cartItem={item} />
                })}
            </div>

            <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
        </div>
    )
}

export default CartDropdown
