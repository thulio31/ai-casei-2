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

<style scoped>
.btn-default{
    background-color: #C84648;
    color: #FFFFFF;
    border: none;
    cursor: pointer;
    padding: 10px 12px;
    font-weight: bold;
    border-radius: 5px;
    margin-top: 10px;
}
</style>