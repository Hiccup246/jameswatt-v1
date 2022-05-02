import * as React from 'react'

import RssIcon from '../../assets/svg/rss.svg'
import './rss-button.css'

const RssButton = () => (
  <a
    target="_blank"
    href="/blog/rss.xml"
    className="rss-icon-wrapper"
    rel="noopener noreferrer"
    aria-labelledby="rss-title"
  >
    <RssIcon />
  </a>
)

export default RssButton
