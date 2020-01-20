<template>
  <div>
    <p>
      <a href="#" @click.stop="lang = 'en'">English</a>&nbsp;|&nbsp;
      <a href="#" @click.stop="lang = 'zh'">中文</a>
    </p>

    <div class="readme" v-if="lang === 'zh'">
      <div class="title">README-zh.md</div>
      <div class="content"><ZhReadme /></div>
    </div>

    <div class="readme" v-if="lang === 'en'">
      <div class="title">README.md</div>
      <div class="content"><Readme /></div>
    </div>
  </div>
</template>
<script>
import Readme from '../../README.md'
import ZhReadme from '../../README-zh.md'

export default {
  components: {
    Readme,
    ZhReadme
  },
  data () {
    return {
      lang: 'zh'
    }
  }
}
</script>
