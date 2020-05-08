<template>
  <div class="add_charts">
    <div class="drag_div" visible.sync="false">
      <div style="margin-bottom: 10px; ">拖拽图表</div>
      <draggable v-model="chartsTags" :group="{name: 'charts'}" 
      @add="addCharts" @remove="deleteTags" draggable="false"
      style="height: 28px; text-align: left; padding: 2px; margin-left: 12px; ">
        <div v-for="index in chartsTags" :key="index" style="width: 90px; ">
          <div>{{index}}</div>
        </div>
      </draggable>
    </div>
    <div class="show_charts">
      <div style="text-align: left; "><el-input v-model="inputTitle" @change="changeTitle"
      size="mini" style="width: 120px; margin-left: 5px; "></el-input></div>

      <el-row :gutter="20">
        <el-col :span="8"><div class="grid-content bg-purple">
          <component v-if="charttemp[0].show" :is="charttemp[0].name" :changeOption="charttemp[0].data" 
          :chart_width="chartsSize.width" :chart_height="chartsSize.height"></component>
          </div></el-col>
        <el-col :span="8"><div class="grid-content bg-purple">
          <component v-if="charttemp[1].show" :is="charttemp[1].name" :changeOption="charttemp[1].data"
            :chart_width="chartsSize.width" :chart_height="chartsSize.height"></component>
          </div></el-col>
        <el-col :span="8"><div class="grid-content bg-purple">
          <component v-if="charttemp[2].show" :is="charttemp[2].name" :changeOption="charttemp[2].data"
          :chart_width="chartsSize.width" :chart_height="chartsSize.height"></component>
          </div></el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col :span="8"><div class="grid-content bg-purple">
          <component v-if="charttemp[3].show" :is="charttemp[3].name" :changeOption="charttemp[3].data"
          :chart_width="chartsSize.width" :chart_height="chartsSize.height"></component>
          </div></el-col>
        <el-col :span="8"><div class="grid-content bg-purple">
          <component v-if="charttemp[4].show" :is="charttemp[4].name" :changeOption="charttemp[4].data"
          :chart_width="chartsSize.width" :chart_height="chartsSize.height"></component>
          </div></el-col>
        <el-col :span="8"><div class="grid-content bg-purple">
          <component v-if="charttemp[5].show" :is="charttemp[5].name" :changeOption="charttemp[5].data"
          :chart_width="chartsSize.width" :chart_height="chartsSize.height"></component>
          </div></el-col>
      </el-row>

    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  name: 'mainAddCharts',
  data() {
    return {
      inputTitle: '输入标题',
      chartsTags: [],
      charttemp: [{"show":false,"name":'',"data":''},{"show":false,"name":'',"data":''},
      {"show":false,"name":'',"data":''},{"show":false,"name":'',"data":''},
      {"show":false,"name":'',"data":''},{"show":false,"name":'',"data":''}],
      count: 0,
      chartsSize: {"width": 200,"height": 190}
    }
  },
  methods: {
    changeTitle(val) {
      this.$store.state.viewTitle = val
    },
    addCharts(evt) {
      evt.item.style.background = `rgba(0,255,127,.3)`
      let temp = this.$store.state.saveChartsData
      for(let a in temp){
        if(evt.item.innerText == temp[a].title.text) {
          this.$store.state.selectCharts.push(temp[a])
        }
      }
      console.log(this.$store.state.selectCharts)
      let len = this.$store.state.selectCharts.length
      if(this.$store.state.selectCharts[len-1].label=='histogram'){
        this.charttemp[this.count].name = 'histogram'
        this.charttemp[this.count].data = this.$store.state.selectCharts[len-1]
        this.charttemp[this.count].show = true
        this.count++
      }
      else if(this.$store.state.selectCharts[len-1].label=='lineGraph'){
        this.charttemp[this.count].name = 'lineGraph'
        this.charttemp[this.count].data = this.$store.state.selectCharts[len-1]
        this.charttemp[this.count].show = true
        this.count++
      }
    },
    deleteTags(evt) {
    }
  },
  components: {
    draggable,
    histogram: () => import('components/common/echarts/twodimensionaldata/histogram'),
    lineGraph: () => import('components/common/echarts/twodimensionaldata/lineGraph')
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
  background:  rgba(90,68,128,.04);
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
  background:  rgba(90,68,128,.02);
  border: 1px solid rgba(62,63,99,.08);
  border-radius: 5px;
}
.el-row {
  margin-bottom: 20px;
}
.el-col {
  padding: 10px;
  border-radius: 4px;
}
.grid-content {
  border-radius: 4px;
  min-height: 220px;
}
</style>
