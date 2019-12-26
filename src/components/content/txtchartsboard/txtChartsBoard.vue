<template>
  <div class="txt-board">
    <div><chartsHeader @txtChartsShowHeader="handleShow"/></div>
    <el-tabs type="border-card"
    style=" height: 470px; margin-left: 30px; margin-right: 30px; ">
      <el-tab-pane label="柱状图"><histogram v-if="histogramShow"/></el-tab-pane>
      <el-tab-pane label="3D散点图">3D散点图</el-tab-pane>
      <el-tab-pane label="多维数据">多维数据</el-tab-pane>
      <el-tab-pane label="网状数据">网状数据</el-tab-pane>
      <el-tab-pane label="层次数据">层次数据</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import chartsHeader from 'components/content/chartsboard/chartsHeader'

import histogram from 'components/common/echarts/twodimensionaldata/histogram'

export default {
  name: 'txtChartsBoard',
  props: {
    histogramShow: {
      type: Boolean,
      default: false
    }
  },
  created() {
    
  },
  data() {
    return {
    }
  },
  methods: {
    handleShow(txt_show) {
      this.$emit('changeTxtVisible',txt_show)
    }
  },
  components: {
    chartsHeader,
    histogram
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
