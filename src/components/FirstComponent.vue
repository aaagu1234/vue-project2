<template>
  <div id="FirstComponent">
    <h1>Frist component</h1>
    <a class="title-red"> written by {{author}}</a>

  </div>
</template>
<script type="text/javascript">
  export default {
    data () {
      return {
        author: 'afds first wexin xin  '
      }
    }
  }
</script>
<style>
  .title-red {
    color: red;
  }
</style>
