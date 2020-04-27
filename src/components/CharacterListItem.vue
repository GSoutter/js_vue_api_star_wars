<template lang="html">
  <tr>
   <td>{{character.name}}</td>
   <td>{{character.height | toMeters()}}</td>
   <td v-if="this.homeworld">{{this.homeworld.name}}</td>
   <td v-if="this.homeworld">{{this.homeworld.terrain}}</td>
  </tr>
</template>

<script>
export default {
  name: 'character-list-item',
  props: ['character'],
  data() {
    return {
      homeworld: null
    }
  },
  filters: {
    toMeters: function(value){
      let meters = (parseInt(value) / 100)
      return `${meters}m`
    }
  },
  methods: {
    getHomeworld: function (){
      fetch(this.character.homeworld)
      .then(res=> res.json())
      .then(data => this.homeworld = data)
    }
  },
  mounted() {
    this.getHomeworld()
  },
  watch: {
    homeworld: function() {
      this.getHomeworld()
    }
  }

}
</script>

<style lang="css" scoped>
</style>
