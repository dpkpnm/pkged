import Vue from 'vue'
import Vuex from 'vuex'
import utils from './utils'
import {firebaseMutations} from 'vuexfire'
import {firebaseAction} from 'vuexfire'

Vue.use(Vuex);

export const store = new Vuex.Store({
	mutations: {
		...firebaseMutations,
		
		setData(state, obj) {
			debugger;
			state.data[obj.key]=obj.value;
		},
		setJSON(state, obj) {
			state.data[obj.key]=obj.value;
		}
	},

	state: {
		data: {
			name:"Text",
			json:{},
			places:[],
			kathalu:[],
			katha:{},
			lyrics:[],
			lyric:{},
			movies:[],
			song:{},
			songs:[],
			incredible:[]
		},
		website:location.hostname,
		category:""
		
	},
	
	actions: {
		setData: firebaseAction(({bindFirebaseRef},obj) => {
			bindFirebaseRef("data",obj.ref);
		}),
		load: function({commit},obj) {
			utils.get("https://api.dpkpnm.com/json.php?"+obj.url, function(response) {
				commit("setJSON",{"key":obj.key,"value":response.data});
			})
		},
		loadPlaces: function({commit}) {
			utils.get("https://api.dpkpnm.com/json.php?h=places&top=100", function(response) {
				commit("setData",{"key":"places","value":response.data});
			});
		},
		loadKathalu: function({commit}) {
			utils.get("https://api.dpkpnm.com/json.php?h=kathalu&col=title,id", function(response){
				commit("setData",{"key":"kathalu",value:response.data});
			})
		},
		loadKatha: function({commit},id) {
			utils.get("https://api.dpkpnm.com/json.php?h=kathalu&id="+id, function(response) {
				commit("setData",{key:"katha",value:response.data[0]});
			})
		},
		loadLyric: function({commit},id) {
			utils.get("https://api.dpkpnm.com/lyric.php", function(response){
				commit("setData",{"key":"lyric",value:response.data});
			})
		},
		loadMovies: function({commit},id) {
			utils.get("https://api.dpkpnm.com/json.php?h=movies", function(response) {
				commit("setData",{"key":"movies",value:response.data});
			})
		},
		saveLyric: function({commit},obj) {
			utils.get("https://api.dpkpnm.com/lyric.php?m="+obj.movie+"&l="+obj.lyric, function(response) {
				commit("setData",{"key":"lyric",value:response.data});
			})
		},
		loadSong: function({commit}) {
			utils.get("https://api.dpkpnm.com/z.php?f=api/album.json", function(response) {
				commit("setData",{"key":"song",value:response.data});
			})	
		},
		loadSongs: function({commit}) {
			utils.get("https://api.dpkpnm.com/lyric.php?all=1", function(response) {
				commit("setData",{"key":"songs",value:response.data});
			})	
		},
		loadIncredible: function({commit}) {
			utils.get("https://api.dpkpnm.com/z1.php?f=api/incredible.json", function(response) {
				debugger;
				commit("setData",{"key":"incredible",value:response.data.data});
			})		
		}
	},
	getters: {
		data: function(state) {
			return state.data;
		},
		json: function(state) {
			return state.data.json;
		},
		places: function(state) {
			return state.data.places;
		},
		kathalu: function(state) {
			return state.data.kathalu;
		},
		category: function(state) {
			return state.data.category;
		},
		katha: function(state) {
			return state.data.katha;
		},

		lyrics: function(state) {
			return state.data.lyrics;
		},
		
		lyric: function(state) {
			return state.data.lyric;
		},
		movies: function(state) {
			return state.data.movies;
		},
		song: function(state) {
			return state.data.song;
		},
		songs: function(state) {
			return state.data.songs;
		}

		
	}

})
