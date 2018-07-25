<template>
  <div>
  <div :class="{header:true,scrolled:scrolled,flex:true,red:true}" v-if="state==''">తెలుగు</div>
  <div :class="{header:true,scrolled:scrolled,flex:true,red:true}" v-else><i class='material-icons' @click="back">arrow_back</i><span class="back">{{backTitle}}</span></div>
  <main>
    <div v-if="state==''">
      <div v-for="lyric in sortLyrics" @click="showDetail(lyric)" class="pl16">{{lyric.title}}</div>
    </div>
    <transition name="slide-fade"><div class="lyric p16" v-if="state=='#detail'" v-html="lyric.details"></div></transition>
  </main>
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
      scrolled: false,
      isDetail:false,
      isLyric: false,
      backTitle:"",
      state:"",
      selectedItem:{},
      seletedSong:{},
      details:false,
      swiperOptionh: {
        spaceBetween: 50,
      },
      swiperOption: {
        slidesPerView: innerWidth/134,
        spaceBetween: 8,
        freeMode:true,
      },
      pageSwiperOption: {
        slidesPerView: 1,
        spaceBetween: 8,
        freeMode:false,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },

    }
  },
  computed: {
     ...mapGetters(["lyrics","lyric"]),
    sortLyrics: function() {
      return _(this.lyrics).orderBy("title").value();
    }
  },
  methods: {
    handleScroll() {
      this.scrolled = arguments[0].target.scrollTop>100;
    },
    showDetail(item) {
      this.selectedItem=item;
      this.isDetail=true;
      this.$store.dispatch("loadLyric",item.id);
      history.pushState(null, null, '#detail');
      this.state="#detail";
      this.backTitle="";
      
    },
    showLyric(item) {
      this.isLyric=true;
      this.selectedSong=item;
      this.state="#lyric"
      history.pushState(null, null, '#lyric');    
      this.backTitle=this.selectedItem.title;
    },
    changePage() {
      this.state=location.hash;
    },
    back() {
      history.go(-1);
    }
  },
  created: function() {
    var that = this;
    setTimeout(function() {
      var main = document.getElementsByTagName("MAIN")[0]
      main.addEventListener('scroll', that.handleScroll);  
    },100);
    window.onhashchange=this.changePage;
  },
  mounted: function() {
    this.$store.dispatch("loadLyric");
  }
}

</script>
<style scoped>
  html {font-size: 18px;font-family: telugu;}
  div {font-family: telugu; font-size:1rem;}
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
