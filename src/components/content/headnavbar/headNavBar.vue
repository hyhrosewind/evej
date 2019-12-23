<template>
  <div class="head-nav">
    <div class="head-logo">
      <img src="../../../assets/img/logo/evej.png" style="width: 40px; height: 40px; "/>
    </div>
    <div class="head-title">
      <h2>数据可视化平台</h2>
    </div>
    <div class="to-github">
      <el-tooltip class="item" effect="dark" content="访问github" placement="top">
      <a :href='github' target="_blank">
        <img src="../../../assets/img/github/github.png" style="width: 24px; height: 24px; "/>
      </a>
      </el-tooltip>
    </div>
    <div class="userinfo">
      <el-container>
        <el-header>
          <el-dropdown>
            <div>
              <img src="../../../assets/img/users/user.png" style="width: 24px; height: 24px; "/>
            </div>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>info</el-dropdown-item>
              <el-dropdown-item>pass</el-dropdown-item>
              <el-dropdown-item>logout</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-header>
      </el-container>
    </div>
  </div>
</template>

<script>
import {github} from 'utils/env'

export default {
  data() {
    return {
      isCollapse: true,
      github
    }
  }
}
</script>

<style scoped>

.head-nav {
  position: absolute;
  height: 60px;
  padding: 12px;
  margin: 0px;
  box-sizing: border-box;
}

.head-logo {
  position: absolute;
  margin-top: -5px;
}

.head-title {
  position: absolute;
  color: 	rgba(16,17,36,1);
  margin-left: 65px;
}

.to-github {
  position: absolute;
  margin-left: 1175px;
  padding: 2px;
}

.userinfo {
  position: relative;
  padding: 2px;
  width: 45px;
  height: 45px;
  margin-left: 1225px;
}

</style>