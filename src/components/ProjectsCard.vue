<script lang="ts" setup>
import { ref } from 'vue'

const show = ref(false)
const props = defineProps<{
  title: string
  subtitle: string
  url?: string
  imgSrc: string
  text: string
}>()
</script>

<template>
  <v-card class="mx-auto">
    <v-img height="200px" :src="props.imgSrc" cover></v-img>

    <v-card-title>
      <a
        class="text-decoration-none"
        v-if="props.url"
        :href="props.url"
        target="_blank"
        rel="noopener noreferrer"
      >
        {{ props.title }}
      </a>
      <span v-else>{{ props.title }}</span>
    </v-card-title>

    <v-card-subtitle> {{ props.subtitle }} </v-card-subtitle>

    <v-card-actions>
      <v-btn color="orange-lighten-2" :text="$t('projects.button.explore')"></v-btn>

      <v-spacer></v-spacer>

      <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          {{ props.text }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>
