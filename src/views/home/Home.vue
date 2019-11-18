<template>
  <div class="dashboard">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="160px">
          <leftNavBar/>
        </el-aside>
        <el-main>Main
          <twoDimension/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import leftNavBar from 'components/content/leftnavbar/leftNavBar'

import twoDimension from 'views/nav1/TwoDimension'

export default {
  name: 'Home',
  components: {
    leftNavBar,
    twoDimension
  }
}
</script>

<style scoped>

  .dashboard {
    height: 625px;
  }

  .el-header {
    text-align: center;
    line-height: 60px;
    background: rgba(45,26,107,.2)
  }
  
  .el-aside {
    color: #333;
    text-align: center;
    line-height: 20px;
    background: rgba(38, 20, 95, 0.3)
  }
  
  .el-main {
    color: #333;
    text-align: center;
    line-height: 20px;
    background: rgba(45,26,107,.4)
  }

</style>
