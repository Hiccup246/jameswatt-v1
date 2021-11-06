import * as React from 'react'

import link from '../../assets/link-solid.svg'
import cryptozombies from '../../assets/project-images/crypto-zombies.png'
import goblockchain from '../../assets/project-images/go-blockchain.png'
import './projects.css'

const Icon = () => {
  function rotateIcon(e) {
    e.preventDefault()
    e.currentTarget.classList.toggle('icon--checked')
    document
      .getElementsByClassName('projects__card-description')[0]
      .classList.toggle('projects__card-description--checked')

    document
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
const Projects = () => (
  <div class="projects">
    <h4>Projects</h4>

    <div class="projects__slider">
      <div class="projects__card">
        <div class="projects__card-body">
          <img
            class="projects__card-picture"
            src={cryptozombies}
            alt="Author Picture"
          />

          <div class="projects__card-footer">
            <div class="projects__card-link">
              {/* target="_blank" href="https://www.google.com" rel="noreferrer" */}
              <a>Go Blockchain</a>
              <img src={link} alt="Currently reading" />
            </div>
            {/* <Icon /> */}
          </div>
        </div>
        <div class="projects__body-overlay">
          <div class="icon-wrapper">
            <Icon />
          </div>

          <div class="projects__card-description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
        </div>
      </div>

      <div class="projects__card"></div>
      <div class="projects__card"></div>
      <div class="projects__card"></div>
      <div class="projects__card"></div>
    </div>
  </div>
)

export default Projects
