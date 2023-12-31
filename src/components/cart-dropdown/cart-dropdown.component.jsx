import {
    CartDropdownContainer,
    CartItems,
    EmptyMessage,
} from './cart-dropdown.styles'

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
        <CartDropdownContainer>
            <CartItems>
                {cartItems.length ? (
                    cartItems.map((item) => {
                        return <CartItem key={item.id} cartItem={item} />
                    })
                ) : (
                    <EmptyMessage>Your cart is empty</EmptyMessage>
                )}
            </CartItems>

            <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
        </CartDropdownContainer>
    )
}

export default CartDropdown
