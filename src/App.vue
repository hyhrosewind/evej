<template>
  <div id="app">
    <MainNavBar/>
  </div>
</template>

<script>
import MainNavBar from 'components/content/mainnavbar/mainNavBar'
export default {
  name: 'app',
  components: {
    MainNavBar
  }
}
</script>

<style>
@import "assets/css/base.css";
</style>
