<template>
  <v-container
    fill-height
  >
    <v-container fluid style="max-width: 440px;">
      <v-row>
        <v-col cols="12" class="text-center">
          <img :src="logo" alt="" />
        </v-col>
        <v-col class="text-center">
          <h3> Comece seus <strong> 30 dias grátis </strong> </h3>
        </v-col>
        <v-col cols="12">
          <v-text-field
            outlined
            label="E-mail"
          />
          <v-text-field
            outlined
            label="Nome"
          />
          <v-text-field
            outlined
            label="Senha"
            type="password"
          />
          <v-text-field
            outlined
            label="Nome do Site"
            suffix=".fashion.com"
          />
          <v-checkbox
            outlined
            label="Criar com dados de demonstração"
            v-model="checked"
            hide-details=""
          />
        </v-col>
        <v-col>
          <v-btn
            block color="primary"
            @click="register"
          >
            Criar Minha Loja
          </v-btn>
          <div class="text-center mt-2">
            Já possui uma conta? <span class="primary--text" style="text-decoration: underline">Login</span>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import Vue from 'vue'
import logo from '@/assets/fashion-logo.png'

export default Vue.extend({
  data: () => ({
    logo,
    checked: true,
  }),
  methods: {
    register() {
      window.location = 'http://cliente.moda-pdv.local:8080'
    },
  },
})
</script>

<style scoped>

</style>