export default {
  widgets: [
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
                  buildHookId: '6258a9156341a6339b177747',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-16m2cgnu',
                  apiId: 'a98b2d91-5157-4f7b-8774-673431065297'
                },
                {
                  buildHookId: '6258a9153cfc6b31947124c5',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-ihsrn2kf',
                  apiId: 'a94560ed-ecaf-4f10-8d14-52745e68f801'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/JackWoShea/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-ihsrn2kf.netlify.app', category: 'apps'}
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
