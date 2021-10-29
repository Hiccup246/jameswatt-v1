import * as React from 'react'
import moon from '../../assets/moon-solid.svg'
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
          <img className="header__moon" src={moon} alt='Moon' />
        </div>
      </div>
    </div>
  )
}

export default Header