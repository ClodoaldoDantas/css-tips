import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Center from './Center.vue'

describe('<Center />', () => {
  it.each([
    { expected: 'position' },
    { expected: 'flex' },
    { expected: 'grid' },
  ])(
    'should render correctly with method property equal to $expected',
    ({ expected }) => {
      const wrapper = mount(Center, {
        props: {
          method: expected as any,
        },
      })

      expect(wrapper.classes()).toContain(expected)
    }
  )
})
