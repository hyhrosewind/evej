<template>
  <div class="main-table">
    <table class="table-rd">
      <tr class="table-tr"><td class="table-td">类型</td>
        <td class="charts-type">
        </td>
      </tr>
      <tr class="table-tr"><td class="table-td">分类</td>
        <td class="dimension">
          <draggable v-model="dimensionTags" :group="{name: 'dimensions'}" draggable="false"
           style="height: 28px; text-align: left; padding: 2px; margin-left: 5px; ">
            <div v-for="index in dimensionTags" :key="index" style="width: 90px; ">
              <div>{{index}}</div>
            </div>
          </draggable>
        </td>
      </tr>
      <tr class="table-tr"><td class="table-td">子分类</td>
        <td class="dimension-child"></td>
      </tr>  
      <tr class="table-tr"><td class="table-td">主值轴</td>
        <td class="numerical"></td>
      </tr>
      <tr class="table-tr"><td class="table-td">次值轴</td>
        <td class="numerical-child"></td>
      </tr>          
    </table>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  name: 'mainTable',
  data() {
    return {
      dimensionTags: []
    }
  },
  methods: {
  },
  components: {
    draggable 
  }
}
</script>

<style scoped>
.main-table {
  background: rgba(67,64,64,.05);
}
.table-rd {
  width: 100%;
  border-collapse: collapse;
  border: 2px solid #fff;
}
.table-tr {
  border-bottom: 1px solid rgba(28,46,94,.1);
}
.table-td {
  width: 100px;
  height: 28px;
  font-size: 0.6em;
  background: rgba(67,64,64,.08);
}
</style>
