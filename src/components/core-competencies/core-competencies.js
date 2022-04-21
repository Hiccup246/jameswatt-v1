import * as React from 'react'

import './core-competencies.css'
import {
  CORE_INDUSTRY_COMPETENCIES,
  CORE_PERSONAL_COMPETENCIES,
} from '../../constants/competencies'
import SkillCategory from '../skill-category/skill-category'

const CoreCompetencies = () => {
  return (
    <div className="language-skills">
      <div className="language-skills__header">
        <h2>⚙️ Core Competency Highlights</h2>
      </div>

      <div className="language-skills__technologies">
        <SkillCategory
          skills={CORE_INDUSTRY_COMPETENCIES}
          title="What I've used in Industry..."
        />

        <SkillCategory
          skills={CORE_PERSONAL_COMPETENCIES}
          title="What I’ve played with personally..."
        />
      </div>
    </div>
  )
}

export default CoreCompetencies
