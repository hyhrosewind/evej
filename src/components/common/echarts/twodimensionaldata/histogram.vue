<!--  柱状图  -->
<template>
  <div id="histogram" class='histogram' :style="{width: chart_width + 'px', height: chart_height + 'px'}"></div>
</template>

<script>
export default {
  name: 'histogram',
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
    randomData() {
      return Math.round(Math.random()*200);
    },
    drawLine () {
      let myChart = this.$echarts.init(document.getElementById('histogram'))
      myChart.setOption({
        title: {
          text: '某地区蒸发量和降水量',
          textStyle: {
            fontSize: 14
          }
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['蒸发量', '降水量']
        },
        toolbox: {
          show: true,
          feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
          }
        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '蒸发量',
            type: 'bar',
            data: [this.randomData(), this.randomData(), this.randomData(),
            this.randomData(), this.randomData(), this.randomData(), this.randomData(),
            this.randomData(), this.randomData(), this.randomData(), this.randomData(), this.randomData()],
            markPoint: {
              data: [
                {type: 'max', name: '最大值'},
                {type: 'min', name: '最小值'}
              ]
            },
            markLine: {
              data: [
                {type: 'average', name: '平均值'}
              ]
            }
          },
          {
            name: '降水量',
            type: 'bar',
            data: [this.randomData(), this.randomData(), this.randomData(),
            this.randomData(), this.randomData(), this.randomData(), this.randomData(),
            this.randomData(), this.randomData(), this.randomData(), this.randomData(), this.randomData()],
            markPoint: {
              data: [
                {name: '年最高', value: 182.2, xAxis: 7, yAxis: 183},
                {name: '年最低', value: 2.3, xAxis: 11, yAxis: 3}
              ]
            },
            markLine: {
              data: [
                {type: 'average', name: '平均值'}
              ]
            }
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
