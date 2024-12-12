<template>
    <div>
      <div class="global">
        <main class="carousel-container">
          <!-- Carrossel -->
          <div class="carousel">
            <div
              v-for="(item, index) in items"
              :key="index"
              :class="['item', { active: currentIndex === index }]"
            >
              <img :src="item.image" :alt="item.caption" />
            
            </div>
          </div>
      
          <!-- Botões de Navegação -->
          <button class="btn prev" @click="prevItem"><i class="fa-solid fa-angles-left"></i></button>
          <button class="btn next" @click="nextItem"><i class="fa-solid fa-angles-right"></i></button>
      
          <!-- Pontos de Navegação
          <div class="dots">
            <span
              v-for="(_, index) in items"
              :key="index"
              :class="['dot', { active: currentIndex === index }]"
              @click="goToItem(index)"
            ></span>
          </div> -->
        </main>
        <div class="forms">
          <div class="form">
            <h1>Sitio Alameda</h1>
            <h3> <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i> 5.0 <span>Excelente</span></h3>
            <h3><i class="fa-solid fa-location-dot"></i> <a href="">Piracicaba SP</a></h3>
            <div class="colums">
            <div class="colum">
  
            </div>
            <div class="colum">
              <h3><i class="fa-solid fa-coins"></i> Preço</h3>
              <h4>Aluguel desde R$ 415,00 </h4>
            </div>
            <div class="colum">
              <h3><i class="fa-solid fa-calendar-days"></i> Horário</h3>
              <h4>Segunda à Sábado 7:00hrs às 23hrs</h4>
            </div>
            <div class="colum">
              <h3><i class="fa-solid fa-square-check"></i> Atendimentos</h3>
              <h4>20 a <span>140</span> convidados</h4>
            </div>
  
          </div>
          
          <button class="btn-default">Adicionar ao Pacote</button>
          </div>
        </div>
  
  
      </div>
      <div class="content">
        <div class="conteiner-cont">
          <div class="cont-p">
            <i class="fa-solid fa-signs-post"></i>
            <p>Sitio</p>
          </div>
          <div class="cont-p">
            <i class="fa-solid fa-bed"></i>
            <p>Hospedagem disponivel</p>
          </div>
          <div class="cont-p">
            <i class="fa-regular fa-calendar-check"></i>
            <p>1 evento por dia</p>
          </div>
        </div>
        <div class="informacao">
          <div class="info">
            
            <p>O Sítio Alameda, em São Paulo, é um local encantador para casamentos ao ar livre. Com vastas áreas de jardins floridos, campos verdes e árvores frondosas, oferece um cenário bucólico e romântico, perfeito para uma cerimônia intimista. </p>
            
                <h2>Espaços e Estruturas para Eventos</h2>
          <p>
            O Sítio Alameda oferece uma estrutura completa para a realização de casamentos. Além do espaço aberto para cerimônias, o local conta com um salão elegante e sofisticado para a recepção, adaptável a diferentes estilos de decoração. </p>
  
                <h2>Experiência Única para Convidados</h2>
          <p>
            Casar no Sítio Alameda não é apenas uma experiência única para os noivos, mas também para os convidados. O ambiente campestre oferece diversas atividades recreativas, como passeios a cavalo, caminhadas ao ar livre e relaxamento nas áreas verdes. </p>
          </div>
        </div>
      </div>
      
    </div>
    </template>    
    <script>
    export default {
      name: 'alameda',
      data() {
        return {
          currentIndex: 0, // Índice do slide atual
          items: [
            {
              image: "img/Bora-Bora2.jpg",            
            },
            {
              image: "img/Bora-Bora3.jpg",            
            },
            {
              image: "img/Bora-Bora4.jpg",
            },
          ],
        };
      },
      methods: {
        // Mostra um item específico
        showItem(index) {
          this.currentIndex = index;
        },
        // Vai para o slide anterior
        prevItem() {
          this.currentIndex =
            (this.currentIndex - 1 + this.items.length) % this.items.length;
        },
        // Vai para o próximo slide
        nextItem() {
          this.currentIndex = (this.currentIndex + 1) % this.items.length;
        },
        // Navega diretamente para um slide clicado
        goToItem(index) {
          this.showItem(index);
        },
      },
    };
    </script>
    
