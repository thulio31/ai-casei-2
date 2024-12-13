<template>
    <div>
        

        <div class="title">
            <h2>Descubra os melhores profissionais </h2>
        </div>
        <div class="conteiner-list">
            <div class="card-list">
                <div class="img-list1">

                </div>
                <a href="https://www.drterno.com.br/"  target="_blank"><h4>Terno Noivo</h4></a>
                <p>12 Fornecedores</p>
            </div>
            <div class="card-list">
                <div class="img-list2">

                </div>
                <a href="https://www.lamafiabarbearia.com.br/" target="_blank"><h4>Barbearia de Noivos</h4></a>
                <p>21 Fornecedores</p>
            </div><div class="card-list">
                <div class="img-list3">

                </div>
                <a href="https://www.trendhim.pt/" target="_blank"><h4>Acessorios Noivos</h4></a>
                <p>8 Fornecedores</p>
            </div>
            <div class="card-list">
                <div class="img-list4">

                </div>
                <a href="https://www.wmjoias.com.br" target="_blank"><h4>Aliança de Casamento</h4></a>
                <p>10 Fornecedores</p>
            </div>
            <div class="card-list">
                <div class="img-list5">

                </div>
                <a href="https://blog.casar.com/roupa-de-noivo" target="_blank"><h4>Roupas para Festas</h4></a>
                <p>6 Fornecedores</p>
            </div>
            
        </div>

        <div class="container">
            <div class="content">
                <div class="card">
                    <h2>Loja de Noivos</h2>
                    <p>Pesquise no catálogo mais amplo e completo de lojas e acessorios para escolher o terno tão sonhado do seu casamento.
                    </p>
                    <a href="https://www.rechiastore.com.br/" target="_blank" ><button class="btn-default">Ver lojas</button></a>
                </div>
            </div>
            <div class="img">

            </div>
        </div>   

        <div class="container-card">
            <div class="card">
                <div class="img-card">
                    <img src="/img/noivo2.jpg" alt="">
                </div>
                <div class="content">
                    <h3>Estilo e Classe</h3>
                    <h4><i class="fa-solid fa-star" style="color: #e2b212;"></i> 4.9</h4>
                    <h4><i class="fa-solid fa-coins"></i> A partir de R$ 380,00</h4> <br>
                    <a href="/noivo1">Ver Pacote</a>
                </div>
            </div>

            <div class="card">
                <div class="img-card">
                    <img src="/img/noivo4.jpg" alt="">
                </div>
                <div class="content">
                    <h3>Noivo Premium</h3>
                    <h4><i class="fa-solid fa-star" style="color: #e2b212;"></i> 4.8</h4>
                    <h4><i class="fa-solid fa-coins"></i> A partir de R$ 370,00</h4> <br>
                    <a href="/noivo2">Ver Pacote</a>
                </div>
            </div>

            <div class="card">
                <div class="img-card">
                    <img src="/img/noivo3.jpg" alt="">
                </div>
                <div class="content">
                    <h3>Noivo Real</h3>
                    <h4><i class="fa-solid fa-star" style="color: #e2b212;"></i> 4.7</h4>
                    <h4><i class="fa-solid fa-coins"></i> A partir de R$ 340,00</h4> <br>
                    <a href="/noivo3">Ver Pacote</a>
                </div>
            </div>

            <div class="card">
                <div class="img-card">
                    <img src="/img/noivo1.jpg" alt="">
                </div>
                <div class="content">
                    <h3>Elegância do Noivo</h3>
                    <h4><i class="fa-solid fa-star" style="color: #e2b212;"></i> 4.6</h4>
                    <h4><i class="fa-solid fa-coins"></i> A partir de R$ 320,00</h4> <br>
                    <a href="/noivo4">Ver Pacote</a>
                </div>
            </div>

            
        </div>

        <div class="informacao">
            <div class="info">
                <p>A Página de Noivo do Ai Casei foi desenvolvida para garantir que o noivo também tenha uma experiência inesquecível no dia do casamento. Pensando em todos os detalhes, reunimos uma seleção de serviços exclusivos que garantem conforto, elegância e praticidade, permitindo que ele esteja impecável e relaxado para o grande momento.
                </p>

                <h2>Dia do Noivo</h2>
                <p>A preparação do noivo também é um momento importante, e no Ai Casei pensamos em tudo para que ele se sinta relaxado e confortável. Com pacotes exclusivos de barbearia premium, ele poderá contar com cortes de cabelo modernos ou clássicos, cuidados com a barba e tratamentos de pele. Para um momento de relaxamento, oferecemos também spas masculinos com massagens e cuidados especiais, permitindo que o noivo desfrute de um descanso merecido antes de seu grande momento. 
                </p>

                <h2> Experiências Pré-Casamento</h2>
                <p>Antes do casamento, o noivo também merece momentos de descontração. Oferecemos experiências pré-casamento, como degustações de bebidas premium, onde ele pode explorar diferentes opções de whiskies, vinhos ou cervejas artesanais com seus amigos.
                </p>
            </div>
        </div>

        

    </div>
