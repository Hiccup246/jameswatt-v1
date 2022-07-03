import * as React from 'react'

import './project-overview.css'

const ProjectOverview = ({ imageSrc, name, type, links, completedDate }) => {
  return (
    <div className="project-overview">
      <div className="project-overview__image-wrapper">{imageSrc}</div>

      <div className="project-overview__description">
        <div className="project-overview__name">{name}</div>

        <div className="project-overview__sub-description">
          {type}

          <ul className="project-overview__links-list">
            {links.map((item, index) => (
              <li key={index}>
                <a className="link--regular-font link--bottom" href={item.link}>
                  {item.linkText}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="project-overview__completed-date">{completedDate}</div>
      </div>
    </div>
  )
}

export default ProjectOverview
