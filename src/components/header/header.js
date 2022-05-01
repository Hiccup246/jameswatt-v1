import * as React from 'react';

import { Link } from 'gatsby'

import ThemeToggle from '../theme-toggle/theme-toggle'
import './header.css'

const Header = () => (
  <div className="header">
    <div className="header__content">
      <Link to="/" location="#home" className="link--regular-font">
        Home
      </Link>

      <div className="header__blogmoon">
        <Link to="/blog" className="link--regular-font">
          Blog
        </Link>
        <ThemeToggle />
      </div>
    </div>
  </div>
)

export default Header
