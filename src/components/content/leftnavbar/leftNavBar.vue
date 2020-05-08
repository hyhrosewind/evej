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
      
    </el-menu>
  </div>
</template>

<script>

export default {
  name: 'leftNavBar',
  data() {
      return {
        isCollapse: true
      }
  },
  methods: {
    changeView (index) {
      if(index==1) {this.$router.push('/Overview')}
      else if(index==2) this.$router.push('/DataSet')
      else if(index==3) this.$router.push('/ChartAnalysis')
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
