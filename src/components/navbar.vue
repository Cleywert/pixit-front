<template>
  <nav v-if="rota !== '/login'">
    <v-toolbar>
      <v-container class="d-flex align-center justify-space-between">
        <div class="d-flex align-center">
          <v-toolbar-title>Pixit</v-toolbar-title>
          <v-btn text link to="/" plain class="ml-5">
            <v-icon small color="info">mdi-home</v-icon>
            Home
            </v-btn>
        </div>
        <div class="d-flex align-center">
          <span>{{ firstName }}</span>
          <MenuUser :inicial="inicial" @excluir-conta="excluir"></MenuUser>
        </div>
      </v-container>
    </v-toolbar>
  </nav>
</template>

<script>
import { mapState } from "vuex";
import MenuUser from "@/components/menu-user.vue";
export default {
  components: {
    MenuUser,
  },
  computed: {
    ...mapState(["userLog", "rota"]),
    firstName() {
      let nome = this.userLog.nome;
      return nome.split(" ")[0];
    },
    inicial() {
      return this.firstName[0];
    },
  },
  methods: {
    excluir() {
      this.$emit("excluir-conta");
    },
  },
};
</script>