<template>
  <div class="dashboard">
    <el-container>
      <el-header><headNavBar/></el-header>
      <el-container>
        <el-aside width="160px"><leftNavBar/></el-aside>
        <el-main><router-view/></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import leftNavBar from 'components/content/leftnavbar/leftNavBar'
import headNavBar from 'components/content/headnavbar/headNavBar'

export default {
  name: 'Home',
  components: {
    leftNavBar,
    headNavBar
  }
}
</script>

<style scoped>

  .dashboard {
    margin: 0px;
    padding: 0px;
  }

  .el-header {
    height: 60px;
    margin: 0px;
    padding: 0px;
    border:2px solid rgba(62,63,99,.2);
  }
  
  .el-aside {
    color: #333;
    text-align: center;
    line-height: 20px;
    padding-top: 10px;
    border:2px solid rgba(62,63,99,.2);
    border-radius: 10px;
    margin-top: -2px;
  }
  
  .el-main {
    color: #333;
    text-align: center;
    line-height: 20px;
    /* background: rgba(45,26,107,.4) */
  }

</style>
