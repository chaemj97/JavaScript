<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>App</h1>
    <input 
    type="text"
    v-model="InputData"
    @keyup="InputChange">
    <p>parentData: {{ ParentGetData }}</p>
    <p>childData: {{ ChildData }}</p>
    <!-- app정보를 내려주기 /parent가 app을 부름(1. parent입력, 2. child입력)-->
    <app-parent :app="InputData" @app='ParentGetChange' @appparent='ChildGetChange'></app-parent>

  </div>
</template>

<script>
import AppParent from './components/AppParent.vue'

export default {
  name: 'App',
  components: {
    AppParent
  },
  data:function(){
    return{
      InputData:'',
      ParentGetData:'',
      ChildData:''
    }
  },
  methods: {
    // app 입력되었을 때
    InputChange:function(){
    },
    // parent 입력되었을 때
    ParentGetChange:function(input){
      this.ParentGetData = input
    },
    // child 입력되었을 때
    ChildGetChange:function(input){
      this.ChildData = input
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
