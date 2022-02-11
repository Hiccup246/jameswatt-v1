import * as React from 'react'

import './tool-skills.css'
import { TOOLS } from '../../constants'
import SkillCategory from '../skill-category/skill-category'

const ToolSkills = () => {
  const personal = TOOLS.filter((skill) => skill.category === 'played')
  const industry = TOOLS.filter((skill) => skill.category === 'comfortable')

  return (
    <div className="tools-skills">
      <div className="tools-skills__header">
        <h2>⚙️ Tooling Competency Highlights</h2>
      </div>

      <div className="tools-skills__technologies">
        <SkillCategory
          skills={industry}
          title="What I've used in Industry..."
        />

        <SkillCategory
          skills={personal}
          title="What I’ve played with personally..."
        />
      </div>
    </div>
  )
}

export default ToolSkills
