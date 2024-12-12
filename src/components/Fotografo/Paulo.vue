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
          <h1>Paulo Ferreira de Lima</h1>
          <h3> <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i> 4.3 <span>Bom</span></h3>
          <h3><i class="fa-solid fa-location-dot"></i> <a href="">Sabara, Centro 192</a></h3>
          <div class="colums">
          <div class="colum">

          </div>
          <div class="colum">
            <h3><i class="fa-solid fa-coins"></i> Preço</h3>
            <h4>R$ 210,00 p/ Hora</h4>
          </div>
          <div class="colum">
            <h3><i class="fa-solid fa-calendar-days"></i> Horário</h3>
            <h4>Segunda à Sábado 8hrs às 22hrs</h4>
          </div>
          <div class="colum">
            <h3><i class="fa-solid fa-square-check"></i> Atendimentos</h3>
            <h4>Mais de <span>45</span> clientes satisfeitos</h4>
          </div>

        </div>
        
        <button class="btn-default">Adicionar ao Pacote</button>
        </div>
      </div>


    </div>
    <div class="content">
      <div class="conteiner-cont">
        <div class="cont-p">
          <i class="fa-solid fa-camera"></i>
          <p>fotografo</p>
        </div>
        <div class="cont-p">
          <i class="fa-solid fa-person"></i>
          <p>Se entrga ao Trabalho</p>
        </div>
        <div class="cont-p">
          <i class="fa-solid fa-icons"></i>
          <p>Esforçado</p>
        </div>
      </div>
      <div class="informacao">
        <div class="info">
          
          <p>Paulo é um fotógrafo apaixonado pela arte de capturar momentos únicos e eternizá-los por meio de suas lentes. Com um olhar sensível e criativo, ele consegue transformar o ordinário em extraordinário, destacando a beleza que muitas vezes passa despercebida no cotidiano.</p>
          
              <h2>Formação e Trajetória</h2>
        <p>
          Além de sua habilidade técnica, Paulo possui uma habilidade rara de se conectar com as pessoas, o que o ajuda a capturar expressões genuínas e contar histórias através de suas imagens. Para ele, cada clique é uma oportunidade de narrar emoções, preservar memórias e compartilhar sua visão única do mundo.</p>

              <h2>Estilo Fotográfico</h2>
        <p>
          Paulo também é um grande defensor da fotografia como forma de expressão artística e social. Ele realiza exposições e workshops, compartilhando suas experiências e incentivando novos talentos a explorarem seu potencial criativo. Seu trabalho já foi reconhecido em diversas publicações e premiações, consolidando sua reputação como um dos fotógrafos mais inspiradores de sua geração.</p>
        </div>
      </div>
    </div>
    <div class="feedback">
      <div class="card">
        <div class="sub">
        <img src="/public/img/p7.jpg" alt="" width="60px" height="60px">        
        <p>Enviada 25/06/24 17:05 hrs</p>
        </div>
        <div class="rodape">
          <h3><i class="fa-solid fa-star"></i> 4.5</h3>
          <h2>Obrigado por tudo</h2>
          <p>Não poderíamos estar mais felizes com as fotos do nosso casamento. Paulo capturou a essência do nosso dia de maneira única, sem nos fazer sentir inseguros ou forçados em nenhum momento. </p>
        </div> 
      </div>  
      <div class="card">
        <div class="sub">
        <img src="/public/img/p8.jpg" alt="" width="60px" height="60px">        
        <p>Enviada 20/12/24 15:17 hrs</p>
        </div>
        <div class="rodape">
          <h3><i class="fa-solid fa-star"></i> 4.2</h3>
          <h2>Simplesmente incrivel</h2>
          <p>"O Paulo é um exemplo de fotógrafo profissional. Ele tem um olhar diferenciado e sabe exatamente quando capturar um momento espontâneo e quando fazer uma foto mais posada, sempre com a melhor composição."</p>
        </div> 
      </div>
      <div class="card">
        <div class="sub">
        <img src="/public/img/p9.jpg" alt="" width="60px" height="60px">        
        <p>Enviada 27/10/24 13:00 hrs</p>
        </div>
        <div class="rodape">
          <h3><i class="fa-solid fa-star"></i> 4.3</h3>
          <h2>Excelente trabalho</h2>
          <p>"Paulo também é um grande defensor da fotografia como forma de expressão artística e social. Ele realiza exposições e workshops, compartilhando suas experiências e incentivando novos talentos a explorarem seu potencial criativo."</p>
        </div> 
      </div>    
    </div>
    
  </div>
  </template>    
  <script>
  export default {
    name: 'Paulo',
    data() {
      return {
        currentIndex: 0, // Índice do slide atual
        items: [
          {
            image: "img/FotoPaulo1.jpg",            
          },
          {
            image: "img/FotoPaulo2.jpg",            
          },
          {
            image: "img/FotoPaulo3.jpg",
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
    width: 290px;
    height: 390px;
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
  