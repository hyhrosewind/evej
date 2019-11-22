import Vue from 'vue'
import Router from 'vue-router'

const TwoDimension = () => import('views/nav1/TwoDimension')
const TwoDimension2 = () => import('views/nav1/TwoDimension2')
const TwoDimension3 = () => import('views/nav1/TwoDimension3')

Vue.use(Router)

const routes = [
  {
    path: '',
    redirect: '/TwoDimension'
  },
  {
    path: '/TwoDimension',
    name: 'twoDimension',
    component: TwoDimension,
  },
  {
    path: '/TwoDimension2',
    name: 'twoDimension2',
    component: TwoDimension2,
  },
  {
    path: '/TwoDimension3',
    name: 'twoDimension3',
    component: TwoDimension3,
  }
]

export default new Router({
  routes,
  mode: 'history'
})
