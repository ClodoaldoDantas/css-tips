import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import CustomBulletList from './CustomBulletList.vue'

describe('<CustomBulletList />', () => {
  it('should render items correctly', () => {
    const wrapper = mount(CustomBulletList, {
      props: {
        items: ['Item One', 'Item Two', 'Item Three'],
      },
    })

    expect(wrapper.findAll('li')).toHaveLength(3)
  })
})
