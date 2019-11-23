<!--  三维数据 散点图  -->
<template>
  <div class="echartInfo">
    <scatter/>
  </div>
</template>

<script>

import scatter from 'components/common/echarts/dspatialData/scatter'

export default {
  name: 'EchartsScatter',
  components: {
    scatter
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
