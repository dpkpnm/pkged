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
			places:[]
		},
		website:location.hostname,
		category:""
		
	},
	
	actions: {
		setData: firebaseAction(({bindFirebaseRef},obj) => {
			bindFirebaseRef("data",obj.ref);
		}),
		loadPlaces: function({commit}) {
			utils.get("http://api.dpkpnm.com/json.php?h=places", function(response) {
				commit("setData",{"key":"places","value":response.data});
			});
		}
	},
	getters: {
		data: function(state) {
			return state.data;
		},
		places: function(state) {
			return state.places;
		},
		category: function(state) {
			return state.category;
		}
	}

})
