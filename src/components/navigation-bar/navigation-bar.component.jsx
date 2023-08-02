import { useContext } from 'react'
import { UserContext } from '../../context/user.context'
import { CartContext } from '../../context/cart.context'
import { Outlet } from 'react-router-dom'
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import { signOutUser } from '../../utils/firebase/firebase.utils'
import CartIcon from '../cart-icon/cart-icon.component'

import {
    NavLink,
    NavLinksContainer,
    NavigationContainer,
    LogoContainer,
} from './navigation-bar.styles'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

const NavigationBar = () => {
    const { currentUser } = useContext(UserContext)
    const { isCartOpen } = useContext(CartContext)

    return (
        <>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <CrwnLogo className='logo' />
                </LogoContainer>
                <NavLinksContainer>
                    <NavLink to='/shop'>Shop</NavLink>
                    {currentUser ? (
                        <NavLink as='span' onClick={signOutUser}>
                            Sign Out
                        </NavLink>
                    ) : (
                        <NavLink to='/auth'>Sign In</NavLink>
                    )}
                    <CartIcon />
                </NavLinksContainer>
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default NavigationBar
