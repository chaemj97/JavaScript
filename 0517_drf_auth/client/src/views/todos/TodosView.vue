<template>
 <div>
    <todo-form></todo-form>
    <todo-list></todo-list>
 </div>
</template>

<script>
import TodoForm from '@/components/TodoForm'
import TodoList from '@/components/TodoList'

export default {
  name:'TodosView',
  components: {
    TodoForm,
    TodoList,
  }
}
</script>

<style>

</style>