<template>
    <div>
        <div class="container">
            <div class="content">
                <h2>AiCasei Transformando sonhos de casamento em realidade!</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                <button class="btn-default">Click Aqui</button>
                <button class="btn-alter">Click Aqui</button>
            </div>            
        </div>
       </div>
</template>
<style scoped>
.container{
    position: relative;
    width: 100%;
    height: 600px;
    justify-content: center;
    text-align: center;
    align-items: center;
}

.container::before{
    content: '';
    display: block;
    position: absolute;
    background-image: linear-gradient(to bottom, rgba(245, 243, 243, 0), #8d8989ad), url(/public/img/fundo-img.png);
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 1;
}

.content{
    padding-top: 16%;  
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
}

.btn-default:hover{
    transform: translateY(-7px);
    background-color: #942e2f;
    transition: 0.5s;
}

.btn-alter{
  background-color: transparent;  
  padding: 10px 18px;
  border: 2px solid #fff;
  color: #fff;
  font-weight: bold;  
  border-radius: 5px;
}


.btn-alter:hover{
    transform: translateY(-7px);
    background-color: #949494;
    transition: 0.5s;
}

h2{
    color: #FFFFFF;
    font-weight: 600;
    font-size: 1.4rem;
    text-transform: uppercase;
    text-shadow: 0px -1px 6px #1d1d1db2;
}

p{
    color: #FFFFFF;
    font-weight: 400;
    font-size: 1.2rem;
    padding: 0px 240px;
    margin: 15px;
}
</style>
<script>
export default{
    name: 'Flag'
}
</script>