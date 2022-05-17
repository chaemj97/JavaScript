<template>
  <div>
    <h1>여기는 오늘의 목록출력</h1>
    <ul>
      <button @click="getTodos">가져오기</button>
      <todo-list-item
       v-for="todo in todos"
       :key="todo.id"
       :todo-item="todo"
       ></todo-list-item>
       <img src="" alt="">
    </ul>
  </div>
</template>

<script>
import TodoListItem from './TodoListItem.vue'
import axios from 'axios'

const SERVER_URL = process.env.VUE_APP_SERVER_URL
export default {
  name:'TodoList',
  components : {
    TodoListItem,
  },
  data : function(){
    return {
      todos : []  
    }
  },
  methods : {
    // 요소가 만들어지면, DB에서 데이터 가져오기 
    // 일단은...사용자 상관없이 전체목록 가져오기
    // http://127.0.0.1:8000/api/v1/todos/ GET 요청 만들기
    // axios 요청

    // 이제 로그인 성공해서 인증 토큰 가지고 있으니까...
    // 요청할 때 token 같이 보내주고
    // 내가 작성한 todos만 가져와서 보여주면 됩니다...
    getToken : function(){
      const config ={
        Authorization : `Token ${localStorage.getItem('basicToken')}`
      }
      return config
    },
    getTodos:function(){
      axios({
      method : 'get',
      url : `${SERVER_URL}/api/v1/todos/`,
      // headers : {
      //   'Authorization' : `Token ${localStorage.getItem('basicToken')}`
      // }
      headers : this.getToken()
    })
      .then(response => {
        // console.log(response.data)
        this.todos = response.data
        //저장은........
        //저장버튼을 따로 만들든지...아니면 끌때 한 번저장하든지...알아서 잘...저장하시면 됩니다. 
        // update나 작성 기능을 구현 안했기 때문에...
        // server에 crud 기능 작업하고 나서 client에서 axios로 요청하기...
        // 로그인/ 작성만....
      })
    }
  },
  
  
}
</script>

<style>

</style>