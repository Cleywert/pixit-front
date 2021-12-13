<template>
  <v-container>
    <h1 class="titulo">Editar Usuário</h1>
    <v-breadcrumbs :items="items" large class="pt-0"></v-breadcrumbs>
    <v-alert v-model="showAlert" :type="typeAlert" transition="scroll-x-transition" dismissible>
      {{messageAlert}}
    </v-alert>
    <v-card elevation="0" outlined class="pa-4 mt-2">
      <div class="d-flex align-center">
        <v-img
          max-width="30%"
          height="100%"
          src="@/assets/images/private_data.svg"
          class="mr-6"
        ></v-img>
        <div class="mx-auto">
          <h3 class="mb-5">ATUALIZE SEUS DADOS</h3>
          <EditUser :email="email" @show-alert="toggleAlert"></EditUser>
        </div>
      </div>
    </v-card>
  </v-container>
</template>

<script>
import Login from "@/mixins/log.js";
import { mapMutations } from "vuex";
import EditUser from "@/components/form-edit-user.vue";
export default {
  data: () => ({
    email: "",
    showAlert: false,
    messageAlert: "",
    typeAlert: "success",
    items: [
      {
        text: "Pixit",
        to: { path: "/" },
      },
      {
        text: "Editar",
        disabled: true,
      },
    ],
  }),
  components: {
    EditUser,
  },
  mixins: [Login],
  mounted() {
    this.setRota(this.$route.path);
  },
  created() {
    this.verificaLogin();
    this.email = this.$route.params.email;
  },
  methods: {
    ...mapMutations(["setRota"]),
    toggleAlert(obj) {
      this.messageAlert = obj.message;
      this.typeAlert = obj.type;
      this.showAlert = true
    }
  },
};
</script>

<style>
</style>