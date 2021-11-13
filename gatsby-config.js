module.exports = {
    siteMetadata: {
        title: `James Watt`,
        description: `The personal portfolio for new zealand based software engineer and developer James Watt.`,
        author: `@itsjameswatt`,
        siteUrl: `https://wwww.jameswatt.io`,
        keywords: ["James Watt", "James Watt Software Engineer", "James Watt Developer", "James Watt Software Developer"],
        favIcon: './src/assets/icons8-sun-50.png',
    },
    plugins: [
        {
            resolve: "gatsby-plugin-react-svg",
            options: {
                rule: {
                    include: /src\/assets\/svg\/*/ // See below to configure properly
                }
            }
        }
    ],
}
