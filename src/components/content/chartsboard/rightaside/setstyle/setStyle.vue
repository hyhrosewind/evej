<template>
  <div class="set-style">
    <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
  </div>
</template>

<script>

export default {
  name: 'setSyle',
  data() {
      return {
        data: [{
          label: '图表样式',
          children: [{
          }]
        }, {
          label: '分类轴',
          children: [{
          }]
        }, {
          label: '主值轴',
          children: [{
          }]
        }, {
          label: '次值轴',
          children: [{
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    },
    methods: {
      handleNodeClick(data) {
        // console.log(data);
      }
    },
  components: {
  }
}
</script>

<style scoped>
</style>
