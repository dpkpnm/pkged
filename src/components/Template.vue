<template>
  <div>
    <header :class="{scrolled:scrolled,flex:true}" v-if="!detail1">
      <i class="material-icons">search</i>
      <div class="grow">తెలుగు</div>
      <i class="material-icons">more_vert</i>
    </header>
    <header :class="{scrolled:scrolled,flex:true}" v-if="detail1">
      <i class="material-icons" @click="back">arrow_back_ios</i>
    </header>
    <main>
      <h3>Top destinations</h3>
      <swiper ref="mySwiper" @someSwiperEvent="callback" :options="swiperOption">
        <swiper-slide v-for="item in temp"><img :src="item.img" @click="showDetail(item)"><div>{{item.title}}</div><span>{{item.sub}}</span></swiper-slide>
      </swiper>
      <h3>This year</h3>
      <swiper ref="mySwiper" @someSwiperEvent="callback" :options="swiperOption">
        <swiper-slide v-for="item in temp"><img :src="item.img"><div>{{item.title}}</div><span>{{item.sub}}</span></swiper-slide>
      </swiper>
      <h3>Upcoming Releases</h3>
      <swiper ref="mySwiper" @someSwiperEvent="callback" :options="swiperOption">
        <swiper-slide v-for="item in temp"><img :src="item.img"><div>{{item.title}}</div><span>{{item.sub}}</span></swiper-slide>
      </swiper>
      <h3>Movies on TV</h3>
      <swiper ref="mySwiper" @someSwiperEvent="callback" :options="swiperOption">
        <swiper-slide v-for="item in temp"><img :src="item.img"><div>{{item.title}}</div><span>{{item.sub}}</span></swiper-slide>
      </swiper>
      <transition name="slide-fade">
      <div id="detail" v-if="detail1">
        <img :src="selectedItem.img" />
        <h3>{{selectedItem.title}}</h3>
        {{selectedItem.sub}}
        <div><button>+ Subscribe</button></div>
      </div>
      </transition>
    </main>
    <footer>Footer</footer>
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
      detail1:false,
      selectedItem:{},
      swiperOption: {
        slidesPerView: innerWidth/134,
        spaceBetween: 8,
        freeMode:true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    },
    temp() {
      return [{"img":"http://www.eenadu.net/tv-movie-listings/tv-images/ANKURAM.jpg","title":"అంకురం","sub":"7:00AM "},{"img":"http://www.eenadu.net/tv-movie-listings/tv-images/bandhvyalu-svr.jpg","title":"బాంధ‌వ్యాలు","sub":"10:00AM "},{"img":"http://www.eenadu.net/tv-movie-listings/tv-images/AJEYUDU.jpg","title":"అజేయుడు","sub":"1:00PM "},{"img":"http://www.eenadu.net/tv-movie-listings/tv-images/maro-malupu.jpg","title":"మరోమ‌లుపు","sub":"4:00PM "},{"img":"http://www.eenadu.net/tv-movie-listings/tv-images/devatha.jpg","title":"దేవ‌త‌","sub":"7:00PM "},{"img":"http://www.eenadu.net/tv-movie-listings/tv-images/Movie-reel.jpg","title":"మీరు నేను ఓ పాట‌","sub":"10:30PM "}];
    }
  },
  methods: {
    handleScroll() {
      this.scrolled = arguments[0].target.scrollTop>100;
    },
    showDetail(item) {
      this.detail1 = true;
      this.selectedItem = item;
    },
    back() {
      this.detail1=false;
    }
  },
  created: function() {
    var that = this;
    setTimeout(function() {
      var main = document.getElementsByTagName("MAIN")[0]
      main.addEventListener('scroll', that.handleScroll);  
    },100);
  }
}
</script>
<style scoped>
  body {font-size: 2rem; letter-spacing: 4px;}
  h3 {margin-bottom: 16px; margin-top:32px; font-weight:normal; padding-left:16px; font-size:1rem;}
  header {padding: 8px 16px; position: absolute; left:0; top:0; width:100%; z-index:10; background:#fff; font-size: 1.4rem; color:rgb(0,0,0,0.6); font-weight:bold;}
  main {padding:48px 0px 64px 0px; height: 100vh; position: absolute; top:0; left:0; width:100vw; font-size:0.8rem;}

  .b {font-weight: 900;}
  .flex {display: flex; align-items: center; text-align: center;}
  .fs06 {font-size:0.6rem;}
  .grow {flex-grow: 1;}
  .light {color:rgba(0,0,0,0.6);}
  .material-icons {font-size:1.2rem;}
  .scrolled {box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);}
  .swiper-container {height: 180px;}
  .swiper-container .swiper-slide:first-child {margin-left:16px;}
  .swiper-slide img {width:100%; border-radius:3px;}
  .swiper-slide>span {font-size:0.6rem; color:rgba(0,0,0,0.6);}
  .slide-fade-enter-active {
    transition: all .4s ease;
  }
  .slide-fade-leave-active {
    transition: all .4s ease;
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(100vw);
    opacity: 0;
  }
  #detail {position: absolute; left:0; top:0; z-index:5; height:100vh; width:100vw; background:white; padding:64px 16px;}
  button {border:1px solid #999; padding: 8px 16px; border-radius:16px; background:#fff; outline:0;}
</style>
