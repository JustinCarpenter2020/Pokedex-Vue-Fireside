export default class Pokemon {
  constructor(data) {
    this.name = data.name
    this.picture = data.sprites.front_shiny
    this.height = data.height
    this.types = data.types[0]
  }
}
