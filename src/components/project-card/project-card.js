import * as React from 'react'

import linkIcon from '../../assets/link-solid.svg'

import './project-card.css'

const Icon = () => {
  function rotateIcon(e) {
    e.preventDefault()

    const currentTarget = e.currentTarget

    const card = currentTarget.closest('.projects__card')

    card.getElementsByClassName('icon')[0].classList.toggle('icon--checked')

    card
      .getElementsByClassName('projects__card-description')[0]
      .classList.toggle('projects__card-description--checked')
    card
      .getElementsByClassName('projects__card-body')[0]
      .classList.toggle('projects__card-body--checked')
  }

  return (
    <div class="icon" onClick={rotateIcon}>
      <svg
        class="tile-icon-alt"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M17.25,8.51H11.5V2.75A1.5,1.5,0,0,0,10,1.25h0a1.5,1.5,0,0,0-1.5,1.5V8.5H2.75a1.5,1.5,0,0,0,0,3H8.5v5.75a1.5,1.5,0,0,0,1.5,1.5h0a1.5,1.5,0,0,0,1.5-1.5V11.5h5.75a1.5,1.5,0,0,0,0-3Z"></path>
      </svg>
    </div>
  )
}

const ProjectCard = ({ imageSrc, description, link, linkText, key }) => (
  <div class="projects__card">
    <div class="projects__card-body">
      <img
        class="projects__card-picture"
        src={imageSrc}
        alt="Cryto Zombies Logo"
      />

      <div class="projects__card-footer">
        <div class="projects__card-link">
          <a href={link}>{linkText}</a>
          <img src={linkIcon} alt="Link Icon" />
        </div>
      </div>
    </div>

    <div class="projects__body-overlay">
      <div class="projects__icon-wrapper">
        <Icon />
      </div>

      <div class="projects__card-description">{description}</div>
    </div>
  </div>
)

export default ProjectCard
