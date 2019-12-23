<template>
  <div class="select_data">

    <div class="select_button">
      <el-button type="text" :style="{color: fontColor}"
      @click="[dialogVisible = true,dialogTable = false]">+ 新建数据</el-button>
    </div>

    <excelTable :dialogTableVisible="dialogTable"/>
    
    <div class="select_dialog">
      <el-dialog title="选择创建方式" :visible.sync="dialogVisible" width="30%">

      <div class="data_upload">
        <excelUpload @uploadSuccess="handleVisible"/>
      </div>

      <span slot="footer" class="dialog-footer">
        <el-button @click="[dialogVisible = false,dialogTable = false]">取消</el-button>
        <el-button type="primary" @click="handleData">确定</el-button>
      </span>

    </el-dialog>
    </div>

  </div>
</template>

<script>

import excelUpload from 'components/content/dataupload/excel/excelUpload'
import excelTable from 'components/content/dataupload/excel/excelTable'

export default {
  name: 'selectData',
  data () {
    return {
      dialogVisible: false,
      dialogTable: false,
      fontColor: 'rgba(30,95,150,.8)',
      flag: false
    }
  },
  methods: {
    handleVisible(flag) {
      this.flag = flag
    },
    handleData() {
      this.dialogVisible = false
      if(this.flag==true) {
        this.dialogTable = true
      }else {
        this.$message({
        message: "数据集未加载完毕，请耐心等待...",type: 'warning'})
      }
    }
  },
  components: {
    excelUpload,
    excelTable
  }
}
</script>

<style scoped>

.select_button {
  border-radius: 4px;
  width: 90px;
  background: rgba(90,68,128,.1);
}

.select_dialog {
  text-align: left;
}

.data_upload {
  margin: 0px;
  padding: 0px;
}

</style>
