import { describe, test, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import NavBar from '../NavBar.vue'

beforeEach(() => {
  setActivePinia(createPinia())
})

describe('tests for NavBar component', () => {
  test('should mount NavBar', () => {
    const wrapper = mount({
      template: `
          <v-app>
            <NavBar />
          </v-app>
        `,
      components: { NavBar },
    })

    expect(wrapper.exists()).toBe(true)
  })
})
