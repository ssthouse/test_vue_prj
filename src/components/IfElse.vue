<template>
  <div>
    <p>Test if & else-if else label</p>
    <p v-if="input_num > 10">input_num > 10</p>
    <!--<p v-else-if="input num == 10">input num == 10</p>-->
    <p v-else="input num < 10">input num < 10</p>
    <input v-model="input_num">
    <br>
    <br>

    <div v-if="isUsernameLog">
      <label>Username:</label>
      <input placeholder="Enter your name">
    </div>
    <div v-else>
      <label>Email:</label>
      <input placeholder="Enter your email">
    </div>
    <input type="checkbox" v-model="isUsernameLog">Use email to login?</input>
  </div>
</template>

<script>
  export default{
    name: 'if-else',
    data () {
      return {
        input_num: 10,
        isUsernameLog: true
      }
    }
  }
</script>

<style></style>
