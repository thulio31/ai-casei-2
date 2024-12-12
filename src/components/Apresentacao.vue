<template>
    <div>
        <div id="container">
            <div class="slideLeft">
                <img src="/public/img/fotografo-1.jpg">
                <div class="text">ALO</div>
            </div>
            <div class="slideRight">
                
            </div>
            <div class="slideLeft">
                
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name: 'Apresentacao'
}
</script>
<style scoped>
#container{
    width: 100%;
    height: 600px;
    display: flex;
    text-align: center;
    justify-content: center;
    background-color: yellow;
}

#container img{
    width: 300px;
    height: 200px;
    margin-left: 0px;
}

.slideLeft{
    width: 80%;
    height: 200px;
    background-color: blue;
}

.text{
    display: inline;
}
</style>
