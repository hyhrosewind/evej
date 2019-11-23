<!--  二维数据 折线图 -->
<template>
  <div class="echartInfo">
    <lineGraph/>
  </div>
</template>

<script>

import lineGraph from 'components/common/echarts/twodimensionaldata/lineGraph'

export default {
  name: 'EchartsLine',
  components: {
    lineGraph
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
