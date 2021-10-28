import * as React from 'react'
import moon from '../../assets/moon-solid.svg'
import './header.css'

const Header = () => {
  return (
    <div className="header">
      <div className="header__content">
        <div className="link header__content--no-margin">
          Home
        </div>
        <div className="header__content__blogmoon">
          <div className="link header__content--no-margin">
            Blog
          </div>
          <img className="header__content__moon" src={moon} alt='Moon' />
        </div>
      </div>
    </div>
  )
}

export default Header