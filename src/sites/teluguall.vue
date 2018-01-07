<style type="text/css">
  button {outline: none; padding:8px;}
  input {width:20rem; line-height: 2rem; font-size:14px; margin:16px 0;}
</style>
<template>
  <div id="app">
    <md-content class="md-elevation-12">12</md-content>
    <div v-for="book,index in books" v-if="pagetype=='main'">
      <div @click="showRecord(index)">{{book.title}} - record</div>
    </div>
    <button v-if="pagetype=='main'" @click="showAdd">Add</button>
    <div v-if="pagetype=='details'">
      <h1>{{record.title}}</h1>
      {{record.content  | cleanup}}
    </div>
    <div v-if="pagetype=='add'">
      <input v-model="record.title" placeholder="title" /><br>
      <textarea rows="60" cols="200" v-model="record.content" placeholder="content"></textarea>
      <button @click="addData" v-if="record.title.length>0">Add Data</button>
    </div>
  </div>
</template>

<script>
import {dbTeluguRef} from './firebaseconfig';
import { mapGetters } from 'vuex';

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      pagetype:"main",
      record: {
        content:"",
        title:""
        
      }
    }
  },
  computed: {
    ...mapGetters(['books'])
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
    },
    showAdd() {
      this.pagetype='add';
      this.record.content="";
      this.record.title="";
    }
  },
  created() {
    this.$store.dispatch("setBooks",dbTeluguRef)
  },
  filters: {
    cleanup(val) {
      return val.replace('/\n/g','<br>');
    }
  }
}
</script>
