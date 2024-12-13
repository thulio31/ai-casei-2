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
            <h1>Gourmet Buffet</h1>
            <h3> <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i> 4.7 <span>Excelente</span></h3>
            <h3 class="co"><i class="fa-solid fa-people-group"></i> Atende mais de 200 </h3>
            <h3 class="co"><i class="fa-solid fa-arrow-trend-up"></i> Dos mais pesquisados </h3>
            <div class="colums">
            <div class="colum">
  
            </div>
            <div class="colum">
              <h3><i class="fa-solid fa-coins"></i> Preço</h3>
              <h4>Desde R$ 330,00 </h4>
            </div>
            
            <div class="colum">
              <h3><i class="fa-solid fa-square-check"></i> Atendimentos</h3>
              <h4>Pacote Gourmet</h4>
            </div>
  
          </div>
          
          <button class="btn-default">Adicionar ao Pacote</button>
          </div>
        </div>
  
  
      </div>
      <div class="content">
        <div class="btns">
            <a href="https://www.casamentos.com.br/"  target="_blank"><button class="serv-btn">Ingredientes</button></a>            
            <a href="https://www.casamentos.com.br/"  target="_blank"><button class="serv-btn">Talheres</button></a>
            <a href="https://www.casamentos.com.br/"  target="_blank"><button class="serv-btn">Gastronomia</button></a>            
            <a href="https://www.casamentos.com.br/"  target="_blank"><button class="serv-btn">Decoração</button></a>
        </div>
        
        <div class="informacao">
          <div class="info">
            
            <p>
            variedade de opções para que os noivos e seus convidados possam desfrutar de uma refeição personalizada e memorável. Entre as opções estão os jantares à francesa, que oferecem pratos servidos de maneira sofisticada em várias etapas, com um toque de classe e elegância, e os buffets interativos, como estações de live cooking, onde chefs preparam pratos na hora, proporcionando uma experiência envolvente e divertida para os convidados.
        </p>
            <p>Para aqueles que buscam algo mais descontraído, o Celebração Gourmet Buffet também oferece o conceito de food stations, onde diversas opções de comida, como massas, carnes assadas e saladas, são preparadas e servidas em estações temáticas, permitindo que os convidados se sirvam de acordo com seus gostos pessoais, criando um ambiente dinâmico e social.   

            </p>

            
                <h2>Qualidade dos Ingredientes: Frescor e Sabor</h2>
          <p>No Celebração Gourmet Buffet, a qualidade dos ingredientes é uma prioridade. Cada prato é preparado com ingredientes frescos e selecionados, garantido o sabor único e incomparável de cada refeição. Desde os carnes nobres, como picanha e filé mignon, até as frutas tropicais e os vegetais frescos, o buffet garante que tudo seja de altíssima qualidade. </p>
  
                <h2>Serviço Impecável e Atendimento Personalizado
                </h2>
          <p>Além da qualidade e sabor, a apresentação das opções servidas também é um ponto forte do Celebração Gourmet Buffet. Cada prato é cuidadosamente decorado, com uma disposição elegante e criativa, garantindo que a comida se torne uma atração à parte. A montagem das mesas de buffet, o uso de louças sofisticadas e a disposição dos pratos de forma artística ajudam a criar uma atmosfera refinada e acolhedora para os convidados, complementando a beleza do evento.
                </p>
          </div>
        </div>
       
        <div class="servicos">
            <h2>Mais informações</h2> <br>
            <h3>Quais são os serviços oferecidos?</h3>
            <div class="servico" style="display: flex;">
                <h4><i class="fa-solid fa-check"></i> Venda de porções do buffet</h4>
                <h4><i class="fa-solid fa-check"></i> Aluguel de decoração </h4>
                <h4><i class="fa-solid fa-check"></i> Aluguel de talheres</h4>
            </div>
            <div class="servico" style="display: flex;">
                <h4><i class="fa-solid fa-check"></i> Venda de ingredients</h4>
                <h4><i class="fa-solid fa-check"></i> Outros</h4>
            </div>
        </div>
      </div>
    </div>
    </template>    
    <script>
    export default {
      name: 'buffet1',
      data() {
        return {
          currentIndex: 0, // Índice do slide atual
          items: [
          {
              image: "img/buffet-1.jpg",            
            },
            {
              image: "img/buffet-11.jpg",            
            },
            {
              image: "img/buffet-10.jpg",
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


.serv-btn{
    background-color: transparent;
    color: #bd1010;
    border: 2px solid #cc0f0f;
    cursor: pointer;
    padding: 8px 14px;
    font-weight: 500;
    border-radius: 5px;
    font-size: 1.1rem;
    margin-left: 18px;
    margin: 18px;
    
}

.btns{
    margin-left:20px;
}
.serv-btn:hover{
    background-color: #cc0f0f;
    color: #FFFFFF;
    transition: 0.4s;
}

.servicos {
    margin-left: 35px;    
    margin-top: -10px;
}  

.servicos h2{
    text-transform: uppercase;
    font-weight: 400;
    font-size: 1.8rem;
}
.servicos h3{
    text-transform: uppercase;
    font-weight: 400;
    font-size: 1.2rem;
    margin-bottom: 10px;
}
.servico h4{
    margin:10px;
}
.servico i{
    color: green;
}

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

  .co i{
    color: #df2626;
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
    background-color: #df2626;
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
    color:#df2626;
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
    color:#df2626;
    font-weight: 400;
  }
  
  .fa-location-dot{
    color: #df2626;
  }
  
  .colums i{
    color: #df2626;
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
      background-color: #df2626;
    }
    </style>
    