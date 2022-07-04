import React from 'react'

import './content-panel.css'

const ContentPanel = ({ job, activated }) => {
  return (
    <div className={activated ? 'tab-panel activated' : 'tab-panel'}>
      <h3>
        <span className="company-role">{job.role}</span>
        <span className="company-name"> @ {job.company}</span>
      </h3>
      <p className="date-range">{job.dateRange}</p>
      <div className="company-description">{job.description}</div>
      <ul className="experience-points">
        {job.bullets.map((element, index) => {
          return <li key={index}>{element}</li>
        })}
      </ul>
    </div>
  )
}

export default ContentPanel
