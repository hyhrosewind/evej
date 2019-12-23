<!-- 数据集 -->
<template>
  <div>
    <div class="dataSetInfo">
      <selectData/>
      <dataSetTable/>
    </div>
  </div>
</template>

<script>

import selectData from 'components/content/dialog/selectData'
import dataSetTable from 'components/content/dataset/dataSetTable'

export default {
  name: 'DataSet',
  components: {
    selectData,
    dataSetTable
  }
}
</script>

<style scoped>
.dataSetInfo {
  margin-top: 10px;
  padding: 0px;
  height: 540px;
  text-align: center;
}
</style>