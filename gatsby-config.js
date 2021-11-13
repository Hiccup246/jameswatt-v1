module.exports = {
    siteMetadata: {
        title: `James Watt`,
        description: `The personal portfolio for new zealand based software engineer and developer James Watt.`,
        author: `@itsjameswatt`,
        siteUrl: "https://jameswatt.io",
        keywords: ["James Watt", "James Watt Software Engineer", "James Watt Developer", "James Watt Software Developer"]
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
                output: '/'
            }
        }
    ],
}
