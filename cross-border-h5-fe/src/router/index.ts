import NProgress from 'nprogress'; // 引入nprogress插件
import Vue from 'vue';
import Router, { RouteConfig } from 'vue-router';
Vue.use(Router);
// import { isNeedLogin } from '@api/filter';
// import { decorateRoutes } from './decorateRoutes';
const baseConfig = require('@build/webpack.base.conf.js');
const envConf = baseConfig[process.env.VUE_APP_API_ENV];
//有顶部导航的Layout
const Layout = () => import('@/components/Layout');
//空的Layout,适合登陆或首页展示内容（不需要顶部导航/底部Tab）
const LayoutEmpty = () => import('@/components/Layout/empty');
const LayoutTabbar = () => import('@/components/Layout/LayoutTabbar');
const errorPage = () => import('@/views/errorPage');
//以下是业务页面
const login = () => import('@/views/login');
const entrance = () => import('@/views/entrance');
const recordList = () => import('@/views/record/list');
const recordDate = () => import('@/views/record/date');
const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/login',
    name: 'LayoutEmpty',
    component: LayoutEmpty,
    children: [
      {
        path: '/login',
        name: '登陆',
        component: login,
      },
	  {
	    path: '/entrance',
	    name: '进入',
	    component: entrance,
	  },
    ],
  },
  {
    path: '/record',
	redirect: '/record/list',
    name: '记录',
    component: LayoutTabbar,
	children:[
		{
		  path: '/record/list',
		  name: '记录',
		  component: recordList,
		},
		{
		  path: '/record/date',
		  name: '显示日历',
		  component: recordDate,
		}
	]
  },
  {
    path: '*',
    name: '404',
    component: errorPage,
  },
]; // 移动端

// window.$pathPrefix = 'an:'; // 统一前缀
// const match = location.pathname.match(/^\/an:\w+/);
// if (match && match[0]) {
//   window.$pathPrefix = match[0]; // .replace('an:', 'an::')
// }
// const constantRouterMap: RouteConfig[] = decorateRoutes(routes);

const router = new Router({
  mode: 'hash', // 分为 hash（地址栏#号） 和 history（ 利用了 HTML5 History Interface 中新增的 pushState() 和 replaceState() 方法，此方式需要浏览器的支持，而且需要后端配合,才能达到预期效果）
  base: envConf.publicPath, // 应用的基路径。例如，如果整个单页应用服务在 /app/ 下，然后 base 就应该设为 "/app/"。
  routes,
  // constantRouterMap,
});

router.beforeEach(async (to, from, next) => {
  window.document.title = `${to.name}`;

  NProgress.start(); // 设置加载进度条(开始..)

  next();
  // await isNeedLogin(to, from, next); // 登录过滤
});

router.afterEach((to) => {
  NProgress.done(); // 设置加载进度条(结束..)
});

export default router;
