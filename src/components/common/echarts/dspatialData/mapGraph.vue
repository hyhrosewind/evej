<!--  地图 -->
<template>
  <div id="mapGraph" class='mapGraph' :style="{width: chart_width + 'px', height: chart_height + 'px'}"></div>
</template>

<script>

export default {
  name: 'mapGraph',
   props: {
    chart_width: {
      type: Number,
      default: 520
    },
    chart_height: {
      type: Number,
      default: 470
    },
  },
  mounted () {
    this.drawLine()
  },
  methods: {
    drawLine () {
    //   let myChart = this.$echarts.init(document.getElementById('mapGraph'))
    }
  }
}
</script>

<style scoped>
.mapGraph {
  margin:0 auto;
}
</style>
