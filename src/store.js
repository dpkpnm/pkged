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
			state.data[obj.key]=obj.value;
		}
	},

	state: {
		data: {
			name:"Text",
			places:[],
			kathalu:[],
			katha:{}
		},
		website:location.hostname,
		category:""
		
	},
	
	actions: {
		setData: firebaseAction(({bindFirebaseRef},obj) => {
			bindFirebaseRef("data",obj.ref);
		}),
		loadPlaces: function({commit}) {
			utils.get("https://api.dpkpnm.com/json.php?h=places", function(response) {
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
		}
	},
	getters: {
		data: function(state) {
			return state.data;
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
		}

	}

})
