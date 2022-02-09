import * as React from 'react'

import './project-overview.css'

const ProjectOverview = ({ imageSrc, name, type, links, completedDate }) => {
  function generateLinksList(projectLinks) {
    return projectLinks.map((item, index) => (
      <li key={index}>
        <a className="link--regular-font link--bottom" href={item.link}>
          {item.linkText}
        </a>
      </li>
    ))
  }

  const projectOverviewDescription = (
    <div className="project-overview__description">
      <div className="project-overview__name">{name}</div>

      <div className="project-overview__sub-description">
        {type}

        <ul className="project-overview__links-list">
          {generateLinksList(links)}
        </ul>
      </div>

      <div className="project-overview__completed-date">{completedDate}</div>
    </div>
  )

  function projectOverviewImage() {
    return (
      <div className="project-overview__image-wrapper">
        <img className="project-overview__image" src={imageSrc} alt="dd" />
      </div>
    )
  }

  return (
    <div className="project-overview">
      {projectOverviewImage()}

      {projectOverviewDescription}
    </div>
  )
}

export default ProjectOverview
