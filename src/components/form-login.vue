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
import { mapMutations } from "vuex";
export default {
  data: () => ({
    email: "",
    senha: "",
  }),
  methods: {
    ...mapMutations(["setUser"]),
    login(event) {
      event.preventDefault();
      axios
        .get(`http://localhost:8000/login/${this.email}/${this.senha}`)
        .then((response) => {
          if (response.data.email) {
            const data = Date.now();
            this.setUser({
              ...response.data,
              timeLogin: data
            })
            this.$router.push({path: '/'})
          } else {
            this.$emit("show-alert", {
              type: "error",
              message: response.data,
            });
          }
        })
        .catch(() => {
          this.$emit("show-alert", {
            type: "error",
            message:
              "Não foi possível completar seu login. Verifique se todos os campos estão preenchidos",
          });
        });
    },
  },
};
</script>