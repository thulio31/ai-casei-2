<template>
    <div>
        <div class="footer-main">
            <div class="contact">
                <div class="contacts">
                    <h3>Contato</h3>
                    <li><i class="fa-solid fa-envelope"></i> AiCasei@gmail.com</li>
                    <li><i class="fa-solid fa-phone"></i> 55 (31) 9 9293-8212</li>
                    <li>CEP: 1721914</li>
                    <li> Rua Almeida Soares 192</li>
                    <li><a href=""><i class="fa-solid fa-location-dot"></i> Como Chegar?</a></li>
                </div>
            </div>
            <div class="links">
                <div class="lisks-content">
                    <h3>Links</h3>
                    <RouterLink><li>Espaços</li></RouterLink>
                    <RouterLink><li>Sobre Nos</li></RouterLink>
                    <RouterLink><li>Noivos</li></RouterLink>
                    <RouterLink><li>Casamento</li></RouterLink>
                </div>
            </div>
            <div class="content">
                <div class="content-slogan">                    
                    <RouterLink to="/">
                        <li style="font-weight: bold;"><i class="fa-solid fa-heart" style="color: #df2626;"></i>Ai Casei!</li>
                    </RouterLink>
                    <p>Planeje, compartilhe e eternize o seu grande dia em um só lugar. O 
                        começo da sua história merece o cenário perfeito.</p>
                </div>
            </div>
            <div class="social">
                <div class="social-content">                    
                    <h3>Siga-nos</h3>
                    <li>
                        <a href="#"><i class="fab fa-facebook"></i></a>
                    </li>
                    <li>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                    </li>
                    <li>
                        <a href="#"><i class="fab fa-youtube"></i></a>
                    </li>
                </div>
            </div>            
        </div>
    </div>
</template>

<style scoped>
.footer-main{
    padding: 50px 0px;
    width: 100%;
    height: auto;
    display: flex;
}
h3{
    color: #FFFFFF;
    text-shadow: 0px -1px 2px #808080;
    padding-bottom: 25px;
    font-size: 1.4rem
}
.footer-main li, .footer-main p{
    list-style: none;
    
    color: #FFFFFF;
}

.footer-main a{
    text-decoration: none;
}

.footer-main i{
    color: #C84648;
}

.contact, .links, .social{
    padding: 0px 20px;
    
}

.contact li, .links li, .social li{
   padding: 9px 0px;
   font-size: 16px;
}


.social i{
    font-size: 1.4rem;
}

.links{
    width: 15%;
}

.social{
    width: 25%;
}

.social li{
    padding-left: 50px;
}
.social h3{
    padding-left: 40px;
}
.content{
    width: 35%;
}

.content li{
    text-align: center;
}

.content p{    
    padding: 20px 0px;
}

.contact{
    width: 20%;
    margin-left: 20px;
}

.links li:hover{
    text-decoration: underline;
    transition: 0.4s
}

.contacts a{
    color: #FFFFFF;
}
.contacts a:hover{
    color: #C84648;
    transition: 0.4s;
}


</style>

<script>  
export default{
    name: 'Footer'
}
</script>