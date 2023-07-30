import './checkout.style.scss'

import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'

const Checkout = () => {
    const {
        cartItems,
        addItemToCart,
        removeItemFromCart,
        deleteProductFromCart,
        totalPrice,
        currency,
    } = useContext(CartContext)

    return (
        <div>
            {cartItems.map((item) => {
                return (
                    <div key={item.id}>
                        <img src={item.imageUrl} alt={item.name} />
                        <h2>{item.name}</h2>
                        <span>{item.quantity}</span> |{' '}
                        <button
                            onClick={() => {
                                addItemToCart(item)
                            }}
                        >
                            Add
                        </button>
                        <button
                            onClick={() => {
                                removeItemFromCart(item)
                            }}
                        >
                            Remove
                        </button>
                        <span>{item.price}</span> |
                        <button
                            onClick={() => {
                                deleteProductFromCart(item)
                            }}
                        >
                            X
                        </button>
                    </div>
                )
            })}
            <h2>{totalPrice + currency}</h2>
        </div>
    )
}

export default Checkout
