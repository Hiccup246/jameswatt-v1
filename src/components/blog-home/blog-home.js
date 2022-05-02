import * as React from 'react'

import { Link } from 'gatsby'

import './blog-home.css'

const BlogHome = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <p className="no-posts">
        Subscribe to the RSS feed to get notified of new posts!
      </p>
    )
  } else {
    return (
      <ol className="post-list">
        {posts.map((post) => {
          const postLink = post.fields.slug
          const title = post.frontmatter.title || postLink
          const date = post.frontmatter.date

          return (
            <li key={postLink} className="post-list__item">
              <article itemType="http://schema.org/Article">
                <header className="post-list__header">
                  <h1>
                    <Link className="link--regular-font" to={postLink}>
                      {title}
                    </Link>
                  </h1>
                  <small>{date}</small>
                </header>
              </article>
            </li>
          )
        })}
      </ol>
    )
  }
}

export default BlogHome
