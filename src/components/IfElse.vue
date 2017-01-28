<template>
  <div>
    <p>Test if & else-if else label</p>
    <p v-if="input_num > 10">input_num > 10</p>
    <!--<p v-else-if="input num == 10">input num == 10</p>-->
    <p v-else="input num < 10">input num < 10</p>
    <input v-model="input_num">
  </div>
</template>

<script>
  export default{
    name: 'if-else',
    data () {
      return {
        input_num: 10
      }
    }
  }
</script>

<style></style>
