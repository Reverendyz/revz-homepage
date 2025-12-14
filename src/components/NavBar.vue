<script setup lang="ts">
import { useThemeStore } from '@/stores/theme'

const theme = useThemeStore()
function onClick() {
  theme.toggleTheme()
}
</script>

<template>
  <v-app-bar>
    <v-container class="fg-white mx-auto d-flex align-center justify-space-between flex-wrap pa-2">
      <v-app-bar-title class="text-h6 text-sm-h5">RevzIT</v-app-bar-title>
      <div class="d-flex align-center flex-wrap">
        <v-btn to="/" size="small" class="mx-1"> Home </v-btn>
        <v-btn to="/about" size="small" class="mx-1"> About </v-btn>
        <v-btn
          :prepend-icon="theme.theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
          size="small"
          variant="text"
          class="mx-1 d-none d-sm-flex"
          @click="onClick"
        >
          Theme
        </v-btn>
        <v-btn
          :icon="theme.theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
          size="small"
          variant="text"
          class="mx-1 d-flex d-sm-none"
          @click="onClick"
        />
      </div>
    </v-container>
  </v-app-bar>
</template>
