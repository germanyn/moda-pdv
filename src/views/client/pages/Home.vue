<template>
  <v-container>
    <v-app-bar app flat>
      <!-- <v-toolbar-title class="mx-auto">Seja Bem-Vindo</v-toolbar-title> -->
    </v-app-bar>
    <h2 class="text-center"> Seja Bem-vindo </h2>
    <v-row>
      <v-col
        v-for="(item, indice) in items"
        :key="item.title"
        :offset-md="!(indice % 3) ? 1 : 0"
        md="3"
      >
        <v-card color="primary" dark
          :to="item.route"
        >
          <v-responsive aspect-ratio="1"
            class="text-center align-center"
          >
            <v-icon size="50"> {{item.icon}} </v-icon>
            <div class="title"> {{item.title}} </div>
          </v-responsive>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { RawLocation } from 'vue-router'
export default Vue.extend({
  data: () => ({
    items: [
      {
        icon: 'mdi-shopping',
        title: 'Ponto de Venda',
        route: { name: 'Point of Sale' },
      },
      {
        icon: 'mdi-tag',
        title: 'Produtos',
        route: { name: 'Products' },
      },
      {
        icon: 'mdi-account-multiple',
        title: 'Usuários',
        route: { name: 'Users' },
      },
      {
        icon: 'mdi-store',
        title: 'Lojas',
        route: { name: 'Stores' },
      },
    ] as Item[]
  })
})

interface Item {
  exact?: boolean
  icon: string
  title: string
  route: RawLocation
}
</script>