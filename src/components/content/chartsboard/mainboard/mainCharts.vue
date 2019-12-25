<template>
  <div class="main-charts" 
  :style="{backgroundImage:`url(${require('../../../../assets/img/chartanalysis/charts-search.png')})`}">
    <histogram v-if="chartFlag" 
    :x_data="this.$store.state.dataDimensions"
    :series_data="this.$store.state.dataNumericals"/>
  </div>
</template>

<script>
import histogram from 'components/common/echarts/twodimensionaldata/histogram'

export default {
  name: 'mainCharts',
  data() {
    return {
      chartFlag: false
    }
  },
  props: {
    drawFlag: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    drawFlag() {
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
        this.chartFlag = true
      }
      this.$store.state.selectedDimensions.splice(0, this.$store.state.selectedDimensions.length)
      this.$store.state.selectedNumericals.splice(0, this.$store.state.selectedNumericals.length)
    }
  },
  components: {
    histogram
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
