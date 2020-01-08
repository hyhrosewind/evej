<!-- 图表分析 -->
<template>
  <div>
    <div class="analysisInfo">
      <chartsBoard v-if="chartFlag" @chartVisible="chartBoardShow"/>
      <txtChartsBoard v-if="txtChartFlag" @changeTxtVisible="txtChartBoardShow"/>
      <createCharts @chartShow="init_chartBoardShow" @txtChartsShow="txtChartBoardShow"/>
      <chartTable/>
    </div>
  </div>
</template>

<script>

import createCharts from 'components/content/createcharts/createCharts'
import chartTable from 'components/content/createcharts/chartTable'

import chartsBoard from 'components/content/chartsboard/chartsBoard'
import txtChartsBoard from 'components/content/txtchartsboard/txtChartsBoard'

export default {
  name: 'ChartAnalysis',
   data () {
    return {
      chartFlag: false,
      txtChartFlag: false
    }
  },
  methods: {
    chartBoardShow(chartFlag) {
      new Promise(resolve => {
        setTimeout(() => {
          resolve('loading')
        },1500)
      }).then(res => {
        this.chartFlag = chartFlag
        this.$store.state.changeFlag = '',
        this.$store.state.chartTitle = '',
        this.$store.state.chartBackground = ''
        this.$store.state.itemColor = ''        
        this.$store.state.changeOption = false 
      })
    },
    init_chartBoardShow(chartFlag) {
      this.chartFlag = chartFlag
    },
    txtChartBoardShow(txtChartFlag) {
      this.txtChartFlag = txtChartFlag
    }
  },
  components: {
    createCharts,
    chartTable,
    chartsBoard,
    txtChartsBoard
  }
}
</script>

<style scoped>
.analysisInfo {
  margin-top: 10px;
  padding: 0px;
  height: 540px;
  text-align: center;
  z-index: 1
}
</style>