import * as React from 'react'

import ContentToggle from '../content-toggle/content-toggle'
import { ThemeContext } from '../theme-context/theme-context'
import ProjectDescription from './project-description/project-description'
import ProjectOverview from './project-overview/project-overview'

import './project-card.css'

const ProjectCard = ({ data }) => {
  const { imageSrc, description, name, completedDate, type, links } = data

  function rotateIcon(e) {
    e.preventDefault()

    const card = e.currentTarget.closest('.projects__card')

    card.getElementsByClassName('icon')[0].classList.toggle('icon--checked')
    card
      .getElementsByClassName('projects__description-wrapper')[0]
      .classList.toggle('projects__description-wrapper--checked')
    card
      .getElementsByClassName('projects__overview-wrapper')[0]
      .classList.toggle('projects__overview-wrapper--checked')
  }

  const { siteTheme } = React.useContext(ThemeContext)

  return (
    <div className="projects__card">
      <div className="projects__content-wrapper">
        <div className="projects__overview-wrapper">
          <ProjectOverview
            className="projects__card-body"
            imageSrc={imageSrc}
            name={name}
            type={type}
            links={links}
            completedDate={completedDate}
          />
        </div>

        <div
          className={
            'projects__icon-wrapper ' +
            (siteTheme === 'dark' ? 'projects__icon-wrapper--dark' : '')
          }
        >
          <ContentToggle onClickCallback={rotateIcon} />
        </div>

        <div className="projects__description-wrapper">
          <ProjectDescription
            className="projects__body-overlay"
            description={description}
          />
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
