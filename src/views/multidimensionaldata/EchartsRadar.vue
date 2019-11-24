<!--  多维数据 雷达图 -->
<template>
  <div class="echartInfo">
    <radarMap/>
  </div>
</template>

<script>

import radarMap from 'components/common/echarts/multidimensionaldata/radarMap'

export default {
  name: 'EchartsRadar',
  components: {
    radarMap
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
