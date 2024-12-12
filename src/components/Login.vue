<template>
    <div class="login-page">
        <div class="form-container">
            <h1>Entrar</h1>
            <form @submit.prevent="handleLogin">
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" v-model="email" required placeholder="Digite seu email" />
                </div>
                <div class="form-group">
                    <label for="password">Senha</label>
                    <input type="password" id="password" v-model="password" required placeholder="Digite sua senha" />
                </div>
                <button type="submit" class="btn btn-login">Entrar</button>
                <p class="redirect">
                    Não tem uma conta? 
                    <RouterLink to="/register">Cadastre-se</RouterLink>
                </p>
            </form>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";

export default {
    name: "Login",
    data() {
        return {
            email: "",
            password: "",
        };
    },
    methods: {
        ...mapActions(["login"]), // Mapeia a ação login do Vuex
        async handleLogin() {
            try {
                const response = await axios.get("http://localhost:3000/users", {
                    params: { email: this.email },
                });

                const user = response.data.find(
                    (user) => user.password === this.password
                );

                if (user) {
                    // Salva o usuário no Vuex
                    this.login(user);
                    alert("Login realizado com sucesso!");
                    this.$router.push("/"); // Redireciona para a página inicial
                } else {
                    alert("Email ou senha incorretos.");
                }
            } catch (error) {
                console.error("Erro ao realizar login:", error);
                alert("Erro ao realizar login.");
            }
        },
    },
};
</script>



<style scoped>
.login-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f8f8f8;
}

.form-container {
    background: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
    text-align: center;
}

h1 {
    margin-bottom: 20px;
    color: #df2626;
}

.form-group {
    margin-bottom: 15px;
    text-align: left;
}

label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
}

input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
}

.btn-login {
    width: 100%;
    background-color: #df2626;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s;
}

.btn-login:hover {
    background-color: #b92020;
}

.redirect {
    margin-top: 15px;
    font-size: 14px;
}

.redirect a {
    color: #df2626;
    text-decoration: none;
    font-weight: bold;
}

.redirect a:hover {
    text-decoration: underline;
}
</style>
