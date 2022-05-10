<template>
  <div>
    <!-- 반복적으로 videos 요소를 출력-->
    <ul>
      <video-list-item v-for="video in videos" 
        :key="video.id.videoId"
        :video="video"
        @video-select="videoSelect">
      </video-list-item>
       
    </ul>
  </div>
</template>

<script>
import VideoListItem from './VideoListItem.vue'
export default {
  name:'VideoList',
  components:{
    VideoListItem
  },
  methods:{
    videoSelect : function(video){
      this.$emit('video-select',video)
    }
  },
  props:{
    videos : Array,
  }
}
</script>

<style>

</style>