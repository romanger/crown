import { createContext, useState, useEffect } from 'react'

import { getCollectionAndDocuments } from '../utils/firebase/firebase.utils'

export const CategoriesContext = createContext({
    categoriesMap: [],
    setProducts: () => null,
})

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({})
    const value = {
        categoriesMap,
        setCategoriesMap,
    }

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCollectionAndDocuments()
            setCategoriesMap(categoryMap)
        }

        getCategoriesMap()
    }, [])

    return (
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    )
}
