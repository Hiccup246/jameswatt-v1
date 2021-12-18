import * as React from 'react'

import Link from '../../assets/svg/link-solid.svg'
import ContentToggle from '../content-toggle/content-toggle'
import { ThemeContext } from '../theme-context/theme-context'

import './project-card.css'

const ProjectCard = ({
  imageSrc,
  description,
  name,
  completedDate,
  type,
  links,
}) => {
  function rotateIcon(e) {
    e.preventDefault()

    const card = e.currentTarget.closest('.projects__card')

    card.getElementsByClassName('icon')[0].classList.toggle('icon--checked')
    card
      .getElementsByClassName('projects__card-description')[0]
      .classList.toggle('projects__card-description--checked')
    card
      .getElementsByClassName('projects__card-body')[0]
      .classList.toggle('projects__card-body--checked')
  }

  const { siteTheme } = React.useContext(ThemeContext)

  return (
    <div className="projects__card">
      <div className="projects__card-body">
        {imageSrc}
        <div className="projects__content-container">
          <div>
            <div className="projects__name">{name}</div>
            <div className="projects__sub-content">
              {type}
              <ul className="projects__links-list">
                {links.map((item) => (
                  <li>
                    <a href={item.link}>{item.linkText}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="projects__completed-date">{completedDate}</div>
        </div>
        {/* <div className="projects__card-link">
          {name}
          <a href={link}>
            {linkText}
            <Link className="projects__link fa-link" />
          </a>
        </div> */}
      </div>

      <div className="projects__body-overlay">
        <div
          className={
            'projects__icon-wrapper ' +
            (siteTheme === 'dark' ? 'projects__icon-wrapper--dark' : '')
          }
        >
          <ContentToggle onClickCallback={rotateIcon} />
        </div>

        <div className="projects__card-description">{description}</div>
      </div>
    </div>
  )
}

export default ProjectCard
