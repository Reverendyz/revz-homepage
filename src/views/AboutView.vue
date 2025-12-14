<script setup lang="ts">
const hobbies = [
  { icon: 'mdi-code-braces', label: 'Programming challenges' },
  { icon: 'mdi-music', label: 'Drumming and music production' },
  { icon: 'mdi-hiking', label: 'Hiking and outdoor adventures' },
  { icon: 'mdi-bike-fast', label: 'Riding bike around the city' },
  { icon: 'mdi-dumbbell', label: 'Gym and fitness' },
  { icon: 'mdi-gamepad-variant', label: 'Gaming' },
]
const degrees = [
  { icon: 'mdi-laptop', label: "Bachelor's Degree in Information Systems - FESPPR (2021)" },
  { icon: 'mdi-security', label: 'Postgraduate in Cybersecurity - PUC-PR (2025)' },
]
</script>
<template>
  <v-container class="d-flex justify-center">
    <v-row>
      <v-col cols="12" class="text-center mb-4 mb-sm-8 px-2 px-sm-4">
        <h1 class="text-h4 text-sm-h3 text-md-h2 text-lg-h1 font-weight-black mb-3 mb-sm-4">
          About Me
        </h1>
        <div class="text-body-2 text-sm-body-1 text-md-h6 text-lg-h5 font-weight-medium">
          My name Felipe Santos A.K.A Revz, a passionate DevSecOps engineer with a strong background
          in software development, cybersecurity, software architecture and IT operations.
        </div>
      </v-col>
      <v-col cols="12" sm="6" md="4" class="mt-4">
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-title class="text-orange flex-column flex-sm-row">
              <span class="text-h5 text-sm-h4 text-md-h3 text-center">Hobbies</span>
            </v-expansion-panel-title>
            <v-expansion-panel-text
              class="text-subtitle-1"
              v-for="hobby in hobbies"
              :key="hobby.label"
              prepend-icon="hobby.icon"
              ><v-icon class="mr-4 text-left">{{ hobby.icon }}</v-icon
              >{{ hobby.label }}
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
      <v-col cols="12" sm="6" md="4" class="mt-4">
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-title class="text-orange flex-column flex-sm-row">
              <span class="text-h5 text-sm-h4 text-md-h3 text-center">Why "Revz"?</span>
            </v-expansion-panel-title>
            <v-expansion-panel-text class="text-subtitle-1">
              Back in 2011, when I was diving into the world of online gaming, I had a competitive
              team called Like A Boss - tag LaB. I didn't had a proper name to match the team tag,
              so I thought about my favorite band at the time, Avenged Sevenfold, and my favorite
              member, The Rev. Thus, I decided to go with LaB x ReverendYz as a tribute to him. Over
              time, ReverendYz got shortened to Revz, and it stuck with me ever since.
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
      <v-col cols="12" sm="12" md="4" class="mt-4">
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-title class="text-orange flex-column flex-sm-row">
              <span class="text-h5 text-sm-h4 text-md-h3 text-center">Education</span>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-expansion-panel-text
                class="text-subtitle-1"
                v-for="degree in degrees"
                :key="degree.label"
              >
                <v-icon class="mr-4 text-left">{{ degree.icon }}</v-icon>
                {{ degree.label }}
              </v-expansion-panel-text>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
      <v-col class="text-center"> </v-col>
    </v-row>
  </v-container>
</template>
