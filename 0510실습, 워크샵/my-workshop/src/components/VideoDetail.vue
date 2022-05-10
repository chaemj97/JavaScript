<template>
  <div v-if="isVideo">
    <div>
      <iframe :src="videoSrc" frameborder="0"></iframe>
    </div>
    <h2>{{ video.snippet.title }}</h2>
    <p>{{ video.snippet.description }}</p>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  name:'VideoDetail',
  props : {
    video : Object,
  },
  computed:{
    videoSrc : function(){
      return `https://www.youtube.com/embed/${this.video.id.videoId}`
    },
    isVideo : function(){
      return !_.isEmpty(this.video)
    }
  }
}
</script>

<style>

</style>