import './cart-icon.styles.scss'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

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
        <div className='cart-icon-container' onClick={clickHandler}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{itemsQuantity}</span>
        </div>
    )
}

export default CartIcon
