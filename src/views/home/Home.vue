<template>
  <div class="dashboard">
    <el-container>
      <el-header><headNavBar/></el-header>
      <el-container>
        <el-aside width="160px"><leftNavBar/></el-aside>
        <el-main>
          <pageHeader :detail="this.$route.name"/>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import leftNavBar from 'components/content/leftnavbar/leftNavBar'
import headNavBar from 'components/content/headnavbar/headNavBar'
import pageHeader from 'components/content/pageheader/pageHeader'

export default {
  name: 'Home',
  components: {
    leftNavBar,
    headNavBar,
    pageHeader
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
    border: 1px solid rgba(62,63,99,.08);
    background: rgba(62,63,99,.17);
  }
  
  .el-aside {
    color: #333;
    text-align: center;
    padding-top: 10px;
    border-right: 1px solid rgba(62,63,99,.2);
    border-radius: 10px;
    margin-top: -2px;
  }
  
  .el-main {
    margin: 0px;
    padding: 20px;
    color: #333;
    text-align: center;
  }

</style>
