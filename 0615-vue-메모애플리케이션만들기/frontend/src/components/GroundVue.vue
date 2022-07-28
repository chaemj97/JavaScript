<template>
  <div class="ground">
    <HeaderVue/>
    <MemoVue/>
    <FooterVue/>
  </div>
</template>

<script>
import HeaderVue from './HeaderVue.vue'
import FooterVue from './FooterVue.vue'
import MemoVue from './MemoVue.vue'

export default {
  components:{
    HeaderVue,
    FooterVue,
    MemoVue
  }
}
</script>

