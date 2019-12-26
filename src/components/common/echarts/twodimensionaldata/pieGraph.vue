<!--  折线图  -->
<template>
  <div id="pieGraph" class='pieGraph' :style="{width: chart_width + 'px', height: chart_height + 'px'}"></div>
</template>

<script>

export default {
  name: 'pieGraph',
  props: {
    chart_width: {
      type: Number,
      default: 520
    },
    chart_height: {
      type: Number,
      default: 470
    },
    pie_data: {
      type: Array,
      default: () => {
        return [
          {value:335, name:'直接访问'},
          {value:310, name:'邮件营销'},
          {value:274, name:'联盟广告'},
          {value:235, name:'视频广告'},
          {value:400, name:'搜索引擎'}
        ]
      }
    }
  },
  mounted () {
    this.drawLine()
  },
  methods: {
    drawLine () {
      let myChart = this.$echarts.init(document.getElementById('pieGraph'))
      
      myChart.setOption({

        color: ['	rgba(0,84,255,.5)'],

    title: {
        text: 'Customized Pie',
        left: 'center',
        top: 20,
        textStyle: {
            fontSize: 14
        }
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
          colorLightness: [0.5, 0.8]
        }
    },
    series : [
        {
            name:'访问来源',
            type:'pie',
            radius : '55%',
            center: ['50%', '50%'],
            data: this.pie_data.sort(function (a, b) { return a.value - b.value; }),
            roseType: 'radius',
            label: {
                normal: {
                    textStyle: {
                        color: '#000'
                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: 'rgba(0, 0, 0, 0.5)'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                }
            },
            itemStyle: {
                normal: {
                    color: '#c23531'
                }
            },

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function () {
                return Math.random() * 200;
            }
        }
    ]
});

    }
  }
}
</script>

<style>
.pieGraph {
  margin:0 auto;
}
</style>
