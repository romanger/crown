import {
    ProductCardContainer,
    Image,
    Footer,
    Name,
    Price,
} from './product-card.styles'
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component'

import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'

const ProductCard = ({ product }) => {
    const { name, imageUrl, price } = product
    const { addItemToCart, currency } = useContext(CartContext)

    const addProductToCart = () => addItemToCart(product)

    return (
        <ProductCardContainer>
            <Image src={imageUrl} alt={name} />
            <Footer>
                <Name>{name}</Name>
                <Price>{currency + price}</Price>
            </Footer>
            <Button
                buttonType={BUTTON_TYPE_CLASSES.inverted}
                onClick={addProductToCart}
            >
                Add to cart
            </Button>
        </ProductCardContainer>
    )
}

export default ProductCard
