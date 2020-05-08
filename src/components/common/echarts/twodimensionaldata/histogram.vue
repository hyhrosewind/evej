<!--  柱状图  -->
<template>
  <div id="histogram" class='histogram' :style="{width: chart_width + 'px', height: chart_height + 'px'}"></div>
</template>

<script>
  import echarts from "echarts";
export default {
  name: 'histogram',
  data() {
    return {
      radiuss: 10,
      title_text: this.$store.state.chartTitle,
      option: {
        backgroundColor: 'rgba(255,255,255,1)',
        color: 'rgba(0,84,255,.5)',
        title: {
          text: '柱状图 - 二维数据',
          x: 'left',
          y: 'top',
          textStyle: {
            fontFamily: 'Courier New',
            fontSize: 20,
            color: '#000000',
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
            },
          axisLabel: {
            color: '#000000', // 刻度标签
            fontSize: 10
          },
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel: {
              color: '#000000', // 刻度标签
              fontSize: 10
            },
        }
    ],
    series : [
        {
            name:'直接访问',
            type:'bar',
            barWidth: '60%',
            data: this.series_data,
            itemStyle: {
              barBorderRadius: 0
            }

        },

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
  },
  mounted () {
    this.init()
    this.radiuss=10
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
    "$store.state.titleAcross": function(newval, oldval){  //标题横向位置///////////////////////////// 增
      this.option.title.x=newval
      console.log('.....histogram标题横向位置位置:' + newval)
    },
    "$store.state.titleVertical": function (newval,oldval) {   //标题横向位置///////////////////////// 增
      this.option.title.y=newval
      console.log('...histogram标题纵向位置：' + newval)
    },
    "$store.state.wordFamily": function (newval,oldval) {
      this.option.title.textStyle.fontFamily=newval
      console.log('...histogram标题字体类别：' + newval)
    },
    "$store.state.titleColor":function (newval,oldval) {
      this.option.title.textStyle.color=newval
      console.log("....histogram标题字体颜色："+ newval)
    },
    "$store.state.wordSize": function (newval,oldval) {
      this.option.title.textStyle.fontSize=newval
      console.log('...histogram标题大小' + newval)
    },
   "$store.state.rad": function (newval,oldval) {
    console.log('...histogram圆角' + newval)
     this.option.series[0].itemStyle.barBorderRadius= newval
    },
    "$store.state.tableColor": function (newval,oldval) {
      console.log('...histogram刻度标签颜色' + newval)
      this.option.xAxis[0].axisLabel.color= newval
      this.option.yAxis[0].axisLabel.color= newval
    },
    "$store.state.tableSi": function (newval,oldval) {
      console.log('...histogram刻度标签大小' + newval)
      this.option.xAxis[0].axisLabel. fontSize= newval
      this.option.yAxis[0].axisLabel. fontSize= newval
    }


  },
  methods: {
    init() {
      let myChart  = this.$echarts.init(document.getElementById('histogram'))
      myChart.clear()
      this.$store.state.chartTitle = this.option.title.text
      this.$store.state.chartBackground = this.option.backgroundColor
      this.$store.state.itemColor = this.option.color
      myChart.setOption(this.option)
    }
  }
}
</script>

<style scoped>
.histogram {
  margin:0 auto;
}
</style>