<style scoped>
  
  .informacao{
    padding: 40px;
    width: 100%;
    height: auto;
    justify-content: center;
    display: flex;
  }
  .info{
    width: 1400px;
    height: auto;
  }
  .info h2{
    font-weight: 400;
    text-transform: uppercase;
    font-size: 1.4rem;
    text-shadow: 1px 1px 1px #aaaaaa69;
  }
  
  .info p{
    margin: 30px 0px  ;
    padding-right: 120px;
    font-size: 1.2rem;
    color: #242421d5;
  }
  .conteiner-cont{
    display: flex;
    margin-left: 1.5%;
  }
  
  .cont-p{
    margin: 20px;
    border-right:1px solid #41404067 ;
    padding-right:  30px;
    padding-bottom:10px ;
  }
  
  .cont-p p{
    font-size: 1.3rem;
    color: #1b1b1bb6;
    margin-top: 15px;
  }
  
  .cont-p i{
    font-size: 1.4rem;
    color: #C84648;
    margin-left: 15px;
  }
  
  
  .feedback{
      max-width: 100%;
      height: auto;
      justify-content: center;
      display: flex;
  }
  
  .card{
      background-color: rgb(253, 253, 253);
      width: 310px;
      height: 420px;
      margin: 30px;
      overflow: hidden;
      border-radius: 10px;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
  
  .card:hover{
    
    box-shadow: rgba(0, 0, 0, 0.24) 3px 7px 10px;
  }
  
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
  
  .sub{
    display: flex;
  }
  
  .sub p{
    margin-top: 10%;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif ;
    font-weight: 400;
  }
  
  .rodape h3{
    margin-left: 10px;
    font-weight: 400
  }
  
  .rodape h2{
    text-align: center;
  }
  
  .rodape p {
    
    padding: 15px;
  }
  .card img{
    border-radius: 55px;
    border: 1px solid #1d1d1d;
    margin: 8px;
  }
  
  .fa-star {
    color: #e2b212;
  }
  .global{
    display: flex;
  }
  
  .forms{
    width: 27%;
    height: 470px;
    margin-right: 60px;
    border-radius: 20px;
    padding: 18px;  
  }
  
  .form h1{
    font-size: 28px;
    text-align: center;
    text-transform: uppercase;
    font-weight: 400;
    text-shadow: 1px -2px 3px #aaaaaa69
  }
  
  .form h3{
    margin-top: 10px;
  }
  
  .form h3 span{
    color:#C84648;
    font-weight: 500;
  }
  
  .form button{
    margin-left: 25%;
    margin-top: 10%;
  }
  .form h3 a{
    text-decoration: none;
    color: #000;
  }
  
  .form h3 a:hover{
    text-decoration: underline;
    color:#C84648;
    font-weight: 400;
  }
  
  .fa-location-dot{
    color: #C84648;
  }
  
  .colums i{
    color: #C84648;
  }
  
  .colum{
    background-color: #ffffff;
    border-radius:14px ;  
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  
  }
  
  .colum h3, .colum h4{
    margin-left: 16px;
  }
  
  .colum h3{
    margin-top: 17px;
  }
    .carousel-container {
      width: 57%;
      margin: auto;
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 16px;
      margin-left: 40px;
    }
    
    .carousel {
      aspect-ratio: 16 / 9;
      width: 100%;
      position: relative;
      overflow: hidden;
    }
    
    .item {
      opacity: 0;
      width: 100%;
      height: 100%;
      display: none;
      transition: opacity 0.5s ease-in-out;
    }
    
    .item.active {
      opacity: 1;
      display: block;
    }
    
    .item img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;    
      border-radius: 20px;
      
    }
    
   
    
    .btn {
      padding: 1em 2em;
      position: absolute;
      transform: translateY(-50%);
      top: 53%;
      outline: none;
      border: none;
      cursor: pointer;
      text-transform: uppercase;
      font-size: 1.6rem;
      font-weight: 900;
      color: #ffffff;
      background-color: transparent;
      transition: transform 0.2s ease-in-out;
    }
    
    .btn:active,
    .btn:focus {
      transform: translateY(-50%) scale(0.9);
    }
    
    .btn:hover {
      transform: translateY(-50%) scale(0.96);
    }
    
    .prev {
      left: -5%;
    }
    
    .next {
      right: -5%;
    }
    
    .dots {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
    }
    
    .dot {
      cursor: pointer;
      height: 10px;
      width: 10px;
      background-color: #242421;
      border-radius: 50%;
      transition: background-color 0.2s ease;
    }
    
    .dot.active,
    .dot:hover {
      background-color: #C84648;
    }
    </style>
    