</template>

<script>
export default{
    name: 'Noivo'
}
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
  
.container-card, .conteiner-list{
    width: 100%;
    height: auto;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
}
.card-list p{
    color: #0f0f0faa;
}
.card-list h4{
    font-weight: 400;
}
.card-list a{
    color: #000000;
    text-decoration: none;
    font-weight: 400;
}

.card-list a:hover{
    color: #df2626;
    text-decoration: underline;
    font-weight: 500;
    transition: 0.4s;
}
.conteiner-list .img-list1{
    background-image: url('public/img/terno.jpg');
    background-size: cover;
    background-repeat: no-repeat ;
    width: 220px;
    height: 290px;
    margin: 20px;
    overflow: hidden;
    border-radius: 10px;
    filter: grayscale(60%);
    transition: .6s;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.conteiner-list .img-list1:hover{
    background-size: 110% ;
    filter: none;    
    transition: .6s;
}
.conteiner-list .img-list2:hover{
    background-size: 110% ;
    filter: none;    
    transition: .6s;
}
.conteiner-list .img-list3:hover{
    background-size: 110% ;
    filter: none;
    transition: .6s;
}
.conteiner-list .img-list4:hover{
    background-size: 110% ;
    filter: none;
    transition: .6s;
}
.conteiner-list .img-list5:hover{
    background-size: 110% ;
    filter: none;
    transition: 0.6s;
}
.conteiner-list .img-list2{
    background-image: url('public/img/barber.jpg');
    background-size: cover;
    background-repeat: no-repeat ;
    width: 220px;
    height: 290px;
    margin: 20px;
    overflow: hidden;    
    filter: grayscale(60%);
    transition: .6s;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.conteiner-list .img-list3{
    background-image: url('public/img/acessorio2.jpg');
    background-size: cover;
    background-repeat: no-repeat ;
    width: 220px;
    height: 290px;
    margin: 20px;
    overflow: hidden;    
    filter: grayscale(60%);
    transition: .6s;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.conteiner-list .img-list4{
    background-image: url('public/img/aliança2.jpg');
    background-size: cover;
    background-repeat: no-repeat ;
    width: 220px;
    height: 290px;    
    filter: grayscale(60%);
    transition: .6s;
    margin: 20px;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.conteiner-list .img-list5{
    background-image: url('public/img/roupa2.jpg');
    background-size: cover;
    background-repeat: no-repeat ;
    width: 220px;
    height: 290px;
    margin: 20px;    
    filter: grayscale(60%);
    transition: .6s;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.container-card .card{
    background-color: rgb(253, 253, 253);
    width: 290px;
    height: 390px;
    margin: 20px;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.container-card .card:hover{
    box-shadow: rgba(0, 0, 0, 0.24) 5px 5px 10px; ;
    transition: 0.4s;
        
}

.title h2{
    margin-left: 40px;
    margin-top: 120px;
    font-weight: 400;
}
.container-card .img-card img{
width: 100%;
height: 200px;
}

.container-card .content{
    justify-content: center;
    text-align: center;
    align-items: center;
    padding: 10px;
    height: 170px;
}

.container-card .content h3{
    font-weight: 400;
    text-transform: uppercase;    
    text-align: start;
    margin-bottom: 6px;
}

.container-card .content h4{
    text-align: start;
    font-size: 1rem;
    color: #000000;
}

.container-card .content a{
    text-align: center;
    color: #df2626;
    font-weight: 500;
}


.container-card .content i{
    color: #df2626;
}


.btn-default{
    background-color: #df2626;
    color: #FFFFFF;
    border: none;
    cursor: pointer;
    padding: 8px 14px;
    font-weight: 500;
    border-radius: 5px;
    font-size: 1.1rem;
    margin-left: 18px;
    margin-top:10px;
    
}

.btn-default:hover{
    background-color: #7c1e1e;
    transition: 0.4s;
}


.container{    
    width: 100%;
    height: 350px;
    justify-content: center;
    display: flex;
}

.container .content{
    width: 38%;
    height: 350px;
    display: flex;
}


.container .card{    
    width: 580px;
    height: 230px;
    background-color: #fff;
    margin-left: 30px;
    z-index: 10;
    position: absolute;
    transform: translateY(40%);    
    border-radius:20px ;    
    box-shadow: rgba(0, 0, 0, 0.24) 4px 7px 8px;
}


.container .card h2{
    text-transform: uppercase;
    font-weight:  500;
    padding: 18px;
}

.container .card p{
    font-weight:  300;
    padding: 0px 18px;
    font-size: 1.1rem;
}

.container .img{
    width: 56%;
    height: 330px;
    background-image: url('/public/img/noivo.jpg') ;
    background-size: cover;
    background-repeat: no-repeat ;
    border-radius:20px ;
    border: 1px solid #2020164d;
    margin-right: 30px;
    margin-top: 40px;    
    box-shadow: rgba(0, 0, 0, 0.24) 4px 7px 8px;
}

</style>
