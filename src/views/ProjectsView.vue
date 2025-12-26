<script lang="ts" setup>
import ProjectsCard from '@/components/ProjectsCard.vue'
const cards = [
  {
    id: 'website',
    imgSrc: 'https://avatars.githubusercontent.com/u/48569886?v=4',
    url: 'https://github.com/Reverendyz/reverendyz.github.io',
  },
  {
    id: 'dns-c',
    imgSrc: 'https://avatars.githubusercontent.com/u/48569886?v=4',
    url: 'https://github.com/Reverendyz/dns-c',
  },
  {
    id: 'blockchain-example',
    imgSrc: 'https://avatars.githubusercontent.com/u/48569886?v=4',
    url: 'https://github.com/Reverendyz/blockchain-example',
  },
  {
    id: 'adocli',
    imgSrc: 'https://avatars.githubusercontent.com/u/48569886?v=4',
    url: 'https://github.com/Reverendyz/adocli',
  },
]
</script>
<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" class="text-center hero">
        <h1 class="text-h4 text-sm-h3 text-md-h2 text-lg-h1 font-weight-black mb-4">
          {{ $t('projects.title') }}
        </h1>
        <div class="text-body-1 text-md-h6 text-lg-h5 font-weight-medium">
          {{ $t('projects.subtitle') }}
        </div>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col
        v-for="card in cards"
        :key="card.id"
        cols="6"
        md="4"
        class="text-center mb-4 mb-sm-8 px-2 px-sm-4"
      >
        <ProjectsCard
          :title="$t(`projects.cards.${card.id}.title`)"
          :subtitle="$t(`projects.cards.${card.id}.subtitle`)"
          :text="$t(`projects.cards.${card.id}.text`)"
          :img-src="card.imgSrc"
          :url="card.url"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.hero {
  min-height: 260px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
