<template>
  <div class="form-cad-content">
    <h2 class="text-center mt-4">Cadastre-se</h2>
    <v-form @submit="cadastrar" class="px-4 mb-4 mt-5">
      <v-row dense>
        <v-col sm="12">
          <v-text-field
            v-model="email"
            name="email"
            label="E-mail"
            :rules="[rules.required, rules.email]"
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="nome"
            name="nome"
            label="Nome"
            :rules="[rules.required]"
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            type="date"
            v-model="nascimento"
            name="dt_nascimento"
            label="Data de nascimento"
            :rules="[rules.required]"
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="senha"
            type="password"
            label="Senha"
            :rules="[rules.required]"
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="senhaConfirm"
            type="password"
            label="Confirmar Senha"
            :rules="[rules.required]"
            outlined
          ></v-text-field>
        </v-col>
        <v-btn type="submit" color="success" block>Cadastrar</v-btn>
      </v-row>
    </v-form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    valid: true,
    email: "",
    nome: "",
    senha: "",
    senhaConfirm: "",
    nascimento: "",
    rules: {
      required: (value) => !!value || "Campo obrigatório.",
      email: (value) =>
        /.+@.+\..+/.test(value) || "Formato de e-mail inválido.",
    },
  }),
  methods: {
    cadastrar(event) {
      event.preventDefault();

      if (
        this.email !== "" &&
        this.nome !== "" &&
        this.senha !== "" &&
        this.nascimento !== ""
      ) {
        if (this.senha === this.senhaConfirm) {
          axios
            .post("http://localhost:8000/usuario", {
              email: this.email,
              nome: this.nome,
              senha: this.senha,
              nascimento: this.nascimento,
            })
            .then((resp) => {
              console.log(resp);
            });
        } else {
          this.$emit("show-alert", {
            type: "error",
            message: "As senhas não coincidem",
          });
        }
      } else {
        this.$emit("show-alert", {
          type: "error",
          message: "Preencha todos os campos",
        });
      }
    },
  },
};
</script>