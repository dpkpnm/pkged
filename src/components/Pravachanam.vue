<template>
	<div class="mobile">
		<header class="shadow">
			<i v-if="isAlbum" @click="back">arrow_back</i>
			<i v-else>search</i>
			<b class="fs2 center grow">{{heading}}</b>
			<i v-if="!isAlbum">view_module</i>
		</header>
		<main>
			<div v-for="category in cat" :class="{li:true,hide:isAlbum}" @click="selectAlbum(category)">{{category}}</div>
			<div :class="{hide:!isAlbum}">
				<div class="albumimg"></div>
				<div v-for="track,index in tracks" :class="{highlight:(selectedTrack==index && player.selectedAlbum==selectedAlbum),li:true,flex:true}" @click="selectTrack(index)" >
					<div class="grow">{{index+1}} Track {{track}}</div>
					<i class='mr16' v-if="(selectedTrack==index && player.selectedAlbum==selectedAlbum)">equalizer</i>
				</div>
			</div>
		</main>
		<footer class="shadow" v-if="player.action=='play' || player.action=='pause'">
			<i @click="togglePlay">{{player.action}}_circle_outline</i>
			<div class="pl16 pt4">{{player.selectedAlbum}} - Track {{player.selectedTrack+1}}</div>
			<div class="grow">&nbsp;</div>
			<div>12:00</div>
		</footer>
	</div>
</template>
<script>
	import {cloudDb} from '../firebaseconfig';
	import { mapGetters,mapMutations } from 'vuex';
	import _ from 'lodash';

	export default {
	  name: 'Pravachanam',
	  data: function() {
	  	return {
	  		cat: "శ్రీమద్ భగవద్గీత, శ్రీమద్ భాగవతం, ధర్మనిధి, శ్రీమద్ రామాయణం, తిరుప్పావై, శ్రీదేవి, విష్ణు, శ్రీ వైష్ణవ, ఉపనిషద్దులు, శివ, శ్రీ రామానుజం, హరికథ, సనాతన ధర్మం, రామానుజాచార్య, ఆది శంకరాచార్య, వేదాలు, పురాణాలూ, రమణ మహర్షి, పాటలు, పుణ్య క్షేత్రాలు, ఆరోగ్యం, ఉండ్రాజవరం మహాభారతం, ఉండ్రాజవరం భాగవతం, పండుగలు, జానపద చరిత్రలు, భక్తి, సాహిత్య ప్రవచనాలు, భక్త చరిత్ర, వినాయక".split(", "),
	  		isAlbum:false,
	  		selectedAlbum:"",
	  		selectedTrack:-1,
	  		tracks: [1,2,3,4,5,6,7,8,9,10],
	  		player: {
	  			action:""
	  		}
	  	}
	  },
	 	methods: {
	 		play: function() {
	 			this.player.action="pause";
	 		},
	 		back: function() {
	 			this.isAlbum=false;
	 		},
	 		togglePlay: function() {
	 			if(this.player.action=="play")
	 				this.player.action="pause";
	 			else if(this.player.action=="pause")
	 				this.player.action="play";
	 		},
	 		selectAlbum:function(album) {
	 			this.selectedAlbum = album;
	 			this.isAlbum = true;
	 		},
	 		selectTrack: function(index) {
	 			this.player.selectedTrack = index;

	 			if(this.selectedTrack == index && this.selectedAlbum==this.player.selectedAlbum) {
	 				this.selectedTrack = -1;
	 				this.togglePlay();
	 				return;
	 			} else {
	 				this.player.selectedAlbum = this.selectedAlbum;
	 				this.selectedTrack = index;
	 				this.play();
	 			}
	 		},
	 	},
	 	computed: {
	 		heading: function() {
	 			return this.isAlbum ? this.selectedAlbum : "ప్రవచనాలు"
	 		}
	 	}
	}
</script>
<style>
	.mobile {display: grid; grid-template-rows: 48px 1fr 64px; height:100vh;}
	header {line-height: 48px; padding:0 16px; display: flex;}
	footer {line-height: 64px; padding:0 16px; display: flex; align-items: center; font-size: 1rem; background: #3F51B5; color:#fff;}
	main {overflow: auto; padding-top: 16px;}
	b {font-family: telugubold; font-weight: normal;}
	.pl16 {padding-left: 16px;}
	.pt4 {padding-top: 4px;}
	.fs2 {font-size: 1.6rem;}
	.flex {display: flex;}
	.li {padding-top: 6px; line-height: 48px; border-bottom: 1px solid #efefef; padding-left: 16px; font-size: 1.4rem;}
	.grow {flex-grow: 1;}
	.center {text-align:center;}
	.hide {display: none;}
	.mr16 {margin-right: 16px;}
	.highlight {background-color: #efefef;}
	.shadow {box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);transition: all 0.3s cubic-bezier(.25,.8,.25,1);}
	footer i {font-size: 2rem;}

</style>