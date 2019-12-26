import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    excelName: String,
    excelData: [],
    excelDataSelected: [],
    selectedSheet: [],
    excelDimension: [],
    excelNumerical: [],
    txtFlag: Boolean,
    txtFile: '',
    pieData: [],
    selectedDimensions: [],
    selectedNumericals: [],
    dataDimensions: [],
    dataNumericals: []
  },
  mutations: {},
  actions: {},
  getters: {},
  modules: {}
})

export default store