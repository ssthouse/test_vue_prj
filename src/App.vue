<template>
  <div id="app">
    <p> {{title}}</p>
    <img src="./assets/logo.png">
    <hello></hello>
    <br><br>

    <p>Test once.vue</p>
    <once></once>
    <br><br>

    <p>Test Computed.vue</p>
    <computed></computed>
    <br><br>

    <p>Test Watcher.vue</p>
    <p>Fail to use external js file ===> fix it latter!</p>
    <!--<watcher></watcher>-->
    <br><br>

    <if-else></if-else>
    <br><br>

    <todo-list></todo-list>
  </div>
</template>

<script>
  import Hello from './components/Hello'
  import Once from './components/Once'
  import Computed from './components/Computed'
  import IfElse from './components/IfElse.vue'
  import TodoList from './components/TodoList.vue'
  //  import Watcher from './components/Watcher'

  export default {
    name: 'app',
    data () {
      return {
        title: 'hahaha'
      }
    },
    components: {
      'hello': Hello, 'once': Once, 'computed': Computed, 'if-else': IfElse, 'todo-list': TodoList
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
