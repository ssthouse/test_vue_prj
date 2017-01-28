<template>
  <div>
    <p>
      Ask your question:
      <input v-model="question">
    </p>
    <p>{{answer}}</p>
  </div>

</template>


<script src="https://unpkg.com/axios@0.12.0/dist/axios.min.js"></script>
<script src="https://unpkg.com/lodash@4.13.1/lodash.min.js"></script>
<script>
  export default{
    name: 'watcher',
    data () {
      return {
        question: '',
        answer: 'I can\'t give you an answer until you give me a question'
      }
    },
    watch: {
      question: function (newQuestion) {
        this.answer = 'is getting answer...'
        this.getAnster()
      }
    },
    methods: {
      getAnswer: _.debounce(
        function () {
          var vm = this
          if (vm.question.indexOf('?') === -1) {
            return
          }

          vm.answer = 'waiting for answer'
          axios.get('https://yesno.wtf/api')
            .then(function (response) {
              vm.answer = response.data.answer
            }).catch(function (error) {
            vm.answer = 'Error, can\'t get the answer' + error;
          })
        }, 500
      )
    }
  }
</script>

<style>

</style>
