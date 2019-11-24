<!--  旭日图  -->
<template>
  <div id="sunburst" class='sunburst' :style="{width: chart_width + 'px', height: chart_height + 'px'}"></div>
</template>

<script>
export default {
  name: 'sunburst',
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
      let myChart = this.$echarts.init(document.getElementById('sunburst'))

      var data = [{
    name: 'Grandpa',
    children: [{
        name: 'Uncle Leo',
        value: 15,
        children: [{
            name: 'Cousin Jack',
            value: 2
        }, {
            name: 'Cousin Mary',
            value: 5,
            children: [{
                name: 'Jackson',
                value: 2
            }]
        }, {
            name: 'Cousin Ben',
            value: 4
        }]
    }, {
        name: 'Father',
        value: 10,
        children: [{
            name: 'Me',
            value: 5
        }, {
            name: 'Brother Peter',
            value: 1
        }]
    }]
}, {
    name: 'Nancy',
    children: [{
        name: 'Uncle Nike',
        children: [{
            name: 'Cousin Betty',
            value: 1
        }, {
            name: 'Cousin Jenny',
            value: 2
        }]
    }]
}]

      myChart.setOption({
    series: {
        type: 'sunburst',
        // highlightPolicy: 'ancestor',
        data: data,
        radius: [0, '90%'],
        label: {
            rotate: 'radial'
        }
    }
})
    }
  }
}
</script>

<style scoped>
.sunburst {
  margin:0 auto;
}
</style>
