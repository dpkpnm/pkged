<template>
  <div>
    <div class="h1 red">కోకిల
    ;;;;l l/. . s.m//';[\keerthi-m[p,p,,,pp]\i nmis9ww[-40[edwvov=l,f. n </div>
    <div class="card">
      <div class="h2">నచ్చిన పాటలు</div>
    </div>
    <div class="h3 pt16">&nbsp;</div>
    <div class="card ">
      <div class="h4 pt16 green">కొత్త పాటలు</div>
      <div class="h2">ఈవారం టాప్ 10</div>
    </div>
    dd,dd,df;  
    <div class="h3 pt16">మరికొన్ని</div>
    <div class="card">
      <div class="h4 pt16 orange">కొత్త పాటలు</div>
      <div class="h2">ఈవారం టాప్ 10</div>
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
   
  },
  methods: {

  },
  created: function() {
  },
  mounted: function() {
  }
}

</script>
<style scoped>
  html {font-size: 18px;font-family: telugu;}
  div {font-family: telugu;}
  .red {color:#f44336;}
  .blue {color:#2196F3;}
  .green {color: #4CAF50;}
  .orange {color: #FF5722;}
  .h1,.h2,.h4 {font-family: telugubold; padding-left:8px;}
  .h1 {font-size: 1.6rem;}
  .h2 {font-size: 1.4rem;}
  .h3 {font-size: 1.2rem; background-color: #F5F5F5; padding-left:8px;border-bottom:1px solid #f0f0f0;color:#666;}
  .p8 {padding: 8px;}
  .p16 {padding: 16px;}
  .m8 {margin: 8px;}
  .m16 {margin: 16px;}
  .pt16 {padding-top: 16px;}
  .pt32 {padding-top: 32px;}
  .card {min-height: 30vh; border-bottom:1px solid #f0f0f0;}
  .toolbar {}

</style>
