<template>
  <div id="app-parent">
    <h1>AppParent</h1>
    <input 
    type="text"
    v-model="ParentInputData"
    @keyup="ParentInputChange">
    <p>appData: {{ app }}</p>
    <p>childData: {{ChildGetData}}</p>
    <!-- 앱에서 넘겨준 데이터 넘겨주기/ parent데이터 내려주기/ 앱이 날 부름 -->
    <app-child :app="app" :parent="ParentInputData" @parent='ChildGetChange'></app-child>
  </div>
</template>

<script>
import AppChild from './AppChild.vue'

export default {
  name: 'AppParent',
  // app이 내려준 데이터
  props:{
    app:String,
  },
  components: {
    AppChild
  },
  data:function(){
    return{
      ParentInputData:'',
      ChildGetData:''
    }
  },
  methods: {
    // parent 입력되었을 때 -> app 불러
    ParentInputChange:function(){
      this.$emit('app',this.ParentInputData)
    },
    // child 입력되었을 때 -> 이 정보 app한테도 주기
    ChildGetChange:function(input){
      this.ChildGetData = input
      this.$emit('appparent',this.ChildGetData)
    }
  }
}
</script>

<style>

</style>