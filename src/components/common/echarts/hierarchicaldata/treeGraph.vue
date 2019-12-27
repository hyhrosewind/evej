<!--  树图  -->
<template>
  <div id="treeGraph" class='treeGraph' :style="{width: chart_width + 'px', height: chart_height + 'px'}"></div>
</template>

<script>
export default {
  name: 'treeGraph',
  props: {
    chart_width: {
      type: Number,
      default: 520
    },
    chart_height: {
      type: Number,
      default: 370
    },
    tree_data: {
      type: Array,
      default: () => {
        return [
          {
                    "name": "root",
                    "children": [
                      {
                        "name": "a",
                        "children": [
                          {"name": "a1"},
                          {"name": "a2"},
                          {"name": "a3"},
                          {"name": "a4"}
                        ]
                      },
                      {
                        "name": "b",
                        "children": [
                          {"name": "b1"},
                          {"name": "b2"},
                          {"name": "b3"},
                          {"name": "b4"}
                        ]
                      },
                      {
                        "name": "c",
                        "children": [
                          {"name": "c1"},
                          {"name": "c2"},
                          {"name": "c3"}
                        ]
                      },
                      {
                        "name": "d",
                        "children": [
                          {"name": "d1"},
                          {"name": "d2"}
                        ]
                      }
                    ]
                  }
        ]
      }
    }
  },
  mounted () {
    this.drawLine()
  },
  methods: {
    randomData() {
      return Math.round(Math.random()*200);
    },
    drawLine () {
      let myChart = this.$echarts.init(document.getElementById('treeGraph'))
      myChart.setOption({
        title: {
          text: '树图 - 层次数据',
          textStyle: {
            fontSize: 14
          }
        },
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
        },
        series: [
            {
                type: 'tree',

                data: this.tree_data,

                top: '1%',
                left: '7%',
                bottom: '1%',
                right: '20%',

                symbolSize: 7,

                label: {
                    normal: {
                        position: 'left',
                        verticalAlign: 'middle',
                        align: 'right',
                        fontSize: 9
                    }
                },

                leaves: {
                    label: {
                        normal: {
                            position: 'right',
                            verticalAlign: 'middle',
                            align: 'left'
                        }
                    }
                },

                expandAndCollapse: true,
                animationDuration: 550,
                animationDurationUpdate: 750,
                initialTreeDepth: 6
            }
        ]
      })
    }
  }
}
</script>

<style scoped>
.treeGraph {
  margin:0 auto;
}
</style>
