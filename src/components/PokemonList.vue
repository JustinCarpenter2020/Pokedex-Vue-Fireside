<template>
  <div class="card mt-3 mb-3">
    <img class="card-img-top" src="holder.js/100x180/" alt="">
    <div class="card-body">
      <h4 class="card-title text-white mb-3">
        {{ pokeProp.name }}
      </h4>
      <div class="icon" @click="getActive(pokeProp.name)">
        <span class="iconify material-icons md-36" data-icon="mdi-pokeball" data-inline="false"></span>
      </div>
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
.card {
   width: 100%;
   max-width: 300px;
   min-width: 200px;
   height: 200px;
   background-color: #292929;
   margin: 10px;
   border-radius: 10px;
   box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.24);
   border: 2px solid rgba(7, 7, 7, 0.12);
   font-size: 16px;
   transition: all 0.3s ease;
   position: relative;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   cursor: pointer;
   transition: all 0.3s ease;
}

.icon {
   margin: 0 auto;
   width: 100%;
   height: 80px;
   max-width:80px;
   background: linear-gradient(90deg, #FF7E7E 0%, #FF4848 40%, rgba(0, 0, 0, 0.28) 60%);
   border-radius: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   color: white;
   transition: all 0.8s ease;
   background-position: 0px;
   background-size: 200px;
}

.material-icons.md-18 { font-size: 18px; }
.material-icons.md-24 { font-size: 24px; }
.material-icons.md-36 { font-size: 36px; }
.material-icons.md-48 { font-size: 48px; }

.card .title {
   width: 100%;
   margin: 0;
   text-align: center;
   margin-top: 30px;
   color: white;
   font-weight: 600;
   text-transform: uppercase;
   letter-spacing: 4px;
}

.card:hover {
   height: 210px;
}

.card:hover .info {
   height: 90%;
}

.card:hover .text {
   transition: all 0.3s ease;
   opacity: 1;
   max-height:40px;
}

.card:hover .icon {
   background-position: -120px;
   transition: all 0.3s ease;
}

.card:hover .icon i {
   background: linear-gradient(90deg, #FF7E7E, #FF4848);
  //  -webkit-background-clip: text;
  // -webkit-text-fill-color: transparent;
   opacity: 1;
   transition: all 0.3s ease;
}
</style>
