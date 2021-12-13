<template>
  <div class="form-login-content">
    <h2 class="text-center mt-4">Login</h2>
    <v-form class="px-4 mb-4 mt-5" @submit="login">
      <v-text-field
        v-model="email"
        name="email"
        label="E-mail"
        outlined
      ></v-text-field>
      <v-text-field
        v-model="senha"
        name="senha"
        type="password"
        label="Senha"
        outlined
      ></v-text-field>
      <v-btn type="submit" color="success" block>Login</v-btn>
    </v-form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    email: "",
    senha: "",
  }),
  methods: {
    login(event) {
      event.preventDefault();

      axios
        .get(`http://localhost:8000/login/${this.email}/${this.senha}`)
        .then((resp) => {
          if (resp.data.email) {
            this.$router.push({path: '/'})
          } else {
            this.$emit("show-alert",{
              type: "error",
              message: resp.data
            })
          }
        })
        .catch(() => {
          this.$emit("show-alert",{
              type: "error",
              message: "Não foi possível completar seu login. Verifique se todos os campos estão preenchidos"
            })
        });
    },
  },
};
</script>