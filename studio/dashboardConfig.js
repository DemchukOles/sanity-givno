export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '62447b571a844706804723f9',
                  title: 'Sanity Studio',
                  name: 'sanity-givno-studio',
                  apiId: '011263b8-52b9-4953-bd85-31a7b32e3f7c'
                },
                {
                  buildHookId: '62447b57a41bfb1d39f72ab4',
                  title: 'Portfolio Website',
                  name: 'sanity-givno',
                  apiId: '36993836-f372-43a4-888b-055eff7db044'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/DemchukOles/sanity-givno',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-givno.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
