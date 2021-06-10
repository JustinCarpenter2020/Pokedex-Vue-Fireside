import { AppState } from '../AppState'
import Pokemon from '../models/Pokemon'
import Notification from '../utils/Notification'
import { api } from './AxiosService'

class PokemonService {
  async getPokemon() {
    const res = await api.get('')
    AppState.Pokemon = res.data.results
    console.log(res.data.results)
  }

  async getActive(name) {
    const res = await api.get('/' + name)
    AppState.activePokemon = new Pokemon(res.data)
    console.log(AppState.activePokemon)
  }

  catchPokemon(name) {
    const found = AppState.myPokemon.find(p => p.name === name)
    if (!found) {
      AppState.myPokemon.push(AppState.activePokemon)
      Notification.toast('caught em', 'success')
    } else {
      Notification.toast('already got one', 'error')
    }
  }

  removePokemon(name) {
    // API Request here to delete from backend
    AppState.myPokemon = AppState.myPokemon.filter(p => p.name !== name)
  }
}

export const pokemonService = new PokemonService()
