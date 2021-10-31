import * as React from 'react'

import './author.css'

const Author = () => (
  <div class="author">
    <img
      class="author__picture"
      src="https://via.placeholder.com/140"
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
