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
        <h5>二维数据 饼图</h5>
        <div class="grid-content bg-purple">
          <pieGraph :chart_width="450" :chart_height="375"/>
        </div>
      </el-col>
      <el-col :span="11">
        <h5>三维数据 散点图</h5>
        <div class="grid-content bg-purple">
          <scatter :chart_width="450" :chart_height="375"/>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="16">
      <el-col :span="11">
        <h5>三维数据 地图</h5>
        <div class="grid-content bg-purple">
          <mapGraph :chart_width="450" :chart_height="375"/>
        </div>
      </el-col>
      <el-col :span="11">
        <h5>多维数据 雷达图</h5>
        <div class="grid-content bg-purple">
          <radarMap :chart_width="450" :chart_height="375"/>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="16">
      <el-col :span="11">
        <h5>层次数据 旭日图</h5>
        <div class="grid-content bg-purple">
          <sunburst :chart_width="450" :chart_height="375"/>
        </div>
      </el-col>
      <el-col :span="11">
        <h5>层次数据 树图</h5>
        <div class="grid-content bg-purple">
          <treeGraph :chart_width="450" :chart_height="375"/>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="16">
      <el-col :span="11">
        <h5>网状数据 关系图</h5>
        <div class="grid-content bg-purple">
          <gridGraph :chart_width="450" :chart_height="375"/>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>

import histogram from 'components/common/echarts/twodimensionaldata/histogram'
import lineGraph from 'components/common/echarts/twodimensionaldata/lineGraph'
import pieGraph from 'components/common/echarts/twodimensionaldata/pieGraph'

import scatter from 'components/common/echarts/dspatialdata/scatter'
import mapGraph from 'components/common/echarts/dspatialdata/mapGraph'

import radarMap from 'components/common/echarts/multidimensionaldata/radarMap'

import gridGraph from 'components/common/echarts/griddata/gridGraph'

import sunburst from 'components/common/echarts/hierarchicaldata/sunburst'
import treeGraph from 'components/common/echarts/hierarchicaldata/treeGraph'

export default {
  name: 'overview',
  components: {
    histogram,
    lineGraph,
    pieGraph,
    scatter,
    mapGraph,
    radarMap,
    gridGraph,
    sunburst,
    treeGraph
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
  background: rgba(90,68,128,.2);
  margin-left: 30px;
}

.grid-content {
  margin: 10px;
  border-radius: 4px;
  padding: 20px;
  text-align: center;
  background: #fff;
}

</style>
