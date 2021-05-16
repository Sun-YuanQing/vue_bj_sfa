import '@/assets/svg'; //  将svg 注册为全局
import router from '@/router';
import store from '@/store';
// PC端 应用
import '@/styles/index.less'; // 初始化样式
// import 'vant/lib/index.css'; // 第三方组件库
import Rem from '@/utils/rem';
import App from '@/views/App.vue';
import 'nprogress/nprogress.css'; // 加载动作条样式
import Vue from 'vue';

import '@/styles/flex.less'; // 弹性盒样式
Rem(window, 750); // rem 换算

// ********* 绑定到vue对象上的变量 *********
// import moment from 'moment'; // 日期
// Vue.use({
//   install(Vue) {
//     Object.defineProperty(Vue.prototype, '$moment', {
//       value: moment,
//     });
//   },
// });

Vue.filter('dateDay', function(date) {
	
	return date.getDate();
})

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
