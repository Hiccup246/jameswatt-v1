import * as React from 'react'

import { StaticImage } from 'gatsby-plugin-image'

import './author.css'
import ResumeFile from '../../../static/jameswatt-resume.pdf'
import Email from '../../assets/svg/at-symbol-solid.svg'
import Envelope from '../../assets/svg/envelope-solid.svg'
import Github from '../../assets/svg/github-solid.svg'
import LinkedIn from '../../assets/svg/linkedin-solid.svg'

const Author = () => (
  <div className="author">
    <StaticImage
      width={140}
      height={140}
      className="author__picture"
      src="../../assets/authoredit.webp"
      alt="Author Picture"
    />
    <div className="author__description">
      <h1 className="author__name">James. Watt</h1>
      <div className="author__description-text">
        I like to question things, mainly software
      </div>
      <div>
        <a
          href="mailto:james@jameswatt.io"
          target="_blank"
          rel="noopener noreferrer"
          className="author__icon-wrapper"
          aria-label="Email Link"
        >
          <Email className="author__icon" />
        </a>

        <a
          href="https://www.linkedin.com/in/jameswattpro"
          target="_blank"
          className="author__icon-wrapper"
          rel="noreferrer"
          aria-label="Linked In Profile"
        >
          <LinkedIn className="author__icon" />
        </a>

        <a
          href="https://github.com/Hiccup246"
          target="_blank"
          className="author__icon-wrapper"
          rel="noreferrer"
          aria-label="Github Profile"
        >
          <Github className="author__icon" />
        </a>

        <a
          href={ResumeFile}
          target="_blank"
          className="author__icon-wrapper"
          rel="noreferrer"
          aria-label="Resume"
        >
          <Envelope className="author__icon" />
        </a>
      </div>
    </div>
  </div>
)

export default Author
