<template>
  <div>
    <header :class="{scrolled:scrolled,flex:true}" v-if="!details">
      <i class="material-icons">search</i>
      <div class="grow">తెలుగు</div>
      <i class="material-icons">more_vert</i>
    </header>
    <header :class="{scrolled:scrolled,flex:true}" v-if="details">
      <i class="material-icons" @click="back">arrow_back_ios</i>
    </header>
    <main>
      <!-- <ul v-if="!details">
        <li v-for="item in kathalu" @click="getKatha(item.id)">{{item.title}}</li>
      </ul>
      <div v-else>
        <h1>{{katha.title}}</h1>
        <div v-html="katha.details">
        </div>
      </div> -->
      <swiper :options="swiperOptionh">
        <swiper-slide>
          <ul v-if="!details">
            <li v-for="item in kathalu" @click="getKatha(item.id)">{{item.title}}</li>
          </ul>
          <div v-else>
            <h1>{{lyric.title}}</h1>
            <div v-html="lyric.details">
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <ul v-if="!details">
            <li v-for="item in lyrics" @click="getLyric(item.id)">{{item.title}}</li>
          </ul>
          <div v-else>
            <h1>{{lyric.title}}</h1>
            <div v-html="lyric.details">
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <swiper ref="mySwiper" :options="swiperOption">
            <swiper-slide v-for="item in temp" :key="item.title"><img :src="item.img" @click="showDetail(item)"><div>{{item.title}}</div><span>{{item.sub}}</span></swiper-slide>
          </swiper>
          <div class=card @click="showDetail()">
            <div class=image-wrap>
              <img src="https://4.bp.blogspot.com/-WPuNgi5BYeM/VknZuHNakvI/AAAAAAAAAWk/A9pEKE0OETc/s1600/baahubali-2-movie-poster-upcoming-wiki.jpg" />
            </div>
            కురుక్షేత్రలో అతిపెద్ద వెంకటేశ్వరుని ఆలయం
          </div>
        </swiper-slide>
        <swiper-slide>Horizontal Slide 1</swiper-slide>
        <swiper-slide>Horizontal Slide 2</swiper-slide>
        <swiper-slide>Horizontal Slide 3</swiper-slide>
        <swiper-slide>Horizontal Slide 4</swiper-slide>
        <div class="swiper-pagination swiper-pagination-h" slot="pagination"></div>
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
      }
    }
  },
  computed: {
    ...mapGetters(["kathalu","katha","lyrics","lyric"]),
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
    states() {
      
      return _(this.places).groupBy("st",function(v) { return v.i.length>0;}).value();
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
      this.details=false;
    },
    changeFunc() {
      console.log("Change function");
    },
    getKatha(id) {
      this.katha.title = this.katha.details = "";
      this.$store.dispatch("loadKatha",id);
      this.details=true;
    },
    getLyric(id) {
      this.lyric.title = this.lyric.details = "";
      this.$store.dispatch("loadLyric",id);
      this.details=true;
    }

  },
  created: function() {
    var that = this;
    setTimeout(function() {
      var main = document.getElementsByTagName("MAIN")[0]
      main.addEventListener('scroll', that.handleScroll);  
    },100);
  },
  mounted: function() {
     // this.$store.dispatch('loadPlaces');
     this.$store.dispatch('loadKathalu');
     this.$store.dispatch('loadLyric');
  }
}
</script>
<style scoped>
  body { letter-spacing: 4px; font-weight:bold;}
  h3 {margin-bottom: 16px; margin-top:32px; font-weight:bold; padding-left:16px; font-size:1rem;}
  header {padding: 8px 16px; position: absolute; left:0; top:0; width:100%; z-index:10; background:#fff; font-size: 1.4rem; color:rgb(0,0,0,0.6); font-weight:bold;}
  main {padding:64px 16px; height: 100vh; position: absolute; top:0; left:0; width:100vw; font-size:0.8rem;}

  .b {font-weight: 900;}
  .flex {display: flex; align-items: center; text-align: center;}
  .fs06 {font-size:0.6rem;}
  .grow {flex-grow: 1;}
  .light {color:rgba(0,0,0,0.6);}
  .material-icons {font-size:1.2rem;}
  .scrolled {box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);}
  .swiper-container {font-size:1rem; padding:16px;}
  .swiper-container .swiper-container{padding:0px;}
  .swiper-slide img {width:100%; border-radius:3px;}
  .swiper-slide>span {font-size:0.8rem; color:rgba(0,0,0,0.6);}
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
  #detail {position: absolute; left:0; top:0; z-index:5; height:100vh; width:100vw; background:white; padding:64px 16px;}
  button {border:1px solid #999; padding: 8px 16px; border-radius:16px; background:#fff; outline:0;}
  li {padding: 16px; border-bottom: 1px solid #efefef; list-style-type: none;}
  .card {width:100%; font-size:1rem; margin:16px 0;}
  .image-wrap {
    width: 100%;
    height: 48vw;
    margin: 0 auto 16px;
    overflow: hidden;
    position: relative;
    border-radius: 4px;
  }

.image-wrap img {
  width: 100%;
  animation: move 40s ease infinite;
  position: absolute;
}

@-webkit-keyframes move {
  0% {
    transform-origin: bottom left;
    transform: scale(1.0);
  }
  50% {
    transform: scale(1.3);
  }
  100% {
    transform: scale(1.0);
  }
}
</style>
