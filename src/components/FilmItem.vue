<template lang="html">
  <li v-on:click="emitFilm">{{film.title}}</li>
</template>

<script>
import {eventBus} from "../main.js"


export default {
  name: 'film-item',
  props: ['film'],
  methods: {
    emitFilm: function(){
      eventBus.$emit('film-selected', this.film)
    }
  }
}
</script>

<style lang="css" scoped>
li {
  list-style: none;
  color: darkslategrey;
  line-height: 1.4;
  font-size: 1.2em;
  width:100%;
  text-align: left;
}

</style>
