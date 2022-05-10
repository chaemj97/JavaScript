<template>
  <div id="app">
      <h1>MY FIRST YOUTUBE PROJECT</h1>
      <the-search-bar
        @keyword-enter="keywordEnter"></the-search-bar>
      <hr>
      <video-detail :video="selectedVideo"></video-detail>
      <hr>
      <video-list 
      :videos="videos"
      @video-select="videoSelected"></video-list>
  </div>
</template>

<script>
import axios from 'axios'

import TheSearchBar from './components/TheSearchBar.vue'
import VideoDetail from './components/VideoDetail.vue'
import VideoList from './components/VideoList.vue'

const API_URL = 'https://www.googleapis.com/youtube/v3/search'
const API_KEY = 'AIzaSyDkUPVMzT9LtEW3wsS20KoRn7UqflIfUbY'

export default {
  name: 'App',
  components: {
    TheSearchBar,
    VideoDetail,
    VideoList,
  },
  data : function(){
   return {
     videos : [],
     selectedVideo:{},
   } 
  },
  methods:{
    keywordEnter : function(keyword){
      // 받아온 키워드로 검색, 일단 출력
      // console.log('검색어 입력됨: ',keyword)
      // youtube api에 요청보내기
      this.getVideos(keyword)
    },
    getVideos:function(keyword){
      // axios로 youtube api에 요청
      const params = {
        key : API_KEY,
        part : 'snippet',
        type : 'video',
        q : keyword
      }
      axios({
        method:'get',
        url : API_URL,
        params : params
      })
      .then(response => {
        // console.log(response.data)
        // 비디오 목록
        this.videos = response.data.items
        //선택된 비디오, 초기값은 0번 비디오
        this.selectedVideo = this.videos[0]
      })
      .catch(function(err){
        console.log(err)
      })
    },
    videoSelected:function(video){
      this.selectedVideo = video
    }
  }
}///
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
