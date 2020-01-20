import DemoBlock from './demo-block'
import './demo-block.css'

DemoBlock.install = function (Vue, options = {}) {
  Vue.component(options.name || 'DemoBlock', DemoBlock)
}

export default DemoBlock
