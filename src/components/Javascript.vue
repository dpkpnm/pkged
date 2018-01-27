<template>

	<main id="thejavascript">
	<header class=flex>
		<h1 v-if="!add">The<br>Javascript</h1>
		<i v-if="add" @click="cancel">chevron_left</i>
		<div class="spacer center">
		</div>
		<i @click="editData" v-if="!add">edit</i>
		<i @click="add=true" v-if="!add">add</i>
		<i v-if="!add">search</i>
		<i v-if="!add">menu</i>
	</header>
	<div id=scroll>
	<section v-if="add">
		<textarea v-model="record.article"></textarea>

		<button @click="cancel">Cancel</button>
		<button @click="addData">Save</button>
	</section>
	<section v-if="!add">
		<div v-html="article"></div>
		
	</section>
	
	<footer>
	</footer>
	</div>
</main>
</template>

<script>
import {dbRef} from '../firebaseconfig';
import { mapGetters,mapMutations } from 'vuex';
import _ from 'lodash'

export default {
  name: 'Javascript',
  data () {
    return {
    	add:false,
    	edit:false,
    	record:{category:"test",article:""}
    }
  },
  computed: {
    ...mapGetters(['data']),
    article() {
    	var val = _(this.data).map().value();
    	return val[0].article ? val[val.length-2].article : "Loading";
    },
    key() {
    	var val = _(this.data).keys().value();
    	return val[val.length-2] ;
    }
   
  },
  methods: {
  	cancel() {
  		this.add=false;
  		this.record.article="";
  		return;
  	},
  	editData() {
  		this.record.article = this.article;
  		this.edit = true;
  		this.add = true;
  	},
    
	addData() {
		if(this.edit)
			dbRef["thejavascript"].child(this.key).update(this.record);
		else
			dbRef["thejavascript"].push(this.record);
		this.record.article="";
		this.add=false;
		this.edit=false;
	},
    getData(val) {
      this.$store.dispatch("setData",{ref:dbRef["thejavascript"],category:this.category});
    }
  },
  created() {
    this.$store.dispatch("setData",dbRef["thejavascript"]);
    
  },
  filters: {
    cleanup(val) {
      return val.replace('/\n/g','<br>');
    }
  }
}
</script>

<style>
	a {color:#111; text-decoration:none; border-bottom: 1px solid #111;}
	#thejavascript #scroll {height: 90vh; overflow: auto;}
	#thejavascript {font-family: "Roboto Mono"; font-weight: 100;}
	#thejavascript textarea {width:100%; height:90vh;}
	#thejavascript li {list-style: none; display: inline; padding: 1rem; line-height: 2rem;}
	#thejavascript i {color:#111; font-family: 'Material Icons'; font-weight: normal; font-style: normal; font-size: 1.8rem; line-height: 2rem; -webkit-font-smoothing: antialiased; text-rendering: optimizeLegibility; -moz-osx-font-smoothing: grayscale; font-feature-settings: 'liga'; padding-left: 32px; cursor:pointer;} 
	
	#thejavascript h1 {font-weight: 900; font-size: 1.2rem; letter-spacing: 2px; text-align: center; color:#111;}
	#thejavascript h2 {font-family:Roboto; color:#111; font-size: 2rem; font-weight:500; margin-bottom: 1rem;} h3 {color:#111; font-size: 1.6rem; font-weight:500; margin: 4rem 0 1rem;}
	#thejavascript h4 {font-size: 1.2rem; color:#111; font-weight: 500; margin: 3rem 0 2rem;}
	#thejavascript section {border-bottom:1px solid #eee; padding-bottom: 4rem; }
	#thejavascript header {padding:0 1.5rem;}
	#thejavascript p {font-size: 1.1rem; line-height: 2.4rem; color:#666; margin: 2rem 0;}
	#thejavascript button {padding: 16px 32px;}
	#thejavascript .imgtitle {margin-top:-4.9rem; font-size:0.8rem; font-family:"Roboto Mono"; color:#000; letter-spacing:1px; margin-bottom:4.9rem; }
	#thejavascript .content { padding-right: 12rem; color: #999;}
	#thejavascript .flex {display: flex;}
	#thejavascript .center {text-align: center; justify-content: center; align-items: }
	#thejavascript .spacer {flex-grow: 1;}
	#thejavascript .left { min-width: 12rem; font-size:.9rem; color:#111; font-weight: 500;}
	#thejavascript .left i {font-size: 1.2rem;}
	#thejavascript .w33 {width: 33%; padding: 1rem;}
	#thejavascript .full{object-fit: cover; width:100%; height: 600px; margin: 3rem 0rem 5rem; overflow:hidden;}
	#thejavascript .full::after {content:attr(title);}
	#thejavascript .medium{object-fit: cover; width:100%; height: 250px;}


</style>
