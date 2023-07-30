import NavigationBar from './components/navigation-bar/navigation-bar.component'
import Home from './pages/home/home.component'
import Shop from './pages/shop/shop.component'
import Authentication from './pages/authentication/authentication.component'

import { Route, Routes } from 'react-router-dom'

const App = () => {
    return (
        <Routes>
            <Route path='/' Component={NavigationBar}>
                <Route index Component={Home} />
                <Route path='shop' Component={Shop} />
                <Route path='auth' Component={Authentication} />
            </Route>
        </Routes>
    )
}

export default App
