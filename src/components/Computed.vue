<template>
  <div>
    <p>This is a computed label: {{result_value}}</p>
    <input v-model="input_value">
  </div>
</template>

<script>
  export default{
    name: 'computed',
    data () {
      return {
        input_value: '10'
      }
    },
    computed: {
      result_value: function () {
        return (this.input_value * this.input_value)
      }
    }
  }

</script>

<style></style>
