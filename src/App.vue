<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import { useThemeStore } from '@/stores/theme'
import PageFooter from './components/PageFooter.vue'
const theme = useThemeStore()
</script>

<template>
  <v-app :theme="theme.theme">
    <nav-bar />
    <v-main class="mx-auto d-flex align-center justify-center">
      <router-view />
    </v-main>
    <page-footer color="#FFFFFF00" />
  </v-app>
</template>

<style scoped></style>
