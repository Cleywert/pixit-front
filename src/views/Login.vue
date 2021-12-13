<template>
  <div id="login" class="cont-login align-center">
    <v-alert
      v-model="alert"
      :type="typeAlert"
      transition="slide-y-transition"
      width="75%"
      dismissible
    >
      {{ messageAlert }}
    </v-alert>
    <v-card width="75%" class="mx-auto" elevation="5">
      <div class="d-flex justify-space-between">
        <div class="forms-cont">
          <transition mode="out-in">
            <component :is="componente" @show-alert="showAlert"></component>
          </transition>
          <p class="ml-4 text-sm-body-2">
            {{ text }}
            <span class="link" @click="changeForm">{{ textLink }}</span>
          </p>
        </div>
        <div class="access-content">
          <v-img src="@/assets/images/pic_login.svg" height="100%"></v-img>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import Login from "@/mixins/log.js";
import FormLogin from "@/components/form-login.vue";
import FormCadastro from "@/components/form-cadastro.vue";
export default {
  data: () => ({
    alert: false,
    typeAlert: "error",
    messageAlert: "",
    componente: "FormLogin",
    text: "Ainda não possui uma conta?",
    textLink: "Registre-se",
  }),
  components: {
    FormLogin,
    FormCadastro,
  },
  mixins: [Login],
  mounted() {
    this.setRota(this.$route.path)
  },
  created() {
    this.verificaLogin();
  },
  methods: {
    ...mapMutations(['setRota']),
    showAlert(obj) {
      this.typeAlert = obj.type;
      this.messageAlert = obj.message;
      this.alert = true;
    },
    changeForm() {
      if (this.componente === "FormLogin") {
        this.componente = "FormCadastro";
        this.text = "Já possui uma conta?";
        this.textLink = "Faça seu login";
      } else {
        this.componente = "FormLogin";
        this.text = "Ainda não possui uma conta?";
        this.textLink = "Registre-se";
      }
    },
  },
};
</script>

<style scoped>
.cont-login {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.forms-cont {
  width: 62%;
  align-self: center;
}
.access-content {
  width: 38%;
  color: #fff;
}
.link {
  cursor: pointer;
  color: #1976d2;
  text-decoration: underline;
}

.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translate3d(50px, 0, 0);
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s;
}
</style>