<template>
  <div div="appwrapper">
    <!-- <button @click="loadMovies">Load</button> -->
    <header><i>search</i></header>
    <main>
      <div v-for="song in songs" :class="{p8:true,hide:isLyric}" @click="showLyric(song)" v-if="!isLyric">{{song.data.title}}</div>
      <textarea v-if="isLyric" :class="{p8:true,hide:!isLyric}" ref="lyric" v-model="selectedSong.data.lyric" rows="35" cols="80" />
    </main>
    <footer><button @click="saveLyric">Save</button><span @click="nextPage">Next</span></footer>
  </div>
</template>
<script>
import {cloudDb} from '../firebaseconfig';
import { mapGetters,mapMutations } from 'vuex';
import _ from 'lodash';

export default {
  name: 'Songs',
  
  data: function () {
    return {
      moviesDb: cloudDb.collection("movies"),
      songsDb: cloudDb.collection("songs"),
      selectedSong:{},
      isLyric:false,
      songs:[],
      cnPage:1,
      lastVisible:""
    }
  },
  computed: {
    // ...mapGetters(["songs","movies"]),
  },
  methods: {
    load: function() {
      _(this.movies).each(function(v) {
        cloudDb.collection("movies").add(v); 
      })
    },
    showLyric: function(song) {
      this.selectedSong=song;
      this.isLyric=true;
    },
    saveLyric: function() {
      this.selectedSong.ref.update({lyric:this.selectedSong.data.lyric});
      this.isLyric=false;
    },
    nextPage: function() {
      debugger;
      this.songs = [];
      this.cnPage++;
      var that = this;
      this.songsDb.orderBy("title").startAfter(that.lastVisible).limit(10).get().then(function(snapshot) {
        snapshot.forEach(function(doc) {
          debugger;
          that.songs.push({data:doc.data(),ref:doc.ref});
        })
      })  
    }

  },
  mounted: function() {
    var that = this;
    this.songsDb.orderBy("title").startAfter(this.cnPage*10).limit(10).get().then(function(snapshot) {
      that.lastVisible = snapshot.docs[snapshot.docs.length-1];
      snapshot.forEach(function(doc) {
        that.songs.push({data:doc.data(),ref:doc.ref});
      })
    })
  }
}
</script>
<style scoped>
  button {font-size: 1.2rem; padding: 8px;}
  main {overflow: auto; min-height:600px;}
  .appwrapper {display: grid; grid-template-rows: 48px 1fr 48px; overflow: hidden;}
  .p8 {padding:8px;}
  body {font-family: telugu;}
  i {font-family: 'Material Icons'; font-weight: normal; font-style: normal; text-transform: none; letter-spacing: normal; word-wrap: normal; white-space: nowrap; direction: ltr; -webkit-font-smoothing: antialiased; text-rendering: optimizeLegibility; -moz-osx-font-smoothing: grayscale; font-feature-settings: 'liga';  padding:4px; font-size:1.4rem;}
</style>