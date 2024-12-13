<template>
    <div>

        <div class="container">
            <div class="card">
                <div class="img">
                    <img src="/public/img/buffet-1.jpg" alt="">
            </div>
                <div class="content">
                    <div class="sub" style="display: flex;">
                    <h2>Celebração Gourmet Buffet</h2>
                    <h3><i class="fa-solid fa-star"></i> 4.7 </h3></div>
                    <p>Uma opção de buffet para casamentos que buscam sofisticação e bom gosto. O Celebração Gourmet oferece uma seleção de pratos finos e requintados, acompanhados de um serviço impecável que garante uma experiência de alta gastronomia para o grande dia.</p>
                    <h4><i class="fa-solid fa-coins"></i> A partir de R$ 330,00</h4>
                    <h4><i class="fa-solid fa-person"></i> Serve de 20 a 260</h4>
                    <a href="/buffet1"><button class="btn-default">ver pacote</button></a>
                </div>
            </div>     
                
        </div>  


        <div class="container">
            <div class="card">
                <div class="img">
                    <img src="/public/img/buffet.jpg" alt="">
            </div>
                <div class="content">
                    <div class="sub" style="display: flex;">
                    <h2>Sabor & Elegância Buffet</h2>
                    <h3><i class="fa-solid fa-star"></i> 4.8 </h3></div>
                    <p>Um buffet sofisticado que oferece pratos requintados e cuidadosamente preparados para criar uma experiência gastronômica única. Perfeito para casamentos clássicos e elegantes, com opções que atendem aos mais diversos paladares. </p>
                    <h4><i class="fa-solid fa-coins"></i> A partir de R$ 400,00</h4>
                    <h4><i class="fa-solid fa-person"></i> Serve de 20 a 320</h4>
                    <a href="/buffet4"><button class="btn-default">ver pacote</button></a>
                </div>
            </div>                  
        </div>       

        <div class="container">
            <div class="card">
                <div class="img">
                    <img src="/public/img/buffet-2.jpg" alt="">
            </div>
                <div class="content">
                    <div class="sub" style="display: flex;">
                    <h2>Delícias do Amor Buffet</h2>
                    <h3><i class="fa-solid fa-star"></i> 4.9 </h3></div>
                    <p>Este buffet traz uma mistura de sabores e sentimentos, com menus personalizados para refletir a personalidade dos noivos. Desde pratos gourmet até opções mais descontraídas, oferece uma experiência acolhedora e saborosa para todos os convidados.
                    </p>
                    <h4><i class="fa-solid fa-coins"></i> A partir de R$ 420,00</h4>
                    <h4><i class="fa-solid fa-person"></i> Serve de 35 a 380</h4>
                    <a href="/buffet2"><button class="btn-default">ver pacote</button></a>
                </div>
            </div>     
                
        </div>  

        <div class="container">
            <div class="card">
                <div class="img">
                    <img src="/public/img/buffet-3.jpg" alt="">
            </div>
                <div class="content">
                    <div class="sub" style="display: flex;">
                    <h2>Essência de Festa Buffet</h2>
                    <h3><i class="fa-solid fa-star"></i> 4.9 </h3></div>
                    <p>Focado em criar momentos gastronômicos memoráveis, este buffet oferece uma cozinha inovadora e criativa, com cardápios que variam de jantares sofisticados a food stations interativas, onde os convidados podem se deliciar com pratos preparados na hora.</p>
                    <h4><i class="fa-solid fa-coins"></i> A partir de R$ 480,00</h4>
                    <h4><i class="fa-solid fa-person"></i> Serve de 40 a 310</h4>
                    <a href="/buffet3"><button class="btn-default">ver pacote</button></a>
                </div>
            </div>     
                
        </div> 

        
     
    </div>
</template>

<script>
export default{
    name: 'buffets'
}
</script>

<style scoped>
.container{    
    width: 100%;
    height: 350px;
    justify-content: center;
    display: flex;
    padding-top: 80px ;
}
.card{    
    max-width:90%;
    height: 290px;
    display: flex;    
    border-bottom: 1px solid #9494946c;    
}

.sub h3{
    margin-left: 10px;
    padding-top: 14px;
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
    color: #C84648;
    font-size: 1.1rem;
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