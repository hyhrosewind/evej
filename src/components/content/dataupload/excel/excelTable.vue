<template>
  <div class="select_table">
    <el-dialog title="添加数据文件" style="width: 950px; text-align: left; margin: 0 auto; " 
    :visible.sync="excelTableVisible">

      <div class="file_name">文件：
        <span :style="{color: fontColor}">{{titleFile}}</span>
      </div>

      <el-table :data="this.$store.state.excelData" ref="multipleTable"
      @selection-change="handleSelectionChange">
        <el-table-column property="sheetName" label="数据集" width="350"></el-table-column>
        <el-table-column type="selection" width="80"></el-table-column>
      </el-table>

      <span slot="footer" class="dialog-footer">
        <el-button @click="excelTableVisible = false">取消</el-button>
        <el-button type="primary" @click="handleSelection()">确定</el-button>
      </span>

    </el-dialog>
  </div>
</template>

<script>

export default {
  name: 'excelTable',
  props: {
    dialogTableVisible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      multipleSelection: [],
      excelTableVisible: false,
      fontColor: 'rgba(30,95,150,.8)'
    }
  },
  methods: {
    handleSelectionChange(val) {
        this.multipleSelection = val;
    },
    handleSelection() {
      this.excelTableVisible = false
      this.$store.state.excelDataSelected = this.$refs.multipleTable.selection
    },
    excelTableName(i) {
      return this.$store.state.excelData[i].sheetName
    }
  },
  watch: {
    dialogTableVisible(val){
      this.excelTableVisible = val
    }
  },
  computed: {
    titleFile: function() {
      return this.$store.state.excelName
    }
  },
  components: {
  }
}
</script>

<style scoped>
.select_table {
  text-align: center;
}

.file_name {
  margin-top: -25px;
}
</style>
