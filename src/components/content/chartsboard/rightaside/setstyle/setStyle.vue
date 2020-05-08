<template>
  <div class="set-style">
    <el-tabs>
      <el-tab-pane label="图表">
        <div class="chartsStyle">
          <div class="chart-title">
            <tr style="height: 30px; "><el-checkbox v-model="showTitle"><h3>标题名称</h3></el-checkbox></tr>
            <tr style="height: 30px; ">
              <span style="margin-left: 24px; "><h4>标题</h4></span>
              <el-input v-model="inputTitle" @change="changeTitle"
                        size="mini" style="width: 102px; margin-left: 5px; "></el-input>
            </tr>

            <tr style="height: 30px; ">
              <span style="margin-left: 24px; "><h4>标题显示位置</h4></span>
              <el-dropdown  @command="siteAcross" >
                <el-button type="primary" size="mini">
                  左右调整<i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                <el-dropdown-menu slot="dropdown" >
                  <el-dropdown-item command="left">居左</el-dropdown-item>
                  <el-dropdown-item command="center">居中</el-dropdown-item>
                  <el-dropdown-item command="right">居右</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </tr>
            <br/>
            <tr style="height: 30px; ">
              <el-dropdown   @command="siteVertical" size="mini">
                <el-button type="primary" size="mini">
                  上下调整<i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="top">居上</el-dropdown-item>
                  <el-dropdown-item command="center">居中</el-dropdown-item>
                  <el-dropdown-item command="bottom">居下</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </tr>


            <tr style="height: 30px; ">
              <span style="margin-left: 24px; "><h4>字体样式</h4></span>
              <el-dropdown  @command="wordFamily" >
                <el-button type="primary" size="small">
                  字体类型<i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                <el-dropdown-menu slot="dropdown" >
                  <el-dropdown-item command="serif">宋体</el-dropdown-item>
                  <el-dropdown-item command="Sans-serif">微软雅黑</el-dropdown-item>
                  <el-dropdown-item command="Monospace">华文细黑</el-dropdown-item>
                  <el-dropdown-item command="Fantasy">英文字体</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </tr>

            <tr style="height: 30px; ">
              <span style="margin-left: 24px; "><h4>标题颜色</h4></span>
              <el-color-picker v-model="titleColor"></el-color-picker>
            </tr>


            <tr style="height: 30px; ">
              <span style="margin-left: 24px; "><h4>标题大小</h4></span>
              <el-input-number v-model="wordSize" @change="setWordSize" :min="10" :max="100" size="small" label="描述文字">
              </el-input-number>
            </tr>

            <tr style="height: 30px; ">
              <span style="margin-left: 24px; "><h4>柱子圆角</h4></span>
              <el-input-number v-model="radiuss" @change="setRadius" :min="0" :max="100"  size="small" :step="10">
              </el-input-number>
            </tr>

            <tr style="height: 50px; ">
              <span style="margin-left: 24px; "><h4>刻度标签颜色</h4></span>
              <div style="margin-left: 65px">
                <el-color-picker v-model="tableColor" show-alpha size="mini"></el-color-picker>
              </div>

            </tr>

            <tr style="height: 30px; ">
              <span style="margin-left: 24px; "><h4>刻度表前大小</h4></span>
              <el-input-number v-model="tableSi" @change="setTableSi" :min="10" :max="20"  size="small" >
              </el-input-number>
            </tr>
          </div>

          <div class="chart-background" style="margin-top: 20px; ">
            <tr style="height: 30px; "><h4>背景</h4></tr>
            <tr style="height: 30px;">
              <div style="margin-left: 24px; position: absolute;">背景颜色</div>
              <div style="position: absolute; margin-left: 80px; margin-top: -6px; ">
                <el-color-picker v-model="cbackground" show-alpha size="mini"></el-color-picker>
              </div>
            </tr>
            <tr style="height: 37px; ">
              <div :style="{marginLeft: '24px',background: cbackground,borderRadius: '5px'}">{{cbackground}}</div>
            </tr>
            <tr style="height: 30px;">
              <div style="margin-left: 24px; position: absolute;">单系列色</div><nbsp/>
              <div style="position: absolute; margin-left: 80px; margin-top: -6px; ">
                <el-color-picker v-model="itemColor" show-alpha size="mini"></el-color-picker>
              </div>
            </tr>
            <tr style="height: 20px; ">
              <div :style="{marginLeft: '24px',background: itemColor,borderRadius: '5px'}">{{itemColor}}</div>
            </tr>



          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="分类"></el-tab-pane>
      <el-tab-pane label="主值"></el-tab-pane>
      <el-tab-pane label="次值"></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>

  export default {
    name: 'setStyle',
    data() {
      return {
        showTitle: false,
        inputTitle: '',
        tempTitle: '',
        cbackground: '',
        tempBackground: '',
        itemColor: '',
        tempItem: '',
        siteOfAcross: '', // 标题横
        siteOfVertical: '', //标题纵
        wordSize: 20, //字体大小
        titleColor: '',
        radiuss:'',//柱状图圆角
        tableColor: '',//刻度标签颜色
        tableSi: '',//刻度标签大小
      }
    },
    watch: {
      "$store.state.changeFlag": function(val) {
        if(val == 'histogram' || val == 'line' || val == 'scatter')
          this.inputTitle = this.tempTitle = this.$store.state.chartTitle
        this.showTitle = true
        this.cbackground = this.tempBackground = this.$store.state.chartBackground
        this.itemColor = this.tempItem = this.$store.state.itemColor
      },
      titleColor(newc) {
        this.$store.state.titleColor=newc
      },
      showTitle(val) {
        if(val == false) {
          this.$store.state.chartTitle = ''
        }
        else if(this.tempTitle!='') {
          this.$store.state.chartTitle = this.tempTitle
        }
      },
      cbackground(val) {
        if(val!=this.tempBackground) {
          this.$store.state.chartBackground = val
        }
      },
      itemColor(val) {
        if(val!=this.tempItem) {
          this.$store.state.itemColor = val
        }
      },
      siteOfAcross: {
        handler: function (newval, oldval) {
          // 通过store完成组件通信
          this.$store.state.titleAcross = newval
          console.log('store中存储标题横向位置：' + newval)
        }
      },
      siteOfVertical: {
        handler: function (newval, oldval) {
          this.$store.state.titleVertical=newval
          console.log('store中存储标题纵向位置：' + newval)
        },
      },
      tableColor: {
        handler: function (newval, oldval) {
          this.$store.state.tableColor=newval
          console.log('store中存储刻度标签颜色：' + newval)
        },
      },
    },
    /* wordFamily:  '',//标题字体类型
      wordSize: '', //标题大小
      wordStyle: ''//标题风格*/
    methods: {
      changeTitle(val) {
        this.$store.state.chartTitle = val
      },
      siteAcross(val) {      // 处理标题横向位置
        console.log('设置标题横向位置' + val)
        this.siteOfAcross=val
      },
      siteVertical(val) {  // 处理标题纵向位置
        console.log('设置标题纵向位置' + val)
        this.siteOfVertical=val
      },
      wordFamily(val){  //标题字体类型
        this.$store.state.wordFamily=val
        console.log('字体类型：' + val)
      },
      setWordSize(value){  //处理标题大小
        this.wordSize=value
        this.$store.state.wordSize=this.wordSize
        console.log('字体大小设置为：' +value)
      },
      setRadius(value){
        this.$store.state.rad=value
        console.log('柱状图圆角大小设置为：' +value)
      },
      setTableSi(value){
        this.$store.state.tableSi=value
        console.log('刻度标签大小设置为：' +value)
      }
    },
    components: {
    }
  }
</script>

<style scoped>

  .chartsStyle {
    text-align: left;
  }


</style>
