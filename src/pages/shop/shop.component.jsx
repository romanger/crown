import { Route, Routes } from 'react-router-dom'

import './shop.styles.scss'
import CategoriesPreview from '../categories-preview/categories-preview.component'
import Category from '../category/category.component'

const Shop = () => {
    return (
        <Routes>
            <Route index Component={CategoriesPreview} />
            <Route path=':category' Component={Category} />
        </Routes>
    )
}

export default Shop
