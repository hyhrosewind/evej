<!--  二维数据 漏斗图 -->
<template>
  <div class="echartInfo">
    <funnelGraph/>
  </div>
</template>

<script>

import funnelGraph from 'components/common/echarts/twodimensionaldata/funnelGraph'

export default {
  name: 'EchartsFunnel',
  components: {
    funnelGraph
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
