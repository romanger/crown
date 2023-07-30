import { createContext, useState, useEffect } from 'react'

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    )

    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        )
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }]
}

const removeCartItem = (cartItems, productToRemove) => {
    if (productToRemove.quantity === 1) {
        return cartItems.filter((item) => item.id !== productToRemove.id)
    }

    return cartItems.map((cartItem) =>
        cartItem.id === productToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    )
}

const deleteProduct = (cartItems, productToDelete) => {
    return cartItems.filter((item) => item.id !== productToDelete.id)
}

const getTotalPrice = (cartItems) => {
    return cartItems.reduce((acc , current) => {
            return acc + (current.price * current.quantity)
    }, 0)
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    itemsQuantity: 0,
    removeItemFromCart: () => {},
    deleteProductFromCart: () => {},
    totalPrice: 0,
    currency: '',
})

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [itemsQuantity, setItemsQuantity] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)
    const [currency] = useState('$')

    useEffect(() => {
        setItemsQuantity(getItemsQuantity(cartItems))
        setTotalPrice(getTotalPrice(cartItems))
    }, [cartItems])

    const getItemsQuantity = (cartItems) => {
        return cartItems.reduce((acc, current) => acc + current.quantity, 0)
    }

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    const removeItemFromCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems, productToRemove))
    }

    const deleteProductFromCart = (productToDelete) => {
        setCartItems(deleteProduct(cartItems, productToDelete))
    }

    const value = {
        isCartOpen,
        setIsCartOpen,
        cartItems,
        addItemToCart,
        itemsQuantity,
        removeItemFromCart,
        deleteProductFromCart,
        totalPrice,
        currency,
    }
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
