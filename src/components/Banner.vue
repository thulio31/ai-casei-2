<template>
    <div class="main">
        <div class="container">
            <div class="content">
                <h1>O Sucesso do Seu Casamento <br>Começa Aqui.</h1>
                <p>Que o amor que hoje vocês celebram cresça a cada dia, trazendo
                felicidade e cumplicidade em cada momento juntos.</p>
                <button class="btn-default">Clique Aqui</button>
            </div>
            <div class="img">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="rgb(255, 255, 255)" fill-opacity="1" d="M0,128L60,149.3C120,171,240,213,360,208C480,203,600,149,720,117.3C840,85,960,75,1080,101.3C1200,128,1320,192,1380,224L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                </svg>
            </div>
        </div>
    </div>
</template>

<style scoped>


.container{
    max-width: 1420px;
    height: 390px;
    background-color: rgb(255, 255, 255);
    justify-content: center;
    display: flex;
    overflow: hidden;
    border-bottom: 1px solid #86848479;
}

.content{
    width: 55%;
    height: 500px;
    justify-content: center;
    align-items: center;
    padding-left: 50px;
}

.content h1{    
    text-transform: uppercase;
    font-weight: 500;
    padding-top: 13%;
    margin-bottom: 17px;
    text-shadow: 1px 1px 2px #aaaa;

}
.img{
    width: 45%;
    height: 500px;
    background-image: url('img/banner.jpeg');    
    background-size: cover;
    background-repeat: no-repeat;
}

.btn-default{
    background-color: #C84648;
    color: #FFFFFF;
    border: none;
    cursor: pointer;
    padding: 10px 18px;
    margin: 16px;
    font-weight: bold;
    border-radius: 5px;
    margin-top: 19px;
    margin-left: -3px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    
}

.btn-default:hover{
    transform: translateY(-7px);
    background-color: #942e2f;
    transition: 0.5s;
}

svg{
    transform: rotate(90deg);
    padding-top: 500px;
    margin-top: -80px;
    width: 634px;   

}
</style>

<script>
export default{
    name: 'Banner'
}
</script>