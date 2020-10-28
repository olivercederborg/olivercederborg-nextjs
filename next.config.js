const withSass = require('@zeit/next-sass')
const withPurgeCss = require('next-purgecss')

module.exports = withSass(withPurgeCss({
  target: 'serverless',
  purgeCssEnabled: ({ dev, isServer }) => !dev && !isServer,
  purgeCssPaths: [
    './pages/**/*',
    './layouts/**/*',
    './components/**/*',
  ],
  purgeCss: {
    defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
    whitelistPatterns: [/^menu/, /^nprogress/, /^page-transition/],
  },
}))
