import { useContext } from 'react'
import { UserContext } from '../../context/user.context'
import { CartContext } from '../../context/cart.context'
import { Outlet, Link } from 'react-router-dom'
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import { signOutUser } from '../../utils/firebase/firebase.utils'
import CartIcon from '../cart-icon/cart-icon.component'

import './navigation-bar.styles.scss'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

const NavigationBar = () => {
    const { currentUser } = useContext(UserContext)
    const { isCartOpen } = useContext(CartContext)

    return (
        <>
            <header className='navigation'>
                <Link className='logo-container' to='/'>
                    <CrwnLogo className='logo' />
                </Link>
                <nav className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                        Shop
                    </Link>
                    {currentUser ? (
                        <span className='nav-link' onClick={signOutUser}>
                            Sign Out
                        </span>
                    ) : (
                        <Link className='nav-link' to='/auth'>
                            Sign In
                        </Link>
                    )}
                    <CartIcon />
                </nav>
                {isCartOpen && <CartDropdown />}
            </header>
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default NavigationBar
