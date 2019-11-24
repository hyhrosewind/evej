<!--  二维数据 饼图 -->
<template>
  <div class="echartInfo">
    <pieGraph/>
  </div>
</template>

<script>

import pieGraph from 'components/common/echarts/twodimensionaldata/pieGraph'

export default {
  name: 'EchartsPie',
  components: {
    pieGraph
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
