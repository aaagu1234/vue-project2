<template>
  <div id="Footer" class="footer">
      <span>{{msg}}</span>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '我是底部footer！'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .footer{
    height:80px;
    background:#e5e5e5;
    text-align:center;
    line-height:80px;
 }
</style>
