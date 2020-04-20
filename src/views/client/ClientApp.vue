<template>
  <div>
    <AppSidebar/>
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AppSidebar from '@/components/layout/AppSidebar.vue'

export default Vue.extend({
  components: {
    AppSidebar,
  },
})
</script>