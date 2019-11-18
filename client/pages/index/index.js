const { cloud } = getApp();
import routerInit from 'miniapp-router';
import routerConfig, { basePath } from '../../router/index'
console.log(routerConfig)

Page({
  data: {
    activeKey: '',
    defaultActiveKey: basePath,
    info: {
      company: '呼呼🦆',
      miniappName: '淘宝PC🌰',
      logo: 'https://img.alicdn.com/tfs/TB1vVhnmnnI8KJjy0FfXXcdoVXa-300-300.png'
    },
    menu: [{
      name: '活动管理',
      key: 'activity',
      title: '活动管理'
    }, {
      name: 'huhu',
      key: 'huhu',
      title: '我是呼呼🦆'
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
    if (value === '/activity') {
      value = '/activity/list'
    }
    this.$router.push(value);
    this.setData({ activeKey: value })
  },
  onActiveKeyChange(event) {
    const { path } = event.target.dataset;
    this.setData({ activeKey: path })
  }
});
