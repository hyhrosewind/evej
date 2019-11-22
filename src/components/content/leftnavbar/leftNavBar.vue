<template>
  <div class="NavBar">
    <div class="radiobutton">
      <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
        <div class="expand"><el-radio-button plain :label="false">展开</el-radio-button></div>
        <div class="collapse"><el-radio-button plain :label="true">收起</el-radio-button></div>
      </el-radio-group>
    </div>
    <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="isCollapse">
      <el-menu-item index="1">
        <img src="../../../assets/img/dashboard/echarts-gauge.png" style="width: 20px; height: 20px; margin-right: 10px;"/>
        <span>导航首页</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <img src="../../../assets/img/dimensionality/dimensionality.png"  style="width: 20px; height: 20px; margin-right: 10px;"/>
          <span slot="title">二维数据</span>
        </template>
        <el-menu-item index="2-1" @click="changeView(1)">
          <img src="../../../assets/img/echarts/echarts-histogram.png" style="width: 20px; height: 20px; margin-right: 10px;"/>
          柱状图</el-menu-item>
        <el-menu-item index="2-2" @click="changeView(2)">
           <img src="../../../assets/img/echarts/echarts-scatter.png" style="width: 20px; height: 20px; margin-right: 10px;"/>
          散点图</el-menu-item>
        <el-menu-item index="2-3" @click="changeView(3)">
           <img src="../../../assets/img/echarts/echarts-line.png" style="width: 20px; height: 20px; margin-right: 10px;"/>折线图</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <img src="../../../assets/img/dimensionality/dimensionality.png" style="width: 20px; height: 20px; margin-right: 10px;"/>
          <span slot="title">三维数据</span>
        </template>
        <el-menu-item index="3-1" @click="changeView(4)">柱状图</el-menu-item>
        <el-menu-item index="3-2" @click="changeView(5)">散点图</el-menu-item>
        <el-menu-item index="3-3" @click="changeView(6)">折线图</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <img src="../../../assets/img/dimensionality/dimensionality.png" style="width: 20px; height: 20px; margin-right: 10px;"/>
          <span slot="title">多维数据</span>
        </template>
        <el-menu-item index="4-1" @click="changeView">柱状图</el-menu-item>
        <el-menu-item index="4-2" @click="changeView">散点图</el-menu-item>
        <el-menu-item index="4-3" @click="changeView">折线图</el-menu-item>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">
          <img src="../../../assets/img/dimensionality/dimensionality.png" style="width: 20px; height: 20px; margin-right: 10px;"/>
          <span slot="title">网格数据</span>
        </template>
        <el-menu-item index="5-1" @click="changeView">柱状图</el-menu-item>
        <el-menu-item index="5-2" @click="changeView">散点图</el-menu-item>
        <el-menu-item index="5-3" @click="changeView">折线图</el-menu-item>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title">
          <img src="../../../assets/img/dimensionality/dimensionality.png" style="width: 20px; height: 20px; margin-right: 10px;"/>
          <span slot="title">层次数据</span>
        </template>
        <el-menu-item index="6-1" @click="changeView">柱状图</el-menu-item>
        <el-menu-item index="6-2" @click="changeView">散点图</el-menu-item>
        <el-menu-item index="6-3" @click="changeView">折线图</el-menu-item>
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
      if(index==1) this.$router.replace("/TwoDimension")
      else if(index==2) this.$router.replace("/TwoDimension2")
      else if(index==3) this.$router.replace("/TwoDimension3")
    }
  },
  components: {
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
