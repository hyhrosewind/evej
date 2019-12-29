<!--  网状数据 关系图  -->
<template>
  <div class="echartInfo">
    <gridGraph/>
  </div>
</template>

<script>
import gridGraph from 'components/common/echarts/griddata/gridGraph'

export default {
  name: 'EchartsRelate',
  components: {
    gridGraph
  }
}
</script>

<style scoped>
.echartInfo {
  margin: 20px;
  padding: 20px;
  height: 540px;
  text-align: center;
}
</style>
