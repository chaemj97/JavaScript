<template>
  <div>
    <!--엔터를 치면 input요소 value를 부모 컴포넌트로 전달-->
    <input @keyup.enter="keywordEnter" type="text">
  </div>
</template>

<script>
export default {
  name:'TheSearchBar',
  methods : {
    keywordEnter : function(event){
      //엔터 이벤트가 발생하면, input에서 value가져와서 부모로 전달
      this.$emit('keyword-enter',event.target.value)
      //검색어 없애주기
      event.target.value=''
    }
  }
}


</script>

<style>
  
</style>