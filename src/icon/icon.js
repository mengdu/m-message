'use strict'
const icons = {}

export const addIcon = function (name, options) {
  icons[name] = options
}

const Icon = {
  name: 'Icon',
  props: {
    name: String,
    color: String
  },
  computed: {
    svg () {
      return icons[this.name]
    }
  },
  // eslint-disable-next-line
  render (h) {
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
          { svg.defs && <defs domPropsInnerHTML={svg.defs}></defs> }
          { svg.path && <path fill="currentColor" d={svg.path} /> }
          { svg.html && <g domPropsInnerHTML={svg.html}></g> }
          {this.$slots.default}
        </svg>
      </span>
    )
  }
}

Icon.add = addIcon

export default Icon
