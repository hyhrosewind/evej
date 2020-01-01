<template>
  <div class="main-charts" 
  :style="{backgroundImage: backgroundImg}">
    <histogram v-if="chartsFlag.histogramFlag"
    :x_data="this.$store.state.dataDimensions"
    :series_data="this.$store.state.dataNumericals"/>
    <lineGraph v-if="chartsFlag.lineFlag"
    :x_data="this.$store.state.dataDimensions"
    :series_data="this.$store.state.dataNumericals"/>
    <pieGraph v-if="chartsFlag.pieFlag"
    :pie_data="this.$store.state.pieData"/>
    <funnelGraph v-if="chartsFlag.funnelFlag"
    :funnel_data="this.$store.state.funnelData"/>
     <scatter v-if="chartsFlag.scatterFlag"
    :scatter_data="this.$store.state.scatterData"/>
  </div>
</template>

<script>
import histogram from 'components/common/echarts/twodimensionaldata/histogram'
import lineGraph from 'components/common/echarts/twodimensionaldata/lineGraph'
import pieGraph from 'components/common/echarts/twodimensionaldata/pieGraph'
import funnelGraph from 'components/common/echarts/twodimensionaldata/funnelGraph'
import scatter from 'components/common/echarts/dspatialdata/scatter'

export default {
  name: 'mainCharts',
  data() {
    return {
      backgroundImg: `url(${require('../../../../assets/img/chartanalysis/charts-search.png')})`,
      chartsFlag: {"histogramFlag":false,"lineFlag": false,
      "pieFlag": false,"funnelFlag": false,"scatterFlag": false}
    }
  },
  props: {
    drawFlag: {
      type: String,
      default: ''
    }
  },
  methods: {
    comFlag() {
      for(let a in this.chartsFlag) {
        this.chartsFlag[a] = false
      }
    }
  },
  watch: {
    drawFlag(val) {
      if(val!=''){
        if((this.$store.selectedDimensions!=''&&this.$store.selectedNumericals!='')||(
        this.$store.state.selectedNumericals!=''&&this.$store.state.selectedNumChild!=''&&
        this.$store.state.selectNumZ!='')){
        this.backgroundImg = ''
        this.$store.state.dataDimensions.splice(0, this.$store.state.dataDimensions.length)
        this.$store.state.dataNumericals.splice(0, this.$store.state.dataNumericals.length)
        this.$store.state.dataNumChild.splice(0, this.$store.state.dataNumChild.length)
        this.$store.state.dataNumZ.splice(0, this.$store.state.dataNumZ.length)
        let sheet = this.$store.state.selectedSheet
        for(let a in sheet) {
          for(let x in sheet[a]){
            if(x == this.$store.state.selectedDimensions){
              this.$store.state.dataDimensions.push(sheet[a][x])
            }
            if(x == this.$store.state.selectedNumericals){
              this.$store.state.dataNumericals.push(sheet[a][x])
            }
            if(x == this.$store.state.selectedNumChild){
              this.$store.state.dataNumChild.push(sheet[a][x])
            }
            if(x == this.$store.state.selectedNumZ){
              this.$store.state.dataNumZ.push(sheet[a][x])
            }
          }
        }

        if(val=='histogram'){
          this.comFlag()
          this.chartsFlag.histogramFlag = true
        }
        else if(val=='line'){
          this.comFlag()
          this.chartsFlag.lineFlag = true
        }
        else if(val=='pie'){
          this.$store.state.pieData.splice(0, this.$store.state.pieData.length)
          let x = this.$store.state.dataNumericals,
          y = this.$store.state.dataDimensions
          for(let i = 0;i < x.length; i++){
            for(let j = 0;j < y.length; j++){
              if(i==j){
                let obj = {}
                obj.value = x[i]
                obj.name = y[j]
                this.$store.state.pieData.push(obj)
              }
            }
          }
          this.comFlag()
          this.chartsFlag.pieFlag = true
        }
        else if(val=='funnel'){
          this.$store.state.funnelData.splice(0, this.$store.state.funnelData.length)
          let x = this.$store.state.dataNumericals,
          y = this.$store.state.dataDimensions
          for(let i = 0;i < x.length; i++){
            for(let j = 0;j < y.length; j++){
              if(i==j){
                let obj = {}
                obj.value = x[i]
                obj.name = y[j]
                this.$store.state.funnelData.push(obj)
              }
            }
          }
          this.comFlag()
          this.chartsFlag.funnelFlag = true
        }
        else if(val=='scatter'){
          this.$store.state.scatterData.splice(0, this.$store.state.scatterData.length)
          for(let a in this.$store.state.dataNumericals) {
            let s = []
            s[0] = this.$store.state.dataNumericals[a]
            s[1] = this.$store.state.dataNumChild[a]
            s[2] = this.$store.state.dataNumZ[a]
            this.$store.state.scatterData.push(s)
          }
          this.comFlag()
          this.chartsFlag.scatterFlag = true
        }
        this.$emit('clearTags')
      }
      }
    }
  },
  components: {
    histogram,
    lineGraph,
    pieGraph,
    funnelGraph,
    scatter
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
