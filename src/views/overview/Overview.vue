<template>
  <div class="overview-info">
    <el-row :gutter="16">
      <el-col :span="11">
        <h5>二维数据 柱状图</h5>
        <div class="grid-content bg-purple">
          <histogram :chart_width="450" :chart_height="375"/>
        </div>
      </el-col>
      <el-col :span="11">
        <h5>二维数据 折线图</h5>
        <div class="grid-content bg-purple">
          <lineGraph :chart_width="450" :chart_height="375"/>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="16">
      <el-col :span="11">
        <h5>三维数据 散点图</h5>
        <div class="grid-content bg-purple">
          <scatter :chart_width="450" :chart_height="375"/>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>

import histogram from 'components/common/echarts/twodimensionaldata/histogram'
import lineGraph from 'components/common/echarts/twodimensionaldata/lineGraph'

import scatter from 'components/common/echarts/dspatialData/scatter'

export default {
  name: 'overview',
  components: {
    histogram,
    scatter,
    lineGraph
  }
}
</script>

<style scoped>

.overview-info {
  margin: 0px;
  padding: 10px;
}

.el-row {
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
  padding: 10px;
}

.el-col {
  border-radius: 4px;
  padding: 10px;
  background: rgba(90,68,128,.1);
  margin-left: 30px;
}

.grid-content {
  margin: 10px;
  border-radius: 4px;
  padding: 20px;
  text-align: center;
  background: #99a9bf;
}

</style>
