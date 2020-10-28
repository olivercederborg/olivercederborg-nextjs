const withCss = require("@zeit/next-css");
const withPurgeCss = require("next-purgecss");

module.exports = withCss(
   withPurgeCss({
     purgeCssEnabled: ({ dev, isServer }) => !dev && !isServer, // Only enable PurgeCSS for client-side production builds
     purgeCssPaths: [
      "pages/**/*",
      "components/**/*",
      "other-components/**/*", // also scan other-components folder
    ],
   })
 );