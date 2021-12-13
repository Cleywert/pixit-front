<template>
  <v-form>
    <v-row dense>
      <v-col cols="12">
        <v-text-field label="E-mail" outlined></v-text-field>
      </v-col>
      <v-col cols="12" sm="6">
        <v-text-field label="Nome" outlined></v-text-field>
      </v-col>
      <v-col cols="12" sm="6">
        <v-text-field
          type="date"
          label="Data de Nascimento"
          outlined
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6">
        <v-text-field type="password" label="Senha" outlined></v-text-field>
      </v-col>
      <v-col cols="12" sm="6">
        <v-text-field
          type="password"
          label="Confirmar Senha"
          outlined
        ></v-text-field>
      </v-col>
      <v-btn color="success" block class="mb-2">Salvar</v-btn>
      <v-btn color="secondary" block small>Cancelar</v-btn>
    </v-row>
  </v-form>
</template>

<script>
export default {};
</script>