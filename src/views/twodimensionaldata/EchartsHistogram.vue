<!--  二维数据 柱状图 -->
<template>
  <div>
    <div class="echartInfo">
      <histogram/>
    </div>
  </div>
</template>

<script>

import histogram from 'components/common/echarts/twodimensionaldata/histogram'

export default {
  name: 'EchartsHistogram',
  components: {
    histogram
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