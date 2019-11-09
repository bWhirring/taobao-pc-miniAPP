const { cloud } = getApp();
import routerInit from 'miniapp-router';
import routerConfig from '../../router/index'
console.log(routerConfig)

const basePath = '/component/base';

Page({
  data: {
    activeKey: '',
    defaultActiveKey: basePath,
    info: {
      company: '呼呼',
      miniappName: '示例',
      logo: 'https://img.alicdn.com/tfs/TB1vVhnmnnI8KJjy0FfXXcdoVXa-300-300.png'
    },
    menu: [{
      name: 'test',
      key: 'component',
      title: '基础组件',
      tabs: [
        {
          /* name用于配置当前tab的选项卡名称 */
          name: 'Button 按钮',
          /* key与二级路由对应 */
          key: 'base',
          /* title用于配置右下侧主内容区域的标题 */
          title: '模块标题',
          /* 定义当前tab的面包屑 */
          breadcrumb: [{
            /* 名称 */
            name: '一级',
            /* 跳转路径 */
            path: '/huhu/hh'
          },
          {
            name: '二级',
            path: '/component/base'
          }]
        },
        { name: 'Icon 图标', key: 'icon' }
      ]
    }, {
      name: 'huhu',
      key: 'huhu',
      title: null
    }],
  },
  onLoad(query) {
    // 页面加载
    routerInit.call(this, routerConfig);
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
  },
  onReady() {
    // serverless 示例
    // cloud.function.invoke('hello', null, 'main').then(res => {
    //   console.log(res)
    // })
  },
  onChange({ detail: { value } }) {
    console.log('************$router', value)
    this.$router.push(value);
    this.setData({ activeKey: value })
  },
  onActiveKeyChange(event) {
    const { path } = event.target.dataset;
    this.setData({ activeKey: path })
  }

});
