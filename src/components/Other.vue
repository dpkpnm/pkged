<template>
  <div>
    <ul>
      <li v-for=""></li>
    </ul>
  </div>
</template>

<script>
import {db} from '../firebaseconfig';
import { mapGetters,mapMutations } from 'vuex';

export default {
  name: 'Other',
  
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
