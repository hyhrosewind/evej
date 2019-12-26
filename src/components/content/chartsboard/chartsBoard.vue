<template>
  <div class="charts_board">
    <el-container>
      <el-header>
        <chartsHeader @chartsShowHeader="handleChartsShow"/>
      </el-header>
      <el-container>
        <el-aside width="180px"><leftAside/></el-aside>
        <el-main>
          <mainTable @uploadCharts="handleCharts"/>
          <mainCharts :drawFlag="drawFlag" @clearTags="handleTags"/>
        </el-main>
        <el-aside style=" width: 180px; margin-left: 980px; ">
          <rightAside/>
        </el-aside>
      </el-container>
    </el-container>
  </div>
</template>

<script>

import chartsHeader from 'components/content/chartsboard/chartsHeader'
import leftAside from 'components/content/chartsboard/leftaside/leftAside'
import mainTable from 'components/content/chartsboard/mainboard/mainTable'
import mainCharts from 'components/content/chartsboard/mainboard/mainCharts'
import rightAside from 'components/content/chartsboard/rightaside/rightAside'

export default {
  name: 'chartsBoard',
  data() {
    return {
      drawFlag: ''
    }
  },
  methods: {
    handleChartsShow(chart_show) {
      this.$emit('chartVisible',chart_show)
    },
    handleCharts(chartLabel) {
      this.drawFlag = chartLabel
    },
    handleTags() {
      this.drawFlag = ''
    }
  },
  components: {
    chartsHeader,
    leftAside,
    mainTable,
    mainCharts,
    rightAside
  }
}

</script>

<style scoped>

  .charts_board {
    position: absolute;
    margin: 0px;
    padding: 0px;
    width: 1160px;
    height: 540px;
    background: #fff;
    z-index: 2
  }

  .el-header {
    position: relative;
    height: 60px;
    margin: 0px;
    padding: 0px;
    border: 1px solid rgba(62,63,99,.08);
    border-radius: 5px;
    background: rgba(62,63,99,.04);
  }
  
  .el-aside {
    position: absolute;
    color: #333;
    text-align: center;
    height: 502px;
    padding-top: 10px;
    border-left: 1px solid rgba(62,63,99,.2);
    border-radius: 10px;
    margin-top: -2px;
  }
  
  .el-main {
    position: absolute;
    margin-left: 180px;
    width: 800px;
    height: 502px;
    padding: 10px;
    color: #333;
    text-align: center;
  }

</style>
