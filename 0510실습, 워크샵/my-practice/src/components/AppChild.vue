<template>
  <div>
    <h1>AppChild</h1>
    <input 
    type="text"
    v-model="ChildInputData"
    @keyup="ChildInputChange">
    <p>appData: {{ app }} </p>
    <p>parentData: {{ parent }}</p>
    <p>childData: {{ ChildInputData }}</p>
  </div>
</template>

<script>
export default {
  name:'AppChild',
  // app이 내려준 데이터, parent가 내려준 데이터
  props:{
    app:String,
    parent:String,
  },
  data:function(){
    return{
      ChildInputData:''
    }
  },
  methods: {
    // child가 입력되었을 때 -> paren 불러
    ChildInputChange:function(){
      this.$emit('parent',this.ChildInputData)
    }
  }

}
</script>

<style>

</style>