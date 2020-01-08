<template>
  <div class="view_header">
    <div class="charts_title">
      <span>新看板</span>
    </div>
    <div class="charts_edit">
      <el-button type="primary" icon="el-icon-edit" size="mini" circle></el-button>
    </div>
    <div class="header_button">
      <el-button size="small" @click="saveCharts">保存</el-button>
      <el-button size="small" @click="cancelEdit">取消</el-button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'viewHeader',
  data() {
    return {
      chart_show: false
    }
  },
  methods: {
    saveCharts() {
      this.$emit("deliveryShow")
    },
    cancelEdit() {
      this.$emit("deliveryShow")
    }
  },
  components: {
  }
}
</script>

<style scoped>

.view_header {
  padding: 0px;
  margin: 0px;
  height: 60px;
}

.charts_title {
  position: absolute;
  text-align: left;
  margin-top: 17px;
  margin-left: 15px;
}

.charts_edit {
  position: absolute;
  margin-left: 70px;
  margin-top: 12px;
}

.header_button {
  position: absolute;
  margin-left: 1000px;
  margin-top: 12px;
}

</style>
