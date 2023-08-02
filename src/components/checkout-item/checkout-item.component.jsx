import {
    CheckoutItemContainer,
    ImageContainer,
    Span,
    Quantity,
    RemoveButton,
    Arrow,
    Value,
} from './checkout-item.styles'

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
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={item.name} />
            </ImageContainer>
            <Span>{name}</Span>
            <Quantity>
                <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={addItemHandler}>&#10095;</Arrow>
            </Quantity>
            <Span>{currency + price}</Span>
            <RemoveButton onClick={deleteProductHandler}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    )
}

export default CheckoutItem
