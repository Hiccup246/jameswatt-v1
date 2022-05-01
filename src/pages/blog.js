import * as React from 'react'

import { graphql } from 'gatsby'

import BaseLayout from '../components/base-layout/base-layout'
import '../styles/global.css'
import BlogHome from '../components/blog-home/blog-home'
import Seo from '../components/seo/seo'
import { ThemeProvider } from '../components/theme-context/theme-context'

const Blog = ({ data, location }) => (
  <ThemeProvider>
    <BaseLayout id="blog">
      <Seo title="James Watt Blog" />
      <BlogHome data={data} location={location} />
    </BaseLayout>
  </ThemeProvider>
)

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
