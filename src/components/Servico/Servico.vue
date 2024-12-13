<template>
    <div>
        <div class="container">
            <div class="card">
                <div class="content">
                    <h2>Buffet e Gastronomia</h2>
                    <p>Veja aqui as opções de buffet disponiveis para adicionar a sua lista</p>
                    <a href="/buffets"><button class="btn-default">Ver Buffets</button></a>
                </div>
                <div class="img">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="rgb(255, 255, 255)" fill-opacity="1" d="M0,128L60,149.3C120,171,240,213,360,208C480,203,600,149,720,117.3C840,85,960,75,1080,101.3C1200,128,1320,192,1380,224L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                </svg>
                </div>
            </div>
            <div class="card">
                <div class="content">
                    <h2>Fotografos e Midia</h2>
                    <p>Procure aqui as opções de fotografos para registrar o seu momento unico</p>
                    <a href="/fotografos"><button class="btn-default">Ver Fotografos</button></a>
                </div>
                <div class="img-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="rgb(255, 255, 255)" fill-opacity="1" d="M0,128L60,149.3C120,171,240,213,360,208C480,203,600,149,720,117.3C840,85,960,75,1080,101.3C1200,128,1320,192,1380,224L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                </svg>
                </div>
            </div>
        </div>
        <div class="conteiner-list">
            <div class="card-list">
                <div class="img-list1">

                </div>
                <a href="https://www.casamentos.com.br/"  target="_blank"><h4>Buffet</h4></a>
                <p>7 Fornecedores</p>
            </div>
            <div class="card-list">
                <div class="img-list2">

                </div>
                <a href="https://www.casamentos.com.br/" target="_blank"><h4>Decoraçao</h4></a>
                <p>6 Fornecedores</p>
            </div><div class="card-list">
                <div class="img-list3">

                </div>
                <a href="https://www.casamentos.com.br" target="_blank"><h4>Gastronomia</h4></a>
                <p>8 Fornecedores</p>
            </div>
            <div class="card-list">
                <div class="img-list4">

                </div>
                <a href="https://www.casamentos.com.br" target="_blank"><h4>Vidio</h4></a>
                <p>4 Fornecedores</p>
            </div>
            <div class="card-list">
                <div class="img-list5">

                </div>
                <a href="https://www.casamentos.com.br" target="_blank"><h4>Foto</h4></a>
                <p>4 Fornecedores</p>
            </div>
            
        </div>
        <div class="informacao">
          <div class="info"> <br> <br>
            <h1 style="text-transform: uppercase; font-weight: 500;">Fotografos no Ai Casei</h1> <br> <br>

            <h2>Estilos Diversificados de Fotografia</h2>

            <p>Cada casal tem uma visão única de como gostaria que seu grande dia fosse lembrado. Pensando nisso, oferecemos uma variedade de estilos fotográficos, desde o fotojornalismo, que captura momentos espontâneos e naturais, até a fotografia clássica e posada, para aqueles que preferem imagens mais tradicionais e cuidadosamente compostas. 
            </p>
            
                <h2>Pacotes Personalizados</h2>
          <p>No Ai Casei, acreditamos que cada casal merece uma experiência única, por isso oferecemos pacotes personalizados de fotografia. Além do ensaio pré-casamento e cobertura completa no dia da cerimônia, você pode escolher entre opções de áudios, vídeos e álbuns fotográficos.          </p>
            <br> <br>
          <h1 style="text-transform: uppercase; font-weight: 500;">Buffets do Ai Casei</h1> <br> <br>

                <h2>Sabor e Sofisticação no Seu Casamento</h2>
          <p>O Buffet é um dos principais elementos que contribuem para o sucesso de um evento, e no Ai Casei, você encontrará uma seleção de buffets que oferecem experiências gastronômicas incomparáveis. Nossos parceiros são especializados em criar menus sofisticados e criativos que atendem a todos os gostos e necessidades alimentares
          </p>

          <h2>Variedade de Cardápios Personalizados</h2>
          <p>Com a diversidade de gostos e preferências de cada casal e seus convidados, o Ai Casei oferece buffets personalizados que podem ser adaptados para atender às suas necessidades. Seja um cardápio clássico de casamento, com entradas sofisticadas, pratos principais e sobremesas deliciosas, ou opções mais modernas e criativas, como jantares em estilo buffet ou comida de rua gourmet, nossos fornecedores irão surpreendê-los.      </p>
          </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Servico'
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

  
.container{
    width: 100%;
    height: 450px;
    display: flex;
    justify-content: center;
}

.card{    
    width: 50%;
    height: 280px;    
    overflow: hidden;
    margin: 40px 20px;
    display: flex;
    border-radius: 10px;    
    box-shadow: rgba(0, 0, 0, 0.24) 4px 7px 8px;
}

.card:hover{
    transition: 0.4s ease;
    box-shadow: rgba(0, 0, 0, 0.24) 8px 9px 12px;
}

.content{
    
    width: 50%;
    height: 320px;
}

.content h2{
    text-transform: uppercase;
    font-weight: 400;
    padding: 10px 14px;
    margin-top: 20px;
}

.content p{
    font-size: 1.1rem;
    padding: 10px 14px;
}
.img{    
    width: 50%;
    height: 320px;
    background-image: url('/public/img/buffet.jpg') ;
    background-size: cover;
    background-repeat: no-repeat ;
}
.img-1{    
    width: 50%;
    height: 320px;
    background-image: url('/public/img/fotografos.jpg') ;
    background-size: cover;
    background-repeat: no-repeat ;
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
    
    box-shadow: rgba(0, 0, 0, 0.24) 4px 4px 6px;
    
}

.btn-default:hover{
    background-color: #7c1e1e;
    transition: 0.4s;
}

svg{
    transform: rotate(90deg);
    padding-top: 500px;
    margin-top: -80px;
    width: 634px;   
}


.conteiner-list{
    width: 100%;
    height: auto;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
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
    background-image: url('public/img/buffet-f.jpg');
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
    background-image: url('public/img/decoracao.jpg');
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
    background-image: url('public/img/gastronomia.jpg');
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
    background-image: url('public/img/vidio.jpg');
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
    background-image: url('public/img/foto.jpg');
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
</style>