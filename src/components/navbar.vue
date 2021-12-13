<template>
  <nav v-if="rota !== '/login'">
      <v-toolbar>
        <v-container class="d-flex align-center justify-space-between">
          <v-toolbar-title>Pixit</v-toolbar-title>
          <div class="d-flex align-center">
            <span>Cleywert</span>
            <v-avatar size="32" color="info" class="ml-2">
              C
            </v-avatar>
          </div>
        </v-container>
      </v-toolbar>
    </nav>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["rota"]),
  },
};
</script>