module.exports = {
    siteMetadata: {
        title: `James Watt`,
        titleAlt: "",
        description: `The personal portfolio for new zealand based software engineer and developer James Watt.`,
        author: `James Watt`,
        siteUrl: "https://jameswatt.io",
        siteLanguage: 'en',
        headline: 'The personal portfolio for James Watt',
        shortName: 'James Watt',
        twitter: '@itsjameswatt',
        keywords: ["James Watt", "James Watt Software", "James Watt Software Engineer", "James Watt Portfolio", "James Watt Software Developer"]
    },
    plugins: [
        {
            resolve: "gatsby-plugin-react-svg",
            options: {
                rule: {
                    include: /src\/assets\/svg\/*/ // See below to configure properly
                }
            }
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
                resolvePages: ({
                    allSitePage: { nodes: allPages },
                }) => {

                return allPages.map(page => {
                    return { ...page }
                })
                },
                serialize: ({ path }) => {
                    return {
                        url: path,
                        changefreq: `monthly`,
                        priority: 1,
                        lastmod: '2021-11-14'
                    }
                }
            }
        },
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                sitemap: '/sitemap-index.xml',
                policy: [{ userAgent: '*', allow: '/' }]
            }
        }
    ],
}
