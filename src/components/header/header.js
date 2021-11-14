import * as React from 'react';

import ThemeToggle from '../theme-toggle/theme-toggle'
import './header.css'

const Header = () => (
  <div className="header">
    <div className="header__content">
      <a href="#top" className="link--regular-font">
        Home
      </a>
      <div className="header__blogmoon">
        {/* TODO Add blog nav
          <a classNameName="link--regular-font">
            Blog
          </a> */}
        <ThemeToggle />
      </div>
    </div>
  </div>
)

export default Header
