<template>
  <div class="create_view">
    <div class="create_button">
      <el-button type="text" :style="{color: fontColor}" 
      @click="handleView">+ 新建看板</el-button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'createView',
  data () {
    return {
      chartsBoardVisible: true,
      fontColor: 'rgba(30,95,150,.8)',
    }
  },
  methods: {
    handleView(){
      this.$emit("viewBoardShow",true)
      for(let a in this.$store.state.saveChartsData) {
        this.$store.state.chartsTitle.push(this.$store.state.saveChartsData[a].title.text)
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
