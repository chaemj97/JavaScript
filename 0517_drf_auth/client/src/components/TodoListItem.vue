<template>
  <div>
    <span @click="updateTodoStatus"
      :class="{ 'is-complete' : todoItem.completed}"
    >{{ todoItem.title }}</span>
    <button @click="deleteItem">[x]</button>
    <span>{{ dataTest }}</span> 
    <!-- {{todoItem}} -->
  </div>
</template>

<script>
export default {
  name:'TodoListItem',
  props:{
    todoItem: Object,
  },
  methods:{
    deleteItem : function(){
    },
    updateTodoStatus:function(){
    }
  }
}
</script>

<style>
  .is-complete{
    text-decoration: line-through;
  }
</style>