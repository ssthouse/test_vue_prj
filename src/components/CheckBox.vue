<template>
  <div>
    <input type="checkbox"
           v-model="check_bool"
           id="checkboxGenderBool">
    <label for="checkboxGenderBool">性别:{{check_bool}}</label>
    <br><br>

    <input type="radio"
           v-model="check_value"
           id="checkboxGenderValue"
           value="男">
    <label for="checkboxGenderValue">性别:{{check_value}}</label>
  </div>
</template>

<script>
  export default{
    name: 'checkbox-item',
    data () {
      return {
        check_bool: true,
        check_value: ''
      }
    }
  }
</script>

<style></style>
