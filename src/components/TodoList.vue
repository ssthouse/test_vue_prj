<template>
  <div>
    <input v-model="newTodo" v-on:keyup.enter="addNewTodo">

    <todo-item v-for="title in todoItems" v-bind:title="title"></todo-item>
  </div>
</template>
<script>
  import TodoItem from './TodoItem.vue'

  export default{
    name: 'todo-list',
    data () {
      return {
        todoItems: ['item one', 'item two'],
        newTodo: ''
      }
    },
    methods: {
      addNewTodo: function () {
        this.todoItems.push(this.newTodo)
        this.newTodo = ''
      }
    },
    components: {
      'todo-item': TodoItem
    }
  }

</script>

<style></style>
