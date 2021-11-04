import * as React from 'react'

import './projects.css'

const Icon = () => {
  function rotateIcon(e) {
    e.preventDefault()
    e.currentTarget.classList.toggle('icon-checked')
    document
      .getElementsByClassName('card-description')[0]
      .classList.toggle('card-description-checked')
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

    <div class="projects__collection">
      <div class="projects__card">
        <Icon />
      </div>

      <div class="projects__card">
        <h5>Crypto Zombies</h5>
      </div>

      <div class="projects__card">
        <div class="card-description"></div>
        <div class="card-image">
          <img
            class="card-picture"
            src="https://via.placeholder.com/140"
            alt="Author Picture"
            width="160"
            height="140"
          />
        </div>
        <div class="card-footer">
          <div class="card-link">
            <a>Go Blockchain</a>
          </div>
          <Icon />
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
