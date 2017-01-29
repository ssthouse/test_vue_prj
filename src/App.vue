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

    <v-footer>Foot</v-footer>
    <v-btn success flat>Try Vuetify Button</v-btn>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Vuetify from 'vuetify'
  import Hello from './components/Hello'
  import Once from './components/Once'
  import Computed from './components/Computed'
  import IfElse from './components/IfElse.vue'
  import TodoList from './components/TodoList.vue'
  //  import Watcher from './components/Watcher'

  Vue.use(Vuetify)

  export default {
    name: 'app',
    data () {
      return {
        title: 'hahaha'
      }
    },
    components: {
      'hello': Hello, 'once': Once, 'computed': Computed, 'if-else': IfElse, 'todo-list': TodoList
    },
    mounted () {
      this.$vuetify.init()
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
