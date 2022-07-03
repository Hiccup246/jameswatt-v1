import * as React from 'react'

import './skill.css'

const Skill = ({ name, percentage }) => (
  <div className="skill">
    <div className="skill__text-wrapper">
      <div>{name}</div>
    </div>

    <div className="skill__background-bar">
      <div
        className="skill__background-percentage"
        style={{ width: percentage + '%' }}
      ></div>
    </div>
  </div>
)

export default Skill
