<template>
  <v-form @submit="salvar">
    <v-row dense>
      <v-col cols="12">
        <v-text-field
          v-model="usuario.email"
          label="E-mail"
          outlined
          required
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6">
        <v-text-field
          v-model="usuario.nome"
          label="Nome"
          outlined
          required
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6">
        <v-text-field
          v-model="usuario.nascimento"
          type="date"
          label="Data de Nascimento"
          outlined
          required
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6">
        <v-text-field
          v-model="usuario.senha"
          type="password"
          label="Senha"
          outlined
          required
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6">
        <v-text-field
          v-model="senhaConfirm"
          type="password"
          label="Confirmar Senha"
          outlined
        ></v-text-field>
      </v-col>
      <v-btn type="submit" color="success" block class="mb-2">Salvar</v-btn>
      <v-btn color="secondary" block small>Cancelar</v-btn>
    </v-row>
  </v-form>
</template>

<script>
import axios from "axios";
import { mapMutations } from "vuex";
export default {
  data: () => ({
    usuario: {},
    senhaInit: "",
    senhaConfirm: "",
  }),
  props: {
    email: { type: String, default: "" },
  },
  mounted() {
    this.getUser();
  },
  methods: {
    ...mapMutations(['setUser']),
    getUser() {
      axios
        .get(`http://localhost:8000/usuario/${this.email}`)
        .then((response) => {
          this.usuario = response.data;
          this.senhaInit = response.data.senha;
        });
    },
    salvar(event) {
      event.preventDefault();
      let flag = true;
      if (
        this.usuario.email !== "" &&
        this.usuario.nome !== "" &&
        this.usuario.nascimento !== "" &&
        this.usuario.senha !== ""
      ) {
        if (
          this.usuario.senha != this.senhaInit &&
          this.usuario.senha !== this.senhaConfirm
        ) {
          flag = false;
        }
        if (flag) {
          axios
            .put(`http://localhost:8000/usuario/${this.email}`, this.usuario)
            .then((response) => {
              this.usuario = response.data;
              this.setUser({...this.usuario, timeLogin: Date.now()})
              this.$emit('show-alert',{
                type: 'success',
                message: 'Dados atualizados com sucesso'
              })
            });
        }
      }else{
        alert('Preencha todos os campos')
      }
    },
  },
};
</script>