import * as React from 'react';

import ThemeToggle from '../theme-toggle/theme-toggle'
import './header.css'

const Header = () => (
  <div class="header">
    <div class="header__content">
      <a href="#top" class="link--regular-font">
        Home
      </a>
      <div class="header__blogmoon">
        {/* TODO Add blog nav
          <a className="link--regular-font">
            Blog
          </a> */}
        <ThemeToggle />
      </div>
    </div>
  </div>
)

export default Header
