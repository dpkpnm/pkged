webpackJsonp([1],{NHnr:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i("7+uW"),s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]},o=i("VU/8")(null,s,!1,null,null,null).exports,n=i("/ocq"),r=i("Dd8w"),c=i.n(r),h=i("Sazm"),d=i.n(h).a.initializeApp({apiKey:"AIzaSyC00DGUDNikFGk2YVWKfNZQu8ZEV3gCUr8",authDomain:"pkged01.firebaseapp.com",databaseURL:"https://pkged01.firebaseio.com",projectId:"pkged01",storageBucket:"pkged01.appspot.com",messagingSenderId:"614795578993"}),l=d.database(),p=d.storage(),u={pkged:l.ref("pkged"),diy3dprint:l.ref("diy3dprint"),readtokid:l.ref("readtokid"),topgreatminds:l.ref("topgreatminds"),thejavascript:l.ref("thejavascript"),teluguall:l.ref("teluguall")},f=i("NYxO"),g={name:"Home",data:function(){return{pagetype:"main",datatype:"form",jsondata:"",showDialog:!1,homepage:!0,record:{content:"",title:"",category:""},video:null,winheight:innerHeight-70,width:innerWidth,menuVisible:!1}},computed:c()({},Object(f.b)(["data"]),{website:function(){return"localhost"==location.hostname?"readtokid":location.hostname.replace(".com","").toLowerCase()}}),methods:{showVideo:function(e){this.homepage=!1,this.video="https://www.youtube.com/embed/"+e+"?autoplay=1"},addData:function(){if("form"==this.datatype)u[this.website].push(this.record);else for(var e=JSON.parse(this.jsondata),t=0;t<e.length;t++)u[this.website].push(e[t]);this.pagetype="main"},closeVideo:function(){this.homepage=!0,this.video=""},showRecord:function(e){this.pagetype="details",this.record.content=this.books[e].content,this.record.title=this.books[e].title,this.record.category=this.category},showAdd:function(){this.pagetype="add",this.record.content="",this.record.title="",this.record.category=this.category},cleanup:function(e){return e.replace("/\n/g","<br>")},toggleMenu:function(){"main"!=this.pagetype?this.pagetype="main":this.menuVisible=!this.menuVisible},getData:function(e){this.menuVisible=!1,this.category=e,this.pagetype="main",this.$store.commit("category",e),this.$store.commit("changeCategory",e),this.$store.dispatch("setData",{ref:u[this.website],category:this.category})}},created:function(){this.$store.dispatch("setData",u[this.website]),this.height=innerHeight-64+"px"},filters:{cleanup:function(e){return e.replace("/\n/g","<br>")}}},m={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{class:{flex:!0,bb:!0,dark:!e.homepage},attrs:{id:"menu"}},[e.homepage?i("h2",{staticClass:"br ph16 flex"},[i("i",[e._v("menu")]),i("div",[e._v("MENU")])]):e._e(),e._v(" "),e.homepage?e._e():i("h2",{staticClass:"br ph16 flex",on:{click:e.closeVideo}},[i("i",[e._v("chevron_left")])]),e._v(" "),i("h1",{staticClass:"flex-grow br ph16 center"},[e._v(e._s(e.website))]),e._v(" "),e.homepage?i("h2",{staticClass:"ph16 primarybg"},[e._v("REGISTER / LOG IN")]):e._e()]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.homepage,expression:"homepage"}],staticClass:"ph64",style:{height:e.winheight+"px"},attrs:{id:"content"}},[e._m(0),e._v(" "),i("section",{staticClass:"flex flex-start flex-wrap"},e._l(e.data,function(t){return i("div",{staticClass:"ph16 pl0 record"},[t.img?i("div",{staticClass:"img",style:{backgroundImage:"url("+t.img.replace("books","book").replace("s/","l/").replace("book","books")+")"},on:{click:function(i){e.showVideo(t.video)}}}):e._e(),e._v(" "),i("div",{staticClass:"title p32"},[i("h4",[e._v(e._s(t.title))]),e._v(" "),i("p",{staticClass:"pv16"},[e._v("by "),i("a",{attrs:{href:"#"}},[e._v(e._s(t.author))])])])])})),e._v(" "),e._m(1),e._v(" "),e._m(2)]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!e.homepage,expression:"!homepage"}],attrs:{id:"details"}},[i("iframe",{attrs:{type:"text/html",width:e.width,height:e.winheight,src:e.video,frameborder:"0"}})]),e._v(" "),i("div",{attrs:{id:"footer"}})])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("h3",[this._v("Books of the day "),t("span",[this._v("New books added today")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",[this._v("Nominees "),t("span",[this._v("We need your vote!")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",[this._v("Directory "),t("span",[this._v("Find the Best Digital Agencies & Professionals")])])}]},v=i("VU/8")(g,m,!1,null,null,null).exports,_={name:"Pkged",data:function(){return{otherdb:l.ref("other"),cartoonsdb:l.ref("cartoons"),files:{},cnFile:0,isUploading:!1}},computed:c()({},Object(f.b)(["data"])),methods:{upload:function(e){if(void 0!=e){var t=e.name,i=this,a=this.otherdb;if(void 0!=t){"image/png"==e.type&&(t="cartoons/"+e.lastModified+".png",a=this.cartoonsdb);var s=p.ref(t).put(e);s.on("state_changed",function(){},function(e){},function(){a.push({url:s.snapshot.downloadURL,name:t}),i.cnFile++,i.upload(i.files[i.cnFile])})}}else this.isUploading=!1},filesAdded:function(e,t){this.isUploading=!0,this.cnFile=0,this.files=e,this.upload(e[this.cnFile])}}},b={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"dropbox"},[e.isUploading?e._e():i("form",{attrs:{enctype:"multipart/form-data"}},[i("input",{staticClass:"input-file",attrs:{type:"file",multiple:"",accept:"image/*"},on:{change:function(t){e.filesAdded(t.target.files)}}})]),e._v(" "),e.isUploading?i("div",{staticClass:"box"},[e._v("\n  \t"+e._s(e.cnFile+1)+"/"+e._s(e.files.length)+" - Uploading\n  ")]):e._e()])},staticRenderFns:[]},y=i("VU/8")(_,b,!1,function(e){i("kD96")},null,null).exports;a.a.use(n.a);var w=new n.a({mode:"history",routes:function(){switch(location.hostname){case"pkged.com":return[{path:"/",component:y}];default:return[{path:"/",component:v}]}}()}),k=i("reQO");a.a.use(f.a);var x=new f.a.Store({mutations:c()({},k.firebaseMutations),state:{data:{name:"Text"},website:location.hostname,category:""},actions:{setData:Object(k.firebaseAction)(function(e,t){(0,e.bindFirebaseRef)("data",t.ref)})},getters:{data:function(e){return e.data},category:function(e){return e.category}}});a.a.config.productionTip=!1,new a.a({el:"#app",router:w,store:x,template:"<App/>",components:{App:o}})},kD96:function(e,t){}},["NHnr"]);