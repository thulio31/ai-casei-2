<template>
    <div class="gallery">
            <div class="gallery-card">
                <div  id="card-1">
                <h2 class="gallery-card-title">Praia</h2>
                <a href="" class="gallery-card-btn">Mais Detalhes</a>
                </div>
            </div>

            <div class="gallery-card" id="card-2">
                <h2 class="gallery-card-title">Ouro Preto</h2>
                <a href="" class="gallery-card-btn">Mais Detalhes</a>
            </div>
    </div>
</template>
<script>
export default{
    name: 'CardEspacos'
}
</script>
<style scoped>
.gallery{

}
#card-1 {
  margin: 20px;
  background-image: url("../img/Casamento1.jpg");
  background-size: 600px 90% ;
  background-position: center;
  background-repeat: no-repeat;
  filter: grayscale(50%);
  transition: 0.6s;
  border-radius: 5px;
  height: 230px;
  background-color: blue;
}
.gallery #card-1:hover {
  background-size: 65%;
  filter: none;
  background-color: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) url("../img/Casamento1.jpg"));
}
#card-2 {
  margin: 20px;
  background-image: url("../img/lugar-4.jpg");
  background-size: 50%;
  background-position: center;
  background-repeat: no-repeat;
  filter: grayscale(50%);
  transition: 0.6s;
  border-radius: 200000px;
  height: 230px;
}
.gallery #card-2:hover {
  background-size: 45%;
  filter: none;
  background-color: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) url("../img/lugar-4.jpg"));
}
</style>