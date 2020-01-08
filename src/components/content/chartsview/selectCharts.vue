<template>
  <div class="select-charts">
    <div class="title"><span>图表</span></div>
    <div class="divide"></div>
    <div class="charts">
      <draggable class="dragArea" 
      :group="{ name: 'charts', pull: 'clone'}">
        <div v-for="index in $store.state.chartsTitle" :key="index" 
        style="margin-bottom: 10px; width: 75px; ">
          <div class="img-div">
            <img src="../../../assets/img/selectchart/chart.png"
            style="width: 14px; height: 16px; position: absolute; margin-top: 1px;"/>
          </div>
          <div class="tag_div">
            <el-tag style="margin-left: 20px; " 
            closable size="small" @close="handleClose(index)">{{index}}</el-tag>
          </div>
        </div>
      </draggable>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  name: 'selectCharts',
  data(){
    return {
    }
  },
  methods: {
    handleClose(tag) {
      this.$store.state.excelDimension.splice(this.$store.state.excelDimension.indexOf(tag), 1);
    }
  },
  components: {
    draggable
  }
}
</script>

<style scoped>
.select-charts {
  margin-left: 13px;
}
.title {
  font-size: 0.8em;
  text-align: left;
  margin-bottom: 10px;
  margin-top: 20px;
}
.charts {
  text-align: left;
}
.divide {
  width: 150px;
  height: 2px;
  background: rgba(63,51,67,.3);
  margin-bottom: 15px;
}
</style>
