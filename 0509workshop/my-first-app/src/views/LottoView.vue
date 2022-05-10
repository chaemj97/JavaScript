<template>
  <div>
    <h1>로또</h1>
    <button @click="getLuckyNums">Get Lucky Numbers</button>
    <p>{{ selectedLuckyNums }}</p>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name : 'LottoView',
  data : function(){
    return {
      selectedLuckyNums : [],
    }
  },
  methods:{
    getLuckyNums:function(){
      const numbers = _.range(1,46)
      this.selectedLuckyNums = _.sampleSize(
        numbers,
        this.$route.params.lottoNum,
      )
    },
  },
}
</script>

<style>

</style>