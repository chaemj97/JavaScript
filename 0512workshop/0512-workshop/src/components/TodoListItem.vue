<template>
  <div>
    <!-- 클릭하면 했는지 안했는지 유무를 줄긋기로 표시 -->
    <!-- todo.isCompleted 가 true일때만 작용 -->
    <span @click="updateTodoStatus(todo)"
      :class="{'is-completed' :todo.isCompleted}">{{ todo.title }} </span>
    <!-- 지우는 버튼 -->
    <button @click="deleteTodo(todo)">Delete</button>
  </div>
</template>

<script>
import {mapActions} from "vuex"

export default {
  name : 'TodoListItem',
  // TodoList에서 내려준 데이터
  props : {
    todo: Object,
  },
  methods: {
    // deleteTodo:function(){
    //   this.$store.dispatch('deleteTodo',this.todo)
    // },
    // updateTodoStatus:function() {
    //   this.$store.dispatch('updateTodoStatus',this.todo)
    // }

    ...mapActions([
      'deleteTodo',
      'updateTodoStatus',
    ])
  }
}
</script>

<style scoped>
/* todoList의 div에만 설정하고 싶으니 scoped 적기 */
.is-completed {
  text-decoration: line-through;
}
</style>