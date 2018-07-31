<template>
  <div class='flex'>
    <div v-if="isSong" class="p16">
      <div class="h1">{{song.album.album_title}}</div>
      <div v-for="track in song.album.track" class="p8">
        {{track.song_utf}}
      </div>
    </div>
    <div v-else>
      <div class="p16">
        <div class="h1">{{cnLyric.title}}</div>
        <div>{{cnLyric.labels}}</div>
        <pre>{{cnLyric.lyric}}</pre>
        <span @click="save(99999)">Skip</span>
      </div>
      <div class="p16 h100">
        <input type="text" v-model='filter1'/>
        <div v-for="movie in orderedMovies" @click="save(movie.id)">{{movie.name}} - {{movie.year}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import {db} from '../firebaseconfig';
import { mapGetters,mapMutations } from 'vuex';
import _ from 'lodash';

export default {
  name: 'Other',
  
  data: function () {
    return {
      filter1:"",
      isSong:true
    }
  },
  computed: {
    ...mapGetters(["lyric","data","song"]),
    orderedMovies: function() {
      var that=this;
      
      if(this.data.movies)
        return _(this.data.movies).filter(function(v) {return v.name.indexOf(that.filter1)>=0}).orderBy("name").value();
      return [];
    },
    cnLyric: function() {
      if(this.lyric)
        return this.lyric[0];
      
      return {};
    }
  },
  methods: {
    save: function(id) {
      this.$store.dispatch("saveLyric",{lyric:this.cnLyric.id,movie:id});

    }
  },
  created: function() {
  },
  mounted: function() {
    this.$store.dispatch("loadLyric");
    this.$store.dispatch("load",{url:"h=movies&col=name,id,year",key:"movies"});
    this.$store.dispatch("loadSong");
    
  }
}
</script>
<style scoped>
  html {font-size: 18px;font-family: telugu;}
  div {font-family: telugu; font-size:1rem;}
  input {font-size: 1.6rem; padding: 8px;}
  pre {width:50vw; white-space: normal;}
  .h100 {height:100vh; overflow:auto;}
  .flex {display: flex;}
  .red {color:#f44336;}
  .blue {color:#2196F3;}
  .green {color: #4CAF50;}
  .orange {color: #FF5722;}
  .header { position: absolute; left:0; top:0; width:100%; z-index:10; background:#fff; font-size: 1.4rem; color:rgb(0,0,0,0.6);   padding-left:16px; font-size: 1.6rem;font-family: telugubold; padding-top:8px;}
  .h1,.h2,.h4 {font-family: telugubold; padding-left:8px;}
  .h1 {font-size: 1.6rem;}
  .h2 {font-size: 1.4rem;}
  .h3 {font-size: 1.2rem; background-color: #F5F5F5; padding-left:8px;border-bottom:1px solid #f0f0f0;color:#666;}
  .break {height:4px; background-color: #f5f5f5}
  .p8 {padding: 8px;}
  .p16 {padding: 16px;}
  .pl16 {padding-left:16px;}
  .m8 {margin: 8px;}
  .m16 {margin: 16px;}
  .pt16 {padding-top: 16px;}
  .pt32 {padding-top: 32px;}
  .card {min-height: 30vh; border-bottom:1px solid #f0f0f0; padding-left:16px;}
  .toolbar {}
  .swiper-container {padding:16px; margin-top:32px;}
  .swiper-slide img {width:100%; border-radius:3px;}
  .swiper-slide {text-align: center; font-size:0.8rem;}
  .scrolled {box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);}
  .li {padding:8px 0; border-bottom: 1px solid #f5f5f5;}
  .lyric {text-align:center; font-size: 1.6rem; }
  main {padding:72px 0px; height: 100vh; position: absolute; top:0; left:0; width:100vw; font-size:0.8rem;}
  .back {font-size: 1.2rem; padding-left: 16px; color:#000; font-family:telugu;}
  .slide-fade-enter-active {
    transition: all .4s ease;
  }
  .slide-fade-leave-active {
    transition: all .4s ease;
  }
  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateX(100vw);
    opacity: 0;
  }

</style>
