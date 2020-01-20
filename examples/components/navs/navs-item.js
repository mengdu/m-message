export function isFun (v) {
  return Object.prototype.toString.call(v) === '[object Function]'
}

function renderItemLabel (ctx, menu) {
  if (isFun(menu.label)) {
    return menu.label(menu)
  } else if (ctx.$parent.$scopedSlots.item) {
    return ctx.$parent.$scopedSlots.item(menu)
  } else if (isFun(ctx.$parent.renderItem)) {
    return ctx.$parent.renderItem(menu)
  }

  return menu.label
}

export default {
  props: {
    menu: Object
  },
  // eslint-disable-next-line no-unused-vars
  render (h) {
    const menu = this.menu
    const label = <div class="v-navs-item--label">{renderItemLabel(this, menu)}</div>

    let item = null

    if (menu.link) {
      item = (
        <a href={menu.link} target={menu.target} title={menu.title}>
          {[label]}
        </a>
      )
    } else if (menu.router) {
      item = (
        <router-link to={menu.router} title={menu.title}>
          {[label]}
        </router-link>
      )
    } else {
      item = [label]
    }

    return (
      <li class="v-navs-item">{item}</li>
    )
  }
}
