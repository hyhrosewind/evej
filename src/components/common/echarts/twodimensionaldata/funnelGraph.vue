<!--  漏斗图  -->
<template>
  <div id="funnelGraph" class='funnelGraph' :style="{width: chart_width + 'px', height: chart_height + 'px'}"></div>
</template>

<script>

export default {
  name: 'funnelGraph',
  data() {
    return {
      option: {
        title: {
          text: '漏斗图 - 二维数据',
          left: 'center',
          top: 20,
          x: 'left',
          y: 'top',
          textStyle: {
            fontFamily: 'Courier New',
            fontSize: 20,
            color: '#000000',
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c}%"
        },
        toolbox: {
          feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
          }
        },
        legend: {
        },
        calculable: true,
            series: [
        {
            name:'漏斗图',
            type:'funnel',
            left: '10%',
            top: 60,
            bottom: 60,
            width: '80%',
            min: 0,
            max: 100,
            minSize: '0%',
            maxSize: '100%',
            sort: 'descending',
            gap: 2,
            label: {
                show: true,
                position: 'inside'
            },
            labelLine: {
                length: 10,
                lineStyle: {
                    width: 1,
                    type: 'solid'
                }
            },
            itemStyle: {
                borderColor: '#fff',
                borderWidth: 1
            },
            emphasis: {
                label: {
                    fontSize: 20
                }
            },
            data: this.funnel_data
        }
      ]
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
    funnel_data: {
      type: Array,
      default: () => {
        return [
          {value: 60, name: '访问'},
          {value: 40, name: '咨询'},
          {value: 20, name: '订单'},
          {value: 80, name: '点击'},
          {value: 100, name: '展现'}
        ]
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
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      let myChart = this.$echarts.init(document.getElementById('funnelGraph'))
      myChart.clear()
      myChart.setOption(this.option)
    }
  }
}
</script>

<style>
.funnelGraph {
  margin:0 auto;
}
</style>
