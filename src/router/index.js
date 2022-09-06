import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/Layout'),
    children: [
      {
        path: '/',
        component: () => import('@/views/home/index')
      },
      {
        path: '/category/:id',
        component: () => import('@/views/category/index')
      },
      {
        path: '/category/sub/:id',
        component: () => import('@/views/category/sub')
      },
      {
        path: '/product/:id',
        component: () => import('@/views/goods/index')
      },
      {
        path: '/cart',
        component: () => import('@/views/cart/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login')
  },
  { path: '/login/callback', component: () => import('@/views/login/callback') }
]

const router = createRouter({
  // 使用hash的路由模式
  history: createWebHashHistory(),
  routes,
  scrollBehavior () {
    return { left: 0, top: 0 }
  }
})

export default router
