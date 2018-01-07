<template>
	<div class=wrapper>
		<div>
			<md-radio v-model="datatype" value="form">Form</md-radio>
		  <md-radio v-model="datatype" value="json">JSON</md-radio>
		</div>
		<template v-if="datatype=='form'">
			<md-field>
	      <label>Title</label>
	      <md-input v-model="record.title" placeholder="Title"></md-input>
	    </md-field>
	    <md-field>
	      <label>Content</label>
	      <md-textarea v-model="record.content" placeholder="Content"></md-textarea>
	    </md-field>
	    <md-button class="md-fab md-primary " @click="addData">
	      <md-icon>done</md-icon>
	    </md-button>
	  </template>
   	<template v-if="datatype=='json'">
   		<md-textarea v-model="jsondata"></md-textarea>
   	</template>
	<!-- <md-icon>add</md-icon> -->


	</div>
</template>

<script>
import {dbRef} from '../firebaseconfig';
import { mapGetters,mapMutations } from 'vuex';

export default {
  name: 'Home',
  data () {
    return {
      pagetype:"main",
      datatype:"form",
      jsondata:"",
      record: {
        content:"",
        title:"",
        category:""
        
      },
      height:"600px",
      menuVisible:false,

    }
  },
  computed: {
    ...mapGetters(['data']),
    website() {
    	if(location.hostname=="localhost")
    		return "pkged";
    	return location.hostname.replace(".com","").toLowerCase();
    }
  },
  methods: {
    addData() {
      dbRef[this.website].push(this.record);
      this.pagetype='main';
    },
    showRecord(id) {
      this.pagetype='details';
      this.record.content=this.books[id].content;
      this.record.title=this.books[id].title;
      this.record.category=this.category;
    },
    showAdd() {
      this.pagetype='add';
      this.record.content="";
      this.record.title="";
      this.record.category=this.category;
    },
    cleanup(val) {
      return val.replace("/\n/g","<br>");
    },
    toggleMenu() {
      if(this.pagetype!='main')
        this.pagetype='main';
      else
        this.menuVisible=!this.menuVisible;
    },

    getData(val) {
      this.menuVisible=false;
      this.category=val;
      this.pagetype="main";
      this.$store.commit("category",val);
      this.$store.commit('changeCategory',val);
      // console.log(this.website);
      this.$store.dispatch("setData",{ref:dbRef[this.website],category:this.category});
    }
  },
  created() {
    this.$store.dispatch("setData",dbRef[this.website]);
    this.height = (innerHeight-64)+"px"

  },
  filters: {
    cleanup(val) {
      return val.replace('/\n/g','<br>');
    }
  }
}
</script>