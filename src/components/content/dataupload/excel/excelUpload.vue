<template>
  <div class="excel_upload">
    <el-upload class="load-excel" drag action="https://jsonplaceholder.typicode.com/posts/"
    accept=".xls,.xlsx,.txt"
    :on-preview="handlePreview" 
    :on-remove="handleRemove" 
    :on-success="handleSuccess"
    :before-remove="beforeRemove" 
    :limit="1" :on-exceed="handleExceed"
    :file-list="fileList"
    multiple>
      <img class="img_excel" src="../../../../assets/img/selectdata/file.png" 
      style="width: 55px; height: 50px; "/>
      <div class="el-upload__text">将Excel或TxT文件放在此处或 <em>单击以上传</em></div>
    </el-upload>
  </div>
</template>

<script>
import XLSX from 'xlsx'

export default {
  name: 'excelUpload',
  data() {
    return {
      fileList: [],
      uploadflag: false
    }
  },
  methods: {
    handleRemove(file,fileList) {
      console.log("---- handleRemove ----",file,fileList)
    },
    handlePreview(file) {
      console.log("---- handlePreview ----",file)
    },
    handleSuccess(response,file,fileList) {
      console.log("loading ---- handleSuccess ----",response,file,fileList)

      if(fileList[0].name.split(".")[1]=="txt"){
        this.$message({message: "文本加载完毕",type: 'success'})
        if(this.$store.state.txtData!=''){
          this.$store.state.txtData.splice(0, this.$store.state.txtData.length)
        }
        this.uploadflag = true
        this.$emit('txtSuccess',this.uploadflag)
        this.$store.state.excelName = fileList[0].name
        this.$store.state.txtFlag = true
        if(fileList[0]) {
          this.txtFile(fileList[0]).then(res=>{
            if(res && res.length >0){
              this.$store.state.txtData = res
              console.log('loading txt ---- 数据 ----',this.$store.state.txtData)
            } 
          })
        }
      }

      if((fileList[0].name.split(".")[1]=='xlsx')||(fileList[0].name.split(".")[1]=="xls")){
        this.$message({message: "数据集加载完毕",type: 'success'})
        this.$store.state.txtFlag = false
        this.$store.state.excelName = fileList[0].name
        this.uploadflag = true
        this.$emit('excelSuccess',this.uploadflag)
        this.file2Xce(fileList[0]).then(tabJson =>{
          if(tabJson && tabJson.length >0){
            this.xlsxJson = tabJson
            this.$store.state.excelData = this.xlsxJson
            console.log('loading xlsx ---- 数据 ----',this.xlsxJson)
          }
        })
      }
    },
    txtFile(resultFile) {
      return new Promise(function(resolve){
        const reader = new FileReader()
        reader.onload = function(e) {
          const result = (JSON.parse(e.target.result)).product
          resolve(result)
        }
        reader.readAsText(resultFile.raw, 'UTF-8')
      })
    },
    file2Xce(file) {
      return new Promise(function(resolve){
        const reader = new FileReader()
        reader.onload = function(e) {
          const data = e.target.result
          this.wb = XLSX.read(data, {
            type: 'binary'
          })
          const result = []
          this.wb.SheetNames.forEach((sheetName) => {
            result.push({
              sheetName: sheetName,
              sheet: XLSX.utils.sheet_to_json(this.wb.Sheets[sheetName])
            })
          })
          resolve(result)
        }
        reader.readAsBinaryString(file.raw)
      })
    },
    beforeRemove(file) {
      return this.$confirm(`是否删除 ${ file.name } 数据文件?`)
    },
    handleExceed(files, fileList) {
      this.$message({
        message: `数据文件限制为1, 您选择了 ${files.length} 个数据文件,
        共计 ${files.length + fileList.length} 个文件`,type: 'warning'})
    }
  },
  components: {
  }
}
</script>

<style scoped>

.img_excel {
  margin: 24px;
}

</style>

<!--数据集上传excel,txt文件数据上传

store excel数据：
excelName String: excel文件名
excelData[]: excel数据--[{sheet[],sheetName},{sheet[],sheetName},...] -->