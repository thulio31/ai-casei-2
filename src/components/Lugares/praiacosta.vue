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
            <h1>Praia da Costa</h1>
            <h3> <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i> 4.8 <span>Excelente</span></h3>
            <h3><i class="fa-solid fa-location-dot"></i> <a href="">Vila Velha ES</a></h3>
            <div class="colums">
            <div class="colum">
  
            </div>
            <div class="colum">
              <h3><i class="fa-solid fa-coins"></i> Preço</h3>
              <h4>Aluguel desde R$ 400,00 </h4>
            </div>
            <div class="colum">
              <h3><i class="fa-solid fa-calendar-days"></i> Horário</h3>
              <h4>Segunda à Sábado 7:00hrs às 23hrs</h4>
            </div>
            <div class="colum">
              <h3><i class="fa-solid fa-square-check"></i> Atendimentos</h3>
              <h4>10 a <span>200</span> convidados</h4>
            </div>
  
          </div>
          
          <button class="btn-default">Adicionar ao Pacote</button>
          </div>
        </div>
  
  
      </div>
      <div class="content">
        <div class="conteiner-cont">
          <div class="cont-p">
            <i class="fa-solid fa-umbrella-beach"></i>
            <p>Praia</p>
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
            
            <p>A Praia da Costa é um destino encantador para casamentos ao ar livre. Com suas areias douradas, o som das ondas ao fundo e o pôr do sol deslumbrante, ela oferece um cenário romântico e inesquecível para a troca de votos. É ideal tanto para cerimônias intimistas quanto para celebrações maiores.</p>
            
                <h2>Espaços e Estruturas para Eventos</h2>
          <p>
            A região da Praia da Costa conta com uma ampla variedade de opções para recepções de casamento, desde hotéis e restaurantes à beira-mar até espaços especializados em eventos. Muitos locais oferecem pacotes completos.</p>
  
                <h2>Experiência Única para Convidados</h2>
          <p>
            Casar na Praia da Costa é também uma forma de proporcionar uma experiência memorável aos convidados. Eles podem aproveitar a viagem para relaxar em um dos destinos mais belos do Espírito Santo, desfrutar da gastronomia local e participar de atividades recreativas na região, tornando o casamento um momento inesquecível para todos.</p>
          </div>
        </div>
      </div>
      <div class="feedback">
        <div class="card">
          <div class="sub">
          <img src="/public/img/p4.jpg" alt="" width="60px" height="60px">        
          <p>Enviada 12/12/24 11:29 hrs</p>
          </div>
          <div class="rodape">
            <h3><i class="fa-solid fa-star"></i> 4.9</h3>
            <h2>Tudo perfeito</h2>
            <p>A Praia da Costa foi o cenário perfeito para o nosso casamento! O pôr do sol é simplesmente mágico, e as fotos ficaram incríveis. Recomendo demais para quem quer algo romântico e inesquecível.</p>
          </div> 
        </div>  
        <div class="card">
          <div class="sub">
          <img src="/public/img/null.jpg" alt="" width="60px" height="60px">        
          <p>Enviada 17/10/24 14:50 hrs</p>
          </div>
          <div class="rodape">
            <h3><i class="fa-solid fa-star"></i> 4.8</h3>
            <h2>Parabens, muito bom</h2>
            <p>Se você sonha com um casamento à beira-mar, a Praia da Costa é perfeita! A vibe é maravilhosa, mas recomendo sempre ter um plano B para o clima. No meu caso, deu tudo certo, e foi um dia inesquecível.</p>
          </div> 
        </div>
        <div class="card">
          <div class="sub">
          <img src="/public/img/p6.jpg" alt="" width="60px" height="60px">        
          <p>Enviada 29/7/24 18:25 hrs</p>
          </div>
          <div class="rodape">
            <h3><i class="fa-solid fa-star"></i> 4.7</h3>
            <h2>Excelente lugar</h2>
            <p>Casei na Praia da Costa e amei a experiência! O lugar é lindo, super acessível para os convidados, e ainda conseguimos opções ótimas de fornecedores na região.</p>
          </div> 
        </div>    
      </div>
      
    </div>
    </template>    
    <script>
    export default {
      name: 'praiacosta',
      data() {
        return {
          currentIndex: 0, // Índice do slide atual
          items: [
            {
              image: "img/praiacosta1.jpg",            
            },
            {
              image: "img/praiacosta2.jpg",            
            },
            {
              image: "img/praiacosta3.jpg",
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
    