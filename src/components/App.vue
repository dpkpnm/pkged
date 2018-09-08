<template>
	<v-app>
	  <!-- <v-navigation-drawer app></v-navigation-drawer> -->
	  <v-toolbar app flat>
	  	<v-btn icon v-if="!detail"> <v-icon>menu</v-icon> </v-btn>
	  	<v-btn icon v-if="detail" @click="detail=false"> <v-icon>arrow_back</v-icon> </v-btn>
	  	<v-toolbar-title>India Visit</v-toolbar-title>
    	<v-spacer></v-spacer>
    	<v-btn icon v-if="!grid" @click="changeDisplay"> <v-icon>apps</v-icon> </v-btn>
    	<v-btn icon v-if="grid" @click="changeDisplay"> <v-icon>reorder</v-icon> </v-btn>
    	<v-btn icon> <v-icon>search</v-icon> </v-btn>
	  </v-toolbar>
	  <v-content>
	  	<transition name="slide-left">
		    <v-list v-if="!detail">
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
		    </v-list>
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
	  <v-footer app></v-footer>
	</v-app>
</template>
<script>
	import { mapGetters,mapMutations } from 'vuex';
  export default {
    data() {
    	return {
    		detail:false,
    		selectedItem:{},
    		grid: false
    	}
    },
    computed: {	
  	 ...mapGetters(["data"]),

    },
    methods: {
    	showDetail: function(item) {
    		this.detail =true;
    		this.selectedItem = item;
    	},
    	changeDisplay: function() {
    		this.grid = !this.grid;
    	}
    },
    mounted() {
    	
    	this.$store.dispatch("loadPlaces");
	  }
  }
</script>
<style>
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
  transform: translate(6em, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-6em, 0);
}
</style>