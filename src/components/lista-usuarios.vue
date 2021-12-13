<template>
  <div>
    <DialogConfirm></DialogConfirm>
    <v-data-table :headers="headers" :items="usuarios" class="elevation-3">
      <template #[`item.acoes`]="{item}">
        <v-btn-toggle dense group>
          <v-btn title="Editar" @click="redirEditar">
            <v-icon color="yellow darken-2">mdi-pencil</v-icon>
          </v-btn>
          <v-btn title="Excluir" @click="excluir(item.email)">
            <v-icon color="error">mdi-delete</v-icon>
          </v-btn>
        </v-btn-toggle>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import axios from "axios";
import { mapMutations } from "vuex";
import DialogConfirm from "@/components/confirma-acao.vue";
export default {
  data: () => ({
    headers: [
      {
        text: "E-mail",
        value: "email",
      },
      {
        text: "Nome",
        value: "nome",
      },
      {
        text: "Açoes",
        value: "acoes",
      },
    ],
    usuarios: [],
  }),
  components: {
    DialogConfirm
  },
  mounted() {
    this.getUsuarios();
  },
  methods: {
    ...mapMutations(['toggleDialog']),
    getUsuarios() {
      axios.get("http://localhost:8000/usuarios").then((response) => {
        this.usuarios = response.data;
      });
    },
    redirEditar() {
      this.$router.push({ name: "Editar", params: { teste: "olá" } });
    },
    excluir(email){
      this.toggleDialog({
        show: true,
        message: "Deseja mesmo excluir este usuário?",
        action: "excluir",
        key: email
      })
    }
  },
};
</script>

<style>
</style>