import Vue from 'vue'
import {Container,Header,Aside,Main,RadioGroup,RadioButton,Menu,Submenu,
  MenuItem,Tooltip,Dropdown,DropdownMenu,DropdownItem,Row,Col,PageHeader,
  Button,Dialog,Upload,Message,MessageBox,Table,TableColumn,Popover,Tag,
  Select,Option,Tabs,TabPane,Tree} from 'element-ui'

Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Tooltip)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Row)
Vue.use(Col)
Vue.use(PageHeader)
Vue.use(Button)
Vue.use(Dialog)
Vue.use(Upload)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Popover)
Vue.use(Tag)
Vue.use(Select)
Vue.use(Option)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Tree)

Vue.component(Message)
Vue.component(MessageBox)

Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
