<!--  柱状图  -->
<template>
  <div id="histogram" class='histogram' :style="{width: chart_width + 'px', height: chart_height + 'px'}"></div>
</template>

<script>
export default {
  name: 'histogram',
  data() {
    return {
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
        return [10, 52, 200, 334, 390, 330, 220]
      }
    }
  },
  mounted () {
    this.init()
  },
  watch: {
  },
  methods: {
    init() {
      let myChart  = this.$echarts.init(document.getElementById('histogram'))
      myChart.setOption({
        color: ['	rgba(0,84,255,.5)'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : this.x_data,
            axisTick: {
              alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'直接访问',
            type:'bar',
            barWidth: '60%',
            data: this.series_data
        }
    ]
      })
    }
  }
}
</script>

<style scoped>
.histogram {
  margin:0 auto;
}
</style>
