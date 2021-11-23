import * as React from 'react'

import './skill-category.css'
import Skill from '../skill/skill'

const SkillCategory = ({ skills, title }) => (
  <div className="skill-category">
    <div>{title}</div>

    {skills.map((elem, index) => (
      <Skill name={elem.name} percentage={elem.percentage} key={index} />
    ))}
  </div>
)

export default SkillCategory
