<!--  漏斗图  -->
<template>
  <div id="funnelGraph" class='funnelGraph' :style="{width: chart_width + 'px', height: chart_height + 'px'}"></div>
</template>

<script>

export default {
  name: 'funnelGraph',
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
  mounted () {
    this.drawLine()
  },
  methods: {
    drawLine () {
      let myChart = this.$echarts.init(document.getElementById('funnelGraph'))
      
      myChart.setOption({
        title: {
          text: '漏斗图 - 二维数据',
          left: 'center',
          top: 20,
          textStyle: {
            fontSize: 14
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
      });
    }
  }
}
</script>

<style>
.funnelGraph {
  margin:0 auto;
}
</style>
