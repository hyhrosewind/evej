<template>
  <div class="select-dimension">
    <div class="title"><span>维度</span></div>
    <div class="divide"></div>
    <div class="dimension">
      <draggable class="dragArea" 
      :group="{ name: 'dimensions' , pull: 'clone'}">
        <div v-for="index in $store.state.excelDimension" :key="index" 
        style="margin-bottom: 10px; width: 100px; ">
          <div class="img-div">
            <img src="../../../../../assets/img/chartanalysis/dimensions.png"
            style="width: 22px; height: 20px; position: absolute; margin-top: 1px;"/>
          </div>
          <div>
            <el-tag style="margin-left: 33px; "
            size="small">{{index}}</el-tag>
          </div>
        </div>
      </draggable>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  name: 'selectDimension',
  data(){
    return {
    }
  },
  methods: {
  },
  components: {
    draggable
  }
}
</script>

<style scoped>
.select-dimension {
  margin-left: 13px;
}
.title {
  font-size: 0.8em;
  text-align: left;
  margin-bottom: 10px;
  margin-top: 20px;
}
.dimension {
  text-align: left;
}
.divide {
  width: 150px;
  height: 2px;
  background: rgba(63,51,67,.3);
  margin-bottom: 15px;
}
</style>
