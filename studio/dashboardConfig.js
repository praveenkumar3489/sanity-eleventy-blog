export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60c2fd17353787ab6155e354',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-7ey51r6q',
                  apiId: 'fefc1d76-a819-4c15-a7aa-38eed5e7616c'
                },
                {
                  buildHookId: '60c2fd17ce399cceada583bb',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-g5tx2qbo',
                  apiId: '5ee9236b-c2fa-4f43-9990-f9f4a4659922'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/praveenkumar3489/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-g5tx2qbo.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
