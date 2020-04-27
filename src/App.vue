<template lang="html">
  <div>

    <film-list :filmData="filmData"></film-list>

    <film-detail v-if="selectedFilm" :selectedFilm="selectedFilm"></film-detail>

  </div>
</template>

<script>
import FilmList from "./components/FilmList.vue"
import FilmDetail from "./components/FilmDetail.vue"
import {eventBus} from "./main.js"


export default {
  name: 'app',
  data(){
    return {
      filmData: null,
      selectedFilm: null,
    }
  },
  mounted(){

    fetch('https://swapi.dev/api/films/')
    .then(res => res.json())
    .then(data => {this.filmData = data.results})

    eventBus.$on('film-selected', (filmSelect) =>{
      this.selectedFilm = filmSelect
    })

  },
  components: {
    'film-list': FilmList,
    'film-detail': FilmDetail,
  }
}
</script>

<style lang="css" scoped>
</style>
