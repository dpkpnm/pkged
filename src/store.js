import Vue from 'vue'
import Vuex from 'vuex'
import {firebaseMutations} from 'vuexfire'
import {firebaseAction} from 'vuexfire'

Vue.use(Vuex);

export const store = new Vuex.Store({
	mutations: {...firebaseMutations},

	state: {
		data: {
			name:"Text"
		},
		website:location.hostname,
		category:""
		
	},
	
	actions: {
		setData: firebaseAction(({bindFirebaseRef},obj) => {
			bindFirebaseRef("data",obj.ref);
		})
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
