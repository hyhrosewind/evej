<!-- 图表分析 -->
<template>
  <div>
    <div class="analysisInfo">
      <chartsBoard v-show="chartFlag" @chartVisible="chartBoardShow"/>
      <createCharts @chartShow="chartBoardShow"/>
      <chartTable/>
    </div>
  </div>
</template>

<script>

import createCharts from 'components/content/createcharts/createCharts'
import chartTable from 'components/content/createcharts/chartTable'

import chartsBoard from 'components/content/chartsboard/chartsBoard'

export default {
  name: 'ChartAnalysis',
   data () {
    return {
      chartFlag: false
    }
  },
  methods: {
    chartBoardShow(chartFlag) {
      this.chartFlag = chartFlag
    }
  },
  components: {
    createCharts,
    chartTable,
    chartsBoard
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