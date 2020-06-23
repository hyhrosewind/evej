<!--  柱状图  -->
<template>
  <div id="histogram" class='histogram' :style="{width: chart_width + 'px', height: chart_height + 'px'}"></div>
</template>

<script>
export default {
  name: 'histogram',
  data() {
    return {
      myChart: '',
      title_text: this.$store.state.chartTitle,
      option: {
        label: 'histogram',
        toolbox: {
          show: true,
          feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {
              show:true,
              excludeComponents : ['toolbox'],
              pixelRatio: 2
            }
          }
        },
        backgroundColor: 'rgba(255,255,255,1)',
        color: 'rgba(0,84,255,.5)',
        title: {
          text: '柱状图 - 二维数据',
          textStyle: {
            fontSize: 14
          }
        },
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
      }
    }
  },
  props: {
    chart_width: {
      type: Number,
      default: 530
    },
    chart_height: {
      type: Number,
      default: 410
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
    },
    changeOption: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  mounted () {
    this.init()
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
    title_text(val) {
      this.option.title.text = val
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
    },
    "$store.state.showFlag": function(val) {
      if(val=='histogram'){
        this.option = this.$store.state.selectedPreview
      }
    }
  },
  methods: {
    init() {
        this.myChart = this.$echarts.init(document.getElementById('histogram'))
        this.myChart.clear()
        this.$store.state.chartTitle = this.option.title.text
        this.$store.state.chartBackground = this.option.backgroundColor
        this.$store.state.itemColor = this.option.color
        if(JSON.stringify(this.changeOption)!='{}'&&this.$store.state.changeOption==false) {
          this.option = this.changeOption
        }
        this.myChart.setOption(this.option)
      }
  }
}
</script>

<style scoped>
.histogram {
  margin:0 auto;
}
</style>
