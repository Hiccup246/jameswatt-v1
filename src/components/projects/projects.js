import * as React from 'react'

import './projects.css'
import { PROJECTS } from '../../constants/projects'
import ProjectCard from '../project-card/project-card'

const Projects = () => {
  return (
    <div className="projects">
      <h2>🚧 Projects</h2>

      <div className="projects__slider">
        {PROJECTS.map((project, index) => {
          return <ProjectCard data={project} key={index} />
        })}
      </div>
    </div>
  )
}

export default Projects
