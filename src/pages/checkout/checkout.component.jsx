import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'

import {
    Total,
    CheckoutContainer,
    CheckoutHeader,
    HeaderBlock,
} from './checkout.styles'

const Checkout = () => {
    const { cartItems, totalPrice, currency } = useContext(CartContext)

    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </CheckoutHeader>
            {cartItems.map((item) => {
                return <CheckoutItem item={item} key={item.id} />
            })}
            <Total>Total: {currency + totalPrice}</Total>
        </CheckoutContainer>
    )
}

export default Checkout
