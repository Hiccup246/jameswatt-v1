import * as React from 'react'

import RssIcon from '../../assets/svg/rss.svg'
import './rss-button.css'

const RssButton = () => (
  <a
    target="_blank"
    rel="noopener noreferrer"
    href="/blog/rss.xml"
    className="rss-icon-wrapper"
    aria-labelledby="rss-feed"
  >
    <RssIcon />
  </a>
)

export default RssButton
