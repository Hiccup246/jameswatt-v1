import * as React from 'react'

import { StaticImage } from 'gatsby-plugin-image'

export const THEME_COLORS = {
  '--primary-color': {
    light: '#fdf5e6',
    dark: '#291500',
  },
  '--secondary-color': {
    light: '#fae6c2',
    dark: '#5c2f00',
  },
  '--header-font-color': {
    light: '#000000',
    dark: '#c87941',
  },
  '--body-font-color': {
    light: '#000000',
    dark: '#deba9d',
  },
  '--grey-font-color': {
    light: '#808080',
    dark: '#9b826d',
  },
}
export const SITE_THEME_KEY = 'site-theme'
export const INITIAL_SITE_THEME_CSS_VAR = '--initial-site-theme'
export const TOOLS = [
  {
    name: 'Ruby On Rails',
    percentage: '90',
    category: 'comfortable',
  },
  {
    name: 'Vue.JS',
    percentage: '70',
    category: 'comfortable',
  },
  {
    name: 'Angular.JS',
    percentage: '75',
    category: 'comfortable',
  },
  {
    name: 'Bulma',
    percentage: '55',
    category: 'comfortable',
  },
  {
    name: 'Agile',
    percentage: '70',
    category: 'comfortable',
  },
  {
    name: 'Gatsby',
    percentage: '20',
    category: 'played',
  },
  {
    name: 'React.JS',
    percentage: '30',
    category: 'comfortable',
  },
  {
    name: 'Koa.JS',
    percentage: '5',
    category: 'played',
  },
  {
    name: 'React Native',
    percentage: '5',
    category: 'played',
  },
  {
    name: 'Svelte',
    percentage: '5',
    category: 'played',
  },
  {
    name: 'Figma',
    percentage: '10',
    category: 'comfortable',
  },
]
export const LANGUAGES = [
  {
    name: 'Ruby',
    percentage: '90',
    category: 'comfortable',
  },
  {
    name: 'Javascript + Typescript',
    percentage: '80',
    category: 'comfortable',
  },
  {
    name: 'CSS',
    percentage: '70',
    category: 'comfortable',
  },
  {
    name: 'HTML',
    percentage: '75',
    category: 'comfortable',
  },
  {
    name: 'Go',
    percentage: '10',
    category: 'played',
  },
  {
    name: 'Solidity',
    percentage: '20',
    category: 'played',
  },
  {
    name: 'Python',
    percentage: '20',
    category: 'played',
  },
  {
    name: 'Bash',
    percentage: '40',
    category: 'played',
  },
  {
    name: 'SQL',
    percentage: '20',
    category: 'comfortable',
  },
]
export const PROGRAMMING_EXPERIENCES = [
  {
    role: 'Full Stack Developer',
    company: 'AplyiD',
    dateRange: '2020/01 - Present',
    description:
      'APLYiD is a trusted & accredited digital ID solution (AML + KYC) designed to streamline your customer onboarding with a first-class user experience',
    bullets: [
      'Currently working as a full stack developer utilising Vue.JS, Angular.JS and Ruby on Rails to create AML and financial products from inception and design to deployment and maintenance',
      'Joined the company as the second developer and 13th employee. Helped grow the product, team and organisation using agile practices into a strong team of 7 and an organisation of over 50 people',
      'Worked closley with the founders of the company, key sales staff, designers and customer support to design products from the ground up',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'Hypebeat',
    dateRange: '2019/04 - 2019/09',
    description:
      'A social music application to aid artists in optimising their reach and influence using artifical intelligence',
    bullets: [
      'Worked closley with the founders of the company in an agile team to develop and expand the back-end of the main product using Koa.JS (JavaScript + TypeScript)',
      'Participated in key strategic meetings regarding business strategy and product design',
    ],
  },
  {
    role: 'Intern Software Developer',
    company: 'Halter',
    dateRange: '2018/11 - 2019/02',
    description:
      'Halter is a solar-powered GPS enabled smart collar, which guides cows around a farm using sound and vibrations, allowing farmers to automate herd movements and create virtual fences',
    bullets: [
      'Worked in two high performing agile teams which developed the minimal viable product of the company under tight product deadlines',
      'Developed and expanded the back-end and cloud infrastructure of the main product using Nest.JS (JavaScript + TypeScript), AWS, Swagger, OpenAPI and Docker',
      'Developed the front-end of the company by creating various internal support tools using the React.JS framework ',
    ],
  },
  {
    role: 'Intern Front End Developer',
    company: 'BNZ',
    dateRange: '2017/11 - 2018/02',
    description: "Bank of New Zealand is one of New Zealand's big four banks",
    bullets: [
      'Developed front-end software using the React.JS framework alongside technologies such as JavaScript, HTML, CSS, JSS and Node.JS to create various visual frontend components',
      'Worked closely with experienced product designers and owners in a small agile team requiring tight communication',
      'Partially worked in an agile team to test the banks internal help and support system via automated unit tests and test plans using XMind and Postman',
    ],
  },
  {
    role: 'Student & Tutor',
    company: 'VUW',
    dateRange: '2016 - 2020',
    description:
      'Victoria University of Wellington is a university in Wellington, New Zealand. The university has a strong software engineering school and an impressive reputation regarding artifical intelligence research',
    bullets: [
      'Graduated with a Bachelor of Engineering in Software Engineering with first class honours',
      'Key study interests included artificial intelligence, software ethics and organisational culture',
      'Completed a year long thesis which involved developing a series of IoT connected radios for the purpose of tracking birds within dense native bush',
      'Worked as a computer science tutor helping students to understand algorithms and data structures',
    ],
  },
]
export const BOOKS = [
  {
    name: 'A Promised Land',
    author: 'Barack Obama',
    genre: 'Politics',
    status: 'Reading',
    dateCompleted: '',
  },
  {
    name: 'The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life',
    author: 'Mark Manson',
    genre: 'Self Help',
    status: 'Read',
    dateCompleted: '',
  },
  {
    name: 'Peril',
    author: 'Bob Woodward, Robert Costa',
    genre: 'Politics',
    status: 'Read',
    dateCompleted: '2022',
  },
  {
    name: '21 Lessons for the 21st Century',
    author: 'Yuval Noah Harari',
    genre: 'Sociology',
    status: 'Read',
    dateCompleted: '2022',
  },
  {
    name: 'The Anthropocene Reviewed',
    author: 'John Green',
    genre: 'Short Stories',
    status: 'Read',
    dateCompleted: '2022',
  },
  {
    name: 'Clean Code',
    author: 'Robert C. Martin',
    genre: 'Programming',
    status: 'Read',
    dateCompleted: '2021',
  },
  {
    name: 'Rage',
    author: 'Bob Woodward',
    genre: 'Politics',
    status: 'Read',
    dateCompleted: '2021',
  },
  {
    name: 'On Having No Head',
    author: 'Douglas E. Harding',
    genre: 'Spirituality',
    status: 'Read',
    dateCompleted: '2021',
  },
  {
    name: 'The Lord of the Rings The Return of the King',
    author: 'J.R.R. Tolkien',
    genre: 'Fantasy',
    status: 'Read',
    dateCompleted: '2021',
  },
  {
    name: 'The Lord of the Rings The Two Towers',
    author: 'J.R.R. Tolkien',
    genre: 'Fantasy',
    status: 'Read',
    dateCompleted: '2021',
  },
  {
    name: 'Lord of the Rings the Fellowship of the Ring',
    author: 'J.R.R. Tolkien',
    genre: 'Fantasy',
    status: 'Read',
    dateCompleted: '2021',
  },
  {
    name: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    genre: 'Fantasy',
    status: 'Read',
    dateCompleted: '2021',
  },
  {
    name: '12 Rules for Life: An Antidote to Chaos',
    author: 'Jordan B. Peterson',
    genre: 'Self Help',
    status: 'Read',
    dateCompleted: '2021',
  },
  {
    name: 'Sapiens: A Brief History of Humankind',
    author: 'Yuval Noah Harari',
    genre: 'History',
    status: 'Read',
    dateCompleted: '2021',
  },
  {
    name: 'Propaganda',
    author: 'Edward L. Bernays',
    genre: 'Psychology',
    status: 'Read',
    dateCompleted: '2021',
  },
  {
    name: 'Fear: Trump in the White House',
    author: 'Bob Woodward',
    genre: 'Politics',
    status: 'Read',
    dateCompleted: '2021',
  },
  {
    name: 'Animal Farm',
    author: 'George Orwell',
    genre: 'Politics',
    status: 'Read',
    dateCompleted: '2021',
  },
  {
    name: '1984',
    author: 'George Orwell',
    genre: 'Politics',
    status: 'Read',
    dateCompleted: '2021',
  },
  {
    name: 'Manufacturing Consent',
    author: 'Edward S. Herman, Noam Chomsky',
    genre: 'Politics',
    status: 'Read',
    dateCompleted: '2021',
  },
  {
    name: 'The Power of Now',
    author: 'Eckhart Tolle',
    genre: 'Spirituality',
    status: 'Read',
    dateCompleted: '2021',
  },
]
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
