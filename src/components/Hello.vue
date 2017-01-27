<template>
  <div class="hello">
    <!--自己的测试代码-->
    <span v-bind:title="message">Hover to see the title</span>
    <p v-if="is_show">Now you got me!</p>
    <ol>
      <li v-for="todo in todos">
        {{todo.text}}
      </li>
    </ol>
    <p>测试点击事件绑定</p>
    <p>{{msg_to_reverse}}</p>
    <button v-on:click="reverseMessage">
      Reverse Message
    </button>

    <p>测试双向绑定</p>
    <input v-model="input_model">
    <p>{{input_model}}</p>

    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        message: 'this is the new title ' + new Date(),
        is_show: false,
        todos: [
          {text: 'Learn 数学'},
          {text: 'Learn 英语'},
          {text: 'Build something awesome'}
        ],
        msg_to_reverse: 'Hi ssthouse!',
        input_model: 'this is the input model'
      }
    },
    methods: {
      reverseMessage: function () {
        this.msg_to_reverse = this.msg_to_reverse.split(' ').reverse().join('     ` ')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
