<template>
  <div class="select-set">
    <div class="title"><span>数据集</span></div>
    <el-select v-model="selected" placeholder="请选择数据集" value-key="sheetName"
    style=" width: 150px;" size="small">
      <el-option
      v-for="item in chartsList"
      :key="item.sheetName"
      :label="item.sheetName"
      :value="item">
      </el-option>
    </el-select>
  </div>
</template>

<script>

export default {
  name: 'selectDataSet',
  data() {
      return {
        selected: '',
        chartsList: this.$store.state.excelDataSelected,
      }
  },
  mounted() {
    if(this.chartsList=='') {
      this.$message({message: "数据集未加载",type: 'warning'})
    }else {
      this.selected = this.chartsList[0]
    }
  },
  watch: {
    selected(val) {
      if(this.$store.state.excelDimension!=''){
        this.$store.state.excelDimension.splice(0, this.$store.state.excelDimension.length)
      }
      if(this.$store.state.excelNumerical!=''){
        this.$store.state.excelNumerical.splice(0, this.$store.state.excelNumerical.length)
      }
      for (var a in val.sheet[0]) {
        if(typeof val.sheet[0][a] === 'number' && !isNaN(val.sheet[0][a])){
          this.$store.state.excelNumerical.push(a)
        }else{
          this.$store.state.excelDimension.push(a)
        }
      }
      console.log('selected ---- 数据 ----',val.sheetName,
      this.$store.state.excelDimension,this.$store.state.excelNumerical)
    }
  },
  components: {
  }
}
</script>

<style scoped>
.title {
  font-size: 0.8em;
  text-align: left;
  margin-left: 13px;
  margin-bottom: 10px;
  margin-top: 5px;
}
</style>
