import Vue from 'vue'
import Router from 'vue-router'

const Overview = () => import('views/overview/Overview')

const EchartsHistogram = () => import('views/twodimensionaldata/EchartsHistogram')
const EchartsLine = () => import('views/twodimensionaldata/EchartsLine')

const EchartsScatter = () => import('views/dspatialData/EchartsScatter')

Vue.use(Router)

const routes = [
  {
    path: '',
    redirect: '/Overview'
  },
  {
    path: '/Overview',
    name: '首页概览',
    component: Overview,
  },
  {
    path: '/EchartsHistogram',
    name: '柱状图',
    component: EchartsHistogram,
  },
  {
    path: '/EchartsScatter',
    name: '散点图',
    component: EchartsScatter,
  },
  {
    path: '/EchartsLine',
    name: '折线图',
    component: EchartsLine,
  }
]

export default new Router({
  routes,
  mode: 'history'
})
