<template>
  <div>
  <div :class="{header:true,scrolled:scrolled,flex:true,red:true}" v-if="state==''">తెలుగు</div>
  <div :class="{header:true,scrolled:scrolled,flex:true,red:true}" v-else><i class='material-icons' @click="back">arrow_back</i><span class="back">{{backTitle}}</span></div>
  <main>
    <div v-if="state==''">
      <div class="card">
        <div class="h2">నచ్చిన పాటలు</div>
         <swiper ref="mySwiper" :options="swiperOption">
          <swiper-slide v-for="item in temp" :key="item.title"><img :src="item.img" @click="showDetail(item)"><div>{{item.title}}</div><span>{{item.sub}}</span></swiper-slide>
        </swiper>
      </div>
      <div class="break">&nbsp;</div>
      <div class="card ">
        <div class="h4 pt16 green">కొత్త పాటలు</div>
        <div class="h2">ఈవారం టాప్ 10</div>
        <swiper ref="mySwiper" :options="swiperOption">
          <swiper-slide v-for="item in temp1" :key="item.title"><img :src="item.img" @click="showDetail(item)"><div>{{item.title}}</div><span>{{item.sub}}</span></swiper-slide>
        </swiper>
      </div>
      <div class="break">&nbsp;</div>
      <div class="card">
        <div class="h2">వంటలు</div>
        <swiper ref="mySwiper" :options="swiperOption">
          <swiper-slide v-for="item in recipes" :key="item.title"><img :src="item.img" @click="showDetail(item)"><div>{{item.title}}</div><span>{{item.sub}}</span></swiper-slide>
        </swiper>
      </div>
    </div>
    <transition name="slide-fade"><div class="lyric p16" v-if="state=='#lyric'" v-html="selectedSong.lyric"></div></transition>
    <transition name="slide-fade">
    <div v-if="state=='#detail'" class="p16">
      <div class="flex"><div><img :src="selectedItem.img"></div><div class="pl16">{{selectedItem.title}}</div></div>
      <div>
        <div class="h2">పాటలు</div>
        <div v-for="track in selectedItem.songs" class="li" @click="showLyric(track)">{{track.title}}</div>
        <div class="break">&nbsp;</div>
      </div>
    </div>
    </transition>
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
    temp() {
      return [{"img":"https://a10.gaanacdn.com/images/albums/79/2164579/crop_175x175_1528547376_2164579.jpg","title":"Tej I Love You",songs:[{title:"Andamaina Chandamama",lyric:"Andamaina Chandhamaama Neevenaa<br>Ninnu Nenu Andhukundi Nijamenaa<br>Nuvu Thodunte Voo Laa Laa<br> Ee Life Anthaaa Uyyaalaa<br>Hug Cheyave O Pillaa<br>Wifi Laa Nannillaa<br>Andamaina Chandhamaama Neevenaa<br>Ninnu Nenu Andhukundi Nijamenaa<br>Parugidu Ee Kalaanaa<br>Adugulu Darikaaleeka<br>Manamevaro Yemo Yendhaaka<br>Paravashame Prathi Raaka<br>Choopi O Shubhalekha<br>Mana Madhilo Preme Kaligaakaa<br>Mana Iddhari Paine Viripoolu Challindhi Punnaaga<br>Nee Muddhula Kosam Nevechi Vunnaa<br>Andamaina Chandhamaama Neevenaa<br>Ninnu Nenu Andhukundi Nijamenaa<br>Nuvu Thodunte Voo Laa Laa<br> Ee Life Anthaaa Uyyaalaa<br>Hug Cheyave O Pillaa<br>Wifi Laa Nannillaa<br>(Instrumental Music) Ooo<br> Aravirise Jaajullo Kalagalise Mojullo<br>Alalegise Aase Premantaa<br>Madhi Murise Valapullo Maimarache Merupullo<br>Melithirige Vayasaa Rammantaa… Padakintikochi Nuvvu Paala Muripaalu Korangaa<br>Nadumichchukuntaa Vayyarilaagaa… Andamaina Chandhamaama Neevenaa<br>Ninnu Nenu Andhukundi Nijamenaa<br>Nuvu Thodunte Voo Laa Laa<br> Ee Life Anthaaa Uyyaalaa<br>Hug Cheyave O Pillaa<br>Wifi Laa Nannillaa<br>Andamaina Chandhamaama Neevenaa<br>Ninnu Nenu Andhukundi Nijamenaa<br>(X2)"},{title:"Nachutunde Vachi"},{title:"Happy Happy Family"},{title:"Adee Kannu Needi"},{title:"Hello Pilla Sunlo Laila"}]},{"img":"https://a10.gaanacdn.com/images/albums/54/2129654/crop_175x175_1525185948_2129654.jpg","title":"Mahanati"},{"img":"https://a10.gaanacdn.com/images/albums/22/2055522/crop_175x175_1522044821_2055522.jpg","title":"Krishnarjuna Yudham"},{"img":"https://a10.gaanacdn.com/images/albums/86/2097586/crop_175x175_1523105735_2097586.jpg","title":"Bharat Ane Nenu"},{"img":"https://a10.gaanacdn.com/images/albums/84/2059884/crop_175x175_1521085825_2059884.jpg","title":"Rangasthalam"},{"img":"https://a10.gaanacdn.com/images/albums/76/2083676/crop_175x175_1521113156_2083676.jpg","title":"MLA"},{"img":"https://a10.gaanacdn.com/images/albums/6/2059106/crop_175x175_1520688605_2059106.jpg","title":"Kirrak Party"},{"img":"https://a10.gaanacdn.com/images/albums/10/2049910/crop_175x175_1524389349_2049910.jpg","title":"Naa Peru Surya Naa illu India"},{"img":"https://a10.gaanacdn.com/images/albums/93/2037193/crop_175x175_1516882641_2037193.jpg","title":"Chalo"},{"img":"https://a10.gaanacdn.com/images/albums/10/2056310/crop_175x175_1516559554_2056310.jpg","title":"Bhaagamathie"},{"img":"https://a10.gaanacdn.com/images/albums/20/2047220/crop_175x175_1516425673_2047220.jpg","title":"Tholi Prema"},{"img":"https://a10.gaanacdn.com/images/albums/4/2019304/crop_175x175_1514872302_2019304.jpg","title":"Agnyaathavaasi"},{"img":"https://a10.gaanacdn.com/images/albums/35/2030735/crop_175x175_1512934098_2030735.jpg","title":"MCA"},{"img":"https://a10.gaanacdn.com/images/albums/65/2038165/crop_175x175_1512926786_2038165.jpg","title":"Hello!"},{"img":"https://a10.gaanacdn.com/images/albums/54/1988654/crop_175x175_1988654.jpg","title":"Jai Lava Kusa"}];
    },
    temp1() {
      return [{"img":"https://www.atozmp3.co/wp-content/uploads/2014/12/Bachelors-2-2011-100x100.jpg","title":"Bachelors 2 (2011)"},{"img":"https://www.atozmp3.co/wp-content/uploads/2014/12/Ayyare-2011-100x100.jpg","title":"Ayyare (2011)"},{"img":"https://www.atozmp3.co/wp-content/uploads/2014/12/Apartment-2011-100x100.jpg","title":"Apartment (2011)"},{"img":"https://www.atozmp3.co/wp-content/uploads/2015/12/Gaganam-2011-100x100.jpg","title":"Gaganam (2011)"},{"img":"https://www.atozmp3.co/wp-content/uploads/2014/12/Anukokunda-Emjarigindhante-2011-100x100.jpg","title":"Anukokunda Emjarigindhante (2011)"},{"img":"https://www.atozmp3.co/wp-content/uploads/2014/11/Anaganaga-O-Dheerudu-2011-100x100.jpg","title":"Anaganaga O Dheerudu (2011)"},{"img":"https://www.atozmp3.co/wp-content/uploads/2011/11/KoraMeesam-CD-Cover-Front-100x100.jpg","title":"Kora Meesam (2011)"},{"img":"https://www.atozmp3.co/wp-content/uploads/2014/11/Alibaba-Intlo-Andharu-Dhongalu-2011-100x100.jpg","title":"Alibaba Intlo Andharu Dhongalu (2011)"},{"img":"https://www.atozmp3.co/wp-content/uploads/2014/11/Aha-Naa-Pellanta-2011-100x100.jpg","title":"Aha Naa Pellanta (2011)"},{"img":"https://www.atozmp3.co/wp-content/uploads/2011/11/Ennalila-CD-Cover-Front-100x100.jpg","title":"Ennalila (2011)"},{"img":"https://www.atozmp3.co/wp-content/uploads/2011/11/Kshetram-CD-Cover-Front-100x100.jpg","title":"Kshetram (2011)"},{"img":"https://www.atozmp3.co/wp-content/uploads/2011/11/Duniya-CD-Cover-Front-100x100.jpg","title":"Duniya (2011)"},{"img":"https://www.atozmp3.co/wp-content/uploads/2015/10/Don-2-2011-100x100.jpg","title":"Don 2 (2011)"},{"img":"https://www.atozmp3.co/wp-content/uploads/2011/10/G.One-CD-Cover-Front-100x100.jpg","title":"G.One (2011)"},{"img":"https://www.atozmp3.co/wp-content/uploads/2014/10/Aakasame-Haddu-2011-100x100.jpg","title":"Aakasame Haddu (2011)"}]
    },
    recipes() {
      return [{"img":"http://www.eenadu.net/special-pages/ruchulu/article-images/chiken-rice-100.jpg","title":"చికెన్‌ రైస్‌"},{"img":"http://www.eenadu.net/special-pages/ruchulu/article-images/chiken-manchuriya-100.jpg","title":" చికెన్‌ మంచూరియా"},{"img":"http://www.eenadu.net/special-pages/ruchulu/article-images/andhra-fish-100.jpg","title":"ఆంధ్రా చేపల పులుసు"},{"img":"http://www.eenadu.net/special-pages/ruchulu/article-images/mutton-masala-100.jpg","title":"హైదరాబాదీ మటన్‌ మసాలా"},{"img":"http://www.eenadu.net/special-pages/ruchulu/article-images/prawns-curry-100.jpg","title":"రొయ్యల కూర"},{"img":"http://www.eenadu.net/special-pages/ruchulu/article-images/chicken-tikka-100.jpg","title":"చికెన్‌ టిక్కా మసాలా"},{"img":"http://www.eenadu.net/special-pages/ruchulu/article-images/kandari-mutton-100.jpg","title":" కాందారీ మటన్‌"},{"img":"http://www.eenadu.net/special-pages/ruchulu/article-images/Mutton-Biryani-100.jpg","title":" మటన్‌ బిర్యానీ"},{"img":"http://www.eenadu.net/special-pages/ruchulu/article-images/Mutton-kunna-100.jpg","title":" మటన్‌ కున్నా"},{"img":"http://www.eenadu.net/special-pages/ruchulu/article-images/chiken-ghee-rost-100.jpg","title":" చికెన్‌ ఘీ రోస్ట్‌"},{"img":"http://www.eenadu.net/special-pages/ruchulu/article-images/ctr-chukka-mamsam-100.jpg","title":"చిత్తూరు సుక్క మాంసం "},{"img":"http://www.eenadu.net/special-pages/ruchulu/article-images/natukodi-curry-100.jpg","title":" నాటుకోడి కూర "},{"img":"http://www.eenadu.net/special-pages/ruchulu/article-images/chennur-hen-pulav-100.jpg","title":" చెన్నూర్‌ కోడి పులావ్‌"},{"img":"http://www.eenadu.net/special-pages/ruchulu/article-images/nizami-ka-ghosh-100.jpg","title":"నిజామీ ఘోష్‌"},{"img":"http://www.eenadu.net/special-pages/ruchulu/article-images/dum-ka-murgh-100.jpg","title":" దమ్‌ కా చికెన్‌"},{"img":"http://www.eenadu.net/special-pages/ruchulu/article-images/mutton-haleem-100.jpg","title":" మటన్‌ హలీమ్‌ "},{"img":"http://www.eenadu.net/special-pages/ruchulu/article-images/murg-biryani-100.jpg","title":"దమ్‌ముర్గ్‌కి బిర్యానీ "},{"img":"http://www.eenadu.net/special-pages/ruchulu/article-images/royya-mamidi-100.jpg","title":"రొయ్య మామిడి"},{"img":"http://www.eenadu.net/special-pages/ruchulu/article-images/royya-miryala-100.jpg","title":" రొయ్య మిరియాల కూర"},{"img":"http://www.eenadu.net/special-pages/ruchulu/article-images/munakkaya-mamsam-100.jpg","title":"మునక్కాయ మాంసం"},{"img":"http://www.eenadu.net/special-pages/ruchulu/article-images/kobbaripala-chiken-100.jpg","title":" కొబ్బరిపాలూ చికెన్‌"},{"img":"http://www.eenadu.net/special-pages/ruchulu/article-images/kabab-masala-100.jpg","title":"సీక్‌ కబాబ్‌ మసాలా"},{"img":"http://www.eenadu.net/special-pages/ruchulu/article-images/keema-kolhapuri-100.jpg","title":" కీమా కొల్హాపురి"},{"img":"http://www.eenadu.net/special-pages/ruchulu/article-images/kari-milago-100.jpg","title":"కరి మిళగు"},{"img":"http://www.eenadu.net/special-pages/ruchulu/article-images/damka-nalli-100.jpg","title":"దమ్‌ కా నల్లి"},{"img":"http://www.eenadu.net/special-pages/ruchulu/article-images/indo-chinees-100.jpg","title":"ఇండో-చైనీస్‌ డ్రై చిల్లీ చికెన్‌ "},{"img":"http://www.eenadu.net/special-pages/ruchulu/article-images/dsky-chk-cur-100.jpg","title":"దోసకాయ చికెన్‌ కర్రీ "},{"img":"http://www.eenadu.net/special-pages/ruchulu/article-images/pachimirchi-kodi-100.jpg","title":"పచ్చిమిర్చి-కోడి కూర "},{"img":"http://www.eenadu.net/special-pages/ruchulu/article-images/dosakaya-chiken-100.jpg","title":"దోసకాయ చికెన్‌  "},{"img":"http://www.eenadu.net/special-pages/ruchulu/article-images/chkn-rost-pulav-100.jpg","title":" చికెన్‌ రోస్ట్‌ పలావ్‌ "},{"img":"http://www.eenadu.net/special-pages/ruchulu/article-images/mexican-star-chikn-100.jpg","title":" మెక్సికన్‌ స్టార్‌ చికెన్‌ "},{"img":"http://www.eenadu.net/special-pages/ruchulu/article-images/chettinad-era-100.jpg","title":"రొయ్య‌ల‌తో చెట్టినాడ్‌ ఎరా"},{"img":"http://www.eenadu.net/special-pages/ruchulu/article-images/panjabi-cbm-100.jpg","title":"పంజాబీ చికెన్‌ బటర్‌ మసాలా"},{"img":"http://www.eenadu.net/special-pages/ruchulu/article-images/palak-chicken-100.jpg","title":"పాలక్‌ చికెన్‌"},{"img":"http://www.eenadu.net/special-pages/ruchulu/article-images/spicy-chicken-curry-100.jpg","title":"స్పైసీ చికెన్‌ కర్రీ "},{"img":"http://www.eenadu.net/special-pages/ruchulu/article-images/marag-100.jpg","title":"మరగ్‌"},{"img":"http://www.eenadu.net/special-pages/ruchulu/article-images/nihari-100.jpg","title":"మటన్‌ నిహారి"},{"img":"http://www.eenadu.net/special-pages/ruchulu/article-images/dhalghost-100.jpg","title":"మటన్‌ దాల్‌ ఘోస్ట్‌"},{"img":"http://www.eenadu.net/special-pages/ruchulu/article-images/kashmiri-biryani-100.jpg","title":"మటన్‌తో కాశ్మీరీ బిర్యానీ"},{"img":"http://www.eenadu.net/special-pages/ruchulu/article-images/mutton-vepudu-100.jpg","title":"మటన్‌ వేపుడు"},{"img":"http://www.eenadu.net/special-pages/ruchulu/article-images/Prawns-100.jpg","title":"ప్రాన్స్‌ సాంబార్‌ మసాలా"},{"img":"http://www.eenadu.net/special-pages/ruchulu/article-images/frons-kichidi-100.jpg","title":"రొయ్యల కిచిడీ"},{"img":"http://www.eenadu.net/special-pages/ruchulu/article-images/parshi-rost-mutton-100.jpg","title":"మటన్‌ రోస్ట్‌"},{"img":"http://www.eenadu.net/special-pages/ruchulu/article-images/roti-pe-boti-100.jpg","title":"బొప్పాయి ముద్ద‌తో మ‌ట‌న్ క‌ర్రీ"},{"img":"http://www.eenadu.net/special-pages/ruchulu/article-images/kokum-curry-100.jpg","title":"కోకమ్‌ కర్రీ"},{"img":"http://www.eenadu.net/special-pages/ruchulu/article-images/pathrani-machi-100.jpg","title":"పత్రాని మచ్చీ"},{"img":"http://www.eenadu.net/special-pages/ruchulu/article-images/mahi-kalia-100.jpg","title":"మహి ఖలియా"},{"img":"http://www.eenadu.net/special-pages/ruchulu/article-images/malabar-mutton-curry-100.jpg","title":"మలబార్‌ మటన్‌ కర్రీ"},{"img":"http://www.eenadu.net/special-pages/ruchulu/article-images/erachi-pidi-100.jpg","title":"ఎరాచీ పిడి"},{"img":"http://www.eenadu.net/special-pages/ruchulu/article-images/thoran-100.jpg","title":"థోరన్‌"},{"img":"http://www.eenadu.net/special-pages/ruchulu/../../special-pages/ruchulu/article-images/maalpuva-100.jpg","title":""},{"img":"http://www.eenadu.net/special-pages/ruchulu/../../special-pages/ruchulu/article-images/rabdi-100.jpg","title":""}];
    }
  },
  methods: {
    handleScroll() {
      this.scrolled = arguments[0].target.scrollTop>100;
    },
    showDetail(item) {
      this.selectedItem=item;
      this.isDetail=true;
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
