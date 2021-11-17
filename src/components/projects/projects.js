import * as React from 'react'

import cryptozombies from '../../assets/project-images/crypto-zombies.png'
import goblockchain from '../../assets/project-images/go-blockchain.png'
import './projects.css'
import ProjectCard from '../project-card/project-card'

const Projects = () => (
  <div className="projects">
    <h4>🚧Projects</h4>

    <div className="projects__slider">
      <ProjectCard
        imageSrc={cryptozombies}
        description="Crypto zombies is a solidity programming course (the smart contracts language notably used by etherium). I completed the beginner, intermediate and advanced solidity programming tutorials which introduced concepts such as oracles and smart contract design."
        link="https://cryptozombies.io/"
        linkText="Crypto Zombies"
      />
      <ProjectCard
        imageSrc={goblockchain}
        description="I completed a 10 part youtube tutorial which involved re creating key aspects of the bitocin blockchain such as transactions, encryption, wallets and mining using the functional programming language Go."
        link="https://www.youtube.com/watch?v=mYlHT9bB6OE"
        linkText="Go Blockchain"
      />
    </div>
  </div>
)

export default Projects
