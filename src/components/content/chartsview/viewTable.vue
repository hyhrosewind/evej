<template>
  <div>
    <el-table
    :data="this.$store.state.viewChartsBoard"
    style="width: 90%">
    <el-table-column
      label="看板名称"
      width="210">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>看板： {{ scope.row.title.text }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.title.text  }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column label="类型" width="210"> 
    </el-table-column>
    <el-table-column label="创建人" width="210"> 
    </el-table-column>
    <el-table-column label="更新时间" width="210"> 
    </el-table-column>
    <el-table-column
      label="操作">
      <template slot-scope="scope">
        <el-button
          class="charts-button"
          size="mini" type="primary" plain
          @click="handlePreview(scope.$index, scope.row)"> 
          <img src="../../../assets/img/echarts/table/see.png"
            style="width: 20px; height: 20px; 
            position: absolute; margin-left: -10px; margin-top: -10px;"/>
        </el-button>
        <el-button
          class="charts-button"
          size="mini" type="danger" plain
          @click="handleDelete(scope.$index, scope.row)">
           <img src="../../../assets/img/echarts/table/delete.png"
            style="width: 20px; height: 20px; 
            position: absolute; margin-left: -10px; margin-top: -10px;"/>
        </el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>

<script>

export default {
  name: 'viewTable',
  data() {
    return {
      chartShow: false
    }
  },
  methods: {
    handlePreview(index,row) {
      this.chartShow = true
      this.$store.state.selectedPreview = row
    },
    handleDelete(index, row) {
      console.log(index, row)
    }
  },
  components: {
  }
}
</script>

<style scoped>
.charts-button {
  width: 30px;
  height: 25px;
  background: rgba(67,64,64,.01);
}
</style>
