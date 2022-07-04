import React from 'react'

import './content-panel-button.css'

const ContentPanelButton = ({ job, activated, clickHandler }) => {
  return (
    <button
      aria-label={job.company}
      className={activated ? 'tab-item activated' : 'tab-item'}
      onClick={(element) => clickHandler(element.currentTarget.clientWidth)}
    >
      {job.company}
    </button>
  )
}

export default ContentPanelButton
