<template>
  <div>
    <select v-model="single_value" id="single-select">
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <label v-text="single_value" for="single-select"></label>
    <br><br>

    <select v-model="multiple_values" id="multiple-select" multiple>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <label for="multiple-select" v-text="multiple_values"></label>
    <br><br>

    <p><b>动态生成选项:</b></p>
    <select v-model="dynamic_values" multiple>
      <option v-for="item in dynamic_options" v-text="item.text" v-bind:value="item.value"></option>
    </select>
    <span>{{dynamic_values}}</span>
  </div>
</template>

<script>
  export default{
    name: 'select-item',
    data () {
      return {
        single_value: '',
        multiple_values: [],
        dynamic_values: [],
        dynamic_options: [
          {text: 'option1', value: 'value1'},
          {text: 'option2', value: 'value2'},
          {text: 'option3', value: 'value3'}
        ]
      }
    }
  }

</script>

<style></style>
