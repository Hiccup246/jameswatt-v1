import * as React from 'react'

import './content-toggle.css'

const ContentToggle = ({ onClickCallback }) => (
  <div className="icon" onClick={onClickCallback}>
    <svg
      className="tile-icon-alt"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <path d="M17.25,8.51H11.5V2.75A1.5,1.5,0,0,0,10,1.25h0a1.5,1.5,0,0,0-1.5,1.5V8.5H2.75a1.5,1.5,0,0,0,0,3H8.5v5.75a1.5,1.5,0,0,0,1.5,1.5h0a1.5,1.5,0,0,0,1.5-1.5V11.5h5.75a1.5,1.5,0,0,0,0-3Z"></path>
    </svg>
  </div>
)

export default ContentToggle
