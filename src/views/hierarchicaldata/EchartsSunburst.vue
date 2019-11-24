<!--  层次数据 旭日图  -->
<template>
  <div class="echartInfo">
    <sunburst/>
  </div>
</template>

<script>

import sunburst from 'components/common/echarts/hierarchicaldata/sunburst'

export default {
  name: 'EchartsSunburst',
  components: {
    sunburst
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
