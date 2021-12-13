<template>
  <div>
    <DialogConfirm></DialogConfirm>
    <v-data-table :headers="headers" :items="usuarios" class="elevation-3">
      <template #[`item.acoes`]="{item}">
        <v-btn-toggle dense group>
          <v-btn title="Editar" @click="redirEditar(item.email)">
            <v-icon color="yellow darken-2">mdi-pencil</v-icon>
          </v-btn>
          <v-btn title="Excluir" :disabled="item.email === userLog.email" @click="excluir(item.email)">
            <v-icon color="error">mdi-delete</v-icon>
          </v-btn>
        </v-btn-toggle>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import axios from "axios";
import { mapState, mapMutations } from "vuex";
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
        sortable: false
      },
    ],
    usuarios: [],
  }),
  components: {
    DialogConfirm
  },
  computed: {
    ...mapState(['userLog'])
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
    redirEditar(email) {
      this.$router.push({ name: "Editar", params: { email } });
    },
    excluir(email){
      this.toggleDialog({
        show: true,
        message: "Deseja mesmo excluir este usuário?",
        key: email
      })
    }
  },
};
</script>

<style>
</style>