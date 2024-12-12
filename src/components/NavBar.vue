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
                </ul>
                <div class="auth-buttons">
                    <template v-if="isAuthenticated">
                        <RouterLink to="/profile" class="btn btn-login">Meu Perfil</RouterLink>
                        <button @click="handleLogout" class="btn btn-logout">Sair</button>
                    </template>
                    <template v-else>
                        <RouterLink to="/login" class="btn btn-login">Entrar</RouterLink>
                        <RouterLink to="/register" class="btn btn-register">Cadastrar</RouterLink>
                    </template>
                </div>
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
/* Seu CSS permanece o mesmo */
</style>


<style scoped>


.auth-buttons {
    display: flex;
    gap: 10px;
    margin-left: 500px;
}

.auth-buttons .btn {
    text-decoration: none;
    padding: 8px 15px;
    border: 1px solid #df2626;
    border-radius: 5px;
    font-weight: bold;
    color: #df2626;
    transition: background-color 0.3s, color 0.3s;
}

.auth-buttons .btn-login {
    background-color: transparent;
}

.auth-buttons .btn-register {
    background-color: #df2626;
    color: white;
}

.auth-buttons .btn:hover {
    background-color: #df2626;
    color: white;
}

.auth-buttons .btn-register:hover {
    background-color: white;
    color: #df2626;
}
</style>

