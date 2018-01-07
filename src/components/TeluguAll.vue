<template>
<div class="page-container">
<md-app md-waterfall md-mode="flexible">
  <md-app-toolbar class="md-large md-primary">
    <div class="md-toolbar-row">
    <div class="md-toolbar-section-start">
      <md-button class="md-icon-button" @click="toggleMenu" >
        <md-icon v-if="pagetype=='main'">menu</md-icon>
        <md-icon v-if="pagetype!='main'">chevron_left</md-icon>
      </md-button>
    </div>

    <div class="md-toolbar-section-end">
      <md-button class="md-icon-button" @click="showAdd" v-if="pagetype=='main'">
        <md-icon>add</md-icon>
      </md-button>
    </div>
    </div>

    <div class="md-toolbar-row md-toolbar-offset">
    <span class="md-display-1">{{this.category}}</span>
    </div>
  </md-app-toolbar>

  <md-app-drawer md-permanent="full" :md-active.sync="menuVisible">
    <md-toolbar class="md-transparent bold" md-elevation="0">
      తెలుగుఆల్
    </md-toolbar>


    <md-list>
      <md-list-item @click="getData('దేవాలయాలు')">
        <md-icon>home</md-icon>
        <span class="md-list-item-text">దేవాలయాలు</span>
      </md-list-item>

      <md-list-item @click="getData('పండుగలు')">
        <md-icon>bubble_chart</md-icon>
        <span class="md-list-item-text">పండుగలు</span>
      </md-list-item>

      <md-list-item @click="getData('వంటలు')">
        <md-icon>delete</md-icon>
        <span class="md-list-item-text">వంటలు</span>
      </md-list-item>

      <md-list-item @click="getData('పాటలు')">
        <md-icon>music_note</md-icon>
        <span class="md-list-item-text">పాటలు</span>
      </md-list-item>
      <md-list-item @click="getData('వీడియోలు')">
        <md-icon>videocam</md-icon>
        <span class="md-list-item-text">వీడియోలు</span>
      </md-list-item>

      <md-list-item @click="getData('పిల్లలు')">
        <md-icon>tag_faces</md-icon>
        <span class="md-list-item-text">పిల్లలు</span>
      </md-list-item>
      <md-list-item @click="getData('వ్యవసాయం')">
        <md-icon>filter_vintage</md-icon>
        <span class="md-list-item-text">వ్యవసాయం</span>
      </md-list-item>
      <md-list-item @click="getData('టీవీ')">
        <md-icon>tv</md-icon>
        <span class="md-list-item-text">టీవీ</span>
      </md-list-item>
    </md-list>
  </md-app-drawer>

  <md-app-content class="md-scrollbar" :height="height">
    <md-list class="md-triple-line" v-for="book,index in books" v-if="pagetype=='main' && book!=null && index!='.key'">
      <md-list-item>
        <md-avatar>
          <img src="https://placeimg.com/40/40/people/1" alt="People">
        </md-avatar>

        <div class="md-list-item-text" @click="showRecord(index)">
         {{book.title}} 
        </div>

      </md-list-item>

      <md-divider class="md-inset"></md-divider>
    </md-list>
    <div v-if="pagetype=='details'">
      <div class="head bold">{{record.title}}</div>
      <div class="content" v-html='record.content'></div>
    </div>
    <div v-if="pagetype=='add'">
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
    </div>
  </md-app-content>
</md-app>
    </div>
 
</template>

<script>
import {dbTeluguRef} from '../firebaseconfig';
import { mapGetters,mapMutations } from 'vuex';

export default {
  name: 'TeluguAll',
  data () {
    return {
      pagetype:"main",
      record: {
        content:"",
        title:"",
        category:""
        
      },
      category:"దేవాలయాలు",
      height:"600px",
      menuVisible:false
    }
  },
  computed: {
    ...mapGetters(['books']),
  },
  methods: {
    addData() {
      dbTeluguRef.push(this.record);
      this.pagetype='main';
    },
    showRecord(id) {
      this.pagetype='details';
      this.record.content=this.books[id].content;
      this.record.title=this.books[id].title;
      // this.record.category=this.category;
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
      // this.$store.commit("category",val);
      // this.$store.commit('changeCategory',val);
      this.$store.dispatch("setData",{ref:dbTeluguRef,category:this.category});
    }
  },
  created() {
    this.$store.dispatch("setBooks",dbTeluguRef);
    this.height = (innerHeight-64)+"px"

  },
  filters: {
    cleanup(val) {
      return val.replace('/\n/g','<br>');
    }
  }
}
</script>
