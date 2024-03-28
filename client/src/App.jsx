import NavbarDark from './components/NavbarDark.jsx'
import Home from './components/Home.jsx'
import Buttons from './components/smaller-components/Buttons.jsx'
import Badges from './components/smaller-components/Badges.jsx'
import Loaders from './components/smaller-components/Loaders.jsx'
import Inputs from './components/smaller-components/Inputs.jsx'
import Footer from './components/Footer.jsx'
import { useState } from 'react'

const App = () => {

    const [darkMode, setDarkMode] = useState(false)

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }

    return (
        <div className={`${darkMode && "dark"}`}>
            <div className='dark:bg-secondary'>
                <div className='max-w-6xl m-auto'>
                    <NavbarDark />
                    <Home />
                    <div className='mt-52'>
                        <Buttons />
                        <Badges />
                        <Loaders />
                        <Inputs />
                    </div>
                    <Footer />
                </div>
            </div>
            <div className="fixed bottom-0 right-0 mb-4 mr-4">
                <button className="rounded-full font-semibold text-sm bg-black w-12 h-12 text-white dark:bg-white dark:text-black"
                    onClick={toggleDarkMode}>{darkMode ? "LHT" : "DRK"}</button>
            </div>
        </div>
    )
}

export default App