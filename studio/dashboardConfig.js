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
                  buildHookId: '5fca0ca6880518c3b2b95b89',
                  title: 'Sanity Studio',
                  name: 'web-studio-we872u9z',
                  apiId: '3baf8543-0265-4681-b781-fcfed0217835'
                },
                {
                  buildHookId: '5fca0ca6880518c062b95c00',
                  title: 'Blog Website',
                  name: 'web-web',
                  apiId: 'e917a209-84e6-44d5-96a3-e1bc4474b693'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jannosiilbek/web',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://web-web.netlify.app', category: 'apps'}
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
