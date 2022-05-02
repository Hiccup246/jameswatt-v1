import * as React from 'react'

import { graphql } from 'gatsby'

import BlogHome from '../components/blog-home/blog-home'
import Seo from '../components/seo/seo'

const Blog = ({ data }) => (
  <div className="blog-home">
    <Seo title="James Watt Blog" />
    <BlogHome data={data} />
  </div>
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
        }
      }
    }
  }
`
