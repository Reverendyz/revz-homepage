<script setup lang="ts">
import { useTheme } from 'vuetify'

const theme = useTheme()
</script>

<template>
  <v-app-bar>
    <v-container class="fg-white mx-auto d-flex align-center justify-space-between flex-wrap pa-2">
      <v-app-bar-title class="text-h6 text-sm-h5"
        ><router-link to="/" class="text-decoration-none text-white"
          >RevzIT</router-link
        ></v-app-bar-title
      >
      <div class="d-flex align-center flex-wrap">
        <v-btn to="/" size="small" class="mx-1"> {{ $t('nav.home') }} </v-btn>
        <v-btn to="/about" size="small" class="mx-1"> {{ $t('nav.about') }} </v-btn>
        <v-btn to="/projects" size="small" class="mx-1"> {{ $t('nav.projects') }} </v-btn>
        <v-btn
          :ripple="false"
          variant="outlined"
          @click="$i18n.locale = $i18n.locale === 'en-US' ? 'pt-BR' : 'en-US'"
          size="small"
          class="mx-1"
        >
          {{ $i18n.locale === 'en-US' ? 'PT-BR' : 'EN-US' }}
          <v-icon>mdi-translate</v-icon>
        </v-btn>
        <v-btn
          :prepend-icon="
            theme.global.current.value.dark ? 'mdi-weather-sunny' : 'mdi-weather-night'
          "
          size="small"
          variant="text"
          class="mx-1 d-none d-sm-flex"
          @click="theme.toggle()"
        >
          {{ $t('nav.theme') }}
        </v-btn>
        <v-btn
          :icon="theme.global.current.value.dark ? 'mdi-weather-sunny' : 'mdi-weather-night'"
          size="small"
          variant="text"
          class="mx-1 d-flex d-sm-none"
          @click="theme.toggle()"
        />
      </div>
    </v-container>
  </v-app-bar>
</template>
