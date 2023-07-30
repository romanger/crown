import './checkout-item.styles.scss'

import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'

const CheckoutItem = ({ item }) => {
    const {
        addItemToCart,
        removeItemFromCart,
        deleteProductFromCart,
        currency,
    } = useContext(CartContext)

    const { name, imageUrl, quantity, price } = item

    const addItemHandler = () => addItemToCart(item)
    const removeItemHandler = () => removeItemFromCart(item)
    const deleteProductHandler = () => deleteProductFromCart(item)

    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={item.name} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={removeItemHandler}>
                    &#10094;
                </div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={addItemHandler}>
                    &#10095;
                </div>
            </span>
            <span className='price'>{currency + price}</span>
            <div className='remove-button' onClick={deleteProductHandler}>
                &#10005;
            </div>
        </div>
    )
}

export default CheckoutItem
