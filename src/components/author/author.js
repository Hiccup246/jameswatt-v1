import * as React from 'react'

import './author.css'
import author from "../../assets/authoredit.png"

const Author = () => (
  <div class="author">
    <img
      class="author__picture"
      src={author}
      alt="Author Picture"
    />
    <div class="author__description">
      <h1 class="author__name">James. Watt</h1>
      <div class="author__description-text">
        I like to question things, mainly software
      </div>
    </div>
  </div>
)

export default Author
// https://via.placeholder.com/140"