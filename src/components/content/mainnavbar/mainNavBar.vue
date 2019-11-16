<template>
  <div class="navBar">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="150px">Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>

export default {
  name: 'MainNavBar',
  components: {
  }
}
</script>

<style>
.el-header {
  color: #333;
  text-align: center;
  line-height: 60px;
  background: rgba(143,138,215,0.2);
}
  
.el-aside {
  color: #333;
  text-align: center;
  line-height: 550px;
  background: rgba(143,138,215,0.4);
}
  
.el-main {
  position: absolute;
  color: #333;
  text-align: center;
  line-height: 550px;
  margin-left: 150px;
  margin-top: -550px;
  width: 100%;
  background: rgba(143,138,215,0.6);
}
</style>
