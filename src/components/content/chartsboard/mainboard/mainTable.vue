<template>
  <div class="main-table">
    <table class="table-rd">
      
      <tr class="table-tr"><td class="table-td">类型</td>
        <td class="charts-type" style="text-align: left;">
          <el-button class="charts-button" label="histogram" 
          type="primary" plain @click="drawCharts('histogram')">
            <img src="../../../../assets/img/echarts/echarts-histogram.png"
            style="width: 20px; height: 20px; 
            position: absolute; margin-left: -10px; margin-top: -10px;"/>
          </el-button>
          <el-button class="charts-button" label="line" 
          type="primary" plain @click="drawCharts('line')">
            <img src="../../../../assets/img/echarts/echarts-line.png"
            style="width: 20px; height: 20px; 
            position: absolute; margin-left: -10px; margin-top: -10px;"/>
          </el-button>
          <el-button class="charts-button" label="pie" 
          type="primary" plain @click="drawCharts('pie')">
            <img src="../../../../assets/img/echarts/echarts-pie.png"
            style="width: 20px; height: 20px; 
            position: absolute; margin-left: -10px; margin-top: -10px;"/>
          </el-button>
          <el-button class="charts-button" label="funnel" 
          type="primary" plain @click="drawCharts('funnel')">
            <img src="../../../../assets/img/echarts/echarts-funnel.png"
            style="width: 20px; height: 20px; 
            position: absolute; margin-left: -10px; margin-top: -10px;"/>
          </el-button>
          <el-button class="charts-button" label="scatter" 
          type="primary" plain @click="drawCharts('scatter')">
            <img src="../../../../assets/img/echarts/echarts-scatter.png"
            style="width: 20px; height: 20px; 
            position: absolute; margin-left: -10px; margin-top: -10px;"/>
          </el-button>
        </td>
      </tr>

      <tr class="table-tr"><td class="table-td">分类</td>
        <td class="dimension">
          <draggable v-model="dimensionTags" :group="{name: 'dimensions'}" 
          @add="addDimension" @remove="deleteTags" draggable="false"
           style="height: 28px; text-align: left; padding: 2px; margin-left: 12px; ">
            <div v-for="index in dimensionTags" :key="index" style="width: 90px; ">
              <div>{{index}}</div>
            </div>
          </draggable>
        </td>
      </tr>

      <tr class="table-tr"><td class="table-td">主值轴</td>
        <td class="numerical">
          <draggable v-model="numericalTags" :group="{name: 'numericals'}" 
          @add="addNumerical" draggable="false"
           style="height: 28px; text-align: left; padding: 2px; margin-left: 12px; ">
            <div v-for="index in numericalTags" :key="index" style="width: 90px; ">
              <div>{{index}}</div>
            </div>
          </draggable>
        </td>
      </tr>

      <tr class="table-tr"><td class="table-td">次值轴</td>
        <td class="numerical-child">
          <draggable v-model="numChildTags" :group="{name: 'numericals'}" 
          @add="addNumChild" draggable="false"
           style="height: 28px; text-align: left; padding: 2px; margin-left: 12px; ">
            <div v-for="index in numericalTags" :key="index" style="width: 90px; ">
              <div>{{index}}</div>
            </div>
          </draggable>
        </td>
      </tr>    

      <tr class="table-tr"><td class="table-td">z值轴</td>
        <td class="numerical-z">
          <draggable v-model="numZTags" :group="{name: 'numericals'}" 
          @add="addNumZ" draggable="false"
           style="height: 28px; text-align: left; padding: 2px; margin-left: 12px; ">
            <div v-for="index in numericalTags" :key="index" style="width: 90px; ">
              <div>{{index}}</div>
            </div>
          </draggable>
        </td>
      </tr>  

    </table>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  name: 'mainTable',
  data() {
    return {
      dimensionTags: [],
      numericalTags: [],
      numChildTags: [],
      numZTags: []
    }
  },
  methods: {
    addDimension(evt) {
      evt.item.style.background = `	rgba(0,255,127,.2)`
      console.log('selected ---- dimension ---- ',evt.item.innerText)
      this.$store.state.selectedDimensions[0]=evt.item.innerText
      console.log('store selected dimensions',evt.item.innerText)
    },
    addNumerical(evt) {
      evt.item.style.background = `	rgba(0,255,127,.2)`
      console.log('selected ---- numerical ---- ',evt.item.innerText)
      this.$store.state.selectedNumericals[0]=evt.item.innerText
      console.log('store selected Numericals',evt.item.innerText)
    },
    addNumChild(evt) {
      evt.item.style.background = `	rgba(0,255,127,.2)`
      console.log('selected ---- numerical ---- ',evt.item.innerText)
      this.$store.state.selectedNumChild[0]=evt.item.innerText
      console.log('store selected Numericals Child',evt.item.innerText)
    },
    addNumZ(evt) {
      evt.item.style.background = `	rgba(0,255,127,.2)`
      console.log('selected ---- numerical ---- ',evt.item.innerText)
      this.$store.state.selectedNumZ[0]=evt.item.innerText
      console.log('store selected Numericals Z',evt.item.innerText)
    },
    drawCharts(chartLabel) {
      if((this.$store.state.selectedDimensions!='')&&(this.$store.state.selectedNumericals.length!='')
      &&(chartLabel!='scatter')) {
        this.$emit('uploadCharts',chartLabel)
      }
      else if((this.$store.state.selectedNumericals!='')&&(
      this.$store.state.selectedNumChild!='')&&(this.$store.state.selectNumZ!='')) {
        this.$emit('uploadCharts',chartLabel)
      }  
    },
    deleteTags() {
      if(this.$store.state.selectedDimensions!=''){
        this.$store.state.selectedDimensions.splice(0, this.$store.state.selectedDimensions.length)
        console.log(this.$store.state.selectedDimensions)
      }
      else if(this.$store.state.selectedNumericals!=''){
        this.$store.state.selectedNumericals.splice(0, this.$store.state.selectedNumericals.length)
      }
      else if(this.$store.state.selectedNumChild!=''){
        this.$store.state.selectedNumChild.splice(0, this.$store.state.selectedNumChild.length)
      }
      else if(this.$store.state.selectedNumZ!=''){
        this.$store.state.selectedNumZ.splice(0, this.$store.state.selectedNumZ.length)
      }
    }
  },
  components: {
    draggable 
  }
}
</script>

<style scoped>
.main-table {
  background: rgba(67,64,64,.05);
}
.table-rd {
  width: 100%;
  border-collapse: collapse;
  border: 2px solid #fff;
}
.table-tr {
  border-bottom: 1px solid rgba(28,46,94,.1);
}
.table-td {
  width: 100px;
  height: 33px;
  font-size: 0.6em;
  background: rgba(67,64,64,.08);
}
.charts-button {
  margin-left: 12px;
  width: 30px;
  height: 25px;
  background: rgba(67,64,64,.01);
}
</style>

<!-- 存储被拖动过的维度和数值

selectedDimensions[]: 被拖动过的维度-- ["课程号"，...]
selectedNumericals[]：被拖动过的数值-- ["学分",...]
selectedNumChild[]：被拖动过的数值 用于 Y 三维-- ["学分",...]
selectedNumZ[]：被拖动过的数值 用于 Z 三维-- ["学分",...]
 -->
