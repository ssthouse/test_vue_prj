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
    <br><br>

    <p>测试饿了么控件</p>
    <el-button>Let's do this!</el-button>
    <br><br>

    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
    <br><br>

    <checkbox-item></checkbox-item>
    <br><br>

    <select-item></select-item>
    <br><br>

    <label>静态 props</label>
    <props-item message="hahaha" id="props_item_static"></props-item>
    <label>动态 props</label>
    <props-item v-bind:message="props_message"></props-item>
    <input v-model="props_message">
    <br><br><br><br>

    <emit-event-item v-on:click-el-button="increase_total_num"></emit-event-item>
    <emit-event-item v-on:click-el-button="increase_total_num"></emit-event-item>
    <p>{{totalNum}}</p>
    <br><br>

    <transition-item></transition-item>
    <br><br><br><br>

    <dynamic-component></dynamic-component>
  </div>
</template>

<script>
  import Hello from './components/Hello'
  import Once from './components/Once'
  import Computed from './components/Computed'
  import IfElse from './components/IfElse.vue'
  import TodoList from './components/TodoList.vue'
  //  import Watcher from './components/Watcher'
  import CheckBox from './components/CheckBox.vue'
  import Select from './components/Select.vue'
  import Props from './components/Props.vue'
  import EmitEvent from './components/EmitEvent.vue'
  import Transation from './components/Transition.vue'
  import DynamicComponent from './components/DynamicComponent.vue'

  export default {
    name: 'app',
    data () {
      return {
        title: 'hahaha',
        props_message: 'I am the props message',
        totalNum: 0
      }
    },
    methods: {
      increase_total_num: function () {
        this.totalNum += 1
      }
    },
    components: {
      'hello': Hello,
      'once': Once,
      'computed': Computed,
      'if-else': IfElse,
      'todo-list': TodoList,
      'checkbox-item': CheckBox,
      'select-item': Select,
      'props-item': Props,
      'emit-event-item': EmitEvent,
      'transition-item': Transation,
      'dynamic-component': DynamicComponent
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
