import Vue from 'vue'
import Router from 'vue-router'

const Overview = () => import('views/overview/Overview')

const DataSet = () => import('views/dataset/DataSet')

const ChartAnalysis = () => import('views/chartanalysis/ChartAnalysis')


Vue.use(Router)

const routes = [
  {
    path: '',
    redirect: '/DataSet'
  },
  {
    path: '/Overview',
    name: '新建看板',
    component: Overview,
  },
  {
    path: '/DataSet',
    name: '数据集',
    component: DataSet,
  },
  {
    path: '/ChartAnalysis',
    name: '图表分析',
    component: ChartAnalysis,
  }
]

export default new Router({
  routes,
  mode: 'history'
})
