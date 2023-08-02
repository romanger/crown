import {
    CartIconContainer,
    ShoppingIconSVG,
    ItemCount,
} from './cart-icon.styles'

import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'

const CartIcon = () => {
    const { setIsCartOpen, itemsQuantity } = useContext(CartContext)

    const clickHandler = () => {
        setIsCartOpen((last) => {
            return !last
        })
    }

    return (
        <CartIconContainer onClick={clickHandler}>
            <ShoppingIconSVG className='shopping-icon' />
            <ItemCount>{itemsQuantity}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon
