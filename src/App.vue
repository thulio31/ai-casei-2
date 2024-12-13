<template>
  <div>
    <NavBar />
    <RouterView />
    <Footer />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';

export default{
  name: 'App', 
  components: {
    NavBar,
    Footer
  } 
}
</script>

<style >
.fa-star {
  color: #e2b212;
}
</style>