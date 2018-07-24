<template>
  <a :href="repo">
    <img class="fork-img" src="https://s3.amazonaws.com/github/ribbons/forkme_right_red_aa0000.png" alt="Fork me on GitHub">
    </a>
</template>
<script>
export default {
  props: {
    repo: String
  }
}
</script>
<style>
  .fork-img{
    position: absolute;
    top: 0;
    right: 0;
    border: 0;
  }
</style>
