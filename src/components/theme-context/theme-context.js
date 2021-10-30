import React from 'react'

import {
    COLOR_MODE_KEY,
    COLORS,
    INITIAL_COLOR_MODE_CSS_PROP,
} from '../../constants'

// Code taken from https://www.joshwcomeau.com/react/dark-mode/#appendix-tweaks
// Github of code https://github.com/joshwcomeau/dark-mode-minimal/blob/master/src/components/DarkToggle.js

export const ThemeContext = React.createContext()
export const ThemeProvider = ({ children }) => {
    const [colorMode, rawSetColorMode] = React.useState(undefined)
    React.useEffect(() => {
        const root = window.document.documentElement
        const initialColorValue = root.style.getPropertyValue(
            '--initial-color-mode'
        )
        rawSetColorMode(initialColorValue)
    }, [])
    function setColorMode(newValue) {
        const root = window.document.documentElement
        // 1. Update React color-mode state
        // 2. Update localStorage
        localStorage.setItem('color-mode', newValue)

        Object.entries(COLORS).forEach(([name, colorByTheme]) => {
            const cssVarName = `--color-${name}`

            root.style.setProperty(cssVarName, colorByTheme[newValue])
        })

        rawSetColorMode(newValue)
    }
    return (
        <ThemeContext.Provider value={{ colorMode, setColorMode }}>
            {children}
        </ThemeContext.Provider>
    )
}
