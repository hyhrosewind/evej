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
        <excelUpload @excelSuccess="handleVisible" @txtSuccess="handleTxt"/>
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
      excelFlag: false,
      txtFlag: false
    }
  },
  methods: {
    handleVisible(excelFlag) {
      this.excelFlag = excelFlag
    },
    handleData() {
      this.dialogVisible = false
      if(this.excelFlag==true) {
        this.dialogTable = true
      }
      else if((this.txtFlag==false)&&(this.excelFlag==false)){
        this.$message({
        message: "文件未加载完毕，请耐心等待...",type: 'warning'})
      }
    },
    handleTxt(txtFlag) {
      this.txtFlag = txtFlag
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

<!-- 选择数据集选择 excel文件中选择要加载的表格 
在dataupload.excel.excelTable.vue中存储选择的excel数据集 -->