import Router, { RouteConfig } from 'vue-router';

/**
 * 修改路由定义
 * 统一加上前缀 /an:xxx, 适配移动网关, 让整个过程对路由的定义无感知
 *
 * @param {RouteConfig[]} routes
 * @returns
 */
export function decorateRoutes(routes: RouteConfig[]) {
  // console.log('>>>>>>>>>> ', window.$pathPrefix);
  if (!window.$pathPrefix) {
    return routes;
  }
  return routes.map((route) => {
    // 拼上前缀
    const addPrefix = (key: keyof RouteConfig) => {
      if (route[key] && route[key].startsWith('/')) {
        route[key] = window.$pathPrefix + route[key];
      }
    };

    // 别名加上前缀
    if (route.alias) {
      const addedPrefix = (path: string) => (path.startsWith('/') ? window.$pathPrefix + path : path);
      if (typeof route.alias === 'string') {
        route.alias = [addedPrefix(route.alias)];
      } else {
        route.alias = route.alias.map(addedPrefix);
      }
    } else {
      route.alias = [];
    }
    // 针对代码中调用 router.push, router.replace 等方法时, 不会自己加上前缀
    // 为了能够成功解析, 把原路由定义为别名, 如把 path 从 /home 改为 /an:admax/home 之后,
    // 再把 /home 设置为别名, 这样当代码调用跳转到 /home 时, 路由就能够解析到, 此时再通过
    // 统一路由钩子做一次跳转, 跳转到 /an:admax/home, 这样在开发时就能够无感知地定义路由
    if (route.path !== '/' && route.path.startsWith('/')) {
      route.alias.push(route.path);
    }

    addPrefix('path');
    addPrefix('redirect');
    if (route.children) {
      route.children = decorateRoutes(route.children);
    }
    return route;
  });
}
