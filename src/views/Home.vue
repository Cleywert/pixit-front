<template>
  <v-container>
    <div id="home">
      <h1 class="titulo">Usuários cadastrados</h1>
      <v-breadcrumbs :items="items" large class="pt-0 mb-1"></v-breadcrumbs>
      <ListaUsuarios></ListaUsuarios>
    </div>
  </v-container>
</template>

<script>
import { mapMutations } from "vuex";
import Login from "@/mixins/log.js";
import ListaUsuarios from "@/components/lista-usuarios.vue";
export default {
  data: () => ({
    items: [
      {
        text: "Pixit",
        disabled: true
      }
    ]
  }),
  components: {
    ListaUsuarios,
  },
  mixins: [Login],
  mounted() {
    this.setRota(this.$route.path);
  },
  created() {
    this.verificaLogin();
  },
  methods: {
    ...mapMutations(["setRota"]),
  },
};
</script>

<style>
</style>