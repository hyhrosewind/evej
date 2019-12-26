<template>
  <div class="main-charts" 
  :style="{backgroundImage:`url(${require('../../../../assets/img/chartanalysis/charts-search.png')})`}">
    <histogram v-if="histogramFlag" 
    :x_data="this.$store.state.dataDimensions"
    :series_data="this.$store.state.dataNumericals"/>
    <lineGraph v-if="lineFlag"
    :x_data="this.$store.state.dataDimensions"
    :series_data="this.$store.state.dataNumericals"/>
    <pieGraph v-if="pieFlag"
    :pie_data="this.$store.state.pieData"/>
  </div>
</template>

<script>
import histogram from 'components/common/echarts/twodimensionaldata/histogram'
import lineGraph from 'components/common/echarts/twodimensionaldata/lineGraph'
import pieGraph from 'components/common/echarts/twodimensionaldata/pieGraph'

export default {
  name: 'mainCharts',
  data() {
    return {
      histogramFlag: false,
      lineFlag: false,
      pieFlag: false
    }
  },
  props: {
    drawFlag: {
      type: String,
      default: ''
    }
  },
  watch: {
    drawFlag(val) {
      if(this.$store.selectedDimensions!=''&&this.$store.selectedNumericals!=''){
        this.$store.state.dataDimensions.splice(0, this.$store.state.dataDimensions.length)
        this.$store.state.dataNumericals.splice(0, this.$store.state.dataNumericals.length)
        let sheet = this.$store.state.selectedSheet
        for(let a in sheet) {
          for(let x in sheet[a]){
            if(x == this.$store.state.selectedDimensions){
              this.$store.state.dataDimensions.push(sheet[a][x])
            }
            if(x == this.$store.state.selectedNumericals){
              this.$store.state.dataNumericals.push(sheet[a][x])
            }
          }
        }

        if(val=='histogram'){
          this.histogramFlag = true
        }
        else if(val=='line'){
          this.lineFlag = true
        }
        else if(val=='pie'){
          this.$store.state.pieData.splice(0, this.$store.state.pieData.length)
          var x = this.$store.state.dataNumericals,
          y = this.$store.state.dataDimensions
          for(var i = 0;i < x.length; i++){
            for(var j = 0;j < y.length; j++){
              if(i==j){
                var obj = {}
                obj.value = x[i]
                obj.name = y[j]
                this.$store.state.pieData.push(obj)
              }
            }
          }
          this.pieFlag = true
        }
      }
      this.$store.state.selectedDimensions.splice(0, this.$store.state.selectedDimensions.length)
      this.$store.state.selectedNumericals.splice(0, this.$store.state.selectedNumericals.length)
    }
  },
  components: {
    histogram,
    lineGraph,
    pieGraph
  }
}
</script>

<style scoped>
.main-charts {
  padding: 10px;
  margin-top: 20px;
  height: 500px;
  border: 4px solid rgba(28,46,94,.1);
  background-repeat: no-repeat;
  background-size: 30%;
  background-position: center;
}
</style>
