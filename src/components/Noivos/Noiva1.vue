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
            <h1>Noiva Deluxe</h1>
            <h3> <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i> 4.9 <span>Excelente</span></h3>
            <h3 class="co"><i class="fa-solid fa-people-group"></i> Mais de 261 casais atendidos</h3>
            <h3 class="co"><i class="fa-solid fa-arrow-trend-up"></i> Dos mais pesquisados </h3>
            <div class="colums">
            <div class="colum">
  
            </div>
            <div class="colum">
              <h3><i class="fa-solid fa-coins"></i> Preço</h3>
              <h4>Desde R$ 450,00 </h4>
            </div>
            
            <div class="colum">
              <h3><i class="fa-solid fa-square-check"></i> Atendimentos</h3>
              <h4>Pacote Premium</h4>
            </div>
  
          </div>
          
          <button class="btn-default">Adicionar ao Pacote</button>
          </div>
        </div>
  
  
      </div>
      <div class="content">
        <div class="servicos">
            <h2>Mais informações</h2>
            <h3>Quais são os serviços oferecidos?</h3>
            <div class="servico" style="display: flex;">
                <h4><i class="fa-solid fa-check"></i> Venda de vestidos de noiva</h4>
                <h4><i class="fa-solid fa-check"></i> Aluguel de vestidos de noiva</h4>
                <h4><i class="fa-solid fa-check"></i> Venda de acessórios de noiva</h4>
            </div>
            <div class="servico" style="display: flex;">
                <h4><i class="fa-solid fa-check"></i> Maquiagem e manicure</h4>
                <h4><i class="fa-solid fa-check"></i> Outros</h4>
                <h4><i class="fa-solid fa-check"></i> Desenho e confecção de acessórios de noiva</h4>
            </div>
        </div>
        <div class="informacao">
          <div class="info">
            
            <p>O Pacote Noiva Deluxe é a escolha perfeita para noivas que desejam um dia de preparação inesquecível. Este pacote completo foi elaborado para oferecer conforto, elegância e serviços de alta qualidade, garantindo que você se sinta especial em cada momento. </p>
            
                <h2>Consultoria Personalizada</h2>
          <p>Cada noiva é única, e no Pacote Noiva Deluxe, você terá uma consultoria exclusiva para planejar todos os detalhes do grande dia. Nossos especialistas irão ajudá-la a escolher os melhores serviços e produtos que combinem com seu estilo e necessidades.  </p>
  
                <h2>Vestido dos Sonhos</h2>
          <p>No Pacote Noiva Deluxe, entendemos que o vestido é um dos elementos mais importantes do casamento. Ele simboliza não apenas a ocasião especial, mas também reflete o estilo e a personalidade da noiva. Por isso, oferecemos uma experiência única e personalizada para garantir que você encontre o vestido perfeito para o seu grande dia.  </p>
          </div>
        </div>
        <div class="btns">
            <a href="https://boutiquedanoiva.com.br"  target="_blank"><button class="serv-btn">Acessórios</button></a>            
            <a href="https://www.constancezahn.com"  target="_blank"><button class="serv-btn">Vestidos</button></a>
            <a href="https://www.docenoivas.com.br"  target="_blank"><button class="serv-btn">Maquiagem</button></a>            
            <a href="https://www.wmjoias.com.br/"  target="_blank"><button class="serv-btn">Alianças</button></a>
            <a href="https://www.anavioletavestidodefesta.com.br"  target="_blank"><button class="serv-btn">Roupas</button></a>
        </div>
      </div>
    </div>
    </template>    
    <script>
    export default {
      name: 'Noiva1',
      data() {
        return {
          currentIndex: 0, // Índice do slide atual
          items: [
            {
              image: "img/noiva2.jpg",            
            },
            {
              image: "img/noiva3.jpg",            
            },
            {
              image: "img/noiva4.jpg",
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
    margin-top: 35px;
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
    