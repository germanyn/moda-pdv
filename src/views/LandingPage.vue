<template>
  <div>    
    <v-app-bar
      app
      class="px-0"
      fixed
    >
      <v-container class="py-0">
        <v-row class="align-center">
          <img :src="logo" style="height: 40px; object-fit: contains;" />
          <template v-if="$vuetify.breakpoint.smAndUp">
            <v-spacer />
            <v-btn text> Sobre </v-btn>
            <v-btn text> Recursos </v-btn>
            <v-btn text> Preço </v-btn>
            <v-btn text> Login </v-btn>
          </template>
          <v-spacer />
          <v-btn :outlined="outlined" color="primary"
            @click="() => $router.push({ name: 'Cadastro-1' })"
          >
            Experimente <template v-if="$vuetify.breakpoint.smAndUp"> Grátis </template>
          </v-btn>
        </v-row>
      </v-container>
    </v-app-bar>

    <v-img
      src="https://media.socastsrm.com/wordpress/wp-content/blogs.dir/2161/files/2019/04/o-SHOE-STORE-facebook-1.jpg"
      :height="$vuetify.breakpoint.xs ? 300 : undefined"
    >
      <v-row
        class="align-center justify-center white--text fill-height"
      >
        <v-col
          cols="auto"
          style="border-radius: 12px; background-color:rgba(0, 0, 0, 0.6);"
        >
          <p :class="[ $vuetify.breakpoint.mdAndUp ? 'display-2 text-center' : 'headline text-center']">
            O produto que cabe no seu negócio
          </p>
          <p :class="[ 'grey--text text--lighten-2', $vuetify.breakpoint.mdAndUp ? 'headline' : 'subtitle-1 text-center']">
            O melhor sistema de vendas do ramo vestuário
          </p>
          <div class="mt-2 text-center">
            <v-btn
              color="primary"
              @click="() => $router.push({ name: 'Cadastro-1' })"
            >
              Experimente Grátis
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-img>
    <v-container dense>
      <v-row>
        <v-col offset-md="1" md="5">
          <v-card>
            <v-img
              class="red"
              height="250"
              contain
            />
            <v-card-title>
              See how we're reimagining Jira Software Cloud
            </v-card-title>
            <v-card-text>
              <div class="subtitle-1">
                Roadmaps, new boards, and easier configuration are just the beginning.
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col md="5">
          <v-card>
            <v-img
              class="blue"
              height="250"
              contain
            />
            <v-card-title>
              Automate your workflow in just a few clicks
            </v-card-title>
            <v-card-text>
              <div class="subtitle-1">
                New automation in Jira helps you save time and deliver value faster.
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import logo from '@/assets/fashion-logo.png'

export default {
  name: 'LandingPage',
  components: {
    
  },
  data: () => ({
    logo,
    outlined: true,
  }),
  mounted() {
    window.addEventListener('scroll', () => {
      this.outlined = window.scrollY === 0
    });
  }
}
</script>

<style lang="scss" scoped>

</style>