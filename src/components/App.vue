<template>
	<v-app>
	  <!-- <v-navigation-drawer app></v-navigation-drawer> -->
	  <v-toolbar app flat>
	  	<v-btn icon v-if="!detail"> <v-icon>menu</v-icon> </v-btn>
	  	<v-btn icon v-if="detail" @click="back"> <v-icon>arrow_back</v-icon> </v-btn>
	  	<v-toolbar-title>India Visit</v-toolbar-title>
    	<v-spacer></v-spacer>
    	<v-btn icon v-if="!grid && !detail" @click="go('grid')"> <v-icon>apps</v-icon> </v-btn>
    	<v-btn icon v-if="grid && !detail" @click="go()"> <v-icon>reorder</v-icon> </v-btn>
    	<v-btn icon v-if="!detail"> <v-icon>search</v-icon> </v-btn>
	  </v-toolbar>
	  <v-content>
	  	<transition name="slide-left">
	  		<div v-if="!detail && !grid">
	  			<div class="flex pa-2 h64" v-for="item in data.places">
	  				<span class="headline">{{item.n}}</span>
	  				<span class="fg"></span>
	  				<v-img :src="'https://api.dpkpnm.com/'+item.i"  @click="showDetail(item)" aspect-ratio="1" class="grey lighten-2 w64" />
	  			</div>
	  		</div>
		    <!-- <v-list v-if="!detail && !grid">
		      <v-list-tile v-for="item in data.places" :key="item.id" avatar @click="showDetail(item)">
		        <v-list-tile-action>
		          <v-icon color="pink">star</v-icon>
		        </v-list-tile-action>

		        <v-list-tile-content>
		          <v-list-tile-title v-text="item.n"></v-list-tile-title>
		        </v-list-tile-content>

		        <v-list-tile-avatar>
		          <img :src="'https://api.dpkpnm.com/' + item.i">
		        </v-list-tile-avatar>
		      </v-list-tile>
		    </v-list> -->
		    <v-layout v-if="!detail && grid" justify-center row wrap>
          <v-flex v-for="item in data.places" :key="n" xs4 pa-1 d-flex>
            <v-card flat tile class="d-flex">
              <v-img :src="'https://api.dpkpnm.com/'+item.i"  @click="showDetail(item)" aspect-ratio="1" class="grey lighten-2" />
            </v-card>
          </v-flex>
		    </v-layout>
		    <v-layout v-if="detail" justify-center row wrap>
			    <v-flex xs12>
				    <v-card >
			        <v-img :src="'https://api.dpkpnm.com/' + selectedItem.i" aspect-ratio="1.75"></v-img>
			        <v-card-title primary-title>
			          <div>
			            <h3 class="headline mb-0">{{selectedItem.n}}</h3>
			            <span class="grey--text">{{selectedItem.c}} - {{selectedItem.st}}</span>
			            <v-container pt-4>{{selectedItem.d}}</v-container>
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
	import { mapGetters,mapMutations } from 'vuex';
  export default {
    data() {
    	return {
    		selectedItem:{},
    		hash:"#",
    	}
    },
    computed: {	
  		...mapGetters(["data"]),
  		detail: function() {
  			return this.hash=="#detail";
  		},
  		grid: function() {
  			return this.hash=="#grid";
  		}
    },
    methods: {
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
    	this.$store.dispatch("loadPlaces");
    	this.hash = this.$route.hash;
	  }
  }
</script>
<style>
.flex {display: flex;}
.fg {flex-grow:1;}
.h64 {height: 64px;}
.w64 {max-width: 64px;}
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
</style>