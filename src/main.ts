import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { i18n } from './i18n'

const app = createApp(App)

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'dark',
    themes: {
      light: {
        dark: false,
        colors: {
          background: '#FFFFFF',
          surface: '#FFFFFF',
        },
      },
      dark: {
        dark: true,
        colors: {
          background: '#12121200',
          surface: '#12121200',
        },
      },
    },
  },
})

app.use(vuetify)
app.use(createPinia())
app.use(i18n)
app.use(router)

app.mount('#app')
