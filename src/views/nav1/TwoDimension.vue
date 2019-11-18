<!--柱状图 - 指数回归-->
<template>
   <div id="Chart" class='Chart'></div>
</template>

<script>
export default {
  name: 'twoDimension',
  mounted () {
    this.drawLine()
  },
  methods: {
    randomData() {
      return Math.round(Math.random()*200);
    },
    drawLine () {
      let myChart = this.$echarts.init(document.getElementById('Chart'))
      myChart.setOption({
        textStyle: {
          color: 'rgba(255, 255, 255, 0.6)'
        },
        title: {
          text: '某地区蒸发量和降水量',
          textStyle: {
            color: 'rgba(255, 255, 255, 0.6)'
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
.Chart {
  width: 550px;
  height: 450px;
  margin-left: 200px;
  margin-top: 20px;
}
</style>
