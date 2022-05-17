<template>
  <div>
    <h1>오늘의 할일을 입력하세요</h1>
    <!-- 사용자가 input요소에 데이터를 입력하면.... store에 넣어주기-->
    <input type="text"
      v-model="todoTitle"
      @keyup.enter="todoEnter">
  </div>
</template>

<script>
export default {
  name:'TodoForm',
  data : function(){
    return {
      todoTitle:''
    }
  },
  methods : {
    todoEnter: function(){
      // const todoItem = {
      //   title : this.todoTitle,
      //   completed : false,
      // }
    }
  }
}
</script>

<style>

</style>