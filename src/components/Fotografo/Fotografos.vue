<template>
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
</script>