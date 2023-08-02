import './category.style.scss'
import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { CategoriesContext } from '../../context/categories.context'
import ProductCard from '../../components/product-card/product-card.component'

const Category = () => {
    const { category } = useParams()
    const { categoriesMap } = useContext(CategoriesContext)
    const [products, setProducts] = useState(categoriesMap[category])

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])

    return (
        <div className='category-container'>
            <h1 className='title'>{category.toUpperCase()}</h1>
            <div className='category-items-container'>
                {products &&
                    products.map((product) => {
                        return (
                            <ProductCard key={product.id} product={product} />
                        )
                    })}
            </div>
        </div>
    )
}

export default Category
