import * as React from 'react'

import linkIcon from '../../assets/link-solid.svg'
import ContentToggle from '../content-toggle/content-toggle'

import './project-card.css'

const ProjectCard = ({ imageSrc, description, link, linkText }) => {
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

  return (
    <div class="projects__card">
      <div class="projects__card-body">
        <img
          class="projects__card-picture"
          src={imageSrc}
          alt="Cryto Zombies Logo"
        />

        <div class="projects__card-footer">
          <div class="projects__card-link">
            {/* <a href={link}>{linkText}</a>
            <img src={linkIcon} alt="Link Icon" /> */}
          </div>
        </div>
      </div>

      <div class="projects__body-overlay">
        <div class="projects__icon-wrapper">
          <ContentToggle onClickCallback={rotateIcon} />
        </div>

        <div class="projects__card-description">{description}</div>
      </div>
    </div>
  )
}

export default ProjectCard
