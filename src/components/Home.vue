<template>
  <div>
  	<div id=menu class="flex bb">
      <h2 class="br ph16 flex"><i>menu</i><div>MENU</div></h2>
      <h1 class="flex-grow br ph16 center">READTOKID</h1>
      <h2 class="ph16 primarybg">REGISTER / LOG IN</h2>
    </div>
    <div id=content class="ph64">
      <h3>Sites of the day <span>This is the content</span></h3>
      <section class="flex flex-start flex-wrap">
        <div class="ph16 pl0 record" v-for="record in data">
          <div class=img v-if="record.img" :style='{backgroundImage:"url(" + record.img.replace("books","book").replace("s/","l/").replace("book","books") + ")"}'></div>
          <div class="title p32">
            <h4>{{record.title}}</h4>
            <p class=pv16>by <a href=#>{{record.author}}</a></p>
          </div>
        </div>
      </section>
      <h3>Nominees <span>We need your vote!</span></h3>
      <h3>Directory <span>Find the Best Digital Agencies & Professionals</span></h3>
    </div>
    <div id="footer"></div>
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
