<template>
  <div class="NavBar">
    <div class="radiobutton">
      <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
        <div class="expand"><el-radio-button plain :label="false">展开</el-radio-button></div>
        <div class="collapse"><el-radio-button plain :label="true">收起</el-radio-button></div>
      </el-radio-group>
    </div>
    <el-menu background-color="rgba(62,63,99,.04)" default-active="2" 
    class="el-menu-vertical-demo" :collapse="isCollapse">

      <el-menu-item index="1" @click="changeView(1)">
        <img src="../../../assets/img/dashboard/echarts-gauge.png" 
        style="width: 20px; height: 20px; margin-right: 10px;"/>
        <span>首页概览</span>
      </el-menu-item>

      <el-menu-item index="2" @click="changeView(2)">
        <img src="../../../assets/img/dataset/dataset.png" 
        style="width: 20px; height: 20px; margin-right: 10px;"/>
        <span>数据加载</span>
      </el-menu-item>

      <el-menu-item index="3" @click="changeView(3)">
        <img src="../../../assets/img/chartanalysis/chart-analysis.png" 
        style="width: 20px; height: 20px; margin-right: 10px;"/>
        <span>图表分析</span>
      </el-menu-item>

      <el-submenu index="4">
        <template slot="title">
          <img src="../../../assets/img/data-structure/twoDimensionalData.png"  
          style="width: 20px; height: 20px; margin-right: 10px;"/>
          <span slot="title">二维数据</span>
        </template>
        <el-menu-item index="4-1" @click="changeView(4)">
          <img src="../../../assets/img/echarts/echarts-histogram.png" 
          style="width: 20px; height: 20px; margin-right: 10px;"/>
          柱状图</el-menu-item>
        <el-menu-item index="4-2" @click="changeView(5)">
          <img src="../../../assets/img/echarts/echarts-line.png" 
          style="width: 20px; height: 20px; margin-right: 10px;"/>折线图
        </el-menu-item>
        <el-menu-item index="4-3" @click="changeView(6)">
          <img src="../../../assets/img/echarts/echarts-pie.png" 
          style="width: 25px; height: 25px; margin-right: 10px;"/>饼 图
        </el-menu-item>
      </el-submenu>

      <el-submenu index="5">
        <template slot="title">
          <img src="../../../assets/img/data-structure/d-SpatialData.png" 
          style="width: 20px; height: 20px; margin-right: 10px;"/>
          <span slot="title">三维数据</span>
        </template>
        <el-menu-item index="5-1" @click="changeView(7)">
           <img src="../../../assets/img/echarts/echarts-scatter.png" 
           style="width: 20px; height: 20px; margin-right: 10px;"/>
          散点图
        </el-menu-item>
        <el-menu-item index="5-2" @click="changeView(8)">
           <img src="../../../assets/img/echarts/echarts-map.png" 
           style="width: 20px; height: 20px; margin-right: 10px;"/>
          地理图
        </el-menu-item>
      </el-submenu>

      <el-submenu index="6">
        <template slot="title">
          <img src="../../../assets/img/data-structure/multidimensionalData.png" style="width: 23px; height: 15px; margin-right: 10px;"/>
          <span slot="title">多维数据</span>
        </template>
         <el-menu-item index="6-1" @click="changeView(9)">
           <img src="../../../assets/img/echarts/echarts-radar.png" 
           style="width: 25px; height: 25px; margin-right: 10px;"/>
          雷达图
        </el-menu-item>
      </el-submenu>

      <el-submenu index="7">
        <template slot="title">
          <img src="../../../assets/img/data-structure/gridData.png" style="width: 20px; height: 20px; margin-right: 10px;"/>
          <span slot="title">网格数据</span>
        </template>
      </el-submenu>

      <el-submenu index="8">
        <template slot="title">
          <img src="../../../assets/img/data-structure/hierarchicalData.png" style="width: 20px; height: 20px; margin-right: 10px;"/>
          <span slot="title">层次数据</span>
        </template>
        <el-menu-item index="8-1" @click="changeView(11)">
           <img src="../../../assets/img/echarts/echarts-sunburst.png" 
           style="width: 25px; height: 25px; margin-right: 10px;"/>
           旭日图
        </el-menu-item>
      </el-submenu>
      
    </el-menu>
  </div>
</template>

<script>

export default {
  name: 'leftNavBar',
  data() {
      return {
        isCollapse: true
      };
  },
  methods: {
    changeView (index) {
      if(index==1) {this.$router.push('/Overview')}
      else if(index==2) this.$router.push('/DataSet')
      else if(index==3) this.$router.push('/ChartAnalysis')
      else if(index==4) this.$router.push('/EchartsHistogram')
      else if(index==5) this.$router.push('/EchartsLine')
      else if(index==6) this.$router.push('/EchartsPie')
      else if(index==7) this.$router.push('/EchartsScatter')
      else if(index==9) this.$router.push('/EchartsRadar')
      else if(index==11) this.$router.push('/EchartsSunburst')
    }
  }
}
</script>

<style>
.expand {
  margin-left: -143px;
  margin-bottom: -40px;
}
.collapse {
  margin-left: 5px;
}
.el-radio-button {
  position: relative;
  width: 8px;
}
</style>
