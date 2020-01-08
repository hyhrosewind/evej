<template>
  <div class="preview-chart">
    <el-dialog
    title="预览"
    :visible.sync="showChart"
    v-if="showChart"
    width="50%">
      <histogram v-if="chartsFlag.histogramShow" :changeOption="this.$store.state.selectedPreview"/>
      <lineGraph v-if="chartsFlag.lineShow" :changeOption="this.$store.state.selectedPreview"/>
    </el-dialog>
  </div>
</template>

<script>
import histogram from 'components/common/echarts/twodimensionaldata/histogram'
import lineGraph from 'components/common/echarts/twodimensionaldata/lineGraph'

export default {
  name: 'previewChart',
  data() {
    return {
      showChart: false,
      chartsFlag: {"histogramShow":false,"lineShow": false}
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
        if(this.$store.state.selectedPreview!='') {
          if(this.$store.state.selectedPreview.label=='histogram') {
            this.comFlag()
            this.chartsFlag.histogramShow = true
          }
          else if(this.$store.state.selectedPreview.label=='lineGraph') {
            this.comFlag()
            this.chartsFlag.lineShow = true
          }
        }
      }
    },
    showChart(val) {
      if(val==false){
        this.$emit('changeFlag',val)
      }
    }
  },
  methods: {
    comFlag() {
      for(let a in this.chartsFlag) {
        this.chartsFlag[a] = false
      }
    }
  },
  components: {
    histogram,
    lineGraph
  }
}
</script>

<style scoped>
</style>
