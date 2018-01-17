<template>
  <div class=dropbox>
  	<form enctype="multipart/form-data" v-if="!isUploading">
      <input type="file" multiple accept="image/*" class="input-file" @change="filesAdded($event.target.files);">
    </form>
    <div class=box v-if="isUploading">
    	{{cnFile+1}}/{{files.length}} - Uploading
    </div>
  </div>
</template>

<script>
import {dbRef,storage, db} from '../firebaseconfig';
import { mapGetters,mapMutations } from 'vuex';

export default {
  name: 'Pkged',
  
  data: function () {
    return {
    	otherdb:db.ref("other"),
    	cartoonsdb:db.ref("cartoons"), 
    	files:{},
    	cnFile:0,
    	isUploading:false
    }
  },
  computed: {
    ...mapGetters(['data']),
  },
  methods: {
  	upload: function(file) {
  		if(file == undefined){
  			this.isUploading=false;
  			return;
  		}
  		var name = file.name;
  		var that = this;
  		var dbref = this.otherdb;
  		
  		if(name!=undefined) {
	  		if(file.type == "image/png") {
	  			name="cartoons/"+file.lastModified+".png";
	  			dbref = this.cartoonsdb;
	  		}

				var fileupload = storage.ref(name).put(file);

				fileupload.on("state_changed",
					function() {},
					function error(a) {},
					function success() {
						dbref.push({url:fileupload.snapshot.downloadURL,name:name});
						that.cnFile++;
						that.upload(that.files[that.cnFile]);
					},
					
				);
			} 

  	},
  	filesAdded: function(files,input) {
  		this.isUploading=true;
  		this.cnFile = 0;
  		this.files = files;
  		this.upload(files[this.cnFile]);
  	}
  }
}
</script>

<style>
.input-file,form {
    opacity: 0;
    width: 100%;
    height: 100vh;
    position: absolute;
    cursor: pointer;
  }
  .box {width:400px; height: 200px;}
  .dropbox {
    min-height: 100vh;
    min-width:100vw;
    position: relative;
    cursor: pointer;
    display: flex;
    justify-content:center;
    align-items: center;
  }
</style>