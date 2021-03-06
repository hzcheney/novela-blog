module.exports = {
  siteMetadata: {
    title: `我的博客`,
    name: `Writing Coding Moving`,
    siteUrl: `https://derive.ml`,
    description: `前端 JavaScript 开发 js html css3 css `,
    hero: {
      heading: `欢迎来到巴克峰`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/kNCn3lAG7gUGcLa`,
      },
      {
        name: `github`,
        url: `https://github.com/hzcheney`,
      },
      // {
      //   name: `instagram`,
      //   url: `https://instagram.com/narative.co`,
      // },
      // {
      //   name: `linkedin`,
      //   url: `https://www.linkedin.com/company/narative/`,
      // },
      // {
      //   name: `dribbble`,
      //   url: `https://dribbble.com/narativestudio`,
      // },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        extensions: [`.md`],
      },
    },
  ],
};
