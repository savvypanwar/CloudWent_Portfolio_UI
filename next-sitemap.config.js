/** @type {import('next-sitemap').IConfig} */

module.exports = {

  // Company website domain
  siteUrl: 'https://tech.cloudwent.com',


  // Generate sitemap.xml + robots.txt
  generateRobotsTxt: true,


  sitemapSize: 5000,


  // Private routes
  exclude: [
    '/dashboard',
    '/dashboard/*',
    '/admin',
    '/admin/*',
    '/api/*',
    '/login',
    '/signup'
  ],



  // Tech agency pages
  additionalPaths: async (config) => [

    await config.transform(
      config,
      '/'
    ),


    await config.transform(
      config,
      '/about'
    ),


    await config.transform(
      config,
      '/services'
    ),



    // Software development services

    await config.transform(
      config,
      '/services/web-development'
    ),


    await config.transform(
      config,
      '/services/mobile-app-development'
    ),


    await config.transform(
      config,
      '/services/custom-software-development'
    ),


    await config.transform(
      config,
      '/services/erp-development'
    ),



    // Cloud / DevOps

    await config.transform(
      config,
      '/services/cloud-solutions'
    ),


    await config.transform(
      config,
      '/services/devops'
    ),



    // Product development

    await config.transform(
      config,
      '/services/saas-development'
    ),


    await config.transform(
      config,
      '/case-studies'
    ),


    await config.transform(
      config,
      '/blog'
    ),


    await config.transform(
      config,
      '/contact'
    )

  ],



  robotsTxtOptions: {


    policies: [

      {
        userAgent: '*',
        allow: '/'
      }

    ],


    additionalSitemaps: [

      'https://tech.cloudwent.com/sitemap.xml'

    ]

  }


};