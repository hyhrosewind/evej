<template>
  <el-table
    :data="this.$store.state.excelDataSelected"
    style="width: 90%">
    <el-table-column
      label="图表名称"
      property="sheetName"
      width="210">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>图表： {{ scope.row.sheetName }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.sheetName }}</el-tag>
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
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>

export default {
  name: 'chartTable',
  data() {
      return {
      }
  },
  methods: {
    handleEdit(index, row) {
        console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  },
  components: {
  }
}
</script>

