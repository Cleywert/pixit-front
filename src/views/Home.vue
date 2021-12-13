<template>
  <v-container>
    <div id="home">
      <h1 class="titulo mb-3">Usuários cadastrados</h1>
      <!-- <v-btn color="primary" class="mb-2">
        Adicionar
        <v-icon class="ml-1">mdi-plus-circle</v-icon>
      </v-btn> -->
      <ListaUsuarios></ListaUsuarios>
    </div>
  </v-container>
</template>

<script>
import { mapMutations } from "vuex";
import ListaUsuarios from "@/components/lista-usuarios.vue";
export default {
  components: {
    ListaUsuarios,
  },
  mounted() {
    this.setRota(this.$route.path);
  },
  methods: {
    ...mapMutations(["setRota"]),
  },
};
</script>

<style>
</style>