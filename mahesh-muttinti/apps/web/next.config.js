const withTM = require('next-transpile-modules')(['ui'])

module.exports = withTM({
  reactStrictMode: true,
  env: {
    NOTION_SECRET_KEY: process.env.NOTION_SECRET_KEY,
    XATA_DATABASE_URL: process.env.XATA_DATABASE_URL,
    XATA_BRANCH: process.env.XATA_BRANCH,
    XATA_API_KEY: process.env.XATA_API_KEY,
  },
  experimental: {
<<<<<<< HEAD
    runtime: 'edge',
    enableBrowser: true,
=======
    runtime: 'experimental-edge',
>>>>>>> 102f8a4589af4cd9c665ff0ebb91606d2e81669b
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
