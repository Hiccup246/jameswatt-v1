import * as React from 'react'

import './language-skills.css'
import { LANGUAGES } from '../../constants'
import SkillCategory from '../skill-category/skill-category'

const LanguageSkills = () => {
  const personal = LANGUAGES.filter((skill) => skill.category === 'played')
  const industry = LANGUAGES.filter((skill) => skill.category === 'comfortable')

  return (
    <div className="language-skills">
      <div className="language-skills__header">
        <h4>🔡Language Proficiency Highlights</h4>
      </div>

      <div className="language-skills__technologies">
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

export default LanguageSkills
