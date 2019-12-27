<!--  散点图 -->
<template>
  <div id="scatter" class='scatter' :style="{width: chart_width + 'px', height: chart_height + 'px'}"></div>
</template>

<script>
import 'echarts-gl'

export default {
  name: 'scatter',
   props: {
    chart_width: {
      type: Number,
      default: 400
    },
    chart_height: {
      type: Number,
      default: 370
    },
    scatter_data: {
      type: Array,
      default: () => {
        return [
          [12, 23, 43],[43, 545, 65],[92, 23, 33],
          [68, 23, 33],[92, 58, 33],[92, 23, 12],
          [63, 23, 28],[37, 90, 33],[40, 23, 12]
        ]
      }
    }
  },
  mounted () {
    this.drawLine()
  },
  methods: {
    drawLine () {
      let myChart = this.$echarts.init(document.getElementById('scatter'))
      
      myChart.setOption({
        title: {
          text: '3D散点图 - 三维数据',
          textStyle: {
            fontSize: 14
          }
        },
        xAxis3D:{
          type: 'value'
        },
        yAxis3D:{
          type: 'value'
        },
        zAxis3D:{
          type: 'value'
        },
        grid3D:{},
        series:[
          {
            type: 'scatter3D', 
            data: this.scatter_data,
            lineStyle: {
              width: 4
            }
          }
        ]
      })
    }
  }
}
</script>

<style scoped>
.scatter {
  margin:0 auto;
}
</style>
