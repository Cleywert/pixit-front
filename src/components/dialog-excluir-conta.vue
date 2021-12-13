<template>
  <v-dialog width="500px" v-model="dialogConta.show">
    <v-card>
      <v-card-title class="text-h5">
        {{ dialogConta.message }}
      </v-card-title>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="error" text @click="close">Não</v-btn>
        <v-btn color="success" text @click="confirmar">Sim</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from "axios";
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState(["dialogConta"]),
  },
  methods: {
    ...mapMutations(['toggleDialogConta', 'setUser']),
    close() {
      this.toggleDialogConta();
    },
    logoff() {
      window.localStorage.removeItem('userLog');
      this.setUser({});
      this.$router.push({path: "/login"})
    },
    confirmar() {
      axios
        .delete(`http://localhost:8000/usuario/${this.dialogConta.key}`)
        .then(() => {
            this.close();
            this.logoff();
        });
    },
  },
};
</script>

<style>
</style>