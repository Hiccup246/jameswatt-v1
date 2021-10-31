import React from 'react'

import {
  SITE_THEME_KEY,
  THEME_COLORS,
  INITIAL_SITE_THEME_CSS_VAR,
} from '../../constants'

// Code taken from https://www.joshwcomeau.com/react/dark-mode/#appendix-tweaks
// Github of code https://github.com/joshwcomeau/dark-mode-minimal/blob/master/src/components/DarkToggle.js

export const ThemeContext = React.createContext()

export const ThemeProvider = ({ children }) => {
  const [siteTheme, rawSetSiteTheme] = React.useState(undefined)

  React.useEffect(() => {
    const root = window.document.documentElement
    const initialSiteTheme = root.style.getPropertyValue(
      INITIAL_SITE_THEME_CSS_VAR
    )

    rawSetSiteTheme(initialSiteTheme)
  }, [])

  function setSiteTheme(newValue) {
    const root = window.document.documentElement

    localStorage.setItem(SITE_THEME_KEY, newValue)

    Object.entries(THEME_COLORS).forEach(([name, colorByTheme]) => {
      root.style.setProperty(name, colorByTheme[newValue])
    })

    rawSetSiteTheme(newValue)
  }

  return (
    <ThemeContext.Provider value={{ siteTheme, setSiteTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
