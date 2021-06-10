<template>
  <div class="card mt-3 mb-3">
    <img class="card-img-top" src="holder.js/100x180/" alt="">
    <div class="card-body">
      <h4 class="card-title" @click="getActive(pokeProp.name)">
        {{ pokeProp.name }}
      </h4>
    </div>
  </div>
</template>

<script>
import { pokemonService } from '../services/PokemonService'
export default {
  name: 'PokemonList',
  props: { pokeProp: { type: Object, required: true } },
  setup() {
    return {
      async getActive(name) {
        await pokemonService.getActive(name)
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
