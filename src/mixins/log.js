import { mapMutations } from "vuex";
export default {
    methods: {
        ...mapMutations(['setUser']),
        verificaLogin() {
            if (window.localStorage.userLog) {
                this.setUser(JSON.parse(window.localStorage.userLog));
                const rota = this.$route.path;
                if (rota === '/login') {
                    this.$router.push({path: '/'})
                }
            }else{
                this.$router.push({path: '/login'})
            }
        }
    }
}