import { createRouter, createWebHashHistory } from 'vue-router'
import UserListsView from '../views/UserListsView.vue'
import AboutView from '../views/AboutView.vue'
import ChatBoardView from '../views/ChatBoardView.vue'

const routes = [
  {
    path: '/',
    name: 'userlists',
    component: UserListsView
  },
  {
    path: '/about',
    name: 'about',
    conponent: AboutView
  },
  {
    path: '/chat',
    name: 'chatboard',
    component: ChatBoardView
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
