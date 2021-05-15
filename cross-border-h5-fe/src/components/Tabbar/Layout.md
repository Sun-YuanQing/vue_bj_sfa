# ··· Layout（布局）

> 布局暂无对外属性

## 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--: | :----: | :----: |
| -    | -    |  -   |   -    |   -    |

## 基础用法

```tsx
<template>
  <Layout></Layout>
</template>;

import Layout from '@/components/Menu';
```

## 实例

> 建议在路由根节点引入布局组件

```tsx
// ********* 布局 *********
const Layout = () => import('@/components/Layout');

// ********* 页面 *********
import home from '@/router/routes/home'; // 首页
import test from '@/router/routes/test'; // 业务模块1
// ...其他子路由

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/home',
    name: '财经IT前端应用',
    component: Layout, // 页面结构
    children: [
      home, // 首页
      test, // 业务模块1
      // ...其他子路由
    ],
  },
  {
    path: '*',
    name: '无效路由',
    redirect: '/home',
  },
  // ...其他路由
];
```
