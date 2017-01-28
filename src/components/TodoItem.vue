<template>
  <li>{{ todo.text }} </li>
</template>

<script>
  export default{
    name: 'todo-item',
    data () {
      // The todo-item component now accepts a
      // "prop", which is like a custom attribute.
      // This prop is called todo.
      return {
      }
    },
    props: ['todo']
  }
</script>

<style>

</style>
