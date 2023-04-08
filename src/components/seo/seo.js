import React from 'react'

import { useStaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

// Taken from https://www.gatsbyjs.com/tutorial/seo-and-social-sharing-cards-tutorial
function SEO({
  description,
  lang,
  meta,
  image: metaImage,
  title,
  keywords,
  headline,
}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author {
              name
              summary
            }
            siteUrl
          }
        }
      }
    `
  )

  const siteUrl = site.siteMetadata.siteUrl
  const author = site.siteMetadata.author.name
  const image =
    metaImage && metaImage.src
      ? `${site.siteMetadata.siteUrl}${metaImage.src}`
      : null

  // schema.org in JSONLD format
  // https://developers.google.com/search/docs/guides/intro-structured-data
  const schemaOrgWebPage = {
    '@context': 'http://schema.org',
    '@type': 'WebPage',
    url: siteUrl,
    headline,
    inLanguage: lang,
    mainEntityOfPage: siteUrl,
    description: description,
    name: title,
    author: {
      '@type': 'Person',
      name: author,
    },
    creator: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Person',
      name: author,
    },
  }

  if (metaImage) {
    schemaOrgWebPage[0]['image'] = {
      '@type': 'ImageObject',
      url: image,
    }
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      link={[
        {
          rel: 'canonical',
          href: siteUrl,
        },
        {
          rel: 'icon',
          href: '/favicon-16x16.png',
          type: 'image/png',
          sizes: '16x16',
        },
        {
          rel: 'icon',
          href: '/favicon-32x32.png',
          type: 'image/png',
          sizes: '32x32',
        },
        {
          rel: 'apple-touch-icon',
          href: '/apple-touch-icon.png',
          type: 'image/png',
          sizes: '180x180',
        },
        {
          rel: 'icon',
          href: '/favicon-16x16.png',
          type: 'image/png',
          sizes: '16x16',
        },
        {
          rel: 'manifest',
          href: '/site.webmanifest',
        },
        {
          rel: 'author',
        },
      ]}
      title={title}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          name: 'keywords',
          content: keywords.join(','),
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:creator`,
          content: author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
        {
          name: "robots",
          content: "noindex",
        }
      ]
        .concat(
          metaImage
            ? [
                {
                  property: 'og:image',
                  content: image,
                },
                {
                  property: 'og:image:width',
                  content: metaImage.width,
                },
                {
                  property: 'og:image:height',
                  content: metaImage.height,
                },
                {
                  name: 'twitter:card',
                  content: 'summary_large_image',
                },
              ]
            : [
                {
                  name: 'twitter:card',
                  content: 'summary',
                },
              ]
        )
        .concat(meta)}
    >
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgWebPage)}
      </script>
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  description: '',
  twitter: '@jameswattnz',
  author: { name: 'James Watt', summary: '' },
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  }),
}

export default SEO
