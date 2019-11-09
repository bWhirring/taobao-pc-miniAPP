export const basePath = '/activity/list';

export default {
  routes: [
    {
      path: '/activity',
      component: 'activity',
      children: [
        { path: '/base', component: 'base' },
        { path: '/list', component: 'list' },
        { path: '/add', component: 'add' },
      ]
    },
    {
      path: '/huhu',
      component: 'huhu',
      children: [{
        path: '/hh', component: 'hh'
      }]
    }
  ],
  option: {
    initPath: basePath,
  }
}