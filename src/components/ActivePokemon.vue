<template>
  <div class="ActivePokemon">
    <img :src="pokeProp.picture" alt="">
    <h1>{{ pokeProp.name }}</h1>
    <span v-if="pokeProp.types.type">
      <h3>type:  {{ pokeProp.types.type.name }}</h3>
    </span>
    <div v-if="state.myPokemon">
      <button v-if="!state.currentPokemon" class="btn btn-info" @click="catchPokemon(pokeProp.name)">
        Catch them bois
      </button>
      <button class="btn btn-danger" v-else @click="removePokemon(pokeProp.name)">
        Get rid of him
      </button>
    </div>
  </div>
</template>

<script>
import { reactive, computed } from 'vue'
import { pokemonService } from '../services/PokemonService'
import { AppState } from '../AppState'
import Notification from '../utils/Notification'
export default {
  props: { pokeProp: { type: Object, required: true } },
  name: 'ActivePokemon',
  setup(props) {
    const state = reactive({
      myPokemon: computed(() => AppState.myPokemon),
      currentPokemon: computed(() => AppState.myPokemon.find(p => p.name === props.pokeProp.name))
    })
    return {
      state,
      catchPokemon(name) {
        pokemonService.catchPokemon(name)
      },
      async removePokemon(name) {
        if (await Notification.confirmAction('Are you sure you want to release' + name)) {
          pokemonService.removePokemon(name)
        }
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
