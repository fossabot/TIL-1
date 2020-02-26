  const sidebar = require('./auto-sidebar-generator');

module.exports = {
  title: 'Today Gimun Learned',
  description: 'Personal Wiki (Today I Learned)',
  email: 'gimoon0226@naver.com',
  base: "/TIL/",
  themeConfig: {
   nav: [
      { text: 'GitHub', link: 'https://github.com/GimunLee/TIL' }
    ],
    smoothScroll: true,
    lastUpdated: 'Last Updated'
  }
}
