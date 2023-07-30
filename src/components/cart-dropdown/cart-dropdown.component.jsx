import './cart-dropdown.styels.scss'

import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'

import CartItem from '../cart-item/cart-item.component'
import Button from '../button/button.component'
import { Link } from 'react-router-dom'

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext)
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map((item) => {
                    return <CartItem key={item.id} cartItem={item} />
                })}
            </div>
            <Link to='/checkout'>
                <Button>GO TO CHECKOUT</Button>
            </Link>
        </div>
    )
}

export default CartDropdown
