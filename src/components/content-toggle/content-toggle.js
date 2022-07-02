import * as React from 'react'

import PlusIcon from '../../assets/svg/plus-icon.svg'

import './content-toggle.css'

const ContentToggle = ({ onClickCallback }) => (
  <button
    aria-label="Hide/Display Project Content"
    className="icon"
    onClick={onClickCallback}
  >
    <PlusIcon className="tile-icon-alt" />
  </button>
)

export default ContentToggle
