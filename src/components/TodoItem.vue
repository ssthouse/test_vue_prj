<template>
  <div>
    <li>
      {{title}}
      <button v-on:click="$emit('remove')">X</button>
    </li>
  </div>
</template>

<script>
  export default{
    name: 'todo-item',
    data () {
      return {}
    },
    props: ['title']
  }

</script>

<style></style>
