<template>
  <v-dialog width="500px" v-model="dialog.show">
    <v-card>
      <v-card-title class="text-h5">
        {{ dialog.message }}
      </v-card-title>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="error" text>Não</v-btn>
        <v-btn color="success" text @click="confirmar">Sim</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["dialog"]),
  },
  methods: {
    confirmar() {
      axios
        .delete(`http://localhost:8000/usuario/${this.dialog.key}`)
        .then(() => {this.$router.go(0)});
    },
  },
};
</script>

<style>
</style>