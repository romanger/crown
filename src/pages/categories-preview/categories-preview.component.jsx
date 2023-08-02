import { useContext } from 'react'
import { CategoriesContext } from '../../context/categories.context'
import CategoryPreview from '../../components/category-preview/category-preview.component'

const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext)
    return (
        <>
            {Object.keys(categoriesMap).map((title, i) => (
                <CategoryPreview
                    key={title + i}
                    title={title}
                    products={categoriesMap[title]}
                />
            ))}
        </>
    )
}

export default CategoriesPreview
