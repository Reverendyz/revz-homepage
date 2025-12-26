import { createI18n } from 'vue-i18n'
import enUS from '@/locales/en-US.json'
import ptBR from '@/locales/pt-BR.json'

export const i18n = createI18n({
  locale: 'pt',
  legacy: false,
  fallbackLocale: 'en',
  messages: {
    en: enUS,
    pt: ptBR,
  },
})
