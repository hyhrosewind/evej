<template>
  <div class="pageHeader">  
    <el-page-header @back="goBack" :content="detail"></el-page-header>
  </div>
</template>

<script>
export default {
  name: 'pageHeader',
  props: {
    detail: String
  },
  methods: {
      goBack() {
        return this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
</style>