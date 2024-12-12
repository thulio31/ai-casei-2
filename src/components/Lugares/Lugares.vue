<template>
    <div>
        <div class="container">
            <div class="card">
                <div class="img">
                    <img src="/public/img/praiacosta.jpg" alt="">
            </div>
                <div class="content">
                    <h2>Praia da Costa</h2>
                    <h3><i class="fa-solid fa-star"></i> 4.8 <span> vila velha - ES</span></h3>
                    <p>A Praia da Costa, em Vila Velha, Espírito Santo, é uma das mais famosas e movimentadas do 
                    estado. ela se destaca por suas águas cristalinas, faixa de areia dourada e boa infraestrutura,
                    incluindo quiosques, bares e restaurantes. </p>
                    <h4><i class="fa-solid fa-coins"></i> A partir de R$ 400,00</h4>
                    <a href="/praiacosta"><button class="btn-default">ver pacote</button></a>
                </div>
            </div>
            
            
        </div>
        <div class="container">
            <div class="card">
                <div class="img">
                    <img src="/public/img/pontanegra.jpg" alt="">
            </div>
                <div class="content">
                    <h2>Ponta Negra</h2>
                    <h3><i class="fa-solid fa-star"></i> 4.5 <span> Ponta Negra - RS</span></h3>
                    <p>A Praia de Ponte Negra,  é conhecida por sua beleza natural e atmosfera tranquila.
                    Tem  um cenário rústico, apresenta uma extensa faixa de areia dourada, mar com ondas
                    fortes, e é cercada por vegetação nativa e formações rochosas. </p>
                    <h4><i class="fa-solid fa-coins"></i> A partir de R$ 570,00</h4>
                    <a href="/pontanegra"><button class="btn-default">ver pacote</button></a>
                </div>
            </div>
            
            
        </div>

        <div class="container">
            <div class="card">
                <div class="img">
                    <img src="/public/img/sitioalameda.jpeg" alt="">
            </div>
                <div class="content">
                    <h2>Sitio Alameda</h2>
                    <h3><i class="fa-solid fa-star"></i> 5.0 <span> Alameda - SP</span></h3>
                    <p>O Sítio Alameda, em São Paulo, é um refúgio fictício cercado por natureza exuberante,
                    perfeito para momentos de tranquilidade e lazer. Localizado em uma área arborizada e
                    afastada da agitação urbana, o espaço conta com amplos gramados, jardins floridos.</p>
                    <h4><i class="fa-solid fa-coins"></i> A partir de R$ 415,00</h4>
                    <a href="/alameda"><button class="btn-default">ver pacote</button></a>
                </div>
            </div>
            
            
        </div>

        <div class="container">
            <div class="card">
                <div class="img">
                    <img src="/public/img/chacaradolees.jpg" alt="">
            </div>
                <div class="content">
                    <h2>chacará do less</h2>
                    <h3><i class="fa-solid fa-star"></i> 4.3 <span> Sabará - MG</span></h3>
                    <p>A Chácara do Lees é um encantador refúgio fictício, ideal para momentos de
                    descanso e lazer em meio à natureza. Situada em um ambiente tranquilo e cercado
                    por áreas verdes, a chácara combina charme rústico com conforto. </p>
                    <h4><i class="fa-solid fa-coins"></i> A partir de R$ 315,00</h4>
                    <a href="/dolees"><button class="btn-default">ver pacote</button></a>
                </div>
            </div>
            
            
        </div>

        <div class="container">
            <div class="card">
                <div class="img">
                    <img src="/public/img/igrejadocalvario.jpg" alt="">
            </div>
                <div class="content">
                    <h2>Igreja do calvario</h2>
                    <h3><i class="fa-solid fa-star"></i> 4.9 <span> Cardeal Arcoverde - SP</span></h3>
                    <p>A Igreja do Calvário é um templo que encanta pela sua arquitetura imponente
                    e atmosfera de serenidade. Localizada no alto de uma colina, a igreja oferece uma vista
                    panorâmica deslumbrante da paisagem ao redor, simbolizando um local de paz e introspecção. </p>
                    <h4><i class="fa-solid fa-coins"></i> A partir de R$ 295,00</h4>
                    <a href="/igrejacalvario"><button class="btn-default">ver pacote</button></a>
                </div>
            </div>
            
            
        </div>
    </div>
</template>

<script>
export default{
    name: 'Lugares'
}
</script>

<style scoped>
.container{    
    width: 100%;
    height: 350px;
    justify-content: center;
    display: flex;
    padding-top: 100px ;
}
.card{    
    max-width:90%;
    height: 290px;
    display: flex;    
    border-bottom: 1px solid #9494946c;    
}



.btn-default{
    color: #df2626;
    color: #FFFFFF;
    border: none;
    cursor: pointer;
    padding: 10px 30px;
    font-weight: bold;
    border-radius: 5px;     
    font-size: 17px;
    font-weight: 500;   
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; 
    margin-left: 70%;
    text-transform: uppercase;
}

.btn-default:hover{
    background-color: #741a15;
    transition: 0.4s;
}
.img{
    width: 40%; 
}

p{
    font-weight: 400;
}


.content{
    width: 60%;
    justify-content: center;  
    color: #1d1d1dcc;
    margin-left: -30px;
}

.content p {
    text-align: justify;
    margin-top: 10px;
    font-weight: 300;
}

.content h2{
    text-transform: uppercase;
    font-weight: 400;
    margin-top: 16px
}

.content h4 i{
    color: #C84648
}

.content h4{
    color: #000;
    margin-top: 10px;
}
.content h3{
    margin-top: 5px;
    font-weight: 500;
}

span{
    color: #1d1d1da1;
}
img{
    width: 420px;   
    padding: 10px;
    border-radius: 30px;
    height: auto;
}


  
.fa-star {
    color: #e2b212;
  }
</style>