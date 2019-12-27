<template>
  <div class="txt-board">
    <div><chartsHeader @txtChartsShowHeader="handleShow"/></div>
    <el-tabs type="border-card" v-model="activeName"
    style=" height: 470px; margin-left: 30px; margin-right: 30px; ">
      <el-tab-pane label="柱状图" name="first"><histogram v-if="histogramShow" 
      :x_data="histogramX" :series_data="histogramY"/></el-tab-pane>
      <el-tab-pane label="3D散点图" name="second"><scatter v-if="scatterShow"
      :scatter_data="scatterData"/></el-tab-pane>
      <el-tab-pane label="多维数据" name="third"></el-tab-pane>
      <el-tab-pane label="网状数据" name="fourth"><gridGraph v-if="gridShow"
      :grid_data="gridData"/></el-tab-pane>
      <el-tab-pane label="层次数据" name="fifth"><treeGraph v-if="treeShow"
      :tree_data="treeData"/></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import chartsHeader from 'components/content/chartsboard/chartsHeader'

import histogram from 'components/common/echarts/twodimensionaldata/histogram'
import scatter from 'components/common/echarts/dspatialdata/scatter'
import treeGraph from 'components/common/echarts/hierarchicaldata/treeGraph'
import gridGraph from 'components/common/echarts/griddata/gridGraph'

export default {
  name: 'txtChartsBoard',
  data() {
    return {
      activeName: 'first',
      histogramShow: false,
      scatterShow: false,
      treeShow: false,
      gridShow: false,
      histogramX: [],
      histogramY: [],
      scatterData: [],
      treeData: [],
      gridData: {},
      temp: this.$store.state.txtData,
      chartFlag: 0
    }
  },
  created() {
    this.drawCharts()
  },
  methods: {
    handleShow(txt_show) {
      this.$emit('changeTxtVisible',txt_show)
    },
    drawCharts() {
      this.handleNum(this.temp)
      if(this.chartFlag==2) {
        for (let a in this.temp) {
          this.histogramX.push(this.temp[a].name)
          this.histogramY.push(this.temp[a].num)
          this.histogramShow = true
          this.activeName = 'first'
        }
      }
      else if(this.chartFlag==3) {
        for(let a in this.temp) {
          let d = []
          d[0] = this.temp[a].x
          d[1] = this.temp[a].y
          d[2] = this.temp[a].z
          this.scatterData.push(d)
        }
        this.scatterShow = true
        this.activeName = 'second'
      }
      else if(this.chartFlag==4) {
        this.treeData = this.temp
        this.treeShow = true
        this.activeName = 'fifth'
      }
      else if(this.chartFlag==5) {
        this.gridData = this.temp[0]
        this.gridShow = true
        this.activeName = 'fourth'
      }
    },
    handleNum(temp) {
      var a = temp[0]
      for(var x in a) {
        this.chartFlag++
        if(x=='children') {
          this.chartFlag = 4
          break
        }
        if(x=='nodes') {
          this.chartFlag = 5
          break
        }
      }
    }
  },
  components: {
    chartsHeader,
    histogram,
    scatter,
    treeGraph,
    gridGraph
  }
}
</script>

<style scoped>
.txt-board {
  position: absolute;
  margin: 0px;
  padding: 0px;
  width: 1160px;
  height: 560px;
  background: rgba(225,230,234,1);
  z-index: 2
}
</style>
