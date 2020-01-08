<template>
  <div class="overview-info">
    <viewBoard v-if="viewShow" @deliveryShow="handleShow"/>
    <createView @viewBoardShow="handleBoardShow"/>
    <viewTable/>
  </div>
</template>

<script>
import createView from 'components/content/chartsview/createView'
import viewBoard from 'components/content/chartsview/viewBoard'
import viewTable from 'components/content/chartsview/viewTable'

export default {
  name: 'overview',
  data() {
    return {
      viewShow: false
    }
  },
  methods: {
    handleBoardShow(val) {
      this.viewShow = val
    },
    handleShow() {
      this.viewShow = false
    }
  },
  components: {
    createView,
    viewBoard,
    viewTable
  }
}
</script>

<style scoped>
.overview-info {
  margin-top: 10px;
  padding: 0px;
  height: 540px;
  text-align: center;
  z-index: 1
}
</style>
