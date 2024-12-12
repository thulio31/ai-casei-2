<template>
    <div>
        <div class="container">
            <div class="card">
                <div class="img">
                    <img src="/public/img/Bora-Bora1.jpg" alt="">
            </div>
                <div class="content">
                    <h2>Bora Bora</h2>
                    <h3><i class="fa-solid fa-star"></i> 4.8 <span> Bora Bora - Ilha na Polinésia Francesa</span></h3>
                    <p>Bora Bora é um paraíso no Pacífico, com águas cristalinas, praias de areia branca e o imponente Monte Otemanu ao fundo. Seus resorts luxuosos e bangalôs sobre as águas oferecem uma experiência única de conforto e contato com a natureza. O destino é perfeito para esportes aquáticos, mergulho e imersão na cultura local. Bora Bora é o lugar ideal para criar lembranças inesquecíveis em um cenário deslumbrante.</p>
                    <h4><i class="fa-solid fa-coins"></i> A partir de R$ 27.000,00</h4>
                    <a href="/Bora-Bora"><button class="btn-default">ver pacote</button></a>
                </div>
            </div>
            
            
        </div>
        <div class="container">
            <div class="card">
                <div class="img">
                    <img src="/public/img/Santorini1.jpg" alt="">
            </div>
                <div class="content">
                    <h2>Santorini</h2>
                    <h3><i class="fa-solid fa-star"></i> 4.5 <span> Santorini - Ilha no Mar Egeu </span></h3>
                    <p>
                        Santorini é uma ilha encantadora no mar Egeu, famosa por suas casas brancas com cúpulas azuis e vistas deslumbrantes do pôr do sol. Suas falésias dramáticas e praias de areia preta criam um cenário único e inesquecível. A culinária grega e a rica história local tornam a experiência ainda mais especial. Santorini é o destino perfeito para romance, relaxamento e aventuras culturais.</p>
                    <h4><i class="fa-solid fa-coins"></i> A partir de R$ 9.000,00</h4>
                    <a href="/Santorini"><button class="btn-default">ver pacote</button></a>
                </div>
            </div>
            
            
        </div>

        <div class="container">
            <div class="card">
                <div class="img">
                    <img src="/public/img/KohSamui1.jpeg" alt="">
            </div>
                <div class="content">
                    <h2>Four Seasons Resort Koh Samui</h2>
                    <h3><i class="fa-solid fa-star"></i> 5.0 <span>Four Seasons Resort Koh Samui - Tailândia</span></h3>
                    <p>O Four Seasons Resort Koh Samui é um paraíso de luxo na Tailândia, com vilas exclusivas e vistas deslumbrantes para o mar de Golfo da Tailândia. Cercado por vegetação tropical, oferece experiências únicas de relaxamento, como spas e restaurantes sofisticados. A tranquilidade e o serviço impecável fazem deste resort um refúgio perfeito para quem busca privacidade e conforto. Um destino inesquecível para uma experiência de luxo incomparável.</p>
                    <h4><i class="fa-solid fa-coins"></i> A partir de R$ 19.000,00</h4>
                    <a href="/KohSamui"><button class="btn-default">ver pacote</button></a>
                </div>
            </div>
            
            
        </div>

        <div class="container">
            <div class="card">
                <div class="img">
                    <img src="/public/img/Zermatt1.jpg" alt="">
            </div>
                <div class="content">
                    <h2>Zermatt</h2>
                    <h3><i class="fa-solid fa-star"></i> 4.3 <span>Zermatt - Suíça</span></h3>
                    <p>Zermatt é uma charmosa cidade alpina na Suíça, famosa por sua vista deslumbrante do icônico Matterhorn. Com suas ruas sem carros e uma atmosfera acolhedora, oferece uma experiência única de luxo e aventura. Os visitantes podem explorar trilhas, esquiar nas melhores pistas e desfrutar de restaurantes sofisticados. Zermatt é o destino perfeito para quem busca natureza, esportes de inverno e tranquilidade.</p>
                    <h4><i class="fa-solid fa-coins"></i> A partir de R$ 13.000,00</h4>
                    <a href="/Zermatt"><button class="btn-default">ver pacote</button></a>
                </div>
            </div>
            
            
        </div>

        <div class="container">
            <div class="card">
                <div class="img">
                    <img src="/public/img/Giethoorn1.jpg" alt="">
            </div>
                <div class="content">
                    <h2>Giethoorn</h2>
                    <h3><i class="fa-solid fa-star"></i> 4.9 <span>Giethoorn - Países Baixos</span></h3>
                    <p>Giethoorn é uma pitoresca vila na Holanda, conhecida pelos seus canais tranquilos e pontes de madeira encantadoras. Sem ruas para carros, os visitantes exploram a cidade em barcos ou bicicletas, imersos em um cenário idílico de casas com telhados de palha. Com sua atmosfera calma e natural, Giethoorn oferece uma experiência única de charme e serenidade. É o lugar perfeito para quem busca tranquilidade e beleza em meio à natureza.</p>
                    <h4><i class="fa-solid fa-coins"></i> A partir de R$ 10.000,00</h4>
                    <a href="/Giethoorn"><button class="btn-default">ver pacote</button></a>
                </div>
            </div>
            
            
        </div>
    </div>
</template>

<script>
export default{
    name: 'Luas'
}
</script>

<style scoped>
.container{    
    width: 100%;
    height: 400px;
    justify-content: center;
    display: flex;
    padding-top: 100px ;
}
.card{    
    max-width:90%;
    height: 350px;
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