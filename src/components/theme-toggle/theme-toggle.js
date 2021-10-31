import * as React from 'react'

import moon from '../../assets/fa-moon-regular.svg'
import sun from '../../assets/icons8-sun-regular.svg'
import './theme-toggle.css'
import { ThemeContext } from '../theme-context/theme-context'

function getSun() {
  return <img class="theme-toggle__theme-icon" src={sun} alt="Sun" />
}

function getMoon() {
  return <img class="theme-toggle__theme-icon" src={moon} alt="Moon" />
}

const ThemeToggle = () => {
  const { siteTheme, setSiteTheme } = React.useContext(ThemeContext)

  if (!siteTheme) {
    return null
  }

  return (
    <div
      class="theme-toggle"
      onClick={() => setSiteTheme(siteTheme === 'light' ? 'dark' : 'light')}
    >
      {siteTheme === 'dark' ? getSun() : getMoon()}
    </div>
  )
}

export default ThemeToggle
