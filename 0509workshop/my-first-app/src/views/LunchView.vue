<template>
  <div class="about">
    <h1>점심메뉴</h1>
    <button @click="pickLunch">Pick Lunch</button>
    <p>{{ selectedLunch }}</p>
    <br>

    <h2>로또를 뽑아보자</h2>
    <button @click='goLotto'>Pick Lotto</button>

  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name : 'LunchView',
  data : function(){
    return {
      selectedLunch : '',
    }
  },
  methods:{
    pickLunch:function(){
      this.selectedLunch = _.sample(['보쌈','피자','치킨','닭발'])
    },
    goLotto:function(){
      this.$router.push({name:'lotto',params:{lottoNum:6}})
    }
  },
}
</script>