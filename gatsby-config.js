module.exports = {
  siteMetadata: {
    title: `Arahan Pelanggan`,
    description: `sebuah aplikasi untuk membantu desainer menentukan projek selanjutnya untuk porfolio dia sekaligus pembelajarannya`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `arahan-pelanggan`,
        short_name: `arahan`,
        start_url: `/`,
        background_color: `#F8444F`,
        theme_color: `#F8444F`,
        display: `minimal-ui`,
        icon: `src/images/Logo.png`, 
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`postcss-preset-env`)(
            {
             browsers: "dead", 
             stage: 0,
             features: {
               "nesting-rules": true
             } 
            }
        )
      ],
      },
    },
    `gatsby-plugin-offline`,
  ],
}
