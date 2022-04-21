import * as React from 'react'

import { StaticImage } from 'gatsby-plugin-image'

export const PROJECTS = [
  {
    name: 'Personal Website (This Site)',
    imageName: 'jamesWattWebsite',
    imageSrc: (
      <StaticImage
        height={210}
        imgStyle={{ objectFit: 'scale-down' }}
        className="project-overview__image"
        src="./assets/project-images/jameswatt-personal-website.webp"
        alt="Photo of James Watt"
      />
    ),
    description: (
      <div>
        <p>
          I created my own personal online resume website which you are
          currently viewing.
        </p>
        <p>
          The website was designed in <b>figma</b> and developed using{' '}
          <b>Gatsby</b>, a static site generator using a <b>react</b>-based
          framework. During construction I developed my knowledge of:
        </p>
        <ul>
          <li>HTML, CSS and HTML</li>
          <li>SEO</li>
          <li>Static site generation</li>
          <li>Figma Design</li>
        </ul>
      </div>
    ),
    completedDate: 'Completed - 2022',
    type: 'Personal Project',
    links: [
      {
        linkText: 'jameswatt.io',
        link: 'https://www.jameswatt.io',
      },
    ],
  },
  {
    name: 'Simple Online Text Edit',
    imageName: 'simpleOnlineTextEdit',
    imageSrc: (
      <StaticImage
        height={210}
        className="project-overview__image"
        imgStyle={{ objectFit: 'scale-down' }}
        src="./assets/project-images/free-online-text-edit.webp"
        alt="Windows 95 notepad logo"
      />
    ),
    description: (
      <div>
        <p>
          I created a simple free online text edit application using raw HTML,
          CSS and Javascript to aid myself during development.
        </p>
        <p>
          The orignal purpose of the application was to serve as a easy place to
          remove formatting from copy pasted text.
        </p>
      </div>
    ),
    completedDate: 'Completed - 2021',
    type: 'Personal Project',
    links: [
      {
        linkText: 'freeonlinetextedit.com',
        link: 'https://www.freeonlinetextedit.com',
      },
    ],
  },
  {
    name: 'Crypto Zombies Course',
    imageName: 'cryptoZombies',
    imageSrc: (
      <StaticImage
        height={210}
        imgStyle={{ objectFit: 'scale-down' }}
        className="project-overview__image"
        src="./assets/project-images/crypto-zombies-eth.webp"
        alt="Windows 95 notepad logo"
      />
    ),
    imageAlt: 'Crypto Zombies Logo',
    description: (
      <div>
        <p>
          Crypto zombies is a solidity programming course (the smart contracts
          language notably used by <b>etherium</b>)
        </p>
        <p>
          I completed the beginner, intermediate and advanced solidity
          programming tutorials which introduced concepts such as <b>oracles</b>{' '}
          and <b>smart contract design</b>.
        </p>
      </div>
    ),

    completedDate: 'Completed - 2021',
    type: 'Online Course',
    links: [
      { linkText: 'Course home page', link: 'https://cryptozombies.io/' },
    ],
  },
  {
    name: 'Bitcoin Blockchain in Go',
    imageName: 'goBlockchain',
    imageSrc: (
      <StaticImage
        height={210}
        imgStyle={{ objectFit: 'scale-down' }}
        className="project-overview__image"
        src="./assets/project-images/golang-blockchain.webp"
        alt="Go Logo"
      />
    ),
    imageAlt: 'Go Logo',
    description: (
      <div>
        <p>
          I completed a 10 part youtube tutorial which involved using the using
          the <b>functional programming language Go</b> to re creating key
          aspects of the bitcoin blockchain such as:
        </p>
        <ul>
          <li>transactions</li>
          <li>encryption</li>
          <li>wallets</li>
          <li>mining</li>
        </ul>
      </div>
    ),
    completedDate: 'Completed - 2021',
    type: 'Youtube Tutorial Series',
    links: [
      {
        linkText: 'Tutorial page',
        link: 'https://www.youtube.com/watch?v=mYlHT9bB6OE',
      },
    ],
  },
]
