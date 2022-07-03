import * as React from 'react'

import ContentToggle from '../content-toggle/content-toggle'
import { ThemeContext } from '../theme-context/theme-context'
import ProjectDescription from './project-description/project-description'
import ProjectOverview from './project-overview/project-overview'

import './project-card.css'

const ProjectCard = ({ data }) => {
  const { imageSrc, description, name, completedDate, type, links } = data

  const toggleCardContent = (element) => {
    element.preventDefault()

    const card = element.currentTarget.closest('.projects__card')

    card
      .querySelector('.projects__description-wrapper')
      .classList.toggle('projects__description-wrapper--checked')
    card
      .querySelector('.projects__overview-wrapper')
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
          <ContentToggle onClickCallback={toggleCardContent} />
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
