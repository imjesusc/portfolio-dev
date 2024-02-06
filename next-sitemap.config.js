module.exports = {
  siteUrl: 'http://localhost:3000/es',
  generateRobotsTxt: true,
  excluede: ['/server-sitemap-index.xml'],
  robotsTxtOptions: {
    additionalSitemaps: ['http://localhost:3000/es/server-sitemap-index.xml'],
  },
}
