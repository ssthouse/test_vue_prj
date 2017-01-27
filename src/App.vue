<template>
  <div id="app">
    <p> {{title}}</p>
    <img src="./assets/logo.png">
    <hello></hello>
    <!-- 测试模块 -->
    下面是测试模块title
    <test></test>
  </div>
</template>

<script>
  import Hello from './components/Hello'
  import Test from './components/Test'

  export default {
    name: 'app',
    data () {
      return {
        title: 'hahaha'
      }
    },
    components: {
      Test, Hello
    }
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
