import cloud from '@tbmp/mp-cloud-sdk';
cloud.init({
  env: 'test'
});
App({
  cloud,
  onLaunch(options) {
    // cloud.function.invoke('helloword', null, 'main').then(res => {
    //   console.log(res)
    // })
    // 第一次打开
    // options.query == {number:1}
    console.info('App onLaunch');
  },
  onShow(options) {
    // 从后台被 scheme 重新打开
    // options.query == {number:1}
  },
});
