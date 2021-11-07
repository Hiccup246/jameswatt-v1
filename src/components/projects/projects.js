import * as React from 'react'

import cryptozombies from '../../assets/project-images/crypto-zombies.png'
import goblockchain from '../../assets/project-images/go-blockchain.png'
import './projects.css'
import ProjectCard from '../project-card/project-card'

const Projects = () => (
  <div class="projects">
    <h4>Projects</h4>

    <div class="projects__slider">
      <ProjectCard
        imageSrc={cryptozombies}
        description="I like to eat cheese"
        link="https://cryptozombies.io/"
        linkText="Crypto Zombies"
      />
      <ProjectCard
        imageSrc={goblockchain}
        description="I like to eat cheese, as well as, meat"
        link="https://www.youtube.com/watch?v=mYlHT9bB6OE"
        linkText="Go Blockchain"
      />

      <ProjectCard
        imageSrc={goblockchain}
        description="I like to eat cheese, as well as, meat"
        link="https://www.youtube.com/watch?v=mYlHT9bB6OE"
        linkText="Go Blockchain"
      />

      <ProjectCard
        imageSrc={goblockchain}
        description="I like to eat cheese, as well as, meat"
        link="https://www.youtube.com/watch?v=mYlHT9bB6OE"
        linkText="Go Blockchain"
      />

      <ProjectCard
        imageSrc={goblockchain}
        description="I like to eat cheese, as well as, meat"
        link="https://www.youtube.com/watch?v=mYlHT9bB6OE"
        linkText="Go Blockchain"
      />

      <ProjectCard
        imageSrc={goblockchain}
        description="I like to eat cheese, as well as, meat"
        link="https://www.youtube.com/watch?v=mYlHT9bB6OE"
        linkText="Go Blockchain"
      />

      <ProjectCard
        imageSrc={goblockchain}
        description="I like to eat cheese, as well as, meat"
        link="https://www.youtube.com/watch?v=mYlHT9bB6OE"
        linkText="Go Blockchain"
      />
    </div>
  </div>
)

export default Projects
