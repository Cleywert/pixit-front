<template>
  <v-menu bottom offset-y>
    <template #[`activator`]="{ on }">
      <v-btn icon v-on="on" color="#FFF">
        <v-avatar size="32" color="purple"> {{inicial}} </v-avatar>
      </v-btn>
    </template>
    <v-card>
      <v-list-item-content class="justify-center">
        <div class="mx-auto text-center d-flex flex-column">
          <v-btn text small color="info" @click="redirEditar">Editar Conta</v-btn>
          <v-btn text small @click="logoff">Logoff <v-icon>mdi-logoff</v-icon></v-btn>
          <v-divider class="my-2"></v-divider>
          <v-btn text small color="error" @click="excluir">Excluír Conta</v-btn>
        </div>
      </v-list-item-content>
    </v-card>
  </v-menu>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  props: {
    inicial: {
      type: String,
      default: ""
    }
  },
  computed: {
    ...mapState(['userLog'])
  },
  methods: {
    ...mapMutations(['setUser']),
    logoff() {
      window.localStorage.removeItem('userLog');
      this.setUser({});
      this.$router.push({path: "/login"})
    },
    redirEditar() {
      this.$router.push({ name: "Editar", params: { email: this.userLog.email } });
    },
    excluir() {
      this.$emit('excluir-conta')
    }
  }
};
</script>

<style>
</style>