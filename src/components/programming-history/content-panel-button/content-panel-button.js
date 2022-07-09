import React from 'react'

import './content-panel-button.css'

const ContentPanelButton = ({ companyName, activated, clickHandler }) => {
  return (
    <button
      aria-label={companyName}
      className={activated ? 'tab-item activated' : 'tab-item'}
      onClick={(element) => clickHandler(element.currentTarget.offsetWidth)}
    >
      {companyName}
    </button>
  )
}

export default ContentPanelButton
