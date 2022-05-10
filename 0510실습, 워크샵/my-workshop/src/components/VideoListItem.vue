<template>
  <li @click="videoSelect">
    <img :src="thumbnailSrc" alt="">
    <span>{{ title }}</span>
  </li>
  <!-- 썸네일이랑 제목이랑 -->
  <!-- snippet > thumbnail > default > url-->
  <!-- snippet > title -->
</template>

<script>
export default {
  name:'VideoListItem',
  props:{
    video:Object,
  },
  methods:{
    videoSelect :function(){
      // 내가 선택되었으니깐... 메인에서 나를 출력해라
      this.$emit('video-select',this.video)
    }
  },
  computed:{
    thumbnailSrc:function(){
      return this.video.snippet.thumbnails.default.url
    },
    title:function(){
      return this.video.snippet.title
    }
  }
}
</script>

<style>

</style>