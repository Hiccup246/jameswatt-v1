import * as React from 'react'

import { StaticImage } from 'gatsby-plugin-image'

import './projects.css'
import { PROJECTS } from '../../constants'
import ProjectCard from '../project-card/project-card'

const Projects = () => {
  const goBlockchainImg = (
    <StaticImage
      className="projects__card-picture"
      src="../../assets/project-images/go-blockchain.png"
      alt="Tensor Go Blockchain Tutorial Logo"
    />
  )

  const cryptoZombiesImg = (
    <StaticImage
      className="projects__card-picture"
      src="../../assets/project-images/crypto-zombies.png"
      alt="Crypto Zombies Logo"
    />
  )

  const freeOnlineTextEditImg = (
    <StaticImage
      className="projects__card-picture"
      src="../../assets/project-images/free-online-text-edit.png"
      alt="Free Online Text Edit Logo"
    />
  )

  const jamesWattWebsiteImg = (
    <StaticImage
      className="projects__card-picture"
      src="../../assets/project-images/jameswatt-personal-website.png"
      alt="James Watt Personal Website Logo"
    />
  )

  function cardImage(imageName) {
    return {
      cryptoZombies: cryptoZombiesImg,
      goBlockchain: goBlockchainImg,
      simpleOnlineTextEdit: freeOnlineTextEditImg,
      jamesWattWebsite: jamesWattWebsiteImg,
    }[imageName]
  }

  const projectCards = PROJECTS.map((project) => {
    return (
      <ProjectCard
        name={project.name}
        imageSrc={cardImage(project.imageName)}
        description={project.description}
        completedDate={project.completedDate}
        type={project.type}
        links={project.links}
      />
    )
  })

  return (
    <div className="projects">
      <h4>🚧Projects</h4>

      <div className="projects__slider">{projectCards}</div>
    </div>
  )
}

export default Projects
