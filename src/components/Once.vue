<template>
  <div>
    <span v-once>this msg will only render once: {{msg}}</span>
    <br/>
    <input v-model="msg">
  </div>
</template>

<script>
  export default{
    name: 'once',
    data () {
      return {
        msg: 'I am the msg :)'
      }
    }
  }
</script>

<style>


</style>
