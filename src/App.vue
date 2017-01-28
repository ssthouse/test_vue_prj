<template>
  <div id="app">
    <p> {{title}}</p>
    <img src="./assets/logo.png">
    <hello></hello>
    <br>

    <p>Test once.vue</p>
    <once></once>
    <br>

    <p>Test Computed.vue</p>
    <computed></computed>
    <br>

    <p>Test Watcher.vue</p>
    <watcher></watcher>
  </div>
</template>

<script>
  import Hello from './components/Hello'
  import Once from './components/Once'
  import Computed from './components/Computed'
  import Watcher from './components/Watcher'

  export default {
    name: 'app',
    data () {
      return {
        title: 'hahaha'
      }
    },
    components: {
      Hello, Once, Computed, Watcher
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
