<template>
  <div>
    <input type="text"
      v-model.trim='todoTitle'
      >
    <!-- Add 버튼을 클릭하면 createTodo -->
    <button @click="createTodo">Add</button>
  </div>
</template>

<script>
export default {
  name:'TodoForm',
  data: function(){
    return {
      todoTitle: '',
    }
  },
  methods: {
    createTodo: function(){
      const newTodo = {
        title: this.todoTitle,
        // 줄긋기 용
        isCompleted: false,
        date: new Date().getTime()
      }
      // 호출 -> actions
      this.$store.dispatch('createTodo', newTodo)
      // 빈 값으로 바꾸기
      this.todoTitle = ''
    }
  }
}
</script>

<style>

</style>