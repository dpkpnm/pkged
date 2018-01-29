<template>
	<main>
	<header class=flex>
		<h1>DIY<br>3D PRINT</h1>
		<div class="spacer center">
		</div>
		<i @click="add=true" v-if="!add">add</i>
		<i>search</i>
		<i>menu</i>
	</header>
	<section v-if="add">
		<textarea v-model="record.article"></textarea>

		<button @click="cancel">Cancel</button>
		<button @click="addData">Save</button>
	</section>
	<section v-if="!add" v-html="article">
		
	</section>
	<section v-if="!add">
		<h4>Suggested Articles</h4>
		<div class=flex>
			<div class=w33>
			<img class=medium src=http://oliviervanherpt.com/img/3d-print-ceramic-knitted.jpg>
			</div>
			<div class=w33>
				<img class=medium src=https://www.staples.com/sbd/cre/marketing/what-is-3d-printing/images/section_1.png>
			</div>
			<div class=w33>
				<img class=medium src="https://i2.wp.com/makezine.com/wp-content/uploads/2017/08/FEATURED-NightBloomingFlower_Openers.jpg?fit=2000%2C1204&ssl=1">
			</div>

		</div>
	</section>
	<footer>
	</footer>
</main>
</template>

<script>
import {dbRef} from '../firebaseconfig';
import { mapGetters,mapMutations } from 'vuex';
import _ from 'lodash'

export default {
  name: 'Diy3d',
  data () {
    return {
    	add:false,
    	record:{category:"test",article:""}
    }
  },
  computed: {
    ...mapGetters(['data']),
    article() {
    	debugger;
    	var val = _(this.data).map().value();
    	console.log();
    	return val[0].article ? val[val.length-2].article : "Loading";
    }
   
  },
  methods: {
  	cancel() {
  		this.add=false;
  		this.record.article="";
  		return;
  	},
    
		addData() {
			dbRef["diy3dprint"].push(this.record);
			this.record.article="";
			this.add=false;
    },
    getData(val) {
      this.$store.dispatch("setData",{ref:dbRef["diy3dprint"],category:this.category});
    }
  },
  created() {
    this.$store.dispatch("setData",dbRef["diy3dprint"]);
    
  },
  filters: {
    cleanup(val) {
      return val.replace('/\n/g','<br>');
    }
  }
}
</script>

<style scoped>
	textarea {width:100%; height:90vh;}
	h1 {font-weight: 900; font-size: 1.2rem; letter-spacing: 2px; text-align: center; color:#111;}
	.flex {display: flex;}
	.center {text-align: center; justify-content: center; align-items: }
	.spacer {flex-grow: 1;}

	li {list-style: none; display: inline; padding: 1rem; line-height: 2rem;}
	i {color:#111; font-family: 'Material Icons'; font-weight: normal; font-style: normal; font-size: 1.8rem; line-height: 2rem; -webkit-font-smoothing: antialiased; text-rendering: optimizeLegibility; -moz-osx-font-smoothing: grayscale; font-feature-settings: 'liga'; padding-left: 32px; } 
	h2 {color:#111; font-size: 2rem; font-weight:500; margin-bottom: 1rem;} h3 {color:#111; font-size: 1.6rem; font-weight:500; margin: 4rem 0 1rem;}
	h4 {font-size: 1.2rem; color:#111; font-weight: 500; margin: 3rem 0 2rem;}
	section {border-bottom:1px solid #eee; padding-bottom: 4rem;}
	.full{object-fit: cover; width:100%; height: 600px; margin: 3rem 0rem 5rem;}
	.medium{object-fit: cover; width:100%; height: 250px;}

	header {padding:0 1.5rem;}
	.content { padding-right: 12rem;}
	.left { min-width: 12rem; font-size:.9rem; color:#111; font-weight: 500;}
	.left i {font-size: 1.2rem;}
	p {font-size: 1.1rem; line-height: 2.4rem; color:#555; margin: 2rem 0;}
	.w33 {width: 33%; padding: 1rem;}
	button {padding: 16px 32px;}


</style>
