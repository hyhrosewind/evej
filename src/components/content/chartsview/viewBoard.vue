<template>
  <div class="view_board">
    <el-container>
      <el-header>
        <viewHeader @deliveryShow="handleShow"/>
      </el-header>
      <el-container>
        <el-aside width="180px"><selectCharts/></el-aside>
        <el-main>
          <mainAddCharts/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import viewHeader from 'components/content/chartsview/viewHeader'
import selectCharts from 'components/content/chartsview/selectCharts'
import mainAddCharts from 'components/content/chartsview/mainAddCharts'

export default {
  name: 'viewBoard',
  methods: {
    handleShow() {
      this.$emit("deliveryShow")
    }
  },
  components: {
    viewHeader,
    selectCharts,
    mainAddCharts
  }
}
</script>

<style scoped>
.view_board {
  position: absolute;
  margin: 0px;
  padding: 0px;
  width: 1160px;
  height: 540px;
  background: #fff;
  z-index: 2
}

.el-header {
  position: relative;
  height: 60px;
  margin: 0px;
  padding: 0px;
  border: 1px solid rgba(62,63,99,.08);
  border-radius: 5px;
  background: rgba(62,63,99,.04);
}

.el-aside {
  position: absolute;
  color: #333;
  text-align: center;
  height: 502px;
  padding-top: 10px;
  border-left: 1px solid rgba(62,63,99,.2);
  border-right: 1px solid rgba(62,63,99,.2);
  border-radius: 10px;
  margin-top: -2px;
}

.el-main {
  position: absolute;
  margin-left: 180px;
  width: 980px;
  height: 502px;
  padding: 10px;
  color: #333;
  text-align: center;
}
</style>
