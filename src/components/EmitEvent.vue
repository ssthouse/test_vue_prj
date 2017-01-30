<template>
  <div>
    <el-button v-on:click="emitEvent">click me to emit an event to parent</el-button>
  </div>
</template>

<script>
  export default{
    name: 'emit-event-item',
    data () {
      return {}
    },
    methods: {
      emitEvent: function () {
        this.$emit('click-el-button')
      }
    },
    props: []
  }
</script>

<style>

</style>
