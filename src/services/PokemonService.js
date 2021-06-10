import { AppState } from '../AppState'
import { api } from './AxiosService'
import Pokemon from '../models/Pokemon'

class PokemonService {
  async getPokemon() {
    const res = await api.get()
    AppState.pokemon = res.data.results
  }

  async activePokemon(name) {
    const res = await api.get('/' + name)
    AppState.activePokemon = new Pokemon(res.data)
  }

  catchPokemon(name) {
    // NOTE this is where you call to your server/api
    AppState.myPokemon.push(AppState.activePokemon)
    console.log(AppState.myPokemon)
  }

  Eliminate(name) {
    // NOTE this is where you call to your server/api
    AppState.myPokemon = AppState.myPokemon.filter(p => p.name !== name)
  }
}

export const pokemonService = new PokemonService()
