const { description } = require('../../package')
const path = require('path');

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Cardano Catalyst Community Site',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,
  //base: "/catalyst/",

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#001D9D' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ],
  dest: 'html',

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: true,
    nav: [
      {
        text: 'Proposers',
        link: '/proposers/'
      },
      {
        text: 'Voters',
        link: '/voters/'
      },
      {
        text: 'Community Advisors',
        link: '/community-advisor/',
      },
      {
        text: 'Funds',
        link: '/funds/'
      },
      {
        text: 'Resources',
        link: '/resources/'
      },
      {
        text: 'FAQ',
        link: '/faq/'
      },
    ]
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ],

  // Enable YAML Loading
  chainWebpack (config, isServer) {
    config.module
      .rule("compile")
      .test(/\.ya?ml$/)
      .type('json')
      .use("yaml")
      .loader("yaml-loader");
    config.resolve.alias.set("@", path.resolve("."));
  }
}
