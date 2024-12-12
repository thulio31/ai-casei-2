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

        <div class="container-n">
            <div class="content-n">
                <div class="card-n">

                </div>
            </div>
            <div class="img-n">
                
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
    margin-top: 50px;  
    width: 100%;
    height: 460px;
    justify-content: center;
    display: flex;

    background-color:aquamarine;
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
    background-color: coral;
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

.card-n{
    width: 600px;
    height: 340px;
    background-color: #fff;
    margin-left: 30px;
    transform: translateY(10%);    
    border-radius:20px ;
    border: 1px solid #2020164d;    
    box-shadow: rgba(0, 0, 0, 0.24) 4px 7px 8px;
}
.card h2{
    text-transform: uppercase;
    font-weight:  500;
    padding: 18px;
}

.card p{
    font-weight:  300;
    padding: 0px 18px;
    font-size: 1.1rem;
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
}

.img-n{
    width: 50%;
    height: 420px;
    background-image: url('/public/img/noivos2.jpg') ;
   background-size: cover;
    background-repeat: no-repeat ; 
  /*    border-radius:20px ;
    border: 1px solid #2020164d;
    margin-right: 30px;
    margin-top: 40px;*/
}
</style>