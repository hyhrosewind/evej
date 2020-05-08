<!--  饼图  -->
<template>
  <div id="pieGraph" class='pieGraph' :style="{width: chart_width + 'px', height: chart_height + 'px'}"></div>
</template>

<script>

export default {
  name: 'pieGraph',
  data() {
    return {
      option: {
    title: {
        text: '饼图 - 二维数据',
        x: 'left',
        y: 'top',
        textStyle: {
          fontFamily: 'Courier New',
          fontSize: 20,
          color: '#000000',
        }
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    series : [
        {
            name:'访问来源',
            type:'pie',
            color: [
                        'rgba(0,84,255,.5)', 'rgba(0,84,253,.6)',
                        'rgba(0,84,245,.3)', 'rgba(0,84,252,.22)',
                        'rgba(0,84,246,.4)', 'rgba(0,84,251,.7)',
                        'rgba(0,84,250,.4)', 'rgba(0,84,249,.8)',
                        'rgba(0,84,247,.44)', 'rgba(0,84,248,.26)'
                      ],
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
            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function () {
                return Math.random() * 200;
            }
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
      console.log('.....line标题横向位置位置:' + newval)
    },
    "$store.state.titleVertical": function (newval,oldval) {   //标题横向位置///////////////////////// 增
      this.option.title.y=newval
      console.log('...line标题纵向位置：' + newval)
    },
    "$store.state.wordFamily": function (newval,oldval) {
      this.option.title.textStyle.fontFamily=newval
      console.log('...line标题字体类别：' + newval)
    },
    "$store.state.titleColor":function (newval,oldval) {
      this.option.title.textStyle.color=newval
      console.log("....line标题字体颜色："+ newval)
    },
    "$store.state.wordSize": function (newval,oldval) {
      this.option.title.textStyle.fontSize=newval
      console.log('...line标题大小' + newval)
    },
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      let myChart = this.$echarts.init(document.getElementById('pieGraph'))
      myChart.clear()
      myChart.setOption(this.option)
    }
  }
}
</script>

<style>
.pieGraph {
  margin:0 auto;
}
</style>
