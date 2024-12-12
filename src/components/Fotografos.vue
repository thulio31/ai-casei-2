<template>
    <div>
        <div class="container">
            <div class="card">
                <div class="img">
                    <img src="/public/img/fotografo-1.jpg" alt="" >
            </div>
                <div class="content">
                    <div class="sub">
                    <h2>Joao Fagas De Paula</h2>
                    <h3><i class="fa-solid fa-star"></i> 4.5</h3></div>
                    <p>Com anos de experiência, João é um fotógrafo de casamentos completo.Seja um casamento clássico, rústico ou moderno, ele adapta seu estilo para 
                       atender às necessidades de cada casal, garantindo fotos impecáveis e repletas 
                       de momentos inesquecíveis. </p>
                    <h4><i class="fa-solid fa-coins"></i> A partir de R$ 240,00</h4>
                    <a href="/Joao"><button class="btn-default">ver pacote</button></a>
                </div>
            </div>
        
            
        </div>

        <div class="container">
            <div class="card">
                <div class="img">
                    <img src="/public/img/fotografo-2.jpg" alt="" style="border: 1px  solid #aaaa;">
            </div>
                <div class="content">
                    <div class="sub">
                    <h2>Ana Clara Pereira</h2>
                    <h3><i class="fa-solid fa-star"></i> 4.6</h3></div>
                    <p>Ana, a fotógrafa de casamentos que transforma sonhos em realidade.
                       Com um olhar artístico e experiência, ela captura a emoção de cada momento,
                       criando memórias inesquecíveis para os noivos. Seus álbuns personalizados são
                       verdadeiras obras de arte.</p>
                    <h4><i class="fa-solid fa-coins"></i> A partir de R$ 290,00</h4>
                    <a href="/Ana"><button class="btn-default">ver pacote</button></a>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="card">
                <div class="img">
                    <img src="/public/img/fotografo-3.jpg" alt="" >
            </div>
                <div class="content">
                    <div class="sub">
                    <h2>Paulo Ferreira de Lima</h2>
                    <h3><i class="fa-solid fa-star"></i> 4.3</h3></div>
                    <p>A paixão de Paulo por fotografia se reflete em cada clique. Ele oferece um serviço
                       personalizado e atencioso, buscando entender os desejos dos noivos e entregando um
                       álbum de casamento que retrata a essência do grande dia com qualidade e profissionalismo.
                    </p>
                    <h4><i class="fa-solid fa-coins"></i> A partir de R$ 210,00</h4>
                    <a href="/Paulo"><button class="btn-default">ver pacote</button></a>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="card">
                <div class="img">
                    <img src="/public/img/fotografo-4.jpg" alt="" >
            </div>
                <div class="content">
                    <div class="sub">
                    <h2>Fabiano de Melo Cunha</h2>
                    <h3><i class="fa-solid fa-star"></i> 5.0</h3></div>
                    <p>Fabiano é um fotógrafo de casamentos apaixonado por capturar a emoção e a
                       autenticidade de cada momento especial. Com um olhar artístico e sensibilidade
                       única, ele cria histórias atemporais, transformando cada casamento em uma obra de
                       arte personalizada.
                    </p>
                    <h4><i class="fa-solid fa-coins"></i> A partir de R$ 310,00</h4>
                    <a href="/Fabiano"><button class="btn-default">ver pacote</button></a>
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

.sub{
    display: flex;
    margin-left: 10px;
}

.btn-default{
    background-color: #C84648;
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
    margin-left: 30px;
    margin-top: 19px;
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

<!-- <template>
    <div>
        <div class="container">
            <div class="card">
                <div class="img">
                    <img src="/public/img/fotografo-1.jpg" alt="">
                    <p>Joao Fagas De Paula</p>
                </div>
                <div class="content">
                    <p>Com anos de experiência, João é um fotógrafo de casamentos completo. 
                       Seja um casamento clássico, rústico ou moderno, ele adapta seu estilo para 
                       atender às necessidades de cada casal, garantindo fotos impecáveis e repletas 
                       de momentos inesquecíveis.</p>

                    <a href="/Joao"><button class="btn-default">Ler Mais</button></a>
                </div>
            </div>
            
        </div>
        <div class="container">
            <div class="card">
                <div class="img">
                    <img src="/public/img/fotografo-2.jpg" alt="">
                    <p>Ana Clara Pereira</p>
                </div>
                <div class="content">
                    <p>Ana, a fotógrafa de casamentos que transforma sonhos em realidade.
                       Com um olhar artístico e experiência, ela captura a emoção de cada momento,
                       criando memórias inesquecíveis para os noivos. Seus álbuns personalizados são
                       verdadeiras obras de arte.</p>
                    <a href="/Ana"><button class="btn-default">Ler Mais</button></a>
                </div>
            </div>
            
        </div>
        <div class="container">
            <div class="card">
                <div class="img">
                    <img src="/public/img/fotografo-3.jpg" alt="">
                    <p>Paulo Ferreira de Lima</p>
                </div>
                <div class="content">
                    <p>A paixão de Paulo por fotografia se reflete em cada clique. Ele oferece um serviço
                       personalizado e atencioso, buscando entender os desejos dos noivos e entregando um
                       álbum de casamento que retrata a essência do grande dia com qualidade e profissionalismo.</p>
                    <a href="/Paulo"><button class="btn-default">Ler Mais</button></a>
                </div>
            </div>
            
        </div>
        <div class="container">
            <div class="card">
                <div class="img">
                    <img src="/public/img/fotografo-4.jpg" alt="">
                    <p>Fabiano de Melo Cunha</p>
            </div>
                <div class="content">
                    <p>Fabiano é um fotógrafo de casamentos apaixonado por capturar a emoção e a
                       autenticidade de cada momento especial. Com um olhar artístico e sensibilidade
                       única, ele cria histórias atemporais, transformando cada casamento em uma obra de
                       arte personalizada.</p>
                    <a href="/Fabiano"><button class="btn-default">Ler Mais</button></a>
                </div>
            </div>
            
        </div>
    </div>
</template>
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
    border-radius: 30px;
    background-color: rgb(244, 248, 248);
    border: 1px solid #9494946c;    
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.card:hover{  
    box-shadow: rgba(0, 0, 0, 0.24) 6px 4px 9px;
}

.btn-default{
    background-color: #C84648;
    color: #FFFFFF;
    border: none;
    cursor: pointer;
    padding: 10px 12px;
    font-weight: bold;
    border-radius: 5px;
    width: 90%;    
    margin-right: 60px; 
    margin-top: 15px;
    font-size: 17px;
    font-weight: 500;     
    
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; 
}

.btn-default:hover{
    background-color: #741a15;
    transition: 0.4s;
}
.img{
    width: 30%; 
}

p{
    font-weight: 400;
}
.img p{
   text-align: center;
   margin-top: -27px;
   margin-left: 20px;
   text-transform: uppercase;
   background-color: #C84648;
   color: #FFFFFF;
   width: 320px;
   border-radius: 0px 0px 20px 20px;
   height: 30px;   
   border: 1px solid #fc7979cc;    
   
}

.content{
    width: 70%;
    padding-left: 15%;
    justify-content: center;    
    text-align: center;
    align-items: center;
}

.content p {
    text-align: justify;
    margin-right: 60px; 
    margin-top: 40px;
}



img{
    width: 360px;    
    padding: 20px;
    border-radius: 30px 30px 0px 0px;
    height: auto;
}

</style>
<script>
export default{
    name: 'Fotografos'
}
</script> -->