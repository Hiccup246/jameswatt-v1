import * as React from 'react'

import './projects.css'
import { PROJECTS } from '../../constants/projects'
import ProjectCard from '../project-card/project-card'

const Projects = () => {
  const projectCards = PROJECTS.map((project, index) => {
    return <ProjectCard data={project} key={index} />
  })

  return (
    <div className="projects">
      <h2>🚧 Projects</h2>

      <div className="projects__slider">{projectCards}</div>
    </div>
  )
}

export default Projects
