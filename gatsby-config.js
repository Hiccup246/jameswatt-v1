module.exports = {
  siteMetadata: {
    title: `James Watt`,
    titleAlt: '',
    description: `The personal portfolio for new zealand based software engineer and developer James Watt.`,
    author: `James Watt`,
    siteUrl: 'https://jameswatt.io',
    siteLanguage: 'en',
    headline: 'The personal portfolio for James Watt',
    shortName: 'James Watt',
    twitter: '@itsjameswatt',
    keywords: [
      'James Watt',
      'James Watt',
      'James Watt Software Engineer',
      'James Watt Portfolio',
      'James Watt Software Developer',
    ],
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /src\/assets\/svg\/*/, // See below to configure properly
        },
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: '/',
        query: `
                {
                    site {
                        siteMetadata {
                            siteUrl
                        }
                    }
                    allSitePage {
                        nodes {
                            path
                        }
                    }
                }
                `,
        resolvePages: ({ allSitePage: { nodes: allPages } }) => {
          return allPages.map((page) => {
            return { ...page }
          })
        },
        serialize: ({ path }) => {
          return {
            url: path,
            changefreq: `monthly`,
            priority: 1,
            lastmod: '2021-11-14',
          }
        },
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        sitemap: '/sitemap-index.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          'G-SZ6258S46F', // Google Analytics / GA
          // 'AW-CONVERSION_ID', // Google Ads / Adwords / AW
          // 'DC-FLOODIGHT_ID', // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          //optimize_id: 'OPT_CONTAINER_ID',
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: [],
        },
      },
    },
  ],
}
