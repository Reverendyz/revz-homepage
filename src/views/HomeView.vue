<template>
  <v-main>
    <v-container>
      <v-row class="mb-4 mb-sm-8">
        <v-col cols="12" class="text-center px-2 px-sm-4">
          <h1 class="text-h4 text-sm-h3 text-md-h2 text-lg-h1 font-weight-black mb-3 mb-sm-4">
            {{ $t('home.message.title') }}
          </h1>
          <div class="text-body-2 text-sm-body-1 text-md-h6 text-lg-h5 font-weight-medium">
            {{ $t('home.message.subtitle') }}
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          class="text-center d-flex flex-column flex-sm-row justify-center align-center"
        >
          <v-btn
            class="ma-2"
            href="http://github.com/reverendyz"
            target="_blank"
            size="default"
            prepend-icon="mdi-github"
          >
            {{ $t('home.button.github') }}
          </v-btn>
          <v-btn class="ma-2" to="/about" size="default"> {{ $t('home.button.about') }} </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script lang="ts" setup></script>
