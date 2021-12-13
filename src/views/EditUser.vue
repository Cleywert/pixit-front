<template>
  <v-container>
    <v-card elevation="0" outlined class="pa-4 mt-8">
      <div class="d-flex align-center">
        <v-img
          max-width="30%"
          height="100%"
          src="@/assets/images/private_data.svg"
          class="mr-6"
        ></v-img>
        <div class="mx-auto">
          <h3 class="mb-5">ATUALIZE SEUS DADOS</h3>
          <EditUser></EditUser>
        </div>
      </div>
    </v-card>
  </v-container>
</template>

<script>
import EditUser from "@/components/form-edit-user.vue";
export default {
  data: () => ({
    teste: "",
  }),
  components: {
    EditUser,
  },
  created() {
    this.teste = this.$route.params.teste;
  },
};
</script>

<style>
</style>