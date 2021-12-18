import * as React from 'react'

import { StaticImage } from 'gatsby-plugin-image'

import './projects.css'
import ProjectCard from '../project-card/project-card'

const Projects = () => {
  const goImg = (
    <StaticImage
      className="projects__card-picture"
      src="../../assets/project-images/go-blockchain.png"
      alt="Tensor Go Blockchain Tutorial Logo"
    />
  )

  const zombieImg = (
    <StaticImage
      className="projects__card-picture"
      src="../../assets/project-images/crypto-zombies.png"
      alt="Crypto Zombies Logo"
    />
  )

  return (
    <div className="projects">
      <h4>🚧Projects</h4>

      <div className="projects__slider">
        <ProjectCard
          name="Crypto Zombies Course"
          imageSrc={zombieImg}
          description="Crypto zombies is a solidity programming course (the smart contracts language notably used by etherium). I completed the beginner, intermediate and advanced solidity programming tutorials which introduced concepts such as oracles and smart contract design."
          completedDate="09/92/1020"
          type="Online Course"
          links={[
            { linkText: 'Course home page', link: 'https://cryptozombies.io/' },
          ]}
        />
        <ProjectCard
          name="Bitcoin Blockchain in Go"
          imageSrc={goImg}
          description="I completed a 10 part youtube tutorial which involved re creating key aspects of the bitcoin blockchain such as transactions, encryption, wallets and mining using the functional programming language Go."
          completedDate="22/03/2022"
          type="Youtube Tutorial Series"
          links={[
            {
              linkText: 'Tutorial page',
              link: 'https://www.youtube.com/watch?v=mYlHT9bB6OE',
            },
          ]}
        />
      </div>
    </div>
  )
}

export default Projects
