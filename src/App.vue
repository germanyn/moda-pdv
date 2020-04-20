<template>
  <v-app>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import html2canvas from 'html2canvas';

export default Vue.extend({
  name: 'App',

  components: {
  },

  data: () => ({
    selector: '',
  }),

  mounted() {
    // @ts-ignore
    window.downloadPNG = this.download
  },
  
  methods: {
    async download(selector: string) {
      const element: HTMLElement | null = document.querySelector(selector)
      if (!element) return window.alert('elemento não encontrado')

      const result = await html2canvas(element, {
        width: element.clientWidth,
        height: element.clientHeight,
      })
      const image = result.toDataURL("image/png")
      const link = document.createElement('a');
      link.href = image;
      link.download = 'Download.jpg';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }

});
</script>
