<template>
  <div class="preview-view">
    <el-dialog
    title="预览"
    :visible.sync="showChart"
    v-if="showChart"
    width="80%">
    <div style="text-align: left; margin-bottom: 20px; ">{{$store.state.viewChartsBoard[0]}}</div>
    <div>
      <el-row :gutter="20">
        <el-col :span="8"><div class="grid-content bg-purple">
          <histogram v-if="his_show" :chart_width="200" :chart_height="200" :changeOption="$store.state.selectCharts[0]"/>
        </div></el-col>
        <el-col :span="8"><div class="grid-content bg-purple">
          <lineGraph v-if="line_show" :chart_width="200" :chart_height="200" :changeOption="$store.state.selectCharts[1]"/>
          </div></el-col>
        <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
    </div>
    </el-dialog>
  </div>
</template>

<script>
import histogram from 'components/common/echarts/twodimensionaldata/histogram'
import lineGraph from 'components/common/echarts/twodimensionaldata/lineGraph'

export default {
  name: 'previewView',
  data() {
    return {
      showChart: false,
      his_show: false,
      line_show: false
    }
  },
  props: {
    showFlag: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    showFlag(val) {
      if(val==true){
        this.showChart = val
        this.his_show = true
        this.line_show = true
      }
    },
    showChart(val) {
      if(val==false){
        this.$emit('changeFlag',val)
      }
    }
  },
  methods: {
  },
  components: {
    histogram,
    lineGraph
  }
}
</script>

<style scoped>

.el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 220px;
  }
</style>
