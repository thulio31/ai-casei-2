<template>
    <div class="register-page">
        <div class="form-container">
            <h1>Cadastrar</h1>
            <form @submit.prevent="handleRegister">
                <div class="form-group">
                    <label for="name">Nome</label>
                    <input type="text" id="name" v-model="name" required placeholder="Digite seu nome" />
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" v-model="email" required placeholder="Digite seu email" />
                </div>
                <div class="form-group">
                    <label for="password">Senha</label>
                    <input type="password" id="password" v-model="password" required placeholder="Digite sua senha" />
                </div>
                <button type="submit" class="btn btn-register">Cadastrar</button>
                <p class="redirect">
                    Já tem uma conta? 
                    <RouterLink to="/login">Entre</RouterLink>
                </p>
            </form>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "Register",
    data() {
        return {
            name: "",
            email: "",
            password: "",
        };
    },
    methods: {
        async handleRegister() {
            try {
                const response = await axios.post("http://localhost:3000/users", {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                });
                alert("Usuário cadastrado com sucesso!");
                console.log("Resposta do Servidor:", response.data);
                this.$router.push("/login");
            } catch (error) {
                console.error("Erro ao cadastrar:", error);
                alert("Erro ao cadastrar usuário.");
            }
        },
    },
};
</script>


<style scoped>
.register-page {
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

.btn-register {
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

.btn-register:hover {
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
