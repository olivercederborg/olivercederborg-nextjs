module.exports = {
  "plugins": [
    'tailwindcss',
    'autoprefixer',
    [
      '@fullhuman/postcss-purgecss',
      {
        content: [
          './pages/**/*.{js,jsx,ts,tsx}',
          './components/**/*.{js,jsx,ts,tsx}'
        ],
        defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
      }
    ],
  ]
}