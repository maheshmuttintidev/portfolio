const withTM = require('next-transpile-modules')(['ui'])

module.exports = withTM({
  reactStrictMode: true,
  env: {
    NOTION_SECRET_KEY: process.env.NOTION_SECRET_KEY,
  },
  rewrites: async () => {
    return [
      {
        source: '/v1/:path*',
        destination: 'https://api.notion.com/v1/:path*',
      },
    ]
  },
})
