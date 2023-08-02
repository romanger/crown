import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { CategoriesContext } from '../../context/categories.context'
import ProductCard from '../../components/product-card/product-card.component'

import { Title, CategoryItemsContainer } from './category.styles'

const Category = () => {
    const { category } = useParams()
    const { categoriesMap } = useContext(CategoriesContext)
    const [products, setProducts] = useState(categoriesMap[category])

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])

    return (
        <>
            <Title>{category.toUpperCase()}</Title>
            <CategoryItemsContainer>
                {products &&
                    products.map((product) => {
                        return (
                            <ProductCard key={product.id} product={product} />
                        )
                    })}
            </CategoryItemsContainer>
        </>
    )
}

export default Category
