import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import favIcon32 from "../../assets/favicons/favicon-32x32.png"
import favIcon16 from "../../assets/favicons/favicon-16x16.png"
import favIconApple from "../../assets/favicons/apple-touch-icon.png"

// Taken from https://www.gatsbyjs.com/tutorial/seo-and-social-sharing-cards-tutorial
function SEO({ description, lang, meta, image: metaImage, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
            siteUrl
            headline
            siteLanguage
          }
        }
      }
    `
  )

  const keywords = site.siteMetadata.keywords
  const siteUrl = site.siteMetadata.siteUrl
  const headline = site.siteMetadata.headline
  const siteLanguage = lang
  const author = site.siteMetadata.author
  const metaDescription = description || site.siteMetadata.description
  const metaTitle = title || site.siteMetadata.title
  const image =
    metaImage && metaImage.src
      ? `${site.siteMetadata.siteUrl}${metaImage.src}`
      : null
  // const canonical = pathname ? `${site.siteMetadata.siteUrl}${pathname}` : null

  // schema.org in JSONLD format
  // https://developers.google.com/search/docs/guides/intro-structured-data
  const schemaOrgWebPage = {
    '@context': 'http://schema.org',
    '@type': 'WebPage',
    url: siteUrl,
    headline,
    inLanguage: siteLanguage,
    mainEntityOfPage: siteUrl,
    description: metaDescription,
    name: metaTitle,
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
    }
  }

  if (metaImage) {
    schemaOrgWebPage[0]["image"] = {
      '@type': 'ImageObject',
      url: image,
    }
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      // <link rel="manifest" href="/site.webmanifest"> manifest with icons
      link={[
        {
          rel: "icon",
          href: favIcon16,
          type: "image/png",
          sizes: "16x16"
        },
        {
          rel: "icon",
          href: favIcon32,
          type: "image/png",
          sizes: "32x32"
        },
        {
          rel: "apple-touch-icon",
          href: favIconApple,
          sizes: "180x180"
        },
        {
          rel: "author"
        }
      ]}
      title={metaTitle}
      // titleTemplate={`%s | ${site.siteMetadata.title}`}
      // script={[
      //   {
      //     type: "application/ld+json",
      //     content: JSON.stringify(schemaOrgWebPage)
      //   }
      // ]}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: "keywords",
          content: keywords.join(","),
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
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
          content: metaTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(
          metaImage
            ? [
                {
                  property: "og:image",
                  content: image,
                },
                {
                  property: "og:image:width",
                  content: metaImage.width,
                },
                {
                  property: "og:image:height",
                  content: metaImage.height,
                },
                {
                  name: "twitter:card",
                  content: "summary_large_image",
                },
              ]
            : [
                {
                  name: "twitter:card",
                  content: "summary",
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
  lang: `en`,
  meta: [],
  description: ``,
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