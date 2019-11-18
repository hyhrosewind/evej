<template>
  <div class="NavBar">
    <div class="radiobutton">
      <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
        <div class="expand"><el-radio-button plain :label="false">展开</el-radio-button></div>
        <div class="collapse"><el-radio-button plain :label="true">收起</el-radio-button></div>
      </el-radio-group>
    </div>
    <el-menu default-active="1" class="el-menu-vertical-demo" :collapse="isCollapse">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">二维数据</span>
        </template>
        <el-menu-item index="1-1">柱状图<slot name="nav1_1"></slot></el-menu-item>
        <el-menu-item index="1-2">散点图<slot name="nav1_2"></slot></el-menu-item>
        <el-menu-item index="1-3">折线图<slot name="nav1_3"></slot></el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">三维数据</span>
        </template>
        <el-menu-item index="2-1">柱状图</el-menu-item>
        <el-menu-item index="2-2">散点图</el-menu-item>
        <el-menu-item index="2-3">折线图</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">多维数据</span>
        </template>
        <el-menu-item index="3-1">柱状图</el-menu-item>
        <el-menu-item index="3-2">散点图</el-menu-item>
        <el-menu-item index="3-3">折线图</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">网格数据</span>
        </template>
        <el-menu-item index="4-1">柱状图</el-menu-item>
        <el-menu-item index="4-2">散点图</el-menu-item>
        <el-menu-item index="4-3">折线图</el-menu-item>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">层次数据</span>
        </template>
        <el-menu-item index="5-1">柱状图</el-menu-item>
        <el-menu-item index="5-2">散点图</el-menu-item>
        <el-menu-item index="5-3">折线图</el-menu-item>
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
