<!--  雷达图  -->
<template>
  <div id="radarMap" class='radarMap' :style="{width: chart_width + 'px', height: chart_height + 'px'}"></div>
</template>

<script>
export default {
  name: 'radarMap',
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
      let myChart = this.$echarts.init(document.getElementById('radarMap'))
      myChart.setOption({
    title: {
        text: '浏览器占比变化',
        textStyle: {
          fontSize: 14
        },
        subtext: '纯属虚构',
        top: 10,
        left: 10
    },
    tooltip: {
        trigger: 'item',
        backgroundColor : 'rgba(0,0,250,0.2)'
    },
    legend: {
        type: 'scroll',
        bottom: 10,
        data: (function (){
            var list = [];
            for (var i = 1; i <=28; i++) {
                list.push(i + 2000 + '');
            }
            return list;
        })()
    },
    visualMap: {
        top: 'middle',
        right: 10,
        color: ['red', 'yellow'],
        calculable: true
    },
    radar: {
       indicator : [
           { text: 'IE8-', max: 400},
           { text: 'IE9+', max: 400},
           { text: 'Safari', max: 400},
           { text: 'Firefox', max: 400},
           { text: 'Chrome', max: 400}
        ]
    },
    series : (function (){
        var series = [];
        for (var i = 1; i <= 28; i++) {
            series.push({
                name:'浏览器（数据纯属虚构）',
                type: 'radar',
                symbol: 'none',
                lineStyle: {
                    width: 1
                },
                emphasis: {
                    areaStyle: {
                        color: 'rgba(0,250,0,0.3)'
                    }
                },
                data:[
                  {
                    value:[
                        (40 - i) * 10,
                        (38 - i) * 4 + 60,
                        i * 5 + 10,
                        i * 9,
                        i * i /2
                    ],
                    name: i + 2000 + ''
                  }
                ]
            });
        }
        return series;
    })()
})
    }
  }
}
</script>

<style scoped>
.radarMap {
  margin:0 auto;
}
</style>
