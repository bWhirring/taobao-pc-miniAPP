const basePath = '/component/base';

export default {
  routes: [
    {
      path: '/component',
      component: 'component',
      children: [
        { path: '/base', component: 'base' },
      ],
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