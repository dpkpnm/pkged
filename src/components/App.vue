<template>
	<v-app>
	  <!-- <v-navigation-drawer app></v-navigation-drawer> -->
	  <v-toolbar app flat>
	  	<v-btn icon v-if="!detail"> <v-icon style="font-size:36px;">beenhere</v-icon> </v-btn>
	  	<v-btn icon v-if="detail" @click="back"> <v-icon>arrow_back</v-icon> </v-btn>
	  	<v-toolbar-title>TravelIndia</v-toolbar-title>
    	<v-spacer></v-spacer>
    	<v-btn icon v-if="!detail"> <v-icon>menu</v-icon> </v-btn>
	  </v-toolbar>

	  <v-content>
	  	<transition name="slide-left">
	  		<div v-if="!detail && !grid">
			  	
			  	<div class="pa-4 headline font-weight-light">Good Evening</div><br><br>
			  	<v-divider></v-divider>
			  	<div>
			  		<h4 class="pa-4 subheading font-weight-black text-uppercase" >Travel Destinations</h4>
			  		<swiper :options="swiperOption">
		          <swiper-slide v-for="item in top3()">
		          	<v-img @click="showDetail(item)" :src="'https://incredibleindia.org' + item.image" aspect-ratio="1.75"></v-img>
		          	<div class="pa-1">{{item.title}}</div>
		          </swiper-slide>
		        </swiper>
		        <br>
		        <h4 class="pa-4 subheading font-weight-black text-uppercase" >Where to go in September</h4>
			  		<swiper :options="swiperOption">
		          <swiper-slide v-for="item in top3()">
		          	<v-img  @click="showDetail(item)" :src="'https://incredibleindia.org' + item.image" aspect-ratio="1.75"></v-img>
		          	<div class="pa-1">{{item.title}}</div>
		          </swiper-slide>
		        </swiper>
		        <br>
		        <h4 class="pa-4 subheading font-weight-black text-uppercase" >Best in india</h4>
			  		<swiper :options="swiperOption">
		          <swiper-slide v-for="item in top3()">
		          	<v-img @click="showDetail(item)" :src="'https://incredibleindia.org' + item.image" aspect-ratio="1.75"></v-img>
		          	<div class="pa-1">{{item.title}}</div>
		          </swiper-slide>
		        </swiper>
		        <br>
		        <h4 class="pa-4 subheading font-weight-black text-uppercase" >Try food in here</h4>
			  		<swiper :options="swiperOption">
		          <swiper-slide v-for="item in top3()">
		          	<v-img @click="showDetail(item)" :src="'https://incredibleindia.org' + item.image" aspect-ratio="1.75"></v-img>
		          	<div class="pa-1">{{item.title}}</div>
		          </swiper-slide>
		        </swiper>
			  	</div>
			  </div>

	  	
		    <v-layout v-if="!detail && grid" justify-center row wrap>
          <v-flex v-for="item in data.incredible" :key="n" xs4 pa-1 d-flex>
            <v-card flat tile class="d-flex">
              <v-img :src="'https://incredibleindia.org'+item.image"  @click="showDetail(item)" aspect-ratio="1" class="grey lighten-2" />
            </v-card>
          </v-flex>
		    </v-layout>
		    <v-layout v-if="detail" justify-center row wrap>
			    <v-flex xs12>
				    <v-card >
			        <v-img :src="'https://incredibleindia.org' + selectedItem.image" aspect-ratio="1.75"></v-img>
			        <v-card-title primary-title>
			          <div>
			            <h3 class="headline mb-0">{{selectedItem.title}}</h3>
			            <v-container pt-4>{{selectedItem.description}}</v-container>
			            <h3 class="headline">Related</h3>
			            <swiper ref="mySwiper" :options="swiperOption">
					          <swiper-slide v-for="related in selectedItem.places" :key="related.title">
					          	<v-img :src="'https://incredibleindia.org' + related.image" aspect-ratio="1"></v-img><div>{{related.title}}</div>
					          </swiper-slide>
					        </swiper>
			          </div>
			        </v-card-title>
			        <v-card-actions>
			          <v-btn flat color="orange">Share</v-btn>
			          <v-btn flat color="orange">Explore</v-btn>
			        </v-card-actions>
		      	</v-card>
		    	</v-flex>
		   </v-layout>
			</transition>
	  </v-content>
	</v-app>
</template>
<script>
	import _ from 'lodash';
	import { mapGetters,mapMutations } from 'vuex';
	

  export default {
    data() {
    	return {
    		selectedItem:{},
    		hash:"#",
    		swiperOption: {
        slidesPerView: 2.1,
        spaceBetween: 16,
      },
    	}
    },
    computed: {	
  		...mapGetters(["data"]),
  		detail: function() {
  			return this.hash=="#detail";
  		},
  		grid: function() {
  			return this.hash=="#grid";
  		},
  		
    },
    methods: {
    	top3: function() {
  			if(this.data.incredible.length>0)
  				return _(this.data.incredible).sampleSize(6).value();
  			return [];
  		},
    	back: function() {

    		history.go(-1);
    	},
    	go: function(page) {
    		page = page || "";
    		location.href = "#"+page;
    	},
    	showDetail: function(item) {
    		this.go("detail");
    		this.selectedItem = item;
    	},
    	showMain: function() {
    		this.go();
    	},
    	changeDisplay: function() {
    		this.grid = !this.grid;
    	}
    },
    watch: {
			'$route': function() {
				this.hash = this.$route.hash;
			}
		},
    mounted() {
    	this.$store.dispatch("loadIncredible");
    	this.hash = this.$route.hash;
	  }
  }
</script>
<style>
.flex {display: flex;}
.fg {flex-grow:1;}
.h128 {height: 128px;}
.w128 {max-width: 128px; min-width:128px;}
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition-duration: 0.2s;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.25, 0, 0.1, 1);
  overflow: hidden;
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(0, 6em);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(0, -6em,);
}
.swiper-wrapper .swiper-slide:first-child {padding-left: 24px}
</style>