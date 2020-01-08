<template>
  <div class="add_charts">
    <div class="drag_div" visible.sync="false">
      <div style="margin-bottom: 10px; ">拖拽图表</div>
      <draggable v-model="dimensionTags" :group="{name: 'charts'}" 
      @add="addDimension" @remove="deleteTags" draggable="false"
      style="height: 28px; text-align: left; padding: 2px; margin-left: 12px; ">
        <div v-for="index in dimensionTags" :key="index" style="width: 90px; "></div>
      </draggable>
    </div>
    <div class="show_charts">
      <div style="">
      <histogram v-if="chart_data[0].his_show" :chart_width="270" :chart_height="270" 
      :changeOption="chart_data[0].data"/>
      </div>
      <div>
      <lineGraph v-if="chart_data[1].line_show" :chart_width="270" :chart_height="270" 
      :changeOption="chart_data[1].data"/>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import histogram from 'components/common/echarts/twodimensionaldata/histogram'
import lineGraph from 'components/common/echarts/twodimensionaldata/lineGraph'

export default {
  name: 'mainAddCharts',
  data() {
    return {
      dimensionTags: [],
      chart_data: [{"his_show":false,"data":{}},{"line_show":false,"data":{}}]
    }
  },
  methods: {
    addDimension(evt) {
      for(let a in this.$store.state.saveChartsData){
        if(evt.item.innerText == this.$store.state.saveChartsData[a].title.text) {
          this.$store.state.selectCharts.push(this.$store.state.saveChartsData[a])
        }
      }
      let a = this.$store.state.selectCharts.length
      if(this.$store.state.selectCharts[a-1].label=='histogram') {
        this.chart_data[0].his_show = true
        this.chart_data[0].data = this.$store.state.selectCharts[a-1]
      }
      else if(this.$store.state.selectCharts[a-1].label=='lineGraph') {
        this.chart_data[1].line_show = true
        this.chart_data[1].data = this.$store.state.selectCharts[a-1]
      }
    },
    deleteTags(evt) {
    }
  },
  components: {
    draggable,
    histogram,
    lineGraph
  }
}
</script>

<style scoped>
.drag_div {
  position: absolute;
  margin: 0px;
  padding-top: 10px;
  width: 175px;
  height: 500px;
  background:  rgba(90,68,128,.01);
  border: 1px solid rgba(62,63,99,.08);
  border-radius: 5px;
  font-size: 0.8em;
  color: gray
}
.show_charts {
  position: absolute;
  margin-left: 190px;
  padding: 20px;
  width: 760px;
  height: 500px;
  background:  rgba(90,68,128,.05);
  border: 1px solid rgba(62,63,99,.08);
  border-radius: 5px;
}
</style>
