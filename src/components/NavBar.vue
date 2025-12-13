<script setup lang="ts">
import { useThemeStore } from '@/stores/theme'

const theme = useThemeStore()
function onClick() {
  theme.toggleTheme()
}
</script>

<template>
  <v-app-bar>
    <v-container class="fg-white mx-auto d-flex align-center justify-center">
      <v-app-bar-title>Welcome to RevzIT</v-app-bar-title>
      <v-btn to="/"> Home </v-btn>
      <v-btn to="/about"> About </v-btn>
      <v-btn
        :prepend-icon="theme.theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
        text="Toggle Theme"
        slim
        @click="onClick"
      />
    </v-container>
  </v-app-bar>
</template>
