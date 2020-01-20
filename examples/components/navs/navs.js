import NavItem from './navs-item'

export default {
  name: 'VNavs',
  components: { NavItem },
  props: {
    menus: {
      type: Array,
      default () {
        return []
      }
    },
    currentActive: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      actives: []
    }
  },

  watch: {
    currentActive (v) {
      this.actives = [...v]
    }
  },

  created () {
    this.actives = [...this.currentActive]
  },
  // eslint-disable-next-line no-unused-vars
  render (h) {
    return (
      <ul class="v-navs">
        {this.menus.map(e => {
          return <NavItem menu={e}/>
        })}
      </ul>
    )
  }
}
