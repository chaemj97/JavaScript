<template>
  <div>
    <h1>로그인</h1>
    <div>
      <label for="username" ></label> username : 
      <input type="text" 
      v-model="credentials.username"
      id="username">
    </div>
    <div>
      <label for="password"></label> password : 
      <input type="password" 
      v-model="credentials.password"
      id="password">
    </div>
    <button @click="login">로그인</button>
  </div>
</template>

<script>
import axios from 'axios'
const SERVER_URL = process.env.VUE_APP_SERVER_URL
export default {
  name : 'LoginView',
  data : function(){
    return {
      credentials:{
        username : '',
        password : '',
      }
    }
  },
  methods : {
    login : function(){
      //axios로 login요청 보내고
      //로그인 성공하면 응답(키)받아서, 저장하기
      //실패 하면 왜 실패했는지 alert 출력해주기
      // console.log(this.username,' ',this.password)
      console.log(this.credentials)
      axios({
        method: 'POST',
        url:`${SERVER_URL}/api/v1/accounts/login/`,
        data: this.credentials
      })
        .then(response=>{
          //로그인 성공하면 나한테 뭘 줄거니까.. 확인
          // console.log(response.data)
          localStorage.setItem('basicToken',response.data.key)
          this.$router.push({name:'TodosView'})
          



        })
        .catch(error=>{
          console.log(error)
        })



    }
  }
}
</script>

<style>

</style>