<template>
  <div>
    <!-- 특수 문법 deleteTodo 실행할 때, todo 같이 넘겨주셔야 함! -->
    <!-- todo.isCompleted 가 true일때만 작용 -->
    <span 
      @click="updateTodoStatus"
      :class="{'is-completed': todo.isCompleted}"  
    >
      {{ todo.title }}
    </span>
    <button @click="deleteTodo">[x]</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'TodoListItem',
  props: {
    todo: Object,
  },
  methods: {
    // actions의 'deleteTodo' 함수를 바로 쓰고 싶다...
    ...mapActions(['deleteTodo', 'updateTodoStatus']),
    prevUpdateTodo() {
      this.$store.dispatch('deleteTodo', this.todo)
    },
  }
}
</script>

<style scoped>
/* scoped : 지금 components에서만 작용 */
.is-completed {
  text-decoration: line-through;
}

div {
  border: 2px solid black;
  margin: 2px;
  padding: 2px;
}

span {
  cursor: pointer;
}
</style>
