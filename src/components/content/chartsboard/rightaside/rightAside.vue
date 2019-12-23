<template>
  <div class="right-aside">
    <el-tabs v-model="activeName">
      <el-tab-pane label="样式" name="first">样式</el-tab-pane>
      <el-tab-pane label="过滤" name="second">过滤</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>

export default {
  name: 'rightAside',
  data() {
    return {
      activeName: 'first'
    }
  },
  components: {
  }
}
</script>

<style scoped>
.right-aside {
  margin: 0px;
  padding: 10px;
  font-size: 0.8em;
}
</style>
