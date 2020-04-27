<template lang="html">
  <div>
    <h3>Episode {{selectedFilm.episode_id}}: {{selectedFilm.title}}</h3>
    <ul>
      <li>Release Date: {{selectedFilm.release_date | moment("MMM, YYYY")}}</li>
      <li>Director: {{selectedFilm.director}}</li>
    </ul>
    <h4>Characters</h4>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Height</th>
          <th>Homeworld</th>
          <th>Terrain</th>
        </tr>
      </thead>
      <tbody>
        <character-list-item v-if="characters" v-for="character in this.characters" :character="character"></character-list-item>
      </tbody>
    </table>

  </div>
</template>

<script>
import CharacterListItem from "./CharacterListItem.vue"

export default {
  name: 'film-detail',
  props: ['selectedFilm'],
  data() {
    return {
      characters: null,
    }
  },
  mounted() {
    this.getCharacters()
  },
  watch: {
    selectedFilm: function(){
      this.getCharacters()
    }
  },
  methods: {
    getCharacters: function (){
      const characterPromises = this.selectedFilm.characters.map((characterUrl) => {
        return fetch(characterUrl).then(res=>res.json())
      })
      Promise.all(characterPromises)
      .then(characters => this.characters = characters)
    }
  },
  components: {
    'character-list-item': CharacterListItem,
  },
  filters: {
    toMeters: function(value){
      let meters = (parseInt(value) / 100)
      return `${meters}m`
    }
  }
}
</script>

<style lang="css" scoped>

</style>

//When a film title is clicked the app should load the film
//details including title, episode number, release date and director.
