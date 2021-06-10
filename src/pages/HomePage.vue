<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-4">
        <PokemonList v-for="pokemon in state.pokemons" :key="pokemon.name" :poke-prop="pokemon" />
      </div>
      <div class="col-4 mt-4 text-center" v-if="state.activePokemon">
        <ActivePokemon :poke-prop="state.activePokemon" />
      </div>
      <div class="col-4" v-if="state.myPokemon">
        <PokemonList v-for="pokemon in state.myPokemon" :key="pokemon.name" :poke-prop="pokemon" />
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, computed, reactive } from 'vue'
import { pokemonService } from '../services/PokemonService'
import { AppState } from '../AppState'
export default {
  name: 'Home',
  setup() {
    const state = reactive({
      pokemons: computed(() => AppState.Pokemon),
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
