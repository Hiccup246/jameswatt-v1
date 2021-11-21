import * as React from 'react'

import './tools.css'

const technologies = [
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
    name: 'Gatsby',
    percentage: '20',
    category: 'played',
  },
  {
    name: 'React',
    percentage: '20',
    category: 'comfortable',
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
  {
    name: 'Svelte',
    percentage: '5',
    category: 'played',
  },
]

const skill = (name, percentage, index) => {
  return (
    <div className="skill" key={index}>
      <div className="text-wrapper">
        <div>{name}</div>
        {/* <div className="percentage">{percentage}%</div> */}
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
    <div className="tools-skills__comfortable">
      <div>What I've used in Industry...</div>

      {comfortable.map((elem, index) =>
        skill(elem.name, elem.percentage, index)
      )}
    </div>
  )
}

const playedSkills = () => {
  const played = technologies.filter((skill) => skill.category === 'played')

  return (
    <div className="tools-skills__play">
      <div>What I’ve played with personally...</div>

      {played.map((elem, index) => skill(elem.name, elem.percentage, index))}
    </div>
  )
}

const Tools = () => (
  <div className="tools-skills">
    <div className="tools-skills__header">
      <h4>🧰Tooling Skills</h4>
    </div>

    <div className="tools-skills__technologies">
      {comfortableSkills()}

      {playedSkills()}
    </div>
  </div>
)

export default Tools
