import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('views/home/Home')
const TwoDimension = () => import('views/nav1/TwoDimension')
const TwoDimension2 = () => import('views/nav1/TwoDimension2')

Vue.use(Router)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '/nav1/TwoDimension',
        name: 'twoDimension',
        component: TwoDimension
      },
      {
        path: '/nav1/TwoDimension2',
        name: 'twoDimension2',
        component: TwoDimension2
      }
    ]
  }
]

export default new Router({
  routes,
  mode: 'history'
})
