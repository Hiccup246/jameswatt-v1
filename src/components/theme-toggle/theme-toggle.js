import * as React from 'react'

import Moon from '../../assets/svg/fa-moon-regular.svg'
import Sun from '../../assets/svg/icons8-sun-regular.svg'
import './theme-toggle.css'
import { ThemeContext } from '../theme-context/theme-context'

function getSun() {
  // return <img className="theme-toggle__theme-icon" src={sun} alt="Sun" />
  return <Sun className='theme-toggle__theme-icon' />
}

function getMoon() {
  // return <img className="theme-toggle__theme-icon" src={moon} alt="Moon" />
  return <Moon />
}

const ThemeToggle = () => {
  const { siteTheme, setSiteTheme } = React.useContext(ThemeContext)

  if (!siteTheme) {
    return null
  }

  return (
    <div
      className="theme-toggle"
      onClick={() => setSiteTheme(siteTheme === 'light' ? 'dark' : 'light')}
    >
      {siteTheme === 'dark' ? getSun() : getMoon()}
    </div>
  )
}

export default ThemeToggle
