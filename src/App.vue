<template>
  <v-app>
    <navbar @excluir-conta="excluir"></navbar>
    <DialogConta></DialogConta>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import navbar from "@/components/navbar.vue";
import DialogConta from "@/components/dialog-excluir-conta.vue";
export default {
  components: {
    navbar,
    DialogConta
  },
  computed: {
    ...mapState(['userLog'])
  },
  methods: {
    ...mapMutations(['toggleDialogConta']),
    excluir() {
      this.toggleDialogConta({
        show: true,
        message: "Deseja mesmo excluir sua conta?",
        key: this.userLog.email
      })
    }
  }
};
</script>

<style>
.titulo {
  margin-top: 30px;
}
</style>