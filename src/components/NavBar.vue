<template>
    <div class="main-menu">
        <div class="logo">
            <RouterLink to="/">
                <li><i class="fa-solid fa-heart" style="color: #df2626;"></i> Ai Casei!</li>
            </RouterLink>
        </div>
        <div class="menu">
            <nav id="nav">
                <ul class="nav-links">
                    <RouterLink to="/"><li>Meu casamento</li></RouterLink>
                    <RouterLink to="Espacos"><li>Espaços</li></RouterLink>
                    <RouterLink to="Noivos"><li>Noivos</li></RouterLink>
                    <RouterLink to="Servicos"><li>Serviços</li></RouterLink>
                    <RouterLink to="LuaDeMel"><li>Lua de mel</li></RouterLink>
                    
                <div class="auth-buttons" style="display: flex; margin-left: 0%">
                    <template v-if="isAuthenticated">
                        <RouterLink to="/profile" class="btn btn-login"><li>Meu Perfil</li></RouterLink>
                        <button @click="handleLogout" class="btn btn-logout"><li>Sair</li></button>
                    </template>
                    <template v-else>
                        <RouterLink to="/login" class="btn btn-login"><li>Entrar</li></RouterLink>
                        <RouterLink to="/register" class="btn btn-register"><li>Cadastrar</li></RouterLink>
                    </template>
                </div></ul>
            </nav>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    name: "NavBar",
    computed: {
        ...mapGetters(["isAuthenticated"]), // Verifica se o usuário está autenticado
    },
    methods: {
        ...mapActions(["logout"]), // Mapeia a ação logout do Vuex
        handleLogout() {
            this.logout(); // Limpa o estado do usuário no Vuex
            this.$router.push("/"); // Redireciona para a página inicial
        },
    },
};
</script>




<style scoped>
#nav{
    width: 100%;
}


</style>

