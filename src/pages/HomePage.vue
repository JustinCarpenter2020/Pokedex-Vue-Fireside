<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-3">
        <PokemonList v-for="p in state.pokemon" :key="p.name" :poke-prop="p" />
      </div>
      <div v-if="state.activePokemon" class="col-6 text-center">
        <ActivePokemon :poke-prop="state.activePokemon" />
      </div>
      <div class="col-3">
        <PokemonList v-for="p in state.myPokemon" :key="p.name" :poke-prop="p" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { pokemonService } from '../services/PokemonService'
import { AppState } from '../AppState'
export default {
  name: 'Home',
  setup() {
    const state = reactive({
      pokemon: computed(() => AppState.pokemon),
      activePokemon: computed(() => AppState.activePokemon),
      myPokemon: computed(() => AppState.myPokemon)
    })
    onMounted(() => {
      pokemonService.getPokemon()
    })
    return { state }
  }
}
</script>

<style lang="scss" scoped>

</style>
