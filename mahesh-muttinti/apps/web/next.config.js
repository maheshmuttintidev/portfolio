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
    runtime: 'edge',
    enableBrowser: true,
    runtime: 'experimental-edge',
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
