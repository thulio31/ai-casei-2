<template>
  <div>
    <banner />
    <Cards />   
    <Flag />

  </div>
</template>

<script>
import Apresentacao from '../components/Apresentacao.vue'
import Cards from '../components/Cards.vue'
import Flag from '../components/Flag.vue'
import Banner from '../components/Banner.vue'
import Carousel from '../components/Carousel.vue'
import Paises from '../components/Paises.vue'

export default{
  name: 'Home',
  components:{
    Cards,
    Flag,
    Banner,
    Carousel,
    Paises,
    Apresentacao
  }  
}
</script>