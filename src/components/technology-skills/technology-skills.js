import * as React from 'react'

import './technology-skills.css'

const technologies = [
  {
    name: 'Ruby On Rails',
    percentage: '90',
    category: 'comfortable',
  },
  {
    name: 'Vue',
    percentage: '70',
    category: 'comfortable',
  },
  {
    name: 'Angular',
    percentage: '75',
    category: 'comfortable',
  },
  {
    name: 'Bulma',
    percentage: '65',
    category: 'comfortable',
  },
  {
    name: 'Javascript',
    percentage: '80',
    category: 'comfortable',
  },
  {
    name: 'CSS',
    percentage: '75',
    category: 'comfortable',
  },
  {
    name: 'HTML',
    percentage: '75',
    category: 'comfortable',
  },
  {
    name: 'Git',
    percentage: '80',
    category: 'comfortable',
  },
  {
    name: 'Github',
    percentage: '80',
    category: 'comfortable',
  },
  {
    name: 'Clubhouse (Jira Alternative)',
    percentage: '50',
    category: 'comfortable',
  },
  {
    name: 'Terminal',
    percentage: '70',
    category: 'comfortable',
  },
  {
    name: 'Go',
    percentage: '10',
    category: 'played',
  },
  {
    name: 'Solidity',
    percentage: '20',
    category: 'played',
  },
  {
    name: 'Gatsby',
    percentage: '20',
    category: 'played',
  },
  {
    name: 'React',
    percentage: '20',
    category: 'played',
  },
  {
    name: 'Python',
    percentage: '20',
    category: 'played',
  },
  {
    name: 'Koa',
    percentage: '5',
    category: 'played',
  },
  {
    name: 'React Native',
    percentage: '5',
    category: 'played',
  },
]

const skill = (name, percentage, index) => {
  return (
    <div className="skill" key={index}>
      <div className="text-wrapper">
        <div>{name}</div>
        <div className="percentage">{percentage}%</div>
      </div>
      <div className="background-bar">
        <div
          className="background-percentage"
          style={{ width: percentage + '%' }}
        ></div>
      </div>
    </div>
  )
}

const comfortableSkills = () => {
  const comfortable = technologies.filter(
    (skill) => skill.category === 'comfortable'
  )

  return (
    <div className="technology-skills__comfortable">
      <div>What I’m comfortable with...</div>

      {comfortable.map((elem, index) =>
        skill(elem.name, elem.percentage, index)
      )}
    </div>
  )
}

const playedSkills = () => {
  const played = technologies.filter((skill) => skill.category === 'played')

  return (
    <div className="technology-skills__play">
      <div>What I’ve played with...</div>

      {played.map((elem, index) => skill(elem.name, elem.percentage, index))}
    </div>
  )
}

const TechnologySkills = () => (
  <div className="technology-skills">
    <div className="technology-skills__header">
      <h4>🧰Technology Proficiency</h4>
    </div>

    <div className="technology-skills__technologies">
      {comfortableSkills()}

      {playedSkills()}
    </div>
  </div>
)

export default TechnologySkills
