import * as React from 'react'

import './author.css'
import author from "../../assets/authoredit.png"
import Email from '../../assets/svg/envelope-regular.svg'
import LinkedIn from "../../assets/svg/linkedin.svg"

const Author = () => (
  <div className="author">
    <img className="author__picture" src={author} alt="Author Picture" />
    <div className="author__description">
      <h1 className="author__name">James. Watt</h1>
      <div className="author__description-text">
        I like to question things, mainly software
      </div>
      <div>
        <a
          href="mailto:james@jameswatt.io"
          target="_blank"
          rel="noopener noreferrer"
          className="author-icon-wrapper"
        >
          <Email className="author__icon" />
        </a>

        <a
          href="https://www.linkedin.com/in/james-watt-a6b682147"
          target="_blank"
          className="author-icon-wrapper" rel="noreferrer"
        >
          <LinkedIn className="author__icon" />
        </a>
      </div>
    </div>
  </div>
)

export default Author
// https://via.placeholder.com/140"
