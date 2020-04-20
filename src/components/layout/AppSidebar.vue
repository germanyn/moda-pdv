<template>
  <v-navigation-drawer app>
    <v-list-item>
      <v-list-item-content>
        <img :src="logo" style="height: 40px; width: auto; object-fit: contains;" />
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list
      dense
      nav
    >
      <v-list-item
        v-for="item in items"
        :key="item.title"
        :to="item.route"
        :exact="item.exact"
        color="primary"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from 'vue'
import { RawLocation } from 'vue-router'
import logo from '@/assets/fashion-logo.png'


export default Vue.extend({
  data: () => ({
    logo,
    items: [
      {
        icon: 'mdi-home',
        title: 'Início',
        route: { name: 'Home' },
        exact: true,
      },
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