import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import createPersistedState from 'vuex-persistedstate'

export default new Vuex.Store({
  plugins:[
    createPersistedState(),
  ],
  // data
  state: {
    todos: [],
  },
  // computed
  getters: {
    // 전체 todo 개수 계산
    allTodosCount : function(state){
      return state.todos.length
    },

    // 완료된 todo 개수 계산 (isCompleted === true)
    completedTodosCount: function(state){
      return state.todos.filter(todo => {
        return todo.isCompleted
      }).length
    },

    // 완료되지 않은 todo 개수 계산 (isCompleted === false)
    uncompletedTodosCount: function(state){
      return state.todos.filter(todo => {
        return !todo.isCompleted
      }).length
    },
  },
  mutations: {
    CREATE_TODO : function(state,todoItem) {
      // todo 데이터 조작
      state.todos.push(todoItem)
    },

    DELET_TODO : function(state,todoItem) {
      // 1. todoItem이 첫 번째로 만나는 요소의 index를 가져오기
      const index = state.todos.indexOf(todoItem)
      // 2. 해당 index 1개만 삭제
      state.todos.splice(index, 1)
    },

    UPDATE_TODO_STATUS : function(state,todoItem){
      // 3. 각 요소에 함수가 적용된 새로운 배열을 state.todos에 할당
      state.todos = state.todos.map(todo => {
      // 1. 선택된 todoItem과 현재 todos의 요소 todo가 일치하면
        if (todo === todoItem){
          // 2. isCompleted의 값을 변경
          return {
            // title : todoItem.title,
            // date : new Date().getTime(),
            // isCompleted : !todo.isCompleted
            //위와 동일
            ...todo,
            isCompleted : !todo.isCompleted
          }
        }
        // 1-1. 일치하지 않으면 기존 배열 return
        else{
          return todo
      }})
    }
  },
  actions: {
    // methods에서 호출됨
    // mutations로 호출
    createTodo: function(context,todoItem){
      context.commit('CREATE_TODO',todoItem)
    },
    
    deleteTodo:function({commit},todoItem){
    commit('DELET_TODO',todoItem)
    },

    updateTodoStatus:function({commit},todoItem){
      commit('UPDATE_TODO_STATUS',todoItem)
    }
  },
  modules: {
  }
})
