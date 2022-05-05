import * as React from 'react'

import '../styles/index.css'

import { graphql } from 'gatsby'

import About from '../components/about/about'
import Author from '../components/author/author'
import Bookshelf from '../components/bookshelf/bookshelf'
import CoreCompetencies from '../components/core-competencies/core-competencies'
import Credits from '../components/credits/credits'
import ProgrammingHistory from '../components/programming-history/programming-history'
import Projects from '../components/projects/projects'
import Seo from '../components/seo/seo'

const IndexPage = ({ data }) => (
  <div className="home-page">
    <Seo
      title={data.site.siteMetadata.title}
      keywords={data.site.siteMetadata.keywords}
      headline={data.site.siteMetadata.headline}
      description={data.site.siteMetadata.description}
    />
    <Author />
    <About />
    <ProgrammingHistory />
    <CoreCompetencies />
    <Projects />
    <Bookshelf />
    <Credits />
  </div>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author {
          name
          summary
        }
        keywords
        headline
        description
      }
    }
  }
`
