import * as React from 'react'
import ThemeToggle from '../theme-toggle/theme-toggle'
import './header.css'

const Header = () => {
  return (
    <div className="header">
      <div className="header__content">
        <a className="link--regular-font">
          Home
        </a>
        <div className="header__blogmoon">
          <a className="link--regular-font">
            Blog
          </a>
          <ThemeToggle />
        </div>
      </div>
    </div>
  )
}

export default Header