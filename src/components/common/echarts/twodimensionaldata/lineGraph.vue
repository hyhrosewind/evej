<!--  折线图  -->
<template>
  <div id="lineGraph" class='lineGraph' :style="{width: chart_width + 'px', height: chart_height + 'px'}"></div>
</template>

<script>

export default {
  name: 'lineGraph',
  data() {
    return {
      option: {
        title: {
          text: '折线图 - 二维数据',
          textStyle: {
            fontSize: 14
          }
        },
        color: ['	rgba(0,84,255,.5)'],
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: this.x_data
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: this.series_data,
        type: 'line',
        areaStyle: {}
     }]
    }
    }
  },
  props: {
    chart_width: {
      type: Number,
      default: 520
    },
    chart_height: {
      type: Number,
      default: 470
    },
    x_data: {
      type: Array,
      default: () => {
        return ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      }
    },
    series_data: {
      type: Array,
      default: () => {
        return [820, 932, 901, 934, 1290, 1330, 1320]
      }
    }
  },
  watch: {
    option: {
      handler(newVal, oldVal) {
        if (this.chart) {
          if (newVal) {
            this.chart.setOption(newVal)
          }else{
            this.chart.setOption(oldVal)
          }
          }else{
            this.init()
        }
      },
      deep: true
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      let myChart = this.$echarts.init(document.getElementById('lineGraph'))
      myChart.clear()
      myChart.setOption(this.option)
    }
  }
}
</script>

<style>
.lineGraph {
  margin:0 auto;
}
</style>
