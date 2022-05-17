import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '@/views/accounts/LoginView'
import TodosView from '@/views/todos/TodosView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/accounts/login',
    name: 'LoginView',
    component: LoginView
  },
  {
    path: '/todos',
    name: 'TodosView',
    component: TodosView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
