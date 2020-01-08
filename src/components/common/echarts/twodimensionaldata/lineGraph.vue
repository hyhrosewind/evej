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
        label: 'lineGraph',
        backgroundColor: 'rgba(255,255,255,1)',
        title: {
          text: '折线图 - 二维数据',
          textStyle: {
            fontSize: 14
          }
        },
        color: 'rgba(0,84,255,.5)',
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
    },
    changeOption: {
      type: Object,
      default: () => {
        return {}
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
    },
    "$store.state.chartTitle": function(val) {
      if(val!=this.option.title.text) {
        this.option.title.text = val
      }
    },
    "$store.state.chartBackground": function(val) {
      if(val!=this.option.backgroundColor) {
        this.option.backgroundColor = val
      }
    },
    "$store.state.itemColor": function(val) {
      if(val!=this.option.color) {
        this.option.color = val
      }
    },
    "$store.state.saveDataFlag": function(val) {
      if(val==true) {
        this.$store.state.saveChartsData.push(this.option)
      }
      this.$store.state.saveDataFlag = false
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      let myChart = this.$echarts.init(document.getElementById('lineGraph'))
      myChart.clear()
      this.$store.state.chartTitle = this.option.title.text
      this.$store.state.chartBackground = this.option.backgroundColor
      this.$store.state.itemColor = this.option.color
      if(JSON.stringify(this.changeOption)!='{}'&&this.$store.state.changeOption==false) {
          this.option = this.changeOption
        }
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
