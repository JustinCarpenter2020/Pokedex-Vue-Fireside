<template>
  <div>
    <img :src="pokeProp.picture" alt="">
    <h1>{{ pokeProp.name }}</h1>
    <button v-if="!state.currentPokemon" @click="catchPokemon" class="btn btn-info">
      Catch them bois
    </button>
    <button v-else @click="Eliminate" class="btn btn-danger">
      Release my man
    </button>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { pokemonService } from '../services/PokemonService'
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
import Notification from '../utils/Notification'
export default {
  props: { pokeProp: { type: Object, required: true } },
  setup(props) {
    const state = reactive({
      currentPokemon: computed(() => AppState.myPokemon.find(p => p.name === props.pokeProp.name))
    })
    return {
      state,
      catchPokemon() {
        pokemonService.catchPokemon(props.pokeProp.name)
        Notification.toast('Caught', 'success')
      },
      async Eliminate() {
        if (await Notification.confirmAction('Are you sure you want to do this, cmon its ' + props.pokeProp.name)) { pokemonService.Eliminate(props.pokeProp.name) }
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
