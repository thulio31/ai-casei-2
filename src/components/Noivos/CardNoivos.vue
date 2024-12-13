<template>
    <div>
        <div class="container">
            <div class="content">
                <div class="card">
                    <h2>Seja o Noivo e Noiva dos Sonhos</h2>
                    <p>Navegue facilmente e escolha os tipos de noivos, vestidos e ternos em sua região para celebrar o seu casamento.</p>
                </div>
            </div>
            <div class="img">

            </div>
        </div>

        <div class="container-n" style="margin-top: 100px;">
            <div class="content-n">
                <div class="card-n">
                    <h2>Noivo dos sonhos</h2>
                    <p>No seu grande dia, você merece estar impecável. Descubra a elegância e o conforto dos nossos ternos, cuidadosamente selecionados para fazer você brilhar ao lado de quem você ama.</p>
                    <h4><i class="fa-solid fa-coins"></i> A partir de R$ 300,00</h4>
                    <a href="/noivo"><button class="btn-default">Ver Mais</button></a>
                </div>
            </div>
            <div class="img-n">
                
            </div>
        </div>
        <div class="container-n">
           
            <div class="img-n2" >
                
            </div>
            <div class="content-n">
                <div class="card-n">
                    <h2>Noiva dos sonhos</h2>
                    <p>Cada detalhe do seu casamento é único, e o seu vestido também deve ser. Descubra a coleção que combina elegância, conforto e o estilo perfeito para você brilhar como nunca.
                    </p>
                    <h4><i class="fa-solid fa-coins"></i> A partir de R$ 360,00</h4>
                    <a href="/noiva"><button class="btn-default">Ver Mais</button></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name: 'CardNoivos'
}
</script>

<style scoped>
.container{    
    width: 100%;
    height: 350px;
    justify-content: center;
    display: flex;
}

.container-n{      
    padding-top: 30px;
    /* background-color: #dadada; */ 
    width: 100%;
    height: 430px;
    justify-content: center;
    display: flex;
}

.content{
    width: 38%;
    height: 350px;
    display: flex;
}

.content-n{
    width: 50%;
    height: 420px;
    display: flex;

}

.card{    
    width: 580px;
    height: 180px;
    background-color: #fff;
    margin-left: 30px;
    z-index: 10;
    position: absolute;
    transform: translateY(60%);    
    border-radius:20px ;
    border: 1px solid #2020164d;    
    box-shadow: rgba(0, 0, 0, 0.24) 4px 7px 8px;
}

.card-n i{
    color: #df2626;
}

.btn-default{
    background-color: #df2626;
    color: #FFFFFF;
    border: none;
    cursor: pointer;
    padding: 9px 19px;
    font-weight: 500;
    border-radius: 5px;
    margin-top: -55px;
    margin-left: 60%;
    font-size: 1.1rem;
    position: absolute;
    
}

.btn-default:hover{
    background-color: #7c1e1e;
    transition: 0.4s;
}
.card-n{
    width: 630px;
    height: 270px;
    background-color: #fff;
    margin-left: 30px;
    transform: translateY(10%);    
    border-radius:20px ;
    border: 1px solid #2020164d;    
    box-shadow: rgba(0, 0, 0, 0.24) 4px 7px 8px;
    margin-top: 10px;
}
.card h2, .card-n h2{
    text-transform: uppercase;
    font-weight:  500;
    padding: 18px;
}

.card p, .card-n p{
    font-weight:  300;
    padding: 0px 18px;
    font-size: 1.1rem;
}

.card-n h4{
    padding: 20px;
    font-size: 1.1rem;
    margin-top: 25px;
}
.img{
    width: 56%;
    height: 330px;
    background-image: url('/public/img/noivos.jpg') ;
    background-size: cover;
    background-repeat: no-repeat ;
    border-radius:20px ;
    border: 1px solid #2020164d;
    margin-right: 30px;
    margin-top: 40px;    
    box-shadow: rgba(0, 0, 0, 0.24) 4px 7px 8px;
}

.img-n{
    width: 43%;
    height: 340px;
    background-image: url('/public/img/noivos2.jpg') ;
    background-size: cover;
    background-repeat: no-repeat ; 
    border-radius:20px ;
    border: 1px solid #2020164d;
    margin-left: 20px;
}

.img-n2{
    width: 43%;
    height: 340px;
    background-image: url('/public/img/noiva.jpg') ;
    background-size: cover;
    background-repeat: no-repeat ; 
    border-radius:20px ;
    border: 1px solid #2020164d;
    margin-left: 20px;
}
</style>