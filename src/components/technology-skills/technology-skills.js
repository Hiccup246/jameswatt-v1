import * as React from 'react'

import './technology-skills.css'

const TechnologySkills = () => (
  <div className="technology-skills">
    <div className="technology-skills__header">
      <h4>🧰Technology Proficiency</h4>
    </div>

    <div className="technology-skills__technologies">
      <div className="technology-skills__comfortable">
        <div>What I’m comfortable with...</div>

        <div className="skill">
          <div className="text-wrapper">
            <div>HTML</div>
            <div className="percentage">50%</div>
          </div>
          <div className="background-bar">
            <div className="background-percentage"></div>
          </div>
        </div>

        <div className="skill">
          <div className="text-wrapper">
            <div>HTML</div>
            <div className="percentage">50%</div>
          </div>
          <div className="background-bar">
            <div className="background-percentage"></div>
          </div>
        </div>

        <div className="skill">
          <div className="text-wrapper">
            <div>HTML</div>
            <div className="percentage">50%</div>
          </div>
          <div className="background-bar">
            <div className="background-percentage"></div>
          </div>
        </div>
      </div>

      <div className="technology-skills__play">
        <div>What I’ve played with...</div>

        <div className="skill">
          <div className="text-wrapper">
            <div>HTML</div>
            <div className="percentage">50%</div>
          </div>
          <div className="background-bar">
            <div className="background-percentage"></div>
          </div>
        </div>

        <div className="skill">
          <div className="text-wrapper">
            <div>Javascript</div>
            <div className="percentage">50%</div>
          </div>
          <div className="background-bar">
            <div className="background-percentage"></div>
          </div>
        </div>

        <div className="skill">
          <div className="text-wrapper">
            <div>HTML</div>
            <div className="percentage">50%</div>
          </div>
          <div className="background-bar">
            <div className="background-percentage"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default TechnologySkills
