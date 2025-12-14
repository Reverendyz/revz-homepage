import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import App from '@/App.vue'
import { beforeEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useThemeStore } from '@/stores/theme'

beforeEach(() => {
  setActivePinia(createPinia())
})
describe('App', () => {
  test('should store dark theme to pinia', () => {
    const theme = useThemeStore()
    expect(theme.theme).toBe('dark')
  })
  test('should mount App', () => {
    const wrapper = mount(App)
    expect(wrapper.exists()).toBe(true)
  })
  test('should render router-view', () => {
    const wrapper = mount(App)
    expect(wrapper.find('router-view').exists()).toBe(true)
  })
})
