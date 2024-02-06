module.exports = {
  siteUrl: 'https://imjesus-dev.vercel.app',
  generateRobotsTxt: true,
  excluede: ['/server-sitemap-index.xml'],
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://imjesus-dev.vercel.app/server-sitemap-index.xml',
    ],
  },
}
