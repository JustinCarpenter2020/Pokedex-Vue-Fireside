<template>
  <div class="container-fluid">
    <!-- //NOTE added this row to display the button for searching for a pokemon -->
    <div class="row mt-3 text-center">
      <div class="col-12">
        <button @click="search" class="btn btn-info">
          Search For Pokemon!
        </button>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-3">
        <PokemonList v-for="pokemon in state.pokemons" :key="pokemon.name" :poke-prop="pokemon" />
      </div>
      <div class="col-6 mt-4 text-center" v-if="state.activePokemon">
        <ActivePokemon :poke-prop="state.activePokemon" />
      </div>
      <div class="col-3" v-if="state.myPokemon">
        <PokemonList v-for="pokemon in state.myPokemon" :key="pokemon.name" :poke-prop="pokemon" />
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, computed, reactive } from 'vue'
import { pokemonService } from '../services/PokemonService'
import { AppState } from '../AppState'
import Notification from '../utils/Notification'

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
    return {
      state,
      search() {
        Notification.search()
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
