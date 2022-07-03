import * as React from 'react'

import PlusIcon from '../../assets/svg/plus-icon.svg'

import './content-toggle.css'

const ContentToggle = ({ onClickCallback }) => {
  const onClick = (element) => {
    element.currentTarget.classList.toggle('icon--checked')
    onClickCallback(element)
  }

  return (
    <button
      aria-label="Hide/Display Project Content"
      className="icon"
      onClick={onClick}
    >
      <PlusIcon className="tile-icon-alt" />
    </button>
  )
}

export default ContentToggle
