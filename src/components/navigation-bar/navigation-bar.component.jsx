import { useContext } from 'react'
import { UserContext } from '../../context/user.context'
import { Outlet, Link } from 'react-router-dom'
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import { signOutUser } from '../../utils/firebase/firebase.utils'

import './navigation-bar.styles.scss'

const NavigationBar = () => {
    const { currentUser} = useContext(UserContext)

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
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default NavigationBar
