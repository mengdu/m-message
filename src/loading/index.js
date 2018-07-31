import MLoading from './loading'
import './loading.css'

MLoading.install = function (Vue) {
  Vue.component(MLoading.name, MLoading)
}

export default MLoading
