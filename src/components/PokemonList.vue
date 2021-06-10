<template>
  <div>
    <h1 @click="activePokemon(pokeProp.name)">
      {{ pokeProp.name }}
    </h1>
  </div>
</template>

<script>
import { pokemonService } from '../services/PokemonService'
export default {
  props: { pokeProp: { type: Object, required: true } },
  setup() {
    return {
      activePokemon(name) {
        pokemonService.activePokemon(name)
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
