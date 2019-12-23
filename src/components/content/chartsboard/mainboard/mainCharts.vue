<template>
  <div class="main-charts" 
  :style="{backgroundImage:`url(${require('../../../../assets/img/chartanalysis/charts-search.png')})`}">
  </div>
</template>

<script>

export default {
  name: 'mainCharts',
  components: {
  }
}
</script>

<style scoped>
.main-charts {
  padding: 10px;
  margin-top: 20px;
  height: 500px;
  border: 4px solid rgba(28,46,94,.1);
  background-repeat: no-repeat;
  background-size: 30%;
  background-position: center;
}
</style>
