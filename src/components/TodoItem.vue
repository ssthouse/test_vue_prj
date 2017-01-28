<template>
  <div id="todo-item">
    <li>{{ todo.text }}</li>
  </div>
</template>

<script>
  export default{
    name: 'todo-item',
    data () {
      return {}
    },
    props: ['todo']
  }
</script>

<style>

</style>
