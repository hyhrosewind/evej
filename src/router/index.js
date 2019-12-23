import Vue from 'vue'
import Router from 'vue-router'

const Overview = () => import('views/overview/Overview')

const DataSet = () => import('views/dataset/DataSet')

const ChartAnalysis = () => import('views/chartanalysis/ChartAnalysis')

const EchartsHistogram = () => import('views/twodimensionaldata/EchartsHistogram')
const EchartsLine = () => import('views/twodimensionaldata/EchartsLine')
const EchartsPie = () => import('views/twodimensionaldata/EchartsPie')

const EchartsScatter = () => import('views/dspatialdata/EchartsScatter')

const EchartsRadar = () => import('views/multidimensionaldata/EchartsRadar')

const EchartsSunburst = () => import('views/hierarchicaldata/EchartsSunburst')

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
    path: '/DataSet',
    name: '数据集',
    component: DataSet,
  },
  {
    path: '/ChartAnalysis',
    name: '图表分析',
    component: ChartAnalysis,
  },
  {
    path: '/EchartsHistogram',
    name: '柱状图',
    component: EchartsHistogram,
  },
  {
    path: '/EchartsLine',
    name: '折线图',
    component: EchartsLine,
  },
  {
    path: '/EchartsPie',
    name: '饼图',
    component: EchartsPie,
  },
  {
    path: '/EchartsScatter',
    name: '散点图',
    component: EchartsScatter,
  },
  {
    path: '/EchartsRadar',
    name: '雷达图',
    component: EchartsRadar,
  },
  {
    path: '/EchartsSunburst',
    name: '旭日图',
    component: EchartsSunburst,
  }
]

export default new Router({
  routes,
  mode: 'history'
})
