const { remarkCodeHike } = require("@code-hike/mdx")

const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.mjs",
  mdxOptions: {
    remarkPlugins: [[remarkCodeHike, { theme: "material-palenight" }]],
  },
})


module.exports = {
  target: 'experimental-serverless-trace',

  exportPathMap: async function () {
    return {
      '/': { page: '/01_Linha_de_comandos/comando-and' },
    };
  },
};