<template>
    <div class="profile-page">
        <h1>Meu Perfil</h1>
        <p>Bem-vindo, {{ user.name }}</p>
        <p>Email: {{ user.email }}</p>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "Profile",
    computed: {
        ...mapGetters(["getUser"]),
        user() {
            return this.getUser;
        },
    },
};
</script>

<style scoped>
.profile-page {
    padding: 20px;
}
</style>
