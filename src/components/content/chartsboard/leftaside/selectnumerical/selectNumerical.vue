<template>
  <div class="select-numberical">
    <div class="title"><span>数值</span></div>
    <div class="divide"></div>
    <div class="numberical">
      <draggable class="dragArea" 
      :group="{ name: 'numericals', pull: 'clone'}">
        <div v-for="index in $store.state.excelNumerical" :key="index" 
        style="margin-bottom: 10px; width: 75px; ">
          <div>
            <img src="../../../../../assets/img/chartanalysis/numerical.png" 
            style="width: 26px; height: 20px; position: absolute; margin-top: 1px; "/>
          </div>
          <div>
            <el-tag style="margin-left: 33px;" size="small">{{index}}</el-tag>
          </div>
        </div>
      </draggable>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  name: 'selectNumberical',
  components: {
    draggable
  }
}
</script>

<style scoped>
.select-numberical {
  margin-left: 13px;
}
.title {
  font-size: 0.8em;
  text-align: left;
  margin-bottom: 10px;
  margin-top: 18px;
}
.numberical {
  text-align: left;
}
.divide {
  width: 150px;
  height: 2px;
  background: rgba(63,51,67,.3);
  margin-bottom: 15px;
}
</style>
