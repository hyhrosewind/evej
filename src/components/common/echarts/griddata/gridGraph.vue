<!--  关系图  -->
<template>
  <div id="gridGraph" class='gridGraph' :style="{width: chart_width + 'px', height: chart_height + 'px'}"></div>
</template>

<script>
export default {
  name: 'gridGraph',
  data() {
    return {
    }
  },
  props: {
    chart_width: {
      type: Number,
      default: 530
    },
    chart_height: {
      type: Number,
      default: 410
    },
    grid_data: {
      type: Object,
      default: () => {
        return {
        "type": "force",
        "categories": [
        {
            "name": "人物1",
            "base": "人物1",
        },
        {
            "name": "人物2",
            "base": "人物2",
        },
        {
            "name": "人物3",
            "base": "人物3",
        }
      ],
      "nodes": [
        {
            "name": "人物1-1",
            "category": 0
        },
        {
            "name": "人物1-2",
            "category": 0
        },
        {
            "name": "人物1-3",
            "category": 0
        },
        {
            "name": "人物1-4",
            "category": 0
        },
        {
          "name": "人物2-1",
          "category": 1
        },
        {
          "name": "人物2-2",
          "category": 1
        },
        {
          "name": "人物2-3",
          "category": 1
        },
         {
          "name": "人物3-1",
          "category": 2
        },
         {
          "name": "人物3-2",
          "category": 2
        },
         {
          "name": "人物3-3",
          "category": 2
        },
         {
          "name": "人物3-4",
          "category": 2
        },
         {
          "name": "人物3-5",
          "category": 2
        }
    ],
    "links": [
        {
            "source": 0,
            "target": 1 
        },
        {
            "source": 0,
            "target": 2
        },
        {
            "source": 0,
            "target": 3
        },
        {
            "source": 3,
            "target": 4
        },
        {
            "source": 4,
            "target": 5
        },
        {
            "source": 4,
            "target": 6
        },
        {
            "source": 5,
            "target": 6
        },
        {
            "source": 2,
            "target": 7
        },
        {
            "source": 7,
            "target": 8
        },
        {
            "source": 7,
            "target": 9
        },
        {
            "source": 7,
            "target": 10
        },
        {
            "source": 7,
            "target": 11
        }
  ]
}
      }
    }
  },
  mounted () {
    this.init()
  },
  watch: {
  },
  methods: {
    init() {
      let myChart  = this.$echarts.init(document.getElementById('gridGraph'))
      myChart.showLoading()
      var webkitDep = this.grid_data

myChart.hideLoading()

      myChart.setOption({
        title: {
          text: '关系图 - 网状数据',
          textStyle: {
            fontSize: 14
          }
        },
        legend: {
          data: ['人物1','人物2','人物3']
        },
        color:['#5EA25E','#EE6911','#6F2BD5','#09F7F7','#EE113D'],
        series: [{
            type: 'graph',
            layout: 'force',
            animation: false,
            label: {
                normal: {
                    show:true,
                    position: 'right'
                }
            },
            draggable: true,
            data: webkitDep.nodes.map(function (node, idx) {
                node.id = idx;
                return node;
            }),
            categories: webkitDep.categories,
            force: {
                edgeLength: 105,
                repulsion: 100  
            },
            edges: webkitDep.links
        }]
      })
    }
  }
}
</script>

<style scoped>
.gridGraph {
  margin:0 auto;
}
</style>
