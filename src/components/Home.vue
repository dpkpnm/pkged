<template>
	<div class=wrapper>
     <div class="page-container">
    <md-app md-waterfall md-mode="fixed-last">
      <md-app-toolbar class="md-large md-dense md-primary">
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
              <md-icon>menu</md-icon>
            </md-button>

            <span class="md-title">ReadToKid</span>
          </div>

          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button">
              <md-icon>more_vert</md-icon>
            </md-button>
          </div>
        </div>

        <div class="md-toolbar-row">
          <md-tabs class="md-primary">
            <md-tab id="tab-home" md-label="Home"></md-tab>
            <md-tab id="tab-pages" md-label="Pages"></md-tab>
            <md-tab id="tab-posts" md-label="Posts"></md-tab>
            <md-tab id="tab-favorites" md-label="Favorites"></md-tab>
          </md-tabs>
        </div>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="0">Navigation</md-toolbar>

        <md-list>
          <md-list-item>
            <md-icon>move_to_inbox</md-icon>
            <span class="md-list-item-text">Inbox</span>
          </md-list-item>

          <md-list-item>
            <md-icon>send</md-icon>
            <span class="md-list-item-text">Sent Mail</span>
          </md-list-item>

          <md-list-item>
            <md-icon>delete</md-icon>
            <span class="md-list-item-text">Trash</span>
          </md-list-item>

          <md-list-item>
            <md-icon>error</md-icon>
            <span class="md-list-item-text">Spam</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>
    <md-app-content>
    
    <div  class="flex">

      <div class=item v-for="book in data" :width="width/5">
        <div class=img @click="showVideo(book.video)"><img :src="book.img.replace('books','book').replace('s/','l/').replace('book','books')" v-if="book.img!=null" /></div>
        <h1>{{book.title}}</h1> 
        <div class=author>by {{book.author}}</div>
      </div>
      
    </div>


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
	    
	  </template>
   	<template v-if="datatype=='json'">
      <md-field>
        <label>Content</label>
   		  <md-textarea v-model="jsondata"></md-textarea>
      </md-field>
   	</template>
    <md-button class="md-fab md-primary " @click="addData">
        <md-icon>done</md-icon>
      </md-button>
	
  <button @click="closeVideo"> <md-icon class="close" v-if="showDialog">close</md-icon></button>
  <md-dialog :md-active.sync="showDialog">
    <div class="video">
      <iframe width=600 height=600 allowfullscreen :src="youtubeurl" frameborder="0"></iframe>
    </div>
  </md-dialog>

</md-app-content>
</md-app>
	</div>
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
      showDialog: false,
      record: {
        content:"",
        title:"",
        category:""
        
      },
      video:null,

      
      menuVisible:false,

    }
  },
  computed: {
    ...mapGetters(['data']),
    website() {
    	if(location.hostname=="localhost")
    		return "readtokid";
    	return location.hostname.replace(".com","").toLowerCase();
    },
    height() {
      return innerHeight;
    },
    width() {
      return innerWidth;
    },
    youtubeurl() {
      return "https://www.youtube.com/embed/"+(this.video || 'muGAPNgBXDc')+"?autoplay=1&modestbranding=1;controls=0;showinfo=0;rel=0;fs=1";
    }
  },
  methods: {
    showVideo(id) {
      this.showDialog=true;
      this.video=id;
    },
    addData() {
      if(this.datatype=='form')
        dbRef[this.website].push(this.record);
      else {
        var data = JSON.parse(this.jsondata);
        for(var i=0; i<data.length; i++)
          dbRef[this.website].push(data[i]);
      }

      this.pagetype='main';
    },
    closeVideo() {
      this.showDialog=false;
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
<style type="text/css" scoped>
  .wrapper {margin:0 5%;}
  .flex {display: flex;flex-wrap: wrap;}
  .item { padding:32px; }
  .item img {max-width:150px; max-height: 150px;}
  .img {height: 190px; background:#fff; display: flex; align-items: center; justify-content: center;}
  .item h1 {font-size: 0.8rem; margin:8px 0 16px; padding:0; line-height:1.4;}
  .author {font-size: 0.8rem; color: #999; line-height:1; width:100%; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; }
  .close {position: absolute; right:16px ; top:16px; z-index:100; color:#fff;}
  .md-dialog {
    max-width:100%;
    max-height:100%;
    width:100%;
    height:100%;
    background: #000;
  }

  .video {
    background-color:#000;
    /*display: flex;
    justify-content: center;
    align-items: center;
    width:100%;
    height:100%;*/
    position:relative;
    padding-bottom:56.25%;
    padding-top:30px;
    height:0;
    overflow:hidden;
  }

  .video iframe, .video object, .video embed {
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
  }
</style>