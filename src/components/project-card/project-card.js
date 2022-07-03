import * as React from 'react'

import ContentToggle from '../content-toggle/content-toggle'
import { ThemeContext } from '../theme-context/theme-context'
import ProjectDescription from './project-description/project-description'
import ProjectOverview from './project-overview/project-overview'

import './project-card.css'

const ProjectCard = ({ data }) => {
  const { imageSrc, description, name, completedDate, type, links } = data
  const [showDescription, setShowDescription] = React.useState(false)

  const toggleCardContent = () => {
    setShowDescription(!showDescription)
  }

  const { siteTheme } = React.useContext(ThemeContext)

  return (
    <div className="projects__card">
      <div className="projects__content-wrapper">
        <div
          className={
            showDescription
              ? 'projects__overview-wrapper projects__overview-wrapper--checked'
              : 'projects__overview-wrapper'
          }
        >
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

        <div
          className={
            showDescription
              ? 'projects__description-wrapper projects__description-wrapper--checked'
              : 'projects__description-wrapper'
          }
        >
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
