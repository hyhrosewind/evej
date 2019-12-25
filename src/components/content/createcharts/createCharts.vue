<template>
  <div class="create_charts">
    <div class="create_button">
      <el-button type="text" :style="{color: fontColor}" 
      @click="showAnalysis">+ 新建图表</el-button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'createCharts',
  data () {
    return {
      chartsBoardVisible: true,
      fontColor: 'rgba(30,95,150,.8)',
    }
  },
  methods: {
    showAnalysis(){
      if(this.$store.state.txtFlag==false) {
        this.$emit('chartShow',this.chartsBoardVisible)
      }else{
        this.$emit('txtChartsShow',this.chartsBoardVisible)
      }
    }
  },
  components: {
  }
}
</script>

<style scoped>

.create_button {
  border-radius: 4px;
  width: 90px;
  background: rgba(90,68,128,.1);
}

</style>
