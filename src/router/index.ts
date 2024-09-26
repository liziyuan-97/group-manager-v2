/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: xinyan
 * @Date: 2024-09-11 16:02:22
 * @LastEditors: xinyan
 * @LastEditTime: 2024-09-11 18:06:15
 */
import { createWebHashHistory, createRouter } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/home/index.vue')
  }
]

const pathname = location.pathname;
const router = createRouter({
  history: createWebHashHistory(pathname),
  routes
});

export default router