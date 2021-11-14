import * as React from 'react'

import './author.css'
import author from "../../assets/authoredit.png"

const Author = () => (
  <div className="author">
    <img
      className="author__picture"
      src={author}
      alt="Author Picture"
    />
    <div className="author__description">
      <h1 className="author__name">James. Watt</h1>
      <div className="author__description-text">
        I like to question things, mainly software
      </div>
    </div>
  </div>
)

export default Author
// https://via.placeholder.com/140"