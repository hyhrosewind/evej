<template>
  <div class="left-aside">
    <div class="data-set"><selectDataSet/></div>
    <div class="dimension"><selectDimension/></div>
    <div class="numerical"><selectNumerical/></div>
  </div>
</template>

<script>

import selectDataSet from 'components/content/chartsboard/leftaside/selectdataset/selectDataSet'
import selectDimension from 'components/content/chartsboard/leftaside/selectdimension/selectDimension'
import selectNumerical from 'components/content/chartsboard/leftaside/selectnumerical/selectNumerical'

export default {
  name: 'leftAside',
  components: {
    selectDataSet,
    selectDimension,
    selectNumerical
  }
}
</script>

<style scoped>
.left-aside {
  margin: 0px;
  padding: 0px;
}
</style>
