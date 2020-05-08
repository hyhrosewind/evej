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
    txtData: [],
    pieData: [],
    funnelData: [],
    scatterData: [],
    selectedDimensions: [],
    selectedNumericals: [],
    selectedNumChild: [],
    selectedNumZ: [],
    dataDimensions: [],
    dataNumericals: [],
    dataNumChild: [],
    dataNumZ: [],

    changeFlag: '',
    chartTitle: '',
    chartBackground: '',
    itemColor: '',
    titleVertical: '',//标题位置
    titleAcross: '',//标题位置
    wordFamily:  '',//标题字体类型
    titleColor: '',//标题颜色
    wordSize: '', //标题大小
    rad: '',//圆角度数
    tableColor: '',//刻度标签颜色
    tableSi: '',//刻度标签大小
  },
  mutations: {},
  actions: {},
  getters: {},
  modules: {}
})

export default store
