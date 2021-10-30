import * as React from 'react'

import moon from '../../assets/fa-moon-regular.svg'
import sun from '../../assets/icons8-sun-regular.svg'
import './theme-toggle.css'
import { ThemeContext } from '../theme-context/theme-context'

function getSun() {
    return <img className="theme-toggle__theme-icon" src={sun} alt="Sun" />
}

function getMoon() {
    return <img className="theme-toggle__theme-icon" src={moon} alt="Moon" />
}

const ThemeToggle = () => {
    const { colorMode, setColorMode } = React.useContext(ThemeContext)

    if (!colorMode) {
        return null
    }

    return (
        <div
            className="theme-toggle"
            onClick={() =>
                setColorMode(colorMode == 'light' ? 'dark' : 'light')
            }
        >
            {colorMode === 'dark' ? getSun() : getMoon()}
        </div>
    )
}

export default ThemeToggle
