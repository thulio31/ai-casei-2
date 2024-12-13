<template>
    <div>
        <div class="container">
            <div class="content">
                <div class="card">
                    <h2>Loja de Noivas</h2>
                    <p>Pesquise no catálogo mais amplo e completo de lojas e ateliers para escolher o vestido tão sonhado do seu casamento.
                    </p>
                    <a href="https://www.closetdamay.com.br"><button class="btn-default">Ver lojas</button></a>
                </div>
            </div>
            <div class="img">

            </div>
        </div>   

        <div class="title">
            <h2>Descubra os melhores profissionais de moda e beleza</h2>
        </div>
        <div class="conteiner-list">
            <div class="card-list">
                <div class="img-list1">

                </div>
                <a href="https://www.constancezahn.com/"><h4>Atelier Noiva</h4></a>
                <p>3 Fornecedores</p>
            </div>
            <div class="card-list">
                <div class="img-list2">

                </div>
                <a href="https://www.docenoivas.com.br/"><h4>Lojas de Noivas</h4></a>
                <p>5 Fornecedores</p>
            </div><div class="card-list">
                <div class="img-list3">

                </div>
                <a href="https://boutiquedanoiva.com.br/"><h4>Acessorios Noivas</h4></a>
                <p>8 Fornecedores</p>
            </div>
            <div class="card-list">
                <div class="img-list4">

                </div>
                <a href="https://www.wmjoias.com.br/"><h4>Aliança de Casamento</h4></a>
                <p>10 Fornecedores</p>
            </div>
            <div class="card-list">
                <div class="img-list5">

                </div>
                <a href="https://www.anavioletavestidodefesta.com.br/"><h4>Roupas para Festas</h4></a>
                <p>9 Fornecedores</p>
            </div>
            
        </div>

        <div class="container-card">
            <div class="card">
                <div class="img-card">
                    <img src="/img/noiva-p1.jpg" alt="">
                </div>
                <div class="content">
                    <h3>Noiva Deluxe</h3>
                    <h4><i class="fa-solid fa-star" style="color: #e2b212;"></i> 4.9</h4>
                    <h4><i class="fa-solid fa-coins"></i> A partir de R$ 450,00</h4> <br>
                    <a href="/noiva1">Ver Pacote</a>
                </div>
            </div>

            <div class="card">
                <div class="img-card">
                    <img src="/img/noiva-p2.jpg" alt="">
                </div>
                <div class="content">
                    <h3>Belle Éternelle</h3>
                    <h4><i class="fa-solid fa-star" style="color: #e2b212;"></i> 4.7</h4>
                    <h4><i class="fa-solid fa-coins"></i> A partir de R$ 350,00</h4> <br>
                    <a href="/noiva2">Ver Pacote</a>
                </div>
            </div>

            <div class="card">
                <div class="img-card">
                    <img src="/img/noiva-p3.jpg" alt="">
                </div>
                <div class="content">
                    <h3>Lumière Noivas</h3>
                    <h4><i class="fa-solid fa-star" style="color: #e2b212;"></i> 5.0</h4>
                    <h4><i class="fa-solid fa-coins"></i> A partir de R$ 390,00</h4> <br>
                    <a href="/noiva3">Ver Pacote</a>
                </div>
            </div>

            <div class="card">
                <div class="img-card">
                    <img src="/img/noiva-p4.jpg" alt="">
                </div>
                <div class="content">
                    <h3>Aurora Bridal</h3>
                    <h4><i class="fa-solid fa-star" style="color: #e2b212;"></i> 4.8</h4>
                    <h4><i class="fa-solid fa-coins"></i> A partir de R$ 320,00</h4> <br>
                    <a href="/noiva4">Ver Pacote</a>
                </div>
            </div>

            
        </div>

        <div class="informacao">
            <div class="info">
                <h2>Vestidos de noiva para todos os estilos</h2>
                <p>No "Ai Casei", oferecemos uma curadoria impecável de vestidos para todos os gostos e personalidades. Do clássico ao moderno, você encontrará o modelo perfeito para brilhar no seu grande dia.</p>

                <h2>Inspirações que encantam</h2>
                <p>Sabemos que cada noiva é única, e nosso site está repleto de tendências, dicas e ideias para tornar sua cerimônia inesquecível. Seja para decoração, maquiagem ou penteado, temos tudo para ajudá-la a sonhar e realizar.</p>

                <h2> Organização prática e eficiente</h2>
                <p>Planejar um casamento pode ser desafiador, mas o "Ai Casei" simplifica tudo para você. Oferecemos ferramentas que ajudam noivas a organizar cada detalhe, desde a escolha do vestido até a lista de convidados.</p>
            </div>
        </div>

        

    </div>
</template>

<script>
export default{
    name: 'Noiva'
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
    background-image: url('public/img/Atelier.jpg');
    background-size: cover;
    background-repeat: no-repeat ;
    width: 220px;
    height: 290px;
    margin: 20px;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.conteiner-list .img-list2{
    background-image: url('public/img/lojanoiva.jpg');
    background-size: cover;
    background-repeat: no-repeat ;
    width: 220px;
    height: 290px;
    margin: 20px;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.conteiner-list .img-list3{
    background-image: url('public/img/acessorio.jpg');
    background-size: cover;
    background-repeat: no-repeat ;
    width: 220px;
    height: 290px;
    margin: 20px;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.conteiner-list .img-list4{
    background-image: url('public/img/aliança.jpg');
    background-size: cover;
    background-repeat: no-repeat ;
    width: 220px;
    height: 290px;
    margin: 20px;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.conteiner-list .img-list5{
    background-image: url('public/img/roupa.jpg');
    background-size: cover;
    background-repeat: no-repeat ;
    width: 220px;
    height: 290px;
    margin: 20px;
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
    border: 1px solid #2020164d;    
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
    background-image: url('/public/img/noiva1.jpg') ;
    background-size: cover;
    background-repeat: no-repeat ;
    border-radius:20px ;
    border: 1px solid #2020164d;
    margin-right: 30px;
    margin-top: 40px;    
    box-shadow: rgba(0, 0, 0, 0.24) 4px 7px 8px;
}

</style>
