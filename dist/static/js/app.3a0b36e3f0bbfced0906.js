webpackJsonp([1],{"/ex+":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={props:{indexTab:{type:String}},created:function(){this.tabs=this.$children},mounted:function(){var t=this;this.tabs.length&&(this.indexTab?this.tabs.forEach(function(e,a){e.tabHash===t.indexTab&&t.setPage(a)}):(this.selectTab(this.tabs[0].tabHash),this.setPage(0))),this.$nextTick(function(){t.children=document.querySelectorAll(".tabs-panel-content")}),this.initDPR()},watch:{indexTab:function(){this.tabs.length&&(this.indexTab?this.selectTab(this.indexTab):this.selectTab(this.tabs[0].tabHash))}},data:function(){return{tabs:[],children:[],activeHash:"",touchPoint:{startLeft:0,startTop:0,startTime:0},distance:{left:0,top:0},currentPage:0,translateX:0,transitionOrnot:!1,startTranslateX:0,swipeType:0,dpr:1}},methods:{selectTab:function(t){this.tabs.forEach(function(e){e.isActive=e.tabHash===t}),this.activeHash=t},next:function(){var t=this.currentPage;t<this.tabs.length-1&&t++,this.setPage(t)},prev:function(){var t=this.currentPage;t>0&&t--,this.setPage(t)},reset:function(){this.setPage(this.currentPage)},setPage:function(t){var e=this;this.currentPage;this.currentPage=t,this.translateX=-this.tabs.reduce(function(e,a,i){return i>t-1?e:e+a.$el.clientWidth},0),[].forEach.call(this.children,function(t,a){a===e.currentPage?t.style.height="auto":t.style.height="0px"}),this.selectTab(this.tabs[t].tabHash),this.$emit("changePage",this.currentPage),setTimeout(function(){e.transitionOrnot||(e.transitionOrnot=!0)})},onTouchStart:function(t){var e=t.changedTouches[0]||t.touches[0],a=e.pageX;this.touchPoint.startLeft=a;var i=e.pageY;this.touchPoint.startTop=i;var n=this.translateX;this.startTranslateX=n;var s=(new Date).getTime();this.touchPoint.startTime=s},onTouchMove:function(t){var e=t.changedTouches[0]||t.touches[0],a=e.pageX-this.touchPoint.startLeft;this.distance.left=a;var i=Math.abs(e.pageY-this.touchPoint.startTop);switch(this.distance.top=i,this.swipeType){case 0:Math.abs(a)/i>1.5?(t.preventDefault(),t.stopPropagation(),this.swipeType=2):this.swipeType=1;break;case 1:break;case 2:this.translateX=this.startTranslateX+a}},onTouchEnd:function(t){var e=(new Date).getTime()-this.startTime<1e3;this.distance.left<-100*this.dpr||e&&this.distance.left<-15&&this.distance.top/this.distance.left>-6?this.next():this.distance.left>100*this.dpr||e&&this.distance.left>15&&this.distance.top/this.distance.left<6?this.prev():this.reset(),this.swipeType=0,this.distance.left=0,this.distance.top=0},initDPR:function(){var t=window,e=(t.navigator.appVersion.match(/android/gi),t.navigator.appVersion.match(/iphone/gi)),a=t.devicePixelRatio;e?a>=3&&this.dpr?this.dpr=3:a>=2&&this.dpr?this.dpr=2:this.dpr=1:this.dpr=1}}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tabs-container"},[a("ul",{staticClass:"tabs-list",attrs:{role:"tablist"}},t._l(t.tabs,function(e,i){return a("li",{key:i,staticClass:"tabs-title",style:{width:100/t.tabs.length+"%",fontSize:e.fontSize,height:e.tabHeight}},[a("a",{staticClass:"tabs-titleLink",class:t.activeHash===e.tabHash?"active":"",style:{lineHeight:e.tabHeight},on:{touchstart:function(e){t.setPage(i)},click:function(e){t.setPage(i)}}},[t._v("\n                "+t._s(e.tabHeader)+"\n                "),a("i",{staticClass:"cursor",style:{background:e.color?e.color:"#fdde02"}})])])})),t._v(" "),a("div",{staticClass:"tabContent-wrap",on:{touchstart:function(e){t.onTouchStart(e)},touchmove:function(e){t.onTouchMove(e)},touchend:function(e){t.onTouchEnd(e)}}},[a("div",{staticClass:"tabs-panel",class:{transition:t.transitionOrnot},style:{transform:"translate3d("+t.translateX+"px, 0, 0)"}},[t._t("default")],2)])])},staticRenderFns:[]};var s=a("VU/8")(i,n,!1,function(t){a("y+gp")},"data-v-65613848",null);e.default=s.exports},"6ihf":function(t,e){},DQDR:function(t,e){},IWzl:function(t,e){},JQtt:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={props:{label:{required:!0},hash:{required:!0},fontsize:{type:String},tabheight:{type:String},frontIcon:{type:String,default:""},postIcon:{type:String,default:""},RedDot:{type:String,default:""},color:{type:String}},data:function(){return{isActive:!1}},computed:{tabHeader:function(){return this.frontIcon+this.label+this.postIcon+this.RedDot},tabHash:function(){return""+this.hash.toLowerCase()},fontSize:function(){return parseInt(this.fontsize)/75+"rem"},tabHeight:function(){return parseInt(this.tabheight)/75+"rem"}}},n={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"tabs-panel-content"},[this._t("default")],2)},staticRenderFns:[]};var s=a("VU/8")(i,n,!1,function(t){a("rQlX")},"data-v-2718c393",null);e.default=s.exports},KNHW:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]},s=a("VU/8")(null,n,!1,null,null,null).exports,r=a("/ocq"),c=a("Dd8w"),o=a.n(c),l=a("Sazm"),u=a.n(l).a.initializeApp({apiKey:"AIzaSyC00DGUDNikFGk2YVWKfNZQu8ZEV3gCUr8",authDomain:"pkged01.firebaseapp.com",databaseURL:"https://pkged01.firebaseio.com",projectId:"pkged01",storageBucket:"pkged01.appspot.com",messagingSenderId:"614795578993"}),h=u.database(),d=u.storage(),p={pkged:h.ref("pkged"),diy3dprint:h.ref("diy3dprint"),readtokid:h.ref("readtokid"),topgreatminds:h.ref("topgreatminds"),thejavascript:h.ref("thejavascript"),teluguall:h.ref("teluguall")},g=a("NYxO"),m={name:"Home",data:function(){return{pagetype:"main",datatype:"form",jsondata:"",showDialog:!1,homepage:!0,record:{content:"",title:"",category:""},video:null,winheight:innerHeight-70,width:innerWidth,menuVisible:!1}},computed:o()({},Object(g.b)(["data"]),{website:function(){return"localhost"==location.hostname?"readtokid":location.hostname.replace(".com","").toLowerCase()}}),methods:{showVideo:function(t){this.homepage=!1,this.video="https://www.youtube.com/embed/"+t+"?autoplay=1"},addData:function(){if("form"==this.datatype)p[this.website].push(this.record);else for(var t=JSON.parse(this.jsondata),e=0;e<t.length;e++)p[this.website].push(t[e]);this.pagetype="main"},closeVideo:function(){this.homepage=!0,this.video=""},showRecord:function(t){this.pagetype="details",this.record.content=this.books[t].content,this.record.title=this.books[t].title,this.record.category=this.category},showAdd:function(){this.pagetype="add",this.record.content="",this.record.title="",this.record.category=this.category},cleanup:function(t){return t.replace("/\n/g","<br>")},toggleMenu:function(){"main"!=this.pagetype?this.pagetype="main":this.menuVisible=!this.menuVisible},getData:function(t){this.menuVisible=!1,this.category=t,this.pagetype="main",this.$store.commit("category",t),this.$store.commit("changeCategory",t),this.$store.dispatch("setData",{ref:p[this.website],category:this.category})}},created:function(){this.$store.dispatch("setData",p[this.website]),this.height=innerHeight-64+"px"},filters:{cleanup:function(t){return t.replace("/\n/g","<br>")}}},v={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{class:{flex:!0,bb:!0,dark:!t.homepage},attrs:{id:"menu"}},[t.homepage?a("h2",{staticClass:"br ph16 flex"},[a("i",[t._v("menu")]),a("div",[t._v("MENU")])]):t._e(),t._v(" "),t.homepage?t._e():a("h2",{staticClass:"br ph16 flex",on:{click:t.closeVideo}},[a("i",[t._v("chevron_left")])]),t._v(" "),a("h1",{staticClass:"flex-grow br ph16 center"},[t._v(t._s(t.website))]),t._v(" "),t.homepage?a("h2",{staticClass:"ph16 primarybg"},[t._v("REGISTER / LOG IN")]):t._e()]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.homepage,expression:"homepage"}],staticClass:"ph64",style:{height:t.winheight+"px"},attrs:{id:"content"}},[t._m(0),t._v(" "),a("section",{staticClass:"flex flex-start flex-wrap"},t._l(t.data,function(e){return a("div",{staticClass:"ph16 pl0 record"},[e.img?a("img",{attrs:{src:e.img.replace("books","book").replace("s/","l/").replace("book","books")},on:{click:function(a){t.showVideo(e.video)}}}):t._e(),t._v(" "),a("div",{staticClass:"title pb32"},[a("h4",[t._v(t._s(e.title))]),t._v(" "),a("p",{staticClass:"pv8"},[t._v("by "),a("a",{attrs:{href:"#"}},[t._v(t._s(e.author))])])])])})),t._v(" "),t._m(1),t._v(" "),t._m(2)]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.homepage,expression:"!homepage"}],attrs:{id:"details"}},[a("iframe",{attrs:{type:"text/html",width:t.width,height:t.winheight,src:t.video,frameborder:"0"}})]),t._v(" "),a("div",{attrs:{id:"footer"}})])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h3",[this._v("Books of the day "),e("span",[this._v("New books added today")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",[this._v("Nominees "),e("span",[this._v("We need your vote!")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",[this._v("Directory "),e("span",[this._v("Find the Best Digital Agencies & Professionals")])])}]};a("VU/8")(m,v,!1,function(t){a("KNHW")},"data-v-dd863512",null).exports;var f={name:"Pkged",data:function(){return{otherdb:h.ref("other"),cartoonsdb:h.ref("cartoons"),files:{},cnFile:0,isUploading:!1}},computed:o()({},Object(g.b)(["data"])),methods:{upload:function(t){if(void 0!=t){var e=t.name,a=this,i=this.otherdb;if(void 0!=e){"image/png"==t.type&&(e="cartoons/"+t.lastModified+".png",i=this.cartoonsdb);var n=d.ref(e).put(t);n.on("state_changed",function(){},function(t){},function(){i.push({url:n.snapshot.downloadURL,name:e}),a.cnFile++,a.upload(a.files[a.cnFile])})}}else this.isUploading=!1},filesAdded:function(t,e){this.isUploading=!0,this.cnFile=0,this.files=t,this.upload(t[this.cnFile])}}},w={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dropbox"},[t.isUploading?t._e():a("form",{attrs:{enctype:"multipart/form-data"}},[a("input",{staticClass:"input-file",attrs:{type:"file",multiple:"",accept:"image/*"},on:{change:function(e){t.filesAdded(e.target.files)}}})]),t._v(" "),t.isUploading?a("div",{staticClass:"box"},[t._v("\n  \t"+t._s(t.cnFile+1)+"/"+t._s(t.files.length)+" - Uploading\n  ")]):t._e()])},staticRenderFns:[]};var _=a("VU/8")(f,w,!1,function(t){a("kD96")},null,null).exports,b={name:"Other",data:function(){return{otherdb:h.ref("other"),cartoonsdb:h.ref("cartoons"),files:{},cnFile:0,isUploading:!1}},computed:o()({},Object(g.b)(["data"])),methods:{upload:function(t){if(void 0!=t){var e=t.name,a=this,i=this.otherdb;if(void 0!=e){"image/png"==t.type&&(e="cartoons/"+t.lastModified+".png",i=this.cartoonsdb);var n=storage.ref(e).put(t);n.on("state_changed",function(){},function(t){},function(){i.push({url:n.snapshot.downloadURL,name:e}),a.cnFile++,a.upload(a.files[a.cnFile])})}}else this.isUploading=!1},filesAdded:function(t,e){this.isUploading=!0,this.cnFile=0,this.files=t,this.upload(t[this.cnFile])}}},y={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("ul",[e("li")])])}]},k=a("VU/8")(b,y,!1,null,null,null).exports,j=a("M4fF"),C=a.n(j),x={name:"Cartoons",data:function(){return{currentcard:1}},computed:o()({},Object(g.b)(["data"]),{cardMap:function(){return C()(this.data).keys().reverse().value()},cards:function(){return this.data}}),methods:{action:function(t){var e=this.cards[this.cardMap[this.currentcard]];this.currentcard<0||!e||("clear"==t&&(e.clear=!0),"favorite"==t&&(e.favorite=!0),this.currentcard++)}},created:function(){this.$store.dispatch("setData",h.ref("cartoons"))}},D={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"scroll"},this._l(this.cards,function(t){return e("img",{attrs:{src:t.url}})}))},staticRenderFns:[]};var P=a("VU/8")(x,D,!1,function(t){a("dY3B")},null,null).exports,A={name:"Diy3d",data:function(){return{add:!1,record:{category:"test",article:""}}},computed:o()({},Object(g.b)(["data"]),{article:function(){var t=C()(this.data).map().value();return console.log(),t[0].article?t[t.length-2].article:"Loading"}}),methods:{cancel:function(){this.add=!1,this.record.article=""},addData:function(){p.diy3dprint.push(this.record),this.record.article="",this.add=!1},getData:function(t){this.$store.dispatch("setData",{ref:p.diy3dprint,category:this.category})}},created:function(){this.$store.dispatch("setData",p.diy3dprint)},filters:{cleanup:function(t){return t.replace("/\n/g","<br>")}}},N={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{attrs:{id:"diy3d"}},[a("header",{staticClass:"flex"},[t._m(0),t._v(" "),a("div",{staticClass:"spacer center"}),t._v(" "),t.add?t._e():a("i",{on:{click:function(e){t.add=!0}}},[t._v("add")]),t._v(" "),a("i",[t._v("search")]),t._v(" "),a("i",[t._v("menu")])]),t._v(" "),t.add?a("section",[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.record.article,expression:"record.article"}],domProps:{value:t.record.article},on:{input:function(e){e.target.composing||t.$set(t.record,"article",e.target.value)}}}),t._v(" "),a("button",{on:{click:t.cancel}},[t._v("Cancel")]),t._v(" "),a("button",{on:{click:t.addData}},[t._v("Save")])]):t._e(),t._v(" "),t.add?t._e():a("section",[a("div",{domProps:{innerHTML:t._s(t.article)}})]),t._v(" "),t.add?t._e():a("section",[a("h4",[t._v("Suggested Articles")]),t._v(" "),t._m(1)]),t._v(" "),a("footer")])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",[this._v("DIY"),e("br"),this._v("3D PRINT")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex"},[e("div",{staticClass:"w33"},[e("img",{staticClass:"medium",attrs:{src:"http://oliviervanherpt.com/img/3d-print-ceramic-knitted.jpg"}})]),this._v(" "),e("div",{staticClass:"w33"},[e("img",{staticClass:"medium",attrs:{src:"https://www.staples.com/sbd/cre/marketing/what-is-3d-printing/images/section_1.png"}})]),this._v(" "),e("div",{staticClass:"w33"},[e("img",{staticClass:"medium",attrs:{src:"https://i2.wp.com/makezine.com/wp-content/uploads/2017/08/FEATURED-NightBloomingFlower_Openers.jpg?fit=2000%2C1204&ssl=1"}})])])}]};var T=a("VU/8")(A,N,!1,function(t){a("IWzl")},null,null).exports,M={name:"Javascript",data:function(){return{pagetype:"main",add:!1,edit:!1,record:{category:"test",article:""},current:0}},computed:o()({},Object(g.b)(["data"]),{articleMap:function(){var t=C()(this.data).map().value();return this.current=t.length-2,t},article:function(){return this.articleMap[0].article?this.articleMap[this.current].article:"Loading"},key:function(){var t=C()(this.data).keys().value();return t[t.length-2]}}),methods:{cancel:function(){this.add=!1,this.record.article=""},editData:function(){this.record.article=this.article,this.edit=!0,this.add=!0},nextArticle:function(){0!=this.current&&this.current--},prevArticle:function(){this.current++},addData:function(){this.edit?p.thejavascript.child(this.key).update(this.record):p.thejavascript.push(this.record),this.record.article="",this.add=!1,this.edit=!1},getData:function(t){this.$store.dispatch("setData",{ref:p.thejavascript,category:this.category})}},created:function(){this.$store.dispatch("setData",p.thejavascript)},filters:{cleanup:function(t){return t.replace("/\n/g","<br>")}}},S={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{attrs:{id:"thejavascript"}},[a("header",{staticClass:"flex"},[t.add?t._e():a("h1",[t._v("The"),a("br"),t._v("Javascript")]),t._v(" "),t.add?a("i",{on:{click:t.cancel}},[t._v("chevron_left")]):t._e(),t._v(" "),a("div",{staticClass:"spacer center"}),t._v(" "),t.add?t._e():a("i",{on:{click:t.editData}},[t._v("edit")]),t._v(" "),t.add?t._e():a("i",{on:{click:function(e){t.add=!0}}},[t._v("add")]),t._v(" "),t.add?t._e():a("i",[t._v("search")]),t._v(" "),t.add?t._e():a("i",[t._v("view_comfy")])]),t._v(" "),a("div",{attrs:{id:"scroll"}},[t.add?a("section",[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.record.article,expression:"record.article"}],domProps:{value:t.record.article},on:{input:function(e){e.target.composing||t.$set(t.record,"article",e.target.value)}}}),t._v(" "),a("button",{on:{click:t.cancel}},[t._v("Cancel")]),t._v(" "),a("button",{on:{click:t.addData}},[t._v("Save")])]):t._e(),t._v(" "),"main"==t.pagetype?a("section",[a("div",{domProps:{innerHTML:t._s(t.article)}})]):t._e(),t._v(" "),"list"==t.pagetype?a("section"):t._e(),t._v(" "),a("footer",[a("div",{staticClass:"flex"},[a("div",{on:{click:t.prevArticle}},[a("i",[t._v("chevron_left")]),t._v("Previous Article")]),t._v(" "),a("div",{staticClass:"spacer"},[t._v(" ")]),t._v(" "),a("div",{staticClass:"next",on:{click:t.nextArticle}},[t._v("Next Article"),a("i",[t._v("chevron_right")])])])])])])},staticRenderFns:[]};var O=a("VU/8")(M,S,!1,function(t){a("DQDR")},null,null).exports,E={name:"Javascript",data:function(){return{add:!1,edit:!1,record:{category:"test",article:""}}},computed:o()({},Object(g.b)(["data"]),{article:function(){var t=C()(this.data).map().value();return t[0].article?t[t.length-2].article:"Loading"},key:function(){var t=C()(this.data).keys().value();return t[t.length-2]}}),methods:{cancel:function(){this.add=!1,this.record.article=""},editData:function(){this.record.article=this.article,this.edit=!0,this.add=!0},addData:function(){this.edit?p.readtokid.child(this.key).update(this.record):p.readtokid.push(this.record),this.record.article="",this.add=!1,this.edit=!1},getData:function(t){this.$store.dispatch("setData",{ref:p.readtokid,category:this.category})}},created:function(){this.$store.dispatch("setData",p.readtokid)},filters:{cleanup:function(t){return t.replace("/\n/g","<br>")}}},L={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{attrs:{id:"readtokid"}},[a("header",{staticClass:"flex"},[t.add?t._e():a("h1",[t._v("Read"),a("br"),t._v("to kid")]),t._v(" "),t.add?a("i",{on:{click:t.cancel}},[t._v("chevron_left")]):t._e(),t._v(" "),a("div",{staticClass:"spacer center"}),t._v(" "),t.add?t._e():a("i",{on:{click:t.editData}},[t._v("edit")]),t._v(" "),t.add?t._e():a("i",{on:{click:function(e){t.add=!0}}},[t._v("add")]),t._v(" "),t.add?t._e():a("i",[t._v("search")]),t._v(" "),t.add?t._e():a("i",[t._v("menu")])]),t._v(" "),t.add?a("section",[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.record.article,expression:"record.article"}],domProps:{value:t.record.article},on:{input:function(e){e.target.composing||t.$set(t.record,"article",e.target.value)}}}),t._v(" "),a("button",{on:{click:t.cancel}},[t._v("Cancel")]),t._v(" "),a("button",{on:{click:t.addData}},[t._v("Save")])]):t._e(),t._v(" "),t.add?t._e():a("section",[t._m(0),t._v(" "),a("section",{staticClass:"flex flex-start flex-wrap"},t._l(t.data,function(e){return a("div",{staticClass:"ph16 pl0 record"},[e.img?a("img",{attrs:{src:e.img.replace("books","book").replace("s/","l/").replace("book","books")},on:{click:function(a){t.showVideo(e.video)}}}):t._e(),t._v(" "),a("div",{staticClass:"title pb32"},[a("h4",[t._v(t._s(e.title))]),t._v(" "),a("p",{staticClass:"pv8"},[t._v("by "),a("a",{attrs:{href:"#"}},[t._v(t._s(e.author))])])])])})),t._v(" "),a("div",{domProps:{innerHTML:t._s(t.article)}})]),t._v(" "),a("footer")])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",[this._v("Books of the day "),e("span",[this._v("New books added today")])])}]};a("VU/8")(E,L,!1,function(t){a("6ihf")},null,null).exports;var H={name:"Other",data:function(){return{scrolled:!1,isDetail:!1,isLyric:!1,backTitle:"",state:"",selectedItem:{},seletedSong:{},details:!1,swiperOptionh:{spaceBetween:50},swiperOption:{slidesPerView:innerWidth/134,spaceBetween:8,freeMode:!0},pageSwiperOption:{slidesPerView:1,spaceBetween:8,freeMode:!1,pagination:{el:".swiper-pagination",clickable:!0}}}},computed:{temp:function(){return[{img:"https://a10.gaanacdn.com/images/albums/79/2164579/crop_175x175_1528547376_2164579.jpg",title:"Tej I Love You",songs:[{title:"Andamaina Chandamama",lyric:"Andamaina Chandhamaama Neevenaa<br>Ninnu Nenu Andhukundi Nijamenaa<br>Nuvu Thodunte Voo Laa Laa<br> Ee Life Anthaaa Uyyaalaa<br>Hug Cheyave O Pillaa<br>Wifi Laa Nannillaa<br>Andamaina Chandhamaama Neevenaa<br>Ninnu Nenu Andhukundi Nijamenaa<br>Parugidu Ee Kalaanaa<br>Adugulu Darikaaleeka<br>Manamevaro Yemo Yendhaaka<br>Paravashame Prathi Raaka<br>Choopi O Shubhalekha<br>Mana Madhilo Preme Kaligaakaa<br>Mana Iddhari Paine Viripoolu Challindhi Punnaaga<br>Nee Muddhula Kosam Nevechi Vunnaa<br>Andamaina Chandhamaama Neevenaa<br>Ninnu Nenu Andhukundi Nijamenaa<br>Nuvu Thodunte Voo Laa Laa<br> Ee Life Anthaaa Uyyaalaa<br>Hug Cheyave O Pillaa<br>Wifi Laa Nannillaa<br>(Instrumental Music) Ooo<br> Aravirise Jaajullo Kalagalise Mojullo<br>Alalegise Aase Premantaa<br>Madhi Murise Valapullo Maimarache Merupullo<br>Melithirige Vayasaa Rammantaa… Padakintikochi Nuvvu Paala Muripaalu Korangaa<br>Nadumichchukuntaa Vayyarilaagaa… Andamaina Chandhamaama Neevenaa<br>Ninnu Nenu Andhukundi Nijamenaa<br>Nuvu Thodunte Voo Laa Laa<br> Ee Life Anthaaa Uyyaalaa<br>Hug Cheyave O Pillaa<br>Wifi Laa Nannillaa<br>Andamaina Chandhamaama Neevenaa<br>Ninnu Nenu Andhukundi Nijamenaa<br>(X2)"},{title:"Nachutunde Vachi"},{title:"Happy Happy Family"},{title:"Adee Kannu Needi"},{title:"Hello Pilla Sunlo Laila"}]},{img:"https://a10.gaanacdn.com/images/albums/54/2129654/crop_175x175_1525185948_2129654.jpg",title:"Mahanati"},{img:"https://a10.gaanacdn.com/images/albums/22/2055522/crop_175x175_1522044821_2055522.jpg",title:"Krishnarjuna Yudham"},{img:"https://a10.gaanacdn.com/images/albums/86/2097586/crop_175x175_1523105735_2097586.jpg",title:"Bharat Ane Nenu"},{img:"https://a10.gaanacdn.com/images/albums/84/2059884/crop_175x175_1521085825_2059884.jpg",title:"Rangasthalam"},{img:"https://a10.gaanacdn.com/images/albums/76/2083676/crop_175x175_1521113156_2083676.jpg",title:"MLA"},{img:"https://a10.gaanacdn.com/images/albums/6/2059106/crop_175x175_1520688605_2059106.jpg",title:"Kirrak Party"},{img:"https://a10.gaanacdn.com/images/albums/10/2049910/crop_175x175_1524389349_2049910.jpg",title:"Naa Peru Surya Naa illu India"},{img:"https://a10.gaanacdn.com/images/albums/93/2037193/crop_175x175_1516882641_2037193.jpg",title:"Chalo"},{img:"https://a10.gaanacdn.com/images/albums/10/2056310/crop_175x175_1516559554_2056310.jpg",title:"Bhaagamathie"},{img:"https://a10.gaanacdn.com/images/albums/20/2047220/crop_175x175_1516425673_2047220.jpg",title:"Tholi Prema"},{img:"https://a10.gaanacdn.com/images/albums/4/2019304/crop_175x175_1514872302_2019304.jpg",title:"Agnyaathavaasi"},{img:"https://a10.gaanacdn.com/images/albums/35/2030735/crop_175x175_1512934098_2030735.jpg",title:"MCA"},{img:"https://a10.gaanacdn.com/images/albums/65/2038165/crop_175x175_1512926786_2038165.jpg",title:"Hello!"},{img:"https://a10.gaanacdn.com/images/albums/54/1988654/crop_175x175_1988654.jpg",title:"Jai Lava Kusa"}]},temp1:function(){return[{img:"https://www.atozmp3.co/wp-content/uploads/2014/12/Bachelors-2-2011-100x100.jpg",title:"Bachelors 2 (2011)"},{img:"https://www.atozmp3.co/wp-content/uploads/2014/12/Ayyare-2011-100x100.jpg",title:"Ayyare (2011)"},{img:"https://www.atozmp3.co/wp-content/uploads/2014/12/Apartment-2011-100x100.jpg",title:"Apartment (2011)"},{img:"https://www.atozmp3.co/wp-content/uploads/2015/12/Gaganam-2011-100x100.jpg",title:"Gaganam (2011)"},{img:"https://www.atozmp3.co/wp-content/uploads/2014/12/Anukokunda-Emjarigindhante-2011-100x100.jpg",title:"Anukokunda Emjarigindhante (2011)"},{img:"https://www.atozmp3.co/wp-content/uploads/2014/11/Anaganaga-O-Dheerudu-2011-100x100.jpg",title:"Anaganaga O Dheerudu (2011)"},{img:"https://www.atozmp3.co/wp-content/uploads/2011/11/KoraMeesam-CD-Cover-Front-100x100.jpg",title:"Kora Meesam (2011)"},{img:"https://www.atozmp3.co/wp-content/uploads/2014/11/Alibaba-Intlo-Andharu-Dhongalu-2011-100x100.jpg",title:"Alibaba Intlo Andharu Dhongalu (2011)"},{img:"https://www.atozmp3.co/wp-content/uploads/2014/11/Aha-Naa-Pellanta-2011-100x100.jpg",title:"Aha Naa Pellanta (2011)"},{img:"https://www.atozmp3.co/wp-content/uploads/2011/11/Ennalila-CD-Cover-Front-100x100.jpg",title:"Ennalila (2011)"},{img:"https://www.atozmp3.co/wp-content/uploads/2011/11/Kshetram-CD-Cover-Front-100x100.jpg",title:"Kshetram (2011)"},{img:"https://www.atozmp3.co/wp-content/uploads/2011/11/Duniya-CD-Cover-Front-100x100.jpg",title:"Duniya (2011)"},{img:"https://www.atozmp3.co/wp-content/uploads/2015/10/Don-2-2011-100x100.jpg",title:"Don 2 (2011)"},{img:"https://www.atozmp3.co/wp-content/uploads/2011/10/G.One-CD-Cover-Front-100x100.jpg",title:"G.One (2011)"},{img:"https://www.atozmp3.co/wp-content/uploads/2014/10/Aakasame-Haddu-2011-100x100.jpg",title:"Aakasame Haddu (2011)"}]},recipes:function(){return[{img:"http://www.eenadu.net/special-pages/ruchulu/article-images/chiken-rice-100.jpg",title:"చికెన్‌ రైస్‌"},{img:"http://www.eenadu.net/special-pages/ruchulu/article-images/chiken-manchuriya-100.jpg",title:" చికెన్‌ మంచూరియా"},{img:"http://www.eenadu.net/special-pages/ruchulu/article-images/andhra-fish-100.jpg",title:"ఆంధ్రా చేపల పులుసు"},{img:"http://www.eenadu.net/special-pages/ruchulu/article-images/mutton-masala-100.jpg",title:"హైదరాబాదీ మటన్‌ మసాలా"},{img:"http://www.eenadu.net/special-pages/ruchulu/article-images/prawns-curry-100.jpg",title:"రొయ్యల కూర"},{img:"http://www.eenadu.net/special-pages/ruchulu/article-images/chicken-tikka-100.jpg",title:"చికెన్‌ టిక్కా మసాలా"},{img:"http://www.eenadu.net/special-pages/ruchulu/article-images/kandari-mutton-100.jpg",title:" కాందారీ మటన్‌"},{img:"http://www.eenadu.net/special-pages/ruchulu/article-images/Mutton-Biryani-100.jpg",title:" మటన్‌ బిర్యానీ"},{img:"http://www.eenadu.net/special-pages/ruchulu/article-images/Mutton-kunna-100.jpg",title:" మటన్‌ కున్నా"},{img:"http://www.eenadu.net/special-pages/ruchulu/article-images/chiken-ghee-rost-100.jpg",title:" చికెన్‌ ఘీ రోస్ట్‌"},{img:"http://www.eenadu.net/special-pages/ruchulu/article-images/ctr-chukka-mamsam-100.jpg",title:"చిత్తూరు సుక్క మాంసం "},{img:"http://www.eenadu.net/special-pages/ruchulu/article-images/natukodi-curry-100.jpg",title:" నాటుకోడి కూర "},{img:"http://www.eenadu.net/special-pages/ruchulu/article-images/chennur-hen-pulav-100.jpg",title:" చెన్నూర్‌ కోడి పులావ్‌"},{img:"http://www.eenadu.net/special-pages/ruchulu/article-images/nizami-ka-ghosh-100.jpg",title:"నిజామీ ఘోష్‌"},{img:"http://www.eenadu.net/special-pages/ruchulu/article-images/dum-ka-murgh-100.jpg",title:" దమ్‌ కా చికెన్‌"},{img:"http://www.eenadu.net/special-pages/ruchulu/article-images/mutton-haleem-100.jpg",title:" మటన్‌ హలీమ్‌ "},{img:"http://www.eenadu.net/special-pages/ruchulu/article-images/murg-biryani-100.jpg",title:"దమ్‌ముర్గ్‌కి బిర్యానీ "},{img:"http://www.eenadu.net/special-pages/ruchulu/article-images/royya-mamidi-100.jpg",title:"రొయ్య మామిడి"},{img:"http://www.eenadu.net/special-pages/ruchulu/article-images/royya-miryala-100.jpg",title:" రొయ్య మిరియాల కూర"},{img:"http://www.eenadu.net/special-pages/ruchulu/article-images/munakkaya-mamsam-100.jpg",title:"మునక్కాయ మాంసం"},{img:"http://www.eenadu.net/special-pages/ruchulu/article-images/kobbaripala-chiken-100.jpg",title:" కొబ్బరిపాలూ చికెన్‌"},{img:"http://www.eenadu.net/special-pages/ruchulu/article-images/kabab-masala-100.jpg",title:"సీక్‌ కబాబ్‌ మసాలా"},{img:"http://www.eenadu.net/special-pages/ruchulu/article-images/keema-kolhapuri-100.jpg",title:" కీమా కొల్హాపురి"},{img:"http://www.eenadu.net/special-pages/ruchulu/article-images/kari-milago-100.jpg",title:"కరి మిళగు"},{img:"http://www.eenadu.net/special-pages/ruchulu/article-images/damka-nalli-100.jpg",title:"దమ్‌ కా నల్లి"},{img:"http://www.eenadu.net/special-pages/ruchulu/article-images/indo-chinees-100.jpg",title:"ఇండో-చైనీస్‌ డ్రై చిల్లీ చికెన్‌ "},{img:"http://www.eenadu.net/special-pages/ruchulu/article-images/dsky-chk-cur-100.jpg",title:"దోసకాయ చికెన్‌ కర్రీ "},{img:"http://www.eenadu.net/special-pages/ruchulu/article-images/pachimirchi-kodi-100.jpg",title:"పచ్చిమిర్చి-కోడి కూర "},{img:"http://www.eenadu.net/special-pages/ruchulu/article-images/dosakaya-chiken-100.jpg",title:"దోసకాయ చికెన్‌  "},{img:"http://www.eenadu.net/special-pages/ruchulu/article-images/chkn-rost-pulav-100.jpg",title:" చికెన్‌ రోస్ట్‌ పలావ్‌ "},{img:"http://www.eenadu.net/special-pages/ruchulu/article-images/mexican-star-chikn-100.jpg",title:" మెక్సికన్‌ స్టార్‌ చికెన్‌ "},{img:"http://www.eenadu.net/special-pages/ruchulu/article-images/chettinad-era-100.jpg",title:"రొయ్య‌ల‌తో చెట్టినాడ్‌ ఎరా"},{img:"http://www.eenadu.net/special-pages/ruchulu/article-images/panjabi-cbm-100.jpg",title:"పంజాబీ చికెన్‌ బటర్‌ మసాలా"},{img:"http://www.eenadu.net/special-pages/ruchulu/article-images/palak-chicken-100.jpg",title:"పాలక్‌ చికెన్‌"},{img:"http://www.eenadu.net/special-pages/ruchulu/article-images/spicy-chicken-curry-100.jpg",title:"స్పైసీ చికెన్‌ కర్రీ "},{img:"http://www.eenadu.net/special-pages/ruchulu/article-images/marag-100.jpg",title:"మరగ్‌"},{img:"http://www.eenadu.net/special-pages/ruchulu/article-images/nihari-100.jpg",title:"మటన్‌ నిహారి"},{img:"http://www.eenadu.net/special-pages/ruchulu/article-images/dhalghost-100.jpg",title:"మటన్‌ దాల్‌ ఘోస్ట్‌"},{img:"http://www.eenadu.net/special-pages/ruchulu/article-images/kashmiri-biryani-100.jpg",title:"మటన్‌తో కాశ్మీరీ బిర్యానీ"},{img:"http://www.eenadu.net/special-pages/ruchulu/article-images/mutton-vepudu-100.jpg",title:"మటన్‌ వేపుడు"},{img:"http://www.eenadu.net/special-pages/ruchulu/article-images/Prawns-100.jpg",title:"ప్రాన్స్‌ సాంబార్‌ మసాలా"},{img:"http://www.eenadu.net/special-pages/ruchulu/article-images/frons-kichidi-100.jpg",title:"రొయ్యల కిచిడీ"},{img:"http://www.eenadu.net/special-pages/ruchulu/article-images/parshi-rost-mutton-100.jpg",title:"మటన్‌ రోస్ట్‌"},{img:"http://www.eenadu.net/special-pages/ruchulu/article-images/roti-pe-boti-100.jpg",title:"బొప్పాయి ముద్ద‌తో మ‌ట‌న్ క‌ర్రీ"},{img:"http://www.eenadu.net/special-pages/ruchulu/article-images/kokum-curry-100.jpg",title:"కోకమ్‌ కర్రీ"},{img:"http://www.eenadu.net/special-pages/ruchulu/article-images/pathrani-machi-100.jpg",title:"పత్రాని మచ్చీ"},{img:"http://www.eenadu.net/special-pages/ruchulu/article-images/mahi-kalia-100.jpg",title:"మహి ఖలియా"},{img:"http://www.eenadu.net/special-pages/ruchulu/article-images/malabar-mutton-curry-100.jpg",title:"మలబార్‌ మటన్‌ కర్రీ"},{img:"http://www.eenadu.net/special-pages/ruchulu/article-images/erachi-pidi-100.jpg",title:"ఎరాచీ పిడి"},{img:"http://www.eenadu.net/special-pages/ruchulu/article-images/thoran-100.jpg",title:"థోరన్‌"},{img:"http://www.eenadu.net/special-pages/ruchulu/../../special-pages/ruchulu/article-images/maalpuva-100.jpg",title:""},{img:"http://www.eenadu.net/special-pages/ruchulu/../../special-pages/ruchulu/article-images/rabdi-100.jpg",title:""}]}},methods:{handleScroll:function(){this.scrolled=arguments[0].target.scrollTop>100},showDetail:function(t){this.selectedItem=t,this.isDetail=!0,history.pushState(null,null,"#detail"),this.state="#detail",this.backTitle=""},showLyric:function(t){this.isLyric=!0,this.selectedSong=t,this.state="#lyric",history.pushState(null,null,"#lyric"),this.backTitle=this.selectedItem.title},changePage:function(){this.state=location.hash},back:function(){history.go(-1)}},created:function(){var t=this;setTimeout(function(){document.getElementsByTagName("MAIN")[0].addEventListener("scroll",t.handleScroll)},100),window.onhashchange=this.changePage},mounted:function(){}},$={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[""==t.state?a("div",{class:{header:!0,scrolled:t.scrolled,flex:!0,red:!0}},[t._v("తెలుగు")]):a("div",{class:{header:!0,scrolled:t.scrolled,flex:!0,red:!0}},[a("i",{staticClass:"material-icons",on:{click:t.back}},[t._v("arrow_back")]),a("span",{staticClass:"back"},[t._v(t._s(t.backTitle))])]),t._v(" "),a("main",[""==t.state?a("div",[a("div",{staticClass:"card"},[a("div",{staticClass:"h2"},[t._v("నచ్చిన పాటలు")]),t._v(" "),a("swiper",{ref:"mySwiper",attrs:{options:t.swiperOption}},t._l(t.temp,function(e){return a("swiper-slide",{key:e.title},[a("img",{attrs:{src:e.img},on:{click:function(a){t.showDetail(e)}}}),a("div",[t._v(t._s(e.title))]),a("span",[t._v(t._s(e.sub))])])}))],1),t._v(" "),a("div",{staticClass:"break"},[t._v(" ")]),t._v(" "),a("div",{staticClass:"card "},[a("div",{staticClass:"h4 pt16 green"},[t._v("కొత్త పాటలు")]),t._v(" "),a("div",{staticClass:"h2"},[t._v("ఈవారం టాప్ 10")]),t._v(" "),a("swiper",{ref:"mySwiper",attrs:{options:t.swiperOption}},t._l(t.temp1,function(e){return a("swiper-slide",{key:e.title},[a("img",{attrs:{src:e.img},on:{click:function(a){t.showDetail(e)}}}),a("div",[t._v(t._s(e.title))]),a("span",[t._v(t._s(e.sub))])])}))],1),t._v(" "),a("div",{staticClass:"break"},[t._v(" ")]),t._v(" "),a("div",{staticClass:"card"},[a("div",{staticClass:"h2"},[t._v("వంటలు")]),t._v(" "),a("swiper",{ref:"mySwiper",attrs:{options:t.swiperOption}},t._l(t.recipes,function(e){return a("swiper-slide",{key:e.title},[a("img",{attrs:{src:e.img},on:{click:function(a){t.showDetail(e)}}}),a("div",[t._v(t._s(e.title))]),a("span",[t._v(t._s(e.sub))])])}))],1)]):t._e(),t._v(" "),a("transition",{attrs:{name:"slide-fade"}},["#lyric"==t.state?a("div",{staticClass:"lyric p16",domProps:{innerHTML:t._s(t.selectedSong.lyric)}}):t._e()]),t._v(" "),a("transition",{attrs:{name:"slide-fade"}},["#detail"==t.state?a("div",{staticClass:"p16"},[a("div",{staticClass:"flex"},[a("div",[a("img",{attrs:{src:t.selectedItem.img}})]),a("div",{staticClass:"pl16"},[t._v(t._s(t.selectedItem.title))])]),t._v(" "),a("div",[a("div",{staticClass:"h2"},[t._v("పాటలు")]),t._v(" "),t._l(t.selectedItem.songs,function(e){return a("div",{staticClass:"li",on:{click:function(a){t.showLyric(e)}}},[t._v(t._s(e.title))])}),t._v(" "),a("div",{staticClass:"break"},[t._v(" ")])],2)]):t._e()])],1)])},staticRenderFns:[]};var V=a("VU/8")(H,$,!1,function(t){a("PA9P")},"data-v-532eedde",null).exports,F=a("7QTg"),R=a.n(F);a("v2ns");i.a.use(r.a),i.a.use(R.a);var I=new r.a({mode:"history",routes:function(){switch(location.hostname){case"diy3dprint.com":return[{path:"/",component:T}];case"thejavascript.com":return[{path:"/",component:O}];case"pkged.com":return[{path:"/",component:_},{path:"/other",component:k},{path:"/template",component:V},{path:"/cartoons",component:P},{path:"/template",component:V}];default:return[{path:"/",component:V}]}}()}),U=a("mtWM"),z=a.n(U),K=function(t,e,a){var i=new Date,n={};"/utility/language"!=t&&(t.indexOf("?")>0?t+="&_nocache="+i.toISOString():t+="?_nocache="+i.toISOString(),n={"Cache-Control":"no-cache, no-store",Pragma:"no-cache, no-store"}),z.a.get(t,n).then(e).catch(function(t){a&&a(t.response.data)})},B=a("reQO");i.a.use(g.a);var W=new g.a.Store({mutations:o()({},B.firebaseMutations,{setData:function(t,e){t.data[e.key]=e.value},setJSON:function(t,e){t.data.json[e.key]=e.value}}),state:{data:{name:"Text",json:{},places:[],kathalu:[],katha:{},lyrics:[],lyric:{}},website:location.hostname,category:""},actions:{setData:Object(B.firebaseAction)(function(t,e){(0,t.bindFirebaseRef)("data",e.ref)}),load:function(t,e){var a=t.commit;K("https://api.dpkpnm.com/json.php?"+e.url,function(t){a("setJSON",{key:e.key,value:t.data})})},loadPlaces:function(t){var e=t.commit;K("https://api.dpkpnm.com/json.php?h=places",function(t){e("setData",{key:"places",value:t.data})})},loadKathalu:function(t){var e=t.commit;K("https://api.dpkpnm.com/json.php?h=kathalu&col=title,id",function(t){e("setData",{key:"kathalu",value:t.data})})},loadKatha:function(t,e){var a=t.commit;K("https://api.dpkpnm.com/json.php?h=kathalu&id="+e,function(t){a("setData",{key:"katha",value:t.data[0]})})},loadLyric:function(t,e){var a=t.commit;e?K("https://api.dpkpnm.com/json.php?h=lyrics&id="+e,function(t){a("setData",{key:"lyric",value:t.data[0]})}):K("https://api.dpkpnm.com/json.php?h=lyrics&col=title,id",function(t){a("setData",{key:"lyrics",value:t.data})})}},getters:{data:function(t){return t.data},json:function(t){return t.data.json},places:function(t){return t.data.places},kathalu:function(t){return t.data.kathalu},category:function(t){return t.data.category},katha:function(t){return t.data.katha},lyrics:function(t){return t.data.lyrics},lyric:function(t){return t.data.lyric}}}),X=a("nBxG"),Y=a.n(X);i.a.config.productionTip=!1,i.a.use(R.a),i.a.use(Y.a),new i.a({el:"#app",router:I,store:W,template:"<App/>",components:{App:s}})},PA9P:function(t,e){},dY3B:function(t,e){},kD96:function(t,e){},rQlX:function(t,e){},v2ns:function(t,e){},"y+gp":function(t,e){}},["NHnr"]);