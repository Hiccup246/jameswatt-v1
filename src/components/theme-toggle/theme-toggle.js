import * as React from 'react'

import Moon from '../../assets/svg/fa-moon-regular.svg'
import Sun from '../../assets/svg/icons8-sun-regular.svg'
import './theme-toggle.css'
import { ThemeContext } from '../theme-context/theme-context'

function getSun() {
  return <Sun className="theme-toggle__theme-icon" />
}

function getMoon() {
  return <Moon />
}

const ThemeToggle = () => {
  const { siteTheme, setSiteTheme } = React.useContext(ThemeContext)

  if (!siteTheme) {
    return null
  }

  return (
    <button
      aria-label="Theme toggle"
      className="theme-toggle"
      onClick={() => setSiteTheme(siteTheme === 'light' ? 'dark' : 'light')}
    >
      {siteTheme === 'dark' ? getSun() : getMoon()}
    </button>
  )
}

export default ThemeToggle
