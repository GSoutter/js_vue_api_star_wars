<template lang="html">
  <div>
    <ul class="episode-list">
      <film-item v-for="film in filmData" :film="film"></film-item>
    </ul>
  </div>
</template>

<script>
import FilmItem from './FilmItem'

export default {
  name: 'film-list',
  props: ['filmData'],
  components: {
    'film-item': FilmItem
  }
}
</script>

<style lang="css" scoped>
.episode-list {
  width: 100%;
  text-align: center;
}
</style>
