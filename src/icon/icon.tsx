'use strict'
import { defineComponent, RenderFunction } from 'vue'

const icons: {[key: string]: any} = {}

export const addIcon = function (name: string, options:any) {
  icons[name] = options
}

const Icon = defineComponent({
  name: 'Icon',
  props: {
    name: String,
    color: String
  },
  computed: {
    svg () {
      if (!this.name) return undefined
      return icons[this.name]
    }
  },
  // eslint-disable-next-line
  render (h: RenderFunction) {
    const svg = this.svg

    if (!svg) {
      // eslint-disable-next-line
      console.warn(`The name of '${this.name}' could not be found.`)
      return <span class="m-svg-icon"></span>
    }

    const style = {
      color: this.color ? this.color : (svg.fill ? svg.fill : null)
    }

    return (
      <span class={['m-svg-icon', 'm-svg-icon--' + this.name]}>
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox={svg.viewBox}
          style={style}
          class={svg.class}>
          { svg.defs && <defs v-html={svg.defs}></defs> }
          { svg.path && <path fill="currentColor" d={svg.path} /> }
          { svg.html && <g v-html={svg.html}></g> }
          {this.$slots.default}
        </svg>
      </span>
    )
  }
})

Icon.add = addIcon

export default Icon
