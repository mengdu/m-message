<template>
  <div class="demo-block">
    <slot name="source"></slot>
    <div class="meta" ref="meta">
      <div class="description" v-if="$slots.default">
        <slot></slot>
      </div>
      <slot name="highlight"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DemoBlock',
  props: {
    jsfiddle: Object
  },
  created () {
    // console.log(this.jsfiddle)
  }
}
</script>
<style>
  
  .demo-block{
    border: 1px solid #ebebeb;
    border-radius: 3px;
    transition: .2s;
    padding: 0px;
    margin: 10px 0;
  }
  .demo-block .source{
    padding: 24px;
  }
  .demo-block .description {
    padding: 20px;
    box-sizing: border-box;
    border: 1px solid #ebebeb;
    border-radius: 3px;
    font-size: 14px;
    line-height: 22px;
    color: #666;
    word-break: break-word;
    margin: 10px;
    background-color: #fff;
  }
  .demo-block .description p{
    padding: 0;
    margin: 0;
  }
  .demo-block .meta {
    background-color: #fafafa;
    border-top: 1px solid #eaeefb;
    overflow: hidden;
  }
  .demo-block body,
  .demo-block .meta .hljs{
    background: transparent;
  }
</style>
