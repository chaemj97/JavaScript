<template>
  <div>
    <!-- v-for은 key필수, props -->
    <todo-list-item
      v-for="todo in todos"
      :key="todo.date"
      :todo="todo"></todo-list-item>
  </div>
</template>

<script>
import TodoListItem from '@/components/TodoListItem.vue'
import {mapState} from 'vuex'

export default {
  name: 'TodoList',
  components: {
    TodoListItem
  },
  computed:{
    // 변경 사항이 있을 때만 새로 계산한 값은 반환
    // Vuex Store의 state에 접근

    // mapState : 길게 쓰지 않고 편하게 쓰기 위하여
    // todos : function(){
    //   return this.$store.state.todos
    // }

    // computed와 함께 사용하기 위해 객체 전개 연산자(Object Spread Operator)로 객체를 복사하여 작성
    ...mapState(['todos'])
  }
}
</script>

<style>

</style>