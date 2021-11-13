module.exports = {
    siteMetadata: {
        siteUrl: 'https://www.yourdomain.tld',
        title: 'James Portfolio Website',
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
