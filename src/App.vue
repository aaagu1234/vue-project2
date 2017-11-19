<template>
  <div id="app">
    <ul>
      <li><router-link to="/">首页</router-link></li>
      <li><router-link to="/first">第一个组件</router-link></li>
      <li><router-link to="/second">第二个组件</router-link></li>
    </ul> 
    <img src="./assets/logo.png">
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from './components/Footer'
export default {
  name: 'app',
  data () {
      return {
      msgq: 'a'
    }
  },
  components:{Footer}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
