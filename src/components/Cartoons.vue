<template>
  <div class="scroll">
    <img v-for="card in cards" :src="card.url" />
  </div>
</template>

<script>
import {db} from '../firebaseconfig';
import { mapGetters,mapMutations } from 'vuex';
import _ from 'lodash';

export default {
  name: 'Cartoons',
  data: function() {
    return {
      currentcard:1,

    }
  },
  computed: {
    ...mapGetters(['data']),
    cardMap: function() {
      return _(this.data).keys().reverse().value();
    },
    cards: function() {
      return this.data;
    }
  },
  
  methods: {
    action: function(actiontype) {
      debugger;
      var card = this.cards[this.cardMap[this.currentcard]];
      if(this.currentcard<0 || !card)
        return;
      if(actiontype=='clear')
        card.clear=true;
      if(actiontype=='favorite')
        card.favorite=true;
      this.currentcard++;
    }
  },
  created() {
    this.$store.dispatch("setData",db.ref("cartoons"));
    // this.currentcard=this.cards.length-1;
  }
}
</script>
<style>
  .scroll {height:100vh; overflow: auto;}
</style>


